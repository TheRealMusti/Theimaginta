'use client';

import React, { useState, useRef, useEffect, useCallback, useId } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EASING } from '@/lib/constants';

export interface SelectOption {
    value: string;
    label: string;
}

export interface CustomSelectProps {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    id?: string;
    name?: string;
}

export function CustomSelect({
    options,
    value,
    onChange,
    placeholder = 'Select...',
    id,
    name,
}: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const generatedId = useId();
    const listboxId = `${id || generatedId}-listbox`;

    const selectedOption = options.find((o) => o.value === value);

    const close = useCallback(() => {
        setIsOpen(false);
        setActiveIndex(-1);
        triggerRef.current?.focus();
    }, []);

    // Close on outside click
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: MouseEvent) => {
            if (
                !triggerRef.current?.contains(e.target as Node) &&
                !listRef.current?.contains(e.target as Node)
            ) {
                close();
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [isOpen, close]);

    // Close on escape
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [isOpen, close]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                if (isOpen && activeIndex >= 0) {
                    onChange(options[activeIndex].value);
                    close();
                } else {
                    setIsOpen(true);
                    setActiveIndex(options.findIndex((o) => o.value === value));
                }
                break;
            case 'ArrowDown':
                e.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                    setActiveIndex(0);
                } else {
                    setActiveIndex((i) => Math.min(i + 1, options.length - 1));
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (isOpen) {
                    setActiveIndex((i) => Math.max(i - 1, 0));
                }
                break;
        }
    };

    return (
        <div className="relative">
            {name && <input type="hidden" name={name} value={value} />}
            <button
                ref={triggerRef}
                type="button"
                id={id}
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-controls={listboxId}
                aria-activedescendant={
                    isOpen && activeIndex >= 0
                        ? `${listboxId}-option-${activeIndex}`
                        : undefined
                }
                onClick={() => {
                    setIsOpen((v) => !v);
                    if (!isOpen) {
                        setActiveIndex(options.findIndex((o) => o.value === value));
                    }
                }}
                onKeyDown={handleKeyDown}
                className={cn(
                    'w-full flex items-center justify-between',
                    'bg-transparent border-b border-[rgba(245,242,237,0.08)] py-[14px]',
                    'font-sans text-[15px] text-left transition-colors duration-400',
                    'focus:outline-none',
                    selectedOption ? 'text-white' : 'text-white/20'
                )}
            >
                <span>{selectedOption?.label || placeholder}</span>
                <ChevronDown
                    size={16}
                    className={cn(
                        'text-white/35 transition-transform duration-300',
                        isOpen && 'rotate-180'
                    )}
                />
            </button>

            {/* Focus underline */}
            <span
                className={cn(
                    'absolute bottom-0 left-0 h-[1.5px] bg-accent-base origin-left transition-transform duration-400',
                    isOpen ? 'scale-x-100' : 'scale-x-0'
                )}
                style={{ width: '100%' }}
                aria-hidden="true"
            />

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={listRef}
                        role="listbox"
                        id={listboxId}
                        initial={
                            prefersReducedMotion
                                ? { opacity: 1 }
                                : { opacity: 0, y: -8 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        exit={
                            prefersReducedMotion
                                ? { opacity: 0 }
                                : { opacity: 0, y: -8 }
                        }
                        transition={{
                            duration: 0.25,
                            ease: EASING.smoothArray,
                        }}
                        className={cn(
                            'absolute z-50 top-full mt-[8px] w-full',
                            'bg-[rgba(14,12,16,0.95)] backdrop-blur-[20px]',
                            'border-[0.5px] border-white/[0.06] rounded-[12px]',
                            'overflow-hidden py-[4px]',
                            'shadow-[0_16px_48px_rgba(0,0,0,0.5)]'
                        )}
                    >
                        {options.map((option, index) => {
                            const isSelected = option.value === value;
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    key={option.value}
                                    type="button"
                                    id={`${listboxId}-option-${index}`}
                                    role="option"
                                    aria-selected={isSelected}
                                    onClick={() => {
                                        onChange(option.value);
                                        close();
                                    }}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={cn(
                                        'w-full flex items-center gap-[12px] min-h-[44px] px-[16px]',
                                        'font-sans text-[14px] text-left transition-colors duration-200',
                                        isActive && 'bg-white/[0.04]',
                                        isSelected
                                            ? 'text-accent-base'
                                            : 'text-white/70 hover:text-white'
                                    )}
                                >
                                    {isSelected && (
                                        <span
                                            className="w-[4px] h-[4px] rounded-full bg-accent-base flex-shrink-0"
                                            aria-hidden="true"
                                        />
                                    )}
                                    <span className={!isSelected ? 'ml-[16px]' : ''}>
                                        {option.label}
                                    </span>
                                </button>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
