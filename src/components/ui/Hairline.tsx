import React from 'react';
import { cn } from '@/lib/utils';

interface HairlineProps {
 gradient?: boolean;
 className?: string;
}

export function Hairline({ gradient = true, className }: HairlineProps) {
 return (
 <div
  className={cn('w-full h-[0.5px]', className)}
  style={{
  background: gradient
  ? 'linear-gradient(90deg, transparent 15%, rgba(201, 166, 107, 0.06) 50%, transparent 85%)'
  : 'rgba(245, 242, 237, 0.04)',
  }}
 />
 );
}
