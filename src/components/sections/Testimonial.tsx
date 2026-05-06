'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Meta, GlassPane, SectionAtmosphere } from '@/components/ui';
import { ScrollReveal } from '@/components/motion';
import { cn } from '@/lib/utils';
import { EASING } from '@/lib/constants';

const testimonials = [
    {
        quote: "Imaginta didn't just build our website — they understood our business and designed something that actually moves the needle. Two years in, they're still our first call.",
        name: "Sarah Chen",
        role: "CEO, Lifecycle Health",
        id: "VERDICT_SC_01"
    },
    {
        quote: "The level of craft and attention to detail is rare. Every deliverable feels considered, intentional, and polished far beyond what we expected.",
        name: "Marc Dubois",
        role: "Founder, Kinetic Studios",
        id: "VERDICT_MD_02"
    },
    {
        quote: "Working with Imaginta feels like having a senior design team embedded in your company. They think like owners, not vendors.",
        name: "Aisha Rahman",
        role: "COO, Nexus Ventures",
        id: "VERDICT_AR_03"
    },
];

export function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section aria-label="Client Testimonials" className="relative w-full py-32 md:py-48 overflow-hidden bg-[#030303]">
            {/* ════ BACKGROUND ATMOSPHERE ════ */}
            <div className="absolute inset-0 pointer-events-none">
                <SectionAtmosphere 
                    number="Reviews" 
                    glowColor="rgba(201, 166, 107, 0.01)"
                    glowPosition={{ bottom: '0%', left: '0%' }}
                    glowSize={1000}
                    isHovered={false} 
                />
                {/* Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />
            </div>

            <Container className="relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col items-center text-center mb-20">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-px bg-accent-base/40" />
                            <Meta className="m-0 text-accent-base uppercase tracking-[0.4em] font-bold text-[10px]">CLIENT_VERDICT</Meta>
                            <div className="w-8 h-px bg-accent-base/40" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-none">
                            Trusted by <span className="text-white/20 italic font-serif">the vanguard.</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
                            transition={{ duration: 0.8, ease: EASING.smoothArray }}
                            className="relative"
                        >
                            <GlassPane interactive={true} className="w-full bg-white/[0.01] border-white/[0.05] p-12 md:p-24 rounded-[48px] md:rounded-[64px] overflow-hidden">
                                {/* Technical ID Decor */}
                                <div className="absolute top-12 left-12 flex items-center gap-3">
                                    <span className="text-[10px] font-mono text-white/20 tracking-[0.3em] uppercase">{testimonials[currentIndex].id}</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-base/40" />
                                </div>

                                <div className="flex flex-col items-center text-center">
                                    {/* Quote Icon */}
                                    <div className="mb-12 opacity-10">
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 45H22.5L27.5 35V15H7.5V35H15V45ZM37.5 45H45L50 35V15H30V35H37.5V45Z" fill="white"/>
                                        </svg>
                                    </div>

                                    <p className="text-2xl md:text-4xl font-medium text-white leading-tight tracking-tight mb-16 max-w-3xl">
                                        &ldquo;{testimonials[currentIndex].quote}&rdquo;
                                    </p>

                                    <div className="flex flex-col items-center">
                                        <span className="text-lg font-bold text-white tracking-tight mb-1">
                                            {testimonials[currentIndex].name}
                                        </span>
                                        <Meta className="text-accent-base/60 uppercase tracking-widest text-[11px] font-bold">
                                            {testimonials[currentIndex].role}
                                        </Meta>
                                    </div>
                                </div>

                                {/* Bottom Decor Lines */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-base/20 to-transparent" />
                            </GlassPane>
                        </motion.div>
                    </AnimatePresence>

                    {/* PROGRESS CONTROLS */}
                    <div className="flex justify-center gap-6 mt-16">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className="group relative py-4"
                            >
                                <div className={cn(
                                    "h-[1px] transition-all duration-700",
                                    idx === currentIndex ? "w-16 bg-accent-base" : "w-8 bg-white/10 group-hover:bg-white/20"
                                )} />
                                <span className={cn(
                                    "absolute top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono transition-opacity duration-500",
                                    idx === currentIndex ? "opacity-100 text-accent-base" : "opacity-0"
                                )}>
                                    0{idx + 1}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ════ FOOTER TRANSITION BRIDGE ════ */}
                <div className="mt-24 flex items-center justify-center gap-12 opacity-10">
                    <div className="h-px w-32 bg-white" />
                    <span className="text-[10px] font-mono tracking-[0.5em] uppercase">END_OF_VERDICT_STREAM</span>
                    <div className="h-px w-32 bg-white" />
                </div>
            </Container>
        </section>
    );
}
