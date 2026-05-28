import React, { useEffect, useState, useRef } from 'react';
import { useCountUp } from '../../hooks/useCountUp';

export const StatsCounter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Run the countup hooks
  const years = useCountUp(10, 1500, isVisible);
  const clients = useCountUp(500, 1800, isVisible);
  const projects = useCountUp(1200, 2000, isVisible);
  const support = useCountUp(98, 1600, isVisible);

  const stats = [
    { value: `${years}+`, label: "Years of Experience" },
    { value: `${clients}+`, label: "Clients Served" },
    { value: `${projects}+`, label: "Projects Completed" },
    { value: `${support}%`, label: "24/7 Support Satisfaction" }
  ];

  return (
    <div 
      ref={containerRef}
      className="py-16 bg-white dark:bg-darkBg border-y border-blue-100 dark:border-darkBg-border relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center text-center px-4 relative ${
                i < stats.length - 1 
                  ? 'md:border-r border-blue-100 dark:border-darkBg-border' 
                  : ''
              }`}
            >
              {/* Animated Stat Value */}
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary dark:text-accent-sky tracking-tight mb-3 select-none relative">
                {stat.value}
                <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-premium rounded-full transform scale-x-50 opacity-70" />
              </span>

              {/* Stat Label */}
              <span className="text-xs sm:text-sm font-extrabold uppercase text-navy dark:text-slate-300 tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
