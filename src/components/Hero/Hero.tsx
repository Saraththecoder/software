import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  headline: string;
  subtext: string;
  cta1: string;
  cta1Link: string;
  cta2: string;
  cta2Link: string;
  image: string;
  badge1: string;
  badge2: string;
}

const slides: Slide[] = [
  {
    headline: "Connect Elite Tech Talent With High-Growth Companies",
    subtext: "Fast, scalable IT staffing solutions for modern businesses",
    cta1: "Hire Talent",
    cta1Link: "#contact",
    cta2: "Explore Solutions",
    cta2Link: "#services",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    badge1: "Vetted Developers",
    badge2: "Deployed in 48h"
  },
  {
    headline: "Fortify Your Business with Cybersecurity Solutions",
    subtext: "Protect data, apps, and networks with advanced security",
    cta1: "Secure Now",
    cta1Link: "#contact",
    cta2: "Try Us Now",
    cta2Link: "#services",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    badge1: "ISO 27001 Vetted",
    badge2: "24/7 Security Center"
  },
  {
    headline: "IT Infrastructure & Advanced Networking Solutions",
    subtext: "End-to-end IT infrastructure for your business backbone",
    cta1: "Get Started",
    cta1Link: "#contact",
    cta2: "Try Us Now",
    cta2Link: "#services",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    badge1: "99.9% Core Uptime",
    badge2: "SD-WAN Integrated"
  },
  {
    headline: "Grow Your Business with Data-Driven Digital Marketing",
    subtext: "Result-oriented solutions to attract, engage, and convert",
    cta1: "Grow Digital",
    cta1Link: "#contact",
    cta2: "Explore Solutions",
    cta2Link: "#services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    badge1: "300% ROI Average",
    badge2: "Live Dashboards"
  },
  {
    headline: "Security & Smart Surveillance Solutions",
    subtext: "Real-time monitoring, threat detection, complete peace of mind",
    cta1: "Monitor Live",
    cta1Link: "#contact",
    cta2: "Explore Solutions",
    cta2Link: "#services",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
    badge1: "AI Threat Detection",
    badge2: "Smart DVR Systems"
  },
  {
    headline: "Smart Software & Scalable Business Solutions",
    subtext: "Custom software to streamline operations and drive growth",
    cta1: "Explore Solutions",
    cta1Link: "#services",
    cta2: "Learn More",
    cta2Link: "#about",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    badge1: "Custom Modules",
    badge2: "REST API Enabled"
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const autoPlayRef = useRef<(() => void) | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mouse Parallax coordinates
  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth >= 1024) {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 50;
      const y = (clientY - window.innerHeight / 2) / 50;
      setParallax({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section 
      id="home"
      className="relative w-full min-h-screen bg-navy-dark dark:bg-darkBg overflow-hidden flex items-center pt-24 pb-16 lg:py-0 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* High-Tech Radial Engineering Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-15 dark:opacity-5 mix-blend-screen pointer-events-none transition-all duration-300"
        style={{
          backgroundImage: `radial-gradient(#1A56FF 1.5px, transparent 1.5px)`,
          backgroundSize: `32px 32px`,
          transform: `translate(${parallax.x * 0.3}px, ${parallax.y * 0.3}px)`
        }}
      />

      {/* Decorative Blur Ambient shapes */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-sky/10 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Giant Background Number Watermark */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-24 z-0 pointer-events-none select-none text-[15rem] sm:text-[22rem] lg:text-[30rem] font-black text-white/[0.03] dark:text-white/[0.01] font-display leading-none flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            0{currentSlide + 1}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Content - Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Tag Pill */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center space-x-2.5"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-sky opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-sky"></span>
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-accent-sky">
              Active IT Staffing Advisors
            </span>
          </motion.div>

          {/* Headline - Blur entry */}
          <div className="min-h-[160px] sm:min-h-[220px] lg:min-h-[260px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] font-display"
                initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -35, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {slides[currentSlide].headline}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subtext */}
          <div className="min-h-[60px] flex items-center mt-6 mb-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                className="text-base sm:text-lg lg:text-xl text-slate-300 font-semibold leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                {slides[currentSlide].subtext}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <a 
              href={slides[currentSlide].cta1Link}
              className="px-8 py-4 text-center text-sm font-bold bg-primary hover:bg-primary-dark text-white rounded-full shadow-[0_0_20px_rgba(26,86,255,0.45)] hover:shadow-[0_0_30px_rgba(26,86,255,0.65)] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none"
            >
              {slides[currentSlide].cta1}
            </a>
            <a 
              href={slides[currentSlide].cta2Link}
              className="px-8 py-4 text-center text-sm font-bold bg-white/5 hover:bg-white/15 text-white rounded-full border border-white/20 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none"
            >
              {slides[currentSlide].cta2}
            </a>
          </div>

        </div>

        {/* Right Content - 3D Glassmorphic Media Frame & Floating Badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          <motion.div
            className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
            style={{ 
              x: parallax.x * -0.5, 
              y: parallax.y * -0.5,
              rotateX: parallax.y * -0.3,
              rotateY: parallax.x * 0.3
            }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            {/* Glowing Backdrop Aura */}
            <div className="absolute inset-0 bg-primary/20 rounded-3xl filter blur-[30px] scale-95 opacity-80" />

            {/* Main Picture Frame */}
            <div className="w-full h-full bg-white/5 dark:bg-darkBg-card/30 border-2 border-white/20 dark:border-white/10 rounded-3xl p-4 sm:p-5 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${slides[currentSlide].image})`
                    }}
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1.02 }}
                    exit={{ opacity: 0, scale: 1.0 }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  />
                </AnimatePresence>

                {/* Cyber Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent group-hover:opacity-80 transition-opacity duration-500" />
              </div>
            </div>

            {/* Dynamic Status Badge 1: Top Left */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={`badge1-${currentSlide}`}
                className="absolute -top-5 -left-5 bg-white/90 backdrop-blur-md dark:bg-darkBg-card/90 border border-white/20 dark:border-darkBg-border py-2.5 px-4 rounded-xl shadow-lg flex items-center space-x-2"
                initial={{ opacity: 0, scale: 0.7, x: -30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.7, x: -30 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              >
                <span className="text-sm">💎</span>
                <span className="text-xs font-black uppercase text-navy dark:text-white tracking-wider">
                  {slides[currentSlide].badge1}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Dynamic Status Badge 2: Bottom Right */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={`badge2-${currentSlide}`}
                className="absolute -bottom-5 -right-5 bg-primary/95 backdrop-blur-md border border-white/20 py-2.5 px-4 rounded-xl shadow-lg flex items-center space-x-2 text-white"
                initial={{ opacity: 0, scale: 0.7, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.7, x: 30 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                <span className="text-sm">⚡</span>
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  {slides[currentSlide].badge2}
                </span>
              </motion.div>
            </AnimatePresence>

          </motion.div>
        </div>

      </div>

      {/* Slide Navigation - Controls Bar */}
      <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 z-20 flex items-center justify-between">
        
        {/* Navigation Dot indicators */}
        <div className="flex space-x-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                i === currentSlide 
                  ? 'bg-accent-sky w-8 shadow-[0_0_8px_#60A5FA]' 
                  : 'bg-white/30 w-2.5 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex space-x-3">
          <button
            onClick={prevSlide}
            className="p-3.5 rounded-full border border-white/20 hover:border-white text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-3.5 rounded-full border border-white/20 hover:border-white text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>

      </div>

    </section>
  );
};

export default Hero;
