import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What IT staffing models do you offer?",
      answer: "Oryon Technologies offers comprehensive IT Recruitment (direct hire), Contract Staffing (temporary & project-based), Corp-to-Corp (C2C) Hiring for structured vendors, and tailored Workforce Solutions including remote and onsite team augmentation."
    },
    {
      question: "How do you verify and vet your technical candidates?",
      answer: "Every candidate undergoes a rigorous multi-stage vetting procedure. This includes meticulous resume screening, comprehensive practical technical coding evaluations, deep-dive live interviews with senior technology leads, background checks, and reference verifications to guarantee skill set and cultural fit."
    },
    {
      question: "What is your typical turnaround time for deployment?",
      answer: "For contract staffing and project augmentation, we typically match and deploy pre-vetted, high-caliber tech professionals within 24 to 48 hours. Direct-hire executive and full-time placements usually conclude within 7 to 14 business days depending on specific stack demands."
    },
    {
      question: "How does Oryon Technologies handle C2C compliance?",
      answer: "We employ robust background and business verification structures for sub-vendors, establishing solid C2C Master Services Agreements (MSA), compliance handling, insurance validations, and detailed audit trials to eliminate standard hiring risks and administrative burdens."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 bg-[#F0F4FF]/50 dark:bg-darkBg/20 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black tracking-widest text-primary dark:text-accent-sky uppercase block mb-3">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy dark:text-white leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Wrapper */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div 
                key={idx}
                className="bg-white dark:bg-darkBg-card border border-blue-100/50 dark:border-darkBg-border rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:border-primary/20 dark:hover:border-accent-sky/20"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-navy dark:text-white group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon with Rotation */}
                  <span className={`w-8 h-8 rounded-full bg-slate-50 dark:bg-darkBg flex items-center justify-center text-navy dark:text-white flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/10 text-primary dark:text-accent-sky' : ''}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </button>

                {/* Animated Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-text-secondary dark:text-slate-300 font-medium leading-relaxed border-t border-slate-50 dark:border-darkBg-border/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
