import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Terms and Conditions', href: '/' },
    { name: 'Privacy Policy', href: '/' },
  ];

  const services = [
    { name: 'IT Recruitment', href: '/services' },
    { name: 'Contract Staffing', href: '/services' },
    { name: 'Corp-to-Corp Hiring', href: '/services' },
    { name: 'Technology Consulting', href: '/services' },
    { name: 'Workforce Solutions', href: '/services' },
    { name: 'IT Outsourcing', href: '/services' },
  ];

  return (
    <footer className="bg-navy dark:bg-navy-dark text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Footer Backdrop Blurs */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full filter blur-[80px] pointer-events-none" />

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center space-x-2.5">
              <img 
                src="/logo.png" 
                alt="Oryon Technologies Logo" 
                className="h-9 w-auto object-contain brightness-0 invert"
              />
              <span className="text-lg font-black tracking-wide font-display text-white">
                ORYON <span className="text-accent-sky font-extrabold">TECHNOLOGIES</span>
              </span>
            </Link>
            <p className="text-slate-300 font-medium text-sm leading-relaxed max-w-sm">
              Oryon Technologies delivers reliable, scalable IT staffing and consulting services to help businesses grow and thrive.
            </p>

            {/* Social Icons row */}
            <div className="flex space-x-3.5 pt-2">
              {['linkedin', 'facebook', 'instagram', 'twitter', 'youtube'].map((social, idx) => (
                <a 
                  key={idx}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-primary rounded-xl flex items-center justify-center border border-white/10 hover:border-transparent transition-all duration-300 group"
                  aria-label={`Follow Oryon Technologies on ${social}`}
                >
                  <span className="text-sm uppercase font-black text-slate-300 group-hover:text-white group-hover:scale-105 transition-all select-none">
                    {social.substring(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:pl-4 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-wider text-accent-sky">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.href}
                    className="text-slate-300 hover:text-white text-sm font-semibold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Services */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-wider text-accent-sky">
              Top Services
            </h4>
            <ul className="space-y-3.5">
              {services.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.href}
                    className="text-slate-300 hover:text-white text-sm font-semibold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-wider text-accent-sky">
              Contact Us
            </h4>
            <ul className="space-y-4 text-slate-300 font-semibold text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-lg flex-shrink-0">📍</span>
                <span className="leading-relaxed">1204 Evergreen Forest Blvd, Avenel, NJ-07001</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-lg flex-shrink-0">✉️</span>
                <a href="mailto:info@oryontechnologies.com" className="hover:text-white transition-colors">info@oryontechnologies.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-lg flex-shrink-0">📞</span>
                <a href="tel:+17325550199" className="hover:text-white transition-colors">+1 (732) 555-0199</a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-lg flex-shrink-0">🕐</span>
                <span>Monday–Sunday, 24 Hours Available</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 font-semibold text-xs text-center md:text-left select-none">
          <p>© 2025 by Oryon Technologies Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
