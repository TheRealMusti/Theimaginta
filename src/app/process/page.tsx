import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Whisper, Meta, GlassPane, Hairline } from '@/components/ui';
import { FadeUp, ScaleReveal, ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion';

import { CTABand } from '@/components/sections/CTABand';
import { ProcessJourney, PhaseAtmosphere, PhaseNode, TimelineSummary } from '@/components/process-ui';
import { HeaderTimelineBar } from '@/components/process-ui/HeaderTimelineBar';

export const metadata: Metadata = {
    title: 'Process — Imaginta',
    description: 'From first conversation to long-term partnership. A clear, human process designed around trust, clarity, and craft.',
};

export default function ProcessPage() {
    return (
        <main className="w-full min-h-screen bg-void text-white selection:bg-accent-base/30 relative overflow-hidden">
            <ScaleReveal>
                
                {/* HEAD SPACE WASH */}
                <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top_center,rgba(201,166,107,0.03)_0%,transparent_70%)] pointer-events-none z-0" />

                {/* SECTION 1 - PAGE HEADER */}
                <section className="w-full pt-[120px] pb-[80px] relative z-10">
                    <Container>
                        {/* Row 1 - Breadcrumb */}
                        <FadeUp delay={0.15} className="flex items-center justify-between">
                            <div className="flex items-center gap-[8px]">
                                <Link href="/" className="hover:opacity-75 transition-opacity">
                                    <Meta>IMAGINTA</Meta>
                                </Link>
                                <Meta className="text-white/[0.2]">/</Meta>
                                <Meta accent>PROCESS</Meta>
                            </div>
                            <Meta>06 PHASES</Meta>
                        </FadeUp>

                        {/* Row 2 - Headline */}
                        <FadeUp delay={0.3} className="mt-[48px]">
                            <h1 className="font-sans text-[clamp(40px,6vw,72px)] leading-[1.05] font-bold tracking-[-0.04em] text-white">
                                How we bring<br />
                                <span className="font-normal italic text-white/[0.50]">ideas to life.</span>
                            </h1>
                        </FadeUp>

                        {/* Row 3 - Description */}
                        <FadeUp delay={0.45} className="mt-[28px] max-w-[580px]">
                            <p className="font-sans text-[17px] font-normal text-white/[0.72] leading-[1.7]">
                                Every partnership follows the same proven rhythm — six phases designed to eliminate surprise, build momentum, and deliver work we&apos;re both proud of. No black boxes. No vanishing acts.
                            </p>
                        </FadeUp>

                        {/* Row 4 - Trust signals */}
                        <FadeUp delay={0.6} className="mt-[40px] flex items-center gap-[12px] flex-wrap">
                            <Meta className="!text-[11px]"><span className="text-accent-base">14</span> MONTHS AVG. ENGAGEMENT</Meta>
                            <Meta className="!text-[11px] text-white/[0.30]">·</Meta>
                            <Meta className="!text-[11px]"><span className="text-accent-base">96%</span> CLIENT RETENTION</Meta>
                            <Meta className="!text-[11px] text-white/[0.30]">·</Meta>
                            <Meta className="!text-[11px]"><span className="text-accent-base">ZERO</span> MISSED DEADLINES</Meta>
                        </FadeUp>

                        {/* Row 5 - Timeline Bar */}
                        <FadeUp delay={0.75} className="mt-[48px]">
                            <HeaderTimelineBar />
                        </FadeUp>
                    </Container>
                </section>

                <ProcessJourney>
                    {/* PHASE 01: INTRO */}
                    <PhaseAtmosphere id="intro" number="01" glowIntensity="base" glowPosition="top-right" className="scroll-mt-[96px]">
                        <Container className="pt-[100px] pb-[80px]">
                            {/* PHASE HEADER */}
                            <PhaseNode className="top-[100px]" />
                            <FadeUp delay={0.1} className="pl-0 md:pl-[120px]">
                                <Meta className="text-accent-base">01</Meta>
                                <h2 className="font-sans text-[40px] font-bold tracking-[-0.03em] text-white mt-[8px]">The Intro</h2>
                                <p className="font-sans text-[18px] font-normal italic text-white/[0.50] mt-[8px]">We start before the contract.</p>
                            </FadeUp>

                            {/* CONTENT */}
                            <div className="mt-[40px] pl-0 md:pl-[120px] flex flex-col md:flex-row gap-[48px]">
                                {/* LEFT - Description */}
                                <FadeUp delay={0.3} className="flex-1 md:flex-[1.2]">
                                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8] mb-[20px]">
                                        Before any scope or proposal, we have a conversation. A real one — not a sales pitch. We want to understand your business, your ambitions, and the problem you&apos;re trying to solve.
                                    </p>
                                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8]">
                                        This usually starts as a 30-minute video call. No commitment. If we&apos;re the right fit, you&apos;ll know. If we&apos;re not, we&apos;ll tell you.
                                    </p>

                                    <div className="mt-[32px] pt-[24px] border-t border-accent-base/10 flex flex-col gap-[12px]">
                                        <div className="flex items-center gap-[12px]">
                                            <Meta className="w-[140px] text-white/[0.30]">TYPICAL DURATION</Meta>
                                            <span className="font-sans text-[14px] font-medium text-white">1–2 conversations</span>
                                        </div>
                                        <div className="flex items-center gap-[12px]">
                                            <Meta className="w-[140px] text-white/[0.30]">YOUR COMMITMENT</Meta>
                                            <span className="font-sans text-[14px] font-medium text-white">30 minutes</span>
                                        </div>
                                    </div>
                                </FadeUp>

                                {/* RIGHT - What Happens */}
                                <ScrollReveal delay={0.4} className="flex-1">
                                    <GlassPane padding="32px" className="h-full bg-accent-base/[0.02] border-accent-base/[0.1] shadow-[inset_0_1px_0_rgba(201,166,107,0.06)]" data-cursor="PHASE · 01">
                                        <h3 className="font-sans text-[16px] font-medium text-white mb-[24px]">What happens</h3>
                                        <ul className="flex flex-col gap-[12px]">
                                            {[
                                                "Introductory call — video or in-person",
                                                "We learn about your business and goals",
                                                "You learn about our process and values",
                                                "Honest assessment: are we the right fit?",
                                                "If yes: we draft a preliminary scope"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-[12px]">
                                                    <div className="w-[4px] h-[4px] rounded-full bg-accent-base shrink-0 mt-[10px]" />
                                                    <span className="font-sans text-[14px] font-normal text-white/[0.55] leading-[1.7]">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </GlassPane>
                                </ScrollReveal>
                            </div>
                        </Container>
                    </PhaseAtmosphere>

                    {/* PHASE 02: DISCOVERY */}
                    <PhaseAtmosphere id="discovery" number="02" glowIntensity="weak" glowPosition="center-left" className="scroll-mt-[96px] mt-[40px]">
                        <Hairline className="bg-[linear-gradient(90deg,transparent_10%,rgba(201,166,107,0.08)_50%,transparent_90%)] mb-[80px]" />
                        <Container className="pb-[80px]">
                            {/* PHASE HEADER */}
                            <PhaseNode className="top-0" />
                            <FadeUp delay={0.1} className="pl-0 md:pl-[120px]">
                                <Meta className="text-accent-base">02</Meta>
                                <h2 className="font-sans text-[40px] font-bold tracking-[-0.03em] text-white mt-[8px]">Discovery</h2>
                                <p className="font-sans text-[18px] font-normal italic text-white/[0.50] mt-[8px]">We listen before we design.</p>
                            </FadeUp>

                            {/* CONTENT */}
                            <div className="mt-[40px] pl-0 md:pl-[120px] flex flex-col-reverse md:flex-row gap-[48px]">
                                {/* LEFT - GlassPane */}
                                <ScrollReveal delay={0.3} className="flex-1">
                                    <GlassPane padding="32px" className="h-full bg-accent-base/[0.02] border-accent-base/[0.1] shadow-[inset_0_1px_0_rgba(201,166,107,0.06)]" data-cursor="PHASE · 02">
                                        <h3 className="font-sans text-[16px] font-medium text-white mb-[24px]">What we explore</h3>
                                        <ul className="flex flex-col gap-[12px]">
                                            {[
                                                "Stakeholder interviews and alignment sessions",
                                                "Competitive landscape and market positioning",
                                                "User research — interviews, surveys, analytics",
                                                "Technical audit of existing systems",
                                                "Content inventory and information architecture",
                                                "Success metrics definition"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-[12px]">
                                                    <div className="w-[4px] h-[4px] rounded-full bg-accent-base shrink-0 mt-[10px]" />
                                                    <span className="font-sans text-[14px] font-normal text-white/[0.55] leading-[1.7]">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </GlassPane>
                                </ScrollReveal>

                                {/* RIGHT - Description */}
                                <FadeUp delay={0.4} className="flex-1 md:flex-[1.2]">
                                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8] mb-[20px]">
                                        Discovery is where we earn the right to design. We immerse ourselves in your world — your customers, your competitors, your constraints — until we understand the problem as well as you do.
                                    </p>
                                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8]">
                                        This phase is often the most valuable. It surfaces assumptions, aligns stakeholders, and builds the foundation that makes every decision downstream faster and more confident.
                                    </p>

                                    <div className="mt-[32px] pt-[24px] border-t border-accent-base/10 flex flex-col gap-[12px]">
                                        <div className="flex items-center gap-[12px]">
                                            <Meta className="w-[140px] text-white/[0.30]">DURATION</Meta>
                                            <span className="font-sans text-[14px] font-medium text-white">1–2 weeks</span>
                                        </div>
                                        <div className="flex items-center gap-[12px]">
                                            <Meta className="w-[140px] text-white/[0.30]">DELIVERABLES</Meta>
                                            <span className="font-sans text-[14px] font-medium text-white">Research report, insights deck, project brief</span>
                                        </div>
                                        <div className="flex items-center gap-[12px]">
                                            <Meta className="w-[140px] text-white/[0.30]">YOUR COMMITMENT</Meta>
                                            <span className="font-sans text-[14px] font-medium text-white">3–4 hours total</span>
                                        </div>
                                    </div>
                                </FadeUp>
                            </div>

                            {/* DELIVERABLES SHOWCASE */}
                            <div className="mt-[40px] pl-0 md:pl-[120px]">
                                <StaggerGroup delay={0.5} className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                                    {[
                                        { title: "Research Report", meta: "DOCUMENT", desc: "Key findings, user insights, and strategic recommendations." },
                                        { title: "Project Brief", meta: "DOCUMENT", desc: "Scope, timeline, milestones, and success criteria — our shared contract." },
                                        { title: "Stakeholder Alignment", meta: "SESSION", desc: "A presentation ensuring every decision-maker shares the same vision." }
                                    ].map((card, i) => (
                                        <StaggerItem key={i} className="h-full">
                                            <GlassPane padding="24px" className="h-full group hover:border-accent-base/10 transition-colors duration-300" data-cursor={`DELIVERABLE · ${card.title.toUpperCase()}`}>
                                                <Meta className="mb-[12px]">{card.meta}</Meta>
                                                <h4 className="font-sans text-[16px] font-medium text-white mb-[8px]">{card.title}</h4>
                                                <p className="font-sans text-[13px] font-normal text-white/[0.50] leading-[1.6]">
                                                    {card.desc}
                                                </p>
                                            </GlassPane>
                                        </StaggerItem>
                                    ))}
                                </StaggerGroup>
                            </div>
                        </Container>
                    </PhaseAtmosphere>

                    {/* PHASE 03: STRATEGY & DESIGN */}
                    <PhaseAtmosphere id="strategy-design" number="03" glowIntensity="base" glowPosition="bottom-right" className="scroll-mt-[96px] mt-[40px]">
                        <Hairline className="bg-[linear-gradient(90deg,transparent_10%,rgba(201,166,107,0.08)_50%,transparent_90%)] mb-[80px]" />
                        <Container className="pb-[80px]">
                            {/* PHASE HEADER */}
                            <PhaseNode className="top-0" />
                            <FadeUp delay={0.1} className="pl-0 md:pl-[120px]">
                                <Meta className="text-accent-base">03</Meta>
                                <h2 className="font-sans text-[40px] font-bold tracking-[-0.03em] text-white mt-[8px]">Strategy &amp; Design</h2>
                                <p className="font-sans text-[18px] font-normal italic text-white/[0.50] mt-[8px]">From abstraction to architecture.</p>
                            </FadeUp>

                            {/* CONTENT */}
                            <div className="mt-[40px] pl-0 md:pl-[120px]">
                                <FadeUp delay={0.3} className="max-w-[640px] mb-[48px]">
                                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8]">
                                        This is where the foundation is poured. We transform the findings from Discovery into a concrete blueprint. We map the data structures, define the user journeys, and establish the visual language that captures your brand&apos;s essence.
                                    </p>
                                </FadeUp>

                                {/* DUAL PANES */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                                    <ScrollReveal delay={0.4}>
                                        <GlassPane padding="32px" className="h-full bg-white/[0.01] hover:bg-white/[0.02] transition-colors" data-cursor="UX · ARCHITECTURE">
                                            <h3 className="font-sans text-[18px] font-medium text-white mb-[8px]">Architecture &amp; UX</h3>
                                            <p className="font-sans text-[14px] font-normal text-white/[0.55] mb-[24px] leading-[1.6]">
                                                Structuring the logical flow and technical foundation before a single pixel is painted.
                                            </p>
                                            <ul className="flex flex-col gap-[12px]">
                                                {["Wireframes & Prototypes", "User flows & Edge cases", "API design & Schemas", "Data mapping"].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-[12px]">
                                                        <div className="w-[4px] h-[4px] rounded-full bg-white/20 shrink-0 mt-[10px]" />
                                                        <span className="font-sans text-[14px] font-normal text-white/[0.55] leading-[1.7]">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </GlassPane>
                                    </ScrollReveal>

                                    <ScrollReveal delay={0.5}>
                                        <GlassPane padding="32px" className="h-full bg-white/[0.01] hover:bg-white/[0.02] transition-colors" data-cursor="UI · MOTION">
                                            <h3 className="font-sans text-[18px] font-medium text-white mb-[8px]">Visual Design</h3>
                                            <p className="font-sans text-[14px] font-normal text-white/[0.55] mb-[24px] leading-[1.6]">
                                                Crafting the aesthetic identity, micro-interactions, and premium feel of the interface.
                                            </p>
                                            <ul className="flex flex-col gap-[12px]">
                                                {["Art direction & Lookbooks", "Component library (Figma)", "Motion studies", "Responsive layouts"].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-[12px]">
                                                        <div className="w-[4px] h-[4px] rounded-full bg-accent-base/50 shrink-0 mt-[10px]" />
                                                        <span className="font-sans text-[14px] font-normal text-white/[0.55] leading-[1.7]">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </GlassPane>
                                    </ScrollReveal>
                                </div>

                                {/* THE FEEDBACK LOOP */}
                                <FadeUp delay={0.6} className="mt-[24px]">
                                    <GlassPane padding="0" className="w-full relative overflow-hidden bg-accent-base/[0.02] border-accent-base/[0.1]">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(201,166,107,0.05)_0%,transparent_50%)] pointer-events-none" />
                                        
                                        <div className="relative z-10 p-[32px] md:p-[40px] flex flex-col md:flex-row gap-[32px] md:items-center justify-between">
                                            <div className="max-w-[480px]">
                                                <div className="flex items-center gap-[12px] mb-[16px]">
                                                    <div className="w-[8px] h-[8px] rounded-full bg-accent-base shrink-0 animate-pulse" />
                                                    <Meta className="text-accent-base">THE FEEDBACK LOOP</Meta>
                                                </div>
                                                <p className="font-sans text-[16px] font-normal text-white/[0.65] leading-[1.7]">
                                                    We don&apos;t do big reveals. You see the work as it happens. Weekly syncs. Open Figma files. Shared Slack channels. Absolutely no surprises.
                                                </p>
                                            </div>
                                            
                                            <div className="flex flex-col gap-[16px] shrink-0">
                                                <div className="flex items-center gap-[12px]">
                                                    <Meta className="w-[100px] text-white/[0.30]">DURATION</Meta>
                                                    <span className="font-sans text-[14px] font-medium text-white">2–4 weeks</span>
                                                </div>
                                                <div className="flex items-center gap-[12px]">
                                                    <Meta className="w-[100px] text-white/[0.30]">COMMITMENT</Meta>
                                                    <span className="font-sans text-[14px] font-medium text-white">1–2 hrs / week</span>
                                                </div>
                                            </div>
                                        </div>
                                    </GlassPane>
                                </FadeUp>
                            </div>
                        </Container>
                    </PhaseAtmosphere>

                    {/* PHASE 04: BUILD */}
                    <PhaseAtmosphere id="build" number="04" glowIntensity="base" glowPosition="center" className="scroll-mt-[96px] mt-[40px]">
                        <Hairline className="bg-[linear-gradient(90deg,transparent_10%,rgba(201,166,107,0.08)_50%,transparent_90%)] mb-[80px]" />
                        <Container className="pb-[80px]">
                            {/* PHASE HEADER */}
                            <PhaseNode className="top-0" />
                            <FadeUp delay={0.1} className="pl-0 md:pl-[120px]">
                                <Meta className="text-accent-base">04</Meta>
                                <h2 className="font-sans text-[40px] font-bold tracking-[-0.03em] text-white mt-[8px]">Build</h2>
                                <p className="font-sans text-[18px] font-normal italic text-white/[0.50] mt-[8px]">Speed. Precision. Momentum.</p>
                            </FadeUp>

                            {/* CONTENT */}
                            <div className="mt-[40px] pl-0 md:pl-[120px] flex flex-col-reverse md:flex-row gap-[48px]">
                                {/* LEFT - Sprints Visualization */}
                                <ScrollReveal delay={0.3} className="flex-1 border-l border-white/[0.04] pl-[24px] md:pl-[32px] py-[12px] flex flex-col gap-[32px]">
                                    {[
                                        { sprint: "Sprint 01", title: "Core Architecture", desc: "Setting up repositories, databases, environments, and CI/CD pipelines.", active: true },
                                        { sprint: "Sprint 02", title: "Logic & APIs", desc: "Building the engine. Endpoints, state management, and integrations." },
                                        { sprint: "Sprint 03", title: "Interface Wrapping", desc: "CSS architecture, motion design, and responsive polishing." },
                                        { sprint: "Sprint 04", title: "QA & Hardening", desc: "Performance audits, accessibility passes, and edge-case testing." },
                                    ].map((sprint, i) => (
                                        <div key={i} className="relative group">
                                            {/* Step dot */}
                                            <div className={`absolute -left-[28.5px] md:-left-[36.5px] top-[6px] w-[9px] h-[9px] rounded-full transition-colors duration-500 ${sprint.active ? 'bg-accent-base shadow-[0_0_12px_rgba(201,166,107,0.4)]' : 'bg-white/[0.1] group-hover:bg-white/[0.3]'}`} />
                                            
                                            <Meta className={sprint.active ? 'text-accent-base' : 'text-white/[0.4]'}>{sprint.sprint}</Meta>
                                            <h3 className="font-sans text-[16px] font-medium text-white mt-[4px] mb-[8px]">{sprint.title}</h3>
                                            <p className="font-sans text-[14px] font-normal text-white/[0.55] leading-[1.6]">
                                                {sprint.desc}
                                            </p>
                                        </div>
                                    ))}
                                </ScrollReveal>

                                {/* RIGHT - Description */}
                                <FadeUp delay={0.4} className="flex-1 md:flex-[1.2]">
                                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8] mb-[20px]">
                                        We work in focused, two-week sprint cycles. Because we front-loaded the hard decisions during Discovery and Strategy, the Build phase moves incredibly fast.
                                    </p>
                                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8]">
                                        At the end of every sprint, you get a staging link. You click the buttons. You test the forms. We don&apos;t talk about progress — we show it.
                                    </p>

                                    <div className="mt-[32px] pt-[24px] border-t border-accent-base/10 flex flex-col gap-[12px]">
                                        <div className="flex items-center gap-[12px]">
                                            <Meta className="w-[140px] text-white/[0.30]">DURATION</Meta>
                                            <span className="font-sans text-[14px] font-medium text-white">4–12 weeks</span>
                                        </div>
                                        <div className="flex items-center gap-[12px]">
                                            <Meta className="w-[140px] text-white/[0.30]">DELIVERABLES</Meta>
                                            <span className="font-sans text-[14px] font-medium text-white">Staging environments, source code</span>
                                        </div>
                                        <div className="flex items-center gap-[12px]">
                                            <Meta className="w-[140px] text-white/[0.30]">YOUR COMMITMENT</Meta>
                                            <span className="font-sans text-[14px] font-medium text-white">1 hr / sprint</span>
                                        </div>
                                    </div>
                                </FadeUp>
                            </div>
                        </Container>
                    </PhaseAtmosphere>

                    {/* PHASE 04: BUILD */}
                    <PhaseAtmosphere id="build" number="04" glowIntensity="base" glowPosition="center" className="scroll-mt-[96px] mt-[40px]">
                        <Hairline className="bg-[linear-gradient(90deg,transparent_10%,rgba(201,166,107,0.08)_50%,transparent_90%)] mb-[80px]" />
                        <Container className="pb-[80px]">
                            {/* PHASE HEADER */}
                            <PhaseNode className="top-0" />
                            <FadeUp delay={0.1} className="pl-0 md:pl-[120px]">
                                <Meta className="text-accent-base">04</Meta>
                                <h2 className="font-sans text-[40px] font-bold tracking-[-0.03em] text-white mt-[8px]">Build</h2>
                                <p className="font-sans text-[18px] font-normal italic text-white/[0.50] mt-[8px]">Speed. Precision. Momentum.</p>
                            </FadeUp>

                            {/* CONTENT */}
                            <div className="mt-[40px] pl-0 md:pl-[120px] flex flex-col-reverse md:flex-row gap-[48px]">
                                {/* LEFT - Sprints Visualization */}
                                <ScrollReveal delay={0.3} className="flex-1 border-l border-white/[0.04] pl-[24px] md:pl-[32px] py-[12px] flex flex-col gap-[32px]">
                                    {[
                                        { sprint: "Sprint 01", title: "Core Architecture", desc: "Setting up repositories, databases, environments, and CI/CD pipelines.", active: true },
                                        { sprint: "Sprint 02", title: "Logic & APIs", desc: "Building the engine. Endpoints, state management, and integrations." },
                                        { sprint: "Sprint 03", title: "Interface Wrapping", desc: "CSS architecture, motion design, and responsive polishing." },
                                        { sprint: "Sprint 04", title: "QA & Hardening", desc: "Performance audits, accessibility passes, and edge-case testing." },
                                    ].map((sprint, i) => (
                                        <div key={i} className="relative group">
                                            {/* Step dot */}
                                            <div className={`absolute -left-[28.5px] md:-left-[36.5px] top-[6px] w-[9px] h-[9px] rounded-full transition-colors duration-500 ${sprint.active ? 'bg-accent-base shadow-[0_0_12px_rgba(201,166,107,0.4)]' : 'bg-white/[0.1] group-hover:bg-white/[0.3]'}`} />
                                            
                                            <Meta className={sprint.active ? 'text-accent-base' : 'text-white/[0.4]'}>{sprint.sprint}</Meta>
                                            <h3 className="font-sans text-[16px] font-medium text-white mt-[4px] mb-[8px]">{sprint.title}</h3>
                                            <p className="font-sans text-[14px] font-normal text-white/[0.55] leading-[1.6]">
                                                {sprint.desc}
                                            </p>
                                        </div>
                                    ))}
                                </ScrollReveal>

                                {/* RIGHT - Description */}
                                <FadeUp delay={0.4} className="flex-1 md:flex-[1.2]">
                                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8] mb-[20px]">
                                        We work in focused, two-week sprint cycles. Because we front-loaded the hard decisions during Discovery and Strategy, the Build phase moves incredibly fast.
                                    </p>
                                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8]">
                                        At the end of every sprint, you get a staging link. You click the buttons. You test the forms. We don't talk about progress — we show it.
                                    </p>

                                    <div className="mt-[32px] pt-[24px] border-t border-accent-base/10 flex flex-col gap-[12px]">
                                        <div className="flex items-center gap-[12px]">
                                            <Meta className="w-[140px] text-white/[0.30]">DURATION</Meta>
                                            <span className="font-sans text-[14px] font-medium text-white">4–12 weeks</span>
                                        </div>
                                        <div className="flex items-center gap-[12px]">
                                            <Meta className="w-[140px] text-white/[0.30]">DELIVERABLES</Meta>
                                            <span className="font-sans text-[14px] font-medium text-white">Staging environments, source code</span>
                                        </div>
                                        <div className="flex items-center gap-[12px]">
                                            <Meta className="w-[140px] text-white/[0.30]">YOUR COMMITMENT</Meta>
                                            <span className="font-sans text-[14px] font-medium text-white">1 hr / sprint</span>
                                        </div>
                                    </div>
                                </FadeUp>
                            </div>
                        </Container>
                    </PhaseAtmosphere>

                    {/* PHASE 05: LAUNCH */}
                    <PhaseAtmosphere id="launch" number="05" glowIntensity="base" glowPosition="center-left" className="scroll-mt-[96px] mt-[40px]">
                        <Hairline className="bg-[linear-gradient(90deg,transparent_10%,rgba(201,166,107,0.08)_50%,transparent_90%)] mb-[80px]" />
                        <Container className="pb-[80px]">
                            {/* PHASE HEADER */}
                            <PhaseNode className="top-0" />
                            <FadeUp delay={0.1} className="pl-0 md:pl-[120px]">
                                <Meta className="text-accent-base">05</Meta>
                                <h2 className="font-sans text-[40px] font-bold tracking-[-0.03em] text-white mt-[8px]">Launch</h2>
                                <p className="font-sans text-[18px] font-normal italic text-white/[0.50] mt-[8px]">No loose ends.</p>
                            </FadeUp>

                            {/* CONTENT */}
                            <div className="mt-[40px] pl-0 md:pl-[120px] flex flex-col md:flex-row gap-[48px]">
                                {/* LEFT - Description */}
                                <FadeUp delay={0.3} className="flex-1 md:flex-[1.2]">
                                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8] mb-[20px]">
                                        Launching a digital product shouldn&apos;t involve crossing your fingers. Our launch protocol is a strict, multi-point checklist that ensures security, performance, and perfectly tracked analytics from minute one.
                                    </p>
                                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8]">
                                        We handle the DNS routing, the SSL provisioning, the server scaling, and the SEO migration. You just get to share the link.
                                    </p>

                                    <div className="mt-[32px] pt-[24px] border-t border-accent-base/10 flex flex-col gap-[12px]">
                                        <div className="flex items-center gap-[12px]">
                                            <Meta className="w-[140px] text-white/[0.30]">DURATION</Meta>
                                            <span className="font-sans text-[14px] font-medium text-white">1 week</span>
                                        </div>
                                        <div className="flex items-center gap-[12px]">
                                            <Meta className="w-[140px] text-white/[0.30]">DELIVERABLES</Meta>
                                            <span className="font-sans text-[14px] font-medium text-white">Live product, codebase handover, admin training</span>
                                        </div>
                                    </div>
                                </FadeUp>

                                {/* RIGHT - Checkboxes */}
                                <ScrollReveal delay={0.4} className="flex-1">
                                    <GlassPane padding="32px" className="h-full bg-accent-base/[0.02] border-accent-base/[0.1] shadow-[inset_0_1px_0_rgba(201,166,107,0.06)]" data-cursor="CHECKLIST">
                                        <h3 className="font-sans text-[16px] font-medium text-white mb-[24px]">Launch Protocol</h3>
                                        <div className="flex flex-col gap-[16px]">
                                            {[
                                                { label: "Performance & Lighthouse audit", checked: true },
                                                { label: "Cross-platform QA sign-off", checked: true },
                                                { label: "Analytics & event tracking verified", checked: true },
                                                { label: "DNS cutover & SSL provisioning", checked: true },
                                                { label: "SEO 301 redirect mapping", checked: true },
                                                { label: "Post-launch monitoring enabled", checked: true }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-[12px]">
                                                    <div className="w-[16px] h-[16px] rounded-[4px] border border-accent-base/30 bg-accent-base/10 flex items-center justify-center shrink-0">
                                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 4L3.5 6.5L9 1" stroke="#C9A66B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </div>
                                                    <span className="font-sans text-[14px] font-normal text-white/[0.65] leading-none mt-1">
                                                        {item.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </GlassPane>
                                </ScrollReveal>
                            </div>
                        </Container>
                    </PhaseAtmosphere>

                    {/* PHASE 06: EVOLVE */}
                    <PhaseAtmosphere id="evolve" number="06" glowIntensity="weak" glowPosition="top-right" className="scroll-mt-[96px] mt-[40px]">
                        <Hairline className="bg-[linear-gradient(90deg,transparent_10%,rgba(201,166,107,0.08)_50%,transparent_90%)] mb-[80px]" />
                        <Container className="pb-[120px]">
                            {/* PHASE HEADER */}
                            <PhaseNode className="top-0" />
                            <FadeUp delay={0.1} className="pl-0 md:pl-[120px]">
                                <Meta className="text-accent-base">06</Meta>
                                <h2 className="font-sans text-[40px] font-bold tracking-[-0.03em] text-white mt-[8px]">Evolve</h2>
                                <p className="font-sans text-[18px] font-normal italic text-white/[0.50] mt-[8px]">The launch is just the baseline.</p>
                            </FadeUp>

                            {/* CONTENT */}
                            <div className="mt-[40px] pl-0 md:pl-[120px] flex flex-col md:flex-row gap-[48px]">
                                {/* LEFT - Description */}
                                <FadeUp delay={0.3} className="flex-1 md:flex-[1.2]">
                                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8] mb-[20px]">
                                        Digital products are living organisms. They require maintenance, optimization, and constant evolution to stay ahead.
                                    </p>
                                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8]">
                                        Our post-launch partnerships are designed to scale with you — whether you need a dedicated fractional design team, ongoing engineering support, or monthly performance audits.
                                    </p>
                                </FadeUp>

                                {/* RIGHT - Partnership Tiers */}
                                <ScrollReveal delay={0.4} className="flex-1 flex flex-col gap-[16px]">
                                    {[
                                        { title: "Retainer Partnerships", desc: "Dedicated monthly hours for continuous iteration and new feature development." },
                                        { title: "Performance & SEO", desc: "Monthly audits, technical SEO updates, and conversion rate optimization." },
                                        { title: "Support & SLA", desc: "Guaranteed response times, uptime monitoring, and security patching." }
                                    ].map((tier, i) => (
                                        <div key={i} className="flex items-start gap-[16px] p-[20px] rounded-[12px] bg-white/[0.02] border border-white/[0.04]">
                                            <div className="w-[8px] h-[8px] rounded-full bg-accent-base/50 shrink-0 mt-[6px]" />
                                            <div>
                                                <h4 className="font-sans text-[14px] font-medium text-white mb-[4px]">{tier.title}</h4>
                                                <p className="font-sans text-[13px] font-normal text-white/[0.55] leading-[1.6]">{tier.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </ScrollReveal>
                            </div>

                            {/* MONITORING STRIP */}
                            <FadeUp delay={0.5} className="mt-[40px] pl-0 md:pl-[120px]">
                                <GlassPane padding="0" className="w-full flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/[0.06] bg-white/[0.01]">
                                    {[
                                        { label: "UPTIME TRACKING", value: "99.99%" },
                                        { label: "SECURITY AUDITS", value: "Quarterly" },
                                        { label: "FEATURE ROADMAP", value: "Continuous" }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex-1 p-[24px] flex flex-col items-center justify-center text-center">
                                            <Meta className="mb-[8px] text-white/[0.35]">{stat.label}</Meta>
                                            <span className="font-sans text-[18px] font-medium text-white">{stat.value}</span>
                                        </div>
                                    ))}
                                </GlassPane>
                            </FadeUp>
                        </Container>
                    </PhaseAtmosphere>
                </ProcessJourney>

                {/* AT A GLANCE TIMELINE SUMMARY */}
                <TimelineSummary />

                {/* CTA BAND */}
                <CTABand />
            </ScaleReveal>
        </main>
    );
}
