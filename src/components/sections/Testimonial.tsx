'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Meta, GrainOverlay, GlassPane } from '@/components/ui';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/motion';

const TESTIMONIALS = [
  {
    quote: "Scaling a boutique fitness brand requires more than just a landing page. Imaginta built a digital ecosystem that captured our culture perfectly—our member conversion jumped 40% in the first quarter.",
    name: "Elena Moretti",
    role: "Founder, THE SCULPT"
  },
  {
    quote: "Simplifying complex financial data without losing the premium feel is a massive challenge. Imaginta delivered a platform that feels like a private bank but functions like modern SaaS. A total game changer.",
    name: "David Aris",
    role: "CTO, Vault Finance"
  },
  {
    quote: "As a studio that values minimalism, we are hard to please. Imaginta's attention to motion design and micro-interactions is world-class. They architect experiences that feel truly alive.",
    name: "Kaito Tanaka",
    role: "Creative Director, Studio Sora"
  },
  {
    quote: "Most agencies struggle with high-tech concepts. Imaginta translated our neural network infrastructure into a visual narrative that even our non-technical investors could feel. Their technical depth is rare.",
    name: "Marcus Thorne",
    role: "VP of Product, Aether Labs"
  }
];

const AUTO_PLAY_INTERVAL = 8000;

export function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      setProgress(0);
    }, AUTO_PLAY_INTERVAL);

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + (100 / (AUTO_PLAY_INTERVAL / 16)), 100));
    }, 16);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setProgress(0);
  };

  return (
    <section id="testimonials" className="relative w-full h-[70vh] min-h-[600px] md:min-h-[750px] flex flex-col items-center justify-center bg-transparent overflow-hidden">
      <GrainOverlay opacity={0.012} />
      
      {/* ════ CINEMATIC ATMOSPHERE ════ */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/images/testimonials-bg.png" 
          alt="Atmosphere" 
          fill 
          className="object-cover opacity-40 brightness-[0.5] scale-110"
          priority
        />
      </div>

      <Container className="relative z-10 w-full max-w-5xl h-full flex flex-col justify-center items-center py-12 md:py-20">
        {/* Header Module (Compact) */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 space-y-4">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="flex items-center gap-4"
           >
              <div className="w-6 h-px bg-prestige/30" />
              <Meta className="meta-text meta-amber uppercase tracking-[0.5em] !text-[9px]">Client stories</Meta>
              <div className="w-6 h-px bg-prestige/30" />
           </motion.div>
           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase">
             Impact <span className="text-white/20 font-serif italic lowercase font-normal">Narratives</span>
           </h2>
        </div>

        {/* ════ THE NARRATIVE STAGE ════ */}
        <ScrollReveal className="w-full relative group max-w-4xl">
           <GlassPane 
             plane={2}
             radius={40}
             className="bg-[#0A090C]/40 border-white/[0.04] p-8 md:p-16 lg:p-20 relative overflow-hidden group/card shadow-[0_0_100px_rgba(0,0,0,0.5)]"
           >
              {/* Internal Progress (Tactical Side Scan) */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/[0.02]">
                 <motion.div 
                   className="w-full bg-prestige/40 shadow-[0_0_10px_rgba(196,163,110,0.3)]"
                   style={{ height: `${progress}%` }}
                 />
              </div>

              <div className="relative flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-10"
                  >
                    <div className="relative">
                       <span className="absolute -top-10 -left-6 text-7xl md:text-8xl font-serif text-prestige/10 leading-none pointer-events-none">“</span>
                       
                       <p className="text-xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white/90 leading-[1.2] italic indent-4 line-clamp-4 md:line-clamp-none">
                         {TESTIMONIALS[currentIndex].quote}
                       </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between pt-10 border-t border-white/[0.06] gap-6">
                       <div className="space-y-2">
                          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase">
                            {TESTIMONIALS[currentIndex].name}
                          </h3>
                          <div className="flex items-center gap-3">
                             <div className="w-1.5 h-1.5 rounded-full bg-prestige/60" />
                             <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-prestige/40">
                                {TESTIMONIALS[currentIndex].role}
                             </span>
                          </div>
                       </div>

                       {/* Frequency HUD (Compact) - Plane 3 (RECEDED) */}
                       <div className="flex items-center gap-6">
                          <div className="flex items-center gap-1 h-6">
                             {[...Array(8)].map((_, i) => (
                                <motion.div 
                                  key={i}
                                  animate={{ height: [2, Math.random() * 16 + 4, 2] }}
                                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.05 }}
                                  className="w-1 bg-prestige/10 rounded-full"
                                />
                             ))}
                          </div>
                          
                          <div className="flex flex-col items-end">
                             <span className="text-[8px] font-mono text-white/10 uppercase tracking-[0.2em]">Partner_Impact</span>
                             <span className="text-lg font-bold text-white/30 tabular-nums">#0{currentIndex + 1}</span>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
           </GlassPane>
        </ScrollReveal>

        {/* ════ ARCHIVAL NAVIGATION ════ */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-12 gap-8">
           <div className="flex items-center gap-3">
              {TESTIMONIALS.map((_, i) => (
                 <button 
                   key={i} 
                   onClick={() => { setCurrentIndex(i); setProgress(0); }}
                   className="group relative py-4"
                 >
                    <div className={cn(
                      "h-1 rounded-full transition-all duration-700",
                      currentIndex === i ? "w-12 bg-prestige" : "w-6 bg-white/10 group-hover:bg-white/30"
                    )} />
                    <span className={cn(
                      "absolute top-8 left-1/2 -translate-x-1/2 text-[9px] font-mono transition-opacity duration-500",
                      currentIndex === i ? "opacity-100 text-prestige" : "opacity-0"
                    )}>
                      0{i + 1}
                    </span>
                 </button>
              ))}
           </div>

           <div className="flex items-center gap-6">
              <GlassPane 
                plane={3} 
                padding="0" 
                radius={999}
                hover={true}
              >
                <button 
                  onClick={handlePrev}
                  className="group relative w-16 h-16 flex items-center justify-center transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-prestige opacity-0 group-hover:opacity-5 transition-opacity" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/30 group-hover:text-prestige transition-colors">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </GlassPane>

              <GlassPane 
                plane={3} 
                padding="0" 
                radius={999}
                hover={true}
              >
                <button 
                  onClick={handleNext}
                  className="group relative w-16 h-16 flex items-center justify-center transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-prestige opacity-0 group-hover:opacity-5 transition-opacity" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/30 group-hover:text-prestige transition-colors">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </GlassPane>
           </div>
        </div>
      </Container>
    </section>
  );
}
