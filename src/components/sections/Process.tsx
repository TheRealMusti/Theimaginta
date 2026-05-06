'use client';

import React, { useState, useRef } from 'react';
import {
    motion,
    AnimatePresence,
} from 'framer-motion';
import { Container, Meta, InteractiveGlassPane, SectionAtmosphere } from '@/components/ui';
import { ScrollReveal } from '@/components/motion';
import { cn } from '@/lib/utils';
import { EASING } from '@/lib/constants';

/* ─────────────────────────── Phase Data ─────────────────────────── */

interface PhaseData {
    id: string;
    number: string;
    name: string;
    title: string;
    description: string;
    duration: string;
    team: string;
    deliverables: string[];
    technicalId: string;
}

const PHASES: PhaseData[] = [
    {
        id: 'discovery',
        number: '01',
        name: 'Discovery',
        technicalId: 'OP.SYN.DISC',
        title: 'Listen before we design.',
        description:
            'Every project starts with deep-immersion research. We analyze your business, your audience, and the unique competitive landscape to identify the single problem worth solving.',
        duration: '1–2 weeks',
        team: 'Strategist + Lead',
        deliverables: [
            'Research & Insights Report',
            'Competitive Matrix',
            'Success Metric Definition',
            'Stakeholder Alignment',
        ],
    },
    {
        id: 'design',
        number: '02',
        name: 'Design',
        technicalId: 'OP.SYN.VISU',
        title: 'Visualizing authority.',
        description:
            'Strategy becomes tangible. We develop high-fidelity brand identities and interactive prototypes, ensuring every pixel aligns with your market position before development.',
        duration: '2–4 weeks',
        team: 'Lead Designer + Art Director',
        deliverables: [
            'Brand Identity System',
            'High-Fidelity UI Screens',
            'Motion Choreography',
            'Interactive Prototype',
        ],
    },
    {
        id: 'build',
        number: '03',
        name: 'Build',
        technicalId: 'OP.SYN.DEVR',
        title: 'Precision engineering.',
        description:
            'Tight sprint cycles with Friday demos. We build with a focus on performance, accessibility, and architectural cleanlines, delivering working software weekly.',
        duration: '4–12 weeks',
        team: 'Engineer + UI Specialist',
        deliverables: [
            'Performant Frontend Core',
            'Headless CMS Integration',
            'Edge Deployment Config',
            'Quality Assurance Suite',
        ],
    },
    {
        id: 'launch',
        number: '04',
        name: 'Launch',
        technicalId: 'OP.SYN.DPY',
        title: 'Stable deployment.',
        description:
            'We handle the transition—DNS, infrastructure, and real-time monitoring. Post-launch, we remain embedded for continuous performance optimization.',
        duration: '1–2 weeks',
        team: 'Deployment Squad',
        deliverables: [
            'Global Edge Deployment',
            'Infrastructure Monitoring',
            'Analytics Integration',
            'Retainer Roadmap',
        ],
    },
];

/* ─────────────────────────── Main Component ─────────────────────────── */

