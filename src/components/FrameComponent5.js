import Card from "./Card2";

const FrameComponent5 = () => {
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
            <div className="w-[308px] rounded-lg bg-white box-border shrink-0 flex flex-row items-start justify-start py-[22px] px-[23px] border-[1px] border-solid border-gray mq750:pt-5 mq750:pb-5 mq750:box-border">
              <div className="flex-1 flex flex-col items-center justify-start relative gap-[24px]">
                <img
                  className="w-[260px] h-[260px] relative object-cover"
                  alt=""
                  src="/baychha1@2x.png"
                />
                <div className="self-stretch flex flex-col items-end justify-start gap-[12px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <h3 className="m-0 self-stretch relative text-inherit leading-[40px] capitalize font-medium font-inherit overflow-hidden text-ellipsis whitespace-nowrap mq450:text-lgi mq450:leading-[32px]">
                      Nastar
                    </h3>
                    <div className="w-[260px] relative text-base leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] max-h-[72px] [word-break:break-word]">
                      <p className="m-0">{`Nastar merupakan kue kering yang berisikan selai `}</p>
                      <p className="m-0">nanas.</p>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-center text-xl mq450:flex-wrap">
                    <div className="relative leading-[24px] font-medium whitespace-nowrap mq450:text-base mq450:leading-[19px]">
                      Rp.60.000,00
                    </div>
                    <img
                      className="h-8 w-8 relative rounded-2xl overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/add.svg"
                    />
                  </div>
                </div>
                <img
                  className="w-6 h-6 absolute !m-[0] top-[0px] left-[236px] overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/favorite-border.svg"
                />
              </div>
            </div>
            <Card
              porkSataygrilledPork="/pork-sataygrilled-pork1@2x.png"
              title="Kue Soes"
              description="Kue sus adalah kue berbentuk bundar dengan rongga berisi fla (vla)"
              price="Rp.5.000,00"
            />
            <Card
              porkSataygrilledPork="/papaya-salad1@2x.png"
              title="thumbprint"
              description="Thumbprint adalah kue kering yang dibentuk bulat lalu bagian tengahnya terdapat selai"
              price="Rp.50.000,00"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <Card
              porkSataygrilledPork="/pork-sataygrilled-pork-1@2x.png"
              title="Kue Semprit"
              description="Kue semprit berbentuk bulat dengan lekukan kue seperti bunga."
              price="Rp.40.000,00"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <Card
              porkSataygrilledPork="/baychha-11@2x.png"
              title="Kue Lumpur"
              description="Kue lumpur mempunyai teksturnya yang sangat lembut dan halus seperti lumpur"
              price="Rp.5.000,00"
              propDisplay="inline-block"
              propMinWidth="117px"
            />
            <div className="w-[308px] rounded-lg bg-white box-border shrink-0 flex flex-row items-start justify-start py-[22px] px-[23px] border-[1px] border-solid border-gray mq750:pt-5 mq750:pb-5 mq750:box-border">
              <div className="flex-1 flex flex-col items-center justify-start relative gap-[24px]">
                <img
                  className="w-[260px] h-[260px] relative object-cover"
                  alt=""
                  src="/pork-sataygrilled-pork-21@2x.png"
                />
                <div className="self-stretch flex flex-col items-end justify-start gap-[12px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <h3 className="m-0 self-stretch relative text-inherit leading-[40px] capitalize font-medium font-inherit overflow-hidden text-ellipsis whitespace-nowrap mq450:text-lgi mq450:leading-[32px]">
                      Bolu Gulung
                    </h3>
                    <div className="self-stretch relative text-base leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                      <p className="m-0">
                        Bolu gulung adalahhkue bolu yang dipanggang di loyang
                        dangkal, diberi isi berupa selai digulung.
                      </p>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-center text-xl mq450:flex-wrap">
                    <div className="relative leading-[24px] font-medium whitespace-nowrap mq450:text-base mq450:leading-[19px]">
                      Rp.50.000,00
                    </div>
                    <img
                      className="h-8 w-8 relative rounded-2xl overflow-hidden shrink-0"
                      alt=""
                      src="/add.svg"
                    />
                  </div>
                </div>
                <img
                  className="w-6 h-6 absolute !m-[0] top-[0px] left-[236px] overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/favorite-border.svg"
                />
              </div>
            </div>
            <Card
              porkSataygrilledPork="/papaya-salad-1@2x.png"
              title="Kue Spikoe"
              description="Spikoe kuno dibuat dari tiga lapisan kue dengan dua warna berbeda, yaitu kuning dan cokelat"
              price="Rp.60.000,00"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <Card
              porkSataygrilledPork="/pork-sataygrilled-pork-31@2x.png"
              title="Kue Pukis"
              description="Kue pukis berbentuk setengah lingkaran dengan warna bawah kecoklatan dan atas kuning. "
              price="Rp.5.000,00"
              propDisplay="inline-block"
              propMinWidth="117px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
