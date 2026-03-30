'use client';
import React from 'react';
import { Container, Meta, GlassPane, Hairline } from '@/components/ui';
import { FadeUp, ScaleReveal } from '@/components/motion';

export function AboutStudio() {
    return (
        <section className="w-full py-[80px] relative z-10">
            <Hairline className="bg-[linear-gradient(90deg,transparent_10%,rgba(201,166,107,0.08)_50%,transparent_90%)] mb-[80px]" />
            
            {/* Ambient Base Glow */}
            <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] pointer-events-none mix-blend-screen"
                style={{
                    background: 'radial-gradient(ellipse at bottom, rgba(201,166,107,0.02), transparent 70%)'
                }}
                aria-hidden="true"
            />

            <Container>
                {/* CENTERED INTRO */}
                <FadeUp className="flex flex-col items-center text-center max-w-[640px] mx-auto mb-[28px]">
                    <Meta className="mb-[12px] text-accent-base">THE STUDIO</Meta>
                    <h2 className="font-sans text-[32px] font-semibold tracking-[-0.02em] text-white leading-[1.25]">
                        Brussels. Where Europe comes to negotiate — and where we come to create.
                    </h2>
                </FadeUp>

                {/* DESCRIPTION */}
                <FadeUp delay={0.15} className="max-w-[520px] mx-auto mb-[48px] text-center">
                    <p className="font-sans text-[16px] font-normal text-white/[0.72] leading-[1.8]">
                        We're based in Brussels — a city of quiet ambition. No Silicon Valley hype. No London agency ego. Just a studio in the heart of Europe, doing considered work for businesses that care about getting it right.
                    </p>
                </FadeUp>

                {/* BRUSSELS DETAILS */}
                <FadeUp delay={0.3} className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-[40px] relative z-10 mb-[56px]">
                    <div className="flex flex-col items-center text-center">
                        <Meta className="mb-[4px] text-white/[0.3]">TIMEZONE</Meta>
                        <span className="font-sans text-[14px] font-medium text-white">CET (UTC+1)</span>
                    </div>
                    <div className="hidden sm:block w-[0.5px] h-[24px] bg-white/[0.06]" />
                    
                    <div className="flex flex-col items-center text-center">
                        <Meta className="mb-[4px] text-white/[0.3]">LANGUAGES</Meta>
                        <span className="font-sans text-[14px] font-medium text-white">English · French · Arabic</span>
                    </div>
                    <div className="hidden sm:block w-[0.5px] h-[24px] bg-white/[0.06]" />
                    
                    <div className="flex flex-col items-center text-center">
                        <Meta className="mb-[4px] text-white/[0.3]">MEETING</Meta>
                        <span className="font-sans text-[14px] font-medium text-white">Video or in-person</span>
                    </div>
                    <div className="hidden sm:block w-[0.5px] h-[24px] bg-white/[0.06]" />
                    
                    <div className="flex flex-col items-center text-center">
                        <Meta className="mb-[4px] text-white/[0.3]">COORDINATES</Meta>
                        <span className="font-sans text-[14px] font-medium text-accent-base/[0.6]">50.8503°N, 4.3517°E</span>
                    </div>
                </FadeUp>

                {/* ATMOSPHERIC MAP ELEMENT (Option A) */}
                <ScaleReveal delay={0.4}>
                    <GlassPane 
                        padding="0" 
                        className="w-full aspect-[21/9] max-h-[240px] bg-accent-base/[0.015] border-white/[0.04] shadow-none flex items-center justify-center relative overflow-hidden"
                        data-cursor="STUDIO · BRUSSELS"
                    >
                        {/* Map Surface Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,242,237,0.01)_1px,transparent_1px)] bg-[size:16px_16px] opacity-20" />
                        
                        {/* Europe Outline Map (Abstract Context Dots) */}
                        <div className="relative w-full h-full max-w-[800px] flex items-center justify-center">
                            
                            {/* London */}
                            <div className="absolute top-[35%] left-[40%] flex items-center justify-center">
                                <div className="w-[3px] h-[3px] rounded-full bg-white opacity-10" />
                            </div>
                            
                            {/* Paris */}
                            <div className="absolute top-[60%] left-[45%] flex items-center justify-center">
                                <div className="w-[3px] h-[3px] rounded-full bg-white opacity-10" />
                            </div>
                            
                            {/* Amsterdam */}
                            <div className="absolute top-[38%] left-[51%] flex items-center justify-center">
                                <div className="w-[3px] h-[3px] rounded-full bg-white opacity-10" />
                            </div>

                            {/* Berlin */}
                            <div className="absolute top-[40%] left-[62%] flex items-center justify-center">
                                <div className="w-[3px] h-[3px] rounded-full bg-white opacity-10" />
                            </div>

                            {/* BRUSSELS (The core) */}
                            <div className="absolute top-[48%] left-[49%] flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2">
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute w-[24px] h-[24px] rounded-full bg-accent-base/10 mix-blend-screen animate-pulse-ring" />
                                    <div className="w-[6px] h-[6px] rounded-full bg-accent-base" />
                                </div>
                                <span className="absolute top-[12px] font-sans text-[8px] font-bold tracking-[0.2em] text-accent-base opacity-40 uppercase pt-[4px]">
                                    Brussels
                                </span>
                            </div>

                        </div>
                    </GlassPane>
                </ScaleReveal>
            </Container>
        </section>
    );
}
