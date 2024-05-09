import Card from "./Card1";
import { useState,useEffect } from "react";
import axios from "axios";

const FrameComponent5 = () => {
  const [data, setData] = useState([]);
  const api_link = process.env.REACT_APP_API_SECRET
  const getUserData = async () => {
    try {
      const res = await axios.get(`${api_link}getdata`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (res.status === 401 || !res.data) {
        console.log("error");
      } else {
        setData(res.data.getBarang);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const rupiah = (number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(number);
  };


  useEffect(() => {
    getUserData();
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-6 pr-[78px] pl-20 box-border max-w-full text-left text-21xl text-black font-body-large mq750:pl-10 mq750:pr-[39px] mq750:box-border">
      <div className="flex-1 flex flex-col items-end justify-start gap-[86px] max-w-full mq750:gap-[43px] mq450:gap-[21px]">
        <div className="w-[806px] flex flex-col items-end justify-start gap-[60px] max-w-full mq1050:gap-[30px]">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="w-[328px] flex flex-col items-start justify-start gap-[10px] max-w-full">
              <h1 className="m-0 text-center relative text-inherit leading-[52px] capitalize font-semibold font-inherit mq450:text-5xl mq450:leading-[31px] mq1050:text-13xl mq1050:leading-[42px]">
                Jenis - Jenis Kue
              </h1>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <div className="h-[3px] w-[155px] relative box-border border-t-[3px] border-solid border-main-color" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-0 pr-0.5 pl-0 box-border max-w-full text-5xl">
          <div className="w-full overflow-x-auto shrink-0 flex flex-row flex-wrap items-center justify-center gap-[40px_14.7px] min-h-[1028px] max-w-full">
          <section className="flex flex-row items-start justify-end py-0 px-0.5 box-border max-w-full text-left text-5xl text-black font-body-large">
            <div className="w-screen overflow-x-auto  flex lg:flex-row flex-row   items-start justify-center gap-[20px] max-w-full flex-wrap">
              {data.map((e,index)=>(
                <Card
                key={index}
                porkSataygrilledPork={e.imgpath}
                title={e.fname}
                description={e.deskripsi}
                price={rupiah(e.harga)}
              />
              ))}
            </div>
          </section>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
