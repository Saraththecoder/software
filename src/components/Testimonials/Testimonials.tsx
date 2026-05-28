import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../../data/testimonialsData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const autoPlayRef = useRef<(() => void) | null>(null);

  const slideNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  useEffect(() => {
    autoPlayRef.current = slideNext;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 4000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" as const },
    }),
  };

  return (
    <section className="py-24 bg-white dark:bg-darkBg relative overflow-hidden">
      {/* Dynamic blurred design accents */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-black tracking-widest text-primary dark:text-accent-sky uppercase block mb-3">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy dark:text-white leading-tight">
            What Clients Say
          </h2>
        </div>

        {/* Carousel Area */}
        <div className="relative min-h-[380px] sm:min-h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full glass-premium rounded-3xl p-8 sm:p-12 border border-white/20 dark:border-white/5 relative flex flex-col justify-between"
            >
              {/* Quote Decorative Icon */}
              <div className="absolute top-8 right-8 text-6xl font-black text-primary/10 select-none pointer-events-none font-serif">
                “
              </div>

              <div>
                {/* 5-Star Ratings */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonialsData[activeIndex].rating)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-primary dark:text-accent-sky fill-primary dark:fill-accent-sky" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Feedback Quote */}
                <p className="text-base sm:text-lg lg:text-xl text-navy dark:text-slate-200 font-semibold italic leading-relaxed mb-8">
                  "{testimonialsData[activeIndex].quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-4 border-t border-blue-50 dark:border-darkBg-border pt-6">
                <img 
                  src={testimonialsData[activeIndex].avatar} 
                  alt={testimonialsData[activeIndex].name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary dark:border-accent-sky"
                />
                <div>
                  <h4 className="text-base font-black text-navy dark:text-white">
                    {testimonialsData[activeIndex].name}
                  </h4>
                  <p className="text-xs font-bold text-text-secondary dark:text-slate-400">
                    {testimonialsData[activeIndex].role}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mt-10">
          {/* Previous/Next Manual buttons */}
          <div className="flex space-x-2">
            <button
              onClick={slidePrev}
              className="p-3 rounded-full border border-blue-100 dark:border-darkBg-border text-navy dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-darkBg-card transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <button
              onClick={slideNext}
              className="p-3 rounded-full border border-blue-100 dark:border-darkBg-border text-navy dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-darkBg-card transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex space-x-2.5">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                className={`w-3 h-3 rounded-full transition-all focus:outline-none ${
                  i === activeIndex 
                    ? 'bg-primary dark:bg-accent-sky scale-110 shadow-[0_0_6px_#1A56FF]' 
                    : 'bg-slate-200 dark:bg-darkBg-border hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
