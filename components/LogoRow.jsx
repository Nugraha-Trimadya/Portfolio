'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function LogoRow() {
  const { language } = useLanguage();
  
  const logos = [
    { name: 'SMK Wikrama', src: '/images/wikrama logo.png' },
    { name: 'SAI', src: '/images/sai.jpg' }
  ];

  const translations = {
    title: {
      en: 'Where I work:',
      id: 'Tempat saya bekerja:'
    }
  };
  
  return (
    <div className="mt-16">
      <p className="text-xs sm:text-sm text-gray-500 mb-4">{translations.title[language]}</p>
      <div className="flex gap-6 sm:gap-8 items-center overflow-x-auto py-4">
        {logos.map((logo, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            className="flex-shrink-0 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <img 
              src={logo.src} 
              alt={logo.name}
              className="h-12 sm:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
