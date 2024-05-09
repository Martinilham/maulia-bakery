const MainLayout = () => {
  return (
    <header className="w-[1237px] flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-21xl text-black font-body-large mq650:gap-[16px]">
      <div className="w-[1190px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[328px] flex flex-col items-start justify-start gap-[10px] max-w-full">
          <h1 className="m-0 relative text-inherit leading-[52px] capitalize font-semibold font-inherit whitespace-nowrap">
            Jenis - Jenis Kue
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="h-[3px] w-[155px] relative box-border border-t-[3px] border-solid border-main-color" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[3px] max-w-full text-base">
      
      </div>
    </header>
  );
};

export default MainLayout;
