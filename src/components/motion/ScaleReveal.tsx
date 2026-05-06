'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASING } from '@/lib/constants';

interface ScaleRevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export function ScaleReveal({ children, delay = 0, className }: ScaleRevealProps) {
    const prefersReducedMotion = useReducedMotion();

    const initial = { opacity: 0, scale: 0.95 };
    const animate = { opacity: 1, scale: 1 };

    return (
        <motion.div
            className={className}
            initial={prefersReducedMotion ? animate : initial}
            animate={animate}
            transition={{
                duration: 1.2,
                ease: EASING.smoothArray,
                delay: prefersReducedMotion ? 0 : delay,
            }}
        >
            {children}
        </motion.div>
    );
}
