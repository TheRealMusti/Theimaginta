'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

/**
 * SMART CURSOR (Tactical Crosshair)
 * 
 * A clean, minimalist crosshair cursor that follows the mouse with spring physics.
 * Removed all idle breathing and scale animations for a sharper, instrument-like feel.
 */
export function SmartCursor() {
  const { mousePosition, isTouchDevice, isLowEnd } = useMousePosition();
  const [label, setLabel] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Spring physics for snappy yet smooth tracking
  const smoothX = useSpring(0, { stiffness: 500, damping: 35 });
  const smoothY = useSpring(0, { stiffness: 500, damping: 35 });

  useEffect(() => {
    if (mousePosition) {
      smoothX.set(mousePosition.x);
      smoothY.set(mousePosition.y);
    }
  }, [mousePosition, smoothX, smoothY]);

  useEffect(() => {
    if (isTouchDevice || isLowEnd) return;

    document.body.classList.add('has-custom-cursor');
    const mountTimer = setTimeout(() => setMounted(true), 1500);

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest?.('[data-cursor]');
      if (target) {
        setLabel(target.getAttribute('data-cursor'));
      } else {
        setLabel(null);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      clearTimeout(mountTimer);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouchDevice, isLowEnd]);

  if (isTouchDevice || isLowEnd || !mousePosition || !mounted) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        left: smoothX,
        top: smoothY,
        x: '-50%',
        y: '-50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* ════ THE MINIMALIST CROSSHAIR (STATIC) ════ */}
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Horizontal */}
        <div className="absolute left-0 w-[3px] h-[0.5px] bg-[#C9A66B]/50" />
        <div className="absolute right-0 w-[3px] h-[0.5px] bg-[#C9A66B]/50" />
        
        {/* Vertical */}
        <div className="absolute top-0 w-[0.5px] h-[3px] bg-[#C9A66B]/50" />
        <div className="absolute bottom-0 w-[0.5px] h-[3px] bg-[#C9A66B]/50" />
        
        {/* Center Dot */}
        <div className="w-[1.5px] h-[1.5px] rounded-full bg-[#C9A66B]/80" />
      </div>

      {/* Contextual HUD Label */}
      <AnimatePresence>
        {label && (
          <motion.span
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              x: '-50%',
              marginTop: 12,
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-instrument)',
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(201, 166, 107, 0.6)',
            }}
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ duration: 0.15 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
