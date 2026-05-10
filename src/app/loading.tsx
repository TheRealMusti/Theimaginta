'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <main className="fixed inset-0 z-[100] bg-[#060508] flex items-center justify-center pointer-events-none">
      <div className="flex flex-col items-center gap-4">
        <span className="font-sans text-[10px] font-bold tracking-[0.4em] text-prestige uppercase select-none opacity-40">
          SYSTEM_BOOT_SEQUENCE
        </span>
        
        <div className="w-[180px] h-[1px] overflow-hidden relative" style={{ backgroundColor: 'rgba(196, 163, 110, 0.05)' }}>
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="absolute inset-y-0 left-0 w-1/2 bg-prestige shadow-[0_0_10px_rgba(196, 163, 110, 0.5)]"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-prestige/40 animate-pulse" />
          <span className="text-[9px] font-mono text-[#F5F2ED]/20 uppercase tracking-widest">Hydrating Protocols</span>
        </div>
      </div>
    </main>
  );
}
