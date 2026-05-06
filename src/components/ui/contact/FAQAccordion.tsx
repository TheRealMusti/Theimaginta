'use client';

import React, { useState, useId } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Hairline } from '@/components/ui';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const prefersReducedMotion = useReducedMotion();
    const baseId = useId();

    return (
        <div>
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                const triggerId = `${baseId}-trigger-${index}`;
                const panelId = `${baseId}-panel-${index}`;

                return (
                    <div key={index}>
                        {index > 0 && (
                            <Hairline
                                gradient={false}
                                className={cn(
                                    'transition-colors duration-300',
                                    isOpen && '!bg-[rgba(201,166,107,0.12)]'
                                )}
                            />
                        )}

                        <div className="relative">
                            {/* Amber dot indicator */}
                            {isOpen && (
                                <span
                                    className="absolute left-[-16px] top-[22px] w-[4px] h-[4px] rounded-full bg-accent-base"
                                    aria-hidden="true"
                                />
                            )}

                            <button
                                type="button"
                                id={triggerId}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() =>
                                    setOpenIndex(isOpen ? null : index)
                                }
                                className={cn(
                                    'w-full flex items-center justify-between py-[20px] text-left',
                                    'transition-colors duration-300',
                                    isOpen
                                        ? 'text-white'
                                        : 'text-white/[0.72] hover:text-white'
                                )}
                            >
                                <span
                                    className={cn(
                                        'font-sans text-[16px] pr-[24px]',
                                        isOpen ? 'font-medium' : 'font-medium'
                                    )}
                                >
                                    {item.question}
                                </span>

                                <span
                                    className={cn(
                                        'flex-shrink-0 transition-colors duration-300',
                                        isOpen
                                            ? 'text-accent-base'
                                            : 'text-white/35'
                                    )}
                                >
                                    {isOpen ? (
                                        <X size={16} />
                                    ) : (
                                        <Plus size={16} />
                                    )}
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={triggerId}
                                        initial={
                                            prefersReducedMotion
                                                ? { height: 'auto', opacity: 1 }
                                                : { height: 0, opacity: 0 }
                                        }
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={
                                            prefersReducedMotion
                                                ? { height: 0, opacity: 0 }
                                                : { height: 0, opacity: 0 }
                                        }
                                        transition={
                                            prefersReducedMotion
                                                ? { duration: 0 }
                                                : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                                        }
                                        className="overflow-hidden"
                                    >
                                        <p className="font-sans text-[15px] leading-[1.7] text-white/50 pb-[20px]">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
