'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export function ProcessJourney({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Track scroll over the entire journey container
    // We start filling when the top hits the center of screen, finishing when the bottom hits center
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center']
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={containerRef} className="relative w-full">
            {/* Base timeline line running down the entire container */}
            <div className="absolute top-[20px] bottom-0 left-[24px] xl:left-[calc(50vw-600px+80px)] w-[1px] bg-white/[0.04] z-0" />
            
            {/* Progress amber fill */}
            <motion.div 
                className="absolute top-[20px] bottom-0 left-[24px] xl:left-[calc(50vw-600px+80px)] w-[1px] bg-accent-base/20 z-0 origin-top"
                style={{ scaleY }}
            />
            
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}

interface PhaseNodeProps {
    className?: string;
}

export function PhaseNode({ className = "" }: PhaseNodeProps) {
    const ref = useRef<HTMLDivElement>(null);
    // The node activates when it passes the center of the viewport (which is where the timeline fill should hit it)
    const isInView = useInView(ref, { margin: "0px 0px -50% 0px", once: false });

    return (
        <div 
            ref={ref}
            className={`absolute left-[19px] xl:left-[calc(50vw-600px+75.5px)] w-[10px] h-[10px] rounded-full transition-all duration-600 ease ${isInView ? 'bg-accent-base/30 border-accent-base/20 shadow-[0_0_12px_rgba(201,166,107,0.1)]' : 'bg-white/[0.06] border-white/[0.08]'} border-[0.5px] z-10 ${className}`} 
        />
    );
}
