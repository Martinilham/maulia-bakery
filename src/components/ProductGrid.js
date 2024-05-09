import Card from "./Card";
import { useState,useEffect } from "react";
import axios from 'axios'
import SearchBar from "./searchbar/searchbar";
import { useNavigate } from "react-router-dom";
const ProductGrid = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [record,setRecords] = useState([])
  const [pesan,setpesan] = useState(false)
  const [cartItem,setCartItem] = useState([])

  const menuBarang = [...new Set(data.map((p)=>p.kategori))]

  const filterKategori = (kat) =>{
    const newKategori = data.filter((newKat)=> newKat.kategori === kat)
    setRecords(newKategori)
  }

  const filter = (e)=>{
        setRecords(data.filter(f=>f.fname.toLowerCase().includes(e.target.value)))
  };

  const api_link = process.env.REACT_APP_API_SECRET
  console.log(api_link)
  const getUserData = async () => {
    try {
      const res = await axios.get(`${api_link}getdata`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (res.status === 401 || !res.data) {
        console.log("error");
      } else {
        setData(res.data.getBarang);
        setRecords(res.data.getBarang);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    getUserData();
  }, []);

  const handlePesan = (id,fname)=>{
    setCartItem(
      [
        ...cartItem,
        {
          id,
          fname
        }
      ]
    )
    setpesan(true)
    
  }

  console.log(cartItem)

  const rupiah = (number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(number);
  };



  return (
    <>
    <div className=" relative flex lg:flex-col items-center mx-auto justify-between w-1/2 lg:w-full">
          <div className="text-xl font-bold text-navy-700 dark:text-white lg:w-full">
          <SearchBar setSearch={filter}/>
          </div>
          <div className="lg:flex-row flex-row flex lg:flex my-3 ">
          <button onClick={()=>(setRecords(data))} className="lg:text-sm hover:text-white rounded-lg text-white py-2 flex cursor-pointer items-center px-4 text-gray-600 bg-main-color  hover:font-medium mx-2">
            <span>
            </span>
            Semua
          </button>
          {menuBarang.map((Kat)=>(
            <button onClick={()=>filterKategori(Kat)} className=" hover:text-black rounded-lg text-white py-2 flex cursor-pointer items-center px-4 text-gray-600  bg-main-color hover:font-medium mx-2">
            <span>
            </span>
            {Kat}
          </button>
          ))}
          </div>
        </div>
    <section className="flex flex-row items-start justify-end py-0 px-0.5 box-border max-w-full text-left text-5xl text-black font-body-large">
      <div className="w-screen overflow-x-auto  flex lg:flex-row flex-row   items-start justify-center gap-[20px] max-w-full flex-wrap">
        {record.map((e,index)=>(
          <Card
          key={index}
          porkSataygrilledPork={e.imgpath}
          title={e.fname}
          
          price={rupiah(e.harga)}
          button={()=>handlePesan(e._id,e.fname)}
          setopen = {pesan}
        />
        ))}
      </div>
    </section>
          {pesan && (
              <button 
              className="cursor-pointer mx-auto flex items-center justify-center w-1/2 my-2 py-1 rounded-md bg-main-color"
              onClick={()=>navigate("/detailpesanan")}
              >  
                <img
                  className="h-5 w-5 relative overflow-hidden mr-1 lg:mt-1"
                  alt=""
                  src="/shopping-cart-1.svg"
                />
                <span>Pesanan anda</span>
              </button>
            )}
    </>
    
  );
};

export default ProductGrid;
