'use client';

import React, { useState, useEffect, useRef, useCallback, useId } from 'react';
import {
    motion,
    AnimatePresence,
    useReducedMotion,
    useScroll,
    useTransform,
    useInView,
} from 'framer-motion';
import { Container, Meta, GlassPane, Hairline } from '@/components/ui';
import { FadeUp, ScrollReveal } from '@/components/motion';
import { cn } from '@/lib/utils';
import { EASING } from '@/lib/constants';

/* ─────────────────────────── Phase Data ─────────────────────────── */

interface PhaseData {
    number: string;
    name: string;
    title: string;
    description: string;
    duration: string;
    yourTime: string;
    team: string;
    deliverables: string[];
}

const PHASES: PhaseData[] = [
    {
        number: '01',
        name: 'Discovery',
        title: 'We listen before we design.',
        description:
            'Every project starts with understanding — your business, your audience, the problem worth solving. We don\u2019t sketch a single pixel until the strategy is clear.',
        duration: '1\u20132 weeks',
        yourTime: '3\u20134 hours',
        team: 'Strategist + Lead',
        deliverables: [
            'Research findings & insights report',
            'Competitive landscape analysis',
            'Project brief with scope and success metrics',
            'Stakeholder alignment session',
        ],
    },
    {
        number: '02',
        name: 'Design',
        title: 'Strategy becomes something you can see.',
        description:
            'Brand direction, wireframes, and full-fidelity screens \u2014 tested with real users before a line of code is written. You see multiple directions and choose the one that fits.',
        duration: '2\u20134 weeks',
        yourTime: '2\u20133 sessions',
        team: 'Designer + Strategist',
        deliverables: [
            'Brand identity system or visual direction',
            'Wireframe prototypes',
            'Full-fidelity UI screens (every state)',
            'Interactive Figma prototype',
            'Design system documentation',
        ],
    },
    {
        number: '03',
        name: 'Build',
        title: 'Working software, every single week.',
        description:
            'Development happens in tight sprints with Friday demos. You see real progress weekly \u2014 not a reveal after months of silence. The designer reviews every build.',
        duration: '4\u20138 weeks',
        yourTime: '1 hour/week',
        team: 'Engineer + Designer',
        deliverables: [
            'Production-ready frontend (React/Next.js)',
            'CMS integration if needed',
            'Performance optimization (Lighthouse 95+)',
            'Responsive across all devices',
            'Deployment to staging for your review',
        ],
    },
    {
        number: '04',
        name: 'Launch & Evolve',
        title: 'We ship it, then we stay.',
        description:
            'Launch is handled \u2014 DNS, hosting, monitoring. But unlike most agencies, we don\u2019t disappear. Most clients stay on a retainer for continuous improvement.',
        duration: '1\u20132 weeks + ongoing',
        yourTime: 'Final sign-off',
        team: 'Full squad',
        deliverables: [
            'Production deployment and DNS setup',
            '48-hour post-launch monitoring',
            'Analytics and tracking configuration',
            'Ongoing retainer options',
            'Everything you own \u2014 code, designs, assets',
        ],
    },
];

/* ─────────────────────────── Component ─────────────────────────── */

