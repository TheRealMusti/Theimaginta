'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <main className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center gap-3">
                <span className="font-sans text-[14px] font-medium tracking-wide text-white/40 select-none">
                    Imaginta
                </span>
                
                <div className="w-[120px] h-[1px] overflow-hidden relative" style={{ backgroundColor: 'rgba(245, 242, 237, 0.05)' }}>
                    <motion.div 
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                        className="absolute inset-y-0 left-0 w-1/3 bg-[#C9A66B]"
                        style={{ opacity: 0.4 }}
                    />
                </div>
            </div>
        </main>
    );
}
