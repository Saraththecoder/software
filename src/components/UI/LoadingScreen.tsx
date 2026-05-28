import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fill the progress bar in 1.6 seconds
    const duration = 1600;
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
          }, 400); // Small pause before fading out
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div 
          className="fixed inset-0 bg-white dark:bg-darkBg flex flex-col items-center justify-center z-[10000]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Main Logo Text Animation */}
          <div className="flex flex-col items-center space-y-6 max-w-md w-full px-6">
            <div className="flex flex-col items-center">
              {/* Vetted logo image */}
              <motion.img 
                src="/logo.png" 
                alt="Oryon Technologies Logo" 
                className="h-16 w-auto object-contain"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-xs uppercase tracking-[0.2em] text-text-secondary dark:text-slate-400 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Elite IT Staffing & Consulting
            </motion.p>

            {/* Filled Loading Progress Bar */}
            <div className="w-full h-[3px] bg-slate-100 dark:bg-darkBg-border rounded-full overflow-hidden relative">
              <motion.div 
                className="h-full bg-gradient-premium rounded-full"
                style={{ width: `${progress}%` }}
                layoutId="loadingBar"
              />
            </div>

            {/* Counter Text */}
            <motion.span 
              className="text-sm font-medium text-primary dark:text-accent-sky"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.floor(progress)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
