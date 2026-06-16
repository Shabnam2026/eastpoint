import { motion } from 'motion/react';
import { ReactNode, Key } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'none';
  key?: Key;
}

export function Reveal({ children, delay = 0, className = '', direction = 'up' }: RevealProps) {
  return (
    <motion.div
      initial={direction === 'up' ? { opacity: 0, y: 26 } : { opacity: 0 }}
      whileInView={direction === 'up' ? { opacity: 1, y: 0 } : { opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
