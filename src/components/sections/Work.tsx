'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Meta, GrainOverlay, Button, GlassPane } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Search, Database, Globe, Shield } from 'lucide-react';
import { ScrollReveal } from '@/components/motion';

/* ─────────────────────────── Projects Data ─────────────────────────── */

const PROJECTS = [
  {
    id: "lifestyle-gym",
    index: "01",
    title: "Lifestyle Gym",
    category: "Brand Identity // Web",
    image: "/selectedwork/gym.png",
    accentColor: "rgba(196, 163, 110, 0.15)", // Prestige Gold
    description: "A premium fitness platform where luxury meets discipline, designed for high-performance lifestyles.",
    metric: "124%_GROWTH",
    capabilities: ["DESIGN", "SECURED", "SCALE"]
  },
  {
    id: "aura-automotive",
    index: "02",
    title: "Aura Automotive",
    category: "Product Design // Dev",
    image: "/selectedwork/car.png",
    accentColor: "rgba(74, 144, 226, 0.12)", // Electric Blue
    description: "Next-generation interface for electric mobility systems, bridging the gap between hardware and soul.",
    metric: "ZERO_FRICTION",
    capabilities: ["ENGINEERING", "SECURED", "VISION"]
  },
  {
    id: "ellecanta",
    index: "03",
    title: "Ellecanta",
    category: "Brand // Packaging",
    image: "/selectedwork/skincare.png",
    accentColor: "rgba(230, 213, 193, 0.15)", // Champagne
    description: "High-end skincare branding with a focus on sustainable luxury and refractive aesthetics.",
    metric: "GLOBAL_PRESENCE",
    capabilities: ["BRANDING", "SECURED", "SUSTAIN"]
  },
  {
    id: "artisan-pizza",
    index: "04",
    title: "Artisan Pizza",
    category: "Digital Commerce",
    image: "/selectedwork/pizza.png",
    accentColor: "rgba(211, 84, 0, 0.12)", // Artisan Burnt Orange
    description: "A luxury dining experience where traditional craft meets modern digital commerce infrastructure.",
    metric: "PURE_CRAFT",
    capabilities: ["COMMERCE", "SECURED", "CRAFT"]
  }
];

const LOOP_DURATION = 7000;

/* ─────────────────────────── Main Component ─────────────────────────── */

