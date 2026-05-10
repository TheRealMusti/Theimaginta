// A11y pass applied
import React from 'react';
import { cn } from '@/lib/utils';

interface StatusDotProps {
  status: 'online' | 'offline' | 'amber' | 'security' | 'connection' | 'active';
  pulse?: boolean;
  className?: string;
}

export function StatusDot({ status, pulse = true, className }: StatusDotProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'online':
      case 'active':
      case 'security':
      case 'connection':
        return 'bg-prestige shadow-[0_0_8px_rgba(196,163,110,0.6)]';
      case 'amber':
        return 'bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.6)]';
      case 'offline':
      default:
        return 'bg-[#F5F2ED]/20';
    }
  };

  const getPulseColor = () => {
    switch (status) {
      case 'online':
      case 'active':
      case 'security':
      case 'connection':
        return 'bg-prestige';
      case 'amber':
        return 'bg-[#F59E0B]';
      default:
        return null;
    }
  };

  const pulseColor = getPulseColor();

  return (
    <div
      aria-label={status}
      className={cn("relative flex items-center justify-center w-[6px] h-[6px]", className)}
    >
      <div className={cn('absolute inset-0 rounded-full', getStatusColor())} />
      {pulse && pulseColor && (
        <div className={cn("absolute inset-0 rounded-full animate-status-pulse", pulseColor)} />
      )}
    </div>
  );
}
