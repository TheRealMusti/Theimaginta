'use client';

import React from 'react';
import { 
    Container, 
    Meta, 
    InteractiveGlassPane, 
    SectionAtmosphere 
} from '@/components/ui';
import { ScrollReveal, FadeUp, StaggerGroup, StaggerItem } from '@/components/motion';
import { 
    Target, 
    Zap, 
    ShieldCheck, 
    Globe, 
    ArrowUpRight 
} from 'lucide-react';

const BENEFITS = [
    {
        icon: Target,
        title: "Strategic Clarity",
        description: "We translate complex business goals into intuitive digital roadmaps, ensuring every pixel serves a purpose.",
        label: "STRATEGY"
    },
    {
        icon: Zap,
        title: "Sensory Design",
        description: "High-fidelity interfaces engineered to engage the senses and command premium authority in your market.",
        label: "UX / UI"
    },
    {
        icon: ShieldCheck,
        title: "Technical Excellence",
        description: "Clean, scalable, and AI-ready architectures built to perform under pressure and grow with your vision.",
        label: "ENGINEERING"
    },
    {
        icon: Globe,
        title: "Global Scalability",
        description: "Deploying infrastructure that handles global traffic with sub-second latency and absolute reliability.",
        label: "SCALE"
    }
];

export function About() {
    return (
        <section id="about" className="w-full relative py-24 md:py-40 bg-[#030303] overflow-hidden">
            <SectionAtmosphere 
                number="About" 
                glowColor="rgba(201, 166, 107, 0.01)"
                glowPosition={{ top: '0%', right: '0%' }}
                glowSize={800}
                isHovered={false} 
            />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    
                    {/* LEFT COLUMN: PHILOSOPHY */}
                    <div className="lg:col-span-5 space-y-10">
                        <ScrollReveal>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-px bg-accent-base/40" />
                                <Meta className="m-0 text-accent-base/50 uppercase tracking-[0.3em]">ABOUT</Meta>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05] text-white">
                                Engineering <br />
                                <span className="text-white/30 font-serif italic text-3xl md:text-5xl">Digital Authority.</span>
                            </h2>
                        </ScrollReveal>

                        <FadeUp delay={0.2}>
                            <p className="text-lg font-normal leading-relaxed text-white/40 max-w-md">
                                Imaginta is a high-performance studio for founders who refuse to settle for the average. We bridge the gap between hard engineering and sensory-driven design.
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.3} className="pt-8 border-t border-white/[0.04]">
                            <div className="flex items-start gap-4">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-base/60" />
                                <div>
                                    <h4 className="text-[13px] font-bold tracking-[0.1em] text-white/80 uppercase mb-1">Brussels Born. Global Impact.</h4>
                                    <p className="text-[13px] text-white/30">Serving elite partners across Europe and beyond.</p>
                                </div>
                            </div>
                        </FadeUp>
                    </div>

                    {/* RIGHT COLUMN: BENEFITS GRID */}
                    <div className="lg:col-span-7">
                        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {BENEFITS.map((benefit, idx) => (
                                <StaggerItem key={idx}>
                                    <InteractiveGlassPane
                                        className="h-full group border-white/[0.03] hover:border-white/[0.08] transition-all duration-700 bg-transparent"
                                        padding="32px"
                                        radius={24}
                                    >
                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="mb-8 flex items-center justify-between">
                                                <benefit.icon size={20} className="text-white/20 group-hover:text-accent-base transition-colors duration-500" />
                                                <span className="text-[9px] font-mono tracking-[0.2em] text-white/20 uppercase">{benefit.label}</span>
                                            </div>
                                            
                                            <h3 className="text-xl font-semibold text-white mb-3 tracking-tight transition-colors duration-500">
                                                {benefit.title}
                                            </h3>
                                            
                                            <p className="text-[14px] leading-relaxed text-white/40 group-hover:text-white/60 transition-colors duration-500">
                                                {benefit.description}
                                            </p>
                                            
                                            <ArrowUpRight size={16} className="mt-auto pt-6 text-white/0 group-hover:text-white/20 transition-all duration-500" />
                                        </div>
                                    </InteractiveGlassPane>
                                </StaggerItem>
                            ))}
                        </StaggerGroup>
                    </div>
                </div>
            </Container>

            {/* Horizontal Hairline Decor */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/[0.04]" />
        </section>
    );
}
