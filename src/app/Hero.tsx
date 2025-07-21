
import React from 'react'
import Particle from './component/Particle'
import { ExampleComponent } from './component/TextEffect'
import Image from 'next/image'


import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/16/solid'
export const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1bXkTNf99en0pq25gU_smf7XuQVw-olF4/view?usp=sharing';
    link.download = 'ElabiadeCv.pdf';
    link.click();
  };

  return (
 <div
  className="min-h-screen py-[17vh] items-center justify-center bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 bg-cover bg-center"
  id="home"
>
  <Particle />

  <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-full">
    {/* Texte centré verticalement */}
    <div className="flex flex-col justify-center h-full mt-6">
      <h1 className="text-3xl md:text-5xl text-white font-bold leading-tight text-center lg:text-left">
        HI, I{"'"}M{" "}
        <span className="text-yellow-400 block md:inline">ABDELMOUNAIM !</span>
      </h1>

      <ExampleComponent />

      <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
       Working as a full stack developer is an exhilarating and fulfilling experience for me, as it enables me to be involved in every aspect of a project, starting from designing the user interface all the way to implementing the servers and business logic. I greatly value the opportunity to collaborate with cross-functional teams, contributing my skills and expertise to various stages of application development.



      </p>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
        <button
          onClick={handleDownload}
          className="px-6 py-3 text-sm font-bold uppercase bg-cyan-400 text-black flex items-center space-x-2 hover:bg-yellow-400 transition-all duration-200"
        >
          <p>Download CV</p>
          <ArrowDownTrayIcon className="w-6 h-6 text-black" />
        </button>

        {/* <button className="flex items-center space-x-2 group">
          <PlayCircleIcon className="w-10 h-10 text-cyan-400 group-hover:text-yellow-400 transition duration-200" />
          <p className="text-lg font-semibold text-white">Watch the Video</p>
        </button> */}
      </div>
    </div>

    {/* Image à la fin, bien alignée */}
    <div className="flex justify-center lg:justify-end pr-6 items-center mt-10 lg:mt-0">
      <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
        <Image
          src="/image/mounaim07.jpeg"
          alt="user"
          layout="fill"
          objectFit="cover"
          className="rounded-full bg-amber-50"
        />
      </div>
    </div>
  </div>
</div>


  )
}
