'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const featuredPost = {
    title: 'The future of minimalist design',
    excerpt: 'Exploring how simplicity continues to shape modern digital experiences and why less is always more in contemporary design.',
    date: 'Dec 5, 2025',
    readTime: '8 min read',
    image: '/images/project1.png',
    category: 'Design',
    author: 'Graa\'s Team'
  };

  const posts = [
    {
      title: 'Building brands that last',
      excerpt: 'Our approach to creating timeless brand identities that stand the test of time.',
      date: 'Nov 28, 2025',
      readTime: '5 min read',
      image: '/images/project2.png',
      category: 'Branding',
      author: 'Graa\'s Team'
    },
    {
      title: '5 principles of effective web design',
      excerpt: 'Key strategies we use to create websites that convert and engage.',
      date: 'Nov 15, 2025',
      readTime: '6 min read',
      image: '/images/project3.png',
      category: 'Web Design',
      author: 'Graa\'s Team'
    },
    {
      title: 'Color psychology in branding',
      excerpt: 'Understanding how colors influence perception and drive brand recognition.',
      date: 'Nov 8, 2025',
      readTime: '7 min read',
      image: '/images/project5 (2).png',
      category: 'Branding',
      author: 'Graa\'s Team'
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
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold hero-title mb-4">Blog.</h1>
            <div className="flex flex-wrap gap-2 mt-6">
              <button className="px-4 py-2 bg-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition">
                All Posts
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition">
                Design
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition">
                Branding
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition">
                Development
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition">
                Strategy
              </button>
            </div>
          </div>
          <div className="text-left md:text-right max-w-md">
            <p className="text-base sm:text-lg leading-relaxed">
              Thoughts on design, branding, and building meaningful digital experiences.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Featured Post */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl group cursor-pointer mb-12 bg-gray-100 hover:shadow-xl transition-shadow"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative h-[300px] md:h-[500px] overflow-hidden">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src={featuredPost.image}
              alt={featuredPost.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                Featured
              </span>
            </div>
          </div>
          <div className="p-8 sm:p-12 flex flex-col justify-center bg-white">
            <span className="text-xs font-semibold text-gray-500 mb-2">{featuredPost.category}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 group-hover:opacity-70 transition">
              {featuredPost.title}
            </h2>
            <p className="text-gray-600 mb-6 text-base">{featuredPost.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span>{featuredPost.author}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
              </div>
              <span>{featuredPost.readTime}</span>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Recent Posts */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Recent Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100">
              <div className="relative h-56 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={post.image}
                  alt={post.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-gray-500">{post.category}</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:opacity-70 transition">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 bg-black text-white rounded-2xl p-8 sm:p-12 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Get the latest insights, design tips, and industry trends delivered to your inbox every week.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div>
      </motion.section>
    </div>
  );
}