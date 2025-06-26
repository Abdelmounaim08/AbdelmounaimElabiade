'use client';

import { Bars2Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top navbar */}
      <nav className="w-full fixed z-[10000] top-0 h-[12vh] bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-lg shadow-md">
        <div className="flex justify-between items-center w-[90%] max-w-7xl mx-auto h-full">
          <h1 className="text-xl md:text-2xl text-white font-bold cursor-pointer">
            WEB<span className="text-yellow-300">DEV</span>
          </h1>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-8 text-white text-md font-medium">
            <Link href="#home" className="hover:text-yellow-300 transition">HOME</Link>
            <Link href="#service" className="hover:text-yellow-300 transition">SERVICES</Link>
            <Link href="#ABOUT" className="hover:text-yellow-300 transition">ABOUT</Link>
            <Link href="#EXPERIENCES" className="hover:text-yellow-300 transition">EXPERIENCES</Link>
            <Link href="#PROJECT" className="hover:text-yellow-300 transition">PROJECT</Link>
            <Link href="#CONTACT" className="hover:text-yellow-300 transition">CONTACT</Link>
          </div>

          {/* Hamburger icon (mobile) */}
          <div className="md:hidden">
            <Bars2Icon
              onClick={toggleNav}
              className="w-8 h-8 text-yellow-300 cursor-pointer"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-xs bg-slate-900 text-white z-[9999] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <h2 className="text-lg font-bold">
            MENU
          </h2>
          <XMarkIcon
            onClick={toggleNav}
            className="w-6 h-6 text-yellow-300 cursor-pointer"
          />
        </div>

        <div className="flex flex-col space-y-6 p-6 text-base font-medium">
          <Link href="#home" onClick={toggleNav} className="hover:text-yellow-300">HOME</Link>
          <Link href="#service" onClick={toggleNav} className="hover:text-yellow-300">SERVICES</Link>
          <Link href="#ABOUT" onClick={toggleNav} className="hover:text-yellow-300">ABOUT</Link>
          <Link href="#EXPERIENCES" onClick={toggleNav} className="hover:text-yellow-300">EXPERIENCES</Link>
          <Link href="#PROJECT" onClick={toggleNav} className="hover:text-yellow-300">PROJECT</Link>
          <Link href="#CONTACT" onClick={toggleNav} className="hover:text-yellow-300">CONTACT</Link>
        </div>
      </div>

      {/* Overlay background when menu is open */}
      {isOpen && (
        <div
          onClick={toggleNav}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] md:hidden"
        />
      )}
    </>
  );
};

export default Nav;
