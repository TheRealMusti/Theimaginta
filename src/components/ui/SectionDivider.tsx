'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionDividerProps {
  variant?: 'standard' | 'accent';
  className?: string;
}

export function SectionDivider({ variant = 'standard', className }: SectionDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReduced = useReducedMotion();
  const isAccent = variant === 'accent';

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax: 0.95x scroll speed (barely perceptible)
  // We use a small range for the translation to keep it subtle
  const yParallax = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const springParallax = useSpring(yParallax, { stiffness: 100, damping: 30 });

  // Draw Animation State
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (isReduced) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isReduced]);

  return (
    <div 
      ref={containerRef}
      aria-hidden="true"
      role="separator"
      className={cn(
        "relative w-full max-w-[1200px] mx-auto h-[32px] md:h-[48px] px-[24px] md:px-[48px] flex items-center justify-center overflow-visible pointer-events-none select-none z-20",
        className
      )}
    >
      {/* LAYER 1: THE LINE */}
      <motion.div 
        initial={isReduced ? { scaleX: 1 } : { scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2 // Starts shortly after dot appears
        }}
        className={cn(
          "w-full h-[0.5px] origin-center relative overflow-hidden",
          isAccent 
            ? "bg-[linear-gradient(90deg,transparent_0%,rgba(201,166,107,0.03)_20%,rgba(201,166,107,0.06)_50%,rgba(201,166,107,0.03)_80%,transparent_100%)]"
            : "bg-[linear-gradient(90deg,transparent_0%,rgba(245,242,237,0.02)_15%,rgba(245,242,237,0.05)_50%,rgba(245,242,237,0.02)_85%,transparent_100%)]"
        )}
      >
        {/* THE SHIMMER (Accent Only) */}
        {isAccent && !isReduced && isInView && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ 
              duration: 1.5, 
              ease: [0.16, 1, 0.3, 1],
              delay: 1.0 // Starts after line draw completes (0.2 delay + 0.8 duration)
            }}
            className="absolute inset-0 w-[60px] h-full bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.10),transparent)]"
          />
        )}
      </motion.div>

      {/* LAYER 2: THE CENTRE GLOW */}
      <motion.div 
        style={{ y: isReduced ? 0 : springParallax }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={cn(
          "absolute left-1/2 -translate-x-1/2 h-[1px] blur-[1px]",
          isAccent 
            ? "w-[180px] blur-[2px] bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.10),transparent)]" 
            : "w-[120px] bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.06),transparent)]"
        )}
      >
        {/* "The Breath" Animation */}
        {!isReduced && (
          <div className="absolute inset-0 animate-divider-breathe bg-inherit" />
        )}
      </motion.div>

      {/* LAYER 3: THE CENTRE DOT */}
      <motion.div 
        initial={isReduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ 
          type: 'spring', 
          stiffness: 260, 
          damping: 20, 
          delay: 0 
        }}
        className={cn(
          "absolute left-1/2 -translate-x-1/2 rounded-full",
          isAccent 
            ? "w-[4px] h-[4px] shadow-[0_0_6px_rgba(201,166,107,0.12)]" 
            : "w-[3px] h-[3px]"
        )}
        style={{ 
          y: isReduced ? 0 : springParallax,
          backgroundColor: isAccent ? 'rgba(201,166,107,0.24)' : 'rgba(245,242,237,0.16)' 
        }}
      />

      <style jsx global>{`
        @keyframes dividerBreathe {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-divider-breathe {
          animation: dividerBreathe 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-divider-breathe {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
