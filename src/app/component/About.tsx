import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Image from 'next/image'
import Ballcanvas from './3dmodal'

//bg-[#121130]
const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1NcvDNW0rrmRtyHJXWDaCrBxJkQrEzZjA/view';
    link.download = 'ElabiadeCv.pdf';
    link.click();
  };

  return (
    <div className='pb-[3rem] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-[4rem] md:pt-[8rem]' id='ABOUT'>
    <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
      
      <div className='mt-11'>
        {/* Section Title */}
        <h1 className='text-[20px] font-bold uppercase text-yellow-400 mb-[1rem]'>
          ABOUT ME
        </h1>
        
        {/* Main Title */}
        <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
          TransForming <span className='text-[25px] text-cyan-400'>Visions</span>
        </h2>
        
        {/* Content with decorative line */}
        <div className='mb-[3rem] flex items-center md:space-x-10'>
          <span className='w-[100px] hidden md:block h-[5px] bg-gradient-to-r from-cyan-400 to-purple-400 rounded-sm'></span>
          {/* <p className='text-[19px] flex text-slate-300 w-[110%]'>
            As a junior full-stack developer, I bring a comprehensive range of skills to the table, including HTML, CSS, JavaScript, Python, and PHP. I'm also proficient with front-end frameworks like React and Next.js, and back-end frameworks such as Laravel. With a solid foundation in front-end technologies, I'm eager to leverage modern tools like Prisma and SQLite for robust data management, and exploring the potential of Remix for building performant web applications. I'm passionate about learning and building innovative solutions.
          </p> */}
          <p className='text-[19px] flex text-slate-300 w-[110%]'>
  As a junior full-stack developer, I bring a comprehensive range of skills to the table, including HTML, CSS, JavaScript, Python, and PHP. I&apos;m also proficient with front-end frameworks like React and Next.js, and back-end frameworks such as Laravel. With a solid foundation in front-end technologies, I&apos;m eager to leverage modern tools like Prisma and SQLite for robust data management, and exploring the potential of Remix for building performant web applications. I&apos;m passionate about learning and building innovative solutions.
</p>
        </div>
        
        {/* Download Button (commented version with updated colors) */}
        {/* 
        <button className='px-[2rem] hover:bg-cyan-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-gradient-to-r from-cyan-400 to-purple-400 text-white hover:from-purple-400 hover:to-cyan-400 flex items-center space-x-2' onClick={handleDownload}>
          <p>Download CV</p>
          <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-white'/>
        </button> 
        */}
      </div>
      
      {/* Image section */}
      <div 
        data-aos='fade-left'
        className='lg:w-[500px] hidden md:block mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[200px] h-[150px] relative'
      >
        {/* Image */}
        <Image 
          src='/image/mounaim06.jpeg'
          alt='user' 
          layout='fill' 
          objectFit='contain'
          className='relative z-[11] mt-10 bg-white w-[200px] h-[150px] object-contain'
        />
        
        {/* Background decoration with gradient */}
        <div className='absolute w-[100%] h-[100%] z-[10] bg-gradient-to-br from-cyan-400/80 to-purple-400/80 pt-4 top-[1rem] right-[-2rem]'>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About