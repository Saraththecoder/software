import { useEffect, useState, useRef } from 'react';

export const useCountUp = (target: number, duration: number = 1800, trigger: boolean = true): number => {
  const [count, setCount] = useState<number>(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      startRef.current = null;
      return;
    }
    
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = timestamp - startRef.current;
      const progressPercent = Math.min(progress / duration, 1);
      
      // Quadratic ease out function for smooth deceleration
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentVal = Math.floor(easeOutQuad(progressPercent) * target);
      
      setCount(currentVal);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      startRef.current = null;
    };
  }, [target, duration, trigger]);

  return count;
};
export default useCountUp;
