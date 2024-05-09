import { useMemo } from "react";

const Items = ({ baychha, nastar, toples, rp18000000, propMinWidth }) => {
  const rp18000000Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-black font-body-large">
      <div className="self-stretch rounded-lg box-border flex flex-row flex-wrap items-center justify-start py-[18px] pr-[29px] pl-[19px] gap-[10px] max-w-full border-[1px] border-solid border-gray">
        <img
          className="h-[50px] w-[50px] relative object-cover min-h-[50px]"
          loading="lazy"
          alt=""
          src={baychha}
        />
        <div className="relative leading-[24px]">
          <p className="m-0">{nastar}</p>
          <p className="m-0">{toples}</p>
        </div>
        <div
          className="flex-1 relative leading-[24px] text-right inline-block min-w-[84px] whitespace-nowrap max-w-full"
          style={rp18000000Style}
        >
          {rp18000000}
        </div>
      </div>
    </div>
  );
};

export default Items;
