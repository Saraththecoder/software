import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ClipboardList, 
  Handshake, 
  Lightbulb, 
  Briefcase, 
  Monitor, 
  Check, 
  ShieldAlert, 
  FileCheck 
} from 'lucide-react';

export const Services: React.FC = () => {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  };

  return (
    <section id="services" className="py-28 bg-[#F0F4FF]/50 dark:bg-darkBg/20 relative overflow-hidden">
      
      {/* Dynamic blurred accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-sky/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-black tracking-widest text-primary dark:text-accent-sky uppercase block mb-3">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy dark:text-white mb-6 leading-tight">
            Powering Businesses with Technology
          </h2>
          <p className="text-text-secondary dark:text-slate-300 font-semibold text-base sm:text-lg">
            We provide a wide range of IT staffing and consulting solutions to help businesses operate efficiently, securely, and at scale.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Card 1: IT Recruitment — DOUBLE WIDTH BENTO (Light Theme) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="lg:col-span-2 bg-white dark:bg-darkBg-card border-t-4 border-t-primary dark:border-t-accent-sky rounded-3xl p-8 border border-blue-50/50 dark:border-darkBg-border shadow-premium hover:shadow-premium-hover transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Content side */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 bg-accent-light dark:bg-navy/30 rounded-xl flex items-center justify-center text-primary dark:text-accent-sky">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-navy dark:text-white">IT Recruitment</span>
                </div>
                <p className="text-text-secondary dark:text-slate-400 text-sm font-semibold leading-relaxed">
                  Connect with pre-vetted, top-tier engineering talent and executive leaders custom-fit for your specific tech stack and company culture.
                </p>
                <ul className="grid grid-cols-2 gap-2 pt-2">
                  {["Full-time Hiring", "Executive Search", "Talent Sourcing", "Resume Screening"].map((pt, i) => (
                    <li key={i} className="flex items-center text-xs font-bold text-navy dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 mr-2" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graphic Widget side: Candidate Vetting flowchart */}
              <div className="md:col-span-5 bg-slate-50 dark:bg-darkBg/60 border border-blue-100/50 dark:border-darkBg-border/50 p-6 rounded-2xl flex flex-col justify-center items-center relative overflow-hidden h-[180px]">
                <div className="flex items-center space-x-4 z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[10px] font-black text-primary dark:text-accent-sky">1</div>
                    <span className="text-[9px] font-black uppercase text-slate-400 mt-1">Screen</span>
                  </div>
                  <div className="w-8 h-[2px] bg-slate-200 dark:bg-darkBg-border" />
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary border-2 border-primary-dark flex items-center justify-center text-xs font-black text-white shadow-lg animate-pulse-slow">2</div>
                    <span className="text-[9px] font-black uppercase text-primary dark:text-accent-sky mt-1">Tech Interview</span>
                  </div>
                  <div className="w-8 h-[2px] bg-slate-200 dark:bg-darkBg-border" />
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[10px] font-black text-emerald-500">3</div>
                    <span className="text-[9px] font-black uppercase text-emerald-400 mt-1">Deploy</span>
                  </div>
                </div>
                <div className="absolute bottom-2 text-[10px] font-bold text-text-secondary dark:text-slate-500 uppercase tracking-widest">VETTING PROCESS TELEMETRY</div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-darkBg-border flex justify-between items-center">
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-primary dark:text-accent-sky hover:underline group-hover:translate-x-1.5 transition-transform duration-300">
                <span>Learn More →</span>
              </a>
              <span className="text-xl">👥</span>
            </div>
          </motion.div>

          {/* Card 2: Contract Staffing — SINGLE WIDTH BENTO (Dark Navy Glass Theme) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-[#0B1F6B] text-white rounded-3xl p-8 border border-white/10 shadow-premium hover:shadow-premium-hover transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent-sky">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <span className="text-xl select-none">📋</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-sky transition-colors">Contract Staffing</h3>
              <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                Scale your technology teams rapidly with flexible, temporary, or project-based tech professionals without long-term overhead.
              </p>
              
              {/* Placement Speedometer Widget */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between mb-6">
                <div>
                  <span className="text-[9px] font-black uppercase text-slate-300 tracking-wider block">Placement Speed</span>
                  <span className="text-base font-black text-accent-sky font-mono">24-48 hours</span>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-dashed border-accent-sky flex items-center justify-center text-[10px] font-black text-white animate-spin-slow">
                  ⚡
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center text-sm font-bold text-accent-sky hover:underline">
              <span>Learn More →</span>
            </a>
          </motion.div>

          {/* Card 3: Corp-to-Corp Hiring — SINGLE WIDTH BENTO (Light Theme) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-white dark:bg-darkBg-card border-t-4 border-t-primary dark:border-t-accent-sky rounded-3xl p-8 border border-blue-50/50 dark:border-darkBg-border shadow-premium hover:shadow-premium-hover transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-accent-light dark:bg-navy/30 rounded-xl flex items-center justify-center text-primary dark:text-accent-sky">
                  <Handshake className="w-6 h-6" />
                </div>
                <span className="text-xl select-none">🤝</span>
              </div>
              <h3 className="text-xl font-black text-navy dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent-sky transition-colors">Corp-to-Corp Hiring</h3>
              <p className="text-text-secondary dark:text-slate-400 text-xs sm:text-sm font-semibold leading-relaxed mb-6">
                Streamline C2C engagements through high-compliance vendor management networks, structured contracts, and thorough verification.
              </p>
              
              {/* Compliance Checklist Widget */}
              <div className="space-y-2 bg-slate-50 dark:bg-darkBg p-4 rounded-xl border border-blue-50 dark:border-darkBg-border">
                <div className="flex items-center space-x-2 text-[10px] font-black text-emerald-500">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>100% COMPLIANT MSA</span>
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-black text-navy dark:text-slate-300">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>VENDOR AUDITS OK</span>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center text-sm font-bold text-primary dark:text-accent-sky hover:underline pt-6">
              <span>Learn More →</span>
            </a>
          </motion.div>

          {/* Card 4: Technology Consulting — DOUBLE WIDTH BENTO (Light Theme) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="lg:col-span-2 bg-white dark:bg-darkBg-card border-t-4 border-t-primary dark:border-t-accent-sky rounded-3xl p-8 border border-blue-50/50 dark:border-darkBg-border shadow-premium hover:shadow-premium-hover transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Content side */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 bg-accent-light dark:bg-navy/30 rounded-xl flex items-center justify-center text-primary dark:text-accent-sky">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-navy dark:text-white">Technology Consulting</span>
                </div>
                <p className="text-text-secondary dark:text-slate-400 text-sm font-semibold leading-relaxed">
                  Align your tech stack with long-term business goals under guidance from strategic consultants and lead enterprise architects.
                </p>
                <ul className="grid grid-cols-2 gap-2 pt-2">
                  {["IT Strategy", "Digital Roadmap", "Architecture Review", "Tech Assessments"].map((pt, i) => (
                    <li key={i} className="flex items-center text-xs font-bold text-navy dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 mr-2" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graphic Widget side: Line roadmap */}
              <div className="md:col-span-5 bg-slate-50 dark:bg-darkBg/60 border border-blue-100/50 dark:border-darkBg-border/50 p-6 rounded-2xl flex flex-col justify-center items-center relative overflow-hidden h-[180px]">
                {/* SVG Graph line indicating 3x growth */}
                <svg className="w-full h-20 text-primary dark:text-accent-sky" viewBox="0 0 100 50">
                  <path d="M10 40 Q 30 35, 50 20 T 90 5" fill="none" stroke="currentColor" strokeWidth="3" />
                  <circle cx="90" cy="5" r="4" fill="#60A5FA" className="animate-ping" />
                  <circle cx="90" cy="5" r="3" fill="#1A56FF" />
                </svg>
                <div className="absolute top-2 right-2 bg-primary/10 text-[9px] font-black text-primary dark:text-accent-sky rounded px-1.5 py-0.5">3X REVENUE SCALE</div>
                <div className="absolute bottom-2 text-[10px] font-bold text-text-secondary dark:text-slate-500 uppercase tracking-widest">STRATEGIC GROWTH GRAPH</div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-darkBg-border flex justify-between items-center">
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-primary dark:text-accent-sky hover:underline group-hover:translate-x-1.5 transition-transform duration-300">
                <span>Learn More →</span>
              </a>
              <span className="text-xl">💡</span>
            </div>
          </motion.div>

          {/* Card 5: Workforce Solutions — SINGLE WIDTH BENTO (Light Theme) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-white dark:bg-darkBg-card border-t-4 border-t-primary dark:border-t-accent-sky rounded-3xl p-8 border border-blue-50/50 dark:border-darkBg-border shadow-premium hover:shadow-premium-hover transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-accent-light dark:bg-navy/30 rounded-xl flex items-center justify-center text-primary dark:text-accent-sky">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-xl select-none">🏗️</span>
              </div>
              <h3 className="text-xl font-black text-navy dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent-sky transition-colors">Workforce Solutions</h3>
              <p className="text-text-secondary dark:text-slate-400 text-xs sm:text-sm font-semibold leading-relaxed mb-6">
                Enhance team productivity and capacity with dynamic staffing models, including hybrid, remote, and onsite dedicated talent structures.
              </p>
              
              {/* Dynamic squads indicator */}
              <div className="flex items-center space-x-3 bg-slate-50 dark:bg-darkBg p-3.5 rounded-xl border border-blue-50 dark:border-darkBg-border">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, idx) => (
                    <div key={idx} className="w-7 h-7 rounded-full bg-primary border-2 border-white dark:border-darkBg flex items-center justify-center text-[9px] font-black text-white">
                      U{idx}
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-black text-navy dark:text-slate-300">HYBRID SQUAD HUBS</span>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center text-sm font-bold text-primary dark:text-accent-sky hover:underline pt-6">
              <span>Learn More →</span>
            </a>
          </motion.div>

          {/* Card 6: IT Outsourcing — SINGLE WIDTH BENTO (Dark Navy Glass Theme) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-[#0B1F6B] text-white rounded-3xl p-8 border border-white/10 shadow-premium hover:shadow-premium-hover transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent-sky">
                  <Monitor className="w-6 h-6" />
                </div>
                <span className="text-xl select-none">🖥️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-sky transition-colors">IT Outsourcing</h3>
              <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                Delegate your support services to our always-on network operations and help desk team, ensuring 99.9% operational uptime.
              </p>
              
              {/* SLA Uptime telemetry dial */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-black uppercase text-slate-300 tracking-wider block">Network SLA</span>
                  <span className="text-base font-black text-accent-sky font-mono">99.99% Uptime</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-slow" />
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center text-sm font-bold text-accent-sky hover:underline pt-6">
              <span>Learn More →</span>
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Services;
