'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Meta, HydrationSafe, GrainOverlay, GlassPane } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Activity, Zap, Layers, Cpu } from 'lucide-react';
import { ScrollReveal } from '@/components/motion';

/* ─────────────────────────── Protocol Data ─────────────────────────── */

const STEPS = [
  {
    id: 'understanding',
    number: '01',
    name: 'Listen & Learn',
    title: 'Begin with Empathy',
    description: 'We start by understanding your world. Before we design, we listen to your challenges, your dreams, and the people you serve.',
    color: '#C9A66B',
    icon: Activity,
    metric: "100%_ALIGNMENT"
  },
  {
    id: 'vision',
    number: '02',
    name: 'Strategy & Soul',
    title: 'Defining the Essence',
    description: 'Together, we uncover the heart of your brand. We build a strategic foundation that feels authentic and deeply resonant.',
    color: '#D4C4A8',
    icon: Cpu,
    metric: "CORE_EXTRACTION"
  },
  {
    id: 'creation',
    number: '03',
    name: 'Craft & Care',
    title: 'Bringing it to Life',
    description: 'Our craft is a labor of love. We build every detail with a focus on beauty, performance, and the human experience.',
    color: '#8B9DA4',
    icon: Layers,
    metric: "LUXURY_PRECISION"
  },
  {
    id: 'nurture',
    number: '04',
    name: 'Grow & Guide',
    title: 'A Lasting Partnership',
    description: 'Launch day is just the beginning. We stay by your side, nurturing your growth and evolving your vision over time.',
    color: '#F5F2ED',
    icon: Zap,
    metric: "FUTURE_SCALE"
  }
];

const LOOP_DURATION = 7000; // 7 seconds per phase

/* ─────────────────────────── Main Section ─────────────────────────── */

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
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
        // Reset and move to next
        setActiveStep((prev) => (prev + 1) % STEPS.length);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [activeStep, isHovered]);

  const handleManualSelect = (index: number) => {
    setActiveStep(index);
    setProgress(0);
  };

  return (
    <section 
      id="process" 
      className="relative w-full h-[80vh] min-h-[600px] max-h-[900px] bg-transparent overflow-hidden flex items-center"
    >
      {/* ════ CLEAN TEXTURED BACKGROUND ════ */}
      <GrainOverlay opacity={0.012} />
      
      {/* Subtle Hairline Dividers for 'Vault' feel */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-[8%] h-full w-px bg-white/5" />
        <div className="absolute right-[8%] h-full w-px bg-white/5" />
      </div>

      <Container className="relative z-10 h-full flex flex-col justify-center py-12">
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center h-full max-h-[600px]">
          
          {/* ════ LEFT: PROTOCOL NAVIGATION (5 COLS) ════ */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-4">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-prestige" />
                  <Meta className="meta-text meta-amber tracking-[0.3em]">Operational_Sequence</Meta>
                </div>
                <h2 className="section-h2 text-white uppercase leading-none">
                  A Precise <br />
                  <span className="text-white/40 font-serif italic lowercase tracking-tight font-normal">methodology.</span>
                </h2>
              </div>

              <div className="space-y-2">
                {STEPS.map((step, idx) => (
                  <ProtocolItem 
                    key={step.id}
                    step={step}
                    isActive={activeStep === idx}
                    progress={activeStep === idx ? progress : 0}
                    onClick={() => handleManualSelect(idx)}
                    onHover={() => setIsHovered(true)}
                    onLeave={() => setIsHovered(false)}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Status */}
            <div className="hidden lg:flex items-center gap-4 text-[9px] font-mono tracking-widest text-white/10 uppercase">
              <span>System_Ready</span>
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <span>Buffer_0{activeStep + 1}</span>
            </div>
          </div>

          {/* ════ RIGHT: VISUAL CHAMBER (7 COLS) ════ */}
          <div className="lg:col-span-7 h-full relative group">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStep}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <GlassPane
                  plane={2}
                  radius={24}
                  className="h-full p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-hidden"
                >
                  {/* Premium Layered Background Number - Plane 3 (RECEDED) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 0.05, x: 0 }}
                    transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-0 right-0 p-8 select-none"
                  >
                    <span className="text-[12rem] font-serif italic leading-none text-white">
                      {STEPS[activeStep].number}
                    </span>
                  </motion.div>

                  <div className="space-y-12 relative z-10">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-prestige shadow-[0_0_20px_rgba(201,166,107,0.1)]">
                        {React.createElement(STEPS[activeStep].icon, { size: 24, strokeWidth: 1.5 })}
                      </div>
                      <div className="h-px w-12 bg-white/10" />
                      <Meta className="meta-text text-white/20 tracking-[0.2em]">{STEPS[activeStep].metric}</Meta>
                    </motion.div>

                    <div className="space-y-6">
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white/95 leading-[1.1]"
                      >
                        {STEPS[activeStep].title}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="body-text !max-w-xl text-white/50"
                      >
                        {STEPS[activeStep].description}
                      </motion.p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-12 relative z-10">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-1 h-1 rounded-full bg-prestige shadow-[0_0_8px_#C9A66B]" />
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">Protocol_Engaged</span>
                    </motion.div>

                    <GlassPane 
                      plane={3} 
                      padding="0" 
                      radius={999}
                      hover={true}
                    >
                      <motion.button 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="group flex items-center gap-4 px-6 py-3 transition-all duration-500"
                      >
                        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/60 group-hover:text-white">Expand_Phase</span>
                        <ArrowUpRight size={14} className="text-prestige group-hover:rotate-45 transition-transform" />
                      </motion.button>
                    </GlassPane>
                  </div>
                </GlassPane>
              </motion.div>
            </AnimatePresence>
          </div>

        </ScrollReveal>
      </Container>
    </section>
  );
}

/* ─────────────────────────── Sub-Components ─────────────────────────── */

interface ProtocolItemProps {
  step: typeof STEPS[0];
  isActive: boolean;
  progress: number;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
}

function ProtocolItem({ step, isActive, progress, onClick, onHover, onLeave }: ProtocolItemProps) {
  return (
    <GlassPane
      plane={isActive ? 2 : 3}
      noBlur={true}
      padding="0"
      radius={16}
      className={cn(
        "transition-all duration-700 text-left overflow-hidden",
        isActive ? "z-10" : "z-0 opacity-40 hover:opacity-100"
      )}
    >
      <button
        onClick={onClick}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className="relative w-full p-6 text-left"
      >
        <div className="flex items-center gap-6 relative z-10">
          {/* Step Number with Progress Ring */}
          <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle 
                cx="20" cy="20" r="18" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                className="text-white/5"
              />
              {isActive && (
                <motion.circle 
                  cx="20" cy="20" r="18" 
                  fill="none" 
                  stroke="#C9A66B" 
                  strokeWidth="1.5"
                  strokeDasharray="113"
                  strokeDashoffset={113 - (113 * progress) / 100}
                  className="text-prestige"
                />
              )}
            </svg>
            <span className={cn(
              "text-[10px] font-mono transition-colors duration-500",
              isActive ? "text-prestige" : "text-white/20 group-hover:text-white/40"
            )}>
              {step.number}
            </span>
          </div>

          <div className="space-y-1">
            <span className={cn(
              "text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-500",
              isActive ? "text-white" : "text-white/30 group-hover:text-white/60"
            )}>
              {step.name}
            </span>
            {isActive && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-[12px] text-white/40 leading-relaxed max-w-xs"
              >
                {step.title}
              </motion.p>
            )}
          </div>
        </div>
      </button>
    </GlassPane>
  );
}
