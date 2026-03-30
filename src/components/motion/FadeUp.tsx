'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASING } from '@/lib/constants';

export interface FadeUpProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
    const prefersReducedMotion = useReducedMotion();

    const initial = { opacity: 0, y: 20 };
    const animate = { opacity: 1, y: 0 };

    return (
        <motion.div
            className={className}
            initial={prefersReducedMotion ? animate : initial}
            animate={animate}
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
