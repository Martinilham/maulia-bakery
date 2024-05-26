import NavigationLinks from "./NavigationLinks";
import OrderInformation from "./OrderInformation";

const DetailPesanan = ({pesanan}) => {
  const back = ()=>{
    window.history.back()
  }

  return (
    <div className="w-full h-[1099px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[55px] pb-[244px] pr-14 pl-[34px] box-border gap-[933px] leading-[normal] tracking-[normal] lg:h-auto mq450:gap-[233px] mq750:gap-[466px] mq750:pr-7 mq750:box-border">
      <button className="bg-white w-12 h-12 cursor-pointer absolute left-10 top-16 lg:hidden" onClick={back}><img className="bg-white w-12 h-12" src="back.png"></img></button> 
      <main className="self-stretch flex flex-col items-center justify-start gap-[42px] shrink-0 [debug_commit:1de1738] max-w-full mq750:gap-[21px]">
     
        <h1 className="text-center">Detail Pesanan</h1>
        <OrderInformation />
      </main>
      
    </div>
  );
};

export default DetailPesanan;
