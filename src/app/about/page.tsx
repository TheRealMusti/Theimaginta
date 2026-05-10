'use client';

import React, { useRef } from 'react';
import { Container, Meta, AmbientLighting } from '@/components/ui';
import { FadeUp, ScaleReveal } from '@/components/motion';
import { AboutOrigin, AboutPrinciples, AboutAdvantages, AboutMetrics, AboutFit, AboutStudio, AboutTestimonial, AboutCTA } from '@/components/sections/about/index';

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={pageRef} className="relative w-full">
      <AmbientLighting 
        pageRef={pageRef}
        keyLight={{
          gradient: "radial-gradient(ellipse 55% 45% at 42% 18%, rgba(201,166,107,0.022), transparent 70%)",
          speed: 0.97
        }}
        fillLight={{
          gradient: "radial-gradient(ellipse 45% 40% at 65% 52%, rgba(201,166,107,0.015), transparent 70%)",
          speed: 0.93
        }}
        accentLight={{
          gradient: "radial-gradient(ellipse 35% 30% at 40% 82%, rgba(201,166,107,0.012), transparent 65%)",
          speed: 0.88
        }}
      />

      <main className="w-full min-h-screen bg-void text-[#F5F2ED] relative z-10 overflow-hidden selection:bg-accent-base/20 selection:text-[#F5F2ED] pb-[120px]">
        {/* GLOBAL DECORATIVE WHISPER */}
        <div className="fixed left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] font-sans font-medium tracking-[0.2em] text-[#F5F2ED]/[0.15] uppercase select-none pointer-events-none z-50 hidden xl:block">
          IMAGINTA / CREATIVE STUDIO
        </div>

        <ScaleReveal delay={0}>
          {/* SECTION 1 — PAGE HEADER (The Opening Statement) */}
          <section className="relative w-full pt-[120px] md:pt-[160px] pb-[100px]">
            <Container>
              <div className="relative flex flex-col items-center justify-center text-center max-w-[800px] mx-auto">
                <FadeUp delay={0.15}>
                  <Meta className="mb-[40px] text-accent-base">ABOUT IMAGINTA</Meta>
                </FadeUp>

                <FadeUp delay={0.30}>
                  <h1 className="font-sans text-[clamp(36px,5.5vw,64px)] font-semibold tracking-[-0.03em] text-[#F5F2ED] leading-[1.15]">
                    We exist because too many businesses get abandoned by their agencies.
                  </h1>
                </FadeUp>

                <FadeUp delay={0.45}>
                  <p className="font-sans text-[18px] font-normal text-[#F5F2ED]/[0.72] leading-[1.8] mt-[32px] max-w-[540px] mx-auto">
                    You hire an agency. They build something beautiful. They disappear. Six months later, you need changes and there&apos;s no one to call. Imaginta was built to be the opposite of that.
                  </p>
                </FadeUp>

                <FadeUp delay={0.60}>
                  <div className="mt-[56px] flex items-center justify-center">
                    <div className="w-[80px] h-[0.5px] bg-[linear-gradient(90deg,transparent,rgba(201, 166, 107, 0.06))]" />
                    <div className="w-[6px] h-[6px] rounded-full bg-accent-base/30 mx-[2px]" />
                    <div className="w-[80px] h-[0.5px] bg-[linear-gradient(90deg,rgba(201, 166, 107, 0.06),transparent)]" />
                  </div>
                </FadeUp>
              </div>
            </Container>
          </section>

          {/* SECTION 2 — THE ORIGIN */}
          <AboutOrigin />

          {/* SECTION 3 — THE PRINCIPLES */}
          <AboutPrinciples />

          {/* SECTION 4 — THE ADVANTAGES */}
          <AboutAdvantages />

          {/* SECTION 5 — THE NUMBERS */}
          <AboutMetrics />

          {/* SECTION 6 — WHO WE SERVE */}
          <AboutFit />

          {/* SECTION 7 — THE STUDIO */}
          <AboutStudio />

          {/* SECTION 8 — THE PROOF */}
          <AboutTestimonial />

          {/* SECTION 9 — THE CLOSE */}
          <AboutCTA />
        </ScaleReveal>
      </main>
    </div>
  );
}
