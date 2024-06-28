'use client';

import { useState } from 'react';
import LanguageChanger from './LanguageChanger';
import Links from './Links';
import Logo from './Logo';
import Sidebar from './MobileMenu';
import Search from './Search';
import ThemeSwitch from './ThemeSwitch';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex items-center gap-2   w-full  h-[4rem] bg-mainDark text-white font-medium">
      <div className=" align-middle bg-primary h-full w-[3rem] flex justify-center items-center">
        <FaBars onClick={toggleSidebar} className="w-5 h-5  " />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex items-center justify-between w-full p-3">
        <div className="flex gap-12 items-center ">
          <div className="w-14 h-14">
            <Logo />
          </div>
          <div className="hidden sm:block">
            <Links />
          </div>
        </div>
        <div className="flex items-center  gap-3">
          <Search />
          <div className="flex items-center  gap-2">
              <ThemeSwitch />
            <LanguageChanger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
