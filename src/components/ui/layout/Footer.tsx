'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, StatusDot } from '@/components/ui';

const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Intelligence', href: '/intelligence' },
  { label: 'Services', href: '/services' },
  { label: 'Company', href: '/about' },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/imagintax1' },
  { label: 'Instagram', href: 'https://instagram.com/instagram.com/imagintax1' },
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

function FooterLink({ label, href, external = false }: { label: string; href: string; external?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  const LinkTag = external ? 'a' : Link;
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <LinkTag
      href={href}
      {...externalProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center gap-3 py-1"
    >
      <motion.span
        animate={{ opacity: isHovered ? 1 : 0.5 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="text-[13px] font-medium tracking-tight text-white"
      >
        {label}
      </motion.span>

      {/* Cyberpunk Spark */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="w-[4px] h-[4px] rounded-full bg-prestige shadow-[0_0_8px_rgba(196,163,110,0.8)]"
          />
        )}
      </AnimatePresence>
    </LinkTag>
  );
}

export function Footer() {
  const brusselsTime = useBrusselsTime();

  return (
    <footer className="relative overflow-hidden pt-32 pb-16 bg-transparent">
      {/* ── FOOTER ATMOSPHERIC CLOSURE (Patch 3) ── */}
      <div 
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-[1px] z-20"
        style={{
          background: 'linear-gradient(90deg, transparent 10%, rgba(201,166,107,0.07) 50%, transparent 90%)'
        }}
      />
      
      <div 
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[300px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(201,166,107,0.02), transparent 70%)'
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-12 gap-y-16">
          {/* Column 1-4: Identity & Signature */}
          <div className="md:col-span-4 flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-6">
              <Link href="/" className="inline-block">
                <span className="text-[20px] font-bold tracking-[-0.04em] text-white uppercase flex items-center gap-1">
                  IMAGINTA<span className="w-1.5 h-1.5 rounded-full bg-prestige shadow-[0_0_8px_rgba(196,163,110,0.4)]" />
                </span>
              </Link>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">Headquarters</span>
                <span className="text-[12px] text-white/50 font-medium tracking-tight">Brussels, Belgium</span>
                <span className="text-[11px] font-mono text-white/30 tracking-wider uppercase mt-1">{brusselsTime} CET</span>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-4">
              <p className="text-[13px] text-white/40 leading-relaxed max-w-[280px]">
                Architecting digital intelligence with cinematic precision.
              </p>
              <div className="flex items-center gap-2">
                <StatusDot status="connection" className="w-[6px] h-[6px]" />
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/20 font-bold">Live Connection</span>
              </div>
            </div>
          </div>

          {/* Column 5-7: Directory */}
          <div className="md:col-span-3 flex flex-col gap-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Directory</h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <FooterLink key={link.label} label={link.label} href={link.href} />
              ))}
            </nav>
          </div>

          {/* Column 8-10: Ecosystem */}
          <div className="md:col-span-3 flex flex-col gap-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Ecosystem</h4>
            <nav className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((link) => (
                <FooterLink key={link.label} label={link.label} href={link.href} external />
              ))}
            </nav>
          </div>

          {/* Column 11-12: Action / Glass Pill */}
          <div className="md:col-span-2 flex flex-col gap-8 items-start md:items-end">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold md:text-right">Contact</h4>
            <Link 
              href="/contact" 
              className="px-6 py-3 rounded-full bg-white/[0.01] border border-white/[0.04] backdrop-blur-xl text-white/60 text-[12px] font-medium tracking-tight hover:text-white hover:border-prestige/20 transition-all duration-500"
            >
              Start Project
            </Link>
          </div>
        </div>

        {/* Legal & Finality */}
        <div className="mt-32 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <span className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} IMAGINTA
            </span>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-[10px] text-white/20 hover:text-white/60 transition-colors uppercase tracking-[0.2em]">Privacy</Link>
              <Link href="/terms" className="text-[10px] text-white/20 hover:text-white/60 transition-colors uppercase tracking-[0.2em]">Terms</Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
             <div className="px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.04] backdrop-blur-sm">
                <span className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-medium">Designed in Brussels</span>
             </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
