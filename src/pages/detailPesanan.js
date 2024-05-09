import NavigationLinks from "../components/NavigationLinks";
import OrderInformation from "../components/OrderInformation";

const DetailPesanan = () => {
  return (
    <div className="w-full h-[1099px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[55px] pb-[244px] pr-14 pl-[34px] box-border gap-[933px] leading-[normal] tracking-[normal] lg:h-auto mq450:gap-[233px] mq750:gap-[466px] mq750:pr-7 mq750:box-border">
      <main className="self-stretch flex flex-col items-end justify-start gap-[42px] shrink-0 [debug_commit:1de1738] max-w-full mq750:gap-[21px]">
        <NavigationLinks />
        <OrderInformation />
      </main>
      <div className="flex flex-row items-start justify-end py-0 px-[22px]">
        <div className="w-11 rounded-lg box-border flex flex-row items-start justify-start py-5 px-[9px] shrink-0 [debug_commit:1de1738] border-[1px] border-solid border-gray">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/filter-list.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailPesanan;
