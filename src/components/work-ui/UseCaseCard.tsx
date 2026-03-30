'use client';

import React from 'react';
import { GlassPane, Meta, Badge } from '@/components/ui';
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
        <article className="group">
            <GlassPane
                className={cn(
                    'p-8 md:p-12 relative overflow-hidden',
                    'bg-white/[0.01] border-white/5',
                    'hover:border-accent-base/20 transition-all duration-700'
                )}
            >
                {/* ── HEADER ROW ── */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent-base/5 border border-accent-base/10 flex items-center justify-center">
                            <IconComponent size={14} className="text-accent-base" />
                        </div>
                        <span className="text-[11px] font-bold tracking-[0.12em] text-accent-base uppercase">{useCase.industry}</span>
                    </div>
                    <span className="text-[11px] font-bold tracking-[0.12em] text-white/20 uppercase">{useCase.timeframe}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-24">
                    {/* ── LEFT COLUMN: CONTENT ── */}
                    <div>
                        <h2 className="text-[28px] md:text-[34px] font-bold leading-[1.15] tracking-tight text-white max-w-[640px]">
                            {useCase.headline}
                        </h2>

                        <div className="mt-12 space-y-6">
                            <Meta className="text-accent-base/60">THE CHALLENGE</Meta>
                            <p className="text-[17px] leading-relaxed text-white/50 max-w-[600px]">
                                {useCase.situation}
                            </p>
                        </div>

                        {/* ── APPROACH GRID ── */}
                        <div className="mt-16">
                            <Meta className="mb-8 text-white/20">OUR STRATEGIC APPROACH</Meta>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {useCase.approach.map((item) => (
                                    <div 
                                        key={item.name}
                                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                                    >
                                        <h4 className="text-[14px] font-bold text-white mb-2">{item.name}</h4>
                                        <p className="text-[13px] leading-relaxed text-white/40">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN: OUTCOMES ── */}
                    <div className="flex flex-col gap-12 lg:pt-4">
                        <div className="space-y-10">
                            <Meta className="text-white/20">KEY OUTCOMES</Meta>
                            <div className="flex flex-col gap-10">
                                {useCase.outcomes.map((metric) => (
                                    <div key={metric.label} className="group/metric">
                                        <div className="text-[42px] font-bold text-white tracking-tighter leading-none mb-1 group-hover/metric:text-accent-base transition-colors duration-500">
                                            {metric.value}
                                        </div>
                                        <div className="text-[14px] font-bold text-white/60 uppercase tracking-widest mb-1">{metric.label}</div>
                                        <div className="text-[12px] text-white/20 uppercase tracking-[0.05em]">{metric.detail}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── SUCCESS QUOTE ── */}
                        <div className="mt-auto pt-12 border-t border-white/5">
                            <div className="flex gap-4">
                                <div className="text-accent-base/40 text-4xl font-serif translate-y-2 opacity-50">&ldquo;</div>
                                <p className="text-[15px] italic text-white/40 leading-relaxed leading-normal">
                                    {useCase.quote}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── DISCIPLINES TAGS ── */}
                <div className="mt-16 flex flex-wrap gap-2">
                    {useCase.disciplines.map((tag) => (
                        <span 
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-bold tracking-widest text-white/30 uppercase"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </GlassPane>
        </article>
    );
}
