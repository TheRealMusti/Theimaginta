'use client';
import React from 'react';
import { Container, Meta, GlassPane, Hairline } from '@/components/ui';
import { FadeUp, StaggerGroup, StaggerItem } from '@/components/motion';

const PRINCIPLES = [
 {
 num: '01',
 title: 'Partnerships, Not Projects',
 desc: "We don&apos;t optimize for project volume. We optimize for depth. Our best work happens in month 8, not week 1 — because that&apos;s when we understand your business well enough to make decisions that actually matter."
 },
 {
 num: '02',
 title: 'Design Is the Strategy',
 desc: "We don&apos;t separate strategy from execution. The way something looks, works, and feels IS the strategy. If the design can&apos;t explain the business model at a glance, it&apos;s not done."
 },
 {
 num: '03',
 title: 'Small Teams, Full Context',
 desc: "Your project isn&apos;t passed between departments. The person who designed the brand is in the room when the code ships. Context is the most expensive thing in digital — we never waste it."
 },
 {
 num: '04',
 title: 'Honesty Over Comfort',
 desc: "We&apos;ll tell you if your idea needs rethinking. We&apos;ll flag scope that doesn&apos;t serve the goal. We&apos;d rather have an uncomfortable conversation now than deliver mediocre work later."
 },
 {
 num: '05',
 title: 'Craft Is Not a Luxury',
 desc: "Pixel-level precision, considered typography, smooth interactions — these aren&apos;t extras for big budgets. They&apos;re the baseline. Every business deserves work that looks like someone cared."
 },
 {
 num: '06',
 title: 'Technology Serves People',
 desc: "We don&apos;t chase trends. We don&apos;t add AI because it&apos;s fashionable. Every technical decision answers one question: does this make a real person&apos;s experience better? If not, we don&apos;t build it."
 }
];

export function AboutPrinciples() {
 return (
 <section className="w-full py-[80px] relative z-10">
 <Hairline className="bg-[linear-gradient(90deg,transparent_10%,rgba(201, 166, 107, 0.06)_50%,transparent_90%)] mb-[80px]" />
 
 {/* Ambient Background Glow for Principles */}
 <div 
 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-[1200px] h-[800px] pointer-events-none mix-blend-screen"
 style={{
 background: 'radial-gradient(ellipse at center, rgba(201,166,107,0.025), transparent 60%)'
 }}
 aria-hidden="true"
 />
 
 {/* Background typographic watermark */}
 <div className="hidden lg:block absolute top-[50%] right-[5%] -translate-y-1/2 text-[240px] font-sans font-extrabold text-accent-base/[0.02] pointer-events-none select-none" aria-hidden="true">
 06
 </div>

 <Container>
 {/* CENTERED INTRO */}
 <FadeUp className="flex flex-col items-center text-center max-w-[600px] mx-auto mb-[56px]">
 <Meta className="text-accent-base mb-[12px]">WHAT DRIVES US</Meta>
 <h2 className="font-sans text-[36px] font-semibold tracking-[-0.02em] text-[#F5F2ED] leading-[1.15]">
 Principles, not platitudes.
 </h2>
 </FadeUp>

 {/* THE PRINCIPLES GRID */}
 <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-3">
 {PRINCIPLES.map((principle) => (
 <StaggerItem key={principle.num} className="h-full">
 <GlassPane 
 padding="36px" 
 className="h-full relative overflow-hidden group transition-colors duration-500 hover:border-accent-base/20"
 data-cursor={`PRINCIPLE · ${principle.title.toUpperCase()}`}
 >
 {/* Watermark Number */}
 <div className="absolute top-[24px] right-[24px] font-sans text-[48px] font-bold text-accent-base/[0.08] select-none leading-none pointer-events-none">
 {principle.num}
 </div>
 
 <div className="relative z-10 pr-[40px]">
 <h3 className="font-sans text-[18px] font-semibold text-[#F5F2ED] mb-[10px] relative inline-flex">
 {principle.title}
 </h3>
 <p className="font-sans text-[14px] font-normal text-[#F5F2ED]/[0.50] leading-[1.7]">
 {principle.desc}
 </p>
 </div>
 </GlassPane>
 </StaggerItem>
 ))}
 </StaggerGroup>
 </Container>
 </section>
 );
}
