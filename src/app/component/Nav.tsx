'use client';

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Navbar */}
      <header className="bg-gradient-to-r px-2 from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-lg border-b border-purple-900/50 shadow-md fixed top-0 z-[10000] w-full">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between h-[12vh]">
          {/* Logo SVG */}
          <Link href="#home" className="flex items-center space-x-2">
            <span className="block w-[80px] h-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 300"
                fill="none"
              >
                <rect x="50" y="50" rx="20" ry="20" width="400" height="200" fill="#0f172a" stroke="#9333ea" strokeWidth="6" />
                <circle cx="75" cy="75" r="6" fill="#facc15" />
                <circle cx="95" cy="75" r="6" fill="#facc15" />
                <circle cx="115" cy="75" r="6" fill="#facc15" />
                <text x="60" y="190" fontFamily="monospace" fontSize="50" fill="#facc15">&lt;/&gt;</text>
                <text x="150" y="200" fontFamily="Arial Black, sans-serif" fontSize="120" fill="#facc15">A</text>
                <text x="230" y="200" fontFamily="Arial Black, sans-serif" fontSize="120" fill="#22d3ee">E</text>
                <path d="M320,170 a20,20 0 1,1 28,28 l-20,20 a20,20 0 1,1 -28,-28" 
                  stroke="#22d3ee" strokeWidth="12" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#home" className="text-white hover:text-yellow-300 transition-colors">Accueil</Link>
            <Link href="#service" className="text-white hover:text-yellow-300 transition-colors">Services</Link>
            {/* <Link href="#ABOUT" className="text-white hover:text-yellow-300 transition-colors">À propos</Link> */}
            <Link href="#EXPERIENCES" className="text-white hover:text-yellow-300 transition-colors">Expériences</Link>
            <Link href="#PROJECT" className="text-white hover:text-yellow-300 transition-colors">Projets</Link>
            <Link href="#CONTACT" className="text-white hover:text-yellow-300 transition-colors">Contact</Link>
          </nav>

          {/* Mobile toggle */}
          <button onClick={toggleNav} className="md:hidden text-yellow-300">
            {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars2Icon className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed top-[12vh] right-0 h-[calc(100%-12vh)] w-[75%] max-w-xs bg-slate-900 text-white z-[9999] shadow-lg transform transition-transform duration-300 ease-in-out md:hidden">
          <div className="flex flex-col space-y-6 p-6 text-base font-medium">
            <Link href="#home" onClick={toggleNav} className="hover:text-yellow-300">Accueil</Link>
            <Link href="#service" onClick={toggleNav} className="hover:text-yellow-300">Services</Link>
            {/* <Link href="#ABOUT" onClick={toggleNav} className="hover:text-yellow-300">À propos</Link> */}
            <Link href="#EXPERIENCES" onClick={toggleNav} className="hover:text-yellow-300">Expériences</Link>
            <Link href="#PROJECT" onClick={toggleNav} className="hover:text-yellow-300">Projets</Link>
            <Link href="#CONTACT" onClick={toggleNav} className="hover:text-yellow-300">Contact</Link>
          </div>
        </div>
      )}

      {/* Overlay */}
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
