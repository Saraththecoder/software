import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../../data/servicesData';
import * as LucideIcons from 'lucide-react';

export const ServicesCards: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Dynamic metrics mapped for each service to display inside the dashboard
  const serviceMetrics: { [key: number]: { label: string; value: string; label2: string; value2: string } } = {
    1: { label: "Match Success Rate", value: "98%", label2: "Vetted Engineers Ready", value2: "2,500+" },
    2: { label: "Deployment Velocity", value: "24-48h", label2: "Contract Retention", value2: "99.2%" },
    3: { label: "Compliance Auditing", value: "100%", label2: "Registered Sub-Vendors", value2: "180+" },
    4: { label: "Principal Consultants", value: "120+", label2: "Client Revenue Growth", value2: "3x Avg" },
    5: { label: "Augmented Squads", value: "45+", label2: "Onsite/Remote Support", value2: "24/7" },
    6: { label: "Operational Uptime", value: "99.99%", label2: "Help Desk SLA", value2: "100%" }
  };

  const activeService = servicesData.find(s => s.id === activeTab) || servicesData[0];
  const activeMetric = serviceMetrics[activeTab] || serviceMetrics[1];
  const ActiveIcon = (LucideIcons as any)[activeService.iconName] || LucideIcons.HelpCircle;

  return (
    <section className="py-24 bg-slate-50 dark:bg-darkBg/30 overflow-hidden relative">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-sky/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-black tracking-widest text-primary dark:text-accent-sky uppercase block mb-3">
              PREVIEW SOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy dark:text-white leading-tight">
              Flexible Staffing Models & Managed Services
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-text-secondary dark:text-slate-400 font-medium text-sm sm:text-base leading-relaxed">
            Explore our specialized preview divisions designed to solve talent bottlenecks, maintain compliance, and optimize your business core.
          </p>
        </div>

        {/* Dynamic Console Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Vertical Tab List */}
          <div className="lg:col-span-4 flex flex-col space-y-3.5">
            {servicesData.map((svc) => {
              const TabIcon = (LucideIcons as any)[svc.iconName] || LucideIcons.HelpCircle;
              const isActive = svc.id === activeTab;

              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveTab(svc.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative focus:outline-none flex items-center justify-between ${
                    isActive 
                      ? 'bg-primary text-white border-transparent shadow-lg shadow-primary/20 scale-[1.02]' 
                      : 'bg-white dark:bg-darkBg-card hover:bg-slate-100/50 dark:hover:bg-darkBg border-blue-100/60 dark:border-darkBg-border text-navy dark:text-slate-300 shadow-premium'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-white/20 text-white' : 'bg-accent-light dark:bg-navy/30 text-primary dark:text-accent-sky'
                    }`}>
                      <TabIcon className="w-5 h-5" />
                    </div>
                    <span className="text-base font-bold tracking-tight">
                      {svc.title}
                    </span>
                  </div>

                  <svg className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'translate-x-1 text-white' : 'text-slate-400'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Right Column: 3D-like Glassmorphic Dashboard Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full bg-white dark:bg-darkBg-card border border-blue-50 dark:border-darkBg-border rounded-3xl p-8 sm:p-10 shadow-premium hover:shadow-premium-hover transition-all duration-500 relative flex flex-col justify-between"
              >
                {/* Diagonal Gradient Glow */}
                <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-primary/5 rounded-full filter blur-[60px] pointer-events-none" />

                <div>
                  
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-darkBg-border pb-6 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-accent-light dark:bg-navy/40 rounded-2xl flex items-center justify-center text-primary dark:text-accent-sky shadow-sm">
                        <ActiveIcon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-navy dark:text-white leading-none">
                          {activeService.title}
                        </h3>
                        <span className="text-xs font-black uppercase text-accent-sky tracking-widest block mt-2">
                          Division Overview
                        </span>
                      </div>
                    </div>
                    {/* Emoji */}
                    <span className="text-3xl hidden sm:inline select-none opacity-80">
                      {activeService.iconEmoji}
                    </span>
                  </div>

                  {/* Body description */}
                  <p className="text-text-secondary dark:text-slate-300 text-base font-semibold leading-relaxed mb-8">
                    {activeService.description}
                  </p>

                  {/* Dual Grid - Left: List features, Right: Metrics Telemetry */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-slate-50 dark:border-darkBg-border/50 pt-8">
                    
                    {/* Sub-features list */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-widest text-navy dark:text-white mb-2">
                        Division Specializations
                      </h4>
                      <ul className="space-y-3">
                        {activeService.previewFeatures.map((feat, index) => (
                          <li key={index} className="flex items-center text-sm font-bold text-text-primary dark:text-slate-300">
                            <svg className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics Dashboard panel */}
                    <div className="bg-slate-50 dark:bg-darkBg border border-blue-50 dark:border-darkBg-border p-6 rounded-2xl grid grid-cols-2 gap-4 shadow-sm relative">
                      
                      <div className="border-r border-blue-100/50 dark:border-darkBg-border pr-2">
                        <span className="text-xs font-black uppercase text-text-secondary dark:text-slate-400 block mb-1">
                          {activeMetric.label}
                        </span>
                        <span className="text-2xl font-black text-primary dark:text-accent-sky font-mono">
                          {activeMetric.value}
                        </span>
                      </div>

                      <div className="pl-2">
                        <span className="text-xs font-black uppercase text-text-secondary dark:text-slate-400 block mb-1">
                          {activeMetric.label2}
                        </span>
                        <span className="text-2xl font-black text-primary dark:text-accent-sky font-mono">
                          {activeMetric.value2}
                        </span>
                      </div>

                    </div>

                  </div>

                </div>

                {/* Dashboard Action Footer */}
                <div className="mt-10 border-t border-slate-100 dark:border-darkBg-border pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <span className="text-xs font-bold text-text-secondary dark:text-slate-400">
                    * Deploy pre-vetted specialists under direct SLA compliance audits.
                  </span>
                  
                  <a 
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold bg-primary hover:bg-primary-dark text-white rounded-xl shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>Request Division Placement</span>
                    <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesCards;
