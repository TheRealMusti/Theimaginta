import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
 children: React.ReactNode;
 className?: string;
}

export function Container({ children, className }: ContainerProps) {
 return (
 <div className={cn('w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-9 lg:px-12', className)}>
 {children}
 </div>
 );
}
