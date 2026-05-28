import React from 'react';
import { motion } from 'framer-motion';
import { blogData } from '../../data/blogData';

export const Blog: React.FC = () => {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  };

  return (
    <section id="blog" className="py-24 bg-white dark:bg-darkBg relative overflow-hidden">
      {/* Design accents */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-black tracking-widest text-primary dark:text-accent-sky uppercase block mb-3">
              LATEST ARTICLES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy dark:text-white leading-tight">
              Insights & Resources
            </h2>
          </div>
          
          {/* More Articles CTA */}
          <a 
            href="#blog" 
            className="mt-6 sm:mt-0 inline-flex items-center px-6 py-3 font-bold text-sm bg-accent-light dark:bg-navy/40 text-primary dark:text-accent-sky hover:bg-primary hover:text-white dark:hover:bg-accent-sky dark:hover:text-navy rounded-full transition-colors group"
          >
            <span>More Articles</span>
            <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* 4-Card Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogData.map((blog) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-darkBg-card border border-blue-50/50 dark:border-darkBg-border rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Top Zoom Frame */}
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="py-1 px-3 bg-primary/95 text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6">
                  {/* Date & Read Time */}
                  <div className="flex items-center space-x-3 text-xs font-bold text-text-secondary dark:text-slate-400 mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-navy dark:text-white leading-snug mb-3 group-hover:text-primary dark:group-hover:text-accent-sky transition-colors duration-300">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-text-secondary dark:text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-6 pt-2">
                <a 
                  href="#blog"
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-primary dark:text-accent-sky hover:underline"
                >
                  <span>Read More</span>
                  <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Blog;
