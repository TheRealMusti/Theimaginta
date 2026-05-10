'use client';
import React from 'react';
import { Container, Hairline } from '@/components/ui';
import { FadeUp } from '@/components/motion';
import { MagneticButton } from '@/components/motion/MagneticButton';
import Link from 'next/link';

export function AboutCTA() {
 return (
 <section className="w-full pt-[80px] pb-[120px] relative z-10">
 <Hairline className="bg-[linear-gradient(90deg,transparent_20%,rgba(201, 166, 107, 0.06)_50%,transparent_80%)] mb-[80px]" />

 <Container>
 <div className="flex flex-col items-center text-center max-w-[640px] mx-auto">
 <FadeUp>
 <h2 className="font-sans text-[36px] md:text-[48px] font-semibold tracking-[-0.02em] text-[#F5F2ED] leading-[1.15] mb-[40px]">
 Good digital doesn&apos;t age. <span className="text-[#F5F2ED]/[0.4]">Let&apos;s build something permanent.</span>
 </h2>
 </FadeUp>
 
 <FadeUp delay={0.15}>
 <MagneticButton>
 <Link 
 href="/contact" 
 className="inline-flex items-center justify-center bg-[#F5F2ED] text-[#060508] px-[32px] py-[16px] rounded-pill font-sans text-[15px] font-medium tracking-[0.02em] transition-all duration-300 hover:bg-accent-base hover:text-[#060508] hover:shadow-[0_8px_32px_rgba(201,166,107,0.04)]"
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
