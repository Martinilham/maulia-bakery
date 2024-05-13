import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";

export default function Navbar({links}) {
  const [isSideMenuOpen, setMenu] = useState(false);


  return (
    <>
      <nav className="mx-8  lg:mx-0 overflow-x-hidden absolute z-50 w-full flex justify-between items-center ">
        <div className="flex items-center gap-6">
          <section className="flex items-center gap-8 mx-auto w-full md:w-auto">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl lg:ml-8 cursor-pointer lg:block hidden"
            />
           <h1 className="mx-8 text-7xl font-sniglet relative whitespace-nowrap">
              MauliaBakery
            </h1>
          </section>
          <div className="w-full lg:hidden ml-60 flex-1 font-medium md:flex md:inline-block flex-row flex justify-center gap-4">
          {links.map((d, i) => (
            <a key={i} className="text-center ml-12 text-black no-underline hover:text-black" href={d.link}>
              {d.label}
            </a>
          ))}
        </div>
        </div>

        {/* last section */}


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

            {links.map((d, i) => (
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
