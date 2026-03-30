'use client';
import React from 'react';
import { Container, Meta, GlassPane } from '@/components/ui';
import { ScaleReveal, FadeUp } from '@/components/motion';

export function AboutTestimonial() {
    return (
        <section className="w-full py-[80px] relative z-10">
            <Container>
                <ScaleReveal>
                    <GlassPane 
                        padding="64px 40px" 
                        className="w-full bg-accent-base/[0.03] border-accent-base/[0.1] shadow-[inset_0_1px_0_rgba(201,166,107,0.08)] text-center flex flex-col items-center relative overflow-hidden"
                        data-cursor="READ · MORE"
                    >
                        {/* Background Quote Mark Watermark */}
                        <div className="absolute top-[-20px] left-[50%] -translate-x-1/2 font-serif text-[240px] text-accent-base/[0.04] select-none pointer-events-none leading-none">
                            "
                        </div>

                        <div className="relative z-10 max-w-[760px]">
                            <FadeUp delay={0.1}>
                                <p className="font-sans text-[22px] md:text-[28px] font-medium tracking-tight text-white leading-[1.5] mb-[32px]">
                                    "Imaginta didn't just redesign our platform — they rethought how we communicate our entire business model. The difference isn't just aesthetic; it's operational. They're the partner we should have hired two years ago."
                                </p>
                            </FadeUp>
                            
                            <FadeUp delay={0.25} className="flex flex-col items-center justify-center gap-[4px]">
                                <span className="font-sans text-[16px] font-medium text-white">Sarah V.</span>
                                <Meta className="text-white/[0.4]">FOUNDER (FINTECH)</Meta>
                            </FadeUp>
                        </div>
                    </GlassPane>
                </ScaleReveal>
            </Container>
        </section>
    );
}