export function Process() {
    const [activePhase, setActivePhase] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [sectionRevealed, setSectionRevealed] = useState(false);
    const reduced = useReducedMotion();
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const baseId = useId();
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    // Parallax for background text
    const { scrollYProgress } = useScroll({
        target: bgRef,
        offset: ['start end', 'end start'],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

    // Mark section as revealed once in view
    useEffect(() => {
        if (isInView && !sectionRevealed) {
            const t = setTimeout(() => setSectionRevealed(true), reduced ? 0 : 400);
            return () => clearTimeout(t);
        }
    }, [isInView, sectionRevealed, reduced]);

    // ── Auto-advance ──
    useEffect(() => {
        if (reduced || hasInteracted || !sectionRevealed) return;

        // Check if we're on mobile (below md)
        const mq = window.matchMedia('(max-width: 767px)');
        if (mq.matches) return;

        const id = setInterval(() => {
            setActivePhase((p) => (p + 1) % PHASES.length);
        }, 6000);

        return () => clearInterval(id);
    }, [reduced, hasInteracted, sectionRevealed]);

    const selectPhase = useCallback(
        (index: number) => {
            setHasInteracted(true);
            setActivePhase(index);
        },
        []
    );

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            let next = activePhase;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                next = Math.min(activePhase + 1, PHASES.length - 1);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                next = Math.max(activePhase - 1, 0);
            } else if (e.key === 'Home') {
                e.preventDefault();
                next = 0;
            } else if (e.key === 'End') {
                e.preventDefault();
                next = PHASES.length - 1;
            }
            if (next !== activePhase) selectPhase(next);
        },
        [activePhase, selectPhase]
    );

    const phase = PHASES[activePhase];
    const fillPercent = ((activePhase + 1) / PHASES.length) * 100;

    return (
        <section
            ref={sectionRef}
            id="process"
            aria-label="Our Process"
            className="relative w-full py-[64px] md:py-[96px] overflow-hidden"
        >
            {/* ── Hairline top ── */}
            <Hairline />

            {/* ── Ambient glow ── */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse at center, rgba(201,166,107,0.025) 0%, transparent 70%)',
                    opacity: sectionRevealed ? 1 : 0,
                    transition: 'opacity 1.2s ease',
                }}
                aria-hidden="true"
            />

            {/* ── Background "PROCESS" text ── */}
            <div ref={bgRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {!reduced ? (
                    <motion.div
                        style={{ y: bgY }}
                        className="hidden lg:block absolute right-[-24px] top-[80px] select-none"
                    >
                        <span
                            className="font-sans font-extrabold tracking-[-0.04em] text-[rgba(201,166,107,0.015)]"
                            style={{ fontSize: 'clamp(120px, 16vw, 200px)' }}
                        >
                            PROCESS
                        </span>
                    </motion.div>
                ) : (
                    <div className="hidden lg:block absolute right-[-24px] top-[80px] select-none">
                        <span
                            className="font-sans font-extrabold tracking-[-0.04em] text-[rgba(201,166,107,0.015)]"
                            style={{ fontSize: 'clamp(120px, 16vw, 200px)' }}
                        >
                            PROCESS
                        </span>
                    </div>
                )}
            </div>

            <Container>
                {/* ═══════════ SECTION HEADER ═══════════ */}
                <ScrollReveal>
                    <div className="mb-[56px]">
                        <div className="flex items-center justify-between mb-[16px]">
                            <Meta as="h2">OUR PROCESS</Meta>
                            <Meta accent>04 PHASES</Meta>
                        </div>
                        <FadeUp delay={reduced ? 0 : 0.1}>
                            <h3
                                className="font-sans text-[32px] font-semibold tracking-[-0.02em] text-white max-w-[500px]"
                            >
                                From first conversation to launch day.
                            </h3>
                        </FadeUp>
                        <FadeUp delay={reduced ? 0 : 0.2}>
                            <p className="mt-[12px] font-sans text-[15px] font-normal text-white/50">
                                A clear rhythm with no surprises.
                            </p>
                        </FadeUp>
                    </div>
                </ScrollReveal>

                {/* ═══════════ DESKTOP / TABLET TIMELINE (md+) ═══════════ */}
                <div className="hidden md:block">
                    <DesktopTimeline
                        activePhase={activePhase}
                        fillPercent={fillPercent}
                        selectPhase={selectPhase}
                        handleKeyDown={handleKeyDown}
                        sectionRevealed={sectionRevealed}
                        reduced={reduced}
                        baseId={baseId}
                    />

                    {/* ── Expanded Panel ── */}
                    <div className="mt-[40px]">
                        <AnimatePresence mode="wait">
                            <PhasePanel
                                key={activePhase}
                                phase={phase}
                                index={activePhase}
                                reduced={reduced}
                                baseId={baseId}
                            />
                        </AnimatePresence>
                    </div>

                    {/* ── Progress Dots ── */}
                    <ProgressDots
                        activePhase={activePhase}
                        selectPhase={selectPhase}
                        sectionRevealed={sectionRevealed}
                        reduced={reduced}
                    />
                </div>

                {/* ═══════════ MOBILE TIMELINE (below md) ═══════════ */}
                <div className="md:hidden">
                    <MobileTimeline
                        activePhase={activePhase}
                        selectPhase={selectPhase}
                        handleKeyDown={handleKeyDown}
                        sectionRevealed={sectionRevealed}
                        reduced={reduced}
                        baseId={baseId}
                    />
                </div>

                {/* ── Screen reader live region ── */}
                <div aria-live="polite" className="sr-only">
                    Phase {phase.number}: {phase.name} — {phase.title}
                </div>
            </Container>

            {/* ── Hairline bottom ── */}
            <div className="mt-[64px] md:mt-[96px]">
                <Hairline />
            </div>
        </section>
    );
}

