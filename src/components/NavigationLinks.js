const NavigationLinks = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full text-left text-13xl text-goldenrod-100 font-body-large">
      <div className="flex-1 flex flex-row items-start justify-start min-w-[786px] max-w-full mq1050:min-w-full">
        <h1 className="m-0 h-[52px] flex-1 relative text-inherit leading-[40px] capitalize font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">{`<-`}</h1>
        <div className="w-[859px] flex flex-col items-start justify-start pt-[3.8px] px-0 pb-0 box-border max-w-full ml-[-1104px] text-black">
          <h1 className="m-0 self-stretch h-[32.6px] relative text-inherit leading-[40px] capitalize font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">{`Detail Pesanan `}</h1>
        </div>
      </div>
      <div className="w-[120px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/search.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/shopping-cart.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/user-interfacenotification.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationLinks;
