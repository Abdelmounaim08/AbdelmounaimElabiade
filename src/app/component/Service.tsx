import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

function Service() {
  return (
    <div className='bg-gradient-to-bl from-purple-900 via-slate-800 to-slate-900 pt-[2rem] md:pt-[4rem] pb-[5rem]' id='service'>
    <p className='heading'>My
      <span className='text-yellow-400'>Services</span>
    </p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white h-full'>
      
      {/* Frontend Card */}
      <div 
        data-aos="fade-right" 
        className='bg-gradient-to-br from-slate-800/80 via-purple-800/60 to-slate-700/80 
                   hover:scale-110 transform-all duration-300 hover:-rotate-6 
                   uppercase font-semibold text-center p-[2rem] h-full
                   border border-purple-500/30 backdrop-blur-sm
                   hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20'
      >
        <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-cyan-400'/>
        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] text-cyan-300'>frontend</h1>
        <p className='text-[15px] text-slate-300'>
        I&apos;m an experienced Front-end developer specializing in creating 
        
          attractive and interactive user interfaces. Using the latest technologies like HTML5, CSS3,
          and JavaScript, I excel in frameworks such as React.js and Next JS. My focus is on delivering smooth and intuitive user experiences,
          prioritizing performance, accessibility, and cross-platform compatibility.
        </p>
      </div>
  
      {/* Backend Card */}
      <div 
        data-aos="fade-up" 
        className='bg-gradient-to-br from-purple-800/80 via-indigo-800/60 to-slate-800/80
                   hover:scale-110 transform-all duration-300
                   uppercase font-semibold text-center p-[2rem] h-full
                   border border-indigo-500/30 backdrop-blur-sm
                   hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/20'
      >
        <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-purple-400'/>
        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] text-purple-300'>Backend</h1>
        <p className='text-[15px] text-slate-300'>
          As a skilled Back-end developer, I build robust services and APIs
          to power web applications. Proficient in languages like PHP, JavaScript, and Node.js, I&apos;m well-versed
          in popular frameworks such as Laravel, Express. My expertise lies in designing databases and implementing complex business logic,
          ensuring high-performing and secure Back-end solutions.
        </p>
      </div>
  
      {/* Fullstack Card */}
      <div 
        data-aos="fade-left" 
        className='bg-gradient-to-br from-indigo-800/80 via-slate-800/60 to-purple-800/80
                   hover:scale-110 transform-all duration-300 hover:rotate-6
                   uppercase font-semibold text-center p-[2rem] h-full
                   border border-slate-500/30 backdrop-blur-sm
                   hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-400/20'
      >
        <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-indigo-400'/>
        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] text-indigo-300'>fullstack</h1>
        <p className='text-[15px] text-slate-300'>
        I&apos;m a versatile Full-stack developer with the ability to handle both Front-end and Back-end development.
          I can design appealing user interfaces while implementing server-side logic.
          With in-depth knowledge of Front-end technologies like HTML, CSS, and JavaScript,
          coupled with Back-end skills in Python, PHP, and Node.js,
          I create comprehensive and integrated web applications, delivering a seamless user experience
        </p>
      </div>
    </div>
  </div>
  )
}

export default Service