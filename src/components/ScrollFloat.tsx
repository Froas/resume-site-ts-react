import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollFloatProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({ children, className = '' }) => {
  // Animate shadow and y offset on scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, -30]);
  const shadow = useTransform(scrollY, [0, 200], ["0 4px 24px rgba(80,103,235,0.15)", "0 8px 32px rgba(41,29,137,0.25)"]);

  return (
    <motion.div
      style={{ y, boxShadow: shadow }}
      className={`sticky top-6 z-20 bg-white/80 dark:bg-gray-900/80 rounded-xl p-6 backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFloat; 