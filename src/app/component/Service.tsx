"use client";

import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import React from "react";

const services = [
  {
    title: "Frontend",
    description:
      "I'm an experienced Front-end developer specializing in creating attractive and interactive user interfaces. I use modern technologies like React.js, Next.js and prioritize accessibility, performance and clean UI/UX.",
    icon: CodeBracketSquareIcon,
    color: "text-cyan-400",
    border: "hover:border-cyan-400/50 hover:shadow-cyan-400/20",
    text: "text-cyan-300",
    delay: 0.1,
  },
  {
    title: "Backend",
    description:
      "As a skilled Back-end developer, I build robust APIs using Node.js and PHP (Laravel). I focus on clean architecture, secure systems and efficient database design for high performance apps.",
    icon: RocketLaunchIcon,
    color: "text-purple-400",
    border: "hover:border-purple-400/50 hover:shadow-purple-400/20",
    text: "text-purple-300",
    delay: 0.2,
  },
  {
    title: "Fullstack",
    description:
      "I'm a versatile Full-stack developer capable of managing both frontend and backend. I ensure smooth integrations between the client and server, delivering complete, scalable solutions.",
    icon: CommandLineIcon,
    color: "text-indigo-400",
    border: "hover:border-indigo-400/50 hover:shadow-indigo-400/20",
    text: "text-indigo-300",
    delay: 0.3,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 80,
    },
  }),
};

export default function Service() {
  return (
    <section
      id="service"
      className="bg-gradient-to-bl from-purple-900 via-slate-800 to-slate-900 py-20 px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl md:text-5xl font-bold text-white"
      >
        My <span className="text-yellow-400">Services</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] max-w-7xl mx-auto mt-16">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className={`group rounded-2xl p-6 text-white text-center 
              bg-gradient-to-br from-slate-800/70 via-slate-700/70 to-slate-800/70 
              border border-slate-600/30 backdrop-blur-md hover:scale-[1.03] 
              hover:rotate-1 transition-all duration-300 cursor-default
              ${service.border}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // variants={cardVariant}
          >
            <service.icon
              className={`w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ${service.color}`}
            />
            <h3 className={`text-2xl font-semibold mb-4 uppercase ${service.text}`}>
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
