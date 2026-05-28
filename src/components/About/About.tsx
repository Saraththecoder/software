import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-darkBg relative overflow-hidden">
      {/* Glow circles */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-xs font-black tracking-widest text-primary dark:text-accent-sky uppercase block mb-3">
              ABOUT US
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy dark:text-white leading-tight mb-4">
              Oryon Technologies Inc.
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-primary dark:text-accent-sky mb-6">
              Empowering Businesses with Innovative IT Staffing & Consulting Solutions
            </h3>
            
            <p className="text-text-secondary dark:text-slate-300 font-medium text-base leading-relaxed mb-8">
              In today's fast-paced digital world, businesses need robust IT talent and technology solutions to stay competitive. At Oryon Technologies Inc., we specialize in connecting high-growth companies with elite tech professionals — from contract staffing to full-time placement and technology consulting. 
            </p>
            <p className="text-text-secondary dark:text-slate-300 font-medium text-base leading-relaxed mb-10">
              With a team of skilled recruitment professionals and a commitment to innovation and reliability, we empower businesses with talent-driven solutions that enhance productivity, streamline hiring, and fuel long-term growth.
            </p>

            {/* Outlined CTA Button */}
            <a 
              href="#services"
              className="inline-flex items-center px-8 py-3.5 text-sm font-bold bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-accent-sky dark:text-accent-sky dark:hover:bg-accent-sky dark:hover:text-navy rounded-full transition-all duration-300 group"
            >
              <span>Discover More</span>
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right Image Block */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {/* Design accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-xl dark:border-accent-sky hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-xl dark:border-accent-sky hidden sm:block" />
            
            {/* Image Wrapper */}
            <div className="relative overflow-hidden rounded-2xl shadow-premium-hover aspect-[4/3] sm:aspect-video lg:aspect-square group">
              <img 
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=800" 
                alt="Oryon Technologies Professional Office Setup" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 via-primary/20 to-transparent dark:from-navy-dark/70 dark:via-darkBg/30 mix-blend-multiply" />
            </div>

            {/* Float Floating Experience card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white dark:bg-darkBg-card border border-blue-50 dark:border-darkBg-border p-6 rounded-2xl shadow-premium hidden sm:flex items-center space-x-4 max-w-[240px]"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                10+
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-navy dark:text-white">Years of Global</h4>
                <p className="text-xs font-semibold text-text-secondary dark:text-slate-400">IT Staffing Industry Excellence</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
