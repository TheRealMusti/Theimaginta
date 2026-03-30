'use client';
import React from 'react';
import { Container, Hairline } from '@/components/ui';
import { FadeUp } from '@/components/motion';
import { MagneticButton } from '@/components/motion/MagneticButton';
import Link from 'next/link';

export function AboutCTA() {
    return (
        <section className="w-full pt-[80px] pb-[120px] relative z-10">
            <Hairline className="bg-[linear-gradient(90deg,transparent_20%,rgba(201,166,107,0.08)_50%,transparent_80%)] mb-[80px]" />

            <Container>
                <div className="flex flex-col items-center text-center max-w-[640px] mx-auto">
                    <FadeUp>
                        <h2 className="font-sans text-[36px] md:text-[48px] font-semibold tracking-[-0.02em] text-white leading-[1.15] mb-[40px]">
                            Good digital doesn't age. <span className="text-white/[0.4]">Let's build something permanent.</span>
                        </h2>
                    </FadeUp>
                    
                    <FadeUp delay={0.15}>
                        <MagneticButton>
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center justify-center bg-white text-black px-[32px] py-[16px] rounded-pill font-sans text-[15px] font-medium tracking-[0.02em] transition-all duration-300 hover:bg-accent-base hover:text-black hover:shadow-[0_4px_32px_rgba(201,166,107,0.4)]"
                                data-cursor="START_PROJECT"
                            >
                                Start the Conversation
                            </Link>
                        </MagneticButton>
                    </FadeUp>
                </div>
            </Container>
        </section>
    );
}
