'use client';

import React from 'react';
import { Container, Meta, InteractiveGlassPane, CountUpNumber } from '@/components/ui';
import { ScrollReveal, FadeUp } from '@/components/motion';
import { Briefcase, Users, CalendarDays, Zap, TrendingUp, Globe, Award, Sparkles } from 'lucide-react';
import { COLORS, EASING } from '@/lib/constants';

interface Metric {
    label: string;
    subLabel: string;
    value: string;
    numValue: number | null; // null if not a simple countup (e.g. "<2")
    suffix: string;
    icon: React.ElementType;
    color: string;
    description: string;
}

const metrics: Metric[] = [
    { 
        label: "Delivered Excellence", 
        subLabel: "Projects",
        value: "48", 
        numValue: 48,
        suffix: "+", 
        icon: Briefcase, 
        color: "from-amber-500/10 to-transparent",
        description: "Bespoke digital solutions launched globally."
    },
    { 
        label: "Client Loyalty", 
        subLabel: "Retention rate",
        value: "96", 
        numValue: 96,
        suffix: "%", 
        icon: Users, 
        color: "from-blue-500/10 to-transparent",
        description: "Partnerships built on trust and longevity."
    },
    { 
        label: "Market Reach", 
        subLabel: "Countries",
        value: "14", 
        numValue: 14,
        suffix: "", 
        icon: Globe, 
        color: "from-emerald-500/10 to-transparent",
        description: "Extending influence across borders."
    },
    { 
        label: "Record Speed", 
        subLabel: "Response time",
        value: "<2", 
        numValue: null,
        suffix: "hr", 
        icon: Zap, 
        color: "from-purple-500/10 to-transparent",
        description: "Agility at the core of our operations."
    },
];

function MetricCell({ metric, index }: { metric: Metric, index: number }) {
    const Icon = metric.icon;
    
    return (
        <FadeUp delay={0.1 + index * 0.1} className="w-full h-full">
            <InteractiveGlassPane
                className="h-full flex flex-col group border-white/[0.04] hover:border-white/[0.08]"
                padding="40px"
                radius={24}
                dataCursor="EXPLORE"
            >
                {/* Background glow that reacts to group hover */}
                <div 
                    className={`absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-1000 pointer-events-none rounded-full`} 
                />
                
                <div className="flex flex-col h-full relative z-10">
                    {/* Top Row: Icon and Label */}
                    <div className="flex items-start justify-between mb-12">
                        <div className="flex flex-col gap-1">
                            <Meta className="m-0 text-accent-base opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                                {metric.label}
                            </Meta>
                            <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/45 group-hover:text-white/70 transition-colors duration-500">
                                {metric.subLabel}
                            </span>
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-500">
                            <Icon size={18} className="text-white/55 group-hover:text-white transition-all duration-500" />
                        </div>
                    </div>
                    
                    {/* Middle Row: Massive Number */}
                    <div className="flex items-baseline mb-6">
                        <div className="text-[64px] font-semibold tracking-[-0.05em] leading-none text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-white/60 transition-all duration-700">
                            {metric.numValue !== null ? (
                                <CountUpNumber value={metric.numValue} decimals={0} />
                            ) : (
                                metric.value
                            )}
                        </div>
                        <span className="text-[20px] font-medium text-white/45 ml-2 group-hover:text-accent-base/70 transition-colors duration-500">
                            {metric.suffix}
                        </span>
                    </div>

                    {/* Bottom Row: Description */}
                    <p className="mt-auto text-[14px] leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-500 max-w-[200px]">
                        {metric.description}
                    </p>
                    
                    {/* Visual flourish: corner dot */}
                    <div className="absolute bottom-0 right-0 w-1 h-1 rounded-full bg-white/5 group-hover:bg-accent-base/40 transition-colors duration-700" />
                </div>
            </InteractiveGlassPane>
        </FadeUp>
    );
}

export function Metrics() {
    return (
        <section aria-label="Key Performance Metrics" className="w-full relative py-[120px] md:py-[180px] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
            
            <Container className="relative z-10">
                {/* Section Header */}
                <div className="max-w-[700px] mb-20 md:mb-24">
                    <ScrollReveal>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-px bg-accent-base/50" />
                            <Meta className="m-0 text-accent-base/60 uppercase tracking-[0.3em]">Momentum</Meta>
                        </div>
                        <h2 className="text-[clamp(32px,5vw,56px)] font-semibold text-white tracking-[-0.04em] leading-[1.1] mb-8">
                            Quantifiable excellence, 
                            <span className="block text-white/50">unwavering consistency.</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {metrics.map((metric, idx) => (
                        <MetricCell
                            key={metric.label}
                            metric={metric}
                            index={idx}
                        />
                    ))}
                </div>
                
                {/* Bottom decorative line */}
                <ScrollReveal delay={0.4} className="mt-24 md:mt-32">
                    <div className="flex items-center justify-between gap-8 border-t border-white/[0.04] pt-8">
                        <div className="flex items-center gap-6 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 overflow-hidden">
                            {/* Potential trust logos or simple tags */}
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Industry Standard</span>
                            <div className="w-1 h-1 rounded-full bg-white/40" />
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Global Reach</span>
                            <div className="w-1 h-1 rounded-full bg-white/40" />
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Premium Delivery</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2">
                             <Sparkles size={12} className="text-accent-base/40 animate-pulse" />
                             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 italic">Est. 2024</span>
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
            
            {/* Large background decorative text or orb */}
            <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-accent-base/[0.02] blur-[120px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-[10%] -right-[5%] w-[400px] h-[400px] bg-accent-base/[0.015] blur-[100px] rounded-full pointer-events-none -z-10" />
        </section>
    );
}

