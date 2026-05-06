'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { Container, Meta, StatusDot } from '@/components/ui';
import { COLORS, EASING } from '@/lib/constants';

const NAV_LINKS = [
    { label: 'Work', href: '/work' },
    { label: 'Intelligence', href: '/intelligence' },
    { label: 'Services', href: '/services' },
    { label: 'Company', href: '/about' },
];

const SOCIAL_LINKS = [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/imagintax1' },
    { label: 'Instagram', href: 'https://instagram.com/imagintax1' },
    { label: 'X', href: 'https://x.com/imagintax1' },
    { label: 'GitHub', href: 'https://github.com/imagintax1' },
];

function useBrusselsTime() {
    const [time, setTime] = useState('--:--');

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            const fmt = new Intl.DateTimeFormat('en-GB', {
                timeZone: 'Europe/Brussels',
                hour: '2-digit',
                minute: '2-digit',
                hourCycle: 'h23',
            });
            setTime(fmt.format(now));
        };
        tick();
        const id = setInterval(tick, 60000);
        return () => clearInterval(id);
    }, []);

    return time;
}

function MagneticLink({ children, href, external = false }: { children: React.ReactNode; href: string; external?: boolean }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const prefersReducedMotion = useReducedMotion();

    const springConfig = { damping: 40, stiffness: 400 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (prefersReducedMotion) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.4);
        y.set((e.clientY - centerY) * 0.4);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const LinkTag = external ? 'a' : Link;
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <motion.div
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative"
        >
            <LinkTag
                href={href}
                {...externalProps}
                className="group relative flex items-center gap-2 text-white/40 hover:text-white transition-all duration-500 py-1"
            >
                <span className="text-[14px] font-medium tracking-tight">
                    {children}
                </span>
                <div className="h-[1px] w-0 bg-accent-base/40 group-hover:w-4 transition-all duration-500" />
            </LinkTag>
        </motion.div>
    );
}

export function Footer() {
    const brusselsTime = useBrusselsTime();

    return (
        <footer className="relative bg-[#030303] overflow-hidden">
            {/* Top Signal Line - The "Horizon" */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent relative">
                <motion.div 
                    className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-accent-base/30 to-transparent"
                    animate={{ left: ['-10%', '110%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-[0.03]"
                    style={{
                        background: `radial-gradient(circle at center bottom, ${COLORS.accent.base} 0%, transparent 70%)`,
                    }}
                />
                {/* Subtle Grid */}
                <div 
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px',
                    }}
                />
            </div>

            <Container className="relative z-10 pt-40 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
                    {/* Left: Core Identity & Telemetry */}
                    <div className="md:col-span-5 flex flex-col gap-12">
                        <div className="flex flex-col gap-6">
                            <Link href="/" className="inline-block">
                                <span className="text-[24px] font-bold tracking-tighter text-white uppercase">
                                    imaginta<span className="text-accent-base">.</span>
                                </span>
                            </Link>
                            <p className="text-white/40 text-[16px] leading-relaxed max-w-[320px] font-medium tracking-tight">
                                Synthesizing design and intelligence into premium digital architecture.
                            </p>
                        </div>

                        {/* Telemetry Module */}
                        <div className="flex flex-col gap-6 border-l border-white/5 pl-6">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase">Location</span>
                                <span className="text-[13px] font-medium text-white/60 uppercase tracking-wider">Brussels, BE // 50.8503° N</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase">Studio Time</span>
                                <span className="text-[13px] font-medium text-white/60 uppercase tracking-wider">{brusselsTime} CET</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <StatusDot status="online" pulse={true} />
                                <span className="text-[10px] font-mono text-accent-base/60 tracking-[0.3em] uppercase animate-pulse">
                                    SYNCHRONIZED
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Navigation Columns */}
                    <div className="md:col-span-3 flex flex-col gap-10">
                        <Meta className="text-white/20 text-[10px]">Directory</Meta>
                        <nav className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <MagneticLink key={link.label} href={link.href}>
                                    {link.label}
                                </MagneticLink>
                            ))}
                        </nav>
                    </div>

                    <div className="md:col-span-3 flex flex-col gap-10">
                        <Meta className="text-white/20 text-[10px]">Ecosystem</Meta>
                        <nav className="flex flex-col gap-3">
                            {SOCIAL_LINKS.map((social) => (
                                <MagneticLink key={social.label} href={social.href} external>
                                    {social.label}
                                </MagneticLink>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Cinematic Signature */}
                <div className="mt-40 relative flex justify-center items-center h-48 overflow-hidden">
                    <motion.div
                        initial={{ y: '100%', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: EASING.smoothArray }}
                        className="relative"
                    >
                        <span 
                            className="text-[20vw] font-black leading-none tracking-tighter text-transparent bg-clip-text select-none"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(201,166,107,0.02) 100%)`,
                                WebkitTextStroke: '1px rgba(255,255,255,0.02)'
                            }}
                        >
                            IMAGINTA
                        </span>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/[0.03] pt-12">
                    <div className="flex items-center gap-8">
                        <span className="text-[10px] font-mono text-white/20 tracking-[0.1em] uppercase">
                            © {new Date().getFullYear()} IMAGINTA_CORE
                        </span>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-[10px] font-mono text-white/20 hover:text-accent-base/60 transition-colors uppercase tracking-[0.1em]">Privacy</Link>
                            <Link href="/terms" className="text-[10px] font-mono text-white/20 hover:text-accent-base/60 transition-colors uppercase tracking-[0.1em]">Terms</Link>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-accent-base/40" />
                        <span className="text-[9px] font-mono text-white/30 tracking-[0.2em] uppercase">
                            DESIGNED_IN_BRUSSELS
                        </span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
