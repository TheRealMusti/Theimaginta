'use client';

import { motion, useScroll, useTransform, useReducedMotion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useScrollVelocity } from '@/hooks/useScrollVelocity';

interface OpticalFocusProps {
 children: React.ReactNode;
 maxBlur?: number;
 sensitivity?: 'high' | 'medium' | 'low';
 className?: string;
 preserveText?: boolean;
}

export function OpticalFocus({ children, maxBlur = 3, className }: OpticalFocusProps) {
 const ref = useRef<HTMLDivElement>(null);
 const { intensity } = useScrollVelocity();
 const prefersReducedMotion = useReducedMotion();
 const [isLowEnd, setIsLowEnd] = useState(false);
 const isInView = useInView(ref, { margin: '200px' });

 useEffect(() => {
 setIsLowEnd(navigator.hardwareConcurrency < 4);
 }, []);

 // Distance from viewport center (0 = centered, 1 = edge)
 const { scrollYProgress } = useScroll({
 target: ref,
 offset: ['start end', 'end start'],
 });

 // Elements at center of viewport get less blur
 const centerDistance = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]);

 // Final blur = velocity intensity × distance from center × max
 const blur = useTransform(
 [intensity, centerDistance],
 ([i, d]: number[]) => `blur(${(i * d * maxBlur).toFixed(1)}px)`
 );

 if (prefersReducedMotion || isLowEnd) {
 return <div className={className}>{children}</div>;
 }

 return (
 <motion.div
 ref={ref}
 style={{ 
 filter: blur,
 willChange: isInView ? 'filter' : 'auto'
 }}
 className={className}
 >
 {children}
 </motion.div>
 );
}
