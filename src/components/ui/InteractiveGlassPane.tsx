'use client';

import React, { useRef, MouseEvent, forwardRef } from 'react';
import { GlassPane, GlassPaneProps } from './GlassPane';

interface InteractiveGlassPaneProps extends GlassPaneProps {
  dataCursor?: string;
}

export const InteractiveGlassPane = forwardRef<HTMLDivElement, InteractiveGlassPaneProps>(
  ({ children, className = '', variant = 'standard', plane = 2, hover = true, dataCursor, ...props }, ref) => {
    const highlightRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const currentTarget = e.currentTarget;
      if (!highlightRef.current) return;
      
      const rect = currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      highlightRef.current.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(201,166,107, 0.03) 0%, rgba(201,166,107, 0.01) 40%, transparent 80%)`;
      highlightRef.current.style.mixBlendMode = 'screen';
      highlightRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (highlightRef.current) {
        highlightRef.current.style.opacity = '0';
      }
    };

    return (
      <GlassPane 
        ref={ref}
        variant={variant}
        plane={plane}
        hover={hover}
        className={`relative overflow-hidden group glass-card-interactive ${className}`}
        onMouseMove={(e) => {
          handleMouseMove(e);
          props.onMouseMove?.(e);
        }}
        onMouseLeave={(e) => {
          handleMouseLeave();
          props.onMouseLeave?.(e);
        }}
        data-cursor={dataCursor}
        {...props}
      >
        {/* Cursor highlight layer - updated for subtle uplift */}
        <div 
          ref={highlightRef} 
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-[600ms] opacity-0"
        />
        
        {/* Children container */}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </GlassPane>
    );
  }
);

InteractiveGlassPane.displayName = 'InteractiveGlassPane';
