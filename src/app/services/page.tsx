'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Settings, Shield, Zap, Power, Layers, Activity, RefreshCw, Cpu, BrainCircuit, Network, Sparkles, ArrowUpRight } from 'lucide-react';
import { 
    Container, 
    Meta, 
    GlassPane, 
    Badge, 
    Button, 
    Hairline, 
    Whisper, 
    AmbientOrbs, 
    ScrollProgress, 
    GrainOverlay, 
    SectionAtmosphere, 
    InteractiveGlassPane, 
    CountUpNumber 
} from '@/components/ui';
import { ScaleReveal, FadeUp, ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion';
import { EASING } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { CTABand } from '@/components/sections/CTABand';

const NAV_ANCHORS = [
    { id: 'identity-synthesis', number: '01', title: 'Identity Synthesis', tag: 'ENGINE · DNA' },
    { id: 'operational-ux', number: '02', title: 'Operational UX', tag: 'ENGINE · INTERFACE' },
    { id: 'core-engineering', number: '03', title: 'Core Engineering', tag: 'ENGINE · MECHANICS' },
    { id: 'cognitive-intelligence', number: '04', title: 'Cognitive Intel', tag: 'ENGINE · LOGIC' }
];

const FAQ_DATA = [
    { q: "How does the 'Engine' model differ from a traditional agency?", a: "Traditional agencies deliver assets; we deliver operations. Our model attaches to your business as a background engine, managing everything from brand DNA to automated workflows so you can focus on scale." },
    { q: "Is the integration disruptive to our current team?", a: "Zero friction. We deploy as a non-disruptive layer over your existing infrastructure. We don't replace your flow; we optimize and automate it from the inside out." },
    { q: "What does 'fresh, clean, and well-operated' mean in practice?", a: "It means no tech debt, no stale design, and zero operational bottlenecks. We continuously clean your codebase, update your brand touchpoints, and automate repetitive tasks in the background." },
    { q: "Can we attach the model to an existing product?", a: "Absolutely. We specialize in taking over existing ecosystems and 'tuning' them for high-performance output. We improve your current foundations without needing a total teardown." },
    { q: "What is the 'Logic Freshness' metric?", a: "This tracks how current your AI and automation logic is compared to the latest frontier models. We ensure your business never operates on outdated intelligence." },
    { q: "How long does the initial 'Attachment' take?", a: "A standard integration takes approximately 14 days, during which we audit your stack, align our team with your goals, and activate the first phase of the engine." }
];

export default function ServicesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        if (id) {
                            window.history.replaceState(null, '', `/services#${id}`);
                            setActiveSection(id);
                        }
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-20% 0px' } 
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 96;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const activeIndex = NAV_ANCHORS.findIndex(a => a.id === activeSection);
    const progressScale = activeIndex >= 0 ? (activeIndex + 1) / NAV_ANCHORS.length : 0;

    return (
        <main className="w-full min-h-screen bg-[#030303] text-white pt-[72px] relative overflow-hidden">
            <GrainOverlay />
            <ScrollProgress color="rgba(201,166,107,0.6)" />
            <AmbientOrbs orbs={[
                { color: 'rgba(201,166,107,0.02)', size: 600, x: '20%', y: '10%', duration: 28 },
                { color: 'rgba(201,166,107,0.015)', size: 500, x: '70%', y: '70%', duration: 24 }
            ]} />
            
            <ScaleReveal>
                
                {/* Top Wash Glow */}
                <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-0 mix-blend-screen"
                     style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,166,107, 0.03) 0%, transparent 70%)' }} />

                {/* SECTION 1 - ENGINE OVERVIEW */}
                <section className="w-full pt-[120px] pb-[64px] md:pb-[96px] relative">
                    <Container>
                        <FadeUp delay={0.15}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-[8px]">
                                    <Link href="/" className="hover:text-white transition-colors duration-300">
                                        <Meta>IMAGINTA</Meta>
                                    </Link>
                                    <Meta className="text-white/20">/</Meta>
                                    <Meta className="text-white/[0.35]">CAPABILITIES</Meta>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                    <Meta>ENGINE_NOMINAL</Meta>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.3} className="mt-[48px]">
                            <h1 className="font-sans text-[clamp(40px,6.5vw,84px)] font-bold tracking-[-0.04em] leading-[0.95] text-white uppercase">
                                Integrated <br />
                                <span className="font-serif italic text-white/20 lowercase tracking-tight">Capabilities.</span>
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.45} className="mt-[32px] max-w-[640px]">
                            <p className="font-sans text-[18px] md:text-[21px] font-light text-white/40 leading-relaxed">
                                Our disciplines aren’t siloed services—they are the <span className="text-white/80">Core Components</span> of an operational engine designed to keep your business fresh, automated, and operating at peak competitive levels.
                            </p>
                        </FadeUp>
                    </Container>

                    {/* STICKY NAV */}
                    <div className="sticky top-[72px] mt-[64px] z-40 w-full bg-[#030303]/85 backdrop-blur-md pt-[16px] pb-[16px] border-b border-white/[0.04]">
                        <div className="hidden md:block absolute bottom-0 left-[24px] right-[24px] h-[1px] bg-white/[0.04]">
                            <div className="h-full bg-accent-base/[0.2] transition-transform duration-500 ease origin-left" style={{ transform: `scaleX(${progressScale})` }} />
                        </div>

                        <Container className="px-0 md:px-[24px]">
                            <StaggerGroup delay={0.6} className="flex flex-row gap-[12px] min-w-max px-[24px] md:px-0 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-[4px]">
                                {NAV_ANCHORS.map((anchor) => {
                                    const isActive = activeSection === anchor.id;
                                    return (
                                        <StaggerItem key={anchor.id} className="snap-start">
                                            <a
                                                href={`#${anchor.id}`}
                                                onClick={(e) => handleScroll(e, anchor.id)}
                                                data-cursor={anchor.tag}
                                                className="block"
                                            >
                                                <GlassPane 
                                                    padding="12px 24px" 
                                                    radius="50px" 
                                                    className={`group shrink-0 cursor-pointer transition-all duration-500 ease ${isActive ? 'bg-accent-base/10 border-accent-base/20 shadow-[0_0_20px_rgba(201,166,107,0.1)]' : 'bg-white/[0.02] border-white/[0.06] hover:border-accent-base/20'}`}
                                                >
                                                    <div className="flex items-center gap-[8px]">
                                                        <Meta accent={!isActive} className={isActive ? 'text-accent-base' : 'text-white/20'}>{anchor.number}</Meta>
                                                        <span className={`font-sans text-[12px] font-bold tracking-widest uppercase transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                                                            {anchor.title}
                                                        </span>
                                                    </div>
                                                </GlassPane>
                                            </a>
                                        </StaggerItem>
                                    );
                                })}
                            </StaggerGroup>
                        </Container>
                    </div>
                </section>

                {/* SECTION 2 - IDENTITY SYNTHESIS */}
                <section 
                    id="identity-synthesis" 
                    className="w-full py-[80px] md:py-[120px] relative scroll-mt-[96px]"
                >
                    <SectionAtmosphere 
                        number="01"
                        glowColor="rgba(201, 166, 107, 0.04)"
                        glowPosition={{ right: '10%', top: '10%' }}
                        glowSize={800}
                        isHovered={activeSection === 'identity-synthesis'} 
                    />

                    <Container className="relative z-10">
                        <div className="flex flex-col md:grid md:grid-cols-[1.2fr_1fr] gap-[48px] items-start">
                            <FadeUp delay={0.15}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-xl bg-accent-base/5 border border-accent-base/20">
                                        <Layers size={18} className="text-accent-base" />
                                    </div>
                                    <Meta className="text-accent-base/60 uppercase tracking-[0.4em] font-bold text-[10px]">THE_DNA_TIER</Meta>
                                </div>
                                <h2 className="font-sans text-[44px] md:text-[64px] font-bold tracking-tighter text-white leading-none uppercase">
                                    Identity <br />
                                    <span className="text-white/20 font-serif italic lowercase tracking-tight">Synthesis.</span>
                                </h2>
                                <p className="mt-[24px] max-w-[520px] font-sans text-[17px] font-light text-white/40 leading-relaxed">
                                    We synthesize your business DNA into a high-authority brand system. This isn’t just aesthetic—it’s the strategic foundation that encodes your market value into every pixel the engine produces.
                                </p>
                                
                                <div className="mt-12 grid grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Brand Recall Lift</span>
                                        <span className="text-3xl font-bold text-white tracking-tighter"><CountUpNumber value={3.2} decimals={1} />x</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">System Lifespan</span>
                                        <span className="text-3xl font-bold text-white tracking-tighter">8<span className="text-white/20 text-xl font-light">yr+</span></span>
                                    </div>
                                </div>
                            </FadeUp>

                            <ScrollReveal delay={0.3} className="w-full">
                                <InteractiveGlassPane padding="40px" radius={32} className="bg-white/[0.01] border-white/[0.06] hover:bg-white/[0.02]">
                                    <Meta className="mb-8">CORE CAPABILITIES</Meta>
                                    <div className="space-y-6">
                                        {[
                                            { title: "Strategic DNA", desc: "Market positioning and competitive synthesis." },
                                            { title: "Visual Logic", desc: "Cohesive identity systems built for scale." },
                                            { title: "Voice Architecture", desc: "Messaging frameworks that command authority." },
                                            { title: "System Documentation", desc: "Living guidelines for operational consistency." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-6 group/item">
                                                <div className="w-1 h-1 rounded-full bg-accent-base mt-2 group-hover/item:scale-150 transition-transform" />
                                                <div className="flex flex-col">
                                                    <h4 className="text-[14px] font-bold text-white mb-1 uppercase tracking-tight">{item.title}</h4>
                                                    <p className="text-[12px] text-white/30 font-light">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </InteractiveGlassPane>
                            </ScrollReveal>
                        </div>
                    </Container>
                </section>

                {/* SECTION 3 - OPERATIONAL UX */}
                <section 
                    id="operational-ux" 
                    className="w-full py-[80px] md:py-[120px] relative scroll-mt-[96px] bg-white/[0.01]"
                >
                    <SectionAtmosphere 
                        number="02"
                        glowColor="rgba(201, 166, 107, 0.03)"
                        glowPosition={{ left: '5%', bottom: '10%' }}
                        glowSize={700}
                        isHovered={activeSection === 'operational-ux'} 
                    />
                    <div className="absolute top-0 left-0 w-full"><Hairline className="bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" /></div>

                    <Container className="relative z-10">
                        <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_1.2fr] gap-[48px] items-center">
                            <ScrollReveal delay={0.3} className="w-full">
                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        { icon: Shield, title: "Zero Friction", val: "91%", lab: "Usability Score" },
                                        { icon: Activity, title: "High Retention", val: "86+", lab: "Interfaces Shipped" }
                                    ].map((stat, i) => (
                                        <InteractiveGlassPane key={i} padding="32px" radius={24} className="bg-white/[0.02] border-white/[0.06] flex items-center gap-8">
                                            <div className="w-12 h-12 rounded-xl bg-accent-base/5 border border-accent-base/10 flex items-center justify-center">
                                                <stat.icon size={20} className="text-accent-base" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{stat.lab}</span>
                                                <span className="text-3xl font-bold text-white tracking-tighter">{stat.val}</span>
                                            </div>
                                        </InteractiveGlassPane>
                                    ))}
                                </div>
                            </ScrollReveal>

                            <FadeUp delay={0.15}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-xl bg-accent-base/5 border border-accent-base/20">
                                        <Cpu size={18} className="text-accent-base" />
                                    </div>
                                    <Meta className="text-accent-base/60 uppercase tracking-[0.4em] font-bold text-[10px]">THE_INTERFACE_LAYER</Meta>
                                </div>
                                <h2 className="font-sans text-[44px] md:text-[64px] font-bold tracking-tighter text-white leading-none uppercase">
                                    Operational <br />
                                    <span className="text-white/20 font-serif italic lowercase tracking-tight">UX.</span>
                                </h2>
                                <p className="mt-[24px] max-w-[520px] font-sans text-[17px] font-light text-white/40 leading-relaxed">
                                    We design the control layer for your business. Our UX isn’t just about looking clean—it’s about operational efficiency, reducing cognitive load, and ensuring every interaction serves the engine’s primary goals.
                                </p>
                                <div className="mt-10 flex flex-wrap gap-2">
                                    {["User Research", "IA Architecture", "Interface Design", "Design Systems", "Prototyping"].map(tag => (
                                        <Badge key={tag} className="text-[9px] py-1 px-3 bg-white/[0.03] border-white/[0.08]">{tag}</Badge>
                                    ))}
                                </div>
                            </FadeUp>
                        </div>
                    </Container>
                </section>

                {/* SECTION 4 - CORE ENGINEERING */}
                <section 
                    id="core-engineering" 
                    className="w-full py-[80px] md:py-[120px] relative scroll-mt-[96px]"
                >
                    <SectionAtmosphere 
                        number="03"
                        glowColor="rgba(201, 166, 107, 0.05)"
                        glowPosition={{ right: '15%', bottom: '5%' }}
                        glowSize={900}
                        isHovered={activeSection === 'core-engineering'} 
                    />
                    <div className="absolute top-0 left-0 w-full"><Hairline className="bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" /></div>

                    <Container className="relative z-10">
                        <div className="flex flex-col md:grid md:grid-cols-[1.2fr_1fr] gap-[48px] items-start">
                            <FadeUp delay={0.15}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-xl bg-accent-base/5 border border-accent-base/20">
                                        <Settings size={18} className="text-accent-base animate-spin-slow" />
                                    </div>
                                    <Meta className="text-accent-base/60 uppercase tracking-[0.4em] font-bold text-[10px]">THE_MECHANICS_TIER</Meta>
                                </div>
                                <h2 className="font-sans text-[44px] md:text-[64px] font-bold tracking-tighter text-white leading-none uppercase">
                                    Core <br />
                                    <span className="text-white/20 font-serif italic lowercase tracking-tight">Engineering.</span>
                                </h2>
                                <p className="mt-[24px] max-w-[520px] font-sans text-[17px] font-light text-white/40 leading-relaxed">
                                    The mechanics that keep the engine silent and fast. High-performance, technical precision, and zero-debt architectures that ensure your operational foundation is unshakeable.
                                </p>
                                
                                <div className="mt-12 flex items-center gap-10">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase mb-2">Lighthouse Avg</span>
                                        <span className="text-4xl font-bold text-white tracking-tighter">98<span className="text-accent-base text-2xl">+</span></span>
                                    </div>
                                    <div className="w-px h-12 bg-white/5" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase mb-2">Build Velocity</span>
                                        <span className="text-4xl font-bold text-white tracking-tighter">Fast<span className="text-accent-base text-2xl">_</span></span>
                                    </div>
                                </div>
                            </FadeUp>

                            <ScrollReveal delay={0.3} className="w-full">
                                <InteractiveGlassPane padding="40px" radius={32} className="bg-white/[0.01] border-white/[0.06] relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-base/20 to-transparent" />
                                    <Meta className="mb-8">ENGINEERING SPECS</Meta>
                                    <div className="grid grid-cols-1 gap-4">
                                        {[
                                            { t: "Frontend Engineering", d: "Next.js & TypeScript Architecture" },
                                            { t: "Performance Ops", d: "Sub-second load optimization" },
                                            { t: "Infrastructure", d: "Serverless & Edge Compute" },
                                            { t: "CI/CD Protocol", d: "Automated Deployment Pipelines" }
                                        ].map((spec, i) => (
                                            <div key={i} className="p-4 rounded-xl border border-white/[0.03] bg-white/[0.01] group-hover:bg-white/[0.02] transition-colors">
                                                <h5 className="text-[13px] font-bold text-white mb-1 uppercase">{spec.t}</h5>
                                                <p className="text-[11px] text-white/30 font-light">{spec.d}</p>
                                            </div>
                                        ))}
                                    </div>
                                </InteractiveGlassPane>
                            </ScrollReveal>
                        </div>
                    </Container>
                </section>

                {/* SECTION 5 - COGNITIVE INTELLIGENCE */}
                <section 
                    id="cognitive-intelligence" 
                    className="w-full py-[80px] md:py-[120px] relative scroll-mt-[96px] bg-white/[0.01]"
                >
                    <SectionAtmosphere 
                        number="04"
                        glowColor="rgba(201, 166, 107, 0.05)"
                        glowPosition={{ left: '20%', top: '20%' }}
                        glowSize={800}
                        isHovered={activeSection === 'cognitive-intelligence'} 
                    />
                    <div className="absolute top-0 left-0 w-full"><Hairline className="bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" /></div>

                    <Container className="relative z-10">
                        <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_1.2fr] gap-[48px] items-center">
                            <ScrollReveal delay={0.3} className="w-full h-full">
                                <InteractiveGlassPane padding="40px" radius={32} className="h-full border-accent-base/10 bg-accent-base/[0.02] relative flex flex-col justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,166,107,0.05)_0%,transparent_70%)] animate-pulse" />
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <BrainCircuit size={48} className="text-accent-base mb-6" />
                                        <span className="text-[10px] font-mono text-accent-base tracking-[0.4em] uppercase font-bold mb-4">Neural_Logic_Active</span>
                                        <div className="flex items-center gap-8">
                                            <div className="flex flex-col">
                                                <span className="text-4xl font-bold text-white tracking-tighter">64<span className="text-white/20 text-xl">%</span></span>
                                                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Efficiency</span>
                                            </div>
                                            <div className="w-px h-8 bg-white/10" />
                                            <div className="flex flex-col">
                                                <span className="text-4xl font-bold text-white tracking-tighter">99<span className="text-white/20 text-xl">.8%</span></span>
                                                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Accuracy</span>
                                            </div>
                                        </div>
                                    </div>
                                </InteractiveGlassPane>
                            </ScrollReveal>

                            <FadeUp delay={0.15}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-xl bg-accent-base/5 border border-accent-base/20">
                                        <Network size={18} className="text-accent-base" />
                                    </div>
                                    <Meta className="text-accent-base/60 uppercase tracking-[0.4em] font-bold text-[10px]">THE_LOGIC_TIER</Meta>
                                </div>
                                <h2 className="font-sans text-[44px] md:text-[64px] font-bold tracking-tighter text-white leading-none uppercase">
                                    Cognitive <br />
                                    <span className="text-white/20 font-serif italic lowercase tracking-tight">Intelligence.</span>
                                </h2>
                                <p className="mt-[24px] max-w-[520px] font-sans text-[17px] font-light text-white/40 leading-relaxed">
                                    The brain of the engine. We integrate custom AI workflows and neural pipelines that automate repetitive business logic and drive sentient efficiency.
                                </p>
                                <div className="mt-10 space-y-4">
                                    {[
                                        "Custom LLM Agentic Workflows",
                                        "Automated Data Synthesis",
                                        "Semantic Search Architectures",
                                        "Predictive Operational Logic"
                                    ].map(point => (
                                        <div key={point} className="flex items-center gap-4">
                                            <div className="w-1 h-1 rounded-full bg-accent-base" />
                                            <span className="text-[13px] text-white/60 font-light">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </FadeUp>
                        </div>
                    </Container>
                </section>

                {/* SECTION 6 - THE MODEL COMPARISON */}
                <section className="w-full py-[100px] md:py-[160px] relative border-y border-white/[0.04]">
                    <Container>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                            <div className="max-w-xl">
                                <Meta className="mb-6">THE OPERATIONAL DIFFERENCE</Meta>
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-[1.1]">
                                    One Engine. <br />
                                    <span className="text-white/20">Complete Alignment.</span>
                                </h2>
                            </div>
                            <p className="text-white/40 text-[15px] font-light max-w-[320px] leading-relaxed">
                                Traditional agencies create handoffs. We create continuity. One studio, one context, one unshakeable vision.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <GlassPane padding="48px" className="bg-white/[0.01] border-white/[0.04]">
                                <h3 className="text-xl font-bold text-white mb-10 uppercase tracking-tight">The Legacy Model</h3>
                                <div className="space-y-6">
                                    {[
                                        "Fragmented vendors and context loss.",
                                        "High technical debt and stale design.",
                                        "Manual, non-automated workflows.",
                                        "Inconsistent brand and product vision.",
                                        "Slow deployment and reactive support."
                                    ].map((text, i) => (
                                        <div key={i} className="flex gap-4 items-start text-white/20">
                                            <Plus size={16} className="mt-1 rotate-45" />
                                            <span className="text-[15px] font-light">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </GlassPane>

                            <InteractiveGlassPane padding="48px" className="bg-accent-base/[0.02] border-accent-base/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                                <h3 className="text-xl font-bold text-white mb-10 uppercase tracking-tight">The Imaginta Engine</h3>
                                <div className="space-y-6">
                                    {[
                                        "Unified operational intelligence layer.",
                                        "Zero-debt, self-cleaning architectures.",
                                        "Autonomous, AI-driven background ops.",
                                        "Perfectly synthesized brand/UX DNA.",
                                        "Rapid deployment and proactive scaling."
                                    ].map((text, i) => (
                                        <div key={i} className="flex gap-4 items-start text-accent-base">
                                            <Plus size={16} className="mt-1" />
                                            <span className="text-[15px] font-bold text-white/80">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </InteractiveGlassPane>
                        </div>
                    </Container>
                </section>

                {/* SECTION 7 - INTEGRATION TIERS */}
                <section className="w-full py-[100px] md:py-[160px] relative">
                    <Container>
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <Meta className="mb-6">ENGAGEMENT ARCHITECTURE</Meta>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase mb-6">
                                Choose your <br />
                                <span className="text-white/20 font-serif italic lowercase">Integration</span> <span className="text-accent-base/40">Tier.</span>
                            </h2>
                        </div>

                        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { 
                                    tier: "Standard Attachment", 
                                    desc: "Perfect for defined projects and initial engine deployment.",
                                    timeline: "6-12 weeks",
                                    team: "2-3 Specialists",
                                    investment: "EUR 8K+"
                                },
                                { 
                                    tier: "Operational Retainer", 
                                    desc: "Continuous background optimization and feature deployment.",
                                    timeline: "3 months min",
                                    team: "Dedicated Squad",
                                    investment: "EUR 3K/mo",
                                    popular: true
                                },
                                { 
                                    tier: "Deep Integration", 
                                    desc: "We become your external product and brand architecture team.",
                                    timeline: "6+ months",
                                    team: "Full Core Team",
                                    investment: "Custom"
                                }
                            ].map((item, i) => (
                                <StaggerItem key={i} className="h-full">
                                    <InteractiveGlassPane 
                                        padding="40px" 
                                        radius={32} 
                                        className={cn(
                                            "h-full flex flex-col group relative overflow-hidden",
                                            item.popular ? "border-accent-base/20 bg-accent-base/[0.03]" : "border-white/[0.06] bg-white/[0.01]"
                                        )}
                                    >
                                        {item.popular && (
                                            <div className="absolute top-8 right-8">
                                                <Badge className="bg-accent-base/10 text-accent-base border-accent-base/20 animate-pulse">RECOMMENDED</Badge>
                                            </div>
                                        )}
                                        <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">{item.tier}</h3>
                                        <p className="text-[14px] text-white/40 font-light leading-relaxed mb-10 flex-grow">
                                            {item.desc}
                                        </p>
                                        
                                        <div className="space-y-4 mb-10">
                                            <div className="flex justify-between items-center border-b border-white/[0.04] pb-3">
                                                <Meta className="text-[9px]">Timeline</Meta>
                                                <span className="text-[13px] text-white/80 font-bold">{item.timeline}</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-white/[0.04] pb-3">
                                                <Meta className="text-[9px]">Resource</Meta>
                                                <span className="text-[13px] text-white/80 font-bold">{item.team}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <Meta className="text-[9px]">Base Investment</Meta>
                                                <span className="text-[13px] text-accent-base font-bold uppercase tracking-widest">{item.investment}</span>
                                            </div>
                                        </div>

                                        <Button 
                                            variant={item.popular ? "primary" : "ghost"} 
                                            href="/contact"
                                            className="w-full justify-center group/btn"
                                        >
                                            <span className="relative z-10">Activate Tier</span>
                                            <ArrowUpRight size={14} className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </Button>
                                    </InteractiveGlassPane>
                                </StaggerItem>
                            ))}
                        </StaggerGroup>
                    </Container>
                </section>

                {/* SECTION 8 - FAQ */}
                <section className="w-full py-[100px] md:py-[160px] bg-white/[0.01] border-y border-white/[0.02]">
                    <Container>
                        <div className="flex items-center gap-4 mb-16">
                            <div className="w-12 h-px bg-accent-base/40" />
                            <Meta className="text-accent-base/60 uppercase tracking-[0.4em] font-bold text-[10px]">ENGINE_QUERIES</Meta>
                        </div>
                        
                        <div className="flex flex-col max-w-4xl">
                            {FAQ_DATA.map((faq, index) => (
                                <StaggerItem key={index}>
                                    <FAQItem
                                        question={faq.q}
                                        answer={faq.a}
                                        isOpen={openFaq === index}
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    />
                                </StaggerItem>
                            ))}
                        </div>
                    </Container>
                </section>

                <CTABand />

            </ScaleReveal>
        </main>
    );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div 
            className={cn(
                "border-b border-white/5 w-full transition-all duration-500 border-l-[2px] pl-6 md:pl-10 mb-4",
                isOpen ? "border-l-accent-base bg-accent-base/[0.02]" : "border-l-transparent hover:border-l-white/10"
            )} 
        >
            <button 
                onClick={onClick}
                className="w-full py-8 flex items-center justify-between text-left group"
            >
                <span className={cn(
                    "text-[17px] md:text-[20px] font-bold tracking-tight transition-colors duration-300 pr-8",
                    isOpen ? "text-white" : "text-white/40 group-hover:text-white"
                )}>
                    {question}
                </span>
                <div className={cn(
                    "flex-shrink-0 transition-all duration-500",
                    isOpen ? "rotate-45 text-accent-base" : "text-white/20"
                )}>
                    <Plus size={20} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASING.smoothArray }}
                        className="overflow-hidden"
                    >
                        <p className="text-[15px] md:text-[17px] font-light text-white/40 leading-relaxed max-w-3xl pb-10">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
