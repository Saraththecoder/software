import React from 'react';

export const LogoMarquee: React.FC = () => {
  const partners = [
    { name: 'Microsoft', icon: '💻' },
    { name: 'Google', icon: '🔍' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Salesforce', icon: '📈' },
    { name: 'Oracle', icon: '💾' },
    { name: 'SAP', icon: '📊' },
    { name: 'IBM', icon: '⚙️' },
    { name: 'Cisco', icon: '🔌' },
    { name: 'ServiceNow', icon: '🛠️' },
    { name: 'Workday', icon: '📅' },
    { name: 'Meta', icon: '👥' },
    { name: 'LinkedIn', icon: '🤝' },
  ];

  // Duplicate list to achieve continuous infinite marquee cycle
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-slate-50 dark:bg-darkBg/20 border-t border-blue-50 dark:border-darkBg-border relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-xs font-black tracking-widest text-primary dark:text-accent-sky uppercase block mb-3">
          WE STRIVE TO WORK WITH THE BEST
        </span>
        <p className="max-w-xl mx-auto text-text-secondary dark:text-slate-300 font-semibold text-sm sm:text-base">
          We collaborate with top brands and technologies to deliver the best IT staffing solutions for your business.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden marquee-container py-4">
        
        {/* Edge Fade Gradients (Light Mode / Dark Mode adaptive) */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-darkBg/50 z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-darkBg/50 z-10 pointer-events-none" />

        {/* Moving Content Row */}
        <div className="flex w-max animate-marquee space-x-12">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 px-8 py-4 bg-white dark:bg-darkBg-card border border-blue-50/50 dark:border-darkBg-border rounded-xl shadow-sm filter grayscale hover:grayscale-0 hover:text-primary dark:hover:text-accent-sky hover:shadow-premium transition-all duration-300 select-none group cursor-pointer"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                {partner.icon}
              </span>
              <span className="text-sm font-black text-navy dark:text-slate-200 group-hover:text-primary dark:group-hover:text-accent-sky tracking-wider">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LogoMarquee;
