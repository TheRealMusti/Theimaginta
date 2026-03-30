'use client';

import React from 'react';
import { 
    Container, 
    Meta, 
    InteractiveGlassPane, 
    SectionAtmosphere, 
    Badge 
} from '@/components/ui';
import { ScrollReveal, FadeUp, StaggerGroup, StaggerItem } from '@/components/motion';
import { 
    Award, 
    Monitor, 
    Layout, 
    BrainCircuit, 
    ArrowRight,
    Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        id: "01",
        title: "Strategic Brand Identity",
        category: "Creative Strategy",
        description: "Transforming vision into iconic presence through rigorous strategy, distinctive visual systems, and brand storytelling.",
        deliverables: ["Visual Identity Systems", "Brand Positioning", "Typography & Color Architecture", "Visual Guidelines"],
        icon: Award,
        color: "from-amber-500/10 to-transparent",
        glow: "rgba(201, 166, 107, 0.1)"
    },
    {
        id: "02",
        title: "Digital Product Design",
        category: "User Experience",
        description: "Bespoke SaaS platforms and consumer apps designed with operational clarity and built for scalable complexity.",
        deliverables: ["UX/UI Design Systems", "Prototype Engineering", "Cross-platform Experience", "User Research & Audits"],
        icon: Monitor,
        color: "from-blue-500/10 to-transparent",
        glow: "rgba(59, 130, 246, 0.1)"
    },
    {
        id: "03",
        title: "High-Performance Development",
        category: "Engineering",
        description: "Engineering digital experiences that are lightning fast, accessible by default, and technically superior.",
        deliverables: ["Next.js & React Engineering", "Headless CMS Architectures", "Performance Optimization", "Technical Consulting"],
        icon: Layout,
        color: "from-emerald-500/10 to-transparent",
        glow: "rgba(16, 185, 129, 0.1)"
    },
    {
        id: "04",
        title: "Applied Intelligence (AI)",
        category: "Automation",
        description: "Embedding custom AI workflows and LLMs that solve business bottlenecks and drive competitive efficiency.",
        deliverables: ["Custom AI Pipelines", "LLM Fine-tuning", "Intelligent Tooling", "Business Process Automation"],
        icon: BrainCircuit,
        color: "from-purple-500/10 to-transparent",
        glow: "rgba(168, 85, 247, 0.1)"
    }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
    const Icon = service.icon;
    
    return (
        <StaggerItem className="h-full">
            <InteractiveGlassPane
                className="h-full flex flex-col group border-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
                padding="40px"
                radius={24}
                dataCursor="EXPLORE"
            >
                {/* Dynamic Background Glow */}
                <div 
                    className={`absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-1000 pointer-events-none rounded-full`} 
                    aria-hidden="true"
                />
                
                <div className="relative z-10 flex flex-col h-full">
                    {/* Header: Icon & Category */}
                    <div className="flex items-center justify-between mb-10">
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:bg-white/[0.06] group-hover:border-accent-base/30 transition-all duration-500">
                            <Icon size={24} className="text-accent-base/70 group-hover:text-accent-base transition-colors" />
                        </div>
                        <Meta className="m-0 text-white/30 group-hover:text-white/60 transition-colors uppercase tracking-[0.2em]">{service.id}</Meta>
                    </div>

                    {/* Title & Category */}
                    <div className="mb-6">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent-base/60 mb-2 block">
                            {service.category}
                        </span>
                        <h3 className="text-2xl font-semibold text-white tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">
                            {service.title}
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[14px] leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-500 mb-8">
                        {service.description}
                    </p>

                    {/* Deliverables: Reveal on Hover */}
                    <div className="mt-auto space-y-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                        <div className="h-px w-full bg-white/[0.08] mb-4" />
                        <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/30 mb-2 block">Deliverables</span>
                        <div className="grid gap-2">
                            {service.deliverables.slice(0, 3).map((item, i) => (
                                <div key={i} className="flex items-center gap-2 group/item">
                                    <div className="w-1 h-1 rounded-full bg-accent-base/40 group-hover/item:bg-accent-base transition-colors" />
                                    <span className="text-[12px] text-white/50 group-hover/item:text-white/80 transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Interaction Hint */}
                    <div className="absolute bottom-[-10px] right-0 flex items-center gap-2 opacity-0 group-hover:opacity-40 transition-all duration-700 -rotate-90 origin-right translate-y-[-20px] group-hover:translate-y-0">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Full Details</span>
                        <ArrowRight size={10} className="text-white" />
                    </div>
                </div>
            </InteractiveGlassPane>
        </StaggerItem>
    );
}

export function Services() {
    return (
        <section id="services" aria-label="Our Expertise" className="w-full relative py-[120px] md:py-[180px] overflow-hidden">
            {/* Immersive Section Atmosphere */}
            <SectionAtmosphere 
                number="04" 
                glowColor="rgba(201, 166, 107, 0.05)"
                glowPosition={{ top: '20%', right: '10%' }}
                glowSize={800}
                isHovered={false} 
            />

            <Container className="relative z-10">
                {/* SECTION HEADER */}
                <div className="max-w-[700px] mb-20 md:mb-24">
                    <ScrollReveal>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-px bg-accent-base/50" />
                            <Meta className="m-0 text-accent-base/60 uppercase tracking-[0.3em]">Our Expertise</Meta>
                        </div>
                        <h2 className="text-[clamp(32px,5vw,56px)] font-semibold text-white tracking-[-0.04em] leading-[1.1] mb-8">
                            High-fidelity systems for 
                            <span className="block text-white/30">ambitious business outcomes.</span>
                        </h2>
                        
                        <div className="flex flex-wrap gap-3">
                            {["Strategy", "Design", "Code", "Intelligence"].map((tag) => (
                                <Badge key={tag} className="border-white/10 text-white/40 hover:border-accent-base/30 hover:text-white transition-all duration-500">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* SERVICES GRID */}
                <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {services.map((service, idx) => (
                        <ServiceCard key={service.id} service={service} index={idx} />
                    ))}
                </StaggerGroup>

                {/* BOTTOM TRUST STATEMENT */}
                <ScrollReveal delay={0.4} className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/[0.04]">
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-accent-base/10">
                            <Sparkles size={16} className="text-accent-base animate-pulse" />
                        </div>
                        <p className="text-[14px] text-white/50 max-w-[320px]">
                            We don&apos;t just deliver assets. We build the <span className="text-white/80">digital infrastructure</span> for your next level.
                        </p>
                    </div>
                    
                    <motion.div 
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <a 
                            href="/services" 
                            className="text-[12px] font-bold tracking-[0.2em] uppercase text-accent-base hover:text-white transition-colors flex items-center gap-3"
                        >
                            Explore Detailed Capabilities <ArrowRight size={14} />
                        </a>
                    </motion.div>
                </ScrollReveal>
            </Container>
            
            {/* Geometric Accent Decoration */}
            <div className="absolute top-[20%] left-[-5%] w-px h-[400px] bg-gradient-to-b from-transparent via-accent-base/10 to-transparent" />
        </section>
    );
}
