'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASING } from '@/lib/constants';

interface StaggerGroupProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function StaggerGroup({ children, className, delay = 0.3 }: StaggerGroupProps) {
    const prefersReducedMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: prefersReducedMotion ? 1 : 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.1,
                delayChildren: prefersReducedMotion ? 0 : delay,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
    rotateX?: boolean;
}

export function StaggerItem({ children, className, rotateX = false }: StaggerItemProps) {
    const prefersReducedMotion = useReducedMotion();

    const itemVariants = {
        hidden: prefersReducedMotion ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 16, rotateX: rotateX ? 1.5 : 0 },
        show: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: prefersReducedMotion ? 0 : 0.7,
                ease: EASING.smoothArray,
            }
        },
    };

    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
}
