import { useNavigate } from "react-router-dom";

const Card = ({ porkSataygrilledPork, title, description, price,button ,setopen,kurangi,qty}) => {
  const navigate = useNavigate()
  return (
    <div className="w-50 lg:w-36 rounded-lg bg-white box-border shrink-0 flex lg:flex-row flex-row items-start justify-start py-[18px] px-[18px] text-left text-5xl text-black font-body-large border-[1px] border-solid border-gray mq650:pt-5 mq650:pb-5 mq650:box-border">
      <div className="flex-1 flex flex-col items-center justify-start relative gap-[4px]">
        <img
          className="w-40 h-40 lg:w-24 lg:h-24 relative object-cover"
          alt=""
          src={porkSataygrilledPork}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <h3 className="m-0 line-clamp-1 self-stretch lg:font-small relative text-inherit capitalize font-medium font-inherit overflow-hidden text-ellipsis whitespace-nowrap mq450:text-lgi mq450:leading-[32px]">
              {title}
            </h3>
            <div className="self-stretch relative text-base leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              {description}
            </div>
          </div>
          <div className="w-full self-stretch flex flex-col items-start justify-between  text-center text-xl mq450:flex-wrap">
            <div className="lg:font-small relative   whitespace-nowrap mq450:text-base mq450:leading-[19px]">
              {price}
            </div>
            {qty > 0 && setopen ? (
                <div className="w-full lg:w-full justify-center items-center flex-row flex">
                  <button 
                className="cursor-pointer flex items-center justify-center  w-10 my-2 py-1 rounded-md bg-main-color"
                onClick={button}
                >  
                  <span>+</span>
                </button>
                <span className="text-center items-center justify-center my-2 mx-8 lg:mx-1">{qty}</span>
                <button 
                className="cursor-pointer flex items-center justify-center w-10 my-2 py-1 rounded-md bg-main-color"
                onClick={kurangi}
                >  
                  <span>-</span>
                </button>
                </div>
              
              ) : (
                <button 
                className="cursor-pointer flex items-center justify-center w-full my-2 py-1 rounded-md bg-main-color"
                onClick={button}
                > 
                  <span>Pesan</span>
                </button>
              
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
