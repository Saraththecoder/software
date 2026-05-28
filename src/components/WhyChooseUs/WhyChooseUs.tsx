import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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

  const features = [
    {
      title: "Expertise & Innovation",
      desc: "We bring years of experience in IT staffing and recruiting, from contract hiring and C2C to full-time placement and technology consulting. Our innovative approach ensures your business stays ahead in the talent market.",
      icon: Award,
    },
    {
      title: "Reliable & Secure Solutions",
      desc: "We prioritize quality, compliance, and reliability in every placement we deliver. Whether it's background verification, contract management, or workforce scaling, we provide services you can trust 24/7.",
      icon: ShieldCheck,
    },
    {
      title: "Customer-Centric Approach",
      desc: "Your success is our priority. We offer tailored staffing and consulting solutions to meet your unique business needs, ensuring seamless operations and long-term hiring success.",
      icon: HeartHandshake,
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-darkBg/30 relative overflow-hidden">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-black tracking-widest text-primary dark:text-accent-sky uppercase block mb-3">
            WHY BUSINESSES CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy dark:text-white leading-tight">
            Jumpstart Your Business
          </h2>
        </div>

        {/* 3-Column Glassmorphic Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feat, i) => {
            const Icon = feat.icon;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="glass-premium rounded-2xl p-8 transition-all duration-300 hover:shadow-premium-hover border border-white/20 dark:border-white/5 flex flex-col items-center text-center group"
              >
                {/* Glowing Icon Wrapper */}
                <div className="w-16 h-16 rounded-2xl bg-accent-light dark:bg-navy/40 text-primary dark:text-accent-sky flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative shadow-premium">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl filter blur-[10px] scale-75 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-accent-sky transition-colors duration-300">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary dark:text-slate-300 text-sm font-medium leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
