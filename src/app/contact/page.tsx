'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import {
    Mail,
    ArrowUpRight,
    Calendar,
    Clock,
    MapPin,
    Globe,
    Shield,
    Lock,
    MessageCircle,
} from 'lucide-react';
import {
    Container,
    Meta,
    GlassPane,
    Button,
    StatusDot,
    Hairline,
} from '@/components/ui';
import {
    ScaleReveal,
    FadeUp,
    ScrollReveal,
    StaggerGroup,
    StaggerItem,
} from '@/components/motion';
import { cn } from '@/lib/utils';
import { CustomSelect } from '@/components/contact/CustomSelect';
import { FormField } from '@/components/contact/FormField';
import { SuccessState } from '@/components/contact/SuccessState';
import { FAQAccordion } from '@/components/contact/FAQAccordion';

/* ─────────────────────────── Studio Status ─────────────────────────── */

function useStudioStatus() {
    const [status, setStatus] = useState<'online' | 'offline'>('offline');

    useEffect(() => {
        const check = () => {
            const parts = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Europe/Brussels',
                hour: 'numeric',
                hourCycle: 'h23',
                weekday: 'short',
            }).formatToParts(new Date());

            const day = parts.find((p) => p.type === 'weekday')?.value ?? '';
            const hour = parseInt(
                parts.find((p) => p.type === 'hour')?.value ?? '0',
                10
            );
            const isOpen =
                ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day) &&
                hour >= 9 &&
                hour < 18;
            setStatus(isOpen ? 'online' : 'offline');
        };

        check();
        const id = setInterval(check, 60_000);
        return () => clearInterval(id);
    }, []);

    return status;
}

/* ─────────────────────────── Constants ─────────────────────────── */

const SERVICE_OPTIONS = [
    { value: 'brand-identity', label: 'Brand Identity' },
    { value: 'web-design', label: 'Web Design & Development' },
    { value: 'digital-experience', label: 'Digital Experience' },
    { value: 'creative-direction', label: 'Creative Direction' },
    { value: 'motion-design', label: 'Motion Design' },
    { value: 'other', label: 'Something Else' },
];

const BUDGET_OPTIONS = [
    { value: '10-25k', label: '€10k – €25k' },
    { value: '25-50k', label: '€25k – €50k' },
    { value: '50-100k', label: '€50k – €100k' },
    { value: '100k+', label: '€100k+' },
    { value: 'not-sure', label: 'Not sure yet' },
];

const TIMELINE_OPTIONS = [
    { value: 'asap', label: 'As soon as possible' },
    { value: '1-2-months', label: '1 – 2 months' },
    { value: '3-6-months', label: '3 – 6 months' },
    { value: 'flexible', label: 'Flexible' },
];

const FAQ_ITEMS = [
    {
        question: 'What happens after I submit a brief?',
        answer: 'We review your brief internally within 24 hours. A strategist will reach out to schedule a discovery call where we dive deeper into your goals, timeline, and vision. There\'s no commitment at this stage — it\'s simply a conversation.',
    },
    {
        question: 'Do you work with early-stage startups?',
        answer: 'Absolutely. We\'ve partnered with teams at every stage — from pre-seed founders to established enterprises. What matters most is alignment on ambition and a willingness to invest in quality craft.',
    },
    {
        question: 'What does a typical engagement look like?',
        answer: 'Most projects span 6 – 12 weeks and follow our four-phase process: Discovery, Define, Design, and Deliver. We work in close collaboration with your team, with weekly check-ins and transparent progress updates.',
    },
    {
        question: 'Can you work with our existing brand?',
        answer: 'Yes. Whether you need a full rebrand or want to evolve what you have, we\'re comfortable working within existing brand systems. We often refine and extend existing identities rather than starting from scratch.',
    },
];

/* ─────────────────────────── Form Types ─────────────────────────── */

