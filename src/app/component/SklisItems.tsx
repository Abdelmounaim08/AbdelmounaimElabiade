import { motion } from 'framer-motion'
import React from 'react'
interface Props{
    title:string,
    year:string,
text:string,
}

function SklisItems({title,year,text}:Props) {
  return (
    <motion.div 
      className="mb-8 md:mb-16 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="px-6 text-emerald-400 py-2 font-bold text-lg border-2 border-emerald-400 inline-block">
        {year}
      </span>
      <h3 className="mt-6 font-semibold uppercase mb-4 text-xl sm:text-2xl md:text-3xl text-white">
        {title}
      </h3>
      <p className="text-gray-400 font-normal text-base opacity-80">
        {text}
      </p>
    </motion.div>
  )
}

export default SklisItems