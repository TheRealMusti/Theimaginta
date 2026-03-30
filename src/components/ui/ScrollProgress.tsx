'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress({ color = 'rgba(201, 166, 107, 0.6)', className = '' }: { color?: string, className?: string }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className={`fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left ${className}`}
            style={{ scaleX, background: color }}
        />
    );
}
