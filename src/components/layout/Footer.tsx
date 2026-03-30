'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
    AnimatePresence,
} from 'framer-motion';
import {
    Mail,
    ArrowUpRight,
    Calendar,
    Instagram,
    Linkedin,
    Twitter,
    Facebook,
    Github,
    ChevronUp,
    Globe,
} from 'lucide-react';
import { Container, Meta, StatusDot } from '@/components/ui';
import { ScrollReveal } from '@/components/motion';
import { cn } from '@/lib/utils';
import { EASING, COLORS } from '@/lib/constants';
import { useStudioStatus } from '@/hooks/useStudioStatus';

// ── Brussels business hours schedule hook (useStudioStatus) ──

// ── Live Brussels Time ──

function useBrusselsTime() {
    const [time, setTime] = useState('');
    const [colonVisible, setColonVisible] = useState(true);

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            const fmt = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Europe/Brussels',
                hour: '2-digit',
                minute: '2-digit',
                hourCycle: 'h23',
            });
            setTime(fmt.format(now));
            setColonVisible((prev) => !prev);
        };

        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return { time, colonVisible };
}

// ── Scroll progress for back-to-top ring ──

function useScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return progress;
}

// ── Data ──

const NAV_LINKS = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
];

const SERVICE_LINKS = [
    { label: 'Brand Identity', href: '/services#brand' },
    { label: 'Product Design', href: '/services#product' },
    { label: 'Development', href: '/services#dev' },
    { label: 'AI Integration', href: '/services#ai' },
];

// ── Custom X Icon ──

const XIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.311 17.404z" />
    </svg>
);

const SOCIAL_LINKS = [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/imagintax1', icon: Linkedin },
    { label: 'Instagram', href: 'https://instagram.com/imagintax1', icon: Instagram },
    { label: 'Facebook', href: 'https://facebook.com/imagintax1', icon: Facebook },
    { label: 'X', href: 'https://x.com/imagintax1', icon: XIcon },
    { label: 'GitHub', href: 'https://github.com/imagintax1', icon: Github },
];

const MARQUEE_ITEMS = [
    'BRAND IDENTITY',
    'PRODUCT DESIGN',
    'DEVELOPMENT',
    'AI INTEGRATION',
    'STRATEGY',
    'INNOVATION',
];

// ── Animated divider line ──

function AnimatedDivider({ className, delay = 0 }: { className?: string; delay?: number }) {
    const reduced = useReducedMotion();
    return (
        <motion.div
            className={cn('h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent', className)}
            initial={reduced ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, delay, ease: EASING.smoothArray }}
        />
    );
}

// ── Hover-reveal link ──

function FooterLink({
    href,
    children,
    isActive,
    external,
}: {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
    external?: boolean;
}) {
    const LinkTag = external ? 'a' : Link;
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <LinkTag
            href={href}
            {...externalProps}
            className={cn(
                'group relative text-[15px] leading-relaxed transition-colors duration-300 inline-flex items-center gap-1',
                isActive ? 'text-white font-medium' : 'text-white/50 hover:text-white'
            )}
        >
            <span className="relative">
                {children}
                <span className="absolute -bottom-px left-0 h-px w-0 bg-accent-base transition-all duration-500 ease-smooth group-hover:w-full" />
            </span>
            {external && (
                <ArrowUpRight
                    size={12}
                    className="opacity-0 -translate-y-1 translate-x-[-2px] transition-all duration-300 group-hover:opacity-60 group-hover:translate-y-0 group-hover:translate-x-0"
                />
            )}
        </LinkTag>
    );
}

// ── Social link with label reveal ──

function SocialLink({ social }: { social: (typeof SOCIAL_LINKS)[number] }) {
    const [hovered, setHovered] = useState(false);
    const reduced = useReducedMotion();

    return (
        <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3"
            title={social.label}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.06] transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20 group-hover:shadow-[0_0_20px_rgba(201,166,107,0.06)]">
                <social.icon
                    size={17}
                    className="text-white/30 transition-all duration-500 group-hover:text-white group-hover:scale-110"
                />
            </div>
            <AnimatePresence>
                {hovered && !reduced && (
                    <motion.span
                        initial={{ opacity: 0, x: -6, width: 0 }}
                        animate={{ opacity: 1, x: 0, width: 'auto' }}
                        exit={{ opacity: 0, x: -6, width: 0 }}
                        transition={{ duration: 0.3, ease: EASING.smoothArray }}
                        className="text-[12px] font-medium tracking-wider uppercase text-white/60 whitespace-nowrap overflow-hidden"
                    >
                        {social.label}
                    </motion.span>
                )}
            </AnimatePresence>
        </a>
    );
}

