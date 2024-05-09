const FrameComponent3 = () => {
  return (
    <section className="w-[1389px] flex flex-row items-start justify-center pt-0 px-5 pb-[72px] box-border max-w-full text-left text-21xl text-black font-body-large mq750:pb-[47px] mq750:box-border">
      <div className="w-[1131px] flex flex-col items-start justify-start gap-[108px] max-w-full lg:gap-[54px] mq750:gap-[27px]">
        <div className="w-[1081px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[181px] flex flex-col items-start justify-start gap-[10px]">
            <h1 className="m-0 relative text-inherit leading-[52px] capitalize font-semibold font-inherit mq450:text-5xl mq450:leading-[31px] mq1050:text-13xl mq1050:leading-[42px]">
              Kue kami
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[14.5px]">
              <div className="h-[3px] flex-1 relative box-border border-t-[3px] border-solid border-main-color" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap mq1050:justify-center">
          <div className="w-[489px] flex flex-col items-start justify-start pt-[37px] px-0 pb-0 box-border min-w-[489px] max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full">
              <h1 className="m-0 relative text-inherit leading-[52px] capitalize font-semibold font-inherit mq450:text-5xl mq450:leading-[31px] mq1050:text-13xl mq1050:leading-[42px]">
                Manis dan Lezat
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2 box-border max-w-full text-base">
                <div className="flex-1 relative leading-[24px] inline-block max-w-full">{`Disetiap gigitan memiliki cita rasa yang lezat, karna rasa manis dan gurih dari setiap kue. `}</div>
              </div>
            </div>
          </div>
          <img
            className="w-[342px] relative max-h-full object-cover max-w-full mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/image-42@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
