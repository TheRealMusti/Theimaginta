'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useMousePosition } from '@/hooks/useMousePosition';

export interface GlassPaneProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    padding?: string;
    radius?: number | string;
    interactive?: boolean;
}

export function GlassPane({
    children,
    className,
    hover = false,
    padding,
    radius,
    interactive = false,
    ...props
}: GlassPaneProps) {
    const paneRef = React.useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = React.useState(false);
    const { mousePosition, isTouchDevice } = useMousePosition();

    useEffect(() => {
        if (!interactive || !isHovered || !paneRef.current || !mousePosition || isTouchDevice) return;
        const rect = paneRef.current.getBoundingClientRect();
        const x = mousePosition.x - rect.left;
        const y = mousePosition.y - rect.top;
        paneRef.current.style.setProperty('--mouse-x', `${x}px`);
        paneRef.current.style.setProperty('--mouse-y', `${y}px`);
    }, [mousePosition, isHovered, interactive, isTouchDevice]);

    return (
        <div
            ref={paneRef}
            {...props}
            onMouseEnter={(e) => {
                if (interactive) setIsHovered(true);
                props.onMouseEnter?.(e);
            }}
            onMouseLeave={(e) => {
                if (interactive) setIsHovered(false);
                props.onMouseLeave?.(e);
            }}
            className={cn(
                'relative bg-white/[0.02] backdrop-blur-glass border-[0.5px] border-white/[0.06] overflow-hidden',
                'transition-all duration-400 ease-smooth',
                hover && 'hover:bg-white/[0.04] hover:border-white/[0.12]',
                className
            )}
            style={{
                padding: padding,
                borderRadius: radius !== undefined ? radius : 16,
            }}
        >
            {interactive && !isTouchDevice && (
                <div
                    className="absolute inset-0 pointer-events-none rounded-[inherit] z-0"
                    style={{
                        opacity: isHovered ? 1 : 0,
                        transition: 'opacity 0.6s ease',
                        background: 'radial-gradient(300px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(201,166,107, 0.06) 0%, rgba(201,166,107, 0.01) 40%, transparent 80%)',
                        mixBlendMode: 'luminosity'
                    }}
                />
            )}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
