import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Composant de carte de projet individuelle avec effet 3D
interface ProjectCardProps {
  imageUrl: string;
  projectLink: string;
  title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, projectLink, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-64 md:h-80 group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <a 
        href={projectLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block w-full h-full"
      >
        <motion.div
          className="w-full h-full relative rounded-lg shadow-xl overflow-hidden"
          animate={{ 
            scale: isHovered ? 1.03 : 1,
            boxShadow: isHovered ? "0 20px 25px -5px rgba(0, 0, 0, 0.2)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ duration: 0.6, type: "spring", stiffness: 70 }}
        >
          {/* Contenu de la carte */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src={imageUrl} 
              alt="Project preview" 
              layout="fill" 
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">{title}</div>
            
            {/* Icône animée au survol */}
            <motion.div 
              className="absolute top-4 right-4 bg-yellow-500 rounded-full p-2"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                rotate: isHovered ? 180 : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
};

// Composant de catégorie de projet
interface ProjectCategoryProps {
  title: string;
  projects: { imageUrl: string; link: string; title: string }[];
}

const ProjectCategory: React.FC<ProjectCategoryProps> = ({ title, projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h3 className="text-white uppercase text-center font-bold text-xl mb-8 relative">
        <span className="relative z-10">{title}</span>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-yellow-500"></span>
      </h3>
      <div className="w-[92%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              imageUrl={project.imageUrl}
              projectLink={project.link}
              title={project.title}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Composant principal Project
function Project() {
  // Données des projets
  const projectCategories = [
    {
      title: "Restaurant Manager",
      projects: [
        { imageUrl: '/image/p1White.jpeg', link: 'https://github.com/Abdelmounaim08/restaurant-', title: 'Interface Principale' },
        { imageUrl: '/image/p1PopUp.jpeg', link: 'https://github.com/Abdelmounaim08/restaurant-', title: 'Fenêtre Pop-up' },
        { imageUrl: '/image/commande.jpeg', link: 'https://github.com/Abdelmounaim08/restaurant-', title: 'Système de Commande' }
      ]
    },
    {
      title: "Theme Maestro",
      projects: [
        { imageUrl: '/image/themeMeastro1.png', link: 'https://apps.shopify.com/maestro-theme-scheduler', title: 'Dashboard' },
        { imageUrl: '/image/themeMeastro2.png', link: 'https://apps.shopify.com/maestro-theme-scheduler', title: 'Configuration' },
        { imageUrl: '/image/themeMeastro3.png', link: 'https://apps.shopify.com/maestro-theme-scheduler', title: 'Statistiques' }
      ]
    },
    {
      title: "École Al Jabr",
      projects: [
        { imageUrl: '/image/aljaber.png', link: 'https://ecolealjabr.com/', title: 'Page d\'accueil' },
        { imageUrl: '/image/aljaberEcole.png', link: 'https://ecolealjabr.com/', title: 'Section Formation' },
        { imageUrl: '/image/aljaberDSh.png', link: 'https://ecolealjabr.com/', title: 'Tableau de bord' }
      ]
    },
    {
      title: " Flink",
      projects: [
        { imageUrl: '/image/flink1.png', link: 'https://flink.ma/', title: 'Flink Marketplace' },
        { imageUrl: '/image/flink2.png', link: 'https://flink.ma/', title: 'Flink Mobile' },
        { imageUrl: '/image/flink.png', link: 'https://flink.ma/', title: 'Flink Analytics' },
        { imageUrl: '/image/flink34.png', link: 'https://flink.ma/', title: 'Flink Message' },
        { imageUrl: '/image/flink4.png', link: 'https://flink.ma/', title: 'Flink Flux' },
        { imageUrl: '/image/flink5.png', link: 'https://flink.ma/', title: 'Flink Profile' }


      ]
    }
  ];

  return (
    <div className=" bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16 md:pt-32 pb-16" id="PROJECT">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h1 className="text-center text-4xl md:text-5xl font-bold text-white">
          Mes <span className="text-yellow-500">Projets</span>
        </h1>
        <motion.div 
          className="mx-auto mt-6 w-24 h-1 bg-yellow-500"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>
        <p className="text-gray-400 text-center mt-6 max-w-2xl mx-auto">
          Découvrez mes réalisations professionnelles, des applications web aux plateformes e-commerce.
          Cliquez sur chaque projet pour voir plus de détails.
        </p>
      </motion.div>

      {projectCategories.map((category, index) => (
        <ProjectCategory 
          key={index}
          title={category.title}
          projects={category.projects}
        />
      ))}
      
      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <a 
          href="https://github.com/Abdelmounaim08" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-3 bg-yellow-500 text-gray-900 font-bold rounded-md hover:bg-yellow-400 transition-colors duration-300"
        >
          Voir tous mes projets sur GitHub
        </a>
      </motion.div>
    </div>
  );
}

export default Project;