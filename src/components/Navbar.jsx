import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const menuItems = ["Home", "Plan my trip", "Blogs", "About", "Contact"];

  return (
    <nav className="flex text-[#282828] items-center h-24 justify-between px-6 mx-auto max-w-[1240px] ">
      <div className="flex h-[25px] items-center text-2xl">
        <img className="h-[100%]" src="/logo-icon.png" alt="logo" />
        <p className="font-black ml-[10px]">Triphack</p>
      </div>
      <ul className="hidden md:flex">
        {menuItems.map((item, index) => (
          <li key={index} className="p-4">
            {item}
          </li>
        ))}
      </ul>
      <div
        className="block z-10 md:hidden"
        onClick={handleNav}
        aria-label="Toggle menu"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={`fixed left-0 top-0 w-full h-full border-r bg-[#f2f2f2] ease-in-out duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-[150px] m-auto h-24 content-center">
          <img src="/triphack-logo.png" alt="logo" />
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
