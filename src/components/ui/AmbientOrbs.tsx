'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OrbConfig {
  color: string;
  size: number;
  x: string;
  y: string;
  duration: number;
}

interface AmbientOrbsProps {
  orbs?: OrbConfig[];
  count?: number;
  color?: string;
  className?: string;
}

export function AmbientOrbs({ orbs, count = 3, color = 'rgba(196, 163, 110, 0.05)', className }: AmbientOrbsProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Use provided orbs or generate simple defaults
  const displayOrbs = orbs || Array.from({ length: count }).map((_, i) => ({
    color,
    size: 400 + i * 100,
    x: `${10 + i * 25}%`,
    y: `${20 + (i % 2) * 30}%`,
    duration: 15 + i * 5
  }));

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen", className)}>
      {displayOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            filter: 'blur(100px)',
          }}
          animate={prefersReducedMotion ? {} : {
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