// ── Back to top button with scroll progress ring ──

function BackToTop() {
    const progress = useScrollProgress();
    const reduced = useReducedMotion();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const circumference = 2 * Math.PI * 18;
    const strokeDashoffset = circumference * (1 - progress);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    type="button"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, ease: EASING.smoothArray }}
                    className="group fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center"
                    aria-label="Scroll to top"
                >
                    {/* Progress ring */}
                    <svg
                        className="absolute inset-0 -rotate-90"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                    >
                        <circle
                            cx="24"
                            cy="24"
                            r="18"
                            fill="none"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="1.5"
                        />
                        <circle
                            cx="24"
                            cy="24"
                            r="18"
                            fill="none"
                            stroke={COLORS.accent.base}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-150"
                        />
                    </svg>
                    {/* Background */}
                    <div className="absolute inset-[3px] rounded-full bg-black/80 backdrop-blur-sm border border-white/[0.06] transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/10" />
                    {/* Icon */}
                    <ChevronUp
                        size={16}
                        className="relative z-10 text-white/50 transition-all duration-300 group-hover:text-white group-hover:-translate-y-px"
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

// ── Marquee ticker ──

function MarqueeTicker() {
    const reduced = useReducedMotion();

    const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

    return (
        <div className="relative w-full overflow-hidden py-6" aria-hidden="true">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex items-center gap-8 whitespace-nowrap"
                animate={reduced ? undefined : { x: ['0%', '-33.333%'] }}
                transition={{
                    x: { duration: 30, repeat: Infinity, ease: 'linear' },
                }}
            >
                {items.map((item, i) => (
                    <React.Fragment key={i}>
                        <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/[0.12]">
                            {item}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-accent-base/20 shrink-0" />
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
}

// ── Main Footer ──

export function Footer() {
    const pathname = usePathname();
    const studioStatus = useStudioStatus();
    const { time, colonVisible } = useBrusselsTime();
    const reduced = useReducedMotion();
    const footerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ['start end', 'end end'],
    });

    const wordmarkY = useTransform(scrollYProgress, [0, 1], [120, 0]);
    const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    // Column stagger
    const colVariants = {
        hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: reduced ? 0 : 0.9,
                delay: reduced ? 0 : 0.15 * i,
                ease: EASING.smoothArray,
            },
        }),
    };

    return (
        <>
            <footer
                ref={footerRef}
                aria-label="Site footer"
                className="relative overflow-hidden bg-black pt-32 pb-8 border-t border-white/[0.04]"
            >
                {/* ── Background atmosphere ── */}
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    aria-hidden="true"
                >
                    {/* Primary gradient orb */}
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] opacity-30"
                        style={{
                            background:
                                'radial-gradient(ellipse at center top, rgba(201,166,107,0.08) 0%, rgba(201,166,107,0.02) 40%, transparent 70%)',
                        }}
                    />
                    {/* Secondary accent orb */}
                    <div
                        className="absolute top-[20%] right-[10%] w-[400px] h-[400px] opacity-20"
                        style={{
                            background:
                                'radial-gradient(circle, rgba(201,166,107,0.04) 0%, transparent 70%)',
                        }}
                    />
                    {/* Subtle grid texture */}
                    <div
                        className="absolute inset-0 opacity-[0.015]"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '80px 80px',
                        }}
                    />
                </div>

                {/* ── Parallax wordmark ── */}
                <div
                    className="absolute bottom-[-6%] left-1/2 -translate-x-1/2 w-full z-0 select-none pointer-events-none overflow-hidden flex justify-center"
                    aria-hidden="true"
                >
                    <motion.h2
                        className="text-[22vw] font-bold leading-none tracking-[-0.06em] text-transparent bg-clip-text"
                        style={{
                            y: reduced ? 0 : wordmarkY,
                            opacity: reduced ? 0.5 : wordmarkOpacity,
                            backgroundImage:
                                'linear-gradient(180deg, rgba(201,166,107,0.12) 0%, rgba(255,255,255,0.03) 100%)',
                        }}
                    >
                        IMAGINTA
                    </motion.h2>
                </div>

                <Container className="relative z-10">
                    {/* ═══════════════════════════════════════════
                         TIER 1 — HERO CTA
                    ═══════════════════════════════════════════ */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 mb-20">
                        {/* Left — headline */}
                        <div className="max-w-[580px]">
                            <ScrollReveal>
                                <Meta className="mb-6 text-accent-base/50">
                                    LET&apos;S CREATE TOGETHER
                                </Meta>
                                <h2 className="text-[clamp(36px,5vw,64px)] font-semibold leading-[1.05] tracking-[-0.035em] text-white">
                                    Have a vision?
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-base to-[#E8D5B5]">
                                        Let&apos;s make it real.
                                    </span>
                                </h2>
                                <p className="mt-8 text-[17px] leading-[1.7] text-white/60 max-w-[460px]">
                                    We partner with ambitious brands to design and develop digital
                                    experiences that move the needle. Limited spots each quarter.
                                </p>
                            </ScrollReveal>
                        </div>

                        {/* Right — action cards */}
                        <div className="w-full lg:w-auto flex flex-col gap-4 lg:mt-4">
                            <ScrollReveal delay={0.15}>
                                <Link
                                    href="/contact"
                                    className="group relative flex items-center justify-between gap-12 bg-white text-black px-8 py-7 rounded-2xl overflow-hidden transition-all duration-600 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    {/* Hover gradient sweep */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent-base to-[#E8D5B5] opacity-0 transition-opacity duration-600 group-hover:opacity-100" />
                                    <div className="relative flex flex-col">
                                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-50">
                                            Start a project
                                        </span>
                                        <span className="text-[22px] font-semibold tracking-[-0.02em] mt-1">
                                            Get in Touch
                                        </span>
                                    </div>
                                    <div className="relative w-14 h-14 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:border-transparent group-hover:rotate-45">
                                        <ArrowUpRight size={22} strokeWidth={2} />
                                    </div>
                                </Link>
                            </ScrollReveal>

                            <ScrollReveal delay={0.25}>
                                <div className="grid grid-cols-2 gap-3">
                                    <a
                                        href="mailto:hello@imaginta.com"
                                        className="group relative flex items-center justify-center gap-3 h-[64px] rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-400"
                                    >
                                        <Mail
                                            size={17}
                                            className="text-white/40 group-hover:text-white transition-colors duration-300"
                                        />
                                        <span className="text-[12px] font-medium tracking-wider uppercase text-white/30 group-hover:text-white/70 transition-colors duration-300">
                                            Email
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="group relative flex items-center justify-center gap-3 h-[64px] rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-400"
                                    >
                                        <Calendar
                                            size={17}
                                            className="text-white/40 group-hover:text-white transition-colors duration-300"
                                        />
                                        <span className="text-[12px] font-medium tracking-wider uppercase text-white/30 group-hover:text-white/70 transition-colors duration-300">
                                            Book a Call
                                        </span>
                                    </a>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* ── Marquee ticker ── */}
                    <MarqueeTicker />

                    {/* ── Animated divider ── */}
                    <AnimatedDivider />

                    {/* ═══════════════════════════════════════════
                         TIER 2 — NAVIGATION COLUMNS
                    ═══════════════════════════════════════════ */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 py-16">
                        {/* Navigation */}
                        <motion.div
                            className="flex flex-col gap-6"
                            variants={colVariants}
                            initial="hidden"
                            whileInView="show"
                            custom={0}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Meta className="text-white/25">NAVIGATION</Meta>
                            <ul className="flex flex-col gap-4">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <FooterLink href={link.href} isActive={pathname === link.href}>
                                            {link.label}
                                        </FooterLink>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div
                            className="flex flex-col gap-6"
                            variants={colVariants}
                            initial="hidden"
                            whileInView="show"
                            custom={1}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Meta className="text-white/25">SERVICES</Meta>
                            <ul className="flex flex-col gap-4">
                                {SERVICE_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <FooterLink href={link.href}>{link.label}</FooterLink>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Connect */}
                        <motion.div
                            className="flex flex-col gap-6"
                            variants={colVariants}
                            initial="hidden"
                            whileInView="show"
                            custom={2}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Meta className="text-white/25">CONNECT</Meta>
                            <div className="flex flex-col gap-3">
                                {SOCIAL_LINKS.map((social) => (
                                    <SocialLink key={social.label} social={social} />
                                ))}
                            </div>
                        </motion.div>

                        {/* Studio */}
                        <motion.div
                            className="flex flex-col gap-6"
                            variants={colVariants}
                            initial="hidden"
                            whileInView="show"
                            custom={3}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Meta className="text-white/25">STUDIO</Meta>
                            <div className="flex flex-col gap-5">
                                {/* Location */}
                                <div className="flex flex-col gap-1">
                                    <span className="text-[15px] text-white">Brussels, BE</span>
                                    <span className="text-[13px] text-white/40">Registered Office</span>
                                </div>

                                {/* Live clock */}
                                <div className="flex items-center gap-3">
                                    <Globe size={14} className="text-white/25" />
                                    <span className="text-[14px] font-mono tracking-wider text-white/60">
                                        {time ? (
                                            <>
                                                {time.split(':')[0]}
                                                <span
                                                    className={cn(
                                                        'transition-opacity duration-300',
                                                        colonVisible ? 'opacity-100' : 'opacity-30'
                                                    )}
                                                >
                                                    :
                                                </span>
                                                {time.split(':')[1]}
                                            </>
                                        ) : (
                                            '--:--'
                                        )}
                                    </span>
                                    <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/30">
                                        CET
                                    </span>
                                </div>

                                {/* Status */}
                                <div className="flex items-center gap-3">
                                    <StatusDot status={studioStatus === 'online' ? 'online' : studioStatus === 'break' ? 'amber' : 'offline'} pulse={studioStatus !== 'offline'} />
                                    <span className="text-[13px] uppercase tracking-widest text-white/60">
                                        Studio{' '}
                                        <span className={cn(
                                            studioStatus === 'online' ? 'text-[#34D399]' : 
                                            studioStatus === 'break' ? 'text-[#F59E0B]' : 
                                            'text-white/65'
                                        )}>
                                            {studioStatus === 'online' ? 'Open' : studioStatus === 'break' ? 'On Break' : 'Closed'}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ── Animated divider ── */}
                    <AnimatedDivider delay={0.2} />

                    {/* ═══════════════════════════════════════════
                         TIER 3 — BOTTOM BAR
                    ═══════════════════════════════════════════ */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 pb-4">
                        {/* Left — brand & copyright */}
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <Link
                                href="/"
                                className="group flex items-end gap-[3px] transition-opacity hover:opacity-100 opacity-80"
                            >
                                <span className="text-[16px] font-semibold tracking-[-0.01em] text-white leading-none">
                                    imaginta
                                </span>
                                <motion.div
                                    className="w-[5px] h-[5px] rounded-full bg-accent-base mb-[2px]"
                                    animate={
                                        reduced
                                            ? undefined
                                            : { opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }
                                    }
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                />
                            </Link>
                            <span className="text-[11px] text-white/60 font-medium tracking-[0.2em] uppercase">
                                &copy; {new Date().getFullYear()}
                            </span>
                            <div className="flex items-center gap-5">
                                <Link
                                    href="/privacy"
                                    className="text-[11px] text-white/50 hover:text-white/80 transition-colors duration-300 uppercase tracking-[0.15em] font-medium"
                                >
                                    Privacy
                                </Link>
                                <Link
                                    href="/terms"
                                    className="text-[11px] text-white/30 hover:text-white/70 transition-colors duration-300 uppercase tracking-[0.15em] font-medium"
                                >
                                    Terms
                                </Link>
                            </div>
                        </div>

                        {/* Center — signature */}
                        <div className="hidden lg:flex items-center gap-3">
                            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/15">
                                Designed &amp; Built by Imaginta
                            </span>
                        </div>

                        {/* Right — status */}
                        <div className="flex items-center gap-2">
                            <motion.div
                                className="w-[5px] h-[5px] rounded-full bg-[#34D399]"
                                animate={
                                    reduced
                                        ? undefined
                                        : {
                                              boxShadow: [
                                                  '0 0 0px rgba(52,211,153,0.4)',
                                                  '0 0 8px rgba(52,211,153,0.6)',
                                                  '0 0 0px rgba(52,211,153,0.4)',
                                              ],
                                          }
                                }
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                                All Systems Operational
                            </span>
                        </div>
                    </div>
                </Container>
            </footer>

            {/* ── Back to top floating button ── */}
            <BackToTop />
        </>
    );
}
