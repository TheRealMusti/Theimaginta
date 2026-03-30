'use client';

import React, { useRef, MouseEvent, forwardRef } from 'react';
import { GlassPane, GlassPaneProps } from './GlassPane';

interface InteractiveGlassPaneProps extends GlassPaneProps {
    dataCursor?: string;
}

export const InteractiveGlassPane = forwardRef<HTMLDivElement, InteractiveGlassPaneProps>(
    ({ children, className = '', dataCursor, ...props }, ref) => {
        const highlightRef = useRef<HTMLDivElement>(null);

        const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
            const currentTarget = e.currentTarget;
            if (!highlightRef.current) return;
            
            const rect = currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            highlightRef.current.style.background = `radial-gradient(250px circle at ${x}px ${y}px, rgba(201,166,107, 0.05), transparent 70%)`;
            highlightRef.current.style.opacity = '1';
        };

        const handleMouseLeave = () => {
            if (highlightRef.current) {
                highlightRef.current.style.opacity = '0';
            }
        };

        return (
            <GlassPane 
                // @ts-expect-error - GlassPane component does not strictly type the ref prop
                ref={ref}
                className={`relative overflow-hidden group transition-all duration-500 ease ${className}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                data-cursor={dataCursor}
                {...props}
            >
                {/* The cursor highlight layers */}
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
