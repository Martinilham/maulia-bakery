import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import JenisKue from "../components/jenisKue";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import ShowReview from "../components/ShowReview";
import FormReview from "../components/FormReview";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full mt-12 lg:mt-0 bg-white overflow-hidden flex flex-col items-end justify-start pt-[55px] px-0 pb-0 box-border gap-[76px] leading-[normal] tracking-[normal] text-left text-21xl text-black font-body-large mq750:gap-[38px] mq450:gap-[19px]">
      <FrameComponent7 />
      <section className="w-[1324px] flex flex-row items-start justify-center pt-0 px-5 pb-[21px] box-border max-w-full text-left text-21xl text-black font-body-large">
        <div className="w-[494px] flex flex-col items-center justify-start gap-[10px] max-w-full">
          <h1 className="m-0 relative text-center lg:text-center text-inherit leading-[52px] capitalize font-semibold font-inherit mq450:text-5xl mq450:leading-[31px] mq1050:text-13xl mq1050:leading-[42px]">{`cara order Maulia Bakery `}</h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="h-[3px] w-[155px] relative box-border border-t-[3px] border-solid border-main-color" />
          </div>
        </div>
      </section>
      <FrameComponent6 />
      <JenisKue />
      <FrameComponent4 />
      <FrameComponent3 />
      <div className="w-[1365px] flex flex-row items-start justify-center pt-0 px-5 pb-7 box-border max-w-full">
        <div className="w-[305px] flex flex-col items-start justify-start gap-[10px]">
          <h1 className="m-0 relative text-inherit leading-[52px] capitalize font-semibold font-inherit mq450:text-5xl mq450:leading-[31px] mq1050:text-13xl mq1050:leading-[42px]">
            Review Pembeli
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[73px] pl-[76.5px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[3px] flex-1 relative box-border border-t-[3px] border-solid border-main-color" />
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full text-left text-21xl text-black font-body-large mq750:gap-[19px]">
        <ShowReview />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
          <div className="w-[412px] flex flex-col items-start justify-start gap-[10px] max-w-full">
            <h1 className="m-0 relative text-inherit leading-[52px] capitalize font-semibold font-inherit mq450:text-5xl mq450:leading-[31px] mq1050:text-13xl mq1050:leading-[42px]">
              Form Review Pembeli
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="h-[3px] w-[155px] relative box-border border-t-[3px] border-solid border-main-color" />
            </div>
          </div>
        </div>
        <FormReview />
        <Footer />
      </section>
    </div>
    </>
  );
};

export default Home;
