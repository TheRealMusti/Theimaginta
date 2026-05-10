// A11y pass applied
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { StatusDot, Meta, HydrationSafe } from '@/components/ui';
import { useStudioStatus } from '@/hooks/useStudioStatus';
import { cn } from '@/lib/utils';

export function StatusBar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [1, 0]);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div 
      style={{ opacity: prefersReducedMotion ? 1 : opacity }}
      className="w-full flex items-center justify-between h-[32px] pointer-events-auto"
    >
      <HydrationSafe fallback={<div className="w-full h-8 opacity-0" />}>
        <StudioStatus />
        <CurrentFocus />
        <LocalBridge />
      </HydrationSafe>
    </motion.div>
  );
}

function StudioStatus() {
  const studioStatus = useStudioStatus();

  return (
    <div className="flex items-center gap-[8px] w-auto sm:w-[160px]">
      <StatusDot 
        status={studioStatus === 'online' ? 'active' : studioStatus === 'break' ? 'amber' : 'offline'} 
        pulse={studioStatus !== 'offline'} 
      />
      <Meta className="uppercase tracking-[0.15em] text-[10px] font-semibold">
        STUDIO · <span className={cn(
          studioStatus === 'online' ? 'text-prestige' : 
          studioStatus === 'break' ? 'text-[#F59E0B]' : 
          'text-[#F5F2ED]/40'
        )}>
          {studioStatus === 'online' ? 'AVAILABLE' : studioStatus === 'break' ? 'ON BREAK' : 'UNAVAILABLE'}
        </span>
      </Meta>
    </div>
  );
}

const focuses = [
  "BRAND SYSTEMS",
  "PRODUCT INTERFACES",
  "FRONTEND ARCHITECTURE",
  "DESIGN ENGINEERING",
  "AI WORKFLOWS",
  "VISUAL IDENTITY",
];

function CurrentFocus() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % focuses.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const isPrestige = focuses[index] === 'AI WORKFLOWS' || focuses[index] === 'DESIGN ENGINEERING';

  return (
    <div className="hidden sm:flex items-center justify-center w-[200px] overflow-hidden text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Meta className={cn(
            "uppercase tracking-[0.25em] text-[9px] font-semibold transition-colors duration-700",
            isPrestige ? "text-prestige/60" : "text-[#F5F2ED]/30"
          )}>
            {focuses[index]}
          </Meta>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function LocalBridge() {
  const [index, setIndex] = useState(0);
  const [brusselsTime, setBrusselsTime] = useState('--:--');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Brussels',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now);
      setBrusselsTime(formattedTime);
    };
    updateTime();
    const tid = setInterval(updateTime, 1000);

    const sid = setInterval(() => {
      setIndex((i) => (i + 1) % 2);
    }, 8000);

    return () => {
      clearInterval(tid);
      clearInterval(sid);
    };
  }, []);

  const prefix = index === 0 ? 'BRU' : null;
  const value = index === 0 ? `${brusselsTime} CET` : 'QUALITY_ASSURED';

  return (
    <div className="flex items-center justify-end w-auto sm:w-[170px] overflow-hidden text-right">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Meta className="text-[rgba(245,242,237,0.50)] uppercase tracking-widest text-[9px] font-semibold">
            {prefix && <>{prefix} <span className="text-[#F5F2ED]/[0.10]">·</span> </>}
            <span className={cn(
              "transition-colors duration-700",
              value === 'QUALITY_ASSURED' ? "text-prestige shadow-[0_0_8px_rgba(196,163,110,0.3)]" : "text-[#F5F2ED]/40"
            )}>
              {value}
            </span>
          </Meta>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
