'use client';

import React from 'react';
import { InteractiveGlassPane, Meta, Whisper } from '@/components/ui';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface ApproachCard {
    name: string;
    description: string;
}

interface OutcomeMetric {
    value: string;
    label: string;
    detail: string;
}

export interface UseCaseData {
    slug: string;
    filterKey: string;
    industry: string;
    icon: LucideIcon;
    timeframe: string;
    headline: string;
    situation: string;
    approach: ApproachCard[];
    outcomes: OutcomeMetric[];
    quote: string;
    disciplines: string[];
}

interface UseCaseCardProps {
    useCase: UseCaseData;
}



export function UseCaseCard({ useCase }: UseCaseCardProps) {
    const IconComponent = useCase.icon;

    return (
        <article 
            className="group"
        >
            <InteractiveGlassPane
                className={cn(
                    'p-8 md:p-14 relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
                    'bg-white/[0.01] border-white/5',
                    'hover:border-accent-base/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)]'
                )}
            >
                {/* ── HEADER ROW ── */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent-base/5 border border-accent-base/10 flex items-center justify-center group-hover:border-accent-base/30 transition-all duration-500">
                            <IconComponent size={16} className="text-accent-base group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-accent-base/60 uppercase mb-0.5">{useCase.industry}</span>
                            <div className="h-px w-8 bg-accent-base/20" />
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <Whisper text={`CS.REF.${useCase.slug.toUpperCase().slice(0, 4)}`} className="text-[9px] opacity-10 group-hover:opacity-20 transition-opacity hidden md:block" />
                        <span className="text-[11px] font-mono tracking-[0.1em] text-white/20 uppercase bg-white/[0.03] px-3 py-1 rounded-md border border-white/5">
                            {useCase.timeframe}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-32 relative z-10">
                    {/* ── LEFT COLUMN: CONTENT ── */}
                    <motion.div 
                        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-base/30 to-transparent z-20 pointer-events-none"
                        initial={{ top: '-10%' }}
                        whileInView={{ top: '110%' }}
                        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                    />
                    <div className="flex flex-col">
                        <h2 className="text-[32px] md:text-[44px] font-bold leading-[1.05] tracking-tight text-white max-w-[680px] transition-colors duration-500">
                            {useCase.headline}
                        </h2>

                        <div className="mt-14 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent-base" />
                                <Meta className="text-accent-base/60 m-0">THE CHALLENGE</Meta>
                            </div>
                            <p className="text-[18px] md:text-[19px] font-light leading-relaxed text-white/50 max-w-[620px] group-hover:text-white/60 transition-colors duration-500">
                                {useCase.situation}
                            </p>
                        </div>

                        {/* ── APPROACH GRID ── */}
                        <div className="mt-20">
                            <div className="flex items-center justify-between mb-10">
                                <Meta className="text-white/20 m-0">STRATEGIC INFRASTRUCTURE</Meta>
                                <div className="h-px flex-grow mx-8 bg-white/[0.05]" />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {useCase.approach.map((item, idx) => (
                                    <div 
                                        key={item.name}
                                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-base/20 transition-all duration-500 relative group/card"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-base/0 group-hover/card:bg-accent-base/20 transition-all duration-500 rounded-t-2xl" />
                                        <span className="text-[10px] font-mono text-white/10 mb-4 block">PHASE.0{idx + 1}</span>
                                        <h4 className="text-[14px] font-bold text-nearWhite mb-2 tracking-tight">{item.name}</h4>
                                        <p className="text-[13px] leading-relaxed text-white/40 group-hover/card:text-white/60 transition-colors">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN: OUTCOMES ── */}
                    <div className="flex flex-col gap-14 lg:pt-2">
                        <div className="space-y-12">
                            <div className="flex items-center gap-4">
                                <Meta className="text-white/20 m-0 whitespace-nowrap">IMPACT METRICS</Meta>
                                <div className="h-px w-full bg-white/[0.05]" />
                            </div>
                            
                            <div className="flex flex-col gap-12">
                                {useCase.outcomes.map((metric) => (
                                    <div key={metric.label} className="group/metric relative">
                                        <div className="relative inline-block">
                                            <div className="text-[54px] md:text-[64px] font-bold text-white tracking-tighter leading-none mb-2 group-hover/metric:text-accent-base transition-colors duration-700 relative z-10">
                                                {metric.value}
                                            </div>
                                            {/* Number Radiance */}
                                            <div className="absolute inset-0 bg-accent-base/0 group-hover/metric:bg-accent-base/10 blur-3xl rounded-full transition-all duration-1000 scale-0 group-hover/metric:scale-150 -z-10" />
                                        </div>
                                        <div className="text-[14px] font-bold text-white/80 uppercase tracking-[0.2em] mb-1.5 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-accent-base/40" />
                                            {metric.label}
                                        </div>
                                        <div className="text-[12px] text-white/20 uppercase tracking-[0.05em] font-medium pl-3 border-l border-white/[0.05]">
                                            {metric.detail}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── SUCCESS QUOTE ── */}
                        <div className="mt-auto pt-14 border-t border-white/[0.08] relative group/quote">
                            <motion.div 
                                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-base/30 to-transparent z-20 pointer-events-none"
                                initial={{ top: '-10%' }}
                                whileInView={{ top: '110%' }}
                                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                            />
                            <div className="flex gap-6">
                                <div className="text-accent-base/30 text-5xl font-serif italic select-none">&ldquo;</div>
                                <p className="text-[16px] italic text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-700">
                                    {useCase.quote}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── DISCIPLINES TAGS ── */}
                <div className="mt-20 pt-8 border-t border-white/[0.03] flex flex-wrap gap-3 relative z-10">
                    {useCase.disciplines.map((tag) => (
                        <span 
                            key={tag}
                            className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-bold tracking-widest text-white/30 hover:text-accent-base hover:border-accent-base/20 transition-all duration-300 uppercase cursor-default"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Internal Card Atmosphere Overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(201,166,107,0.03)_0%,transparent_70%)]" />
                    <div className="absolute -bottom-[20%] -left-[20%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(201,166,107,0.02)_0%,transparent_70%)]" />
                </div>
            </InteractiveGlassPane>
        </article>
    );
}
