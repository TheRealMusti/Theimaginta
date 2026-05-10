'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Container, 
  Meta, 
  GrainOverlay,
  CountUpNumber,
  GlassPane
} from '@/components/ui';
import { ScrollReveal } from '@/components/motion';
import { 
  Sparkles, 
  Feather, 
  ArrowUpRight,
  CircleDot,
  Quote
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─────────────────────────── Data ─────────────────────────── */

const BRAND_PILLARS = [
  {
    id: "01",
    label: "Artistic Direction",
    value: "Elegance",
    description: "We believe in the power of simplicity and the impact of timeless design.",
    icon: Sparkles
  },
  {
    id: "02",
    label: "Masterful Execution",
    value: "Precision",
    description: "Every detail is considered, every interaction is crafted for perfection.",
    icon: Feather
  },
  {
    id: "03",
    label: "Emotional Impact",
    value: "Legacy",
    description: "We build digital experiences that resonate long after the first visit.",
    icon: Quote
  }
];

/* ─────────────────────────── Main Section ─────────────────────────── */

export function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BRAND_PILLARS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="about" 
      className="relative w-full bg-transparent py-12 sm:py-14 md:py-[72px] lg:py-24 overflow-hidden"
    >
      <GrainOverlay opacity={0.012} />
      
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-3 items-stretch">
          
          {/* ════ LEFT: VERTICAL BRANDING ════ */}
          <div className="hidden lg:flex lg:col-span-1 flex-col justify-between py-12 border-r border-white/5">
            <ScrollReveal delay={0.1}>
              <div className="rotate-[-90deg] origin-left translate-x-1/2 translate-y-24 whitespace-nowrap">
                <span className="text-[10px] font-mono tracking-[1em] text-white/20 uppercase font-medium">
                   Est. 2024 // London — Berlin
                </span>
              </div>
            </ScrollReveal>
            
            <div className="flex flex-col gap-4 items-center">
              <div className="w-1 h-1 rounded-full bg-prestige" />
              <div className="w-px h-12 bg-gradient-to-b from-prestige/40 to-transparent" />
            </div>
          </div>

          {/* ════ CENTER: PHILOSOPHY CORE ════ */}
          <div className="md:col-span-1 lg:col-span-7 lg:px-16 flex flex-col justify-center">
            <ScrollReveal>
              <div className="mb-4 lg:mb-6">
                <Meta className="meta-text meta-amber">Our Story</Meta>
              </div>

              <h2 className="section-h2 text-white mb-4 lg:mb-6 uppercase">
                Creating with <br />
                <span className="text-prestige/30 font-serif italic lowercase tracking-tight font-normal">Purpose.</span>
              </h2>

              <div className="max-w-2xl">
                <p className="body-text mb-4 lg:mb-8">
                  We believe that great design is felt as much as it is seen. Our approach is rooted in <span className="text-white italic">intentionality</span>, blending artistic vision with strategic clarity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-3 pb-4 lg:pb-8 border-b border-white/5">
                  <StatModule label="Vision" value={100} suffix="%" />
                  <StatModule label="Detail" value={40} suffix="mm" />
                  <StatModule label="Legacy" value={24} suffix="/7" />
                </div>

                <div className="mt-4 lg:mt-8 flex flex-wrap gap-8 lg:gap-12 items-center">
                  <div className="flex items-center gap-3">
                    <CircleDot size={14} className="text-prestige animate-pulse" />
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Always Refining</span>
                  </div>
                  <div className="flex items-center gap-3 group cursor-pointer">
                    <span className="text-[10px] font-mono text-prestige uppercase tracking-widest font-medium border-b border-prestige/20 group-hover:border-prestige transition-colors">Read Our Story</span>
                    <ArrowUpRight size={14} className="text-prestige group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ════ RIGHT: ESSENCE GRID ════ */}
          <div className="md:col-span-1 lg:col-span-4 lg:pl-16 flex flex-col justify-center gap-4">
            <ScrollReveal className="grid grid-cols-1 gap-3 relative">
              {BRAND_PILLARS.map((pillar, idx) => (
                <PillarCard 
                  key={pillar.id} 
                  item={pillar} 
                  index={idx} 
                  isActive={activeIndex === idx}
                />
              ))}
            </ScrollReveal>
            
            {/* Soft Visual Accent - Plane 3 (RECEDED) */}
            <ScrollReveal delay={0.6} className="mt-2 lg:mt-4">
              <GlassPane 
                plane={3}
                noBlur={true}
                padding="24px 20px"
              >
                <div className="flex items-center justify-between mb-2 lg:mb-4">
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Current Focus</span>
                  <div className="flex gap-1">
                    {BRAND_PILLARS.map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "w-1 h-1 rounded-full transition-all duration-500",
                          activeIndex === i ? "bg-prestige w-3" : "bg-prestige/20"
                        )} 
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-0.5 flex-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      key={activeIndex}
                      className="h-full bg-prestige/40"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 7, ease: "linear" }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-prestige/60 uppercase w-12 text-right">0{activeIndex + 1}</span>
                </div>
              </GlassPane>
            </ScrollReveal>
          </div>

        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────── Sub-Components ─────────────────────────── */

