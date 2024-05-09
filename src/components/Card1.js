import { useMemo } from "react";

const Card1 = ({
  selectFood,
  title,
  description,
  propHeight,
  propWidth,
  propMinWidth,
  propMinHeight,
}) => {
  const cardStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      minWidth: propMinWidth,
      minHeight: propMinHeight,
    };
  }, [propHeight, propWidth, propMinWidth, propMinHeight]);

  return (
    <div
      className="h-[528px] w-[308px] rounded-lg box-border flex flex-row items-start justify-start py-6 px-[23px] text-left text-13xl text-black font-body-large border-[1px] border-solid border-gray mq450:pt-5 mq450:pb-5 mq450:box-border"
      style={cardStyle}
    >
      <div className="flex-1 flex flex-col items-center justify-start gap-[24px]">
        <img
          className="w-[260px] h-[260px] relative object-cover"
          loading="lazy"
          alt=""
          src={selectFood}
        />
        <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
          <h1 className="m-0 text-center relative text-inherit leading-[40px] capitalize font-medium font-inherit mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
            {title}
          </h1>
          <div className="self-stretch relative text-base leading-[24px] text-center">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
