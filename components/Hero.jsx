'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { language } = useLanguage();

  const translations = {
    description: {
      en: 'A student in',
      id: 'Mahasiswa di bidang'
    },
    major: {
      en: 'Software & Game Development',
      id: 'Pengembangan Perangkat Lunak & Game'
    },
    passion: {
      en: 'with a passion for web development.',
      id: 'dengan minat dalam pengembangan web.'
    },
    rating: {
      en: 'Trusted by Me.',
      id: 'Dipercaya oleh Saya.'
    }
  };

  return (
    <section className="mt-6 px-4 sm:px-0">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-4">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[0.85]"
        >
          Graa's<span className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">®</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left md:text-right max-w-full md:max-w-xs"
        >
          <p className="muted text-sm sm:text-base">
            {translations.description[language]} <span className="font-semibold text-gray-800">{translations.major[language]}</span> {translations.passion[language]}
          </p>
          <div className="mt-4 md:mt-6 muted text-xs sm:text-sm">★★★★★ 5/5<br/>{translations.rating[language]}</div>
        </motion.div>
      </div>
    </section>
  );
}
