import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb }) => {
  return (
    <div className="relative pt-32 pb-16 bg-[#050D30] overflow-hidden select-none">
      
      {/* Blueprint Dot Grid */}
      <div 
        className="absolute inset-0 opacity-15 mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(#1A56FF 1.5px, transparent 1.5px)`,
          backgroundSize: `32px 32px`,
        }}
      />

      {/* Floating Neon Halo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary/20 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-accent-sky">
            <span>Home</span>
            <span>/</span>
            <span className="text-white/60">{breadcrumb}</span>
          </div>

          {/* Heading Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-none">
            {title}
          </h1>
        </motion.div>
      </div>

    </div>
  );
};

export default PageHeader;
