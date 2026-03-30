// A11y pass applied
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { StatusDot, Meta } from '@/components/ui';

export function StatusBar() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [200, 400], [1, 0]);
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div 
            style={{ opacity: prefersReducedMotion ? 1 : opacity }}
            className="w-full flex items-center justify-between h-[32px] pointer-events-auto"
        >
            <StudioStatus />
            <CurrentFocus />
            <LocalBridge />
        </motion.div>
    );
}

function StudioStatus() {
    const [mounted, setMounted] = useState(false);
    const [statusColor, setStatusColor] = useState<'online' | 'amber' | 'offline'>('offline');
    const [statusLabel, setStatusLabel] = useState('STUDIO · CHECKING');

    useEffect(() => {
        setMounted(true);

        const updateStatus = () => {
            const now = new Date();
            
            const cetTimeStr = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Europe/Brussels',
                weekday: 'short',
                hour: 'numeric',
                hour12: false,
            }).format(now);
            
            const [cetDay, cetHourStr] = cetTimeStr.split(', ');
            const cetHour = parseInt(cetHourStr, 10);
            const isWeekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(cetDay);

            if (isWeekday) {
                if (cetHour >= 9 && cetHour < 18) {
                    if (cetDay === 'Mon' && cetHour === 9) {
                        setStatusColor('online');
                        setStatusLabel('STUDIO · FRESH WEEK');
                    } else {
                        setStatusColor('online');
                        setStatusLabel('STUDIO · ACTIVE');
                    }
                } else if (cetHour >= 18 && cetHour < 22) {
                    setStatusColor('amber');
                    setStatusLabel('STUDIO · WINDING DOWN');
                } else {
                    setStatusColor('offline');
                    setStatusLabel('STUDIO · OFF-HOURS');
                }
            } else {
                setStatusColor('offline');
                setStatusLabel('STUDIO · OFF-HOURS');
            }
        };

        updateStatus();
        const interval = setInterval(updateStatus, 10000); // Check every 10s
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return (
        <div className="flex items-center gap-[8px] opacity-0 w-[160px]">
            <StatusDot status="offline" />
            <Meta>STUDIO · LOADING</Meta>
        </div>
    );

    return (
        <div className="flex items-center gap-[8px] w-auto sm:w-[170px]">
            <StatusDot status={statusColor} />
            <Meta className="transition-colors duration-400 text-tertiary">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={statusLabel}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.4 }}
                        className="block"
                    >
                        {statusLabel}
                    </motion.span>
                </AnimatePresence>
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
    const [mounted, setMounted] = useState(false);
    const [index, setIndex] = useState(0);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        setMounted(true);
        if (prefersReducedMotion) return;
        
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % focuses.length);
        }, 12000);
        return () => clearInterval(interval);
    }, [prefersReducedMotion]);

    if (!mounted) return <div className="hidden sm:block w-[200px]" />;

    return (
        <div className="hidden sm:flex items-center justify-center w-[200px] overflow-hidden text-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    <Meta className="text-tertiary">
                        FOCUS <span className="text-white/20">·</span> {focuses[index]}
                    </Meta>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function LocalBridge() {
    const [mounted, setMounted] = useState(false);
    const [index, setIndex] = useState(0);
    const [greeting, setGreeting] = useState('GOOD DAY');
    const [brusselsTime, setBrusselsTime] = useState('--:--');
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        setMounted(true);

        const updateTime = () => {
            const now = new Date();
            const formattedTime = new Intl.DateTimeFormat('en-GB', {
                timeZone: 'Europe/Brussels',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            }).format(now);
            setBrusselsTime(formattedTime);

            const localHour = now.getHours();
            if (localHour >= 6 && localHour < 12) setGreeting("GOOD MORNING");
            else if (localHour >= 12 && localHour < 18) setGreeting("GOOD AFTERNOON");
            else if (localHour >= 18 && localHour < 22) setGreeting("GOOD EVENING");
            else setGreeting("WORKING LATE");
        };

        updateTime();
        const timeInterval = setInterval(updateTime, 10000); // 10s checks
        return () => clearInterval(timeInterval);
    }, []);

    useEffect(() => {
        if (!mounted || prefersReducedMotion) return;
        
        const rotationInterval = setInterval(() => {
            setIndex((prev) => (prev + 1) % 3);
        }, 8000);
        return () => clearInterval(rotationInterval);
    }, [mounted, prefersReducedMotion]);

    const getDisplayValue = () => {
        switch(index) {
            case 0: return { prefix: "BRU", value: `${brusselsTime} CET` };
            case 1: return { prefix: "", value: greeting };
            case 2: return { prefix: "50.8503°N", value: "4.3517°E" };
            default: return { prefix: "", value: "" };
        }
    };

    if (!mounted) return <div className="w-[140px]" />;

    const { prefix, value } = getDisplayValue();

    return (
        <div className="flex items-center justify-end w-auto sm:w-[170px] overflow-hidden text-right">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    <Meta className="text-tertiary">
                        {prefix && <>{prefix} <span className="text-white/20">·</span> </>}{value}
                    </Meta>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
