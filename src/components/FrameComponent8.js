const FrameComponent8 = () => {
  return (
    <header className="w-[1416px] flex flex-row items-start justify-end pt-0 px-14 pb-[59px] box-border max-w-full text-left text-13xl text-black font-sniglet lg:pl-7 lg:pr-7 lg:box-border">
      <div className="flex-1 flex flex-row items-center justify-between py-0 px-[46px] box-border max-w-full gap-[20px] lg:pl-[23px] lg:pr-[23px] lg:box-border">
        <h1 className="m-0 relative text-inherit font-extrabold font-inherit whitespace-nowrap">
          MauliaBakery
        </h1>
        <nav className="m-0 flex flex-row items-start justify-start gap-[24px] text-left text-base text-black font-body-large mq750:hidden">
          <div className="relative leading-[24px] font-medium inline-block min-w-[46px]">
            Home
          </div>
          <div className="relative leading-[24px] font-medium inline-block min-w-[47px]">
            About
          </div>
          <div className="relative leading-[24px] font-medium inline-block min-w-[84px] whitespace-nowrap">
            Contact us
          </div>
        </nav>
        <div className="w-[206px] flex flex-row items-center justify-start gap-[24px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/search.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/shopping-cart.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/user-interfacenotification.svg"
          />
          <button className="cursor-pointer py-1.5 px-[9px] bg-[transparent] flex-1 rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-main-color hover:bg-darkgoldenrod-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100">
            <div className="relative text-base leading-[24px] font-body-large text-black text-left inline-block min-w-[42px]">
              Login
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent8;
