
import React from 'react'
import Particle from './component/Particle'
import { ExampleComponent } from './component/TextEffect'
import Image from 'next/image'


import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
export const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1bXkTNf99en0pq25gU_smf7XuQVw-olF4/view?usp=sharing';
    link.download = 'ElabiadeCv.pdf';
    link.click();
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950/90 to-slate-900 py-[17vh]"
      id="home"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.2),transparent_35%)]" />
      <Particle />

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center h-full">
        <div className="flex flex-col justify-center h-full mt-6 rounded-3xl border border-white/10 bg-white/10 p-6 md:p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
          <div className="inline-flex w-fit items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
            Full Stack Developer • Société Logicat
          </div>

          <h1 className="mt-5 text-3xl md:text-5xl text-white font-bold leading-tight text-center lg:text-left">
            HI, I{"'"}M{" "}
            <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-cyan-300 bg-clip-text text-transparent md:inline">
              ABDELMOUNAIM !
            </span>
          </h1>

          <ExampleComponent />

          <p className="mt-4 text-sm md:text-base text-slate-200/90 max-w-2xl text-center lg:text-left mx-auto lg:mx-0 leading-relaxed">
            I build modern, scalable web experiences from the UI to the backend. I enjoy turning ideas into reliable products with strong design, smooth performance, and thoughtful architecture.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold uppercase text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <span>Download CV</span>
              <ArrowDownTrayIcon className="w-5 h-5" />
            </button>

            <a
              href="#CONTACT"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300 hover:text-cyan-200"
            >
              Let&apos;s talk
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'Laravel', 'Tailwind CSS'].map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-sm text-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] border border-white/15 bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-transparent p-3 shadow-2xl shadow-cyan-950/40">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src="/image/mounaim01.jpeg"
                alt="Abdelmounaim Elabiade"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
