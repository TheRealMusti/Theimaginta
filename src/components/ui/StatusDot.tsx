// A11y pass applied
import React from 'react';
import { cn } from '@/lib/utils';

interface StatusDotProps {
    status: 'online' | 'offline' | 'amber';
    pulse?: boolean;
}

export function StatusDot({ status, pulse = true }: StatusDotProps) {
    return (
        <div
            aria-label={status === 'online' ? 'Currently available' : status === 'amber' ? 'Available next business day' : 'Not available'}
            className="relative flex items-center justify-center w-[6px] h-[6px]"
        >
            <div
                className={cn(
                    'absolute inset-0 rounded-full',
                    status === 'online'
                        ? 'bg-[#34D399] shadow-[0_0_8px_rgba(52,211,153,0.6)]'
                        : status === 'amber'
                        ? 'bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.6)]'
                        : 'bg-white/20'
                )}
            />
            {status === 'online' && pulse && (
                <div className="absolute inset-0 rounded-full bg-[#34D399] animate-status-pulse" />
            )}
            {status === 'amber' && pulse && (
                <div className="absolute inset-0 rounded-full bg-[#F59E0B] animate-status-pulse" />
            )}
        </div>
    );
}
