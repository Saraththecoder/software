import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export const CTABanner: React.FC = () => {
  return (
    <section className="relative py-28 px-6 bg-[#050D30] overflow-hidden">
      
      {/* High-Tech Radial Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(#1A56FF 1.5px, transparent 1.5px)`,
          backgroundSize: `32px 32px`,
        }}
      />

      {/* Massive Neon Glowing Ambient Spheres */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-accent-sky/15 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Suspended 3D Glassmorphic Card */}
        <motion.div 
          className="w-full bg-white/[0.03] dark:bg-white/[0.01] border border-white/10 dark:border-white/5 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-[0_30px_100px_rgba(5,13,48,0.8)] relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Card diagonal accent glow overlay */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-premium opacity-10 filter blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Dynamic tag badge */}
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-accent-sky" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent-sky">
                  Project Partnership Active
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display tracking-tight">
                Ready for an Awesome <span className="text-gradient">Project With Us?</span>
              </h2>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-slate-300 font-semibold leading-relaxed max-w-xl">
                Let's Talk About Your Next Hire or Technology Challenge. We provide pre-vetted engineers, custom development squads, and compliance structures.
              </p>

              {/* Interactive Bullet checkmarks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Elite Pre-vetted Engineers",
                  "Full-Scale Developer Squads",
                  "100% Tax & Legal Compliance",
                  "Always-On SLA Support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-accent-sky flex-shrink-0" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Action Pill */}
              <div className="pt-8">
                <motion.a 
                  href="#contact"
                  className="inline-flex items-center px-10 py-4.5 text-sm font-black bg-gradient-premium hover:shadow-[0_0_30px_#1A56FF] text-white rounded-full transition-all focus:outline-none animate-pulse-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Terminal className="w-4.5 h-4.5 mr-2" />
                  <span>Contact Us Now</span>
                </motion.a>
              </div>

            </div>

            {/* Right Interactive Mockup Console Column */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              
              <motion.div 
                className="relative w-full max-w-[380px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                {/* Visual backglow aura */}
                <div className="absolute inset-0 bg-primary/20 rounded-2xl filter blur-[20px] scale-90" />
                
                {/* Media frame mockup */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-white/10 group">
                  <img 
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=600" 
                    alt="Corporate collaboration technical terminal workstation mockup" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050D30]/80 via-transparent to-transparent" />
                </div>

                {/* Floating active telemetry card */}
                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md dark:bg-darkBg-card/90 border border-white/20 dark:border-darkBg-border py-4 px-6 rounded-2xl shadow-xl flex items-center space-x-3 max-w-[200px]">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white text-base shadow-lg animate-pulse-slow">
                    ✓
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase text-navy dark:text-white block">
                      Active Squads
                    </span>
                    <span className="text-lg font-black text-emerald-500 font-mono">
                      48 squads
                    </span>
                  </div>
                </div>

              </motion.div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CTABanner;
