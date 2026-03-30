'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Container, Meta, GlassPane, Badge, Button, Hairline, Whisper, AmbientOrbs, ScrollProgress, GrainOverlay, SectionAtmosphere, InteractiveGlassPane, CountUpNumber } from '@/components/ui';
import { ScaleReveal, FadeUp, ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion';
import { CTABand } from '@/components/sections/CTABand';

const NAV_ANCHORS = [
    { id: 'brand-identity', number: '01', title: 'Brand Identity', tag: 'JUMP · BRAND IDENTITY' },
    { id: 'product-design', number: '02', title: 'Product Design', tag: 'JUMP · PRODUCT DESIGN' },
    { id: 'development', number: '03', title: 'Development', tag: 'JUMP · DEVELOPMENT' },
    { id: 'ai-integration', number: '04', title: 'AI Integration', tag: 'JUMP · AI INTEGRATION' }
];

const FAQ_DATA = [
    { q: "What size companies do you work with?", a: "Mostly startups and SMEs — teams of 5 to 200. We're built for companies that need a full digital team but aren't ready to hire five specialists in-house." },
    { q: "Do you work with clients outside Belgium?", a: "Absolutely. We've partnered with teams in Germany, the Netherlands, the UK, and the Middle East. All communication is in English, and we're flexible with time zones." },
    { q: "How involved do we need to be during a project?", a: "We ask for 2–3 hours a week for feedback and decisions. We handle everything else — research, design, development, testing. You stay informed without being overwhelmed." },
    { q: "Can you work with our existing brand or codebase?", a: "Yes. Not every project starts from zero. We regularly pick up existing design systems, codebases, and brand guidelines — and improve them without starting over." },
    { q: "What happens after launch?", a: "We don't disappear. Most of our clients stay on a light retainer for ongoing improvements, bug fixes, and new features. We're a long-term partner, not a one-time vendor." },
    { q: "What's your tech stack?", a: "Next.js, React, TypeScript, Tailwind CSS, and Framer Motion on the frontend. Supabase or custom backends. Vercel for deployment. We pick tools based on the project, not habit." }
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
        <main className="w-full min-h-screen bg-[#060508] text-white pt-[72px] relative overflow-hidden">
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

                {/* SECTION 1 - PAGE HEADER */}
                <section className="w-full pt-[120px] pb-[64px] md:pb-[96px] relative">
                    <Container>
                        {/* Row 1 — Breadcrumb */}
                        <FadeUp delay={0.15}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-[8px]">
                                    <Link href="/" className="hover:text-white transition-colors duration-300">
                                        <Meta>IMAGINTA</Meta>
                                    </Link>
                                    <Meta className="text-white/20">/</Meta>
                                    <Meta className="text-white/[0.35]">SERVICES</Meta>
                                </div>
                                <Meta>04 DISCIPLINES</Meta>
                            </div>
                        </FadeUp>

                        {/* Row 2 — Page headline */}
                        <FadeUp delay={0.3} className="mt-[48px]">
                            <h1 className="font-sans text-[clamp(40px,6vw,72px)] font-bold tracking-[-0.04em] leading-[1.05] text-white">
                                Four disciplines.<br />
                                <span className="font-normal italic text-white/[0.50]">Zero handoffs.</span>
                            </h1>
                        </FadeUp>

                        {/* Row 3 — Page description */}
                        <FadeUp delay={0.45} className="mt-[28px] max-w-[560px]">
                            <p className="font-sans text-[17px] font-normal text-white/[0.72] leading-[1.7]">
                                Every project moves through the same studio — from first brand sketch to final deployment. No outsourcing. No handoffs. No context lost between disciplines.
                            </p>
                        </FadeUp>
                    </Container>

                    {/* Row 4 — Quick nav anchors (STICKY) */}
                    <div className="sticky top-[72px] mt-[48px] z-40 w-full bg-[#060508]/85 backdrop-blur-md pt-[16px] pb-[16px] border-b border-white/[0.04]">
                        {/* desktop progress line */}
                        <div className="hidden md:block absolute bottom-0 left-[24px] right-[24px] h-[1px] bg-white/[0.04]">
                            <div className="h-full bg-accent-base/[0.15] transition-transform duration-500 ease origin-left" style={{ transform: `scaleX(${progressScale})` }} />
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
                                                    padding="10px 20px" 
                                                    radius="50px" 
                                                    className={`group shrink-0 cursor-pointer transition-all duration-500 ease ${isActive ? 'bg-[#C9A66B]/[0.06] border-[#C9A66B]/[0.15] shadow-[0_0_20px_rgba(201,166,107,0.06)]' : 'hover:border-accent-base/12'}`}
                                                >
                                                    <div className="flex items-center gap-[6px]">
                                                        <Meta accent={!isActive} className={isActive ? 'text-[#C9A66B]' : ''}>{anchor.number}</Meta>
                                                        <span className={`font-sans text-[13px] font-normal transition-colors duration-500 ${isActive ? 'text-[#F5F2ED]' : 'text-white/[0.55] group-hover:text-white'}`}>
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

                <Whisper text="INDEX.SERVICES — 04.ACTIVE" className="absolute left-[24px] !text-white/[0.04] hidden xl:block" />

                {/* SECTION 2 - BRAND IDENTITY */}
                <section 
                    id="brand-identity" 
                    className="w-full py-[64px] md:py-[96px] relative scroll-mt-[96px]"
                    onMouseEnter={() => setActiveSection('brand-identity')} // Just using activeSection for hover as well to keep state clean, actually wait, the activeSection is tied to scroll. Let use setHoveredSection.
                >
                    <SectionAtmosphere 
                        number="01"
                        glowColor="rgba(201, 166, 107, 0.035)"
                        glowPosition={{ right: '30%', top: '20%' }}
                        glowSize={700}
                        isHovered={activeSection === 'brand-identity'} // Using observer active state as the hover/active state to simplify logic and ensure mobile works too!
                    />

                    <Container className="relative z-10">
                        {/* ROW A — Service header */}
                        <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1fr] gap-[32px] md:gap-[48px]">
                            {/* Left column */}
                            <FadeUp delay={0.15}>
                                <Meta className="text-white/[0.30]">01</Meta>
                                <h2 className="mt-[12px] font-sans text-[48px] font-bold tracking-[-0.03em] text-white">
                                    Brand Identity
                                </h2>
                                <p className="mt-[20px] max-w-[480px] font-sans text-[16px] font-normal text-white/[0.72] leading-[1.7]">
                                    We don&apos;t design logos. We build identity systems — the strategic foundation that makes every future design decision faster, sharper, and unmistakably yours.
                                </p>
                            </FadeUp>

                            {/* Right column */}
                            <ScrollReveal delay={0.25} className="flex md:justify-end md:text-right">
                                <GlassPane padding="32px" className="w-full max-w-[320px] flex flex-col gap-[24px] bg-[#C9A66B]/[0.02] border-[#C9A66B]/[0.06] shadow-[inset_0_1px_0_rgba(201,166,107,0.06)]">
                                    <div className="flex flex-col gap-[8px]">
                                        <Meta className="text-white/[0.30]">Brand Audits Completed</Meta>
                                        <span className="font-sans text-[28px] font-semibold text-white">
                                            <CountUpNumber value={32} /><span className="text-white/[0.35]">+</span>
                                        </span>
                                    </div>
                                    <Hairline className="bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.06),transparent)]" />
                                    <div className="flex flex-col gap-[8px]">
                                        <Meta className="text-white/[0.30]">Avg. Identity Lifespan</Meta>
                                        <span className="font-sans text-[28px] font-semibold text-white">
                                            <CountUpNumber value={8} /><span className="text-white/[0.35]"> yr</span>
                                        </span>
                                    </div>
                                    <Hairline className="bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.06),transparent)]" />
                                    <div className="flex flex-col gap-[8px]">
                                        <Meta className="text-white/[0.30]">Client Brand Recall Lift</Meta>
                                        <span className="font-sans text-[28px] font-semibold text-white">
                                            <CountUpNumber value={3.2} decimals={1} /><span className="text-white/[0.35]">×</span>
                                        </span>
                                    </div>
                                </GlassPane>
                            </ScrollReveal>
                        </div>

                        {/* ROW B — Capabilities grid */}
                        <div className="mt-[56px]">
                            <FadeUp delay={0.3}>
                                <Meta className="mb-[24px]">WHAT WE DELIVER</Meta>
                            </FadeUp>
                            
                            <StaggerGroup delay={0.4} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[12px]">
                                {[
                                    { title: "Brand Strategy", desc: "Market positioning, competitive landscape analysis, and the strategic narrative that guides every visual decision." },
                                    { title: "Visual Identity", desc: "Logo systems, color palettes, typography selections, and the rules that keep them consistent at every scale." },
                                    { title: "Brand Guidelines", desc: "Comprehensive documentation that empowers your team to use the identity correctly — without needing us on speed dial." },
                                    { title: "Naming & Voice", desc: "Brand naming, tone of voice definition, and messaging frameworks that sound like you, not like marketing." },
                                    { title: "Collateral Design", desc: "Business cards, presentations, social templates — the touchpoints that make first impressions permanent." },
                                    { title: "Brand Rollout", desc: "We don't hand over files and disappear. We help you launch the identity across every channel." }
                                ].map((item, i) => (
                                        <StaggerItem key={i} rotateX>
                                            <InteractiveGlassPane 
                                                padding="32px 28px" 
                                                radius={16}
                                                dataCursor={`CAPABILITY · ${item.title.toUpperCase()}`}
                                                className="h-full border-white/[0.06] hover:border-[#C9A66B]/[0.12] hover:shadow-[0_0_30px_rgba(201,166,107,0.03)]"
                                            >
                                                <h3 className="font-sans text-[16px] font-medium text-white mb-[12px] group-hover:text-[#E8D5B5] transition-colors duration-300">
                                                    {item.title}
                                                </h3>
                                                <p className="font-sans text-[13px] font-normal text-white/[0.50] leading-[1.6] group-hover:text-white/[0.72] transition-colors duration-300">
                                                    {item.desc}
                                                </p>
                                            </InteractiveGlassPane>
                                        </StaggerItem>
                                ))}
                            </StaggerGroup>
                        </div>

                        {/* ROW C — Tools strip */}
                        <FadeUp delay={0.6} className="mt-[40px] flex flex-row flex-wrap gap-[8px]">
                            {["Figma", "Miro", "Research Sprints", "Competitor Audits", "Stakeholder Workshops"].map(tool => (
                                <Badge key={tool}>{tool}</Badge>
                            ))}
                        </FadeUp>
                    </Container>
                    <Whisper text="MODULE.01" orientation="vertical" className="absolute right-0 top-[100px] !text-white/[0.04] hidden xl:block" />
                </section>

                {/* SECTION 3 - PRODUCT DESIGN */}
                <section 
                    id="product-design" 
                    className="w-full py-[64px] md:py-[96px] relative scroll-mt-[96px]"
                    onMouseEnter={() => setActiveSection('product-design')}
                >
                    <SectionAtmosphere 
                        number="02"
                        glowColor="rgba(232, 213, 181, 0.025)"
                        glowPosition={{ left: '25%', top: '15%' }}
                        glowSize={600}
                        isHovered={activeSection === 'product-design'}
                    />

                    <div className="absolute top-0 left-0 w-full"><Hairline className="bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.08),transparent)]" /></div>
                    
                    <Container className="relative z-10">
                        {/* ROW A — Service header REVERSED */}
                        <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_1.5fr] gap-[32px] md:gap-[48px]">
                            {/* Left column */}
                            <ScrollReveal delay={0.25} className="flex">
                                <GlassPane padding="32px" className="w-full max-w-[320px] flex flex-col gap-[24px] bg-[#C9A66B]/[0.02] border-[#C9A66B]/[0.06] shadow-[inset_0_1px_0_rgba(201,166,107,0.06)]">
                                    <div className="flex flex-col gap-[8px]">
                                        <Meta className="text-white/[0.30]">Interfaces Shipped</Meta>
                                        <span className="font-sans text-[28px] font-semibold text-white">
                                            <CountUpNumber value={86} /><span className="text-white/[0.35]">+</span>
                                        </span>
                                    </div>
                                    <Hairline className="bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.06),transparent)]" />
                                    <div className="flex flex-col gap-[8px]">
                                        <Meta className="text-white/[0.30]">Avg. Usability Score</Meta>
                                        <span className="font-sans text-[28px] font-semibold text-white">
                                            <CountUpNumber value={91} />
                                        </span>
                                    </div>
                                    <Hairline className="bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.06),transparent)]" />
                                    <div className="flex flex-col gap-[8px]">
                                        <Meta className="text-white/[0.30]">Screens Per Project</Meta>
                                        <span className="font-sans text-[28px] font-semibold text-white">40–120</span>
                                    </div>
                                </GlassPane>
                            </ScrollReveal>

                            {/* Right column */}
                            <FadeUp delay={0.15}>
                                <Meta className="text-white/[0.30]">02</Meta>
                                <h2 className="mt-[12px] font-sans text-[48px] font-bold tracking-[-0.03em] text-white">
                                    Product Design
                               </h2>
                                <p className="mt-[20px] max-w-[480px] font-sans text-[16px] font-normal text-white/[0.72] leading-[1.7]">
                                    We design interfaces for people — not personas on a slide deck. Every screen is validated, every interaction is intentional, every pixel answers to a real user need.
                                </p>
                            </FadeUp>
                        </div>

                        {/* ROW B — Capabilities grid */}
                        <div className="mt-[56px]">
                            <FadeUp delay={0.3}>
                                <Meta className="mb-[24px]">WHAT WE DELIVER</Meta>
                            </FadeUp>
                            
                            <StaggerGroup delay={0.4} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[12px]">
                                {[
                                    { title: "UX Research", desc: "User interviews, usability testing, journey mapping — we find the friction before your users do." },
                                    { title: "Information Architecture", desc: "Sitemaps, user flows, and content structures that make complex products feel simple." },
                                    { title: "Interface Design", desc: "High-fidelity screens crafted for clarity. Every component, every state, every edge case — designed." },
                                    { title: "Design Systems", desc: "Reusable component libraries with documentation — your engineering team's best friend." },
                                    { title: "Prototyping", desc: "Interactive prototypes that look and feel like the real thing. Test before you build." },
                                    { title: "Handoff & QA", desc: "Developer-ready specs, redlines, and asset exports. We review every build until it matches the design." }
                                ].map((item, i) => (
                                    <StaggerItem key={i} rotateX>
                                        <InteractiveGlassPane 
                                            padding="32px 28px" 
                                            radius={16}
                                            dataCursor={`CAPABILITY · ${item.title.toUpperCase()}`}
                                            className="h-full border-white/[0.06] hover:border-[#C9A66B]/[0.12] hover:shadow-[0_0_30px_rgba(201,166,107,0.03)]"
                                        >
                                            <h3 className="font-sans text-[16px] font-medium text-white mb-[12px] group-hover:text-[#E8D5B5] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="font-sans text-[13px] font-normal text-white/[0.50] leading-[1.6] group-hover:text-white/[0.72] transition-colors duration-300">
                                                {item.desc}
                                            </p>
                                        </InteractiveGlassPane>
                                    </StaggerItem>
                                ))}
                            </StaggerGroup>
                        </div>

                        {/* ROW C — Tools strip */}
                        <FadeUp delay={0.6} className="mt-[40px] flex flex-row flex-wrap gap-[8px]">
                            {["Figma", "Framer", "Maze", "Hotjar", "Design Tokens", "Storybook"].map(tool => (
                                <Badge key={tool}>{tool}</Badge>
                            ))}
                        </FadeUp>
                    </Container>
                    <Whisper text="MODULE.02" orientation="vertical" className="absolute right-0 top-[100px] !text-white/[0.04] hidden xl:block" />
                </section>

                {/* SECTION 4 - DEVELOPMENT */}
                <section 
                    id="development" 
                    className="w-full py-[64px] md:py-[96px] relative scroll-mt-[96px]"
                    onMouseEnter={() => setActiveSection('development')}
                >
                    <SectionAtmosphere 
                        number="03"
                        glowColor="rgba(201, 166, 107, 0.02)"
                        glowPosition={{ left: '80%', top: '50%' }}
                        glowSize={500}
                        isHovered={activeSection === 'development'}
                    />
                    <div className="absolute top-0 left-0 w-full"><Hairline className="bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.08),transparent)]" /></div>
                    <Container className="relative z-10">
                        {/* ROW A — Service header */}
                        <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1fr] gap-[48px]">
                            {/* Left column */}
                            <FadeUp delay={0.15}>
                                <Meta className="text-white/[0.30]">03</Meta>
                                <h2 className="mt-[12px] font-sans text-[48px] font-bold tracking-[-0.03em] text-white">
                                    Development
                                </h2>
                                <p className="mt-[20px] max-w-[480px] font-sans text-[16px] font-normal text-white/[0.72] leading-[1.7]">
                                    We write code with the same precision we bring to design. Performant, accessible, maintainable — built to grow with your business, not against it.
                                </p>
                            </FadeUp>

                            {/* Right column */}
                            <ScrollReveal delay={0.25} className="flex md:justify-end md:text-right">
                                <GlassPane padding="32px" className="w-full max-w-[320px] flex flex-col gap-[24px] bg-[#C9A66B]/[0.02] border-[#C9A66B]/[0.06] shadow-[inset_0_1px_0_rgba(201,166,107,0.06)]">
                                    <div className="flex flex-col gap-[8px]">
                                        <Meta className="text-white/[0.30]">Lighthouse Avg.</Meta>
                                        <span className="font-sans text-[28px] font-semibold text-white">
                                            <CountUpNumber value={96} />
                                        </span>
                                    </div>
                                    <Hairline className="bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.06),transparent)]" />
                                    <div className="flex flex-col gap-[8px]">
                                        <Meta className="text-white/[0.30]">Core Web Vitals Pass</Meta>
                                        <span className="font-sans text-[28px] font-semibold text-white">
                                            <CountUpNumber value={100} /><span className="text-white/[0.35]">%</span>
                                        </span>
                                    </div>
                                    <Hairline className="bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.06),transparent)]" />
                                    <div className="flex flex-col gap-[8px]">
                                        <Meta className="text-white/[0.30]">Tech Debt Ratio</Meta>
                                        <span className="font-sans text-[28px] font-semibold text-white">
                                            <span className="text-white/[0.35]">&lt;</span><CountUpNumber value={4} /><span className="text-white/[0.35]">%</span>
                                        </span>
                                    </div>
                                </GlassPane>
                            </ScrollReveal>
                        </div>

                        {/* ROW B — Capabilities grid */}
                        <div className="mt-[56px]">
                            <FadeUp delay={0.3}>
                                <Meta className="mb-[24px]">WHAT WE BUILD</Meta>
                            </FadeUp>
                            
                            <StaggerGroup delay={0.4} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[12px]">
                                {[
                                    { title: "Frontend Engineering", desc: "React, Next.js, TypeScript — component-driven architectures that scale from MVP to enterprise." },
                                    { title: "Performance", desc: "Sub-second loads, optimized bundles, and Core Web Vitals that keep you at the top of search results." },
                                    { title: "CMS Integration", desc: "Headless WordPress, Sanity, Contentful — your team edits content without touching code." },
                                    { title: "Responsive & Adaptive", desc: "Every breakpoint considered. Every device tested. Mobile-first is the baseline, not the aspiration." },
                                    { title: "API & Backend", desc: "REST and GraphQL integrations, serverless functions, and the backend logic your frontend needs." },
                                    { title: "CI/CD & DevOps", desc: "Automated deployments, staging environments, monitoring. We ship with confidence." }
                                ].map((item, i) => (
                                    <StaggerItem key={i} rotateX>
                                        <InteractiveGlassPane 
                                            padding="32px 28px" 
                                            radius={16}
                                            dataCursor={`CAPABILITY · ${item.title.toUpperCase()}`}
                                            className="h-full border-white/[0.06] hover:border-[#C9A66B]/[0.12] hover:shadow-[0_0_30px_rgba(201,166,107,0.03)]"
                                        >
                                            <h3 className="font-sans text-[16px] font-medium text-white mb-[12px] group-hover:text-[#E8D5B5] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="font-sans text-[13px] font-normal text-white/[0.50] leading-[1.6] group-hover:text-white/[0.72] transition-colors duration-300">
                                                {item.desc}
                                            </p>
                                        </InteractiveGlassPane>
                                    </StaggerItem>
                                ))}
                            </StaggerGroup>
                        </div>

                        {/* ROW C — Tools strip */}
                        <FadeUp delay={0.6} className="mt-[40px] flex flex-row flex-wrap gap-[8px]">
                            {["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Supabase", "Node.js"].map(tool => (
                                <Badge key={tool}>{tool}</Badge>
                            ))}
                        </FadeUp>
                    </Container>
                    <Whisper text="MODULE.03" orientation="vertical" className="absolute right-0 top-[100px] !text-white/[0.04] hidden xl:block" />
                </section>

                {/* SECTION 5 - AI INTEGRATION */}
                <section 
                    id="ai-integration" 
                    className="w-full py-[64px] md:py-[96px] relative scroll-mt-[96px]"
                    onMouseEnter={() => setActiveSection('ai-integration')}
                >
                    <SectionAtmosphere 
                        number="04"
                        glowColor="rgba(201, 166, 107, 0.03)"
                        glowPosition={{ left: '15%', top: '60%' }}
                        glowSize={550}
                        isHovered={activeSection === 'ai-integration'}
                    />
                    <div className="absolute top-0 left-0 w-full"><Hairline className="bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.08),transparent)]" /></div>
                    <Container className="relative z-10">
                        {/* ROW A — Service header REVERSED */}
                        <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_1.5fr] gap-[48px]">
                            {/* Left column */}
                            <ScrollReveal delay={0.25} className="flex">
                                <GlassPane padding="32px" className="w-full max-w-[320px] flex flex-col gap-[24px] bg-[#C9A66B]/[0.02] border-[#C9A66B]/[0.06] shadow-[inset_0_1px_0_rgba(201,166,107,0.06)]">
                                    <div className="flex flex-col gap-[8px]">
                                        <Meta className="text-white/[0.30]">AI Tools Built</Meta>
                                        <span className="font-sans text-[28px] font-semibold text-white">
                                            <CountUpNumber value={12} /><span className="text-white/[0.35]">+</span>
                                        </span>
                                    </div>
                                    <Hairline className="bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.06),transparent)]" />
                                    <div className="flex flex-col gap-[8px]">
                                        <Meta className="text-white/[0.30]">Avg. Time Saved</Meta>
                                        <span className="font-sans text-[28px] font-semibold text-white">
                                            <CountUpNumber value={60} /><span className="text-white/[0.35]">%</span>
                                        </span>
                                    </div>
                                    <Hairline className="bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.06),transparent)]" />
                                    <div className="flex flex-col gap-[8px]">
                                        <Meta className="text-white/[0.30]">Models Integrated</Meta>
                                        <span className="font-sans text-[28px] font-semibold text-white">
                                            <CountUpNumber value={8} />
                                        </span>
                                    </div>
                                </GlassPane>
                            </ScrollReveal>

                            {/* Right column */}
                            <FadeUp delay={0.15}>
                                <Meta className="text-white/[0.30]">04</Meta>
                                <h2 className="mt-[12px] font-sans text-[48px] font-bold tracking-[-0.03em] text-white">
                                    AI Integration
                                </h2>
                                <p className="mt-[20px] max-w-[480px] font-sans text-[16px] font-normal text-white/[0.72] leading-[1.7]">
                                    We don&apos;t bolt AI onto your product as a feature. We weave it into the workflow until it disappears — until your team forgets it wasn&apos;t always there.
                                </p>
                            </FadeUp>
                        </div>

                        {/* ROW B — Capabilities grid */}
                        <div className="mt-[56px]">
                            <FadeUp delay={0.3}>
                                <Meta className="mb-[24px]">WHAT WE INTEGRATE</Meta>
                            </FadeUp>
                            
                            <StaggerGroup delay={0.4} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[12px]">
                                {[
                                    { title: "Custom AI Tooling", desc: "Purpose-built tools powered by LLMs — content generation, data processing, intelligent search — tailored to your domain." },
                                    { title: "Workflow Automation", desc: "Identify the repetitive tasks draining your team. Automate them with AI agents that work reliably at scale." },
                                    { title: "Prompt Engineering", desc: "Systematic prompt design, evaluation pipelines, and optimization — not guesswork, engineering." },
                                    { title: "AI-Augmented Design", desc: "Using generative AI to accelerate design exploration, asset creation, and content production." },
                                    { title: "Data & Analytics", desc: "AI-powered insights from your existing data. Pattern detection, forecasting, and actionable dashboards." },
                                    { title: "Integration & Training", desc: "We embed AI into your existing stack and train your team to use it. No vendor lock-in." }
                                ].map((item, i) => (
                                    <StaggerItem key={i} rotateX>
                                        <InteractiveGlassPane 
                                            padding="32px 28px" 
                                            radius={16}
                                            dataCursor={`CAPABILITY · ${item.title.toUpperCase()}`}
                                            className="h-full border-white/[0.06] hover:border-[#C9A66B]/[0.12] hover:shadow-[0_0_30px_rgba(201,166,107,0.03)]"
                                        >
                                            <h3 className="font-sans text-[16px] font-medium text-white mb-[12px] group-hover:text-[#E8D5B5] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="font-sans text-[13px] font-normal text-white/[0.50] leading-[1.6] group-hover:text-white/[0.72] transition-colors duration-300">
                                                {item.desc}
                                            </p>
                                        </InteractiveGlassPane>
                                    </StaggerItem>
                                ))}
                            </StaggerGroup>
                        </div>

                        {/* ROW C — Tools strip */}
                        <FadeUp delay={0.6} className="mt-[40px] flex flex-row flex-wrap gap-[8px]">
                            {["Claude API", "OpenAI", "LangChain", "Cursor", "Windsurf", "RAG Pipelines"].map(tool => (
                                <Badge key={tool}>{tool}</Badge>
                            ))}
                        </FadeUp>
                    </Container>
                    <Whisper text="MODULE.04" orientation="vertical" className="absolute right-0 top-[100px] !text-white/[0.04] hidden xl:block" />
                </section>

                {/* SECTION 6 - COMPARISON GRID */}
                <section className="w-full pt-[80px] pb-[100px] relative">
                    <div className="absolute top-0 left-0 w-full"><Hairline /></div>
                    <Container>
                        <div className="flex items-center justify-between mb-[48px]">
                            <Meta>WHY ONE STUDIO</Meta>
                            <Meta accent>THE DIFFERENCE</Meta>
                        </div>

                        <div className="flex flex-col md:grid md:grid-cols-2 gap-[16px]">
                            {/* LEFT PANE */}
                            <ScrollReveal delay={0}>
                                <GlassPane padding="40px" className="h-full" data-cursor="COMPARE · THE HANDOFF MODEL">
                                    <h3 className="font-sans text-[20px] font-medium text-white mb-[24px]">
                                        The Handoff Model
                                    </h3>
                                    <div className="flex flex-col gap-[16px]">
                                        {[
                                            "Brand agency designs identity → files over the wall",
                                            "Design agency redesigns for product → context lost",
                                            "Dev shop rebuilds from spec → intent diluted",
                                            "AI consultant bolts on features → nothing integrates",
                                            "4 vendors, 4 invoices, 4 different visions"
                                        ].map((point, i) => (
                                            <div key={i} className="flex gap-[12px] items-start">
                                                <Meta className="font-medium text-accent-base/30 shrink-0 mt-[2px]">×</Meta>
                                                <span className="font-sans text-[15px] font-normal text-white/[0.50] leading-[1.6]">
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </GlassPane>
                            </ScrollReveal>

                            {/* RIGHT PANE */}
                            <ScrollReveal delay={0.15}>
                                <InteractiveGlassPane 
                                    padding="40px" 
                                    className="h-full relative overflow-hidden bg-[#C9A66B]/[0.02] border-[#C9A66B]/[0.1] shadow-[inset_0_1px_0_rgba(201,166,107,0.1)]" 
                                    dataCursor="COMPARE · THE IMAGINTA MODEL"
                                >
                                    {/* Subtle amber border overlay */}
                                    <div className="absolute inset-0 border border-accent-base/10 pointer-events-none rounded-[inherit]" />
                                    
                                    <h3 className="font-sans text-[20px] font-medium text-white mb-[24px]">
                                        One Studio, One Thread
                                    </h3>
                                    <div className="flex flex-col gap-[16px]">
                                        {[
                                            "Brand strategy informs product structure",
                                            "Design tokens flow directly into code",
                                            "AI tools built by the team that designed the UX",
                                            "Every decision has full context",
                                            "One partner, one relationship, one vision"
                                        ].map((point, i) => (
                                            <div key={i} className="flex gap-[12px] items-start">
                                                <Meta className="font-medium text-[#C9A66B]/80 shrink-0 mt-[2px]">✓</Meta>
                                                <span className="font-sans text-[15px] font-normal text-white/[0.55] leading-[1.6]">
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </InteractiveGlassPane>
                            </ScrollReveal>
                        </div>
                    </Container>
                    <Whisper text="METHODOLOGY.UNIFIED — REF.001" className="absolute left-[24px] bottom-[24px] !text-white/[0.04] hidden xl:block" />
                </section>

                {/* SECTION 7 - ENGAGEMENT MODELS */}
                <section className="w-full pt-[80px] pb-[100px] relative">
                    <div className="absolute top-0 left-0 w-full"><Hairline /></div>
                    <Container>
                        <div className="flex items-center justify-between mb-[48px]">
                            <Meta>HOW WE WORK</Meta>
                            <Meta accent>ENGAGEMENT MODELS</Meta>
                        </div>

                        <StaggerGroup className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-[16px]" delay={0.2}>
                            {/* PANE 1 — Project */}
                            <StaggerItem className="md:col-span-2 lg:col-span-1 h-full">
                                <GlassPane padding="36px" className="group h-full transition-all duration-300 ease hover:border-accent-base/10 relative flex flex-col" data-cursor="MODEL · PROJECT">
                                    <div className="absolute top-[36px] right-[36px]">
                                        <Badge className="!bg-accent-base/10 !text-accent-base !border-accent-base/20 animate-pulse">MOST POPULAR</Badge>
                                    </div>
                                    <h3 className="font-sans text-[22px] font-semibold text-white mt-[8px] mb-[12px]">Project</h3>
                                    <p className="font-sans text-[14px] font-normal text-white/[0.55] leading-[1.6]">
                                        A defined scope with clear deliverables. Ideal for launches, redesigns, and new products.
                                    </p>
                                    <div className="mt-[24px] flex flex-col gap-[12px] flex-1">
                                        <div className="flex items-center justify-between"><Meta>Timeline</Meta><span className="font-sans text-[14px] font-medium text-white">6–12 weeks</span></div>
                                        <Hairline />
                                        <div className="flex items-center justify-between"><Meta>Team</Meta><span className="font-sans text-[14px] font-medium text-white">2–3 specialists</span></div>
                                        <Hairline />
                                        <div className="flex items-center justify-between"><Meta>Starting at</Meta><span className="font-sans text-[14px] font-medium text-accent-base tracking-wide">€8K</span></div>
                                    </div>
                                    <div className="mt-[32px] pt-[24px] border-t border-white/[0.04]">
                                        <Button variant="ghost" className="w-full justify-center">Discuss a Project</Button>
                                    </div>
                                </GlassPane>
                            </StaggerItem>
                            
                            {/* PANE 2 — Retainer */}
                            <StaggerItem className="h-full">
                                <GlassPane padding="36px" className="group h-full transition-all duration-300 ease hover:border-accent-base/10 flex flex-col" data-cursor="MODEL · RETAINER">
                                    <h3 className="font-sans text-[22px] font-semibold text-white mt-[8px] mb-[12px]">Retainer</h3>
                                    <p className="font-sans text-[14px] font-normal text-white/[0.55] leading-[1.6]">
                                        Ongoing design and development support. A dedicated allocation of hours every month.
                                    </p>
                                    <div className="mt-[24px] flex flex-col gap-[12px] flex-1">
                                        <div className="flex items-center justify-between"><Meta>Commitment</Meta><span className="font-sans text-[14px] font-medium text-white">3 months min</span></div>
                                        <Hairline />
                                        <div className="flex items-center justify-between"><Meta>Team</Meta><span className="font-sans text-[14px] font-medium text-white">1–2 dedicated</span></div>
                                        <Hairline />
                                        <div className="flex items-center justify-between"><Meta>Starting at</Meta><span className="font-sans text-[14px] font-medium text-accent-base tracking-wide">€3K/mo</span></div>
                                    </div>
                                    <div className="mt-[32px] pt-[24px] border-t border-white/[0.04]">
                                        <Button variant="ghost" className="w-full justify-center">Explore Retainers</Button>
                                    </div>
                                </GlassPane>
                            </StaggerItem>
                            
                            {/* PANE 3 — Partnership */}
                            <StaggerItem className="h-full">
                                <GlassPane padding="36px" className="group h-full transition-all duration-300 ease hover:border-accent-base/10 flex flex-col" data-cursor="MODEL · PARTNERSHIP">
                                    <h3 className="font-sans text-[22px] font-semibold text-white mt-[8px] mb-[12px]">Partnership</h3>
                                    <p className="font-sans text-[14px] font-normal text-white/[0.55] leading-[1.6]">
                                        A deep, long-term integration. We become your external product and brand team.
                                    </p>
                                    <div className="mt-[24px] flex flex-col gap-[12px] flex-1">
                                        <div className="flex items-center justify-between"><Meta>Commitment</Meta><span className="font-sans text-[14px] font-medium text-white">6+ months</span></div>
                                        <Hairline />
                                        <div className="flex items-center justify-between"><Meta>Team</Meta><span className="font-sans text-[14px] font-medium text-white">Full squad</span></div>
                                        <Hairline />
                                        <div className="flex items-center justify-between"><Meta>Starting at</Meta><span className="font-sans text-[14px] font-medium text-accent-base tracking-wide">Custom</span></div>
                                    </div>
                                    <div className="mt-[32px] pt-[24px] border-t border-white/[0.04]">
                                        <Button variant="ghost" className="w-full justify-center">Let&apos;s Talk</Button>
                                    </div>
                                </GlassPane>
                            </StaggerItem>
                        </StaggerGroup>
                    </Container>
                </section>

                {/* SECTION 8 - FAQ */}
                <section className="w-full pt-[80px] pb-[100px] relative">
                    <div className="absolute top-0 left-0 w-full"><Hairline /></div>
                    <Container>
                        <Meta className="mb-[48px] block">QUESTIONS</Meta>
                        
                        <div className="flex flex-col">
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
                    <Whisper text="FAQ.IDX — 6.ENTRIES" className="absolute right-[24px] bottom-[24px] !text-white/[0.04] hidden xl:block" />
                </section>

                {/* CTA BAND */}
                <CTABand />

            </ScaleReveal>
        </main>
    );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div 
            className={`border-b-[0.5px] border-white/10 w-full transition-colors duration-300 border-l-[1px] pl-[16px] ${isOpen ? 'border-l-[#C9A66B]/30 bg-[#C9A66B]/[0.01]' : 'border-l-transparent'}`} 
            data-cursor={`FAQ · ${question.substring(0, 15)}...`}
        >
            <button 
                onClick={onClick}
                className="w-full py-[24px] flex items-center justify-between text-left group"
            >
                <span className={`font-sans text-[17px] font-medium transition-colors duration-300 pr-[24px] ${isOpen ? 'text-white' : 'text-white/[0.55] group-hover:text-white'}`}>
                    {question}
                </span>
                <div className={`flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-45 text-[#C9A66B]' : 'text-white/[0.30]'}`}>
                    <Plus size={16} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <motion.p 
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="font-sans text-[15px] font-normal text-white/[0.55] leading-[1.7] max-w-[640px] pb-[24px]"
                        >
                            {answer}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

