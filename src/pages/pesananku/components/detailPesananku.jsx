import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import moment from "moment-timezone";
import Spinner from "../../../components/loadingdata";

const Detail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState(null);

    const setLocal = (tanggal) => {
        const wibDateTime = moment.utc(tanggal).tz("Asia/Jakarta");
        return wibDateTime.format("YYYY-MM-DD HH:mm:ss");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/proxy/pesanan/${id}`);
                
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    const jumlah = (harga, qty, diskon) => {
        const totalharga = harga * qty;
        return totalharga;
    };

    const rupiah = (number) => {
        const formatter = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        });
        return formatter.format(number);
    };

    const orders = Array.isArray(data) ? data : [data];

    useEffect(() => {
        if (orders.length > 0) {
            localStorage.setItem("orders", JSON.stringify(orders));
        }
    }, [orders]);

    if (data === null) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner />
            </div>
        ); 
    }

    return (
        <div className="self-stretch my-10 flex flex-row items-start justify-center py-0 pr-5 pl-[27px] box-border max-w-full text-left text-base text-goldenrod-100 font-body-large">
            <div className="w-1/2 lg:w-full flex flex-col items-start justify-start gap-[14px] max-w-full">
                <div className="w-full flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                    <a className="[text-decoration:none] text-center relative leading-[24px] text-[inherit] inline-block shrink-0">
                        Rincian Riwayat Pesanan
                    </a>
                </div>
                {orders.map((e, index) => (
                    <div key={index} className="self-stretch rounded-lg box-border flex flex-col items-center justify-start py-7 px-5 gap-[47px] max-w-full text-black border-[1px] border-solid border-gray mq450:pt-5 mq450:pb-5 mq450:box-border mq725:gap-[23px]">
                        <div className="w-[630px] flex flex-col items-start justify-start gap-[20px] max-w-full">
                            <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                                <div className="flex-1 rounded-lg box-border flex flex-row items-start justify-start pt-px px-5 pb-0 max-w-full border-[1px] border-solid border-gray">
                                    <p>Alamat: {e.alamat}</p>
                                </div>
                            </div>
                            <div className="self-stretch rounded-lg box-border flex flex-col w-full items-start py-[18px] px-5 gap-[10px] max-w-full border-[1px] border-solid border-gray">
                                {e.items.length > 0 ? (
                                    e.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="w-full flex justify-between">
                                            <h3 className="text-center w-1/3">{item.namaproduk || 'No product name available'}</h3>
                                            <h3 className="text-center w-1/3">X {item.jumlah || '0'}</h3>
                                            <h3 className="text-center w-1/3">{rupiah(jumlah(item.harga, item.jumlah, item.diskon)) || 'No price available'}</h3>
                                        </div>
                                    ))
                                ) : (
                                    <div className="w-full text-center">No items available</div>
                                )}
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                                <div className="flex-1 rounded-lg box-border flex flex-row items-start justify-start pt-px px-5 pb-0 max-w-full border-[1px] border-solid border-gray">
                                    <p>Total Pemesanan: {rupiah(e.total)}</p>
                                </div>
                            </div>
                            <div className="self-stretch rounded-lg flex flex-col flex-wrap items-start justify-start py-[18px] px-5 gap-[10px] text-right border-[1px] border-solid border-gray">
                                <p>Status Pembayaran: <span className={e.statusbayar === "success" ? "text-green-500" : "text-red-600"}>{e.statusbayar}</span></p>
                                <p>Status Diterima: <span className={e.statusditerima === "processing" ? "text-yellow-500" : "text-green-500"}>{e.statusditerima}</span></p>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                                <div className="flex-1 rounded-lg box-border flex flex-col items-start justify-start pt-px px-5 pb-0 max-w-full border-[1px] border-solid border-gray">
                                    <p>Tanggal Pesan: {setLocal(e.tglorder)}</p>
                                    <p>Lokasi : <a className="decoration-transparent" href="https://maps.app.goo.gl/S7JPW7U347UfxHqm6">Maulia Bakery</a></p>
                                </div>
                            </div>
                            <div className="w-[630px] flex flex-row items-start justify-end py-0 pr-px box-border max-w-full">
                                <div className="flex justify-between flex-wrap w-full">
                                    <button 
                                        className="cursor-pointer py-4 px-5 bg-main-color self-stretch rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-main-color hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100"
                                        onClick={()=>navigate("/detailorderpesanan")}
                                    >
                                        <div className="relative text-base leading-[24px] font-body-large text-white text-left">
                                            Bukti Transaksi
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Detail;
