'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASING } from '@/lib/constants';

export interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    variant?: 'fade' | 'scale';
}

export function ScrollReveal({ children, delay = 0, className, variant = 'fade' }: ScrollRevealProps) {
    const prefersReducedMotion = useReducedMotion();

    const initial = variant === 'scale'
        ? { opacity: 0, scale: 0.95 }
        : { opacity: 0, y: 20 };

    const animate = variant === 'scale'
        ? { opacity: 1, scale: 1 }
        : { opacity: 1, y: 0 };

    return (
        <motion.div
            className={className}
            initial={prefersReducedMotion ? animate : initial}
            whileInView={animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.9,
                ease: EASING.smoothArray,
                delay: prefersReducedMotion ? 0 : delay,
            }}
        >
            {children}
        </motion.div>
    );
}
