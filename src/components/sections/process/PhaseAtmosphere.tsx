'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PhaseAtmosphereProps {
 id: string;
 number: string;
 children: React.ReactNode;
 className?: string;
}

export function PhaseAtmosphere({ 
 id, 
 number, 
 children, 
 className = '' 
}: PhaseAtmosphereProps) {
 const { scrollYProgress } = useScroll();
 
 // Smooth parallax on the number
 const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -100]);

 return (
 <section id={id} className={`w-full relative overflow-visible ${className}`}>
  
  {/* PARALLAX NUMBER */}
  <motion.div
  className="absolute right-0 top-0 xl:right-[4%] xl:top-[-40px] pointer-events-none select-none z-0 text-accent-base transition-opacity duration-700 font-sans tracking-tight leading-none opacity-[0.015]"
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
