'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { 
    motion, 
    useScroll, 
    useTransform, 
    useSpring,
    useReducedMotion
} from 'framer-motion';
import { Meta, SectionAtmosphere, HydrationSafe } from '@/components/ui';
import { ScrollReveal } from '@/components/motion';
import Image from 'next/image';
import { EASING } from '@/lib/constants';

interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    index: string;
    image: string;
    description: string;
    color: string;
}

const PROJECTS: Project[] = [
    {
        id: "lifestyle-gym",
        title: "Lifestyle Gym",
        category: "Brand Identity + Web",
        year: "2026",
        index: "01",
        image: "/selectedwork/gym.jpg",
        description: "A premium fitness platform where luxury meets discipline, designed for high-performance lifestyles.",
        color: "rgba(201, 166, 107, 0.15)"
    },
    {
        id: "aura-automotive",
        title: "Aura Automotive",
        category: "Product Design + Dev",
        year: "2025",
        index: "02",
        image: "/selectedwork/car.jpg",
        description: "Next-generation interface for electric mobility systems.",
        color: "rgba(255, 255, 255, 0.1)"
    },
    {
        id: "ellecanta-beauty",
        title: "Ellecanta",
        category: "Brand + Packaging",
        year: "2025",
        index: "03",
        image: "/selectedwork/skincare.jpg",
        description: "High-end skincare branding with a focus on sustainable luxury.",
        color: "rgba(201, 166, 107, 0.12)"
    },
    {
        id: "artisan-pizza",
        title: "Artisan Pizza",
        category: "Digital Commerce",
        year: "2025",
        index: "04",
        image: "/selectedwork/pizza.jpg",
        description: "A luxury dining experience where traditional craft meets modern digital commerce.",
        color: "rgba(255, 255, 255, 0.08)"
    },
];

// Double projects for the infinite feel (but we'll start at exactly index 0)
const INFINITE_PROJECTS = [...PROJECTS, ...PROJECTS];

/* ─────────────────────────── Main Component ─────────────────────────── */