/* ─────────────────────────── Desktop Timeline ─────────────────────────── */

function DesktopTimeline({
    activePhase,
    fillPercent,
    selectPhase,
    handleKeyDown,
    sectionRevealed,
    reduced,
    baseId,
}: {
    activePhase: number;
    fillPercent: number;
    selectPhase: (i: number) => void;
    handleKeyDown: (e: React.KeyboardEvent) => void;
    sectionRevealed: boolean;
    reduced: boolean | null;
    baseId: string;
}) {
    return (
        <div
            className="relative"
            style={{
                opacity: sectionRevealed ? 1 : 0,
                transition: reduced ? 'none' : 'opacity 0.8s ease 0.2s',
            }}
        >
            {/* Connector line */}
            <div className="absolute top-[7px] left-0 right-0 h-[1px] bg-white/[0.06]" />

            {/* Amber fill */}
            <div
                className="absolute top-[7px] left-0 h-[1px] origin-left"
                style={{
                    width: '100%',
                    transform: `scaleX(${fillPercent / 100})`,
                    background: 'rgba(201,166,107,0.3)',
                    transition: reduced ? 'none' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            />

            {/* Nodes */}
            <div
                role="tablist"
                aria-label="Process phases"
                className="relative flex justify-between"
                onKeyDown={handleKeyDown}
            >
                {PHASES.map((p, i) => {
                    const isActive = i === activePhase;
                    return (
                        <PhaseNode
                            key={i}
                            phase={p}
                            index={i}
                            isActive={isActive}
                            onClick={() => selectPhase(i)}
                            sectionRevealed={sectionRevealed}
                            reduced={reduced}
                            baseId={baseId}
                        />
                    );
                })}
            </div>
        </div>
    );
}

/* ─────────────────────────── Phase Node ─────────────────────────── */

function PhaseNode({
    phase,
    index,
    isActive,
    onClick,
    sectionRevealed,
    reduced,
    baseId,
}: {
    phase: PhaseData;
    index: number;
    isActive: boolean;
    onClick: () => void;
    sectionRevealed: boolean;
    reduced: boolean | null;
    baseId: string;
}) {
    const [showPulse, setShowPulse] = useState(false);

    // Trigger pulse once on activation
    useEffect(() => {
        if (isActive && sectionRevealed && !reduced) {
            setShowPulse(true);
            const t = setTimeout(() => setShowPulse(false), 1500);
            return () => clearTimeout(t);
        }
    }, [isActive, sectionRevealed, reduced]);

    const nodeDelay = reduced ? 0 : 0.4 + index * 0.1;

    return (
        <button
            type="button"
            role="tab"
            id={`${baseId}-tab-${index}`}
            aria-selected={isActive}
            aria-controls={`${baseId}-panel`}
            tabIndex={isActive ? 0 : -1}
            onClick={onClick}
            data-cursor={`PHASE \u00b7 ${phase.name.toUpperCase()}`}
            className="group flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-base focus-visible:ring-offset-2 focus-visible:ring-offset-[#060508] rounded-sm"
            style={{
                opacity: sectionRevealed ? 1 : 0,
                transform: sectionRevealed ? 'scale(1)' : 'scale(0)',
                transition: reduced
                    ? 'none'
                    : `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${nodeDelay}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${nodeDelay}s`,
            }}
        >
            {/* Circle + pulse */}
            <div className="relative w-[44px] h-[44px] flex items-center justify-center cursor-pointer">
                {/* Pulse ring */}
                {showPulse && (
                    <motion.div
                        initial={{ scale: 1, opacity: 0.2 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="absolute w-[14px] h-[14px] rounded-full border border-accent-base"
                    />
                )}

                {/* Main circle */}
                <div
                    className={cn(
                        'w-[14px] h-[14px] rounded-full border-[1.5px] transition-all duration-400',
                        isActive
                            ? 'bg-accent-base border-accent-base shadow-[0_0_16px_rgba(201,166,107,0.2),0_0_40px_rgba(201,166,107,0.06)]'
                            : 'bg-[#060508] border-white/[0.12] group-hover:border-white/25'
                    )}
                />
            </div>

            {/* Number */}
            <Meta
                className={cn(
                    'mt-[-8px] transition-opacity duration-300',
                    isActive ? 'text-accent-base !opacity-100' : 'text-accent-base opacity-50'
                )}
            >
                {phase.number}
            </Meta>

            {/* Name */}
            <span
                className={cn(
                    'mt-[6px] font-sans text-[14px] font-medium transition-colors duration-300',
                    isActive ? 'text-white' : 'text-white/50 group-hover:text-white/70'
                )}
            >
                {phase.name}
            </span>
        </button>
    );
}

/* ─────────────────────────── Phase Panel ─────────────────────────── */

function PhasePanel({
    phase,
    index,
    reduced,
    baseId,
}: {
    phase: PhaseData;
    index: number;
    reduced: boolean | null;
    baseId: string;
}) {
    return (
        <motion.div
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${index}`}
            initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            transition={
                reduced
                    ? { duration: 0 }
                    : {
                          duration: 0.35,
                          ease: EASING.smoothArray,
                          delay: 0.1,
                      }
            }
        >
            <GlassPane interactive hover>
                <div className="relative overflow-hidden">
                    {/* Warm top wash */}
                    <div
                        className="absolute inset-x-0 top-0 h-[120px] pointer-events-none z-0"
                        style={{
                            background:
                                'linear-gradient(180deg, rgba(201,166,107,0.03) 0%, transparent 100%)',
                        }}
                        aria-hidden="true"
                    />

                    <div className="relative z-10 p-[28px_24px] sm:p-[40px_36px]">
                        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[32px] lg:gap-[48px]">
                            {/* LEFT — Narrative */}
                            <div>
                                <Meta className="text-accent-base mb-[12px] block">
                                    PHASE {phase.number}
                                </Meta>
                                <h4 className="font-sans text-[24px] font-semibold text-nearWhite tracking-[-0.01em]">
                                    {phase.title}
                                </h4>
                                <p className="mt-[16px] font-sans text-[15px] font-normal leading-[1.7] text-white/[0.55] max-w-[440px]">
                                    {phase.description}
                                </p>

                                {/* Detail row */}
                                <div className="mt-[24px] flex flex-wrap gap-x-[32px] gap-y-[12px]">
                                    <DetailPair label="DURATION" value={phase.duration} />
                                    <DetailPair label="YOUR TIME" value={phase.yourTime} />
                                    <DetailPair label="TEAM" value={phase.team} />
                                </div>
                            </div>

                            {/* RIGHT — Deliverables */}
                            <div
                                className="rounded-[12px] p-[28px]"
                                style={{
                                    background: 'rgba(201,166,107,0.02)',
                                    border: '0.5px solid rgba(201,166,107,0.06)',
                                }}
                            >
                                <span className="font-sans text-[14px] font-medium text-white block mb-[16px]">
                                    What you receive
                                </span>
                                <ul className="flex flex-col gap-[12px]">
                                    {phase.deliverables.map((item, i) => (
                                        <motion.li
                                            key={item}
                                            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={
                                                reduced
                                                    ? { duration: 0 }
                                                    : {
                                                          duration: 0.4,
                                                          delay: 0.15 + i * 0.04,
                                                          ease: EASING.smoothArray,
                                                      }
                                            }
                                            className="flex items-start gap-[12px]"
                                        >
                                            <span
                                                className="w-[4px] h-[4px] rounded-full bg-accent-base mt-[7px] flex-shrink-0"
                                                aria-hidden="true"
                                            />
                                            <span className="font-sans text-[13px] font-normal leading-[1.6] text-white/[0.55]">
                                                {item}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </GlassPane>
        </motion.div>
    );
}

/* ─────────────────────────── Detail Pair ─────────────────────────── */

function DetailPair({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col gap-[4px]">
            <Meta>{label}</Meta>
            <span className="font-sans text-[14px] font-medium text-white">
                {value}
            </span>
        </div>
    );
}

/* ─────────────────────────── Progress Dots ─────────────────────────── */

function ProgressDots({
    activePhase,
    selectPhase,
    sectionRevealed,
    reduced,
}: {
    activePhase: number;
    selectPhase: (i: number) => void;
    sectionRevealed: boolean;
    reduced: boolean | null;
}) {
    return (
        <div
            className="mt-[20px] flex justify-center gap-[12px]"
            style={{
                opacity: sectionRevealed ? 1 : 0,
                transition: reduced ? 'none' : 'opacity 0.5s ease 1.3s',
            }}
        >
            {PHASES.map((_, i) => {
                const isActive = i === activePhase;
                return (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Go to phase ${i + 1}: ${PHASES[i].name}`}
                        onClick={() => selectPhase(i)}
                        className={cn(
                            'w-[6px] h-[6px] rounded-full transition-all duration-300 cursor-pointer',
                            'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-base focus-visible:ring-offset-2 focus-visible:ring-offset-[#060508]',
                            isActive
                                ? 'bg-accent-base shadow-[0_0_8px_rgba(201,166,107,0.3)]'
                                : 'bg-white/[0.12] hover:bg-white/25'
                        )}
                    />
                );
            })}
        </div>
    );
}

