import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

export const StatisticsBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counters
  const projectsDelivered = useCountUp(1200, 2000, isVisible);
  const problemsSolved = useCountUp(98, 1800, isVisible);
  const revenueGrowth = useCountUp(3, 1500, isVisible);

  const metrics = [
    {
      label: "Projects Delivered",
      displayValue: `${projectsDelivered.toLocaleString()}+`,
      targetWidth: "88%",
      color: "bg-primary",
    },
    {
      label: "Problems Solved",
      displayValue: `${problemsSolved}%`,
      targetWidth: "98%",
      color: "bg-accent",
    },
    {
      label: "Revenue Growth",
      displayValue: `${revenueGrowth}x`,
      targetWidth: "90%",
      color: "bg-accent-sky",
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white dark:bg-darkBg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Progress Bars */}
          <div>
            <span className="text-xs font-black tracking-widest text-primary dark:text-accent-sky uppercase block mb-3">
              STATISTICS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy dark:text-white leading-tight mb-6">
              Proven Results. Measurable Success.
            </h2>
            <p className="text-text-secondary dark:text-slate-300 font-medium text-base mb-12">
              We leverage data-driven strategies, compliance models, and our massive vetted tech candidate database to drive consistent operational growth for partners across the globe.
            </p>

            {/* Metrics List */}
            <div className="space-y-8">
              {metrics.map((metric, i) => (
                <div key={i} className="space-y-3">
                  {/* Text Header */}
                  <div className="flex items-end justify-between">
                    <span className="text-sm font-bold text-navy dark:text-slate-200">
                      {metric.label}
                    </span>
                    <span className="text-xl font-black text-primary dark:text-accent-sky select-none">
                      {metric.displayValue}
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-3 bg-slate-100 dark:bg-darkBg-border rounded-full overflow-hidden relative">
                    <motion.div 
                      className={`h-full rounded-full ${metric.color} bg-gradient-premium`}
                      initial={{ width: "0%" }}
                      animate={{ width: isVisible ? metric.targetWidth : "0%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Team Collaborating Image */}
          <motion.div
            className="relative lg:pl-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Design Backdrop Layer */}
            <div className="absolute -inset-1 bg-gradient-premium rounded-2xl filter blur-[15px] opacity-20 pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-[4/3] sm:aspect-video lg:aspect-[4/3] border border-blue-50 dark:border-darkBg-border group">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" 
                alt="Oryon Technologies Active Collaboration Space" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlapping Blue Shade */}
              <div className="absolute inset-0 bg-gradient-premium mix-blend-multiply opacity-20" />
            </div>

            {/* Overlap badge */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md dark:bg-darkBg-card/90 border border-white/20 dark:border-darkBg-border py-3.5 px-6 rounded-xl shadow-premium">
              <span className="text-2xl font-black text-primary dark:text-accent-sky block text-center">
                100%
              </span>
              <span className="text-[10px] font-bold text-navy dark:text-slate-300 uppercase tracking-widest block text-center">
                Vetted Talent
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StatisticsBar;
