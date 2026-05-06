'use client';

import React from 'react';
import { motion, LayoutGroup, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

const FILTERS = [
    { key: 'all', label: 'ALL CHALLENGES' },
    { key: 'launching-new', label: 'LAUNCHING NEW' },
    { key: 'fixing-broken', label: 'FIXING BROKEN' },
    { key: 'scaling-operations', label: 'SCALING OPERATIONS' },
];

interface FilterBarProps {
    activeFilter: string;
    onFilterChange: (key: string) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div
            role="tablist"
            aria-label="Filter use cases by challenge type"
            className="flex gap-[12px] overflow-x-auto pb-[8px] -mx-[24px] px-[24px] md:mx-0 md:px-0 md:overflow-visible items-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            <LayoutGroup id="filter-pills">
                {FILTERS.map((filter) => {
                    const isActive = activeFilter === filter.key;
                    return (
                        <button
                            key={filter.key}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => onFilterChange(filter.key)}
                            className={cn(
                                'relative flex-shrink-0 px-[14px] py-[8px] rounded-full font-sans text-[11px] font-bold tracking-[0.08em]',
                                'transition-all duration-500 ease-out min-h-[40px]',
                                isActive
                                    ? 'text-accent-base'
                                    : 'text-white/60 hover:text-white/80'
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="filter-active-pill"
                                    className="absolute inset-0 rounded-full border border-accent-base/20 bg-accent-base/5"
                                    transition={
                                        prefersReducedMotion
                                            ? { duration: 0 }
                                            : { type: 'spring', bounce: 0.1, duration: 0.6 }
                                    }
                                />
                            )}
                            <span className="relative z-10">{filter.label}</span>
                        </button>
                    );
                })}
            </LayoutGroup>
        </div>
    );
}
