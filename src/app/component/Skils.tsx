import React from 'react';
import { motion } from 'framer-motion';
import SklisItems from './SklisItems';
import TechSphere from './TechSphere';

function Skils() {
  const techStack = [
    { name: 'Next.js', detail: 'Modern fullstack applications' },
    { name: 'React', detail: 'Reusable UI systems' },
    { name: 'TypeScript', detail: 'Reliable and scalable code' },
    { name: 'Node.js', detail: 'Fast backend services' },
    { name: 'Laravel', detail: 'Robust business logic' },
    { name: 'WordPress', detail: 'Flexible content-driven sites' },
    { name: 'Elementor', detail: 'Visual page building' },
    { name: 'Tailwind CSS', detail: 'Clean and responsive design' },
    { name: 'Prisma', detail: 'Type-safe data access' },
    { name: 'PostgreSQL', detail: 'Structured data storage' },
    { name: 'DevOps', detail: 'Deployment and automation' },
    { name: 'VPS', detail: 'Server hosting and management' },
    { name: 'Claude', detail: 'AI-assisted development' },
    { name: 'AI Agents', detail: 'Automation and intelligent workflows' },
    { name: 'n8n', detail: 'No-code automation pipelines' },
    { name: 'Git & GitHub', detail: 'Collaborative workflows' },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-16 md:py-24">
      <motion.h1
        className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education & <span className="text-yellow-400">Skills</span>
      </motion.h1>

      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-300 md:text-base">
        I combine modern frontend, backend, and product-thinking skills to deliver polished digital experiences.
      </p>

      <div className="mx-auto mt-8 flex flex-wrap justify-center gap-3">
        {techStack.map((item) => (
          <div key={item.name} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur">
            <span className="font-semibold text-cyan-300">{item.name}</span>
            <span className="ml-2 text-slate-300">{item.detail}</span>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        <motion.div
          className="transform perspective-1000"
          initial={{ rotateY: 15 }}
          whileHover={{ rotateY: 0, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 100 }}
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
          transition={{ type: 'spring', stiffness: 100 }}
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
      </div>

      <div className="relative mt-12 h-full w-full overflow-hidden rounded-xl">
        <TechSphere />
      </div>
    </div>
  );
}

export default Skils;
