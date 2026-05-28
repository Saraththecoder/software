import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'IT Recruitment', href: '/services' },
    { name: 'Contract Staffing', href: '/services' },
    { name: 'Corp-to-Corp Hiring', href: '/services' },
    { name: 'Full-Time Placement', href: '/services' },
    { name: 'Technology Consulting', href: '/services' },
    { name: 'Workforce Solutions', href: '/services' },
    { name: 'IT Outsourcing', href: '/services' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center" 
            onClick={closeMobileMenu}
          >
            <img 
              src="/logo.png" 
              alt="Oryon Technologies Logo" 
              className={`h-9 w-auto object-contain transition-all duration-300 hover:scale-105 ${
                darkMode || !isScrolled ? 'brightness-0 invert' : 'brightness-100'
              }`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-semibold hover:text-primary dark:hover:text-accent-sky transition-colors duration-300 ${
                isScrolled ? 'text-text-primary dark:text-text-light' : 'text-white/95'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-semibold hover:text-primary dark:hover:text-accent-sky transition-colors duration-300 ${
                isScrolled ? 'text-text-primary dark:text-text-light' : 'text-white/95'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className={`flex items-center space-x-1 text-sm font-semibold hover:text-primary dark:hover:text-accent-sky transition-colors focus:outline-none py-2 duration-300 ${
                  isScrolled ? 'text-text-primary dark:text-text-light' : 'text-white/95'
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    className="absolute left-0 mt-1 w-64 bg-white dark:bg-darkBg-card border border-blue-50 dark:border-darkBg-border rounded-xl shadow-xl py-3 z-[1100]"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {services.map((svc, i) => (
                      <Link 
                        key={i} 
                        to={svc.href}
                        className="block px-5 py-2.5 text-sm font-medium text-text-secondary dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-darkBg hover:text-primary dark:hover:text-accent-sky transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {svc.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/faq" 
              className={`text-sm font-semibold hover:text-primary dark:hover:text-accent-sky transition-colors duration-300 ${
                isScrolled ? 'text-text-primary dark:text-text-light' : 'text-white/95'
              }`}
            >
              FAQs
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-semibold hover:text-primary dark:hover:text-accent-sky transition-colors duration-300 ${
                isScrolled ? 'text-text-primary dark:text-text-light' : 'text-white/95'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-semibold hover:text-primary dark:hover:text-accent-sky transition-colors duration-300 ${
                isScrolled ? 'text-text-primary dark:text-text-light' : 'text-white/95'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Buttons: Dark Mode + CTA Support Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all duration-300 focus:outline-none ${
                isScrolled 
                  ? 'border-blue-100 dark:border-darkBg-border text-navy dark:text-text-light hover:bg-slate-50 dark:hover:bg-darkBg-card' 
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                // Sun Icon
                <svg className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className={`w-5 h-5 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <Link 
              to="/contact"
              className="px-6 py-2.5 text-sm font-bold bg-primary hover:bg-primary-dark text-white rounded-full shadow-premium hover:shadow-premium-hover transition-all focus:outline-none animate-pulse-glow"
            >
              Get Support
            </Link>
          </div>

          {/* Mobile Right Controls: Dark Mode Toggle + Hamburger */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all duration-300 focus:outline-none ${
                isScrolled 
                  ? 'border-blue-50 dark:border-darkBg-border text-navy dark:text-text-light' 
                  : 'border-white/20 text-white'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
              ) : (
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
              )}
            </button>

            {/* Mobile Hamburger Icon */}
            <button 
              onClick={toggleMobileMenu}
              className={`p-2 transition-colors duration-300 focus:outline-none ${
                isScrolled ? 'text-text-primary dark:text-text-light' : 'text-white'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Slide-down Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 top-[60px] bg-white dark:bg-darkBg z-[990] flex flex-col justify-between py-10 px-6 overflow-y-auto lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-5">
              <Link to="/" className="text-xl font-bold text-text-primary dark:text-text-light border-b border-slate-50 dark:border-darkBg-border pb-3" onClick={closeMobileMenu}>Home</Link>
              <Link to="/about" className="text-xl font-bold text-text-primary dark:text-text-light border-b border-slate-50 dark:border-darkBg-border pb-3" onClick={closeMobileMenu}>About Us</Link>
              
              {/* Expandable Services Accordion */}
              <div className="border-b border-slate-50 dark:border-darkBg-border pb-3">
                <span className="text-xl font-bold text-text-primary dark:text-text-light block mb-3">Our Services</span>
                <div className="grid grid-cols-1 gap-2.5 pl-4">
                  {services.map((svc, i) => (
                    <Link 
                      key={i} 
                      to={svc.href}
                      className="text-base font-semibold text-text-secondary dark:text-slate-300 hover:text-primary dark:hover:text-accent-sky"
                      onClick={closeMobileMenu}
                    >
                      {svc.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/faq" className="text-xl font-bold text-text-primary dark:text-text-light border-b border-slate-50 dark:border-darkBg-border pb-3" onClick={closeMobileMenu}>FAQs</Link>
              <Link to="/blog" className="text-xl font-bold text-text-primary dark:text-text-light border-b border-slate-50 dark:border-darkBg-border pb-3" onClick={closeMobileMenu}>Blog</Link>
              <Link to="/contact" className="text-xl font-bold text-text-primary dark:text-text-light border-b border-slate-50 dark:border-darkBg-border pb-3" onClick={closeMobileMenu}>Contact Us</Link>
            </div>

            <div className="mt-8 flex flex-col space-y-4">
              <Link 
                to="/contact"
                className="w-full py-3.5 text-center font-bold bg-primary hover:bg-primary-dark text-white rounded-xl shadow-premium"
                onClick={closeMobileMenu}
              >
                Get Support
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