/* ─────────────────────────── Mobile Timeline ─────────────────────────── */

function MobileTimeline({
    activePhase,
    selectPhase,
    handleKeyDown,
    sectionRevealed,
    reduced,
    baseId,
}: {
    activePhase: number;
    selectPhase: (i: number) => void;
    handleKeyDown: (e: React.KeyboardEvent) => void;
    sectionRevealed: boolean;
    reduced: boolean | null;
    baseId: string;
}) {
    return (
        <div
            className="relative pl-[40px]"
            style={{
                opacity: sectionRevealed ? 1 : 0,
                transition: reduced ? 'none' : 'opacity 0.6s ease 0.3s',
            }}
        >
            {/* Vertical line */}
            <div
                className="absolute left-[6px] top-[7px] bottom-[7px] w-[1px] bg-white/[0.06]"
            />

            {/* Amber fill */}
            <div
                className="absolute left-[6px] top-[7px] w-[1px] origin-top"
                style={{
                    height: '100%',
                    transform: `scaleY(${((activePhase + 1) / PHASES.length)})`,
                    background: 'rgba(201,166,107,0.3)',
                    transition: reduced ? 'none' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            />

            <div
                role="tablist"
                aria-label="Process phases"
                aria-orientation="vertical"
                onKeyDown={handleKeyDown}
                className="flex flex-col gap-[24px]"
            >
                {PHASES.map((phase, i) => {
                    const isActive = i === activePhase;
                    return (
                        <div key={i}>
                            {/* Node row */}
                            <button
                                type="button"
                                role="tab"
                                id={`${baseId}-tab-mobile-${i}`}
                                aria-selected={isActive}
                                aria-controls={`${baseId}-panel-mobile-${i}`}
                                tabIndex={isActive ? 0 : -1}
                                onClick={() => selectPhase(i)}
                                className="group flex items-center gap-[16px] w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-base focus-visible:ring-offset-2 focus-visible:ring-offset-[#060508] rounded-sm"
                            >
                                {/* Circle (positioned on the vertical line) */}
                                <div
                                    className="absolute left-0 w-[44px] h-[44px] flex items-center justify-center"
                                    style={{ left: '-15px' }}
                                >
                                    <div
                                        className={cn(
                                            'w-[14px] h-[14px] rounded-full border-[1.5px] transition-all duration-400',
                                            isActive
                                                ? 'bg-accent-base border-accent-base shadow-[0_0_16px_rgba(201,166,107,0.2)]'
                                                : 'bg-[#060508] border-white/[0.12]'
                                        )}
                                    />
                                </div>

                                {/* Name & number */}
                                <div className="flex items-baseline gap-[8px]">
                                    <Meta className={cn('text-accent-base', isActive ? 'opacity-100' : 'opacity-50')}>
                                        {phase.number}
                                    </Meta>
                                    <span
                                        className={cn(
                                            'font-sans text-[16px] font-medium transition-colors duration-300',
                                            isActive ? 'text-white' : 'text-white/50'
                                        )}
                                    >
                                        {phase.name}
                                    </span>
                                </div>
                            </button>

                            {/* Expanded panel for active phase */}
                            <AnimatePresence initial={false}>
                                {isActive && (
                                    <motion.div
                                        id={`${baseId}-panel-mobile-${i}`}
                                        role="tabpanel"
                                        aria-labelledby={`${baseId}-tab-mobile-${i}`}
                                        initial={reduced ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={reduced ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
                                        transition={
                                            reduced
                                                ? { duration: 0 }
                                                : { duration: 0.4, ease: EASING.smoothArray }
                                        }
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-[20px]">
                                            <GlassPane hover>
                                                <div className="relative overflow-hidden">
                                                    <div
                                                        className="absolute inset-x-0 top-0 h-[80px] pointer-events-none"
                                                        style={{
                                                            background:
                                                                'linear-gradient(180deg, rgba(201,166,107,0.03) 0%, transparent 100%)',
                                                        }}
                                                        aria-hidden="true"
                                                    />

                                                    <div className="relative z-10 p-[24px_20px]">
                                                        <Meta className="text-accent-base mb-[10px] block">
                                                            PHASE {phase.number}
                                                        </Meta>
                                                        <h4 className="font-sans text-[20px] font-semibold text-nearWhite tracking-[-0.01em]">
                                                            {phase.title}
                                                        </h4>
                                                        <p className="mt-[12px] font-sans text-[14px] font-normal leading-[1.7] text-white/[0.55]">
                                                            {phase.description}
                                                        </p>

                                                        {/* Detail row */}
                                                        <div className="mt-[20px] flex flex-wrap gap-x-[24px] gap-y-[12px]">
                                                            <DetailPair label="DURATION" value={phase.duration} />
                                                            <DetailPair label="YOUR TIME" value={phase.yourTime} />
                                                            <DetailPair label="TEAM" value={phase.team} />
                                                        </div>

                                                        {/* Deliverables */}
                                                        <div
                                                            className="mt-[20px] rounded-[10px] p-[20px]"
                                                            style={{
                                                                background: 'rgba(201,166,107,0.02)',
                                                                border: '0.5px solid rgba(201,166,107,0.06)',
                                                            }}
                                                        >
                                                            <span className="font-sans text-[13px] font-medium text-white block mb-[12px]">
                                                                What you receive
                                                            </span>
                                                            <ul className="flex flex-col gap-[10px]">
                                                                {phase.deliverables.map((item) => (
                                                                    <li
                                                                        key={item}
                                                                        className="flex items-start gap-[10px]"
                                                                    >
                                                                        <span
                                                                            className="w-[4px] h-[4px] rounded-full bg-accent-base mt-[6px] flex-shrink-0"
                                                                            aria-hidden="true"
                                                                        />
                                                                        <span className="font-sans text-[12px] font-normal leading-[1.6] text-white/[0.55]">
                                                                            {item}
                                                                        </span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </GlassPane>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
