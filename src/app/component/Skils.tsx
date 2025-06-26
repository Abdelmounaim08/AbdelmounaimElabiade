import React from 'react'
import SklisItems from './SklisItems'
import SkilsLangaue from './SkilsLangaue'
import { motion } from 'framer-motion';
import TechSphere from './TechSphere';
function Skils() {
  return (
    <div className="pt-16 md:pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <motion.h1
        className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education & <span className="text-yellow-400">Skills</span>
      </motion.h1>
      
      <div className="w-4/5 mx-auto pt-16 md:pt-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <motion.div
          className="transform perspective-1000"
          initial={{ rotateY: 15 }}
          whileHover={{ rotateY: 0, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <SklisItems 
            title="React Developer" 
            year="2022-2025" 
            text="As a trained React developer, I possess the necessary skills and experience to build dynamic and responsive user interfaces. Proficiency in JavaScript and React.js allows me to create reusable components and effectively manage state using tools like Redux or Context API."
          />
          
          <SklisItems 
            title="Next JS Developer" 
            year="2023-2025" 
            text="As a skilled Next.js developer, I have a deep understanding of this powerful React framework and its capabilities. Next.js provides a robust and flexible platform for building high-performance, server-rendered React applications."
          />
          
          <SklisItems 
            title="Laravel Developer" 
            year="2023-2025" 
            text="As a trained Laravel developer, I have acquired comprehensive skills and hands-on experience in building robust web applications. Proficient in PHP and Laravel, I specialize in utilizing the framework's expressive syntax and extensive feature set."
          />
          
       
        </motion.div>
        
        <motion.div
          className="transform perspective-1000"
          initial={{ rotateY: -15 }}
          whileHover={{ rotateY: 0, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <SklisItems 
            title="Node JS Developer" 
            year="2022-2024" 
            text="As a skilled Node.js developer, I have expertise in building backend applications using the Node.js runtime environment. With Node.js, I can develop scalable and efficient web applications, leveraging its non-blocking, event-driven architecture."
          />
          
          <SklisItems 
            title="Remix TS Developer" 
            year="2024" 
            text="As an experienced Remix developer, I specialize in building powerful and scalable web applications. Remix is a server-rendered React framework that enables me to create dynamic and interactive user interfaces."
          />
          
          <SklisItems 
            title="Shopify Developer" 
            year="2024" 
            text="As an experienced Shopify developer, I specialize in building customized e-commerce solutions on the Shopify platform. With a deep understanding of Shopify's Liquid templating language and APIs, I can create visually appealing online stores."
          />
          
        
        </motion.div> 
      
      </div >
 
      <div className="relative h-full w-full rounded-xl overflow-hidden ">
            <TechSphere />
          </div>
     
    </div>
  )
}

export default Skils