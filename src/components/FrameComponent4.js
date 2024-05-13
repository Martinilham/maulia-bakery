import {  useNavigate } from "react-router-dom";
const FrameComponent4 = () => {

  const navigate = useNavigate();


  return (
    <section className="w-full flex flex-row items-start justify-end pt-0 px-[65px] pb-[91px] box-border max-w-full text-left text-21xl text-black font-body-large lg:pl-8 lg:pr-8 lg:box-border mq750:pb-[59px] mq750:box-border">
      <div className="flex-1  flex flex-col items-end justify-start  max-w-full mq750:gap-[43px] mq450:gap-[21px]">
        <div className="w-full flex m-auto flex-col items-end justify-start gap-[60px] max-w-full mq1050:gap-[30px]">
          <div className="self-stretch flex m-auto flex-row items-start justify-start max-w-full">
            <div className="w-full m-auto flex flex-col items-start justify-start gap-[10px] max-w-full">
              <h1 className="m-0 lg:text-center lg:m-auto text-center relative text-inherit  capitalize font-semibold font-inherit mq450:text-5xl mq450:leading-[31px] mq1050:text-13xl mq1050:leading-[42px]">
               Diskon Spesial
              </h1>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <div className="h-[3px] w-[155px] relative box-border border-t-[3px] border-solid mb-20 border-main-color" />
              </div>
            </div>
          </div>
       
        
      </div>
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] lg:flex-wrap lg:justify-center">
          <div className="h-[389px] w-[452px] shadow-[36px_35px_4px_rgba(0,_0,_0,_0.25)] bg-gray1 flex flex-row items-start justify-start py-[57px] px-[71px] box-border min-w-[452px] max-w-full lg:flex-1 mq750:min-w-full mq450:py-[37px] mq450:px-[35px] mq450:box-border">
            <div className="h-[389px] w-[452px] relative shadow-[36px_35px_4px_rgba(0,_0,_0,_0.25)] bg-gray1 hidden max-w-full" />
            <img
              className="h-[266px] flex-1 relative max-w-full overflow-hidden object-cover z-[1] lg:flex-1"
              loading="lazy"
              alt=""
              src="/image-44@2x.png"
            />
          </div>
          <div className="w-[579px] flex flex-col items-start justify-end pt-0 px-0 pb-[26px] box-border min-w-[579px] max-w-full lg:flex-1 mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[36px] max-w-full mq750:gap-[18px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[52px] capitalize font-inherit mq450:text-5xl mq450:leading-[31px] mq1050:text-13xl mq1050:leading-[42px]">
                <p className="m-0">
                  <span className="font-semibold font-body-large text-black">{`Dapatkan `}</span>
                  <b className="font-body-large text-main-color">50%</b>
                  <span className="font-semibold">{` Promo Spesial `}</span>
                </p>
                <p className="m-0 font-semibold">Ramadan</p>
              </h1>
              <div className="w-[481px] relative text-base leading-[24px] inline-block max-w-full">
                Anda bisa mendapatkan diskon hingga 50% untuk pemesanan kue
                kering dan basah spesial ramadan.
              </div>
              <button 
              className="cursor-pointer py-4 px-[23px] bg-main-color rounded-lg flex flex-row items-start justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-main-color hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100"
              onClick={()=> navigate("/pesan")}
              >
                <div className="relative text-base leading-[24px] font-body-large text-white text-left inline-block min-w-[122px]">
                  Pesan Sekarang
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/shopping-cart-1.svg"
                />
              </button>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default FrameComponent4;
