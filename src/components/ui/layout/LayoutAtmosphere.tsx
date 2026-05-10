'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * LAYOUT ATMOSPHERE (The Environmental Void)
 * 
 * This component provides the fixed background layer for the entire site.
 * It features a deep black base, a drifting 'nebula' cloud, spatial noise,
 * and a scroll-reactive temperature shift (amber warming).
 */
export function LayoutAtmosphere() {
  const { scrollYProgress } = useScroll();
  
  // ════ SPATIAL DEPTH & TEMPERATURE ════
  const amberTint = useTransform(scrollYProgress, [0, 1], [0, 0.010]);
  const nebulaScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* 1. THE DEEP VOID (Base Layer) */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* 2. THE NEBULA DRIFT (Moving Atmospheric Volume) */}
      <motion.div 
        style={{ scale: nebulaScale }}
        className="absolute inset-0 opacity-[0.4]"
      >
         <div className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] animate-nebula-drift"
              style={{
                background: 'radial-gradient(circle at center, rgba(196,163,110,0.028) 0%, transparent 60%)',
                filter: 'blur(120px)'
              }} 
         />
      </motion.div>

      {/* 3. ENVIRONMENTAL TEMPERATURE SHIFT */}
      <motion.div 
        style={{ opacity: amberTint }}
        className="absolute inset-0 bg-[#C9A66B]/10 mix-blend-color"
      />

      {/* 4. EYE-ADJUST VIGNETTE (Entrance Focus) */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.95)] animate-vignette-focus" />

      {/* 5. VOID TEXTURE (Micro-Grain) */}
      <div className="absolute inset-0 opacity-[0.01] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <style jsx global>{`
        @keyframes nebulaDrift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(2%, 4%) rotate(1deg); }
          66% { transform: translate(-1%, -2%) rotate(-1deg); }
        }
        .animate-nebula-drift {
          animation: nebulaDrift 40s ease-in-out infinite;
        }
        @keyframes vignetteFocus {
          0% { opacity: 0; filter: blur(20px); }
          100% { opacity: 1; filter: blur(0px); }
        }
        .animate-vignette-focus {
          animation: vignetteFocus 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
