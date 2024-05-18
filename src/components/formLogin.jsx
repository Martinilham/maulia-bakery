import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
    const [noTLp,setNotlp] = useState("")
    const [nama,setNama] = useState("")
    const [alamat,setAlamat] = useState("")
    const navigate = useNavigate();

    const api_link = process.env.REACT_APP_API_SECRET
const ambiluser = () => {
    axios
    .get(`${api_link}client`)
    .then((res) => {
        console.log(res.data)
    })
}

useEffect(() => {
  ambiluser()
}, [])



const handleLogin =  async (event) => {
  event.preventDefault();
  try {
      const response = await axios
      .post(`http://localhost:5000/loginclient`, { nomorTLP:noTLp, nama,alamat})
      const token = response.data.token
      alert('Login successful')
      ambiluser()
      navigate("/pesan")
      window.location.reload();
      localStorage.setItem('token', token)
  } catch (error) {
      alert('Login gagal')
      console.log('Login Error', error)
  }
}

  return (
    <div className="w-full mt-10 flex flex-row items-start justify-center pt-0 px-5 pb-1.5 box-border max-w-full text-left text-13xl text-black font-body-large">
      <div className="w-[678px] rounded-lg box-border flex flex-col items-center justify-start py-[22px] px-[23px] gap-[48px] max-w-full border-[1px] border-solid border-gray mq750:gap-[24px] mq750:pt-5 mq750:pb-5 mq750:box-border">
        <h1 className="m-0 relative text-inherit leading-[40px] capitalize font-medium font-inherit whitespace-nowrap inline-block min-w-[110px] mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">{`Masuk`}</h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <h1 className="m-0 relative text-inherit leading-[40px] capitalize font-medium font-inherit mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
            Nomor Telepon
          </h1>
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-[18px] px-5 border-[1px] border-solid border-gray">
            <input
              className="w-full [border:none] [outline:none] font-body-large text-base bg-[transparent] h-6 relative leading-[24px] text-black text-left inline-block p-0"
              placeholder="Masukkan Nomor Telpn Anda ex:084313435235"
              type="text"
              value={noTLp}
              onChange={(e)=> setNotlp(e.target.value)}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <h1 className="m-0 relative text-inherit leading-[40px] capitalize font-medium font-inherit inline-block min-w-[110px] mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
            Nama
          </h1>
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-[18px] px-5 border-[1px] border-solid border-gray">
          <input
              className="w-full [border:none] [outline:none] font-body-large text-base bg-[transparent] h-6 relative leading-[24px] text-black text-left inline-block p-0"
              placeholder="Masukkan username anda"
              type="text"
              value={nama}
              onChange={(e)=> setNama(e.target.value)}
            />
          </div>
          
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <h1 className="m-0 relative text-inherit leading-[40px] capitalize font-medium font-inherit inline-block min-w-[110px] mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
            Alamat
          </h1>
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-[18px] px-5 border-[1px] border-solid border-gray">
          <input
              className="w-full [border:none] [outline:none] font-body-large text-base bg-[transparent] h-6 relative leading-[24px] text-black text-left inline-block p-0"
              placeholder="Masukkan username anda"
              type="text"
              value={alamat}
              onChange={(e)=> setAlamat(e.target.value)}
            />
          </div>
          
        </div>
        <button className="cursor-pointer py-4 px-5 bg-main-color self-stretch rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-main-color hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100"
          type="submit"
          onClick={handleLogin}
        >
          <div className="relative text-base leading-[24px] font-body-large text-white text-left inline-block min-w-[42px]">{`Submit `}</div>
        </button>
      </div>
    </div>
  );
};

export default FormLogin;
