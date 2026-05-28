import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'IT Recruitment',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'IT Recruitment',
        message: ''
      });
      // Clear toast after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const servicesList = [
    'IT Recruitment',
    'Contract Staffing',
    'Corp-to-Corp Hiring',
    'Technology Consulting',
    'Workforce Solutions',
    'IT Outsourcing'
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-darkBg relative overflow-hidden">
      {/* Back Blurs */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-black tracking-widest text-primary dark:text-accent-sky uppercase block mb-3">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy dark:text-white mb-6 leading-tight">
            Connect With Our Tech Talent Advisors
          </h2>
          <p className="text-text-secondary dark:text-slate-300 font-medium text-base">
            Whether you are scaling your engineering infrastructure or need specialized contract resources, we are ready 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left - Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-black text-navy dark:text-white mb-6">
              Our New Jersey HQ
            </h3>

            {/* Address Card */}
            <div className="flex items-start space-x-4 p-6 bg-slate-50 dark:bg-darkBg-card border border-blue-50/50 dark:border-darkBg-border rounded-2xl shadow-sm">
              <span className="text-3xl flex-shrink-0">📍</span>
              <div>
                <h4 className="text-base font-extrabold text-navy dark:text-white mb-1">Office Location</h4>
                <p className="text-sm font-semibold text-text-secondary dark:text-slate-300 leading-relaxed">
                  1204 Evergreen Forest Blvd, Avenel, NJ-07001
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-start space-x-4 p-6 bg-slate-50 dark:bg-darkBg-card border border-blue-50/50 dark:border-darkBg-border rounded-2xl shadow-sm">
              <span className="text-3xl flex-shrink-0">✉️</span>
              <div>
                <h4 className="text-base font-extrabold text-navy dark:text-white mb-1">Email Inquiries</h4>
                <a 
                  href="mailto:info@oryontechnologies.com" 
                  className="text-sm font-semibold text-primary dark:text-accent-sky hover:underline"
                >
                  info@oryontechnologies.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-start space-x-4 p-6 bg-slate-50 dark:bg-darkBg-card border border-blue-50/50 dark:border-darkBg-border rounded-2xl shadow-sm">
              <span className="text-3xl flex-shrink-0">📞</span>
              <div>
                <h4 className="text-base font-extrabold text-navy dark:text-white mb-1">Corporate Hotline</h4>
                <a 
                  href="tel:+17325550199" 
                  className="text-sm font-semibold text-primary dark:text-accent-sky hover:underline font-mono"
                >
                  +1 (732) 555-0199
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 border border-dashed border-blue-200 dark:border-darkBg-border rounded-2xl text-center">
              <span className="inline-block py-1 px-3 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase rounded-full mb-2">
                24 HOURS AVAILABLE
              </span>
              <p className="text-xs font-bold text-text-secondary dark:text-slate-400">
                Monday–Sunday, Our tech support is online around the clock.
              </p>
            </div>
          </div>

          {/* Right - Validated Form */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-darkBg-card border border-blue-50/50 dark:border-darkBg-border rounded-3xl p-8 sm:p-10 shadow-premium relative">
            <h3 className="text-2xl font-black text-navy dark:text-white mb-8">
              Send Us A Message
            </h3>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  className="py-12 flex flex-col items-center justify-center text-center space-y-5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/30 flex items-center justify-center text-emerald-600 text-3xl shadow-premium animate-bounce">
                    ✓
                  </div>
                  <h4 className="text-2xl font-black text-navy dark:text-white">Message Received!</h4>
                  <p className="text-sm font-semibold text-text-secondary dark:text-slate-300 max-w-sm">
                    Thank you! Our expert talent advisors will review your staffing details and contact you within 2 business hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  
                  {/* Name field */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-navy dark:text-slate-300">Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-5 py-3.5 text-sm bg-white dark:bg-darkBg border border-blue-100 dark:border-darkBg-border rounded-xl text-navy dark:text-white focus:outline-none focus:border-primary dark:focus:border-accent-sky"
                    />
                  </div>

                  {/* Dual Grid - Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-navy dark:text-slate-300">Corporate Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="px-5 py-3.5 text-sm bg-white dark:bg-darkBg border border-blue-100 dark:border-darkBg-border rounded-xl text-navy dark:text-white focus:outline-none focus:border-primary dark:focus:border-accent-sky"
                      />
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-navy dark:text-slate-300">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="px-5 py-3.5 text-sm bg-white dark:bg-darkBg border border-blue-100 dark:border-darkBg-border rounded-xl text-navy dark:text-white focus:outline-none focus:border-primary dark:focus:border-accent-sky"
                      />
                    </div>
                  </div>

                  {/* Dropdown - Services */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-navy dark:text-slate-300">Staffing Division Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="px-5 py-3.5 text-sm bg-white dark:bg-darkBg border border-blue-100 dark:border-darkBg-border rounded-xl text-navy dark:text-white focus:outline-none focus:border-primary dark:focus:border-accent-sky"
                    >
                      {servicesList.map((svc, i) => (
                        <option key={i} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-navy dark:text-slate-300">Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Briefly describe your technology project or tech talent vacancy..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="px-5 py-3.5 text-sm bg-white dark:bg-darkBg border border-blue-100 dark:border-darkBg-border rounded-xl text-navy dark:text-white focus:outline-none focus:border-primary dark:focus:border-accent-sky resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold shadow-premium transition-all focus:outline-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        {/* Loading spinner */}
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                        <span>Processing request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Scope</span>
                        <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                      </>
                    )}
                  </button>

                </motion.form>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
