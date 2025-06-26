import React from 'react'
import Image from 'next/image'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/16/solid'
function Blog() {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a] ' id='BLOG'>
        <h1 className='heading'>MY<span className='text-yellow-400'>BLOG</span></h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
            
                <div className='w-[100%] relative h-[400px] '>

                <Image src="/image/mounaim.jpeg" width={100} height={100} alt='mounaim' layout='hh' className='object-cover'/>
                
            </div>
        </div>
        <div className='w-[90%] text-center mx-auto bg-[#09101a] relative  p-[2rem] mt-[-1rem]'>
<div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto '>
   Decembre 10,2023</div>
       
        <div className='flex flex-col md:flex-row items-center mt-[1rem] text-[#55e6a5]'>
          <div  className='flex items-center space-x-3'>
        <p className='text-white'> by Abdelmounaim</p>
        </div>
        <div className='flex items-center space-x-3'>
<ChatBubbleLeftRightIcon className='w-[2rem] mx-auto h-[2rem] text-[#55e6a5]' />
<p className='text-white'>comments (2)

</p>
         </div>
       </div>
         </div>  
    </div>
  )
}

export default Blog