// A11y pass applied
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Container, Button, StatusBar, Whisper, StatusDot } from '@/components/ui';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('@/components/motion/HeroAtmosphere').then(mod => mod.ParticleField), { ssr: false });
const SystemScan = dynamic(() => import('@/components/motion/HeroAtmosphere').then(mod => mod.SystemScan), { ssr: false });

const headlines = [
  { main: "We design digital", accent: "precision" },
  { main: "We build brands that", accent: "last" },
  { main: "We craft digital", accent: "experiences" }
];

const trustLines = [
  "Brand · Product · Code — all under one roof",
  "96% client retention over 14-month average engagements",
  "Trusted by startups from Brussels to Berlin"
];

const easing = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<'waiting' | 'entering' | 'done'>('waiting');
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  // Rotating indices
  const [headlineIndex] = useState(0);
  const [trustIndex, setTrustIndex] = useState(0);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // 1. BACKGROUND PARALLAX
  const yPlaneA = useTransform(scrollY, [0, 600], [0, -30]);
  const yPlaneB = useTransform(scrollY, [0, 600], [0, -60]);
  const yPlaneC = useTransform(scrollY, [0, 600], [0, -90]);

  // 4. SIGNAL ARC
  const arcPathRef = useRef<SVGPathElement>(null);
  const [arcLength, setArcLength] = useState(0);
  const yArc = useTransform(scrollY, [0, 500], [0, 500 * 0.08]);
  const arcOpacity = 0.08;


  const scrollCueAlpha = useTransform(scrollY, [0, 120], [1, 0]);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    if (arcPathRef.current) setArcLength(arcPathRef.current.getTotalLength());

    if (prefersReducedMotion) {
      setPhase('done');
      return;
    }

    // Start entering immediately as the preloader will handle the initial cover
    const tStart = setTimeout(() => {
      setPhase('entering');
    }, 0);

    const tDone = setTimeout(() => {
      setPhase('done');
    }, 2000);

    return () => {
      clearTimeout(tStart);
      clearTimeout(tDone);
    };
  }, [prefersReducedMotion]);

  // Rotation intervals
  useEffect(() => {
    if (!mounted || phase !== 'done' || prefersReducedMotion) return;
    
    const trustInterval = setInterval(() => {
      setTrustIndex(prev => (prev + 1) % trustLines.length);
    }, 7000);
    
    return () => clearInterval(trustInterval);
  }, [mounted, phase, prefersReducedMotion]);

  if (!mounted) return null;

  const isFirstVisit = !sessionStorage.getItem('imaginta-hero-played') && !prefersReducedMotion;
  const showSequence = isFirstVisit && phase !== 'done';

  return (
    <section 
      ref={sectionRef}
      aria-label="Hero" 
      className="relative w-full min-h-[75vh] max-h-[87vh] md:min-h-[100svh] md:max-h-none pt-[120px] pb-12 sm:pb-14 md:pb-[72px] lg:pb-24 flex flex-col justify-center bg-transparent overflow-hidden"
    >
      {/* 1. BACKGROUND DEPTH */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* AMBIENT LAYERS */}
        {!prefersReducedMotion && phase === 'done' && (
          <>
            <ParticleField />
            <SystemScan />
          </>
        )}
      </div>

      {/* 4. SIGNAL ARC */}
      {!isMobile && (
        <motion.svg 
          className="absolute inset-0 z-[5] w-full h-full pointer-events-none"
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ y: prefersReducedMotion ? 0 : yArc, opacity: prefersReducedMotion ? 0.08 : arcOpacity }}
        >
          <motion.path 
            ref={arcPathRef}
            d="M 75 8 Q 45 55 18 88"
            stroke="rgba(196, 163, 110, 0.1)" // Prestige hint
            strokeWidth="0.15"
            fill="none"
            initial={{ strokeDasharray: arcLength, strokeDashoffset: arcLength }}
            animate={{ strokeDashoffset: prefersReducedMotion ? 0 : (phase === 'waiting' ? arcLength : 0) }}
            transition={{ duration: 1.2, ease: easing, delay: 0.4 }}
          />
        </motion.svg>
      )}

      {/* WHISPERS */}

      <Container className="relative z-10">
        
        {/* 1. STATUS BAR */}
        <motion.div>
          <AnimatePresence>
            {phase !== 'waiting' && (
              <motion.div
                initial={showSequence ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: showSequence ? 0.45 : 0 }}
                className="w-full"
              >
                <StatusBar />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 2. HEADLINE BLOCK */}
        <motion.div 
          className="mt-[72px] max-w-[900px] ml-[-3px]"
        >
          <h1 className="display-h1 text-[#F5F2ED]">
            {phase !== 'waiting' && (
              <div className="flex flex-wrap">
                {headlines[headlineIndex].main.split(' ').map((word, i) => (
                  <motion.span
                    key={`${headlineIndex}-${i}`}
                    className="inline-block mr-[0.25em]"
                    initial={showSequence ? { opacity: 0, y: 24, filter: 'blur(6px)' } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ 
                      duration: 0.55, 
                      ease: easing, 
                      delay: showSequence ? (0.75 + i * 0.08) : (i * 0.08) 
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.em
                  initial={showSequence ? { opacity: 0, y: 28, filter: 'blur(8px)', scale: 1.015 } : { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  transition={{ 
                    duration: 0.7, 
                    ease: easing, 
                    delay: showSequence ? (0.75 + headlines[headlineIndex].main.split(' ').length * 0.08 + 0.12) : 0.4 
                  }}
                  className="not-italic font-normal italic text-prestige/40 block md:inline"
                >
                  {headlines[headlineIndex].accent}
                </motion.em>
              </div>
            )}
          </h1>
        </motion.div>

        {/* 3. BODY + CTA ROW */}
        <motion.div 
          className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <motion.div
            initial={showSequence ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
            animate={phase !== 'waiting' ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: easing, delay: showSequence ? 1.5 : 0.1 }}
          >
            <p className="body-text">
              A long-term digital partner for startups and SMEs.<br />
              We build brands, shape products, and write code<br />
              — so you can focus on <span className="text-prestige/60">growing</span>.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <motion.div
              initial={showSequence ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
              animate={phase !== 'waiting' ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: easing, delay: showSequence ? 1.85 : 0.2 }}
              className="w-full sm:w-auto"
            >
              <Button 
                variant="prestige" 
                href="#cta" 
                className="w-full h-[52px] group rounded-[50px]"
              >
                Start a Project
              </Button>
            </motion.div>
            <motion.div
              initial={showSequence ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
              animate={phase !== 'waiting' ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: easing, delay: showSequence ? 1.91 : 0.28 }}
              className="w-full sm:w-auto"
            >
              <Button variant="ghost" href="#work" className="w-full h-[52px] hover:border-prestige/20 rounded-[50px]">View Work</Button>
            </motion.div>
          </div>
        </motion.div>



        {/* 5. TRUST LINE */}
        <motion.div 
          className="mt-6 flex items-center justify-center gap-2 text-center"
          initial={showSequence ? { opacity: 0 } : { opacity: 1 }}
          animate={phase !== 'waiting' ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: showSequence ? 2.1 : 0.5 }}
        >
          <div className="flex items-center gap-2">
            <StatusDot status="active" className="w-1 h-1" />
            <AnimatePresence mode="wait">
              <motion.span
                key={trustIndex}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="meta-text"
              >
                {trustLines[trustIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

      </Container>

      {/* SCROLL CUE */}
      {!isMobile && (
        <motion.div 
          style={{ opacity: prefersReducedMotion ? 0.1 : scrollCueAlpha }}
          className="absolute bottom-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[12px] pointer-events-none"
        >
          <motion.div 
            className="w-[1px] h-[20px] bg-prestige/20"
            animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-prestige/20">
            Scroll
          </span>
        </motion.div>
      )}

      <style jsx>{`
        @keyframes heroGlowBreath {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-hero-glow-breath {
          animation: heroGlowBreath 8s ease-in-out infinite;
        }
        @keyframes heroButtonBreath {
          0%, 100% { box-shadow: 0 0 0px rgba(196, 163, 110, 0); }
          50% { box-shadow: 0 0 20px rgba(196, 163, 110, 0.05); }
        }
        .animate-hero-button-breath {
          animation: heroButtonBreath 4s ease-in-out infinite;
        }
        .animate-hero-button-breath:hover {
          animation: none;
        }
      `}</style>
    </section>
  );
}