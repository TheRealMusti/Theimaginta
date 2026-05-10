// A11y pass applied
'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { EASING } from '@/lib/constants';

interface WhisperProps {
 text: string;
 position?: 'left' | 'right' | 'center' | 'absolute';
 orientation?: 'horizontal' | 'vertical';
 className?: string;
 animateContent?: boolean;
}

export function Whisper({ text, orientation = 'horizontal', className, animateContent = false }: WhisperProps) {
 const prefersReducedMotion = useReducedMotion();
 
 return (
 <motion.span
 aria-hidden="true"
 initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
 whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
 viewport={{ once: true, amount: 0.1 }}
 transition={{ duration: 1.5, delay: 0.6, ease: EASING.smoothArray }}
 className={cn(
 'whisper block',
 orientation === 'vertical' && 'whisper-vertical',
 animateContent && !prefersReducedMotion && 'animate-whisper-breathe',
 className
 )}
 >
 {text}
 </motion.span>
 );
}
