import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff] link link-underline link-underline-black">
            DEFI
          </h1>
        </div>
        <div className="hidden md:flex ">
          <ul className="flex text-white items-center ">
            <li className="duration-300 hover:ring-4 ring-sky-400 hover:scale-110">
              Platform
            </li>
            <li className="duration-300 hover:ring-4 ring-sky-400 hover:scale-110">
              Developers
            </li>
            <li className="duration-300 hover:ring-4 ring-sky-400 hover:scale-110">
              Community
            </li>
            <li className="duration-300 hover:ring-4 ring-sky-400 hover:scale-110">
              About
            </li>
            <button className="ml-4">Use DEFI</button>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center duration-300 ease-out text-center'
              : 'absolute left-[-100%]'
          }
        >
          <ul>
            <li className="text-2xl">Platform</li>
            <li className="text-2xl">Developers</li>
            <li className="text-2xl">Community</li>
            <li className="text-2xl">About</li>
            <button className="m-8">Use DEFI</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
