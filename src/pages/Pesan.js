import MainLayout from "../components/MainLayout";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/searchbar/searchbar";

const Pesan = () => {
  return (
    <div className="lg:w-full relative bg-white w-full overflow-hidden flex flex-col items-end justify-start pt-[62px] px-4 pb-[268px] box-border gap-[86px] leading-[normal] tracking-[normal] mq450:gap-[21px] mq725:gap-[43px] mq725:pl-[39px] mq725:pr-[39px] mq725:box-border">
      <MainLayout />
      <ProductGrid />
    </div>
  );
};

export default Pesan;
