import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/UI/LoadingScreen';
import CustomCursor from './components/UI/CustomCursor';
import ScrollProgress from './components/UI/ScrollProgress';
import BackToTop from './components/UI/BackToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Page components imports
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

// Helper component that automatically resets scroll position to the top on page routes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Sync dark mode class on html body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <Router>
          {/* Automatically reset scroll coordinates on page load */}
          <ScrollToTop />

          <div className="min-h-screen bg-white dark:bg-darkBg text-text-primary dark:text-text-light relative transition-colors duration-300">
            
            {/* Custom Desktop Cursor */}
            <CustomCursor />

            {/* Sticky Scroll Progress Bar */}
            <ScrollProgress />

            {/* Frosted Glass Header */}
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Multi-Page Routes Wrapper */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>

            {/* Detailed Social & Site Index Footer */}
            <Footer />

            {/* Floating Back to Top Button */}
            <BackToTop />

          </div>
        </Router>
      )}
    </>
  );
}

export default App;