export function Work() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"] // Precise mapping
    });

    // We shift the starting position to ensure the first project is DEAD CENTER on entry
    // Each project is 90vw + gap. We start at 0%.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const springX = useSpring(x, { stiffness: 80, damping: 25, restDelta: 0.001 });

    const reduced = useReducedMotion();

    return (
        <section 
            ref={targetRef}
            id="work" 
            aria-label="Selected Work" 
            className="relative h-[500vh] bg-[#030303]"
        >
            {/* ════ BACKGROUND ATMOSPHERE ════ */}
            <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <SectionAtmosphere 
                        number="Work" 
                        glowColor="rgba(201, 166, 107, 0.02)"
                        glowPosition={{ top: '20%', left: '30%' }}
                        glowSize={1400}
                        isHovered={false} 
                    />
                    {/* Architectural Grid Bridge */}
                    <div className="absolute inset-0 opacity-[0.02]" 
                        style={{ 
                            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                            backgroundSize: '80px 80px'
                        }}
                    />
                </div>

                {/* ════ HEADER (Floating) ════ */}
                <div className="absolute top-12 left-12 md:top-16 md:left-16 z-30 pointer-events-none">
                    <ScrollReveal>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-px bg-accent-base/40" />
                                <Meta className="m-0 text-accent-base uppercase tracking-[0.4em] font-bold text-[10px]">SELECTED_BENCHMARKS</Meta>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white/40">
                                Traverse the <span className="text-white">Archive.</span>
                            </h2>
                        </div>
                    </ScrollReveal>
                </div>

                {/* ════ SHOWCASE ENGINE (Full Bleed) ════ */}
                <HydrationSafe fallback={<div className="flex h-full items-center px-[5vw] gap-[5vw] opacity-0" />}>
                    <motion.div 
                        style={{ x: reduced ? "0%" : springX }}
                        className="flex h-full items-center pl-[5vw] pr-[5vw] gap-[5vw]"
                    >
                        {INFINITE_PROJECTS.map((project, idx) => (
                            <WorkItem key={`${project.id}-${idx}`} project={project} index={idx} />
                        ))}
                    </motion.div>
                </HydrationSafe>

                {/* ════ NAVIGATION OVERLAY ════ */}
                <div className="absolute bottom-16 left-16 right-16 flex items-end justify-between pointer-events-none z-30">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Traverse Progress</span>
                            <div className="w-48 h-px bg-white/[0.05] relative overflow-hidden">
                                <motion.div 
                                    style={{ scaleX: scrollYProgress }}
                                    className="absolute inset-0 bg-accent-base origin-left"
                                />
                            </div>
                        </div>
                        <span className="text-[9px] font-mono text-white/10 uppercase tracking-[0.4em]">IMAGINTA_CORE_PROTOCOL_v4.2</span>
                    </div>
                    
                    <div className="hidden lg:flex flex-col items-end gap-2">
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Live Monitoring</span>
                        <div className="flex items-center gap-3 bg-white/[0.03] px-4 py-2 rounded-full border border-white/[0.05]">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[11px] font-mono text-white/60">SYSTEM_NOMINAL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────── WorkItem Component ─────────────────────────── */

function WorkItem({ project }: { project: Project; index: number }) {
    const itemRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            ref={itemRef}
            className="flex-shrink-0 w-[90vw] md:w-[85vw] lg:w-[80vw] h-[70vh] md:h-[75vh] group/item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={`/work/${project.id}`} className="block relative h-full">
                {/* ════ PROJECT CONTAINER ════ */}
                <div className="relative w-full h-full rounded-[40px] md:rounded-[60px] overflow-hidden bg-white/[0.01] border border-white/[0.06] group-hover/item:border-accent-base/40 transition-all duration-1000">
                    
                    {/* Parallax Image Layer */}
                    <motion.div 
                        className="absolute inset-0"
                        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                        transition={{ duration: 1.5, ease: EASING.smoothArray }}
                    >
                        <Image 
                            src={project.image} 
                            alt={project.title}
                            fill
                            className="object-cover opacity-50 group-hover/item:opacity-80 transition-all duration-1000 grayscale-[0.5] group-hover/item:grayscale-0"
                        />
                    </motion.div>
                    
                    {/* Atmospheric Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/40 opacity-90 group-hover/item:opacity-60 transition-opacity duration-1000" />
                    
                    <div 
                        className="absolute inset-0 opacity-0 group-hover/item:opacity-30 transition-opacity duration-1000 mix-blend-screen"
                        style={{ 
                            background: `radial-gradient(circle at center, ${project.color}, transparent 70%)`
                        }}
                    />

                    {/* Metadata: Top Left (Blueprint IDX) */}
                    <div className="absolute top-12 left-12 z-20">
                        <div className="flex flex-col gap-1">
                            <span className="text-[11px] font-bold tracking-[0.4em] text-accent-base uppercase font-mono">ARCHIVE_IDX_{project.index}</span>
                            <div className="w-full h-px bg-accent-base/30 mt-1" />
                        </div>
                    </div>

                    {/* Metadata: Top Right (Technical Specs) */}
                    <div className="absolute top-12 right-12 z-20 hidden md:flex items-center gap-10 opacity-40 group-hover/item:opacity-100 transition-opacity duration-700">
                        <div className="flex flex-col items-end">
                            <span className="text-[9px] font-mono text-white/50 uppercase tracking-widest">Released</span>
                            <span className="text-[12px] font-bold text-white uppercase">{project.year}</span>
                        </div>
                        <div className="w-px h-6 bg-white/10" />
                        <div className="flex flex-col items-end">
                            <span className="text-[9px] font-mono text-white/50 uppercase tracking-widest">Authority</span>
                            <span className="text-[12px] font-bold text-white uppercase">TOP_TIER</span>
                        </div>
                    </div>

                    {/* Content Layer (Bottom) */}
                    <div className="absolute bottom-12 left-12 right-12 md:bottom-20 md:left-20 md:right-20 z-20">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-[10px] font-bold tracking-[0.4em] text-accent-base/80 uppercase">{project.category}</span>
                                <div className="h-px w-12 bg-accent-base/20" />
                            </div>
                            
                            <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 group-hover/item:text-accent-base transition-colors duration-1000 leading-[0.9]">
                                {project.title}
                            </h3>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="hidden lg:block"
                            >
                                <p className="text-xl text-white/40 leading-relaxed font-light mb-10 max-w-2xl">
                                    {project.description}
                                </p>
                                
                                <div className="flex items-center gap-8">
                                    <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                                        <span className="text-[11px] font-bold tracking-widest text-white/60 uppercase">Explore Case Study</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">System Ready</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Corner Framing Decor */}
                    <div className="absolute inset-10 pointer-events-none opacity-10 group-hover/item:opacity-30 transition-opacity duration-1000">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white" />
                    </div>
                </div>
            </Link>
        </div>
    );
}
