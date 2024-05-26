const FrameComponent1 = () => {
  return (
    <header
      className="self-stretch flex flex-row items-start justify-start  max-w-full text-center mx-0 text-13xl text-goldenrod-100 font-body-large "
    >
      <div className=" flex w-full flex-row items-start justify-start max-w-full text-center">
        <h1 className="m-0 h-[52px] w-10 relative text-inherit capitalize font-medium font-inherit inline-block max-w-full">{`<-`}</h1>
        <div className=" m-0 w-full flex flex-col items-center justify-start pt-[4.7px] px-0 pb-0 box-border max-w-full  text-black">
          <h1 className="m-0 text-center h-[31.7px]  -ml-8 text-inherit capitalize font-medium font-inherit">
            PesananKu
          </h1>
        </div>
      </div>
    </header>
  );
};
export default FrameComponent1;
