'use client';
import React from 'react';
import { Container, Meta, GlassPane, Hairline } from '@/components/ui';
import { FadeUp, ScrollReveal } from '@/components/motion';

const GREAT_FIT = [
 "You&apos;re a startup or SME (5–200 people) building something real",
 "You want a long-term partner, not a one-time deliverable",
 "You care about quality — not just speed",
 "You&apos;re ready to invest in digital as a core business asset",
 "You need brand, product, and code to work as one system",
 "You value honest, direct communication"
];

const NOT_FIT = [
 "You need a project finished in under 2 weeks",
 "You&apos;re looking for the cheapest option available",
 "You want to manage every pixel yourself",
 "You need a team of 20+ people on a single project",
 "You&apos;re after a template site with no custom design",
 "You prefer working with a large agency brand name"
];

export function AboutFit() {
 return (
 <section className="w-full py-[80px] relative z-10">
 <Hairline className="bg-[linear-gradient(90deg,transparent_10%,rgba(201, 166, 107, 0.06)_50%,transparent_90%)] mb-[80px]" />
 
 <Container>
 {/* SECTION HEADER */}
 <FadeUp className="flex flex-col items-center text-center max-w-[680px] mx-auto mb-[48px]">
 <Meta className="mb-[12px] text-[#F5F2ED]/[0.3]">WHO WE&apos;RE BUILT FOR</Meta>
 <h2 className="font-sans text-[28px] font-semibold tracking-[-0.02em] text-[#F5F2ED] leading-[1.25]">
 Imaginta is for businesses that want a digital partner — not a digital vendor.
 </h2>
 </FadeUp>

 {/* THE CONTRASTING PANES */}
 <div className="flex flex-col md:flex-row gap-3">
 {/* LEFT PANE - Warm */}
 <ScrollReveal className="flex-1">
 <GlassPane 
 padding="36px" 
 className="h-full bg-accent-base/[0.04] border-accent-base/[0.2] transition-colors duration-400 hover:bg-accent-base/[0.08]"
 data-cursor="FIT · GREAT MATCH"
 >
 <h3 className="font-sans text-[18px] font-medium text-[#F5F2ED] mb-[24px]">We&apos;re a great fit if...</h3>
 <ul className="flex flex-col gap-[14px]">
 {GREAT_FIT.map((item, i) => (
 <li key={i} className="flex items-start gap-[12px]">
 <div className="w-[4px] h-[4px] rounded-full bg-accent-base shrink-0 mt-[8px]" />
 <span className="font-sans text-[14px] font-normal text-[#F5F2ED]/[0.7] leading-[1.6]">{item}</span>
 </li>
 ))}
 </ul>
 </GlassPane>
 </ScrollReveal>

 {/* RIGHT PANE - Cool/Receded */}
 <ScrollReveal delay={0.15} className="flex-1">
 <GlassPane 
 padding="36px" 
 className="h-full bg-[#F5F2ED]/[0.015] border-[rgba(245,242,237,0.04)] shadow-none transition-colors duration-400 hover:bg-[#F5F2ED]/[0.03]"
 data-cursor="FIT · NOT IDEAL"
 >
 <h3 className="font-sans text-[18px] font-medium text-[#F5F2ED]/[0.55] mb-[24px]">We&apos;re probably not the right fit if...</h3>
 <ul className="flex flex-col gap-[14px]">
 {NOT_FIT.map((item, i) => (
 <li key={i} className="flex items-start gap-[12px]">
 <div className="w-[4px] h-[4px] rounded-full bg-[#F5F2ED]/[0.15] shrink-0 mt-[8px]" />
 <span className="font-sans text-[14px] font-normal text-[#F5F2ED]/[0.35] leading-[1.6]">{item}</span>
 </li>
 ))}
 </ul>
 </GlassPane>
 </ScrollReveal>
 </div>
 </Container>
 </section>
 );
}
