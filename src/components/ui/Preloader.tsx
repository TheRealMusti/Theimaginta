'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3500);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = '';
        };
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[9999] flex flex-col pointer-events-none"
                >
                    {/* Top Panel */}
                    <motion.div
                        initial={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 1.2, delay: 3.0, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-0 left-0 w-full h-[50%] bg-[#030303] z-10"
                    />

                    {/* Bottom Panel */}
                    <motion.div
                        initial={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 1.2, delay: 3.0, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-0 left-0 w-full h-[50%] bg-[#030303] z-10"
                    />

                    {/* Central Slit / Content Container */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: '140px', opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full flex flex-col items-center justify-center overflow-hidden"
                        >
                            {/* Horizontal Aperture Line */}
                            <motion.div 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 2, delay: 0.2, ease: "circOut" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-accent-base/40 to-transparent"
                            />

                            {/* Content Group */}
                            <div className="flex flex-col items-center gap-6 mt-2">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                                    className="flex items-center gap-2"
                                >
                                    <span className="font-sans text-[18px] font-bold tracking-[-0.02em] text-[#F5F2ED] lowercase">
                                        imaginta
                                    </span>
                                    <motion.div 
                                        animate={{ opacity: [1, 0.35, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-[5px] h-[5px] rounded-full bg-accent-base"
                                    />
                                </motion.div>

                                {/* Progress Bar */}
                                <div className="w-[64px] h-[1px] bg-[#F5F2ED]/[0.04] relative">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 2.5, delay: 1, ease: "linear" }}
                                        className="absolute top-0 left-0 h-full bg-accent-base/40"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Grain Overlay for Preloader */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-30 mix-blend-overlay bg-repeat bg-[url('/grain.png')]" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
