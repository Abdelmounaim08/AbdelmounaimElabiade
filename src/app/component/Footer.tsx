import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900' id='CONTACT'>
        <div className=' grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] flex items-center
                 justify-center rounded-full bg-yellow-400'>
                    <MapIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem]  h-[3.5rem] text-black '/>
                 </div>
           
            <div className=''>
                <h1 className='text-[25x] mb-[0.2rem] font-semibold text-black'>Address </h1>
                <p className='text-[17x] w-[90%] opacity-60 text-white'> MOROCCO ,MEKNES OUJEH AROUS </p>
            </div>
            
        </div>
        <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] flex items-center
                 justify-center rounded-full bg-yellow-400'>
                    <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem]  h-[3.5rem] text-black '/>
                 </div>
           
            <div className=''>
                <h1 className='text-[25x] mb-[0.2rem] font-semibold text-black'>Phone </h1>
                <p className='text-[17x] w-[90%] opacity-60 text-white'> +212694113431 </p>
            </div>
            
        </div>
        <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] flex items-center
                 justify-center rounded-full bg-yellow-400'>
                    <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem]  h-[3.5rem] text-black '/>
                 </div>
           
            <div className=''>
                <h1 className='text-[25x] mb-[0.2rem] font-semibold text-black'> Send Us Email </h1>
                <p className='text-[17x] w-[90%] opacity-60 text-white'> abdomel2002@gmail.com <br/>mounaimelabiade@gmail.com
                </p>
            </div>
            
        </div>
   
        </div>
        <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
            <div className='text-[18px] mb-[2rem] md:mb-0 text-white opacity-20 '>
                Abdelmounaim Elabiade | All Right Reserved 
            </div>
            <div className='flex items-center sm:space-x-10 md:space-x-11 space-x-7'>
                <p className='text-[18px] text-white opacity-20  '>Terms & Condition</p>
                <p className='text-[18px] text-white opacity-20  '>Privacy Policy </p>
                <p className='text-[18px] text-white opacity-18  '><a href="https://www.linkedin.com/in/abdelmounaim-elabiade/"><FaLinkedin /></a> </p>
                <p className='text-[18px] text-white opacity-18  '><a href="https://www.instagram.com/abdelmounaim_08"><FaInstagram /></a>  </p>
                <p className='text-[18px] text-white opacity-18 '><a href="https://github.com/Abdelmounaim08"><FaGithub /></a>  </p>
            </div>
        </div>
    </div>
  )
}

export default Footer