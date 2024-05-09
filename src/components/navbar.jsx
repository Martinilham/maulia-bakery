import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      label: "Home",
      link: "#"
    },
    {
      label: "About",
      link: "#"
    },
    {
      label: "Contact",
      link: "#"
    }
  ];

  return (
    <>
      <nav className="absolute z-50 w-full flex justify-between px-8 items-center ">
        <div className="flex items-center gap-6">
          <section className="flex items-center gap-8 mx-auto w-full md:w-auto">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:block hidden"
            />
           <h1 className="mx-8 text-7xl font-sniglet relative whitespace-nowrap">
              MauliaBakery
            </h1>
          </section>
          <div className="w-full lg:hidden ml-60 flex-1 font-medium md:flex md:inline-block flex-row flex justify-center gap-4">
          {navlinks.map((d, i) => (
            <a key={i} className="text-center ml-6 text-black no-underline hover:text-black" href={d.link}>
              {d.label}
            </a>
          ))}
        </div>
        </div>

        {/* last section */}
        <div className="flex items-center gap-8">
          {/* Shopping Cart Icon */}
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/shopping-cart.svg"
          />
          {/* Login Button */}
          <button className="lg:hidden mr-24 cursor-pointer py-1.5 px-[9px] bg-[transparent] flex-1 rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-main-color hover:bg-darkgoldenrod-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100">
            <div className="relative text-base leading-[24px] font-body-large text-black text-left inline-block min-w-[42px]">
              Pesan
            </div>
          </button>
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-full md:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <a key={i} className="text-center relative text-black no-underline hover:text-black" href={d.link}>
              {d.label}
            </a>
            ))}
            
        
          </section>
        </div>
      </nav>
      <hr />
    </>
  );
}
