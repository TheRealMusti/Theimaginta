'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PhaseAtmosphereProps {
    id: string;
    number: string;
    glowIntensity?: 'weak' | 'base' | 'strong';
    glowPosition?: 'top-right' | 'center-left' | 'center' | 'center-right' | 'top-center' | 'bottom-right' | 'full-width';
    children: React.ReactNode;
    className?: string;
}

const GLOW_MAP = {
    'weak': 'rgba(245,242,237,0.025)',
    'base': 'rgba(201,166,107,0.03)',
    'strong': 'rgba(201,166,107,0.04)',
};

const POS_MAP: Record<string, string> = {
    'top-right': 'ellipse at top right',
    'center-left': 'ellipse at center left',
    'center': 'ellipse at center',
    'center-right': 'ellipse at center right',
    'top-center': 'ellipse at top center',
    'bottom-right': 'ellipse at bottom right',
    'full-width': 'ellipse at center',
};

export function PhaseAtmosphere({ 
    id, 
    number, 
    glowIntensity = 'base', 
    glowPosition = 'center', 
    children, 
    className = '' 
}: PhaseAtmosphereProps) {
    const { scrollYProgress } = useScroll();
    
    // Smooth 0.9x parallax on the number (very subtle shift up)
    const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section id={id} className={`w-full relative overflow-visible ${className}`}>
            
            {/* AMBIENT GLOW */}
            <div 
                className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${glowPosition === 'full-width' ? 'w-full' : 'w-[800px] max-w-[100vw]'}`}
                style={{
                    background: `radial-gradient(${POS_MAP[glowPosition]}, ${GLOW_MAP[glowIntensity]} 0%, transparent 60%)`,
                    filter: 'blur(120px)',
                    left: glowPosition.includes('right') ? 'auto' : glowPosition === 'full-width' ? '0' : '-200px',
                    right: glowPosition.includes('right') ? '-200px' : 'auto',
                    top: glowPosition.includes('top') ? '-100px' : '50%',
                    transform: glowPosition.includes('top') || glowPosition === 'full-width' ? 'none' : 'translateY(-50%)',
                }}
            />

            {/* PARALLAX NUMBER */}
            <motion.div
                className="absolute right-0 top-0 xl:right-[4%] xl:top-[-40px] pointer-events-none select-none z-0 text-accent-base transition-opacity duration-700 font-sans tracking-tight leading-none opacity-[0.025] hover:opacity-[0.04]"
                style={{
                    fontSize: 'clamp(160px, 22vw, 280px)',
                    fontWeight: 800,
                    y: yTranslate
                }}
                aria-hidden="true"
            >
                {number}
            </motion.div>

            {/* CONTENT */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
            
        </section>
    );
}
