'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

export default function CertificatesPage() {
  const { language } = useLanguage();
  const t = translations.certificates;
  
  const certificates = [
    {
      title: 'Belajar Dasar AI',
      issuer: 'Dicoding',
      date: '21 Oktober 2025',
      credential: 'NVP7J5E7VXRO',
      image: '/images/Belajar Dasar AI_page-0001.jpg',
      pdfUrl: '/certificates/Belajar_Dasar_AI.pdf',
      skills: ['AI', 'Machine Learning', 'Python']
    },
    {
      title: 'Memulai Pemrograman dengan Dart',
      issuer: 'Dicoding',
      date: '30 Oktober 2024',
      credential: 'N9ZOY9D2YPG5',
      image: '/images/Memulai Pemograman dengan Dart_page-0001.jpg',
      pdfUrl: '/certificates/Memulai_Pemograman_dengan_Dart.pdf',
      skills: ['Dart', 'Flutter', 'Programming']
    },
    {
      title: 'Belajar Prinsip Pemrograman SOLID',
      issuer: 'Dicoding',
      date: '16 Agustus 2024',
      credential: '1RXYLVM2KPVM',
      image: '/images/Belajar Prinsip Pemrograman SOLID_page-0001.jpg',
      pdfUrl: '/certificates/Belajar Prinsip Pemrograman SOLID.pdf',
      skills: ['SOLID', 'OOP', 'Programming']
    },
    {
      title: 'Google Play Academy',
      issuer: 'Google',
      date: '11 Juli 2024',
      credential: '121799629',
      image: '/images/Google Play Academy_page-0001.jpg',
      pdfUrl: '/certificates/Google_Play_Academy.pdf',
      skills: ['Android', 'App Development', 'Google Play']
    },
    {
      title: 'Belajar Java Dasar',
      issuer: 'Codepolitan',
      date: '11 September 2024',
      credential: 'YHEV6QS',
      image: '/images/Belajar Java Dasar_page-0001.jpg',
      pdfUrl: '/certificates/Belajar Java Dasar.pdf',
      skills: ['Java', 'Programming', 'OOP']
    },
    {
      title: 'Memulai Pemrograman Dengan Java',
      issuer: 'Dicoding',
      date: '06 September 2024',
      credential: 'QLZ97Y5Q2P5D',
      image: '/images/Memulai Pemrograman Dengan Java_page-0001.jpg',
      pdfUrl: '/certificates/Memulai Pemrograman Dengan Java.pdf',
      skills: ['Java', 'Programming', 'Basics']
    },
    {
      title: 'Belajar Dasar-dasar HTML dan CSS',
      issuer: 'Codepolitan',
      date: '6 September 2024',
      credential: 'JBDZ1MS',
      image: '/images/Belajar Dasar-dasar HTML dan CSS_page-0001.jpg',
      pdfUrl: '/certificates/Belajar Dasar-dasar HTML dan CSS.pdf',
      skills: ['HTML', 'CSS', 'Web Development']
    },
    {
      title: 'Belajar Dasar Pemrograman Web',
      issuer: 'Dicoding',
      date: '01 November 2023',
      credential: 'JLX1WY94NP72',
      image: '/images/Belajar Dasar Pemrograman Web_page-0001.jpg',
      pdfUrl: '/certificates/Belajar Dasar Pemrograman Web.pdf',
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Belajar Membuat Front-End Web untuk Pemula',
      issuer: 'Dicoding',
      date: '24 Desember 2023',
      credential: 'QLZ94QW6MP5D',
      image: '/images/Belajar Membuat Front-End Web untuk Pemula_page-0001.jpg',
      pdfUrl: '/certificates/Belajar Membuat Front-End Web untuk Pemula.pdf',
      skills: ['HTML', 'CSS', 'JavaScript', 'Front-End']
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
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold hero-title mb-6">{t.title[language]}</h1>
        <p className="text-lg sm:text-xl max-w-3xl">
          {t.description[language]}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <a 
              href={cert.pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-4">
                <div className="relative h-[300px] sm:h-[350px] overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={cert.image}
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:blur-sm transition-all duration-400" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                    <div className="p-6 text-white w-full">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{cert.title}</h3>
                          <p className="text-sm opacity-90">{cert.issuer}</p>
                        </div>
                        <svg className="w-8 h-8 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            <div className="card">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">{cert.date}</span>
                <span className="text-xs text-gray-500 font-mono">{cert.credential}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
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
        className="mt-16 bg-black text-white rounded-2xl p-8 sm:p-12 md:p-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-200">
            {t.continuousLearning[language]}
          </p>
        </div>
      </motion.section>
    </div>
  );
}
