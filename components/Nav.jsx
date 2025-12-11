'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const translations = {
    home: { en: 'Home', id: 'Beranda' },
    projects: { en: 'Projects', id: 'Proyek' },
    blog: { en: 'Blog', id: 'Blog' },
    about: { en: 'About', id: 'Tentang' },
    certificates: { en: 'Certificates', id: 'Sertifikat' },
    contact: { en: 'Contact', id: 'Kontak' }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg sm:text-xl font-bold">
          Graa's
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-full bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-full bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-full bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-4 lg:gap-6">
            <li><Link href="/" className="hover:opacity-70 transition text-sm">{translations.home[language]}</Link></li>
            <li><Link href="/projects" className="hover:opacity-70 transition text-sm">{translations.projects[language]}</Link></li>
            <li><Link href="/blog" className="hover:opacity-70 transition text-sm">{translations.blog[language]}</Link></li>
            <li><Link href="/about" className="hover:opacity-70 transition text-sm">{translations.about[language]}</Link></li>
            <li><Link href="/certificates" className="hover:opacity-70 transition text-sm">{translations.certificates[language]}</Link></li>
            <li><Link href="/contact" className="hover:opacity-70 transition text-sm">{translations.contact[language]}</Link></li>
          </ul>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 text-xs font-medium"
            aria-label="Toggle language"
            title={language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {language === 'en' ? 'EN' : 'ID'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-gray-200 bg-white"
        >
          <ul className="flex flex-col px-4 py-4 gap-4">
            <li><Link href="/" onClick={() => setIsOpen(false)} className="block hover:opacity-70 transition">{translations.home[language]}</Link></li>
            <li><Link href="/projects" onClick={() => setIsOpen(false)} className="block hover:opacity-70 transition">{translations.projects[language]}</Link></li>
            <li><Link href="/blog" onClick={() => setIsOpen(false)} className="block hover:opacity-70 transition">{translations.blog[language]}</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)} className="block hover:opacity-70 transition">{translations.about[language]}</Link></li>
            <li><Link href="/certificates" onClick={() => setIsOpen(false)} className="block hover:opacity-70 transition">{translations.certificates[language]}</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:opacity-70 transition">{translations.contact[language]}</Link></li>
            <li className="pt-2 border-t border-gray-200">
              <button
                onClick={toggleLanguage}
                className="w-full px-4 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {language === 'en' ? 'Bahasa Indonesia' : 'English'}
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
