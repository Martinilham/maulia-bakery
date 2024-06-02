import { useState ,useEffect} from "react";
import axios from "axios";
import moment from "moment-timezone";
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const RiwayatCard = () => {
  const [riwayat,setRiwayat] = useState([])
  const [client,setClient] = useState([])
  const navigate = useNavigate()

  const setLocal = (tanggal) => {
    const wibDateTime = moment.utc(tanggal).tz("Asia/Jakarta");
    return wibDateTime.format("YYYY-MM-DD HH:mm:ss");
  };

  const api_link = process.env.REACT_APP_API_SECRET;

  const riwayatpesan = async () => {
    try {
      const respon = await axios.get(`/api/proxy/pesanan`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (respon.status === 200) {
        setRiwayat(respon.data);
      } else {
        console.error("Error: ", respon.status);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    riwayatpesan();
    localStorage.removeItem("orders")
  }, []);

  useEffect(() => {
    const tokenNow = localStorage.getItem("token");
    if (tokenNow) {
      const decodedToken = jwt_decode(tokenNow);
      setClient(decodedToken);
    } else {
      console.log("Token tidak tersedia. Silakan masuk untuk melihat profil.");
    }
  }, []);

  const hubungi = ()=>{
    window.open("https://wa.me/087851601396", "_blank");
  }


  return (
    <div
      className="my-20 self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[27px] box-border max-w-full text-left text-base text-goldenrod-100 font-body-large"
    >
      <div className="w-1/2 lg:w-full flex flex-col items-start justify-start gap-[14px] max-w-full">
        <div className="w-full flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <a className="[text-decoration:none] text-center relative leading-[24px] text-[inherit] inline-block shrink-0">
            Riwayat Pesanan
          </a>
        </div>
        {riwayat
              .filter((e) => e.notlpn === client.notlp)
              .map((e) => (

            <>
        <div className="self-stretch rounded-lg box-border flex flex-col items-center justify-start py-7 px-5 gap-[47px] max-w-full text-black border-[1px] border-solid border-gray mq450:pt-5 mq450:pb-5 mq450:box-border mq725:gap-[23px]">
          <div className="w-[630px] flex flex-col items-start justify-start gap-[20px] max-w-full">

                <div className="self-stretch rounded-lg box-border flex flex-row flex-wrap items-start justify-start py-[18px] px-5 gap-[10px] max-w-full border-[1px] border-solid border-gray">
                <h3 className="text-center" >Tanggal Pesan: {setLocal(e.tglorder)}</h3>
              </div>
              <div className="self-stretch rounded-lg flex flex-col flex-wrap items-start justify-start py-[18px] px-5 gap-[10px] text-right border-[1px] border-solid border-gray">
              <p>Status Pembayaran: <span className={e.statusbayar == "success"? 
                "text-green-500": "text-red-600"
              }>{e.statusbayar}</span></p>
              <p>Status Diterima: <span className={e.statusditerima == "processing"? 
                "text-yellow-500": "text-green-500"
              }>{e.statusditerima}</span></p>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                <div className="flex-1 rounded-lg box-border flex flex-row items-start justify-start pt-px px-5 pb-0 max-w-full border-[1px] border-solid border-gray">
                  <p>Tanggal Pesan: {setLocal(e.tglorder)}</p>
                </div>
              </div>

            <div className="w-[630px] flex flex-row items-start justify-end py-0 pr-px pl-[5px] box-border max-w-full">
            <div className="flex justify-between flex-wrap w-full">
            <button
              className="cursor-pointer left-full py-4 px-5 bg-main-color self-stretch rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-main-color hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100"
              onClick={()=>navigate(`/detailpesananku/${e._id}`)}
            >
              <div className="relative text-base leading-[24px] font-body-large text-white text-left"
                
              >

                Detail
              </div>
            </button>
            <button
              className="cursor-pointer py-4 px-5 bg-main-color self-stretch rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-main-color hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100"
              onClick={()=>hubungi()}
            >
              
              <div className="relative text-base leading-[24px] font-body-large text-white text-left">
                Hubungi
              </div>
              
            </button>
            </div>
            </div>
              
            
          </div>
        </div>
        </>
          )
        )}
      </div>
    </div>
  );
};

export default RiwayatCard;
