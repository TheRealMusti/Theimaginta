'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Container, 
    Meta, 
    InteractiveGlassPane, 
    SectionAtmosphere, 
    GrainOverlay, 
    AmbientOrbs,
    CountUpNumber,
    Button,
    Hairline,
    Whisper
} from '@/components/ui';
import { ScaleReveal, FadeUp, StaggerGroup, StaggerItem, ScrollReveal } from '@/components/motion';
import { 
    BrainCircuit, 
    Cpu, 
    Zap, 
    Network, 
    Shield, 
    ArrowUpRight, 
    Sparkles, 
    Activity, 
    Settings, 
    Layers, 
    Power,
    CheckCircle2,
    RefreshCw
} from 'lucide-react';
import { EASING } from '@/lib/constants';
import { cn } from '@/lib/utils';

const PILLARS = [
    {
        id: "01",
        title: "Autonomous Operational Logic",
        category: "ENGINE",
        description: "A silent background engine that manages, cleans, and optimizes your business workflows with zero manual friction. Always fresh, always operating.",
        icon: BrainCircuit,
        stats: { label: "OPEX REDUCTION", value: "42", unit: "%" }
    },
    {
        id: "02",
        title: "Competitive Intelligence Tier",
        category: "ADVANTAGE",
        description: "Utilizing the latest frontier models to ensure your business logic outpaces competitors. Real-time market adaptation through sentient telemetry.",
        icon: Zap,
        stats: { label: "MARKET EDGE", value: "88", unit: "th" }
    },
    {
        id: "03",
        title: "Plug-and-Play Integration",
        category: "PROTOCOL",
        description: "Not a service, but a work model. Our intelligence layer attaches directly to your existing infrastructure, delivering immediate, above-average growth.",
        icon: Network,
        stats: { label: "DEPLOY TIME", value: "14", unit: "days" }
    }
];

function EngineTelemetry() {
    return (
        <div className="flex flex-wrap gap-8 p-6 md:p-8 rounded-[32px] bg-white/[0.02] border border-white/[0.06] backdrop-blur-3xl relative overflow-hidden group">
            {/* Animated Scanning Line */}
            <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-accent-base/5 to-transparent skew-x-12 pointer-events-none"
            />
            
            <div className="flex items-center gap-4 border-r border-white/5 pr-8">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] animate-pulse" />
                <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest leading-none mb-1">Engine_State</span>
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">Nominal_Active</span>
                </div>
            </div>

            <div className="flex flex-col gap-1 pr-8 border-r border-white/5">
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest leading-none mb-1">Throughput</span>
                <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-white tracking-tighter">
                        <CountUpNumber value={94.2} decimals={1} />
                    </span>
                    <span className="text-[10px] text-white/20 font-light">%</span>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest leading-none mb-1">Latency</span>
                <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-white tracking-tighter">12</span>
                    <span className="text-[10px] text-white/20 font-light">MS</span>
                </div>
            </div>
        </div>
    );
}