export function Process() {
    const [activeIdx, setActiveIdx] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    const activePhase = PHASES[activeIdx];

    return (
        <section
            ref={sectionRef}
            id="process"
            className="relative w-full py-32 md:py-48 overflow-hidden bg-[#030303]"
        >
            {/* ════ BACKGROUND ATMOSPHERE ════ */}
            <div className="absolute inset-0 pointer-events-none">
                <SectionAtmosphere 
                    number="Process" 
                    glowColor="rgba(201, 166, 107, 0.015)"
                    glowPosition={{ top: '10%', right: '10%' }}
                    glowSize={1200}
                    isHovered={false} 
                />
                {/* Architectural Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03]" 
                    style={{ 
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <Container className="relative z-10">
                {/* ════ HEADER ════ */}
                <ScrollReveal>
                    <header className="mb-24 md:mb-32">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-accent-base/40" />
                            <Meta className="m-0 text-accent-base uppercase tracking-[0.4em] font-bold text-[10px]">OPERATIONAL_SEQUENCE</Meta>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[1] max-w-3xl">
                            A systematic approach to <br />
                            <span className="text-white/20 font-serif italic text-3xl md:text-5xl">exceptional performance.</span>
                        </h2>
                    </header>
                </ScrollReveal>

                {/* ════ MAIN COMMAND INTERFACE ════ */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    
                    {/* LEFT: PHASE SELECTOR */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {PHASES.map((phase, idx) => (
                            <button
                                 key={phase.id}
                                onClick={() => setActiveIdx(idx)}
                                className={cn(
                                    "group relative text-left p-6 rounded-2xl transition-all duration-700",
                                    activeIdx === idx ? "bg-white/[0.03] border-white/[0.08]" : "hover:bg-white/[0.01] border-transparent"
                                )}
                            >
                                <div className="flex items-center gap-6">
                                    <span className={cn(
                                        "text-[10px] font-mono transition-colors duration-500",
                                        activeIdx === idx ? "text-accent-base" : "text-white/20"
                                    )}>
                                        {phase.number}
                                    </span>
                                    <div className="flex flex-col">
                                        <h3 className={cn(
                                            "text-xl font-bold tracking-tight transition-colors duration-500",
                                            activeIdx === idx ? "text-white" : "text-white/40"
                                        )}>
                                            {phase.name}
                                        </h3>
                                        <span className="text-[9px] font-mono tracking-[0.2em] text-white/10 uppercase mt-1">
                                            {phase.technicalId}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Active Indicator Bar */}
                                {activeIdx === idx && (
                                    <motion.div 
                                        layoutId="activeIndicator"
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-8 bg-accent-base"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* RIGHT: CINEMATIC DETAIL PANEL */}
                    <div className="lg:col-span-8 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIdx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.8, ease: EASING.smoothArray }}
                                className="relative w-full h-full"
                            >
                                <InteractiveGlassPane 
                                    padding="48px" 
                                    radius={40} 
                                    className="bg-white/[0.01] border-white/[0.05] overflow-hidden"
                                >
                                    {/* Blueprint Background Decor */}
                                    <div className="absolute -top-20 -right-20 opacity-[0.02] pointer-events-none">
                                        <div className="w-80 h-80 border border-white rounded-full flex items-center justify-center">
                                            <div className="w-64 h-64 border border-white rounded-full flex items-center justify-center">
                                                <div className="w-48 h-48 border border-white rounded-full" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-3 mb-6">
                                                <span className="px-3 py-1 rounded-full bg-accent-base/10 border border-accent-base/20 text-[10px] font-bold text-accent-base tracking-widest uppercase">
                                                    PHASE_{activePhase.number}
                                                </span>
                                                <div className="h-px flex-1 bg-white/[0.05]" />
                                            </div>

                                            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-8 leading-tight">
                                                {activePhase.title}
                                            </h3>

                                            <p className="text-lg text-white/40 leading-relaxed font-light mb-12">
                                                {activePhase.description}
                                            </p>

                                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/[0.05]">
                                                <TechnicalStat label="EST_DURATION" value={activePhase.duration} />
                                                <TechnicalStat label="TEAM_UNIT" value={activePhase.team} />
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/[0.05] relative overflow-hidden">
                                                {/* Deliverables Header */}
                                                <div className="flex items-center justify-between mb-8">
                                                    <span className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">Deliverables</span>
                                                    <div className="flex gap-1">
                                                        <div className="w-1 h-1 rounded-full bg-emerald-500/40" />
                                                        <div className="w-1 h-1 rounded-full bg-white/10" />
                                                        <div className="w-1 h-1 rounded-full bg-white/10" />
                                                    </div>
                                                </div>

                                                <ul className="space-y-6">
                                                    {activePhase.deliverables.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-4 group/item">
                                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-base group-hover/item:scale-150 transition-transform duration-500 shadow-[0_0_8px_rgba(201,166,107,0.5)]" />
                                                            <span className="text-[15px] text-white/60 font-medium tracking-tight group-hover/item:text-white transition-colors">
                                                                {item}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* System Verification Decor */}
                                                <div className="absolute bottom-6 right-6 flex items-center gap-2 opacity-20">
                                                    <span className="text-[9px] font-mono text-white tracking-widest uppercase">SYSTM_VERIFIED</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </InteractiveGlassPane>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* ════ FOOTER STATUS ════ */}
                <div className="mt-24 pt-12 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-8 opacity-40">
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col">
                            <span className="text-[8px] font-mono tracking-widest uppercase">Synchronicity</span>
                            <span className="text-[10px] font-bold text-white uppercase">99.8% Efficient</span>
                        </div>
                        <div className="w-px h-6 bg-white/[0.1]" />
                        <div className="flex flex-col">
                            <span className="text-[8px] font-mono tracking-widest uppercase">Latency</span>
                            <span className="text-[10px] font-bold text-white uppercase">Zero Tolerance</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <span className="text-[9px] font-mono tracking-[0.4em] uppercase">IMAGINTA_OPERATIONAL_FRAMEWORK</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function TechnicalStat({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col gap-1.5">
            <span className="text-[9px] font-bold tracking-[0.2em] text-white/20 uppercase font-mono">{label}</span>
            <span className="text-[14px] font-bold text-white/70 uppercase tracking-tight">{value}</span>
        </div>
    );
}
