'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container, Meta, CountUpNumber, SectionAtmosphere } from '@/components/ui';
import { ScrollReveal, FadeUp } from '@/components/motion';
import { cn } from '@/lib/utils';

/* ─────────────────────────── Data ─────────────────────────── */

const METRICS = [
    { 
        label: "Delivered", 
        subLabel: "Projects",
        value: "48", 
        numValue: 48,
        suffix: "+", 
    },
    { 
        label: "Retention", 
        subLabel: "Client rate",
        value: "96", 
        numValue: 96,
        suffix: "%", 
    },
    { 
        label: "Reach", 
        subLabel: "Countries",
        value: "14", 
        numValue: 14,
        suffix: "", 
    },
    { 
        label: "Velocity", 
        subLabel: "Response time",
        value: "1.5", 
        numValue: 1.5,
        suffix: "hr", 
    },
];

/* ─────────────────────────── Main Section ─────────────────────────── */

export const Metrics = React.memo(function Metrics() {

    return (
        <section aria-label="Key Metrics" className="w-full relative py-32 md:py-48 overflow-hidden bg-[#030303]">
            <SectionAtmosphere 
                number="Metrics" 
                glowColor="rgba(201, 166, 107, 0.01)"
                glowPosition={{ top: '0%', right: '0%' }}
                glowSize={800}
                isHovered={false} 
            />

            <Container className="relative z-10">
                {/* Minimalist Header */}
                <div className="mb-24 md:mb-32">
                    <ScrollReveal>
                        <Meta className="mb-4 text-accent-base/50 tracking-[0.3em]">METRICS</Meta>
                        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight max-w-2xl">
                            Measuring success through <br />
                            <span className="text-white/40">precision and delivery.</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Symmetrical 4-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {METRICS.map((metric, idx) => (
                        <div 
                            key={metric.label}
                            className={cn(
                                "relative px-8 py-12 md:py-16 transition-all duration-700 group",
                                // Vertical line dividers for desktop
                                "border-b border-white/[0.03] sm:border-b-0",
                                idx % 2 !== 0 && "sm:border-l sm:border-white/[0.03]",
                                idx !== 0 && "lg:border-l lg:border-white/[0.03]",
                                "hover:bg-white/[0.01]"
                            )}
                        >
                            {/* Hover Active Line */}
                            <motion.div 
                                className="absolute left-0 top-0 w-[1px] h-0 bg-accent-base/40 group-hover:h-full transition-all duration-700 hidden lg:block"
                            />

                            <FadeUp delay={0.1 + idx * 0.05}>
                                <div className="flex flex-col relative z-10">
                                    {/* Metric ID */}
                                    <span className="text-[9px] font-mono text-white/10 mb-8 tracking-[0.3em] uppercase group-hover:text-accent-base/30 transition-colors">
                                        MT.IDX.0{idx + 1}
                                    </span>

                                    <div className="flex items-baseline mb-6 transition-all duration-700 group-hover:-translate-y-2">
                                        <div className="relative">
                                            <h3 className="text-6xl md:text-8xl font-semibold text-white tracking-tighter leading-none">
                                                {metric.numValue !== null ? (
                                                    <CountUpNumber value={metric.numValue} decimals={metric.numValue % 1 !== 0 ? 1 : 0} />
                                                ) : (
                                                    metric.value
                                                )}
                                            </h3>
                                            {/* Radiance Glow */}
                                            <div className="absolute inset-0 bg-accent-base/0 group-hover:bg-accent-base/10 blur-3xl rounded-full transition-all duration-1000 scale-0 group-hover:scale-100" />
                                        </div>
                                        <span className="text-2xl font-medium text-accent-base/40 ml-2 group-hover:text-accent-base transition-colors duration-500">
                                            {metric.suffix}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-1.5 border-l border-white/[0.06] pl-4 group-hover:border-accent-base/20 transition-colors duration-700">
                                        <span className="text-[13px] font-bold tracking-[0.25em] uppercase text-white/80 group-hover:text-white transition-colors">
                                            {metric.label}
                                        </span>
                                        <span className="text-[11px] font-medium tracking-widest text-white/30 uppercase">
                                            {metric.subLabel}
                                        </span>
                                    </div>
                                </div>
                            </FadeUp>
                        </div>
                    ))}
                </div>

                {/* Subtle Trust Line */}
                <ScrollReveal delay={0.4} className="mt-24 md:mt-40">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/[0.05] pt-12">
                        <p className="text-[11px] font-bold tracking-[0.2em] text-white/20 uppercase">
                            Imaginta Digital Infrastructure &bull; Global Operations &bull; 2026
                        </p>
                        <div className="flex items-center gap-6">
                            <span className="text-[11px] text-white/30 hover:text-white/60 transition-colors cursor-default">Archive.Idx.22</span>
                            <span className="text-[11px] text-white/30 hover:text-white/60 transition-colors cursor-default">Verified Systems</span>
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
});
