import Items from "./Items";

const OrderInformation = () => {
  return (
    <div className="w-[1294px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-goldenrod-100 font-body-large">
      <div className="w-[678px] flex flex-col items-start justify-start gap-[23px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
          <div className="relative leading-[24px]">{`Informasi Pesanan Anda `}</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px] text-sm text-black">
            <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-[18px] px-5 border-[1px] border-solid border-gray">
              <div className="relative leading-[20px]">
                <p className="m-0">Nama Pembeli :</p>
                <p className="m-0">{`Alamat : `}</p>
                <p className="m-0">Waktu Pemesanan :</p>
              </div>
            </div>
            <div className="relative text-base leading-[24px] text-goldenrod-100">{`Detail Pesanan Anda `}</div>
          </div>
        </div>
        <div className="self-stretch rounded-lg box-border flex flex-col items-center justify-start py-[22px] px-[23px] gap-[48px] max-w-full text-black border-[1px] border-solid border-gray mq750:gap-[24px] mq750:pt-5 mq750:pb-5 mq750:box-border">
          <Items
            baychha="/baychha@2x.png"
            nastar="Nastar"
            toples="3 toples"
            rp18000000="Rp.180.000,00"
          />
          <Items
            baychha="/pork-sataygrilled-pork@2x.png"
            nastar="Kue Soes"
            toples="2 buah"
            rp18000000="Rp.10.000,00"
            propMinWidth="76px"
          />
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch rounded-lg box-border flex flex-row flex-wrap items-center justify-start py-[18px] pr-[17px] pl-[19px] gap-[10px] max-w-full border-[1px] border-solid border-gray">
              <div className="relative leading-[24px]">{`Total Pesanan Anda `}</div>
              <input
                className="w-full [border:none] [outline:none] font-body-large text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-black text-right inline-block min-w-[281px] whitespace-nowrap max-w-full p-0"
                placeholder="Rp.190.000,00"
                type="text"
              />
            </div>
          </div>
          <button className="cursor-pointer py-4 px-5 bg-main-color self-stretch rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-main-color hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100">
            <div className="relative text-base leading-[24px] font-body-large text-white text-left">
              Lakukan Pembayaran
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
