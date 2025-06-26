import { Bars2Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useState } from "react";
interface Props{
    operNav:() => void;
}
const Nav = ({operNav}:Props)=>{
   
    return(
        <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-lg shadow-md">
        <div className="flex  justify-between items-center w-[80%] mx-auto h-[100%]"> 
          <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold"> 
              WEB
              <span className="text-yellow-300">DEV</span>
          </h1>
          
              <div className="nav-link" ><Link href="#home">HOME</Link></div>
              <div className="nav-link"><Link href="#service">SERVICES</Link></div>
              <div className="nav-link"><Link href="#ABOUT">ABOUT</Link></div>
              <div className="nav-link"><Link href="#EXPERIENCES">EXPERIENCES</Link></div>

              <div className="nav-link"><Link href="#PROJECT">PROJECT</Link></div>
              
              <div className="nav-link"><Link href="#CONTACT">CONTACT</Link></div>
              <div onClick={operNav} >
                <Bars2Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"/>
              </div>
          
        </div>
      </div>
    )
}
export default Nav;