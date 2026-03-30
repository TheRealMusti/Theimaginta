import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps {
    children: React.ReactNode;
    active?: boolean;
    className?: string;
}

export function Badge({ children, active = false, className }: BadgeProps) {
    return (
        <span
            className={cn(
                'font-sans text-[10px] font-medium tracking-[0.08em] uppercase px-[12px] py-[5px] rounded-pill transition-all duration-400 ease-base',
                active
                    ? 'text-accent-base bg-accent-dim'
                    : 'text-white/20 bg-white/[0.03]',
                className
            )}
        >
            {children}
        </span>
    );
}
