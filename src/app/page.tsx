'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { Whisper } from '@/components/ui/Whisper';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { AmbientLighting } from '@/components/ui/AmbientLighting';

const About = dynamic(() => import('@/components/sections/About').then(mod => mod.About));
const Metrics = dynamic(() => import('@/components/sections/Metrics').then(mod => mod.Metrics));
const Feed = dynamic(() => import('@/components/sections/Feed').then(mod => mod.Feed));

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
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full">
      <AmbientLighting 
        pageRef={containerRef}
        keyLight={{
          gradient: "radial-gradient(ellipse 55% 45% at 42% 18%, rgba(201,166,107,0.022), transparent 70%)",
          speed: 0.97
        }}
        fillLight={{
          gradient: "radial-gradient(ellipse 45% 40% at 65% 52%, rgba(201,166,107,0.014), transparent 70%)",
          speed: 0.93
        }}
        accentLight={{
          gradient: "radial-gradient(ellipse 35% 30% at 40% 82%, rgba(201,166,107,0.012), transparent 65%)",
          speed: 0.88
        }}
      />
      <main id="main" className="min-h-screen bg-transparent relative z-10">
        <Hero />
        <SectionDivider variant="accent" />
        <About />
        <SectionDivider variant="standard" />
        <Metrics />
        <SectionDivider variant="standard" />
        <Feed />
        <SectionDivider variant="standard" />
        <Services />
        <SectionDivider variant="standard" />
        <Process />
        <SectionDivider variant="standard" />
        <Work />
        <SectionDivider variant="standard" />
        <Testimonial />
        <SectionDivider variant="accent" />
        <CTABand />
        <SectionDivider variant="accent" />
      </main>
    </div>
  );
}
