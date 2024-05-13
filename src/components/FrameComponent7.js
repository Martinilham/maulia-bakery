import { useNavigate } from "react-router-dom";

const FrameComponent7 = () =>  {
  const navigate = useNavigate()
  
  return (
    <section className="w-full flex flex-row items-start justify-end pt-0 px-14 pb-[35px] box-border max-w-full text-left text-29xl text-black font-body-large lg:pl-7 lg:pr-7 lg:box-border">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[179px] max-w-full lg:gap-[89px] mq750:gap-[45px] mq450:gap-[22px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[351px] max-w-full mq750:min-w-full">
          <div className="self-stretch h-[540px] relative">
            <div className="absolute top-[0px] left-[48.4px] w-[240.4px] h-[466.3px] hidden" />
            <div className="absolute top-[75.5px] left-[0.3px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] w-[69.7px] h-[89.5px] z-[1]" />
            <div className="absolute top-[269.5px] left-[6.5px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] w-[63.5px] h-[111px] z-[1]" />
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-full h-full object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/image-43@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[355px] max-w-full mq750:gap-[18px] mq750:min-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[150%] capitalize font-bold font-inherit mq450:text-10xl mq450:leading-[43px] mq1050:text-19xl mq1050:leading-[58px]">
            <span>{`Senang dengan Kue yang `}</span>
            <span className="text-goldenrod-100">lezat</span>
            <span>{` dan dapatkan `}</span>
            <span className="text-goldenrod-100">Cita Rasa baru</span>
            <span>{` dengan `}</span>
            <span className="text-goldenrod-100">Kue Lokal</span>
          </h1>
          <div className="w-[519px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full text-base">
            <div className="flex-1 relative leading-[24px] inline-block max-w-full">
              Menjelajahi kue kering dan basah dengan transisi berbeda dari
              seluruh daerah khususnya dari Pulau Jawa yang bisa anda coba pesan
              di kami dan dapatkan harga yang bagus dari kami dan kami pasti
              akan memberikan pelayanan terbaik kepada pelanggan kami
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[5px]">
            <button 
            type="button"
            className="cursor-pointer py-4 px-[23px] bg-main-color rounded-lg flex flex-row items-start justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-main-color hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100"
            onClick={()=>navigate('/login')}>
              <div className="relative text-base leading-[24px] font-body-large text-white text-left inline-block min-w-[80px]">
                Pesan Kue
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
    </section>
  );
};

export default FrameComponent7;
