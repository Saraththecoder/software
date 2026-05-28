import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[9999] pointer-events-none">
      <div 
        className="h-full bg-gradient-premium shadow-[0_0_10px_#1A56FF] transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
