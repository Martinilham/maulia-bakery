import NavigationLinks from "./NavigationLinks";
import OrderInformation from "./OrderInformation";

const DetailPesanan = ({pesanan}) => {
  return (
    <div className="w-full h-[1099px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[55px] pb-[244px] pr-14 pl-[34px] box-border gap-[933px] leading-[normal] tracking-[normal] lg:h-auto mq450:gap-[233px] mq750:gap-[466px] mq750:pr-7 mq750:box-border">
      <main className="self-stretch flex flex-col items-center justify-start gap-[42px] shrink-0 [debug_commit:1de1738] max-w-full mq750:gap-[21px]">
        <h1 className="text-center">Detail Pesanan</h1>
        <OrderInformation />
      </main>
      
    </div>
  );
};

export default DetailPesanan;
