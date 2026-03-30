'use client';
import React from 'react';
import { Container, Meta, GlassPane } from '@/components/ui';
import { FadeUp, ScrollReveal } from '@/components/motion';
import { motion, useScroll, useTransform } from 'framer-motion';

export function AboutOrigin() {
    const { scrollYProgress } = useScroll();
    const monogramY = useTransform(scrollYProgress, [0, 1], [0, 50]); // 0.95x slight parallax feel

    return (
        <section className="w-full py-[80px] relative z-10">
            {/* Origin ambient glow */}
            <div 
                className="absolute top-1/2 left-[20%] -translate-y-1/2 w-[600px] h-[600px] pointer-events-none mix-blend-screen"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(245,242,237,0.03), transparent 70%)'
                }}
                aria-hidden="true"
            />
            
            {/* Background typographic watermark */}
            <div className="hidden lg:block absolute top-[10%] right-[5%] text-[280px] font-sans font-extrabold text-accent-base/[0.02] pointer-events-none select-none" aria-hidden="true">
                <motion.span style={{ y: monogramY }} className="block">I</motion.span>
            </div>

            <Container>
                <div className="flex flex-col md:flex-row gap-[64px] relative z-10">
                    {/* LEFT: 5fr - Narrative Text */}
                    <div className="flex-[5]">
                        <FadeUp>
                            <Meta className="text-accent-base mb-[24px]">THE FOUNDER</Meta>
                            <h2 className="font-sans text-[36px] font-semibold tracking-[-0.02em] text-white leading-[1.15]">
                                Built by someone who learned to speak three visual languages.
                            </h2>
                        </FadeUp>

                        <div className="mt-[28px] flex flex-col gap-[20px]">
                            <FadeUp delay={0.1}>
                                <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8]">
                                    Imaginta was founded by Mustafa — a creative technologist born in Baghdad, shaped by both Middle Eastern warmth and European precision. Moving to Belgium in 2011 didn't just change his address. It gave him a second design vocabulary.
                                </p>
                            </FadeUp>
                            
                            <FadeUp delay={0.2}>
                                <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8]">
                                    That dual perspective — the hospitality and richness of Arabic culture fused with the structure and minimalism of European design — is what makes Imaginta's work feel different. Warmer than most tech. Sharper than most agencies. Human at the core.
                                </p>
                            </FadeUp>

                            <FadeUp delay={0.3}>
                                <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8]">
                                    Before Imaginta, Mustafa spent years working across branding, product design, and frontend architecture — wearing every hat at once because that's what startups demand. He built Imaginta around a simple belief: small businesses deserve the same caliber of digital craft that only large companies usually get.
                                </p>
                            </FadeUp>
                        </div>

                        {/* Detail Pairs */}
                        <FadeUp delay={0.4} className="mt-[32px] flex flex-col sm:flex-row gap-[24px] sm:gap-[40px]">
                            <div className="flex flex-col gap-[4px]">
                                <Meta className="text-white/[0.3]">BASED IN</Meta>
                                <span className="font-sans text-[14px] font-medium text-white">Brussels, Belgium</span>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <Meta className="text-white/[0.3]">FOUNDED</Meta>
                                <span className="font-sans text-[14px] font-medium text-white">2024</span>
                            </div>
                            <div className="flex flex-col gap-[4px]">
                                <Meta className="text-white/[0.3]">FOCUS</Meta>
                                <span className="font-sans text-[14px] font-medium text-white">SMEs & Startups</span>
                            </div>
                        </FadeUp>
                    </div>

                    {/* RIGHT: 4fr - Visual (Monogram) */}
                    <ScrollReveal delay={0.3} className="flex-[4]">
                        <GlassPane 
                            padding="40px" 
                            className="h-full min-h-[400px] flex flex-col items-center justify-center text-center bg-accent-base/[0.02] border-accent-base/[0.06] shadow-[inset_0_1px_0_rgba(201,166,107,0.1)] relative overflow-hidden"
                        >
                            <motion.div 
                                style={{ y: monogramY }} 
                                className="font-sans text-[200px] font-extrabold text-accent-base/[0.06] leading-none mb-[24px] select-none"
                            >
                                M
                            </motion.div>
                            <h3 className="font-sans text-[24px] font-medium text-white mb-[8px]">Mustafa</h3>
                            <Meta className="text-accent-base">FOUNDER & CREATIVE DIRECTOR</Meta>
                        </GlassPane>
                    </ScrollReveal>
                </div>
            </Container>
        </section>
    );
}
