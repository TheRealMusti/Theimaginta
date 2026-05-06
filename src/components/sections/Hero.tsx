// A11y pass applied
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Container, Button, StatusBar, Whisper } from '@/components/ui';
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

        const hasPlayed = sessionStorage.getItem('imaginta-hero-played');
        if (hasPlayed) {
            const timer = setTimeout(() => setPhase('done'), 700);
            return () => clearTimeout(timer);
        }

        const t200 = setTimeout(() => {
            setPhase('entering');
        }, 200);

        const t2500 = setTimeout(() => {
            setPhase('done');
            sessionStorage.setItem('imaginta-hero-played', 'true');
        }, 2500);

        return () => {
            clearTimeout(t200);
            clearTimeout(t2500);
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
            className="relative w-full min-h-[100svh] pt-[120px] pb-[64px] md:pb-[96px] flex flex-col justify-center bg-[#030303] overflow-hidden"
        >
            {/* 1. BACKGROUND DEPTH */}
            <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                <motion.div 
                    className="absolute inset-0"
                    style={{ 
                        y: (isMobile || prefersReducedMotion) ? 0 : yPlaneA,
                        background: 'radial-gradient(ellipse 90% 70% at 45% 35%, rgba(201,166,107,0.015), transparent 70%)' 
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: phase === 'waiting' ? 0 : 1,
                        scale: phase === 'done' ? [1, 1.05, 1] : 1,
                    }}
                    transition={{ 
                        opacity: { duration: 1, delay: 0.2 },
                        scale: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                    }}
                />
                <motion.div 
                    className="absolute inset-0"
                    style={{ 
                        y: (isMobile || prefersReducedMotion) ? 0 : yPlaneB,
                        background: 'radial-gradient(circle 350px at 38% 50%, rgba(201,166,107,0.025), transparent 65%)' 
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: phase === 'waiting' ? 0 : 1,
                        scale: phase === 'done' ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ 
                        opacity: { duration: 1, delay: 0.35 },
                        scale: { duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }
                    }}
                />
                <motion.div 
                    className="absolute inset-0"
                    style={{ 
                        y: (isMobile || prefersReducedMotion) ? 0 : yPlaneC,
                        background: 'radial-gradient(circle 200px at 30% 78%, rgba(201,166,107,0.01), transparent 60%)' 
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: phase === 'waiting' ? 0 : 1,
                        scale: phase === 'done' ? [1, 1.08, 1] : 1,
                    }}
                    transition={{ 
                        opacity: { duration: 1, delay: 0.5 },
                        scale: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }
                    }}
                />
                
                {/* AMBIENT LAYERS */}
                {!prefersReducedMotion && phase === 'done' && (
                    <>
                        <ParticleField />
                        <SystemScan />
                    </>
                )}

                <div 
                    className="absolute inset-0"
                    style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 45%, transparent 50%, rgba(6,5,8,0.2) 100%)' }}
                />
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
                        stroke="rgba(201,166,107, 0.08)"
                        strokeWidth="0.15"
                        fill="none"
                        initial={{ strokeDasharray: arcLength, strokeDashoffset: arcLength }}
                        animate={{ strokeDashoffset: prefersReducedMotion ? 0 : (phase === 'waiting' ? arcLength : 0) }}
                        transition={{ duration: 1.2, ease: easing, delay: 0.4 }}
                    />
                </motion.svg>
            )}

            {/* WHISPERS */}
            <Whisper 
                text="IMAGINTA.SYS — V3.0.1 — BRU.CLUSTER" 
                orientation="vertical" 
                animateContent={true} 
                className="hidden xl:block absolute left-[24px] top-1/2 -translate-y-1/2 z-20" 
            />
            <Whisper 
                text="50.8503°N 4.3517°E — STUDIO.PRIMARY" 
                orientation="vertical" 
                animateContent={true} 
                className="hidden xl:block absolute right-[24px] top-1/2 -translate-y-1/2 z-20" 
            />

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
                    <h1 className="font-sans font-bold text-[clamp(44px,7.5vw,88px)] leading-[0.95] tracking-[-0.04em] text-[#F5F2ED]">
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
                                    className="not-italic font-normal italic text-[rgba(245,242,237,0.38)] tracking-[-0.02em] block md:inline"
                                >
                                    {headlines[headlineIndex].accent}
                                </motion.em>
                            </div>
                        )}
                    </h1>
                </motion.div>

                {/* 3. BODY + CTA ROW */}
                <motion.div 
                    className="mt-[48px] flex flex-col md:flex-row md:items-end justify-between gap-[32px]"
                >
                    <motion.div
                        initial={showSequence ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
                        animate={phase !== 'waiting' ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: easing, delay: showSequence ? 1.5 : 0.1 }}
                    >
                        <p className="font-sans text-[17px] font-normal leading-[1.7] text-[rgba(245,242,237,0.72)] max-w-[420px]">
                            A long-term digital partner for startups and SMEs.<br />
                            We build brands, shape products, and write code<br />
                            — so you can focus on growing.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center gap-[12px] w-full md:w-auto">
                        <motion.div
                            initial={showSequence ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
                            animate={phase !== 'waiting' ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: easing, delay: showSequence ? 1.85 : 0.2 }}
                            className="w-full md:w-auto"
                        >
                            <Button 
                                variant="primary" 
                                href="#cta" 
                                className="w-full group"
                            >
                                Start a Project
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={showSequence ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
                            animate={phase !== 'waiting' ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: easing, delay: showSequence ? 1.91 : 0.28 }}
                            className="w-full md:w-auto"
                        >
                            <Button variant="ghost" href="#work" className="w-full">View Work</Button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* 4. ANIMATED DIVIDER */}
                <div className="mt-[64px]">
                    <motion.div
                        className="h-[1px] w-full"
                        style={{
                            background: 'linear-gradient(90deg, transparent, rgba(245,242,237,0.06), rgba(201,166,107,0.08), transparent)',
                        }}
                        initial={prefersReducedMotion ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                        animate={phase !== 'waiting' ? { scaleX: 1, opacity: 1 } : {}}
                        transition={{ duration: 1.2, ease: easing, delay: showSequence ? 2.1 : 0.4 }}
                    />
                </div>

                {/* 5. TRUST LINE */}
                <motion.div 
                    className="mt-[24px] flex items-center justify-center gap-[16px] text-center"
                    initial={showSequence ? { opacity: 0 } : { opacity: 1 }}
                    animate={phase !== 'waiting' ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: showSequence ? 2.1 : 0.5 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={trustIndex}
                            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="font-sans text-[12px] font-light text-[rgba(245,242,237,0.35)] tracking-[0.06em]"
                        >
                            {trustLines[trustIndex]}
                        </motion.span>
                    </AnimatePresence>
                </motion.div>

            </Container>

            {/* SCROLL CUE */}
            {!isMobile && (
                <motion.div 
                    style={{ opacity: prefersReducedMotion ? 0.1 : scrollCueAlpha }}
                    className="absolute bottom-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[12px] pointer-events-none"
                >
                    <motion.div 
                        className="w-[1px] h-[20px] bg-[rgba(201,166,107,0.15)]"
                        animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-[rgba(245,242,237,0.10)]">
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
                    0%, 100% { box-shadow: 0 0 0px rgba(201,166,107, 0); }
                    50% { box-shadow: 0 0 20px rgba(201,166,107, 0.05); }
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