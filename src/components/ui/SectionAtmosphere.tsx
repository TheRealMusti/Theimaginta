'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface SectionAtmosphereProps {
 number: string;
 glowColor: string;
 glowPosition: { left?: string; right?: string; top?: string; bottom?: string };
 glowSize: number;
 isHovered: boolean;
}

export function SectionAtmosphere({ number, glowColor, glowPosition, glowSize, isHovered }: SectionAtmosphereProps) {
 const prefersReducedMotion = useReducedMotion();
 const containerRef = useRef<HTMLDivElement>(null);
 const [isMounted, setIsMounted] = useState(false);

 useEffect(() => {
 setIsMounted(true);
 }, []);
 
 // Parallax
 const { scrollYProgress } = useScroll({
 target: isMounted ? containerRef : undefined,
 offset: ["start end", "end start"]
 });
 
 // Y parallax -> ranges from +40px at section entering, to -40px when leaving
 const yOffset = useTransform(scrollYProgress, [0, 1], [40, -40]);

 return (
 <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden group/atmosphere" aria-hidden="true">
 {/* Ambient Glow */}
 <motion.div 
 className="absolute mix-blend-screen md:block"
 initial={{ opacity: 0 }}
 whileInView={{ opacity: prefersReducedMotion ? 0.32 : 0.32 }}
 viewport={{ once: false, margin: "0px 0px -20% 0px" }}
 transition={{ duration: 1.5, ease: "easeOut" }}
 style={{
 background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
 width: glowSize,
 height: glowSize,
 ...glowPosition
 }}
 />

 {/* Enhanced Technical Identifier Module */}
 <motion.div
 className="absolute right-[4%] md:right-[5%] top-[8%] md:top-[10%] flex items-start gap-6 select-none transition-all duration-1000"
 style={{
 y: (prefersReducedMotion || !isMounted) ? 0 : yOffset,
 opacity: isHovered ? 0.8 : 0.4
 }}
 >
 {/* Vertical Signal Line */}
 <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-accent-base/20 to-transparent relative overflow-hidden">
 <motion.div 
 className="absolute top-0 left-0 w-full h-8 bg-accent-base/60 blur-[2px]"
 animate={{ top: ['0%', '100%'] }}
 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
 />
 </div>

 <div className="flex flex-col gap-4">
 {/* Main Section Label with Layered Typography */}
 <div className="relative group/label">
 {/* Background Watermark (Ghost) */}
 <span className="absolute -top-4 -left-4 text-[44px] md:text-[64px] font-semibold text-[#F5F2ED]/[0.03] tracking-tighter transition-all duration-1000 group-hover/atmosphere:text-accent-base/[0.08] group-hover/atmosphere:scale-110">
 {number}
 </span>
 
 {/* Primary Label */}
 <div className="relative z-10 flex flex-col">
 <h2 className="text-xl md:text-2xl font-semibold text-[#F5F2ED]/50 tracking-[0.2em] uppercase transition-all duration-700 group-hover/atmosphere:text-[#F5F2ED] group-hover/atmosphere:tracking-[0.25em]">
 {number}
 </h2>
 <div className="h-[1px] w-0 bg-accent-base/40 group-hover/atmosphere:w-full transition-all duration-700 mt-1" />
 </div>
 </div>
 </div>

 {/* Corner Accents */}
 <div className="absolute -top-4 -right-4 w-4 h-4 border-t border-r border-[#F5F2ED]/[0.06] group-hover/atmosphere:border-accent-base/40 transition-all duration-700" />
 <div className="absolute -bottom-4 -left-4 w-4 h-4 border-b border-l border-[#F5F2ED]/[0.06] group-hover/atmosphere:border-accent-base/40 transition-all duration-700" />
 </motion.div>
 </div>
 );
}
