import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useState } from "react";
interface Props{
  nav:boolean;
  closeNav: () => void;
  

}
 const MobileNav=({closeNav,nav}:Props)=> {
  const navAnimation =nav ? 'translate-x-0' : 'translate-x-[-100%]';
  return (
    <div className={`fixed ${navAnimation} z-[100000000]  transform transition-all duration-300 top-0 left-0 bottom-0 right-0 bg-[#09101a]`}>
    <div className={`w-[100vw] h-[100vw] flex flex-col items-center justify-center pt-[10rem]`}>
              <div className="nav-link-mobile"><Link href="#home" onClick={closeNav}>HOME</Link></div>
              <div className="nav-link-mobile"><Link onClick={closeNav} href="#service">SERVICES</Link></div>
              <div className="nav-link-mobile"><Link onClick={closeNav} href="#ABOUT">ABOUT</Link></div>
              <div className="nav-link-mobile"><Link onClick={closeNav} href="#PROJECT">PROJECT</Link></div>
           
              <div className="nav-link-mobile"><Link onClick={closeNav} href="#CONTACT">CONTACT</Link></div>
  </div>
  <div onClick={closeNav} 
  className="absolute
   z-[1000000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400">
    <XMarkIcon/>
  </div>
  </div>
  );
}
export default MobileNav