interface FormData {
    name: string;
    email: string;
    company: string;
    service: string;
    budget: string;
    timeline: string;
    details: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL_FORM: FormData = {
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    details: '',
};

/* ─────────────────────────── Page Component ─────────────────────────── */

export default function ContactPage() {
    const searchParams = useSearchParams();
    const prefersReducedMotion = useReducedMotion();
    const studioStatus = useStudioStatus();
    const successRef = useRef<HTMLHeadingElement>(null!);
    const heroRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });
    const helloY = useTransform(scrollYProgress, [0, 1], [0, 80]);

    // Form state
    const [form, setForm] = useState<FormData>(() => {
        const preselectedService = searchParams?.get('service') || '';
        return { ...INITIAL_FORM, service: preselectedService };
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const updateField = useCallback(
        (field: keyof FormData) =>
            (
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
                setForm((f) => ({ ...f, [field]: e.target.value }));
            },
        []
    );

    const updateSelect = useCallback(
        (field: keyof FormData) => (value: string) => {
            setForm((f) => ({ ...f, [field]: value }));
        },
        []
    );

    // Count completed fields for progress
    const completedFields = useMemo(() => {
        let count = 0;
        if (form.name.trim()) count++;
        if (form.email.trim()) count++;
        if (form.company.trim()) count++;
        if (form.service) count++;
        if (form.budget) count++;
        if (form.timeline) count++;
        if (form.details.trim()) count++;
        return count;
    }, [form]);

    const isFormValid = form.name.trim() && form.email.trim() && form.service;
    const buttonOpacity = Math.max(0.4, Math.min(1, 0.4 + (completedFields / 7) * 0.6));

    // Submit handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setStatus('submitting');
        setErrorMessage('');

        try {
            // TODO: Replace with API endpoint
            console.log('Form submission:', form);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setStatus('success');
            // Focus success heading after render
            setTimeout(() => successRef.current?.focus(), 100);
        } catch {
            setStatus('error');
            setErrorMessage(
                'Something went wrong. Please try again or email us directly.'
            );
        }
    };

    return (
        <main id="main" className="min-h-screen bg-black">
            {/* ═══════════════ PAGE HEADER ═══════════════ */}
            <section ref={heroRef} className="relative overflow-hidden">
                {/* Ambient glow */}
                <div
                    className="absolute top-[10%] left-[20%] w-[600px] h-[600px] pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(ellipse at center, rgba(201,166,107,0.04) 0%, transparent 70%)',
                    }}
                    aria-hidden="true"
                />

                {/* "HELLO" background text */}
                {!prefersReducedMotion ? (
                    <motion.div
                        style={{ y: helloY }}
                        className="hidden lg:block absolute right-[48px] top-[140px] pointer-events-none select-none"
                        aria-hidden="true"
                    >
                        <span
                            className="font-sans font-bold tracking-[-0.04em] text-white/[0.02]"
                            style={{
                                fontSize: 'clamp(140px, 20vw, 240px)',
                            }}
                        >
                            HELLO
                        </span>
                    </motion.div>
                ) : (
                    <div
                        className="hidden lg:block absolute right-[48px] top-[140px] pointer-events-none select-none"
                        aria-hidden="true"
                    >
                        <span
                            className="font-sans font-bold tracking-[-0.04em] text-white/[0.02]"
                            style={{
                                fontSize: 'clamp(140px, 20vw, 240px)',
                            }}
                        >
                            HELLO
                        </span>
                    </div>
                )}

                <Container className="pt-[120px] pb-[48px]">
                    <ScaleReveal>
                        <FadeUp delay={0.1}>
                            <Meta className="text-accent-base mb-[24px] block">
                                LET&apos;S TALK
                            </Meta>
                        </FadeUp>

                        <FadeUp delay={0.25}>
                            <h1 className="font-sans font-bold tracking-[-0.03em] text-white mb-[24px]" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.05 }}>
                                Tell us about
                                <br />
                                <span className="italic font-normal text-white/50">
                                    your vision.
                                </span>
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.4}>
                            <p className="font-sans text-[17px] leading-[1.6] text-white/[0.72] max-w-[480px] mb-[24px]">
                                Share a few details about your project. The more
                                context you provide, the better we can prepare
                                for our first conversation.
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.55}>
                            <div className="flex items-center gap-[10px]">
                                <StatusDot
                                    status={
                                        studioStatus === 'online'
                                            ? 'online'
                                            : 'amber'
                                    }
                                />
                                <Meta>
                                    {studioStatus === 'online'
                                        ? 'Studio open — Brussels, CET'
                                        : 'Studio closed — we\'ll reply next business day'}
                                </Meta>
                            </div>
                        </FadeUp>
                    </ScaleReveal>
                </Container>
            </section>

            <Hairline />

            {/* ═══════════════ DUAL-PATH LAYOUT ═══════════════ */}
            <section className="py-[64px] md:py-[80px]">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-[48px]">
                        {/* ── LEFT: Project Brief Form ── */}
                        <ScaleReveal delay={prefersReducedMotion ? 0 : 0.65}>
                            <GlassPane
                                interactive
                                className="border-[rgba(201,166,107,0.06)]"
                                hover
                            >
                                <div
                                    className="p-[28px_20px] sm:p-[40px_36px]"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, rgba(201,166,107,0.02) 0%, transparent 60%)',
                                    }}
                                >
                                    {status === 'success' ? (
                                        <SuccessState successRef={successRef} />
                                    ) : (
                                        <>
                                            <div className="flex items-center justify-between mb-[36px]">
                                                <Meta className="text-accent-base">
                                                    PROJECT BRIEF
                                                </Meta>
                                                <Meta>
                                                    {completedFields} / 7
                                                </Meta>
                                            </div>

                                            <form
                                                onSubmit={handleSubmit}
                                                noValidate
                                                className="flex flex-col gap-[32px]"
                                            >
                                                {/* Name & Email row */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
                                                    <FormField
                                                        label="Name"
                                                        name="name"
                                                        required
                                                        autoComplete="name"
                                                        value={form.name}
                                                        onChange={updateField('name')}
                                                        isValid={form.name.trim().length > 1}
                                                    />
                                                    <FormField
                                                        label="Email"
                                                        name="email"
                                                        type="email"
                                                        required
                                                        autoComplete="email"
                                                        value={form.email}
                                                        onChange={updateField('email')}
                                                        isValid={/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)}
                                                    />
                                                </div>

                                                {/* Company */}
                                                <FormField
                                                    label="Company"
                                                    name="company"
                                                    autoComplete="organization"
                                                    value={form.company}
                                                    onChange={updateField('company')}
                                                    isValid={form.company.trim().length > 0}
                                                />

                                                {/* Service select */}
                                                <div>
                                                    <label
                                                        htmlFor="service-select"
                                                        className="sr-only"
                                                    >
                                                        Service interested in
                                                        (required)
                                                    </label>
                                                    <CustomSelect
                                                        id="service-select"
                                                        name="service"
                                                        options={SERVICE_OPTIONS}
                                                        value={form.service}
                                                        onChange={updateSelect('service')}
                                                        placeholder="Service interested in"
                                                    />
                                                </div>

                                                {/* Budget & Timeline row */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
                                                    <div>
                                                        <label
                                                            htmlFor="budget-select"
                                                            className="sr-only"
                                                        >
                                                            Budget range
                                                        </label>
                                                        <CustomSelect
                                                            id="budget-select"
                                                            name="budget"
                                                            options={BUDGET_OPTIONS}
                                                            value={form.budget}
                                                            onChange={updateSelect('budget')}
                                                            placeholder="Budget range"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label
                                                            htmlFor="timeline-select"
                                                            className="sr-only"
                                                        >
                                                            Timeline
                                                        </label>
                                                        <CustomSelect
                                                            id="timeline-select"
                                                            name="timeline"
                                                            options={TIMELINE_OPTIONS}
                                                            value={form.timeline}
                                                            onChange={updateSelect('timeline')}
                                                            placeholder="Timeline"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Details textarea */}
                                                <div className="pb-[8px]">
                                                    <FormField
                                                        label="Project details"
                                                        name="details"
                                                        as="textarea"
                                                        rows={5}
                                                        maxLength={2000}
                                                        value={form.details}
                                                        onChange={updateField('details')}
                                                        placeholder="Tell us about your project, goals, and any specific requirements..."
                                                    />
                                                </div>

                                                {/* Error message */}
                                                {status === 'error' && (
                                                    <div className="font-sans text-[14px] text-[rgba(239,68,68,0.8)]">
                                                        {errorMessage}{' '}
                                                        <a
                                                            href="mailto:hello@imaginta.com"
                                                            className="underline hover:text-white transition-colors"
                                                        >
                                                            hello@imaginta.com
                                                        </a>
                                                    </div>
                                                )}

                                                {/* Submit */}
                                                <div>
                                                    <Button
                                                        type="submit"
                                                        className={cn(
                                                            'w-full transition-opacity duration-400',
                                                            status === 'submitting' && 'pointer-events-none'
                                                        )}
                                                    >
                                                        <span
                                                            style={{ opacity: buttonOpacity }}
                                                            aria-disabled={!isFormValid || status === 'submitting'}
                                                        >
                                                            {status === 'submitting'
                                                                ? 'Sending brief...'
                                                                : 'Send Brief'}
                                                        </span>
                                                    </Button>
                                                </div>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </GlassPane>
                        </ScaleReveal>

                        {/* ── RIGHT: Quick Contact + Info ── */}
                        <div className="flex flex-col gap-[24px]">
                            {/* Quick Contact */}
                            <FadeUp delay={prefersReducedMotion ? 0 : 0.75}>
                                <GlassPane hover>
                                    <div className="p-[28px_24px]">
                                        <Meta className="text-accent-base mb-[20px] block">
                                            QUICK CONTACT
                                        </Meta>
                                        <div className="flex flex-col gap-[16px]">
                                            <a
                                                href="mailto:hello@imaginta.com"
                                                className="group flex items-center gap-[12px] font-sans text-[15px] text-white/70 hover:text-white transition-colors duration-300"
                                            >
                                                <Mail
                                                    size={16}
                                                    className="text-white/35 group-hover:text-accent-base transition-colors duration-300"
                                                />
                                                hello@imaginta.com
                                                <ArrowUpRight
                                                    size={12}
                                                    className="text-white/20 group-hover:text-white/50 transition-colors duration-300 ml-auto"
                                                />
                                            </a>
                                            <a
                                                href="https://cal.com/imaginta"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center gap-[12px] font-sans text-[15px] text-white/70 hover:text-white transition-colors duration-300"
                                            >
                                                <Calendar
                                                    size={16}
                                                    className="text-white/35 group-hover:text-accent-base transition-colors duration-300"
                                                />
                                                Schedule a call
                                                <ArrowUpRight
                                                    size={12}
                                                    className="text-white/20 group-hover:text-white/50 transition-colors duration-300 ml-auto"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </GlassPane>
                            </FadeUp>

                            {/* Response Times */}
                            <FadeUp delay={prefersReducedMotion ? 0 : 0.9}>
                                <GlassPane>
                                    <div className="p-[28px_24px]">
                                        <Meta className="text-accent-base mb-[20px] block">
                                            RESPONSE TIMES
                                        </Meta>
                                        <div className="flex flex-col gap-[12px]">
                                            <div className="flex items-center gap-[12px]">
                                                <Clock
                                                    size={14}
                                                    className="text-white/35 flex-shrink-0"
                                                />
                                                <span className="font-sans text-[14px] text-white/60">
                                                    Briefs reviewed within{' '}
                                                    <span className="text-white/90">24 hours</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-[12px]">
                                                <MessageCircle
                                                    size={14}
                                                    className="text-white/35 flex-shrink-0"
                                                />
                                                <span className="font-sans text-[14px] text-white/60">
                                                    Discovery call within{' '}
                                                    <span className="text-white/90">48 hours</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </GlassPane>
                            </FadeUp>

                            {/* Studio Details */}
                            <FadeUp delay={prefersReducedMotion ? 0 : 1.05}>
                                <GlassPane>
                                    <div className="p-[28px_24px]">
                                        <Meta className="text-accent-base mb-[20px] block">
                                            STUDIO
                                        </Meta>
                                        <div className="flex flex-col gap-[12px]">
                                            <div className="flex items-center gap-[12px]">
                                                <MapPin
                                                    size={14}
                                                    className="text-white/35 flex-shrink-0"
                                                />
                                                <span className="font-sans text-[14px] text-white/60">
                                                    Brussels, Belgium
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-[12px]">
                                                <Globe
                                                    size={14}
                                                    className="text-white/35 flex-shrink-0"
                                                />
                                                <span className="font-sans text-[14px] text-white/60">
                                                    Working with clients globally
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-[12px]">
                                                <Clock
                                                    size={14}
                                                    className="text-white/35 flex-shrink-0"
                                                />
                                                <span className="font-sans text-[14px] text-white/60">
                                                    Mon – Fri, 9:00 – 18:00 CET
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </GlassPane>
                            </FadeUp>
                        </div>
                    </div>
                </Container>
            </section>

            <Hairline />

            {/* ═══════════════ TRUST SECTION ═══════════════ */}
            <section className="py-[64px] md:py-[80px]">
                <Container>
                    <ScrollReveal>
                        <Meta className="text-accent-base mb-[40px] block text-center">
                            WHY WORK WITH US
                        </Meta>
                    </ScrollReveal>

                    <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                        <StaggerItem>
                            <GlassPane hover className="h-full">
                                <div className="p-[32px]">
                                    <div className="w-[40px] h-[40px] rounded-full bg-white/[0.04] flex items-center justify-center mb-[20px]">
                                        <Shield
                                            size={18}
                                            className="text-accent-base"
                                        />
                                    </div>
                                    <h3 className="font-sans text-[17px] font-medium text-white mb-[8px]">
                                        Trusted Process
                                    </h3>
                                    <p className="font-sans text-[14px] leading-[1.6] text-white/50">
                                        Four structured phases with clear
                                        milestones, weekly check-ins, and
                                        transparent pricing. No surprises.
                                    </p>
                                </div>
                            </GlassPane>
                        </StaggerItem>

                        <StaggerItem>
                            <GlassPane hover className="h-full">
                                <div className="p-[32px]">
                                    <div className="w-[40px] h-[40px] rounded-full bg-white/[0.04] flex items-center justify-center mb-[20px]">
                                        <Lock
                                            size={18}
                                            className="text-accent-base"
                                        />
                                    </div>
                                    <h3 className="font-sans text-[17px] font-medium text-white mb-[8px]">
                                        NDA-Ready
                                    </h3>
                                    <p className="font-sans text-[14px] leading-[1.6] text-white/50">
                                        Happy to sign NDAs before any discovery
                                        call. Your ideas and business
                                        information stay confidential.
                                    </p>
                                </div>
                            </GlassPane>
                        </StaggerItem>

                        <StaggerItem>
                            <GlassPane hover className="h-full">
                                <div className="p-[32px]">
                                    <div className="w-[40px] h-[40px] rounded-full bg-white/[0.04] flex items-center justify-center mb-[20px]">
                                        <MessageCircle
                                            size={18}
                                            className="text-accent-base"
                                        />
                                    </div>
                                    <h3 className="font-sans text-[17px] font-medium text-white mb-[8px]">
                                        No-Commitment Chat
                                    </h3>
                                    <p className="font-sans text-[14px] leading-[1.6] text-white/50">
                                        The first conversation is always free.
                                        We&apos;ll give you honest feedback on
                                        scope, timeline, and fit.
                                    </p>
                                </div>
                            </GlassPane>
                        </StaggerItem>
                    </StaggerGroup>
                </Container>
            </section>

            <Hairline />

            {/* ═══════════════ FAQ SECTION ═══════════════ */}
            <section className="py-[64px] md:py-[80px]">
                <Container className="max-w-[720px]">
                    <ScrollReveal>
                        <Meta className="text-accent-base mb-[40px] block text-center">
                            FREQUENTLY ASKED
                        </Meta>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <FAQAccordion items={FAQ_ITEMS} />
                    </ScrollReveal>
                </Container>
            </section>

            <Hairline />

            {/* ═══════════════ CLOSING ═══════════════ */}
            <section className="py-[80px] md:py-[120px]">
                <Container className="flex flex-col items-center text-center">
                    <ScrollReveal>
                        <span className="font-sans text-[24px] md:text-[32px] font-semibold tracking-[-0.02em] text-white">
                            imaginta
                            <span className="text-accent-base">.</span>
                        </span>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <p className="font-sans text-[15px] italic text-white/35 mt-[16px] max-w-[320px]">
                            Every great partnership starts with a conversation.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <Hairline className="w-[48px] mt-[32px]" />
                    </ScrollReveal>
                </Container>
            </section>
        </main>
    );
}
