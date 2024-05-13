import axios from "axios";
import FrameComponent2 from "./FrameComponent2";
import { useState,useEffect } from "react";
const ShowReview = () => {
  const [data,setData] = useState([])

  const api_link = process.env.REACT_APP_API_SECRET
  const getReview = async ()=>{
    const response = await axios.get(`${api_link}review`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setData(response.data)
  }

  useEffect(()=>{
    getReview()
  },[])

  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[17px] box-border max-w-full text-left text-5xl text-black font-body-large mq750:pl-10 mq750:pr-10 mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[33px] max-w-full mq750:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full lg:flex-wrap mq750:gap-[28px]">
          
            {data.map((e)=>(
              <>
              <div className="w-96 rounded-lg box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[18px] min-w-[565px] max-w-full border-[1px] border-solid border-gray lg:flex-1 mq750:min-w-full">
                <FrameComponent2
              andiaJorida={e.nama}
              myExperienceAtYourRestaur={e.review}
            />
              </div>
              </>
            ))}
           
            
          
        </div>
      </div>
      
    </div>
  );
};

export default ShowReview;
