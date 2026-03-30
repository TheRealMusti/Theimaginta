// A11y pass applied
'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Container, Meta, Button, StatusBar, Whisper } from '@/components/ui';
import { ScaleReveal, FadeUp } from '@/components/motion';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { EASING } from '@/lib/constants';

const headlines = [
    ["We design", "digital", "precision"],
    ["We build", "brands", "that last"],
    ["We craft", "digital", "experiences"]
];

const trustLines = [
    "Brand · Product · Code — all under one roof",
    "96% client retention over 14-month average engagements",
    "Trusted by startups from Brussels to Berlin"
];

export function Hero() {
    const [mounted, setMounted] = useState(false);
    const prefersReducedMotion = useReducedMotion();
    
    // Rotating indices
    const [headlineIndex, setHeadlineIndex] = useState(0);
    const [trustIndex, setTrustIndex] = useState(0);
    
    const { scrollY } = useScroll();
    const yHeadline = useTransform(scrollY, [0, 500], [0, 500 * 0.15]);
    const yStatusBar = useTransform(scrollY, [0, 500], [0, 500 * 0.30]);
    const yCTA = useTransform(scrollY, [0, 500], [0, 500 * 0.05]);
    const scrollCueOpacity = useTransform(scrollY, [0, 100], [1, 0]);

    const finalYHeadline = prefersReducedMotion ? 0 : yHeadline;
    const finalYStatusBar = prefersReducedMotion ? 0 : yStatusBar;
    const finalYCTA = prefersReducedMotion ? 0 : yCTA;

    useEffect(() => {
        setMounted(true);
    }, []);

    // Rotation intervals
    useEffect(() => {
        if (!mounted || prefersReducedMotion) return;
        
        const headlineInterval = setInterval(() => {
            setHeadlineIndex(prev => (prev + 1) % headlines.length);
        }, 8000);
        
        const trustInterval = setInterval(() => {
            setTrustIndex(prev => (prev + 1) % trustLines.length);
        }, 5000);
        
        return () => {
            clearInterval(headlineInterval);
            clearInterval(trustInterval);
        };
    }, [mounted, prefersReducedMotion]);

    return (
        <section aria-label="Hero Introduction" className="relative w-full min-h-[100svh] pt-[120px] pb-[64px] md:pb-[96px] flex flex-col justify-center">

            {/* WHISPERS */}
            <Whisper 
                text="IMAGINTA.SYS — V3.0.1 — BRU.CLUSTER" 
                orientation="vertical" 
                animateContent={true} 
                className="hidden xl:block absolute left-[24px] top-1/2 -translate-y-1/2" 
            />
            <Whisper 
                text="50.8503°N 4.3517°E — STUDIO.PRIMARY" 
                orientation="vertical" 
                animateContent={true} 
                className="hidden xl:block absolute right-[24px] top-1/2 -translate-y-1/2" 
            />

            {/* ── SINGLE CLEAN TOP GLOW ── */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                aria-hidden="true"
                style={{
                    background: 'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(201,166,107,0.04) 0%, transparent 70%)',
                }}
            />

            <ScaleReveal delay={0.15} className="relative z-10 w-full mb-[60px]">
                <Container>

                    {/* 1. STATUS BAR */}
                    <motion.div style={{ y: finalYStatusBar, willChange: 'transform' }}>
                        <FadeUp delay={0.25} className="w-full">
                            <StatusBar />
                        </FadeUp>
                    </motion.div>

                    {/* 2. HEADLINE BLOCK */}
                    <motion.div style={{ y: finalYHeadline, willChange: 'transform' }}>
                        <FadeUp delay={0.35} className="mt-[72px] max-w-[900px]">
                            <h1 className="font-sans font-bold text-[clamp(48px,7.5vw,96px)] leading-[1.0] tracking-[-0.04em] text-white">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={headlineIndex}
                                        className="block"
                                        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, filter: 'blur(4px)' }}
                                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                                        exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, filter: 'blur(4px)' }}
                                        transition={{ duration: 0.6, ease: EASING.smoothArray }}
                                    >
                                        {headlines[headlineIndex][0]}<br />
                                        {headlines[headlineIndex][1]}{' '}
                                        <em className="not-italic font-normal hero-gradient-text">
                                            {headlines[headlineIndex][2]}
                                        </em>
                                    </motion.span>
                                </AnimatePresence>
                            </h1>
                        </FadeUp>
                    </motion.div>

                    {/* 3. BODY + CTA ROW */}
                    <motion.div style={{ y: finalYCTA, willChange: 'transform' }}>
                        <FadeUp delay={0.5} className="mt-[48px] flex flex-col md:flex-row md:items-end justify-between gap-[32px]">
                            <p className="font-sans text-[17px] font-normal leading-[1.7] text-white/[0.72] max-w-[420px]">
                                A long-term digital partner for startups and SMEs.<br />
                                We build brands, shape products, and write code<br />
                                — so you can focus on growing.
                            </p>

                            <div className="flex flex-col md:flex-row items-center gap-[12px] w-full md:w-auto">
                                <MagneticButton className="w-full md:w-auto">
                                    <Button variant="primary" href="#cta" className="w-full">Start a Project</Button>
                                </MagneticButton>
                                <MagneticButton className="w-full md:w-auto">
                                    <Button variant="ghost" href="#work" className="w-full">View Work</Button>
                                </MagneticButton>
                            </div>
                        </FadeUp>
                    </motion.div>

                    {/* 4. ANIMATED DIVIDER */}
                    <FadeUp delay={0.75} className="mt-[64px]">
                        <motion.div
                            className="h-[1px] w-full"
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(232,213,181,0.2), rgba(201,166,107,0.2), transparent)',
                                willChange: 'transform, opacity'
                            }}
                            initial={prefersReducedMotion ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 1.2, ease: EASING.smoothArray, delay: prefersReducedMotion ? 0 : 1.0 }}
                        />
                    </FadeUp>

                    {/* 5. TRUST LINE */}
                    <FadeUp delay={0.9} className="mt-[24px] flex items-center justify-center gap-[16px] text-center" aria-hidden="true">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={trustIndex}
                                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="font-sans text-[12px] font-light text-white/[0.3] tracking-[0.06em]"
                            >
                                {trustLines[trustIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </FadeUp>

                </Container>
            </ScaleReveal>

            {/* SCROLL CUE */}
            <motion.div 
                style={{ opacity: scrollCueOpacity }}
                className="absolute bottom-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[12px] pointer-events-none"
            >
                <motion.div 
                    className="w-[1px] h-[24px] bg-accent-base"
                    animate={prefersReducedMotion ? { opacity: 0.2 } : { 
                        opacity: [0.1, 0.2, 0.1],
                        y: [0, 4, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <Meta className="text-white/30 text-[10px] uppercase tracking-widest font-semibold tracking-[0.15em]">Scroll to explore</Meta>
            </motion.div>
        </section>
    );
}