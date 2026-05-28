import React, { useState } from 'react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-darkBg border-t border-slate-100 dark:border-darkBg-border relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Headline Text */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-navy dark:text-white mb-2">
              Subscribe To Our Newsletter
            </h3>
            <p className="text-sm font-semibold text-text-secondary dark:text-slate-400">
              Get the latest IT recruitment trends and technical insights delivered.
            </p>
          </div>

          {/* Form Area */}
          <div className="w-full max-w-md">
            {subscribed ? (
              <div className="py-3 px-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm font-bold rounded-xl flex items-center space-x-2 animate-pulse-slow">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Awesome! Thank you for subscribing to our insights newsletter.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center space-x-3 w-full">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your corporate email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 text-sm font-medium bg-slate-50 dark:bg-darkBg-card border border-blue-100 dark:border-darkBg-border rounded-xl text-navy dark:text-white focus:outline-none focus:border-primary dark:focus:border-accent-sky focus:ring-1 focus:ring-primary dark:focus:ring-accent-sky transition-all placeholder:text-slate-400"
                />
                <button 
                  type="submit"
                  className="px-6 py-3.5 font-bold text-sm bg-primary hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-dark text-white rounded-xl shadow-premium transition-all focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
