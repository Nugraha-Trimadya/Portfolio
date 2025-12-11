'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, subtitle, year, image, description, orientation = 'landscape' }) {
  const heightClass = orientation === 'portrait' 
    ? 'h-[400px] sm:h-[500px] md:h-[600px]' 
    : 'h-[300px] sm:h-[350px] md:h-[400px]';
  
  // If year is provided, use Projects page style (white footer)
  if (year) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl group cursor-pointer bg-gray-100"
      >
        <div className="relative h-[400px] sm:h-[500px] flex items-center justify-center overflow-hidden">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={image ?? '/placeholder-wide.jpg'}
            alt={title} 
            className="w-full h-full object-cover group-hover:blur-sm transition-all duration-400" 
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
            <span className="text-sm text-gray-600">{year}</span>
          </div>
        </div>
      </motion.div>
    );
  }
  
  // Otherwise use gradient overlay style
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-lg group cursor-pointer"
    >
      <div className={`relative ${heightClass} overflow-hidden`}>
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={image ?? '/placeholder-wide.jpg'} 
          alt={title} 
          className="w-full h-full object-cover group-hover:blur-sm transition-all duration-400" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{title}</h3>
            <p className="text-sm sm:text-base mb-3 opacity-90">{subtitle}</p>
            {description && (
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed">{description}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
