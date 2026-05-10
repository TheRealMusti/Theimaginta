'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────── Constants ─────────────────────────── */

const GOLD_ACCENT = '#C4A36E'; // Prestige Gold
const QUINTIC_OUT = [0.22, 1, 0.36, 1] as [number, number, number, number];

const WORDMARK = "IMAGINTA";

/* ─────────────────────────── Component ─────────────────────────── */

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 5-second progress sequence
    // 5-second progress sequence
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return prev + 1;
      });
    }, 45); // ~4.5s + 0.5s buffer

    // Fail-safe
    const failSafe = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(failSafe);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isVisible]);

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => setIsVisible(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: QUINTIC_OUT }}
          className="fixed inset-0 z-[9999] bg-[#030303] flex items-center justify-center overflow-hidden"
        >
          {/* ════ MONOLITH HORIZON LINES ════ */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Left Moving Line */}
            <motion.div 
              initial={{ x: 0 }}
              animate={{ x: isReady ? '-50vw' : 0 }}
              transition={{ duration: 1.2, ease: QUINTIC_OUT, delay: isReady ? 0 : 0 }}
              className="absolute w-px h-[30vh] bg-gradient-to-t from-transparent via-[#C4A36E]/30 to-transparent"
              style={{ left: '50%' }}
            />
            {/* Right Moving Line */}
            <motion.div 
              initial={{ x: 0 }}
              animate={{ x: isReady ? '50vw' : 0 }}
              transition={{ duration: 1.2, ease: QUINTIC_OUT, delay: isReady ? 0 : 0 }}
              className="absolute w-px h-[30vh] bg-gradient-to-t from-transparent via-[#C4A36E]/30 to-transparent"
              style={{ left: '50%' }}
            />
          </div>

          {/* ════ MINIMALIST WORDMARK ════ */}
          <div className="relative flex flex-col items-center">
            <div className="flex gap-4 md:gap-8 overflow-hidden">
              {WORDMARK.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ 
                    opacity: progress > (i * 10) ? 1 : 0, 
                    y: progress > (i * 10) ? 0 : 20,
                    filter: progress > (i * 10) ? 'blur(0px)' : 'blur(10px)'
                  }}
                  transition={{ duration: 1, ease: QUINTIC_OUT }}
                  className="text-white text-[12px] md:text-[14px] font-mono tracking-[0.5em] font-light"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Progress Underline */}
            <div className="mt-8 w-[120px] h-px bg-white/5 relative overflow-hidden">
               <motion.div 
                 initial={{ scaleX: 0, originX: 0 }}
                 animate={{ scaleX: progress / 100 }}
                 transition={{ duration: 0.1 }}
                 className="absolute inset-0 bg-[#C4A36E]/40"
               />
            </div>
          </div>

          {/* ════ DATA NODES (Very subtle) ════ */}
          <div className="absolute bottom-12 left-12 md:left-24 flex gap-8 items-center pointer-events-none">
             <div className="flex flex-col gap-1">
                <span className="text-[7px] text-white/20 uppercase tracking-[0.3em]">System</span>
                <span className="text-[7px] text-white/40 uppercase tracking-[0.3em]">Operational</span>
             </div>
             <div className="w-[1px] h-4 bg-white/5" />
             <div className="flex flex-col gap-1 text-right">
                <span className="text-[7px] text-white/20 uppercase tracking-[0.3em]">Version</span>
                <span className="text-[7px] text-white/40 uppercase tracking-[0.3em]">4.2.0</span>
             </div>
          </div>

          {/* ════ SEAMLESS CROSS-FADE OVERLAY ════ */}
          {isReady && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#060508] z-[100] pointer-events-none"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
