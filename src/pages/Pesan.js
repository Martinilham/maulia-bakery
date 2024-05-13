import MainLayout from "../components/MainLayout";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/searchbar/searchbar";
import Navbar from "../components/navbar";

const Pesan = () => {

  const links = [
    {
      label:"menu",
      link:"/"
    },
    {
      label:"PesananKu",
      link:"/pesanansaya"
    },

  ]

  return (
    <>
    <Navbar links={links}/>
    <div className="mt-20 lg:w-full relative bg-white w-full overflow-hidden flex flex-col items-end justify-start pt-[62px] px-4 pb-[268px] box-border gap-[86px] leading-[normal] tracking-[normal] mq450:gap-[21px] mq725:gap-[43px] mq725:pl-[39px] mq725:pr-[39px] mq725:box-border">
      <MainLayout />
      <ProductGrid />
    </div>
    </>
    
  );
};

export default Pesan;
