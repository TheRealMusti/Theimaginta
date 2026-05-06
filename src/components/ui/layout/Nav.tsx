'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Container, HydrationSafe, StatusDot } from '@/components/ui';
import { cn } from '@/lib/utils';
import { EASING } from '@/lib/constants';

const NAV_LINKS = [
    { label: 'The Studio', href: '/' },
    { label: 'Use Cases', href: '/work' },
    { label: 'Intelligence', href: '/intelligence' },
    { label: 'Services', href: '/services' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'Agency', href: '/about' },
];

function NavTime() {
    const [time, setTime] = useState('--:--');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const update = () => {
            const now = new Intl.DateTimeFormat('en-GB', {
                timeZone: 'Europe/Brussels',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            }).format(new Date());
            setTime(now);
        };
        update();
        const id = setInterval(update, 60000);
        return () => clearInterval(id);
    }, []);

    if (!mounted) return null;
    return <span className="font-mono text-[11px] tracking-widest text-white/40">{time} CET</span>;
}

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const reduced = useReducedMotion();
    const { scrollY } = useScroll();
    
    useEffect(() => scrollY.on('change', (v) => setScrolled(v > 50)), [scrollY]);

    useEffect(() => {
        if (menuOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
    }, [menuOpen]);

    const isActive = (href: string) => pathname === href || (pathname?.startsWith(href + '/') ?? false);

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 inset-x-0 z-[100] transition-all duration-700 ease-smooth",
                    scrolled ? "py-4" : "py-8"
                )}
                initial={reduced ? false : { y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <Container>
                    <div className={cn(
                        "relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-700",
                        scrolled 
                            ? "bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.3)]" 
                            : "bg-transparent border border-transparent"
                    )}>
                        {/* LEFT: BRAND & SYSTEM IDENTIFIER */}
                        <div className="flex items-center gap-8">
                            <Link href="/" className="group flex items-center gap-2">
                                <span className="text-[18px] font-bold tracking-tighter text-white uppercase">
                                    imaginta<span className="text-accent-base">.</span>
                                </span>
                            </Link>
                        </div>

                        {/* CENTER: NAVIGATION LINKS */}
                        <nav className="hidden md:flex items-center gap-1">
                            {NAV_LINKS.map((link, i) => {
                                const active = isActive(link.href);
                                const isTheStudio = i === 0;
                                
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className={cn(
                                            "relative px-5 py-2 group transition-all duration-500",
                                            active ? "text-white" : "text-white/40 hover:text-white",
                                            isTheStudio && "pr-6"
                                        )}
                                    >
                                        <div className="relative flex items-center gap-2">
                                            {isTheStudio && (
                                                <span className="w-1 h-1 rounded-full bg-accent-base shadow-[0_0_8px_rgba(201,166,107,0.8)]" />
                                            )}
                                            <span className={cn(
                                                "relative z-10 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500",
                                                isTheStudio && "text-white/80 group-hover:text-white"
                                            )}>
                                                {link.label}
                                            </span>
                                        </div>

                                        {/* Hover Indicator */}
                                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-base scale-0 group-hover:scale-100 transition-transform duration-500" />
                                        
                                        {/* Active Indicator */}
                                        {active && !isTheStudio && (
                                            <motion.div
                                                layoutId="nav-active-dot"
                                                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-base"
                                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}

                                        {/* Studio Specific: Subtle Bracket Reveal */}
                                        {isTheStudio && (
                                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-lg transition-all duration-500 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100" />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* RIGHT: ACTIONS & TELEMETRY */}
                        <div className="flex items-center gap-8">
                            <div className="hidden xl:block">
                                <HydrationSafe>
                                    <NavTime />
                                </HydrationSafe>
                            </div>

                            <Link
                                href="/contact"
                                className="group relative hidden md:flex items-center gap-3 px-6 py-2.5 rounded-full bg-white text-[#030303] text-[11px] font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95"
                            >
                                <span className="relative z-10">Contact Us</span>
                                <ArrowUpRight size={14} className="relative z-10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                <div className="absolute inset-0 bg-accent-base/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </Link>

                            <button
                                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors"
                                onClick={() => setMenuOpen(true)}
                            >
                                <Menu size={20} className="text-white" />
                            </button>
                        </div>

                        {/* HOVER GLOW EFFECT */}
                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent rounded-2xl" />
                    </div>
                </Container>
            </motion.header>

            {/* FULLSCREEN BLUEPRINT MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[200] bg-[#030303] flex flex-col"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASING.smoothArray }}
                    >
                        {/* Menu Header */}
                        <div className="flex justify-between items-center px-10 py-10">
                            <span className="text-[14px] font-bold tracking-tighter text-white uppercase">
                                imaginta<span className="text-accent-base">.</span>
                            </span>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 transition-colors"
                            >
                                <X size={24} className="text-white" />
                            </button>
                        </div>

                        {/* Menu Links */}
                        <div className="flex-1 flex flex-col justify-center px-10 md:px-20">
                            <nav className="flex flex-col gap-6">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * i, duration: 0.8, ease: EASING.smoothArray }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="group flex items-center gap-6"
                                        >
                                            <span className="text-white/10 text-[14px] font-mono mt-4">0{i+1}</span>
                                            <span className="text-6xl md:text-8xl font-bold tracking-tighter text-white/40 group-hover:text-white transition-all duration-500 group-hover:pl-4">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </div>

                        {/* Menu Footer */}
                        <div className="p-10 flex flex-col md:flex-row justify-between items-end gap-10">
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">System State</span>
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-accent-base animate-pulse" />
                                    <span className="text-[12px] font-medium text-white/60 tracking-wider">NETWORK_NOMINAL</span>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="px-10 py-5 bg-white text-[#030303] text-[12px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-accent-base hover:text-white transition-all duration-500"
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Blueprint Grid Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[-1]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
