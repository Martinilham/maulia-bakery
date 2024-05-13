import { useState,useEffect } from "react";
import axios from "axios";

const FormReview = () => {
  const [nama,setnama] = useState()
  const [review,setReview] = useState()

  const api_link = process.env.REACT_APP_API_SECRET
  const handleReview =  async (e) => {
    e.preventDefault();
    try {
        await axios
        .post(`${api_link}review`, { nama, review })
        alert('Review berhasil di kirim')
    } catch (error) {
        alert('Review gagal di kirim')
    }
  }

  return (
    <div className="w-[1402px] flex flex-row items-start justify-center pt-0 px-5 pb-1.5 box-border max-w-full text-left text-13xl text-black font-body-large">
      <div className="w-[678px] rounded-lg box-border flex flex-col items-center justify-start py-[22px] px-[23px] gap-[48px] max-w-full border-[1px] border-solid border-gray mq750:gap-[24px] mq750:pt-5 mq750:pb-5 mq750:box-border">
        <h1 className="m-0 relative text-inherit leading-[40px] capitalize font-medium font-inherit whitespace-nowrap inline-block min-w-[110px] mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">{`Review  `}</h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <h1 className="m-0 relative text-inherit leading-[40px] capitalize font-medium font-inherit mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
            Username
          </h1>
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-[18px] px-5 border-[1px] border-solid border-gray">
            <input
              className="w-[198px] [border:none] [outline:none] font-body-large text-base bg-[transparent] h-6 relative leading-[24px] text-black text-left inline-block p-0"
              placeholder="Masukkan username anda"
              type="text"
              value={nama}
              onChange={(e)=> setnama(e.target.value)}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <h1 className="m-0 relative text-inherit leading-[40px] capitalize font-medium font-inherit inline-block min-w-[110px] mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
            Review
          </h1>
          <textarea
            className="bg-[transparent] h-32 w-auto [outline:none] self-stretch rounded-lg box-border flex flex-row items-start justify-start pt-5 px-5 font-body-large text-base text-black border-[1px] border-solid border-gray"
            placeholder="Masukkan review anda mengenai kue kami"
            rows={6}
            cols={32}
            value={review}
            onChange={(e)=> setReview(e.target.value)}
          />
        </div>
        <button className="cursor-pointer py-4 px-5 bg-main-color self-stretch rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-main-color hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100"
          type="submit"
          onClick={handleReview}
        >
          <div className="relative text-base leading-[24px] font-body-large text-white text-left inline-block min-w-[42px]">{`Submit `}</div>
        </button>
      </div>
    </div>
  );
};

export default FormReview;
