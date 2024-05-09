import { useMemo } from "react";

const Card = ({
  porkSataygrilledPork,
  title,
  description,
  price,
  propDisplay,
  propMinWidth,
}) => {
  const priceStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="w-[308px] rounded-lg bg-white box-border shrink-0 flex flex-row items-start justify-start py-[22px] px-[23px] text-left text-5xl text-black font-body-large border-[1px] border-solid border-gray mq750:pt-5 mq750:pb-5 mq750:box-border">
      <div className="flex-1 flex flex-col items-center justify-start relative gap-[24px]">
        <img
          className="w-[260px] h-[260px] relative object-cover"
          alt=""
          src={porkSataygrilledPork}
        />
        <div className="self-stretch flex flex-col items-end justify-start gap-[12px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <h3 className="m-0 self-stretch relative text-inherit leading-[40px] capitalize font-medium font-inherit overflow-hidden text-ellipsis whitespace-nowrap mq450:text-lgi mq450:leading-[32px]">
              {title}
            </h3>
            <div className="self-stretch relative text-base leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              {description}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-center text-xl mq450:flex-wrap">
            <div
              className="relative leading-[24px] font-medium inline-block min-w-[117px] whitespace-nowrap mq450:text-base mq450:leading-[19px]"
              style={priceStyle}
            >
              {price}
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
  );
};

export default Card;
