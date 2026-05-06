'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Container, 
    Meta, 
    InteractiveGlassPane, 
    SectionAtmosphere
} from '@/components/ui';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion';
import { 
    Award, 
    Monitor, 
    BrainCircuit, 
    ArrowUpRight,
    Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

const SERVICES = [
    {
        id: "01",
        title: "Strategic Architecture & Identity",
        category: "Creative Strategy",
        description: "Designing the fundamental DNA of brands through rigorous strategy, architectural vision, and iconic visual systems that command market authority.",
        deliverables: ["Visual Identity", "Brand Positioning", "Strategic DNA"],
        icon: Award,
    },
    {
        id: "02",
        title: "Digital Product Engineering",
        category: "User Experience",
        description: "Bespoke digital ecosystems and consumer platforms built with technical precision, operational clarity, and scalable performance architecture.",
        deliverables: ["UI/UX Systems", "React/Next.js", "Performance Ops"],
        icon: Monitor,
    },
    {
        id: "03",
        title: "Applied Intelligence & Automations",
        category: "Automation",
        description: "Embedding custom AI workflows and neural pipelines that solve deep business bottlenecks and drive competitive, sentient efficiency.",
        deliverables: ["AI Pipelines", "LLM Systems", "Workflow Logic"],
        icon: BrainCircuit,
    }
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0], index: number }) {
    const Icon = service.icon;
    const [isHovered, setIsHovered] = React.useState(false);
    
    return (
        <StaggerItem className="h-full">
            <InteractiveGlassPane
                className={cn(
                    "h-full flex flex-col group border-white/[0.04] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white/[0.01]",
                    "hover:bg-white/[0.02] hover:border-accent-base/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                )}
                padding="0"
                radius={32}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative z-10 flex flex-col h-full p-10 md:p-14">
                    {/* ID & Background Watermark */}
                    <div className="absolute top-10 right-10 overflow-hidden pointer-events-none">
                        <span className="text-[64px] font-mono font-bold text-white/[0.02] transition-all duration-1000 group-hover:text-accent-base/[0.05] group-hover:translate-y-[-10px] block leading-none">
                            0{index + 1}
                        </span>
                    </div>

                    {/* Scan Line Effect */}
                    <motion.div 
                        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-base/30 to-transparent z-20 pointer-events-none"
                        initial={{ top: '-10%' }}
                        animate={isHovered ? { top: '110%' } : { top: '-10%' }}
                        transition={{ duration: 2, ease: "linear", repeat: isHovered ? Infinity : 0 }}
                    />

                    {/* Header: Category & Icon */}
                    <div className="flex items-start justify-between mb-16">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent-base shadow-[0_0_8px_rgba(201,166,107,0.8)]" />
                                <Meta className="m-0 text-accent-base/60 uppercase tracking-[0.3em] text-[10px] font-bold">
                                    {service.category}
                                </Meta>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.05] max-w-[280px]">
                                {service.title}
                            </h3>
                        </div>
                        <div className="relative">
                            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-accent-base/40 transition-all duration-700 overflow-hidden">
                                <Icon size={28} className="text-white/40 group-hover:text-accent-base transition-all duration-700 group-hover:scale-110 z-10" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,166,107,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>
                        </div>
                    </div>

                    {/* Description Section with Indented Border */}
                    <div className="mb-14 relative pl-8 border-l border-white/[0.05] group-hover:border-accent-base/20 transition-colors duration-700 flex-grow">
                        <p className="text-[17px] leading-relaxed text-white/40 group-hover:text-white/70 transition-all duration-700 font-light">
                            {service.description}
                        </p>
                    </div>

                    {/* Detailed Deliverables List */}
                    <div className="mt-auto space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">Deliverables</span>
                            <div className="h-px flex-grow bg-gradient-to-r from-white/[0.1] to-transparent" />
                        </div>
                        <div className="flex flex-wrap gap-x-10 gap-y-4">
                            {service.deliverables.map((item, i) => (
                                <div key={i} className="flex flex-col gap-1 group/item">
                                    <span className="text-[12px] font-bold text-white/60 group-hover:text-white transition-colors">
                                        {item}
                                    </span>
                                    <div className="w-0 h-[1px] bg-accent-base/40 transition-all duration-500 group-hover:w-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Footer Reveal Action */}
                    <div className="absolute bottom-10 right-10 flex items-center gap-4 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-smooth">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-accent-base uppercase">Explore Depth</span>
                        <div className="w-12 h-12 rounded-full border border-accent-base/20 flex items-center justify-center bg-accent-base/5 backdrop-blur-md">
                            <ArrowUpRight size={20} className="text-accent-base" />
                        </div>
                    </div>
                </div>
                
                {/* Advanced Atmosphere Layers */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_top_right,rgba(201,166,107,0.04)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_bottom_left,rgba(201,166,107,0.02)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
            </InteractiveGlassPane>
        </StaggerItem>
    );
}

export function Services() {
    return (
        <section id="services" aria-label="Expertise" className="w-full relative py-24 md:py-48 overflow-hidden bg-[#030303]">
            <SectionAtmosphere 
                number="Expertise" 
                glowColor="rgba(201, 166, 107, 0.01)"
                glowPosition={{ top: '0%', right: '0%' }}
                glowSize={1000}
                isHovered={false} 
            />

            <Container className="relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-24 md:mb-40">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-px bg-accent-base/40" />
                            <Meta className="m-0 text-accent-base/60 uppercase tracking-[0.4em] font-bold text-[11px]">THE CORE PILLARS</Meta>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[0.95] mb-10">
                            Engineering the <br />
                            <span className="text-white/20 font-serif italic text-4xl md:text-6xl">Sentient Experience.</span>
                        </h2>
                        <p className="text-[18px] text-white/40 max-w-xl leading-relaxed font-light">
                            We architect high-fidelity digital systems that transcend basic utility, creating emotive connections through technical mastery.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Asymmetric 3-Column Grid */}
                <StaggerGroup className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 min-h-[640px]">
                    {SERVICES.map((service, idx) => (
                        <ServiceCard key={service.id} service={service} index={idx} />
                    ))}
                </StaggerGroup>

                {/* Footer Action */}
                <ScrollReveal delay={0.4} className="mt-24 md:mt-40 border-t border-white/[0.04] pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/[0.02] flex items-center justify-center">
                            <Sparkles size={14} className="text-accent-base/40" />
                        </div>
                        <p className="text-[13px] text-white/40 max-w-[360px]">
                            We don&apos;t just deliver assets. We architect the <span className="text-white/60">digital foundation</span> for your market dominance.
                        </p>
                    </div>
                    
                    <a 
                        href="/services" 
                        className="group flex items-center gap-4 text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 hover:text-white transition-all duration-500"
                    >
                        <span>Full Capabilities Archive</span>
                        <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-all">
                            <ArrowUpRight size={14} />
                        </div>
                    </a>
                </ScrollReveal>
            </Container>
        </section>
    );
}
