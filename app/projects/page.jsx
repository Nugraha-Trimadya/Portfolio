'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations;
  
  const projects = [
    {
      title: 'Weather App',
      subtitle: 'Forecast Weather App Use React+Vite',
      year: '2025',
      category: 'Web Dev',
      image: '/images/project1.png'
    },
    {
      title: 'Ticketing',
      subtitle: 'Ticketing App Use Flutter',
      year: '2025',
      category: 'Mobile Dev',
      image: '/images/project2.png'
    },
    {
      title: 'Cashier',
      subtitle: 'E-commerce Platform Use Flutter',
      year: '2024',
      category: 'Mobile Dev',
      image: '/images/project3.png'
    },
    {
      title: 'Public Complaints',
      subtitle: 'Public Complaints App Use React+Vite',
      year: '2024',
      category: 'Web Dev',
      image: '/images/project5 (2).png'
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-0 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold hero-title"
            >
              {t.home.projectsTitle[language]}
            </motion.h1>
            <div className="flex flex-wrap gap-2 mt-6">
              <button className="px-4 py-2 bg-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition">
                {t.home.allProjects[language]}
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition">
                {t.home.webDev[language]}
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition">
                {t.home.mobileDev[language]}
              </button>
            </div>
          </div>
          <div className="text-left md:text-right max-w-md">
            <p className="text-base sm:text-lg leading-relaxed">
              {t.projects.description[language]}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-2xl group cursor-pointer bg-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={project.image}
                alt={project.title} 
                className="w-full h-full object-cover group-hover:blur-sm transition-all duration-400" 
              />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.subtitle}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-semibold text-gray-900">{project.year}</span>
                  <svg className="w-6 h-6 mt-2 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
      </motion.section>
    </div>
  );
}
