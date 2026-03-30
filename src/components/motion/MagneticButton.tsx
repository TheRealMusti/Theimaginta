'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

export function MagneticButton({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const targetX = useMotionValue(0);
    const targetY = useMotionValue(0);
    const { mousePosition, isTouchDevice } = useMousePosition();

    const springConfig = { stiffness: 150, damping: 15 };
    const x = useSpring(targetX, springConfig);
    const y = useSpring(targetY, springConfig);

    const textX = useTransform(x, (val) => -val * 0.25);
    const textY = useTransform(y, (val) => -val * 0.25);

    useEffect(() => {
        if (isTouchDevice || !mousePosition || !ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distanceX = mousePosition.x - centerX;
        const distanceY = mousePosition.y - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 120) {
            const pullX = (distanceX / 120) * 8;
            const pullY = (distanceY / 120) * 8;
            targetX.set(pullX);
            targetY.set(pullY);
        } else {
            targetX.set(0);
            targetY.set(0);
        }
    }, [mousePosition, isTouchDevice, targetX, targetY]);

    return (
        <motion.div ref={ref} className={`relative inline-block ${className}`} style={{ x, y, willChange: 'transform' }}>
            <motion.div style={{ x: textX, y: textY, willChange: 'transform' }}>
                {children}
            </motion.div>
        </motion.div>
    );
}