export function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = (elapsed % LOOP_DURATION) / LOOP_DURATION * 100;
      setProgress(currentProgress);

      if (elapsed >= LOOP_DURATION) {
        setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [activeIndex, isHovered]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const activeProject = PROJECTS[activeIndex];

  return (
    <section 
      id="work" 
      className="relative w-full h-[80vh] min-h-[600px] max-h-[900px] bg-transparent overflow-hidden flex items-center"
    >
      {/* ════ CINEMATIC BACKGROUND STAGE ════ */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.55, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src={activeProject.image} 
            alt={activeProject.title}
            fill
            priority
            className="object-cover brightness-[0.45] contrast-[1.1]"
          />
          
          {/* Color Tint Overlay - Subtle architectural wash */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: activeProject.accentColor }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      <GrainOverlay opacity={0.012} />
      
      {/* Structural Vault Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 flex items-center gap-4 opacity-20">
          <Database size={14} className="text-white" />
          <div className="h-px w-24 bg-white" />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white">Project_0{activeProject.index}</span>
        </div>
        <div className="absolute bottom-10 right-10 flex items-center gap-4 opacity-20">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white">Design_Excellence</span>
          <div className="h-px w-24 bg-white" />
          <Shield size={14} className="text-white" />
        </div>
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center h-full">
        <ScrollReveal className="w-full max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <GlassPane
                plane={1}
                hover={true}
                radius={40}
                className="bg-[#0A090C]/20 border-white/[0.03] p-8 md:p-14 lg:p-16 relative overflow-hidden group/card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch relative z-10">
                  
                  {/* Left Column: Editorial Identity */}
                  <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
                    <div className="space-y-6">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-6"
                      >
                        <div className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-prestige shadow-[0_0_8px_rgba(196,163,110,0.4)]" />
                           <span className="text-[10px] font-mono font-semibold tracking-[0.5em] uppercase text-prestige">{activeProject.category}</span>
                        </div>
                        <div className="h-px flex-1 max-w-[80px] bg-white/10" />
                      </motion.div>
                      
                      <h3 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white uppercase leading-[0.85]">
                        {activeProject.title.split(' ')[0]} <br />
                        <span className="text-white/15 font-serif italic lowercase font-normal tracking-[-0.04em]">{activeProject.title.split(' ')[1]}</span>
                      </h3>
                    </div>

                    <p className="text-[17px] md:text-[19px] text-white/40 leading-relaxed font-light max-w-lg">
                      {activeProject.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {activeProject.capabilities.map((cap, i) => (
                        <GlassPane 
                          key={i} 
                          plane={3} 
                          radius={999}
                          padding="8px 20px"
                          className="group/cap hover:border-prestige/30 transition-colors duration-500"
                        >
                          <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-white/30 group-hover/cap:text-prestige transition-colors">{cap}</span>
                        </GlassPane>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Tactical HUD & Action */}
                  <div className="lg:col-span-5 flex flex-col justify-between gap-12 py-4">
                    <div className="space-y-10">
                      {/* Technical Metric Module - Plane 2 (MIDDLE) */}
                      <GlassPane 
                        plane={2}
                        radius={32}
                        padding="32px"
                        className="group/metric"
                      >
                        <div className="relative z-10 space-y-6">
                           <div className="flex items-center justify-between">
                              <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">Performance_Metric</span>
                              <div className="w-6 h-px bg-white/10" />
                           </div>
                           
                           <div className="flex flex-col">
                              <div className="text-4xl md:text-5xl font-semibold text-white tracking-tighter tabular-nums mb-1">
                                 {activeProject.metric.split('_')[0]}
                              </div>
                              <div className="text-[10px] font-mono text-prestige tracking-[0.3em] uppercase font-semibold">
                                 {activeProject.metric.split('_')[1]}
                              </div>
                           </div>
                        </div>
                      </GlassPane>

                      <div className="flex items-center gap-6 px-4">
                         <Globe size={14} className="text-white/10" />
                         <div className="h-px flex-1 bg-white/[0.05]" />
                         <span className="text-[9px] font-mono text-white/10 tracking-widest uppercase">Global_Protocol</span>
                      </div>
                    </div>

                    <GlassPane 
                      plane={1} 
                      padding="0" 
                      radius={32}
                      className="group/btn"
                    >
                      <Link 
                        href={`/work/${activeProject.id}`}
                        className="relative flex items-center justify-between w-full p-8 transition-all duration-700 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-prestige opacity-0 group-hover/btn:opacity-[0.03] transition-opacity duration-700" />
                        
                        <div className="relative z-10 space-y-1">
                          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-prestige/60 group-hover/btn:text-prestige transition-colors">Project_Details</span>
                          <div className="text-xl font-semibold text-white/80 group-hover/btn:text-white group-hover/btn:translate-x-2 transition-all">Explore Case Study</div>
                        </div>

                        <div className="relative z-10 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover/btn:bg-prestige group-hover/btn:text-black group-hover/btn:rotate-45 transition-all duration-700">
                          <ArrowUpRight size={28} />
                        </div>
                      </Link>
                    </GlassPane>
                  </div>

                </div>
              </GlassPane>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>

        {/* ════ BOTTOM HUD NAVIGATION ════ */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-2xl px-8 flex items-center gap-8">
          {PROJECTS.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => handleManualSelect(idx)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative flex-1 py-4"
            >
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <span className={cn(
                    "text-[11px] font-mono transition-colors duration-500",
                    activeIndex === idx ? "text-prestige" : "text-white/20 group-hover:text-white/40"
                  )}>
                    0{project.index}
                  </span>
                  {activeIndex === idx && (
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[9px] font-bold tracking-widest text-prestige uppercase"
                    >
                      Active
                    </motion.span>
                  )}
                </div>
                <div className="h-0.5 w-full bg-white/5 relative overflow-hidden">
                  {activeIndex === idx && (
                    <motion.div 
                      className="absolute inset-0 bg-prestige"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                  {activeIndex !== idx && (
                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
