import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Experience {
  id: number;
  period: string;
  title: string;
  company: string;
  description: string[];
  technologies: string[];
  isActive?: boolean;
}

const experiences: Experience[] = [
  {
    id: 1,
    period: "01/09/2023 - 05/01/2024",
    title: "FULL STACK WEB DEVELOPER (INTERNSHIP)",
    company: "WeHelp",
    description: [
      "Worked on a private school project focused on full-stack development.",
      "Collaboration with a team to achieve goals of the project.",
      "Responsible for the design and implementation of key features.",
      "Encountered technical challenges and resolved issues meetings during development."
    ],
    technologies: ["React", "tailwind", "vite", "laravel", "MySQL"]
  },
  {
    id: 2,
    period: "22/01/2024 - 01/05/2024",
    title: "FULL STACK WEB DEVELOPER (INTERNSHIP)",
    company: "Tekency",
    description: [
      "Worked on a private school project focused on full-stack development.",
      "Collaboration with a team to achieve goals of the project.",
      "Responsible for the design and implementation of key features.",
      "Encountered technical challenges and resolved issues meetings during development."
    ],
    technologies: ["Remix.js", "Node js", "Prisma", "GraphQL", "Polaris"]
  },
  {
    id: 3,
    period: "01/05/2024-27/08/2024",
    title: "WEB DEVELOPER",
    company: "XCO Agency",
    description: [
      "Involved in the development of Shopify projects. Responsible for customization and implementation of features on Shopify sites.",
      "Responsible for customization and implementation of features on Shopify sites.",
      "Work closely with the design and production teams development to ensure the quality of projects.",
      "Gained practical experience working with the platform Shopify."
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS", "Node js", "Prisma", "GraphQL", "Polaris","webhooks"]
  },
  {
    id: 4,
    period: "27/08/2024-10/5/2025",
    title: "FULL STACK WEB DEVELOPER",
    company: "APP 24",
    description: [
      "Currently working with Next.js and Laravel.",
      "Utilizing FileTilla for file management.",
      "Collaborating with a remote development team through meetings.",
      "Involved in the development of the e-commerce marketplace site: Flink.ma",
      "Responsible for the customization and implementation of features.",
      "Working closely with design and production teams to ensure project quality.",
      "Involved in the development of a marketplace e-commerce application using Next.js and Laravel.",
      "Collaborating with a remote development team through regular meetings.",
      "Responsible for frontend development, implementing APIs, and managing backend functionalities.",
      "Utilized Tailwind CSS for styling and Redux for state management.",
      "Developed image compression functions, search functionalities, and validation features.",
      "Gained practical experience in building full-stack applications."
    ],
    technologies: ["Next.js", "Laravel", "Redux", "Tailwind CSS", "MySQL",' FileZilla', 'Image Compression', 'Search Functionality', 'Validation'],
    isActive: true
  }
];

const ExperiencesComponent: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const particlesRef = useRef<THREE.Points>();

  useEffect(() => {
    setIsVisible(true);
    initThreeJS();
    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  const initThreeJS = () => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 5;

    sceneRef.current = scene;
    rendererRef.current = renderer;
    particlesRef.current = particles;

    const animate = () => {
      requestAnimationFrame(animate);
      
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.001;
        particlesRef.current.rotation.y += 0.002;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden" id='EXPERIENCES'>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ pointerEvents: 'none' }}
      />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4">
            EXPÉRIENCES
          </h1>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Timeline line - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-purple-400 opacity-30"></div>
          
          {/* Mobile timeline line - Left aligned */}
          <div className="md:hidden absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-purple-400 opacity-30"></div>
          
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-8 sm:mb-10 lg:mb-12 transform transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot - Desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-2 lg:border-4 border-slate-900 z-10"></div>
              
              {/* Timeline dot - Mobile */}
              <div className="md:hidden absolute left-6 top-6 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-2 border-slate-900 z-10"></div>
              
              {/* Experience card */}
              <div className={`
                w-full pl-16 md:pl-0
                md:w-5/12 
                ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}
              `}>
                <div
                  className={`backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 cursor-pointer group ${
                    selectedExp === index ? 'scale-102 md:scale-105 border-cyan-400/50 bg-white/10' : 'hover:scale-101 md:hover:scale-102'
                  } ${exp.isActive ? 'ring-1 lg:ring-2 ring-green-400/50' : ''}`}
                  onClick={() => setSelectedExp(index)}
                >
                  {/* Period */}
                  <div className="text-emerald-400 font-mono text-xs sm:text-sm mb-2 flex flex-wrap items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse flex-shrink-0"></div>
                    <span className="break-all sm:break-normal">{exp.period}</span>
                    {exp.isActive && (
                      <span className="bg-green-400 text-black text-xs px-2 py-1 rounded-full font-bold whitespace-nowrap">
                        ACTUEL
                      </span>
                    )}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white text-lg sm:text-xl lg:text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors leading-tight">
                    {exp.title}
                  </h3>
                  
                  {/* Company */}
                  <div className="text-purple-400 font-semibold text-base sm:text-lg mb-3 lg:mb-4">
                    {exp.company}
                  </div>
                  
                  {/* Description */}
                  <div className={`space-y-2 transition-all duration-500 ${
                    selectedExp === index ? 'max-h-96 opacity-100' : 'max-h-16 sm:max-h-20 opacity-70'
                  } overflow-hidden`}>
                    {exp.description.map((desc, i) => (
                      <div key={i} className="text-gray-300 text-xs sm:text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{desc}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className={`mt-3 lg:mt-4 transition-all duration-500 ${
                    selectedExp === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 px-2 sm:px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
            <span className="text-white font-medium text-sm sm:text-base">Disponible pour de nouveaux défis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesComponent;
