'use client';

import React from 'react';
import { 
  Container, 
  Meta, 
  CountUpNumber, 
  GrainOverlay,
  GlassPane
} from '@/components/ui';
import { ScrollReveal, FadeUp } from '@/components/motion';
import { Sparkles, Globe, TrendingUp, Heart } from 'lucide-react';

/* ─────────────────────────── Data ─────────────────────────── */

const IMPACT_METRICS = [
  { 
    id: "01",
    label: "Partnerships", 
    subLabel: "Trusted Collaborations",
    numValue: 120,
    suffix: "+", 
    description: "Building lasting bonds with visionary brands worldwide.",
    icon: Heart,
    plane: 1 as const // Primary Metric
  },
  { 
    id: "02",
    label: "Success Rate", 
    subLabel: "Vision Realized",
    numValue: 98,
    suffix: "%", 
    description: "Consistent delivery of excellence and strategic impact.",
    icon: Sparkles,
    plane: 2 as const
  },
  { 
    id: "03",
    label: "Market Presence", 
    subLabel: "Global Footprint",
    numValue: 14,
    suffix: "k", 
    description: "Reaching audiences across every digital landscape.",
    icon: Globe,
    plane: 2 as const
  },
  { 
    id: "04",
    label: "Average Growth", 
    subLabel: "Brand Acceleration",
    numValue: 40,
    suffix: "%", 
    description: "Driving measurable progress for our creative partners.",
    icon: TrendingUp,
    plane: 2 as const
  }
];

/* ─────────────────────────── Main Section ─────────────────────────── */

export function Metrics() {
  return (
    <section 
      id="metrics" 
      className="relative w-full bg-transparent pt-8 sm:pt-10 md:pt-[56px] lg:pt-20 pb-12 sm:pb-14 md:pb-[72px] lg:pb-24 overflow-hidden"
    >
      <GrainOverlay opacity={0.012} />

      <Container className="relative z-10 w-full">
        {/* Cinematic Header */}
        <div className="mb-12 lg:mb-20">
          <ScrollReveal>
            <div className="mb-4 lg:mb-6">
              <Meta className="meta-text meta-amber">Proven_Success</Meta>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h2 className="section-h2 text-white uppercase">
                  Evidence of <br />
                  <span className="text-prestige/30 font-serif italic lowercase tracking-tight font-normal">Exceptional</span> <span className="text-white/40">Results.</span>
                </h2>
              </div>
              <div className="lg:col-span-4 pb-2">
                <p className="body-text border-l border-white/10 pl-6">
                  Our impact is measured not just in numbers, but in the growth and enduring success of the brands we serve.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Metrics Grid */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {IMPACT_METRICS.map((metric, idx) => (
            <MetricCard key={metric.id} metric={metric} idx={idx} />
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}

/* ─────────────────────────── Components ─────────────────────────── */

function MetricCard({ metric, idx }: { metric: typeof IMPACT_METRICS[0]; idx: number }) {
  const Icon = metric.icon;

  return (
    <FadeUp delay={0.1 + idx * 0.1}>
      <GlassPane 
        plane={metric.plane}
        hover={true}
        radius={24}
        className="group relative flex flex-col h-full"
      >
        {/* Soft Background Identifier */}
        <span className="absolute -top-4 -left-2 text-[60px] lg:text-[80px] font-bold text-white/[0.02] tracking-tighter select-none pointer-events-none group-hover:text-prestige/[0.05] transition-colors duration-1000">
          {metric.id}
        </span>

        <div className="relative p-[24px_20px] md:p-[28px_24px] lg:p-[32px_28px] flex flex-col h-full">
          {/* Icon & Label */}
          <div className="flex items-center gap-3 mb-6">
             <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-prestige/20 group-hover:bg-prestige/5 transition-all duration-700">
                <Icon size={14} className="text-white/20 group-hover:text-prestige transition-colors" />
             </div>
             <div className="flex flex-col">
                <span className="card-h3 text-white/80 uppercase">{metric.label}</span>
                <span className="meta-text !text-[8px] !text-white/20">{metric.subLabel}</span>
             </div>
          </div>

          {/* Large Number */}
          <div className="flex items-baseline mb-6 group-hover:translate-x-2 transition-transform duration-700">
            <h3 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter leading-none">
              <CountUpNumber value={metric.numValue} duration={2.5} />
            </h3>
            <span className="text-xl lg:text-2xl font-medium ml-1 text-prestige/60">
              {metric.suffix}
            </span>
          </div>

          {/* Narrative Description */}
          <div className="mt-auto">
            <p className="card-body group-hover:text-white/60 transition-colors duration-700">
              {metric.description}
            </p>
            <div className="mt-4 h-[1px] w-0 bg-prestige/20 group-hover:w-full transition-all duration-700" />
          </div>
        </div>
      </GlassPane>
    </FadeUp>
  );
}
