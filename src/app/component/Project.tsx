import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Github, X, Zap } from 'lucide-react';

interface ProjectCardProps {
  images: string[];
  projectLink: string;
  title: string;
  description?: string;
  technologies?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  images, 
  projectLink, 
  title, 
  description,
  technologies = []
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);

  // Auto-slide des images
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [images.length]);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleProjectLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(projectLink, '_blank', 'noopener,noreferrer');
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowAllTechnologies(false);
    }
  };

  return (
    <>
      <div
        className="relative w-full group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`w-full relative rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 transition-all duration-700 transform ${
            isHovered ? 'scale-[1.02] shadow-cyan-500/25 border-cyan-400/30' : ''
          }`}
        >
          {/* Layout Flex avec Image à gauche et Contenu à droite */}
          <div className="flex flex-col md:flex-row min-h-[320px]">
            
            {/* Section Image Slider - Gauche */}
            <div className="md:w-2/5 relative overflow-hidden">
              {/* Container du slider */}
              <div className="relative w-full h-full">
                {/* Images avec Next.js Image */}
                <div className="relative w-full h-full">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${title} - Image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                        priority={index === 0}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                  ))}
                </div>

                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/60 transition-opacity duration-500 ${
                  isHovered ? 'opacity-80' : 'opacity-40'
                }`}></div>

                {/* Navigation du slider (visible au hover si plusieurs images) */}
                {images.length > 1 && (
                  <>
                    {/* Boutons de navigation */}
                    <div className={`absolute inset-y-0 left-0 right-0 flex items-center justify-between p-4 transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <button
                        onClick={prevImage}
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-200 transform hover:scale-110"
                        aria-label="Image précédente"
                      >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-200 transform hover:scale-110"
                        aria-label="Image suivante"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Indicateurs de pagination */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setCurrentImageIndex(index);
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'bg-cyan-400 w-6' 
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                          aria-label={`Aller à l'image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {/* Icône de lien externe */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={handleProjectLinkClick}
                  className={`bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-3 transform transition-all duration-500 hover:scale-125 ${
                    isHovered ? 'scale-110 rotate-12 opacity-100' : 'scale-75 opacity-70'
                  }`}
                  aria-label="Ouvrir le projet dans un nouvel onglet"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Compteur d'images */}
              {images.length > 1 && (
                <div className="absolute top-4 left-4">
                  <div className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    {currentImageIndex + 1}/{images.length}
                  </div>
                </div>
              )}
            </div>
            
            {/* Section Contenu - Droite */}
            <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-slate-800/90 to-slate-900/90">
              
              {/* Header du contenu */}
              <div className="space-y-4">
                <h4 className={`text-white font-bold text-xl md:text-2xl leading-tight transition-all duration-300 ${
                  isHovered ? 'text-cyan-400 transform translate-x-2' : ''
                }`}>
                  {title}
                </h4>
                
                {/* Ligne décorative */}
                <div className={`h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-500 ${
                  isHovered ? 'w-20' : 'w-12'
                }`}></div>
                
                {description && (
                  <p className={`text-gray-300 text-sm md:text-base leading-relaxed transition-all duration-500 ${
                    isHovered ? 'text-gray-200 transform translate-x-1' : ''
                  }`}>
                    {description}
                  </p>
                )}
              </div>
              
              {/* Footer du contenu */}
              <div className="space-y-4 mt-6">
                
                {/* Technologies */}
                {technologies.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm transition-all duration-300 ${
                            isHovered ? 'border-cyan-400/50 bg-gradient-to-r from-cyan-500/30 to-purple-500/30' : ''
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Call to action */}
                <div className={`flex items-center gap-3 transition-all duration-500 ${
                  isHovered ? 'transform translate-x-2' : ''
                }`}>
                  <button
                    onClick={handleProjectLinkClick}
                    className={`flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-all duration-300`}
                  >
                    <span>Voir le projet</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                      isHovered ? 'transform translate-x-1' : ''
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal pour toutes les technologies */}
      {showAllTechnologies && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-cyan-400/20 shadow-2xl">
            {/* Header du modal */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                Technologies utilisées - {title}
              </h3>
              <button
                onClick={() => setShowAllTechnologies(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Ligne décorative */}
            <div className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full w-16 mb-6"></div>
            
            {/* Liste de toutes les technologies */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium text-center backdrop-blur-sm hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105"
                >
                  {tech}
                </div>
              ))}
            </div>
            
            {/* Footer du modal */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm text-center">
                {technologies.length} technologie{technologies.length > 1 ? 's' : ''} au total
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Composant de catégorie de projet
interface ProjectCategoryProps {
  title: string;
  projects: { images: string[]; link: string; title: string; description?: string; technologies?: string[] }[];
  index: number;
}

const ProjectCategory: React.FC<ProjectCategoryProps> = ({ title, projects, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 300);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`mb-20 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {/* Titre de la catégorie */}
      <div className="text-center mb-12 relative">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-full px-8 py-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          <h3 className="text-white font-bold text-2xl">{title}</h3>
        </div>
      </div>
      
      {/* Grille de projets - Une seule colonne pour le nouveau layout */}
      <div className="w-[95%] mx-auto space-y-8">
        {projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className={`transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${projectIndex * 150}ms` }}
          >
            <ProjectCard
              images={project.images}
              projectLink={project.link}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Composant principal Project
function Project() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Données des projets avec toutes les images
const projectCategories = [
  {
    title: "Cannabis Company",
    projects: [
      {
        images: [
          "/image/canabis.png",
          "/image/canabis1.png",
          "/image/canabis2.png",
          "/image/canabis3.png"
        ],
        link: "https://canabis-template.vercel.app/home",
        title: "Cannabis Company",
        description: `The Cannabis Template website is a modern mockup designed for businesses in the legal cannabis or CBD sector.
It features a clean, responsive and professional interface, showcasing cannabis-based products with a premium visual style.`,
        technologies: ["Next js", "TypeScript", "Tailwind CSS", "Node.js", "MySQL", "Prisma"]
      }
    ]
  },
  {
    title: "Theme Maestro",
    projects: [
      {
        images: [
          "/image/themeMeastro1.png",
          "/image/themeMeastro2.png",
          "/image/themeMeastro3.png"
        ],
        link: "https://apps.shopify.com/maestro-theme-scheduler",
        title: "Advanced Shopify App",
        description: `Sophisticated dashboard for managing and automatically scheduling Shopify themes.
Allows merchants to plan theme changes based on specific events or time periods.`,
        technologies: ["Shopify API", "React", "Polaris", "GraphQL", "Webhook"]
      }
    ]
  },
  {
    title: "Al Jabr School",
    projects: [
      {
        images: [
          "/image/aljaber.png",
          "/image/aljaberEcole.png",
          "/image/aljaberDSh.png"
        ],
        link: "https://ecolealjabr.com/",
        title: "Educational Website",
        description: `Complete educational platform with a management system for courses, students and teachers.
Modern and intuitive interface to facilitate learning and administration.`,
        technologies: [
          "Next.js",
          "React",
          "Tailwind CSS",
          "Node.js",
          "MySQL",
          "Laravel",
          "cronJob",
          "fileZilla"
        ]
      }
    ]
  },
  {
    title: "Flink Marketplace",
    projects: [
      {
        images: [
          "/image/flink1.png",
          "/image/flink2.png",
          "/image/flink.png",
          "/image/flink34.png",
          "/image/flink4.png",
          "/image/flink5.png"
        ],
        link: "https://flink.ma/",
        title: "Complete E-commerce Platform",
        description: `Modern marketplace with a secure payment system, multi-vendor management,
integrated messaging system and advanced analytics. Designed to handle high volumes of transactions and users.`,
        technologies: [
          "Next.js",
          "Laravel",
          "MySQL",
          "Redis",
          "Stripe",
          "WebSocket",
          "Tailwind CSS",
          "cronJob",
          "fileZilla"
        ]
      }
    ]
  }
];



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 md:py-20 relative overflow-hidden" id="PROJECT">
      {/* Particules de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-full px-8 py-4 mb-8">
            <Github className="w-6 h-6 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projects</span>
            </h1>
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          
            Discover my professional achievements, from modern web applications to complex e-commerce platforms.
Each project represents a technical challenge tackled with passion and expertise.
          </p>
        </div>

        {/* Catégories de projets */}
        {projectCategories.map((category, index) => (
          <ProjectCategory 
            key={index}
            title={category.title}
            projects={category.projects}
            index={index}
          />
        ))}
        
        {/* Call to action */}
        <div className="text-center mt-20">
          <a 
            href="https://github.com/Abdelmounaim08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <Github className="w-5 h-5" />
            <span>Explore my projects</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;