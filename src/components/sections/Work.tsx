// A11y pass applied
'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Container, Meta, Badge, Hairline, Whisper } from '@/components/ui';
import { ScrollReveal, OpticalFocus } from '@/components/motion';
import { EASING } from '@/lib/constants';

const projects = [
    {
        id: "fitness-brand-launch",
        title: "Lifestyle Gym",
        category: "Brand Identity + Web",
        year: "2026",
        tags: ["Brand", "UI/UX", "Development"],
        size: "hero",           // Large featured card
        color: "#0E0C10",
        image: "/selectedwork/gym.jpg",
        description: "A premium fitness platform where luxury meets discipline, designed for high-performance lifestyles.",
    },
    {
        id: "aura-automotive",
        title: "Aura Automotive",
        category: "Product Design + Dev",
        year: "2025",
        tags: ["Automotive", "Digital Strategy"],
        size: "standard",       // Smaller supporting card
        color: "#100E14",
        image: "/selectedwork/car.jpg",
    },
    {
        id: "ellecanta-beauty",
        title: "Ellecanta",
        category: "Brand + Packaging",
        year: "2025",
        tags: ["Beauty", "Identity"],
        size: "standard",
        color: "#0C0A10",
        image: "/selectedwork/skincare.jpg",
    },
    {
        id: "artisan-pizza",
        title: "Artisan Pizza",
        category: "Hospitality & Digital Commerce",
        year: "2025",
        tags: ["Hospitality", "E-Commerce"],
        size: "wide",           // Full-width card
        color: "#0D0908",
        image: "/selectedwork/pizza.jpg",
        description: "A luxury dining experience where traditional craft meets modern digital commerce.",
    },
];

export function Work() {
    return (
        <section id="work" aria-label="Selected Work" className="w-full py-[64px] md:py-[96px]">
            <Container>
                {/* HEADER */}
                <ScrollReveal delay={0}>
                    <header className="flex flex-row items-center justify-between mb-[48px]">
                        <Meta as="h2">Selected Work</Meta>
                        <Meta accent>04 Projects</Meta>
                    </header>
                </ScrollReveal>

                {/* VAULT FRAMING */}
                <ScrollReveal delay={0.1}>
                    <Hairline />
                </ScrollReveal>

                {/* PROJECT GRID */}
                <div className="py-[24px] w-full relative">
                    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[12px]">
                        {projects.map((project, idx) => (
                            <WorkCard key={project.title} project={project} index={idx} />
                        ))}
                    </div>
                    <Whisper 
                        text="ARCHIVE.IDX.2024.2025.A7F3C2E1" 
                        className="absolute bottom-[8px] right-[12px] !text-white/[0.04]" 
                    />
                </div>

                {/* VAULT BOTTOM */}
                <ScrollReveal delay={0.4}>
                    <Hairline />
                    <div className="flex justify-end pt-[16px]">
                        <Meta className="text-white/10">ARCHIVE · 04 PROJECTS</Meta>
                    </div>
                </ScrollReveal>

            </Container>
        </section>
    );
}

function WorkCard({ project, index }: { project: { id: string; title: string; category: string; year: string; tags: string[]; size: string; color: string; image: string; description?: string }; index: number }) {
    const prefersReducedMotion = useReducedMotion();
    
    const isHero = project.size === 'hero';
    const isWide = project.size === 'wide';
    const isStandard = project.size === 'standard';

    const gridClass = {
        hero: "lg:col-span-2 aspect-[4/3] lg:aspect-[3/2]",
        standard: "lg:col-span-1 aspect-[4/3]",
        wide: "lg:col-start-2 lg:col-span-2 aspect-[4/3] lg:aspect-[21/9]"
    }[project.size as "hero" | "standard" | "wide"];

    // Stratification details
    const depthClasses = isHero 
        ? "bg-white/[0.04] border-white/10" 
        : "bg-white/[0.02] border-white/[0.06]";

    const hoverClasses = "group-hover:bg-white/[0.06] group-hover:border-accent-base/12 group-hover:shadow-[0_0_40px_rgba(201,166,107,0.03)] group-hover:z-10";

    // Dynamic delay mapping based on position
    const revealDelay = isHero ? 0 : isWide ? 0.3 : 0.2;

    return (
        <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32, rotateX: 2 }}
            whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: revealDelay, ease: EASING.smoothArray }}
            className={`w-full relative ${gridClass}`}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <Link href={`/work/${project.id}`} className="block h-full w-full">
                <OpticalFocus maxBlur={4} className="h-full w-full">
                    <div
                        data-cursor={`VIEW · ${project.title.toUpperCase()}`}
                        className={`relative w-full h-full overflow-hidden rounded-[16px] group cursor-pointer border-[0.5px] transition-all duration-[800ms] ease-smooth ${depthClasses} ${hoverClasses}`}
                    >
                        {/* ACTUAL IMAGE FILL */}
                        <div
                            className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
                            style={{ backgroundColor: project.color }}
                        >
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover select-none transition-all duration-[1200ms] ease-smooth group-hover:scale-[1.12]"
                            />
                            {/* BRIGHTNESS OVERLAY (Subtle) */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-[1200ms]" />
                        </div>

                        {/* OVERLAY GRADIENT */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-[800ms] ease-smooth group-hover:from-black/90 opacity-90 sm:opacity-80 z-10 pointer-events-none" />

                        {/* BOTTOM CONTENT */}
                        <div className="absolute inset-x-0 bottom-0 p-[24px] sm:p-[32px] flex flex-col z-20 transition-transform duration-[800ms] ease-smooth lg:translate-y-[8px] lg:group-hover:translate-y-0">
                            {/* CONTENT WRAPPER */}
                            <div className="relative">
                                
                                {/* INDEX BEHIND TITLE LAYER */}
                                <div className="absolute top-[2px] left-[-8px] sm:top-[-4px] sm:left-[-12px] pointer-events-none -z-10 select-none">
                                    <span className={`font-sans font-bold leading-none transition-colors duration-[800ms] ease-smooth text-white/[0.08] lg:group-hover:text-white/[0.15] ${isStandard ? 'text-[32px]' : 'text-[48px]'}`}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                <h3 className={`font-sans font-semibold text-white/95 mb-[8px] ${isStandard ? 'text-[20px]' : 'text-[24px] sm:text-[28px]'}`}>
                                    {project.title}
                                </h3>
                                
                                {/* CATEGORY / TAGS ROW */}
                                <div className="flex flex-wrap items-center gap-[8px]">
                                    {(isHero || isWide) ? (
                                        <>
                                            {project.tags.map((tag: string) => (
                                                <Badge key={tag} className="transition-colors duration-[800ms] lg:group-hover:text-accent-base lg:group-hover:bg-accent-dim pointer-events-none">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            <Meta className="text-white/[0.35]">{project.category}</Meta>
                                        </>
                                    )}
                                </div>

                                {/* DESCRIPTION (Large Cards Only) */}
                                {(isHero || isWide) && (
                                    <p className="mt-[16px] font-sans text-[13px] font-normal leading-[1.6] text-white/[0.55] max-w-[420px] line-clamp-2">
                                        {project.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </OpticalFocus>
            </Link>
        </motion.div>
    );
}

