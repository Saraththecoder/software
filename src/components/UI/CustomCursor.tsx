import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseMoveEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const addHoverListeners = () => {
      const clickables = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .interactive-element');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Set up listeners for initial load and dynamic nodes
    addHoverListeners();

    // Create a MutationObserver to listen for newly injected nodes (e.g. carousels or cards dynamic lists)
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div 
        className={`custom-cursor z-[9999] pointer-events-none hidden lg:block ${hovered ? 'custom-cursor-hover' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* Outer Glow Ring */}
      <div 
        className={`custom-cursor-glow z-[9998] pointer-events-none hidden lg:block ${hovered ? 'custom-cursor-glow-hover' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default CustomCursor;

// Small TypeScript helper for mouse events
type MouseMoveEvent = {
  clientX: number;
  clientY: number;
};
