'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GlassPane } from '@/components/ui';

const KONAMI_CODE = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
];

export function EasterEgg() {
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        let keyIndex = 0;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (sessionStorage.getItem('konamiTriggered')) return;

            if (e.key === KONAMI_CODE[keyIndex] || e.key.toLowerCase() === KONAMI_CODE[keyIndex]) {
                keyIndex++;
                if (keyIndex === KONAMI_CODE.length) {
                    // Trigger effect
                    setTriggered(true);
                    sessionStorage.setItem('konamiTriggered', 'true');
                    document.body.classList.add('theme-amber-wash');

                    setTimeout(() => {
                        setTriggered(false);
                        document.body.classList.remove('theme-amber-wash');
                    }, 4000);

                    keyIndex = 0;
                }
            } else {
                keyIndex = 0;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <AnimatePresence>
            {triggered && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[999] p-4 pointer-events-none flex items-center justify-center"
                >
                    <GlassPane
                        padding="40px"
                        radius={24}
                        className="max-w-[480px] w-full shadow-2xl bg-[#0A0804]/80 border-white/10"
                    >
                        <p className="font-sans text-[17px] text-white/80 text-center leading-relaxed font-medium">
                            You found it. We like curious people.<br />
                            <span className="text-white">hello@imaginta.com</span>
                        </p>
                    </GlassPane>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
