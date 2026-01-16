'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { language } = useLanguage();
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Animate title from left
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Animate content from right with delay
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
    );
  }, []);

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
        <h1 
          ref={titleRef}
          className="hero-title text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[0.85]"
        >
          Graa's<span className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">®</span>
        </h1>

        <div 
          ref={contentRef}
          className="text-left md:text-right max-w-full md:max-w-xs"
        >
          <p className="muted text-sm sm:text-base">
            {translations.description[language]} <span className="font-semibold text-gray-800">{translations.major[language]}</span> {translations.passion[language]}
          </p>
          <div className="mt-4 md:mt-6 muted text-xs sm:text-sm">★★★★★ 5/5<br/>{translations.rating[language]}</div>
        </div>
      </div>
    </section>
  );
}
