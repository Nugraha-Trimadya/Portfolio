'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations.about;

  return (
    <div className="px-4 sm:px-6 lg:px-0 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold hero-title mb-8"
        >
          {t.title[language]}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed mb-6">
            {t.intro1[language]} <span className="text-black font-bold">Nugraha Trimadya</span>.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            {t.intro2[language]} <span className="font-semibold text-gray-800">Software & Game Development</span> {t.intro3[language]} <span className="font-semibold text-gray-800">{t.intro4[language]}</span> {t.intro5[language]}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mt-4">
            {t.intro6[language]} <span className="font-semibold text-gray-800">{t.intro7[language]}</span>.
          </p>
        </motion.div>
      </motion.div>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="relative overflow-hidden rounded-2xl group cursor-pointer bg-gray-100">
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            <img 
              src="/images/pink3.jpg"
              alt="Our Studio" 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
            />
          </div>
        </div>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card"
        >
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="font-bold text-lg mb-3">{t.techUse[language]}</h3>
          <p className="muted text-sm leading-relaxed">
            {t.techDesc[language]}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card"
        >
          <div className="text-4xl mb-4">✦</div>
          <h3 className="font-bold text-lg mb-3">{t.whatIDo[language]}</h3>
          <p className="muted text-sm leading-relaxed">
            {t.whatIDoDesc[language]}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card"
        >
          <div className="text-4xl mb-4">🕐</div>
          <h3 className="font-bold text-lg mb-3">{t.workValues[language]}</h3>
          <p className="muted text-sm leading-relaxed">
            {t.workValuesDesc[language]}
          </p>
        </motion.div>
      </section>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white rounded-2xl p-8 sm:p-12 md:p-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{t.letsWork[language]}</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            {t.readyDesc[language]}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:nugrahatrimadya30@gmail.com" 
              className="text-lg font-semibold hover:opacity-70 transition"
            >
              nugrahatrimadya30@gmail.com
            </a>
            <span className="hidden sm:block text-gray-500">•</span>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
            >
              {t.getInTouch[language]}
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
