import { useState, useEffect } from "react";
import Items from "./Items";
import {jwtDecode as jwt_decode} from 'jwt-decode';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderInformation = () => {
  const [pesanan, setPesanan] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);
  const [dataClient, setDataClient] = useState({});
  const [token, setToken] = useState("");
  const navigate = useNavigate()

  const generateOrderId = () => {
    const timestamp = Date.now();
    const randomSegment = Math.random().toString(36).substr(2, 9);
    return `ORD-${timestamp}-${randomSegment}`;
  };

  useEffect(() => {
    const storedPesanan = localStorage.getItem("pesanan");
    if (storedPesanan) {
      setPesanan(JSON.parse(storedPesanan));
    }
  }, []);

  useEffect(() => {
    const total = pesanan.reduce((acc, item) => acc + item.qty * item.harga, 0);
    setTotalOrder(total);
  }, [pesanan]);

  useEffect(() => {
    const tokenNow = localStorage.getItem("token");
    if (tokenNow) {
      const decodedToken = jwt_decode(tokenNow);
      setDataClient(decodedToken);
    } else {
      console.log("Token tidak tersedia. Silakan masuk untuk melihat profil.");
    }
  }, []);
  const rupiah = (number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(number);
  };

  

  const pesan = {
    idpemesan: dataClient.id || "",
    namapemesan: dataClient.userName || "",
    items: pesanan.map(item => ({
      produk_id: item.id,
      namaproduk: item.nama,
      kategori: item.kategori,
      harga: item.harga,
      jumlah: item.qty
    })),
    alamat: dataClient.alamatClient || "",
    notlpn: dataClient.notlp || "",
    total: totalOrder,
    statusbayar: "pending",
    statusditerima: "processing",
    tglorder: new Date().toISOString()
  };


  const jumlah = (harga, qty) => {
    return harga * qty;
  };
  const api_link = process.env.REACT_APP_API_SECRET
  const pembayaran = async (e) => {
    e.preventDefault();
    if (!dataClient || !pesanan.length) {
      console.error("Data client atau pesanan tidak tersedia.");
      return;
    }

    

    const pembayaranONLINE = {
      orderId: generateOrderId(),
      total: totalOrder
    };

    try {
      const response = await axios.post(
        `${api_link}api/paymnet/pembayaran-online`,
        pembayaranONLINE,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      setToken(response.data.token);
    } catch (error) {
      console.error('Error initiating payment:', error.response ? error.response.data : error.message);
    }

    
          
  };

  useEffect(() => {
    if (token) {
      window.snap.pay(token, {
        onSuccess: async (result) => {
          const pesan = {
            idpemesan: dataClient.id,
            namapemesan: dataClient.userName,
            items: 
              pesanan.map(item => ({
              produk_id: item.id,
              namaproduk: item.fname,
              harga: item.harga,
              jumlah: item.qty
            })),
            alamat: dataClient.alamatClient,
            notlpn: dataClient.notlp,
            total: totalOrder,
            statusbayar: "success",
            statusditerima: "processing"
          };
        

          const response = await axios.post("http://localhost:5000/pesanan",pesan,
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
          )

          navigate("/pesan")
          setToken("")
          
        },
        onPending: (result) => {
          
        },
        onError: (error) => {
          console.log(error);
        },
        onClose: () => {
          console.log("anda membatalkan");
        }
      });
      
    }
   
  }, [token]);

  useEffect(() => {
    const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransUrl;
    scriptTag.setAttribute("data-client-key", "SB-Mid-client-cAFD0sSoOSoeyfA3");
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <div className="w-[1294px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-goldenrod-100 font-body-large">
      <div className="w-[678px] flex flex-col items-start justify-start gap-[23px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
          <div className="relative leading-[24px]">{`Informasi Pesanan Anda `}</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px] text-sm text-black">
            <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-[18px] px-5 border-[1px] border-solid border-gray">
              <div className="relative leading-[20px]">
                <p className="m-0">Nama  : {dataClient.userName}</p>
                <p className="m-0">{`no tlp : ${dataClient.notlp}`}</p>
                <p className="m-0">{`Alamat : ${dataClient.alamatClient}`}</p>
              </div>
            </div>
            <div className="relative text-base leading-[24px] text-goldenrod-100">{`Detail Pesanan Anda `}</div>
          </div>
        </div>
        <div className=" self-stretch rounded-lg box-border flex flex-col items-center justify-start py-[22px] px-[23px] gap-[48px] max-w-full text-black border-[1px] border-solid border-gray mq750:gap-[24px] mq750:pt-5 mq750:pb-5 mq750:box-border">
          {pesanan.map((item, index) => (
            <Items
              key={index}
              baychha={item.imgpath}
              nastar={item.fname}
              toples={item.qty}
              rp18000000={jumlah(item.harga, item.qty)}
            />
          ))}
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch rounded-lg box-border flex flex-row flex-wrap items-center justify-start py-[18px] pr-[17px] pl-[19px] gap-[10px] max-w-full border-[1px] border-solid border-gray">
              <div className="relative leading-[24px]">{`Total Pesanan Anda : ${rupiah(totalOrder)}`}</div>
            </div>
          </div>
          <button
            className="cursor-pointer py-4 px-5 bg-main-color self-stretch rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-main-color hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100"
            onClick={pembayaran}
          >
            <div className="relative text-base leading-[24px] font-body-large text-white text-left">
              Lakukan Pembayaran
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
