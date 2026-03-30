// A11y pass applied
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Meta, GlassPane } from '@/components/ui';
import { ScrollReveal, OpticalFocus } from '@/components/motion';

const testimonials = [
    {
        quote: "Imaginta didn't just build our website — they understood our business and designed something that actually moves the needle. Two years in, they're still our first call.",
        name: "Sarah Chen",
        role: "CEO, Lifecycle Health",
    },
    {
        quote: "The level of craft and attention to detail is rare. Every deliverable feels considered, intentional, and polished far beyond what we expected.",
        name: "Marc Dubois",
        role: "Founder, Kinetic Studios",
    },
    {
        quote: "Working with Imaginta feels like having a senior design team embedded in your company. They think like owners, not vendors.",
        name: "Aisha Rahman",
        role: "COO, Nexus Ventures",
    },
];

export function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const next = (prev + 1) % testimonials.length;
                return next;
            });
        }, 6000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            } else if (e.key === 'ArrowLeft') {
                setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section aria-label="Client Testimonials" className="w-full py-[64px] md:py-[96px]">
            <Container className="flex justify-center">
                <ScrollReveal delay={0.1} className="w-full max-w-[800px]">
                    <OpticalFocus maxBlur={2} className="w-full">
                        <GlassPane interactive={true} className="w-full flex flex-col items-center text-center py-[32px] px-[24px] md:py-[56px] md:px-[48px] shadow-[inset_0_1px_0_rgba(245,242,237,0.04)]">

                        <span className="font-sans text-[64px] font-light leading-none text-white/35 select-none mb-[16px]">
                            &ldquo;
                        </span>

                        <div className="flex flex-col items-center justify-center w-full relative min-h-[160px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    id="testimonial-panel"
                                    role="tabpanel"
                                    aria-live="polite"
                                    key={currentIndex}
                                    style={{ willChange: 'transform, opacity' }}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.5, ease: 'easeOut' }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -8,
                                        transition: { duration: 0.3, ease: 'easeIn' }
                                    }}
                                    className="flex flex-col items-center justify-center"
                                >
                                    <p className="font-sans text-[17px] md:text-[20px] font-normal italic leading-[1.8] text-white/[0.85] max-w-[600px]">
                                        {testimonials[currentIndex].quote}
                                    </p>
                                    <div className="mt-[32px] flex flex-col items-center">
                                        <span className="font-sans text-[14px] font-medium text-white">
                                            {testimonials[currentIndex].name}
                                        </span>
                                        <Meta className="mt-[4px]">
                                            {testimonials[currentIndex].role}
                                        </Meta>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* DOT INDICATORS */}
                        <div role="tablist" aria-label="Select testimonial" className="mt-[40px] flex items-center justify-center gap-[4px] md:gap-[12px]">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    role="tab"
                                    aria-selected={idx === currentIndex}
                                    aria-controls="testimonial-panel"
                                    onClick={() => {
                                        if (idx !== currentIndex) {
                                            setCurrentIndex(idx);
                                        }
                                    }}
                                    className="w-[44px] h-[44px] flex items-center justify-center group"
                                    aria-label={`View testimonial ${idx + 1}`}
                                >
                                    <span
                                        className={`w-[6px] h-[6px] rounded-full transition-colors duration-300 ease-smooth ${idx === currentIndex
                                            ? 'bg-white'
                                            : 'bg-white/35 group-hover:bg-white/50'
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>

                    </GlassPane>
                    </OpticalFocus>
                </ScrollReveal>
            </Container>
        </section>
    );
}
