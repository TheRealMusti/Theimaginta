// A11y pass applied
import React from 'react';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { Whisper } from '@/components/ui/Whisper';

const About = dynamic(() => import('@/components/sections/About').then(mod => mod.About));
const Metrics = dynamic(() => import('@/components/sections/Metrics').then(mod => mod.Metrics));
const Feed = dynamic(() => import('@/components/sections/Feed').then(mod => mod.Feed));
const SecurityArchitecture = dynamic(() => import('@/components/sections/SecurityArchitecture').then(mod => mod.SecurityArchitecture));
const Services = dynamic(() => import('@/components/sections/Services').then(mod => mod.Services));
const Process = dynamic(() => import('@/components/sections/Process').then(mod => mod.Process));
const Work = dynamic(() => import('@/components/sections/Work').then(mod => mod.Work));
const Testimonial = dynamic(() => import('@/components/sections/Testimonial').then(mod => mod.Testimonial));
const CTABand = dynamic(() => import('@/components/sections/CTABand').then(mod => mod.CTABand));

/*
Lighthouse Scores:
Performance: TBD
Accessibility: TBD
Best Practices: TBD
SEO: TBD
*/

export default function Page() {
  return (
    <main id="main" className="min-h-screen bg-[#030303] relative">
      <Hero />
      <About />
      <Metrics />
      <Feed />
      <SecurityArchitecture />
      <div className="w-full flex justify-center py-[48px] md:py-[64px] overflow-hidden pointer-events-none">
        <Whisper text="— — — SYSTEM.VERIFIED — — —" className="!opacity-80 mix-blend-screen" />
      </div>
      <Services />
      <Process />
      <Work />
      <Testimonial />
      <CTABand />
    </main>
  );
}
