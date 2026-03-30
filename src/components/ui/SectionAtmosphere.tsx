'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

export interface SectionAtmosphereProps {
    number: string;
    glowColor: string;
    glowPosition: { left?: string; right?: string; top?: string; bottom?: string };
    glowSize: number;
    isHovered: boolean;
}

export function SectionAtmosphere({ number, glowColor, glowPosition, glowSize, isHovered }: SectionAtmosphereProps) {
    const prefersReducedMotion = useReducedMotion();
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Parallax
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    // Y parallax -> ranges from +80px at section entering, to -80px when leaving
    const yOffset = useTransform(scrollYProgress, [0, 1], [80, -80]);

    // Handle desktop (3%) vs mobile (2%) and hover (5%) targeting pure CSS 
    // to keep it clean and responsive
    const opacityClass = isHovered 
        ? 'opacity-[0.05]' 
        : 'opacity-[0.02] md:opacity-[0.03]';

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Ambient Glow */}
            <motion.div 
                className="absolute mix-blend-screen md:block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: prefersReducedMotion ? 1 : 1 }}
                viewport={{ once: false, margin: "0px 0px -20% 0px" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                    background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
                    width: glowSize,
                    height: glowSize,
                    filter: 'blur(120px)',
                    ...glowPosition
                }}
            />

            {/* Large Parallax Number */}
            <motion.div
                className={`absolute right-[-4%] md:right-[-5%] top-[10%] md:top-1/2 md:-translate-y-1/2 font-sans font-[800] tracking-[-0.06em] text-[#C9A66B] select-none transition-opacity duration-[800ms] ease-out ${opacityClass}`}
                style={{
                    fontSize: 'clamp(120px, 30vw, 180px)', // Mobile size baseline
                    lineHeight: 1,
                    y: prefersReducedMotion ? 0 : yOffset
                }}
            >
                <span className="md:text-[clamp(180px,25vw,320px)]">{number}</span>
            </motion.div>
        </div>
    );
}
