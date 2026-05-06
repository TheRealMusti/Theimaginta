// A11y pass applied
import React from 'react';
import { cn } from '@/lib/utils';

interface MetaProps {
    children: React.ReactNode;
    accent?: boolean;
    className?: string;
    as?: React.ElementType;
}

export function Meta({ children, accent = false, className, as: Component = 'span' }: MetaProps) {
    return (
        <Component
            className={cn(
                'font-sans text-[10px] font-medium tracking-[0.16em] uppercase',
                accent ? 'text-[#F5F2ED]' : 'text-[rgba(245,242,237,0.35)]',
                className
            )}
        >
            {children}
        </Component>
    );
}
