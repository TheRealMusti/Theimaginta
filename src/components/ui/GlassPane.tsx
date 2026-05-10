'use client';

import React, { forwardRef, useEffect, useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

export interface GlassPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'standard' | 'warm';
  plane?: 1 | 2 | 3;
  noBlur?: boolean;
  hover?: boolean;
  padding?: string;
  radius?: number | string;
}

export const GlassPane = forwardRef<HTMLDivElement, GlassPaneProps>(
  function GlassPane(
    {
      children,
      className,
      variant = 'standard',
      plane = 2,
      noBlur = false,
      hover = false,
      padding,
      radius,
      ...props
    },
    forwardedRef
  ) {
    const [hasShimmered, setHasShimmered] = useState(false);
    const [isShimmerActive, setIsShimmerActive] = useState(false);
    const internalRef = useRef<HTMLDivElement>(null);

    // Merge forwarded ref with internal ref
    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        (internalRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      },
      [forwardedRef]
    );

    useEffect(() => {
      if (typeof window === 'undefined' || window.innerWidth < 768) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasShimmered) {
            setTimeout(() => {
              setIsShimmerActive(true);
              setHasShimmered(true);
            }, 200);
          }
        },
        { threshold: 0.3 }
      );

      if (internalRef.current) {
        observer.observe(internalRef.current);
      }

      return () => observer.disconnect();
    }, [hasShimmered]);

    const borderOpacity = {
      1: 0.05,
      2: 0.04,
      3: 0.03,
    }[plane];

    const restingBg = variant === 'standard'
      ? 'rgba(245,242,237,0.014)'
      : 'rgba(201,166,107,0.010)';

    const restingBorder = variant === 'standard'
      ? `rgba(245,242,237,${borderOpacity})`
      : `rgba(201,166,107,0.040)`;

    const hoverBg = variant === 'standard'
      ? 'rgba(245,242,237,0.038)'
      : 'rgba(201,166,107,0.03)';

    return (
      <div
        {...props}
        ref={setRefs}
        className={cn(
          'relative overflow-hidden transition-all duration-500 ease-smooth group',
          !noBlur && 'backdrop-blur-[8px]',
          hover && 'hover:shadow-[0_4px_20px_rgba(201,166,107,0.03)]',
          isShimmerActive && 'shimmer-active',
          className
        )}
        style={{
          background: restingBg,
          border: `0.5px solid ${restingBorder}`,
          padding: padding,
          borderRadius: radius !== undefined ? radius : 16,
          ...props.style,
        }}
      >
        {/* GLASS SHIMMER PSEUDO (Patch 3) */}
        <div
          className={cn(
            "absolute inset-0 pointer-events-none z-10 transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] -translate-x-full",
            isShimmerActive && "translate-x-full"
          )}
          style={{
            background: 'linear-gradient(120deg, transparent 30%, rgba(245,242,237,0.03) 50%, transparent 70%)',
            borderRadius: radius !== undefined ? radius : 16,
          }}
        />

        {/* SHADOW ARCHITECTURE: BOTTOM-EDGE HIGHLIGHT (Plane 1 Only) */}
        {plane === 1 && (
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px pointer-events-none z-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(245,242,237,0.03), transparent)'
            }}
          />
        )}

        {/* INNER CARD TOP HIGHLIGHT (Warm Glass Only) */}
        {variant === 'warm' && (
          <div
            className="absolute top-0 left-0 w-full h-px pointer-events-none z-0 transition-opacity duration-300 opacity-50 group-hover:opacity-100"
            style={{
              background: 'linear-gradient(90deg, transparent 10%, rgba(201,166,107,0.05) 50%, transparent 90%)'
            }}
          />
        )}

        {/* HOVER OVERLAY - Material Recalibration */}
        {hover && (
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: hoverBg,
              border: '0.5px solid rgba(201,166,107,0.10)'
            }}
          />
        )}

        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    );
  }
);
