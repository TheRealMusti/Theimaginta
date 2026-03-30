// A11y pass applied

import React from 'react';
import { Container, GlassPane, Button } from '@/components/ui';
import { ScrollReveal, OpticalFocus } from '@/components/motion';
import { MagneticButton } from '@/components/motion/MagneticButton';

export function CTABand() {
    return (
        <section id="cta" aria-label="Call to Action" className="w-full pt-[48px] pb-[80px]">
            <Container>
                <ScrollReveal delay={0} className="w-full" variant="scale">
                    <OpticalFocus maxBlur={2} className="w-full">
                        <GlassPane
                            interactive={true}
                            className="animate-border-pulse flex flex-col md:flex-row items-center justify-between gap-[32px] md:gap-[48px] text-center md:text-left w-full py-[48px] px-[24px] md:py-[64px] md:px-[56px]"
                        >
                        {/* LEFT CONTENT */}
                        <div className="flex flex-col items-center md:items-start max-w-[460px]">
                            <h2 className="font-sans text-[32px] font-semibold tracking-[-0.03em] text-white">
                                Ready to build something real?
                            </h2>
                            <p className="font-sans text-[15px] font-normal leading-[1.6] text-white/[0.50] mt-[12px]">
                                We take on a limited number of partnerships each quarter.
                            </p>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="flex items-center justify-center w-full md:w-auto md:shrink-0" data-cursor="NEW_PROJECT">
                            <MagneticButton className="w-full sm:w-auto">
                                <Button variant="primary" className="whitespace-nowrap w-full">
                                    Let&apos;s Talk →
                                </Button>
                            </MagneticButton>
                        </div>
                    </GlassPane>
                    </OpticalFocus>
                </ScrollReveal>
            </Container>
        </section>
    );
}
