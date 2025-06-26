/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
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
    <div className="h-[99vh] max-h-min py-[16vh] bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95
 bg-cover bg-center" id='home'>
      <Particle/> 
<div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] item-center'>
  <div className='mt-6 '>
   <h1 className='text-[30px] md:text-[50px] text-white font-bold'> 
      HI, I{"'"}M
   <span className='text-yellow-400'>  ABDELMOUNAIM !</span>
   </h1>
   
   
    <ExampleComponent/>
    <p className='mt-[1rem] text-[15px] md:text-[18px] text-[#ffffff92] '>
    Working as a full stack developer is an exhilarating and fulfilling experience for me, as it enables me to be involved in every aspect of a project, starting from designing the user interface all the way to implementing the servers and business logic. I greatly value the opportunity to collaborate with cross-functional teams, 
    contributing my skills and expertise to various stages of application development.</p>
     <div className='sm:mt-[2rem] flex-col md:pt-0  mt-[1.2rem]    space-y-6 sm:space-y-0 sm:flex sm:flex-row  items-center sm:space-x-6'>
<button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-cyan-400 
 text-black flex items-center space-x-2'  onClick={handleDownload}>
  <p> Download CV</p>
  <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black  '/>
  </button>
  <button className='flex items-center space-x-2'>
    <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase text-cyan-400 '
 /><p className='text-[20px] font-semibold text-white'>watch the Video</p> </button>
     </div>
   </div>
   <div    
   
    className='w-[500px] hidden  ml-[116px]
   
    relative lg:flex items-center mt-8 rounded-full h-[500px]'>
    
   <Image  src='/image/mounaim07.jpeg'
     alt='user' layout='fill' 
     className=' relative z-[16] object-contain  rounded-full '/>

    


      
   </div>
   </div>
   
   
   
   
    </div>
  )
}