function StatModule({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  return (
    <div className="flex flex-col gap-0.5 lg:gap-1">
      <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{label}</span>
      <div className="flex items-baseline gap-1">
        <span className="text-xl lg:text-3xl font-semibold text-white tracking-tighter">
          <CountUpNumber value={value} duration={2} />
        </span>
        <span className="text-[10px] lg:text-sm font-medium text-prestige/60">{suffix}</span>
      </div>
    </div>
  );
}

function PillarCard({ item, index, isActive }: { item: typeof BRAND_PILLARS[0]; index: number; isActive: boolean }) {
  const Icon = item.icon;
  
  return (
    <ScrollReveal delay={0.2 + index * 0.1}>
      <GlassPane 
        variant={isActive ? 'warm' : 'standard'}
        plane={2}
        noBlur={true} // First row after hero, nothing behind
        hover={true}
        className={cn(
          "transition-all duration-1000 cursor-pointer",
          isActive ? "scale-[1.05] lg:scale-[1.08] z-20" : "opacity-15 hover:opacity-100 z-10 scale-100"
        )}
        padding="24px 20px"
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
             <div className={cn(
              "w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center transition-all duration-700",
              isActive ? "bg-prestige/10 border border-prestige/20" : "bg-white/[0.03] border border-white/5"
            )}>
              <Icon size={isActive ? 20 : 16} className={cn(
                "transition-all duration-700",
                isActive ? "text-prestige" : "text-white/10"
                )} 
              />
            </div>
            
            <div className="flex flex-col items-end">
               <span className={cn(
                "text-[9px] lg:text-[10px] font-mono tracking-[0.3em] uppercase transition-colors",
                isActive ? "text-prestige" : "text-prestige/20"
              )}>
                {item.id}
              </span>
              <span className="text-[9px] lg:text-[10px] font-mono text-white/10 uppercase tracking-widest">{item.label}</span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className={cn(
              "card-h3 uppercase transition-all duration-700",
              isActive ? "text-white mb-4" : "text-white/20 mb-0"
            )}>
              {item.value}
            </h3>
            
            <motion.div
              initial={false}
              animate={{ 
                height: isActive ? 'auto' : 0,
                opacity: isActive ? 1 : 0,
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="relative pl-6 border-l-2 border-prestige/30">
                <p className={cn(
                  "card-body transition-all duration-700",
                  isActive ? "text-white/90 font-normal" : "text-white/10 font-light"
                )}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Progress Line for Active Card */}
        {isActive && (
          <motion.div 
            className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-prestige/0 via-prestige/60 to-prestige/0"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 7, ease: "linear" }}
          />
        )}
      </GlassPane>
    </ScrollReveal>
  );
}
