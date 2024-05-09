import FrameComponent2 from "./FrameComponent2";

const ShowReview = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[17px] box-border max-w-full text-left text-5xl text-black font-body-large mq750:pl-10 mq750:pr-10 mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[33px] max-w-full mq750:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[56px] max-w-full lg:flex-wrap mq750:gap-[28px]">
          <div className="w-[565px] rounded-lg box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[18px] min-w-[565px] max-w-full border-[1px] border-solid border-gray lg:flex-1 mq750:min-w-full">
            <FrameComponent2
              ellipse10="/ellipse-10@2x.png"
              andiaJorida="Andia jorida"
              myExperienceAtYourRestaur="My experience at your restaurant was truly excellent. The food was absolutely delicious - every dish was perfectly cooked and bursting with flavor. But what really impressed me was the service. Your staff was attentive, friendly which make me feel want to be there again."
            />
            <div className="flex flex-row items-start justify-start gap-[8px] text-base">
              <div className="flex flex-row items-start justify-start gap-[5px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/star-1.svg"
                />
              </div>
              <div className="relative leading-[24px] inline-block min-w-[52px]">
                5 stars
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[18px] min-w-[428px] max-w-full text-base border-[1px] border-solid border-gray mq750:min-w-full">
            <FrameComponent2
              ellipse10="/ellipse-10-1@2x.png"
              andiaJorida="William Henry"
              myExperienceAtYourRestaur={`Living in Canada, I hadn't ventured much into Asian cuisine until recently. But wow, what a delicious world I've been missing! Khmer food, in particular, has captured my heart, and Bok Loh Hong holds a special place in my memory as the dish that first made me say, "Asian food is so yummy!"`}
            />
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="flex flex-row items-start justify-start gap-[5px]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/star-1.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/star-1.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/star-1.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/star-1.svg"
                />
              </div>
              <div className="relative leading-[24px] inline-block min-w-[48px]">
                4stars
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-0 px-2 bg-[transparent] flex flex-row items-start justify-start">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[26px]">
            <div className="relative text-base leading-[24px] font-body-large text-black text-left inline-block min-w-[101px]">
              Add A review
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/add-8.svg"
            />
          </button>
        </button>
      </div>
    </div>
  );
};

export default ShowReview;
