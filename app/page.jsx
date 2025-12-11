'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import LogoRow from '../components/LogoRow';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function Home() {
  const { language } = useLanguage();
  const t = translations.home;

  return (
    <div className="px-4 sm:px-6 lg:px-0">
      <Hero />
      <div className="mt-8">
        <LogoRow />
      </div>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-12 relative group cursor-pointer overflow-hidden rounded-lg"
      >
        <motion.img 
          src="/images/pink3.jpg" 
          alt="hero art" 
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-white px-6"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Graa's®</h3>
            <p className="text-sm sm:text-base md:text-lg">{t.heroSubtitle[language]}</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10"
      >
        <h3 className="text-xs muted">{t.whyUs[language]}</h3>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-3 mb-8">
          {t.mainTitle[language]}<br className="hidden sm:block" />
          <span className="text-gray-400">{t.mainSubtitle[language]}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card overflow-hidden p-0"
          >
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <img src="/images/piano.jpg" alt="Purposeful Design" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-base mb-2">{t.card1Title[language]}</h4>
              <p className="muted text-sm mb-4">{t.card1Subtitle[language]}</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-xs">●</span> {t.collaborative[language]}
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-xs">●</span> {t.quickTurnaround[language]}
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-xs">●</span> {t.clearComm[language]}
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-xs">●</span> {t.consistentQuality[language]}
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-xs">●</span> {t.reliableSupport[language]}
                </li>
              </ul>
              <button className="mt-6 text-sm px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                {t.getStarted[language]}
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card overflow-hidden p-0 relative"
          >
            <img src="/images/umbrella.jpg" alt="Client Focused" className="w-full h-full object-cover absolute inset-0" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card grid grid-cols-1 gap-6"
          >
            <div>
              <div className="mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-base mb-2">{t.streamlinedProcess[language]}</h4>
              <p className="muted text-sm">
                {t.streamlinedDesc[language]}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="mb-3">
                <span className="text-2xl">⭘</span>
              </div>
              <h4 className="font-semibold text-base mb-2">{t.scalableDesign[language]}</h4>
              <p className="muted text-sm">
                {t.scalableDesc[language]}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="mb-3">
                <span className="text-2xl">🕐</span>
              </div>
              <h4 className="font-semibold text-base mb-2">{t.support247[language]}</h4>
              <p className="muted text-sm">
                {t.supportDesc[language]}
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card overflow-hidden p-0 relative"
          >
            <img src="/images/my foot.jpg" alt="portrait" className="w-full h-full object-cover absolute inset-0" />
            <div className="relative z-10 p-6 bg-gradient-to-t from-black/80 to-transparent h-full flex flex-col justify-end">
              <h4 className="font-semibold text-lg mb-2 text-white">{t.designIntent[language]}</h4>
              <p className="text-gray-300 text-sm">{t.noExcess[language]}</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 mb-12"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs muted mb-2"
            >
              {t.featuredProjects[language]}
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold hero-title"
            >
              {t.projectsTitle[language]}
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left md:text-right max-w-md mt-6 md:mt-0"
          >
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {t.projectsDesc[language]}
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {[t.allProjects[language], t.webDev[language], t.mobileDev[language]].map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                index === 0 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-black hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ProjectCard title="Weather App" subtitle="Forecast Weather App Use React+Vite" year="2025" image="/images/project1.png" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProjectCard title="Ticketing" subtitle="Ticketing App Use Flutter" year="2025" image="/images/project2.png" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ProjectCard title="Cashier" subtitle="E-commerce Platform Use Flutter" year="2024" image="/images/project3.png" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ProjectCard title="Public Complaints" subtitle="Public Complaints App Use React+Vite" year="2024" image="/images/project5 (2).png" />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href="/projects" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 text-sm font-medium group"
          >
            {t.viewAllProjects[language]}
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}
