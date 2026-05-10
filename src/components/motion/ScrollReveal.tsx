'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASING } from '@/lib/constants';

interface ScrollRevealProps {
 children: React.ReactNode;
 delay?: number;
 className?: string;
 variant?: 'fade' | 'scale';
}

export function ScrollReveal({ children, delay = 0, className, variant = 'fade' }: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const initial = variant === 'scale'
    ? { opacity: 0, scale: 0.95 }
    : { opacity: 0, y: isMobile ? 10 : 16, scale: 0.985 };

  const animate = variant === 'scale'
    ? { opacity: 1, scale: 1 }
    : { opacity: 1, y: 0, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? animate : initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: prefersReducedMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
