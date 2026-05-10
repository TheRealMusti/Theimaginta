'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASING } from '@/lib/constants';

interface FadeUpProps {
 children: React.ReactNode;
 delay?: number;
 className?: string;
}

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const initial = { opacity: 0, y: isMobile ? 10 : 16 };
  const animate = { opacity: 1, y: 0 };

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
