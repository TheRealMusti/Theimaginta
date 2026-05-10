'use client';
import React from 'react';
import { Container, Meta, Hairline } from '@/components/ui';
import { StaggerGroup, StaggerItem } from '@/components/motion';

const ADVANTAGES = [
 {
 num: '01',
 title: 'One Invoice, One Relationship',
 desc: "Brand, design, development, and AI — all delivered by one studio. No coordinating between vendors, no conflicting timelines, no context lost between handoffs. Your budget goes to work, not to overhead."
 },
 {
 num: '02',
 title: 'Senior Craft Without Enterprise Pricing',
 desc: "You get Creative Director-level thinking and Lead Engineer-level execution at SME-friendly rates. We don't carry a bench of 80 people you're subsidizing. You pay for the team that touches your project — and nothing else."
 },
 {
 num: '03',
 title: 'Speed Through Integration',
 desc: "When the designer and the developer are in the same room (or the same person), things move faster. No spec-review meetings, no lost-in-translation bugs, no three-week delays waiting for another team to pick up the next phase."
 },
 {
 num: '04',
 title: 'A Partner Who Learns Your Business',
 desc: "Month over month, we accumulate deep context about your market, your customers, and your goals. By month six, we're not just executing briefs — we're anticipating needs and proposing solutions you hadn't considered."
 },
 {
 num: '05',
 title: 'Everything You Receive Is Yours',
 desc: "Every design file, every line of code, every brand asset — fully owned by you, forever. No proprietary platforms, no lock-in clauses, no hostage negotiations if you ever decide to move on. Your business, your property."
 }
];

export function AboutAdvantages() {
 return (
 <section className="w-full py-[80px] relative z-10">
 <Hairline className="bg-[linear-gradient(90deg,transparent_10%,rgba(201, 166, 107, 0.06)_50%,transparent_90%)] mb-[80px]" />
 
 {/* Ambient Background Glow */}
 <div 
 className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] pointer-events-none mix-blend-screen"
 style={{
 background: 'radial-gradient(ellipse at center, rgba(201,166,107,0.02), transparent 60%)'
 }}
 aria-hidden="true"
 />
 
 {/* Background typographic watermark */}
 <div className="hidden lg:block absolute top-[50%] right-[2%] -translate-y-1/2 text-[200px] font-sans font-extrabold text-accent-base/[0.015] pointer-events-none select-none" aria-hidden="true">
 WHY
 </div>

 <Container>
 {/* SECTION HEADER */}
 <div className="flex flex-row justify-between items-end mb-[48px] relative z-10 w-full">
 <Meta className="text-[#F5F2ED]/[0.3]">FOR YOUR BUSINESS</Meta>
 <Meta className="text-accent-base shrink-0 text-right">THE IMAGINTA ADVANTAGE</Meta>
 </div>

 {/* THE ADVANTAGE BLOCKS */}
 <StaggerGroup delay={0.2} className="flex flex-col relative z-10">
 {ADVANTAGES.map((adv) => (
 <StaggerItem key={adv.num}>
 <div 
 className="group w-full flex flex-col md:flex-row py-[32px] gap-[16px] md:gap-0 transition-all duration-400 ease cursor-default relative"
 data-cursor={`ADVANTAGE · ${adv.num}`}
 >
 {/* Bottom hairline */}
 <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-[#F5F2ED]/[0.04] transition-colors duration-400 group-hover:bg-accent-base/[0.08]" />
 
 <div className="w-[48px] shrink-0">
 <Meta className="text-[#F5F2ED]/[0.3] transition-colors duration-400 group-hover:text-accent-base">{adv.num}</Meta>
 </div>
 <div className="w-full max-w-[280px] shrink-0 pr-[24px]">
 <h3 className="font-sans text-[20px] font-medium text-[#F5F2ED]">{adv.title}</h3>
 </div>
 <div className="flex-1">
 <p className="font-sans text-[14px] font-normal text-[#F5F2ED]/[0.55] leading-[1.7]">
 {adv.desc}
 </p>
 </div>
 </div>
 </StaggerItem>
 ))}
 </StaggerGroup>
 </Container>
 </section>
 );
}
