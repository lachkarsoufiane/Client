import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const menuItems = ["Home", "Plan my trip", "Blogs", "Contact"];

  return (
    <nav className="flex text-[#545454] items-center h-[8vh] justify-between px-6 mx-auto ">
      <div className="flex h-full w-full text-[13px] font-semibold max-w-[75rem] min items-center justify-between mx-auto">
        <div className="flex h-[25px] items-center text-[20px] w-[120px]">
          <img className="h-[100%]" src="/main_logo.svg" alt="logo" />
          <p className="font-semibold ml-[10px]">Triphack</p>
        </div>
        <ul className="hidden md:flex">
          {menuItems.map((item, index) => (
            <li key={index} className="p-4">
              {item}
            </li>
          ))}
        </ul>
        <div className="w-[120px]">
          <button className=" ml-auto hidden md:flex items-center bg-black w-fit h-[37px] px-4 rounded-lg text-white bg-gradient-to-r from-[#75D3FF] to-[#15B0F8]">
            Sign up
          </button>
        </div>
      </div>
      <div
        className="block z-50 md:hidden"
        onClick={handleNav}
        aria-label="Toggle menu"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={`fixed left-0 top-0 w-full h-full border-r bg-[#fdfdfd] ease-in-out duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[8vh] pl-[16px] items-center text-[20px]">
          <img className="h-[25px]" src="/main_logo.svg" alt="logo" />
          <p className="font-semibold ml-[10px]">Triphack</p>
        </div>
        <ul className="uppercase">
          {menuItems.map((item, index) => (
            <li key={index} className="p-4">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
