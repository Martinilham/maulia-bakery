const Footer = () => {
  return (
    <footer className="self-stretch bg-goldenrod-200 box-border flex flex-col items-start justify-start pt-[137px] px-20 pb-[21px] gap-[86.5px] max-w-full text-left text-13xl text-black font-body-large border-t-[1px] border-solid border-black mq750:gap-[43px] mq750:pt-[89px] mq750:px-10 mq750:pb-5 mq750:box-border mq450:gap-[22px]">
      <div className="w-[1440px] h-[492px] relative bg-goldenrod-200 box-border hidden max-w-full border-t-[1px] border-solid border-black" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full mq750:gap-[19px]">
        <div className="w-[1242px] flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
          <div className="w-[252px] flex flex-col items-start justify-start gap-[49px] text-goldenrod-100 font-sniglet mq450:gap-[24px]">
            <h1 className="m-0 relative text-inherit font-extrabold font-inherit z-[1] mq450:text-lgi mq1050:text-7xl">
              MauliaBakery
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl text-black font-body-large">
              <div className="relative leading-[40px] capitalize font-medium z-[1] mq450:text-base mq450:leading-[32px]">
                Metode Pembayaran
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[1]">
                <img
                  className="self-stretch w-[57px] relative max-h-full object-cover min-h-[38px]"
                  alt=""
                  src="/image-45@2x.png"
                />
                <img
                  className="self-stretch w-14 relative max-h-full object-cover min-h-[38px]"
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className="h-9 flex-1 relative" />
              </div>
            </div>
          </div>
          <div className="w-[197px] flex flex-col items-start justify-start py-0 pr-[38px] pl-0 box-border gap-[16px]">
            <h1 className="m-0 relative text-inherit leading-[40px] capitalize font-medium font-inherit inline-block min-w-[107px] z-[1] mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
              Kontak
            </h1>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
              <img
                className="h-9 w-9 relative object-cover min-h-[36px]"
                loading="lazy"
                alt=""
                src="/image-36@2x.png"
              />
              <img
                className="h-[35px] w-[35px] relative object-cover"
                loading="lazy"
                alt=""
                src="/image-37@2x.png"
              />
              <img
                className="h-9 w-9 relative object-cover min-h-[36px]"
                loading="lazy"
                alt=""
                src="/image-38@2x.png"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[54px] max-w-full text-base mq750:flex-wrap mq750:gap-[27px]">
            <div className="flex flex-col items-start justify-start gap-[16px] min-w-[256px] mq750:flex-1">
              <h1 className="m-0 relative text-13xl leading-[40px] capitalize font-medium font-inherit inline-block min-w-[124px] z-[1] mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
                Support
              </h1>
              <div className="relative leading-[24px] inline-block min-w-[53px] z-[1]">
                Kontak
              </div>
              <div className="relative leading-[24px] z-[1]">
                <span>Whatsapp : (+62) - 85235675699</span>
              </div>
            </div>
            <div className="w-[217px] flex flex-col items-start justify-start gap-[16px] min-w-[217px] text-13xl mq750:flex-1">
              <h1 className="m-0 relative text-inherit leading-[40px] capitalize font-medium font-inherit inline-block min-w-[99px] z-[1] mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
                Lokasi
              </h1>
              <div className="self-stretch relative text-base leading-[24px] z-[1]">
                RT/RW 02/02 Desa Sukorejo Kec.Tugu Kab. Trenggalek Jawa Timur
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0.5px] relative box-border z-[1] border-t-[0.5px] border-solid border-gray" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[49px] text-base mq450:pl-5 mq450:box-border">
        <div className="relative leading-[24px] z-[1]">
          @Powered by MauliyaBakery
        </div>
      </div>
    </footer>
  );
};

export default Footer;
