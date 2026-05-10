'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LuminousCardProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  duration?: number;
  isActive?: boolean;
  animateBorder?: boolean;
  onClick?: () => void;
}

export function LuminousCard({ 
  children, 
  className, 
  color = '#C9A66B', 
  duration = 5,
  isActive = false,
  animateBorder = true,
  onClick
}: LuminousCardProps) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "relative p-[1px] rounded-2xl overflow-hidden group transition-all duration-700",
        isActive ? "scale-[1.01]" : "hover:scale-[1.005] cursor-pointer",
        className
      )}
    >
      {/* 1. PRECISION TRACE BORDER (Multiple Segments) */}
      {animateBorder && (
        <div className="absolute inset-[-100%] z-0 pointer-events-none">
          {/* Main Segment */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: [0, 360] }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            style={{
              background: `conic-gradient(from 0deg, transparent 0%, transparent 48%, ${color} 50%, transparent 52%, transparent 100%)`,
              opacity: isActive ? 0.64 : 0.16,
            }}
          />
          {/* Faster Lead Segment */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: duration * 0.6, repeat: Infinity, ease: "linear" }}
            style={{
              background: `conic-gradient(from 0deg, transparent 0%, transparent 49.5%, ${color} 50%, transparent 50.5%, transparent 100%)`,
              opacity: isActive ? 0.32 : 0.08,
            }}
          />
          {/* Subtle Trail Segment */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: duration * 1.5, repeat: Infinity, ease: "linear" }}
            style={{
              background: `conic-gradient(from 0deg, transparent 0%, transparent 45%, ${color} 50%, transparent 55%, transparent 100%)`,
              opacity: isActive ? 0.16 : 0,
            }}
          />
        </div>
      )}

      {/* 2. MODULAR INNER CONTENT */}
      <div className={cn(
        "relative z-10 w-full h-full rounded-[15px] transition-all duration-700 overflow-hidden",
        "bg-[#0A090C]/90 backdrop-blur-[12px]",
        isActive ? "bg-[#0A090C]/50" : "bg-[#0A090C]/98 group-hover:bg-[#0A090C]/85"
      )}>
        {/* Interior Corner Brackets */}
        <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity duration-700">
           {/* Top Left */}
           <div className="absolute top-3 left-3 w-3 h-3 border-t border-l" style={{ borderColor: color }} />
           {/* Top Right */}
           <div className="absolute top-3 right-3 w-3 h-3 border-t border-r" style={{ borderColor: color }} />
           {/* Bottom Left */}
           <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l" style={{ borderColor: color }} />
           {/* Bottom Right */}
           <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r" style={{ borderColor: color }} />
        </div>

        {/* Global Shimmer Glow */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: isActive ? [0.04, 0.10, 0.04] : 0,
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: `radial-gradient(circle at center, ${color}12 0%, transparent 80%)`
          }}
        />
        
        {children}
      </div>

      {/* 3. EXTERNAL SYSTEM GLOW */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[-1] blur-[40px]"
            style={{
              background: `radial-gradient(circle at center, ${color}08 0%, transparent 70%)`
            }}
          />
        )}
      </AnimatePresence>

      {/* 4. PRECISION OUTER HAIRLINE */}
      <div 
        className={cn(
          "absolute inset-0 border rounded-2xl pointer-events-none z-20 transition-all duration-700",
          isActive ? "border-white/20" : "border-white/4 group-hover:border-white/10"
        )} 
      />
    </div>
  );
}
