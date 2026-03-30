import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div className={cn('w-full max-w-[1200px] mx-auto px-[24px] md:px-[48px]', className)}>
            {children}
        </div>
    );
}
