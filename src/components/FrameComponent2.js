const FrameComponent2 = ({
  ellipse10,
  andiaJorida,
  myExperienceAtYourRestaur,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[27px] text-left text-5xl text-black font-body-large">
      <div className="flex flex-row items-center justify-start gap-[26px]">
        <img
          className="h-[60px] w-[60px] relative rounded-[50%] object-cover"
          loading="lazy"
          alt=""
          src={ellipse10}
        />
        <h3 className="m-0 relative text-inherit leading-[40px] capitalize font-medium font-inherit mq450:text-lgi mq450:leading-[32px]">
          {andiaJorida}
        </h3>
      </div>
      <div className="self-stretch relative text-base leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:6] [-webkit-box-orient:vertical]">
        {myExperienceAtYourRestaur}
      </div>
    </div>
  );
};

export default FrameComponent2;
