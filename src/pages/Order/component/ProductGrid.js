import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../../components/searchbar/searchbar";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const ProductGrid = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [record, setRecords] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [pesan, setpesan] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const [itemperPage] = useState(4);

  const indexItemAkhir = currentpage * itemperPage;
  const indexItemAwal = indexItemAkhir - itemperPage;
  const currentItems = record.slice(indexItemAwal, indexItemAkhir);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const menuBarang = [...new Set(data.map((p) => p.kategori))];

  const filterKategori = (kat) => {
    const newKategori = data.filter((newKat) => newKat.kategori === kat);
    setRecords(newKategori);
  };

  const filter = (e) => {
    setRecords(
      data.filter((f) => f.fname.toLowerCase().includes(e.target.value))
    );
  };

  const api_link = process.env.REACT_APP_API_SECRET;

  const getProductData = async () => {
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
    getProductData();
    localStorage.removeItem("pesanan")
    localStorage.removeItem("pembayaran")
    localStorage.removeItem("transaksi")
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getProductData()
  }, 2000);

  return () => clearInterval(interval);
  }, []);

  const handlePesan = (id, fname, imgpath, harga,diskon) => {
    const existingItem = cartItem.find((item) => item.id === id);
  
    if (existingItem) {
      const updatedCart = cartItem.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItem(updatedCart);
    } else {
      setCartItem([
        ...cartItem,
        {
          id,
          fname,
          qty: 1,
          imgpath,
          harga,
          diskon
        },
      ]);
    }
    setpesan(true);
  };
  
  const handleKurangiPesan = (id) => {
    const existingItem = cartItem.find((item) => item.id === id);
  
    if (existingItem) {
      const updatedCart = cartItem
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0);

        setCartItem(updatedCart);

        if (updatedCart.length === 0) {
            setpesan(false);
        }
    }
    
  };
  

  const rupiah = (number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(number);
  };

  const handleorder = () => {
    localStorage.setItem("pesanan", JSON.stringify(cartItem)); 
    navigate("/detailpesanan");
  };
  
  

  return (
    <>
      <div className=" relative flex lg:flex-col items-center mx-auto justify-between w-1/2 lg:w-full">
        <div className="text-xl font-bold text-navy-700 dark:text-white lg:w-full">
          <SearchBar setSearch={filter} />
        </div>
        <div className="lg:flex-row flex-row flex lg:flex my-3 ">
          <button
            onClick={() => setRecords(data)}
            className="lg:text-sm hover:text-white rounded-lg text-white py-2 flex cursor-pointer items-center px-4 text-gray-600 bg-main-color  hover:font-medium mx-2"
          >
            <span></span>
            Semua
          </button>
          {menuBarang.map((Kat) => (
            <button
              key={Kat}
              onClick={() => filterKategori(Kat)}
              className=" hover:text-black rounded-lg text-white py-2 flex cursor-pointer items-center px-4 text-gray-600  bg-main-color hover:font-medium mx-2"
            >
              <span></span>
              {Kat}
            </button>
          ))}
        </div>
      </div>
      <section className="flex flex-col items-center justify-end py-0 px-0.5 box-border max-w-full text-left text-5xl text-black font-body-large">
        <div className="w-screen overflow-x-auto  flex lg:flex-row flex-row   items-start justify-center gap-[20px] max-w-full flex-wrap">
          {currentItems.map((e) => (
            <Card
              key={e._id}
              porkSataygrilledPork={e.imgpath}
              title={e.fname}
              price={rupiah(e.harga)}
              button={() => handlePesan(e._id, e.fname,e.imgpath,e.harga,e.discount)}
              kurangi = {()=>handleKurangiPesan(e._id)}
              setopen={pesan}
              qty={
                cartItem.find((item) => item.id === e._id)
                  ? cartItem.find((item) => item.id === e._id).qty
                  : 0
              }
            />
          ))}
        </div>
        <div className="w-full mt-10 lg:m-auto lg:mt-5 m-auto ">
        <nav aria-label="Page navigation m-auto w-full ">
          <ul className=" text-center lg:text-center justify-center items-center flex-row flex list-none m-auto lg:m-auto lg:pl-0 bg-transparent ">
            <li>
              <button className="bg-transparent pointer-events-none px-4 py-2 disabled text-black transition-colors duration-150 focus:bg-main-color border border-r-0 border-main-color rounded-l-lg focus:shadow-outline">
                Prev
              </button>
            </li>
            {Array.from(
              { length: Math.ceil(data.length / itemperPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className="bg-transparent px-4 py-2 text-black transition-colors duration-150 focus:bg-main-color border border-r-0 border-main-color focus:shadow-outline"
                >
                  {index + 1}
                </button>
              )
            )}
            <li>
              <button className="bg-transparent pointer-events-none px-4 py-2 text-black transition-colors duration-150 focus:bg-main-color border border-main-color rounded-r-lg focus:shadow-outline">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      </section>
      
      {pesan && (
        <button
          className=" animate__pulse animate__animated fixed bottom-10 lg:bottom-3 start-0 end-0 cursor-pointer mx-auto flex items-center justify-center w-1/2 my-2 py-1 rounded-md bg-main-color"
          onClick={handleorder}
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