function IntelligenceHero() {
    return (
        <section className="relative w-full pt-[160px] pb-[80px] md:pt-[220px] md:pb-[100px] overflow-hidden bg-[#030303]">
            <SectionAtmosphere 
                number="04" 
                glowColor="rgba(201, 166, 107, 0.05)"
                glowPosition={{ top: '5%', right: '5%' }}
                glowSize={1000}
                isHovered={false} 
            />
            
            <Container className="relative z-10">
                <div className="max-w-5xl">
                    <FadeUp delay={0.1}>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 rounded-full border border-accent-base/20 flex items-center justify-center relative overflow-hidden bg-accent-base/5">
                                <Settings size={16} className="text-accent-base animate-spin-slow" />
                            </div>
                            <Meta className="m-0 text-accent-base uppercase tracking-[0.5em] font-bold text-[10px]">Active_Operational_Engine</Meta>
                        </div>
                    </FadeUp>
                    
                    <FadeUp delay={0.2}>
                        <h1 className="text-[clamp(44px,7vw,88px)] font-bold tracking-tighter leading-[0.9] text-white mb-10 uppercase">
                            The Engine of <br />
                            <span className="text-white/20 font-serif italic lowercase tracking-tight">high-fidelity</span> <span className="text-accent-base/40">Growth.</span>
                        </h1>
                    </FadeUp>

                    <div className="flex flex-col lg:flex-row items-start gap-12 mt-4">
                        <FadeUp delay={0.3} className="max-w-2xl">
                            <p className="text-[18px] md:text-[21px] text-white/40 leading-relaxed font-light">
                                Imaginta isn’t just an agency—it’s a <span className="text-white/80 font-medium">Work Model</span>. 
                                We deploy as a background engine that keeps your business fresh, clean, and perfectly operated, utilizing latest intelligence resources to maintain an unassailable market lead.
                            </p>
                            <div className="flex items-center gap-6 mt-10">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]">
                                    <CheckCircle2 size={12} className="text-emerald-500" />
                                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">Always_Fresh</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]">
                                    <CheckCircle2 size={12} className="text-emerald-500" />
                                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">Background_Ops</span>
                                </div>
                            </div>
                        </FadeUp>
                        
                        <FadeUp delay={0.4} className="w-full lg:w-auto">
                            <EngineTelemetry />
                        </FadeUp>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function PillarCard({ pillar, index }: { pillar: typeof PILLARS[0], index: number }) {
    const Icon = pillar.icon;
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <StaggerItem className="h-full">
            <InteractiveGlassPane
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="h-full group border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-700"
                padding="32px"
                radius={24}
            >
                <div className="flex flex-col h-full relative z-10">
                    <div className="flex items-start justify-between mb-10">
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-accent-base/40 transition-all duration-700">
                            <Icon size={20} className="text-white/30 group-hover:text-accent-base transition-all duration-700" />
                        </div>
                        <span className="text-[9px] font-bold text-white/10 uppercase tracking-[0.4em] mt-1 group-hover:text-accent-base/40 transition-colors">{pillar.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight mb-4 group-hover:text-white transition-colors duration-500">
                        {pillar.title}
                    </h3>
                    
                    <p className="text-[14px] text-white/30 leading-relaxed font-light mb-10 group-hover:text-white/50 transition-colors duration-500">
                        {pillar.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-white/[0.04] flex items-end justify-between">
                        <div className="flex flex-col gap-1">
                            <span className="text-[8px] font-bold text-white/10 uppercase tracking-widest">{pillar.stats.label}</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-white tracking-tighter">
                                    <CountUpNumber value={parseFloat(pillar.stats.value)} decimals={pillar.stats.value.includes('.') ? 1 : 0} />
                                </span>
                                <span className="text-sm text-white/20 font-light lowercase">{pillar.stats.unit}</span>
                            </div>
                        </div>
                        
                        <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0 bg-accent-base/10">
                            <ArrowUpRight size={14} className="text-accent-base" />
                        </div>
                    </div>
                </div>
            </InteractiveGlassPane>
        </StaggerItem>
    );
}

function AttachmentProtocol() {
    return (
        <section className="py-32 md:py-48 bg-[#030303] relative overflow-hidden border-y border-white/[0.02]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
                    <ScrollReveal>
                        <Meta className="mb-6">THE ATTACHMENT PROTOCOL</Meta>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[1.05] mb-8 uppercase">
                            Not a service. <br />
                            <span className="text-white/20">A Plug-and-Play</span> <br />
                            <span className="text-accent-base/40">Work Model.</span>
                        </h2>
                        <p className="text-[17px] text-white/40 font-light leading-relaxed mb-10 max-w-lg">
                            We don’t disrupt your flow. We attach to it. Our model acts as a cognitive skin over your business, optimizing every operation from the inside out using frontier intelligence technology.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { label: "Integration", value: "Zero Friction", desc: "Non-disruptive attachment." },
                                { label: "Performance", value: "Tier-1 Logic", desc: "Latest intelligence models." },
                                { label: "Outcome", value: "Above Average", desc: "Beating the market norms." },
                                { label: "Maintenance", value: "Self-Cleaning", desc: "Automated freshness." }
                            ].map((item, i) => (
                                <div key={i} className="p-5 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:border-white/[0.1] transition-all duration-500">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-1 h-1 rounded-full bg-accent-base" />
                                        <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{item.label}</span>
                                    </div>
                                    <h4 className="text-[15px] font-bold text-white mb-1 uppercase">{item.value}</h4>
                                    <p className="text-[11px] text-white/30 font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <div className="relative aspect-square">
                        <ScrollReveal delay={0.2} className="h-full">
                            <div className="relative h-full w-full flex items-center justify-center">
                                {/* Visual Core of the "Engine" */}
                                <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
                                    <div className="absolute inset-0 border border-white/[0.03] rounded-full animate-spin-slow" />
                                    <div className="absolute inset-[15%] border border-accent-base/5 rounded-full animate-reverse-spin" />
                                    
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-accent-base/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
                                            <InteractiveGlassPane radius={100} padding="0" className="w-48 h-48 flex items-center justify-center border-accent-base/20 bg-accent-base/5">
                                                <div className="flex flex-col items-center">
                                                    <Power size={32} className="text-accent-base mb-4 animate-pulse" />
                                                    <span className="text-[10px] font-mono text-accent-base font-bold tracking-[0.4em] uppercase">Attached</span>
                                                </div>
                                            </InteractiveGlassPane>
                                        </div>
                                    </div>

                                    {/* Data Points */}
                                    {[0, 72, 144, 216, 288].map((deg, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-2 h-2 rounded-full bg-white/20"
                                            animate={{ 
                                                scale: [1, 1.5, 1],
                                                opacity: [0.2, 0.8, 0.2]
                                            }}
                                            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                                            style={{
                                                top: '50%',
                                                left: '50%',
                                                transform: `rotate(${deg}deg) translate(180px) rotate(-${deg}deg)`
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default function IntelligencePage() {
    return (
        <main className="w-full min-h-screen bg-[#030303] text-white overflow-hidden">
            <GrainOverlay />
            <Whisper text="NEURAL.CORE — ENGINE_ACTIVE" className="fixed left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left opacity-10 pointer-events-none" />
            
            <IntelligenceHero />

            <section className="py-24 md:py-40 relative">
                <Container>
                    <div className="max-w-3xl mb-24">
                        <ScrollReveal>
                            <Meta className="mb-6">THE WORK MODEL</Meta>
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white leading-none uppercase">
                                Integrated <br />
                                <span className="text-white/20 font-serif italic lowercase text-[0.8em]">Operational</span> <br />
                                <span className="text-accent-base/40">Excellence.</span>
                            </h2>
                        </ScrollReveal>
                    </div>

                    <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PILLARS.map((pillar, idx) => (
                            <PillarCard key={pillar.id} pillar={pillar} index={idx} />
                        ))}
                    </StaggerGroup>
                </Container>
            </section>

            <AttachmentProtocol />

            {/* Live State Section */}
            <section className="py-32 md:py-48 border-t border-white/[0.04] bg-[#030303] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,166,107,0.02)_0%,transparent_70%)] pointer-events-none" />
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                        {[
                            { label: "Operational Health", value: "100", unit: "%", icon: CheckCircle2 },
                            { label: "Logic Freshness", value: "Real-time", unit: "SYNC", icon: RefreshCw },
                            { label: "System Accuracy", value: "99.8", unit: "%", icon: Shield },
                            { label: "Deployment Velocity", value: "Above", unit: "AVG", icon: Sparkles }
                        ].map((metric, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="flex flex-col gap-4 group">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center group-hover:border-accent-base/30 transition-all duration-500">
                                            <metric.icon size={18} className="text-white/20 group-hover:text-accent-base transition-colors" />
                                        </div>
                                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{metric.label}</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-white tracking-tighter">
                                            {isNaN(parseFloat(metric.value)) 
                                                ? metric.value 
                                                : <CountUpNumber value={parseFloat(metric.value)} decimals={metric.value.includes('.') ? 1 : 0} />
                                            }
                                        </span>
                                        <span className="text-xl text-white/20 font-light lowercase">{metric.unit}</span>
                                    </div>
                                    <div className="w-full h-[1px] bg-white/[0.03] relative overflow-hidden mt-4">
                                        <motion.div 
                                            animate={{ left: ['-100%', '100%'] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                                            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-accent-base/20 to-transparent"
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="py-48 relative overflow-hidden">
                <SectionAtmosphere 
                    number="Attach" 
                    glowColor="rgba(201, 166, 107, 0.05)"
                    glowPosition={{ bottom: '0%', left: '50%' }}
                    glowSize={800}
                    isHovered={true} 
                />
                <Container className="text-center relative z-10">
                    <ScaleReveal>
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-12 uppercase">
                            Activate your <br />
                            <span className="font-serif italic text-white/20 lowercase">Intelligence</span> <span className="text-accent-base/40">Engine.</span>
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
                            <Button 
                                href="/contact" 
                                className="px-12 py-6 bg-white text-[#030303] text-[12px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-accent-base hover:text-white transition-all duration-500"
                            >
                                Contact Us
                            </Button>
                            <Button 
                                href="/services" 
                                variant="ghost"
                                className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 hover:text-white"
                            >
                                Explore Capabilities
                            </Button>
                        </div>
                    </ScaleReveal>
                </Container>
            </section>
        </main>
    );
}
