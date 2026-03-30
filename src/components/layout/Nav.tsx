'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useReducedMotion, LayoutGroup } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui';
import { cn } from '@/lib/utils';
import { EASING } from '@/lib/constants';
import { useStudioStatus } from '@/hooks/useStudioStatus';

const NAV_LINKS = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
];

// ── Brussels business hours schedule hook (useStudioStatus) ──

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const reduced = useReducedMotion();
    const { scrollY } = useScroll();
    const studioStatus = useStudioStatus();
    const menuRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    // Scroll detection
    useEffect(() => scrollY.on('change', (v) => setScrolled(v > 32)), [scrollY]);

    // Body scroll lock
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const close = useCallback(() => setMenuOpen(false), []);

    // Focus trap + Escape
    useEffect(() => {
        if (!menuOpen) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
                triggerRef.current?.focus();
                return;
            }

            if (e.key !== 'Tab' || !menuRef.current) return;

            const els = menuRef.current.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (!els.length) return;

            const first = els[0];
            const last = els[els.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        const t = setTimeout(() => {
            menuRef.current?.querySelector<HTMLElement>('a[href]')?.focus();
        }, 120);

        document.addEventListener('keydown', handleKey);
        return () => {
            clearTimeout(t);
            document.removeEventListener('keydown', handleKey);
        };
    }, [menuOpen, close]);

    const isActive = (href: string) =>
        pathname === href || (pathname?.startsWith(href + '/') ?? false);

    return (
        <>
            {/* ═══ NAV BAR ═══ */}
            <motion.header
                className="fixed top-0 inset-x-0 z-[50]"
                initial={reduced ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05, ease: EASING.smoothArray }}
            >
                <div
                    className={cn(
                        'h-[64px] md:h-[72px] transition-all duration-400 ease-smooth',
                        scrolled && !menuOpen
                            ? 'bg-[rgba(6,5,8,0.85)] backdrop-blur-[20px] backdrop-saturate-[1.2] border-b-[0.5px] border-white/[0.04]'
                            : 'bg-transparent border-b-[0.5px] border-transparent'
                    )}
                >
                    <Container className="relative h-full flex items-center justify-between">

                        {/* ── LEFT: Wordmark ── */}
                        <Link
                            href="/"
                            data-cursor="HOME"
                            className="group relative z-10 inline-flex items-end"
                        >
                            <span className="font-sans text-[17px] font-semibold tracking-[-0.02em] text-white leading-none">
                                imaginta
                            </span>
                            <motion.span
                                className={cn(
                                    'w-[5px] h-[5px] rounded-full bg-accent-base ml-[2px] mb-[3px]',
                                    'transition-shadow duration-300 group-hover:shadow-[0_0_8px_rgba(201,166,107,0.3)]'
                                )}
                                animate={reduced ? undefined : { opacity: [1, 0.5, 1] }}
                                transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
                            />
                        </Link>

                        {/* ── CENTER: Desktop links ── */}
                        <nav
                            aria-label="Main navigation"
                            className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-[36px]"
                        >
                            <LayoutGroup id="nav-links">
                                {NAV_LINKS.map((link) => {
                                    const active = isActive(link.href);
                                    return (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            data-cursor={`NAV · ${link.label.toUpperCase()}`}
                                            aria-current={active ? 'page' : undefined}
                                            className={cn(
                                                'group relative font-sans text-[13px] font-normal tracking-[0.01em] transition-colors duration-300',
                                                active
                                                    ? 'text-white'
                                                    : 'text-[rgba(245,242,237,0.35)] hover:text-[rgba(245,242,237,0.8)]'
                                            )}
                                        >
                                            <span className="relative inline-block pb-[8px]">
                                                {link.label}

                                                {/* Active indicator — slides between links */}
                                                {active && (
                                                    <motion.span
                                                        layoutId="nav-indicator"
                                                        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[16px] h-[1.5px] rounded-full bg-accent-base"
                                                        transition={
                                                            reduced
                                                                ? { duration: 0 }
                                                                : { duration: 0.4, ease: EASING.smoothArray }
                                                        }
                                                    />
                                                )}

                                                {/* Hover underline — non-active only */}
                                                {!active && (
                                                    <span
                                                        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[16px] h-[1px] bg-white/[0.15] origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-[250ms] ease-smooth"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </LayoutGroup>
                        </nav>

                        {/* ── RIGHT: Desktop action cluster ── */}
                        <div className="hidden md:flex items-center gap-[8px] relative z-10">
                            <span
                                className={cn(
                                    'w-[6px] h-[6px] rounded-full transition-all duration-400',
                                    studioStatus === 'online'
                                        ? 'bg-[#34D399] shadow-[0_0_6px_rgba(52,211,153,0.4)]'
                                        : studioStatus === 'break'
                                        ? 'bg-[#F59E0B] shadow-[0_0_6px_rgba(245,158,11,0.4)]'
                                        : 'bg-white/[0.15]'
                                )}
                                title={
                                    studioStatus === 'online' ? 'Studio is open' : 
                                    studioStatus === 'break' ? 'Studio is on break' : 
                                    'Studio is closed'
                                }
                                aria-hidden="true"
                            />
                            <Link
                                href="/contact"
                                data-cursor="CONTACT"
                                className={cn(
                                    'px-[24px] py-[9px] rounded-pill',
                                    'font-sans text-[12px] font-medium tracking-[0.03em] text-white',
                                    'bg-white/[0.03] border-[0.5px] border-white/[0.06]',
                                    'hover:bg-[rgba(201,166,107,0.08)] hover:border-[rgba(201,166,107,0.12)]',
                                    'hover:shadow-[0_0_16px_rgba(201,166,107,0.06)]',
                                    'transition-all duration-400 ease-smooth'
                                )}
                            >
                                Let&apos;s Talk
                            </Link>
                        </div>

                        {/* ── MOBILE: Hamburger / X ── */}
                        <button
                            ref={triggerRef}
                            type="button"
                            className={cn(
                                'md:hidden relative z-10 w-[44px] h-[44px] flex items-center justify-center',
                                'transition-colors duration-300',
                                menuOpen
                                    ? 'text-white'
                                    : 'text-white/60 hover:text-white'
                            )}
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {menuOpen ? (
                                    <motion.span
                                        key="x"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center justify-center"
                                    >
                                        <X size={20} />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center justify-center"
                                    >
                                        <Menu size={20} />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>

                    </Container>
                </div>
            </motion.header>

            {/* ═══ MOBILE OVERLAY ═══ */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        ref={menuRef}
                        id="mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation menu"
                        className="md:hidden fixed inset-0 z-[45] flex flex-col items-center justify-center bg-[rgba(6,5,8,0.97)] backdrop-blur-[24px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.3 } }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    >
                        <nav aria-label="Mobile navigation" className="flex flex-col items-center gap-[24px]">
                            {NAV_LINKS.map((link, i) => {
                                const active = isActive(link.href);
                                return (
                                    <motion.div
                                        key={link.label}
                                        initial={reduced ? false : { opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: reduced ? 0 : 0.08 + i * 0.06,
                                            ease: EASING.smoothArray,
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={close}
                                            aria-current={active ? 'page' : undefined}
                                            className={cn(
                                                'flex items-center gap-[12px] font-sans font-semibold tracking-[-0.02em] transition-colors duration-300',
                                                active
                                                    ? 'text-white'
                                                    : 'text-[rgba(245,242,237,0.35)] hover:text-white'
                                            )}
                                            style={{ fontSize: 'clamp(28px, 6vw, 40px)' }}
                                        >
                                            {active && (
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent-base flex-shrink-0" aria-hidden="true" />
                                            )}
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>

                        {/* Bottom cluster */}
                        <motion.div
                            className="mt-[48px] flex flex-col items-center gap-[24px]"
                            initial={reduced ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: reduced ? 0 : 0.08 + NAV_LINKS.length * 0.06,
                                ease: EASING.smoothArray,
                            }}
                        >
                            <Link
                                href="/contact"
                                onClick={close}
                                className={cn(
                                    'w-full max-w-[280px] flex items-center justify-center',
                                    'px-[32px] py-[16px] rounded-pill',
                                    'bg-white/[0.03] border-[0.5px] border-white/[0.06]',
                                    'font-sans text-[15px] font-medium tracking-[0.03em] text-white',
                                    'hover:bg-[rgba(201,166,107,0.08)] hover:border-[rgba(201,166,107,0.12)]',
                                    'transition-all duration-400 ease-smooth'
                                )}
                            >
                                Let&apos;s Talk
                            </Link>

                            <a
                                href="mailto:hello@imaginta.com"
                                className="font-sans text-[10px] font-medium tracking-[0.16em] uppercase text-accent-base hover:text-white transition-colors duration-300"
                            >
                                hello@imaginta.com
                            </a>

                            <div className="flex items-center gap-[8px]">
                                <span
                                    className={cn(
                                        'w-[6px] h-[6px] rounded-full',
                                        studioStatus === 'online'
                                            ? 'bg-[#34D399] shadow-[0_0_6px_rgba(52,211,153,0.4)]'
                                            : studioStatus === 'break'
                                            ? 'bg-[#F59E0B] shadow-[0_0_6px_rgba(245,158,11,0.4)]'
                                            : 'bg-white/[0.15]'
                                    )}
                                    aria-hidden="true"
                                />
                                <span className="font-sans text-[10px] font-medium tracking-[0.16em] uppercase text-text-metadata">
                                    Brussels, Belgium
                                </span>
                            </div>
                        </motion.div>

                        {/* Screen-reader close button inside focus trap */}
                        <button
                            type="button"
                            onClick={close}
                            className="sr-only focus:not-sr-only focus:absolute focus:top-5 focus:right-6 focus:text-white focus:bg-white/10 focus:px-3 focus:py-1.5 focus:rounded-pill focus:text-[12px] focus:font-medium"
                        >
                            Close menu
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
