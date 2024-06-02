import React from 'react'
import RiwayatCard from "./components/FrameComponent9";
import FrameComponent1 from './components/FrameComponent11';

export default function Pesananku() {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[55px] pb-[534px] pr-14 pl-[49px] box-border gap-[1223px] leading-[normal] tracking-[normal] mq450:gap-[306px] mq650:h-auto mq725:gap-[611px] mq725:pl-6 mq725:pr-7 mq725:box-border">
    <section className="self-stretch flex flex-col items-end justify-start gap-[37px] shrink-0 [debug_commit:bf4bc93] max-w-full mq650:gap-[18px]">
    <FrameComponent1 />
      <RiwayatCard />
    </section>
    <div className="flex flex-row items-start justify-end py-0 px-[22px]">
    </div>
  </div>
);
};
