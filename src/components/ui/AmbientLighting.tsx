'use client';

import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LightConfig {
  gradient: string;
  speed: number;
}

interface AmbientLightingProps {
  pageRef: React.RefObject<HTMLElement>;
  keyLight: LightConfig;
  fillLight: LightConfig;
  accentLight?: LightConfig;
}

export function AmbientLighting({ pageRef, keyLight, fillLight, accentLight }: AmbientLightingProps) {
  const { scrollY } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  });

  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax transforms - Capped at 500px scroll depth
  // Note: the speed is 0.97x, etc. relative to scroll. 
  // We want the light to DRIFT, so we apply a transform.
  // "Key: translateY at 0.97x scroll speed"
  const yKey = useTransform(scrollY, [0, 500], [0, 500 * (1 - keyLight.speed)]);
  const yFill = useTransform(scrollY, [0, 500], [0, 500 * (1 - fillLight.speed)]);
  const yAccent = useTransform(scrollY, [0, 500], [0, 500 * (1 - (accentLight?.speed ?? 0))]);

  const renderLight = (config: LightConfig, y: any) => {
    if (!config) return null;

    let gradient = config.gradient;
    if (isMobile) {
      // Mobile reduction: 25% smaller size, 20% lower opacity
      // We'll use a regex to adjust the gradient string
      gradient = gradient.replace(/ellipse (\d+)% (\d+)%/g, (_, w, h) => {
        return `ellipse ${Math.round(parseInt(w) * 0.75)}% ${Math.round(parseInt(h) * 0.75)}%`;
      });
      gradient = gradient.replace(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/g, (_, r, g, b, a) => {
        return `rgba(${r}, ${g}, ${b}, ${(parseFloat(a) * 0.8).toFixed(4)})`;
      });
    }

    return (
      <motion.div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 pointer-events-none z-0",
          config === keyLight && "animate-ambient-breathe"
        )}
        style={{
          background: gradient,
          y: (isMobile || prefersReducedMotion) ? 0 : y,
        }}
      />
    );
  };

  return (
    <>
      {renderLight(keyLight, yKey)}
      {renderLight(fillLight, yFill)}
      {accentLight && renderLight(accentLight, yAccent)}
    </>
  );
}

// Helper to use cn if not imported, or I'll just use a template string
import { cn } from '@/lib/utils';
