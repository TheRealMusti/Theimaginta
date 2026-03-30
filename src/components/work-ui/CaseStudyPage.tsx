'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { 
  Container, 
  Meta, 
  Badge, 
  Hairline, 
  GlassPane, 
  Button, 
  CountUpNumber,
  SectionAtmosphere 
} from '@/components/ui';
import { FadeUp, ScaleReveal, StaggerGroup, ScrollReveal } from '@/components/motion';
import { EASING } from '@/lib/constants';
import type { CaseStudy } from '@/data/case-studies';
import { getAdjacentStudies } from '@/data/case-studies';

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
}

export function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  
  // Parallax for background numbers
  const y1 = useTransform(scrollY, [0, 2000], [0, -100]);
  const y2 = useTransform(scrollY, [1000, 3000], [0, -100]);
  const y3 = useTransform(scrollY, [2000, 4000], [0, -100]);

  const adjacent = getAdjacentStudies(caseStudy.id);

  return (
    <div className="bg-void text-warm-white selection:bg-accent-base/30 selection:text-white">
      {/* ── SECTION 1: CINEMATIC HERO ── */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-end overflow-hidden">
        {/* Background */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASING.smoothArray }}
          className="absolute inset-0 z-0"
          style={{ backgroundColor: caseStudy.color }}
        >
          {caseStudy.image ? (
            <>
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#060508] via-[#060508]/60 to-transparent" 
              />
            </>
          ) : (
            <div className="w-full h-full relative opacity-[0.03]">
              <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat" />
            </div>
          )}
          
          {/* Ambient pool light */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50%] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,166,107,0.05), transparent 70%)'
            }}
          />
        </motion.div>

        <Container className="relative z-10 pb-16">
          <div className="max-w-[800px]">
            <FadeUp delay={0.1}>
              <Link 
                href="/work" 
                className="inline-block text-[13px] font-normal text-white/40 hover:text-warm-white transition-colors mb-8"
              >
                ← Back to Use Cases
              </Link>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {caseStudy.disciplines.map((d, i) => (
                  <React.Fragment key={d}>
                    <span className="text-[11px] font-bold tracking-[0.12em] text-accent-base uppercase">{d}</span>
                    {i < caseStudy.disciplines.length - 1 && (
                      <span className="text-accent-base/30 text-[10px]">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <h1 
                className="font-sans font-bold tracking-tight text-warm-white mb-2"
                style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: 1 }}
              >
                {caseStudy.title}
              </h1>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="font-sans italic text-white/40 mb-8" style={{ fontSize: 'clamp(18px, 2.5vw, 24px)' }}>
                {caseStudy.subtitle}
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="flex flex-wrap items-center gap-4 text-[12px] font-bold tracking-widest text-white/20 uppercase">
                <span>{caseStudy.location}</span>
                <span className="text-white/10">·</span>
                <span>{caseStudy.year}</span>
                <span className="text-white/10">·</span>
                <span>{caseStudy.duration}</span>
              </div>
            </FadeUp>
          </div>

          {/* Scroll Cue */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <div className="relative h-6 w-[1px] bg-accent-base/20 overflow-hidden">
              <motion.div 
                animate={{ y: [0, 24] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-24px] left-0 w-full h-full bg-accent-base"
              />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-accent-base/30 uppercase">Scroll to read</span>
          </motion.div>
        </Container>
      </section>

      {/* ── SECTION 2: IMPACT STRIP ── */}
      <section className="relative z-20 -mt-8 py-16">
        <Container>
          <ScaleReveal>
            <GlassPane 
              className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-accent-base/10 bg-accent-base/[0.02] border-accent-base/10"
              padding="40px 36px"
            >
              {caseStudy.results.slice(0, 3).map((res, i) => (
                <div key={res.label} className={`flex flex-col ${i === 0 ? 'pb-8 md:pb-0 md:pr-12' : i === 1 ? 'py-8 md:py-0 md:px-12' : 'pt-8 md:pt-0 md:pl-12'}`}>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[32px] font-bold text-accent-base leading-none">
                      <CountUpNumber value={parseInt(res.value.replace(/[^0-9]/g, ''))} duration={1.2} />
                    </span>
                    <span className="text-[24px] font-bold text-accent-base leading-none">
                      {res.value.replace(/[0-9]/g, '')}
                    </span>
                  </div>
                  <h4 className="mt-2 text-[14px] font-bold text-nearWhite uppercase tracking-wider">{res.label}</h4>
                  <p className="mt-1 text-[12px] text-white/30 uppercase tracking-widest">{res.detail}</p>
                </div>
              ))}
            </GlassPane>
          </ScaleReveal>
        </Container>
      </section>

      {/* ── SECTION 3: THE CHALLENGE ── */}
      <section className="relative py-24 overflow-hidden">
        {/* Background "01" */}
        <motion.div 
          aria-hidden="true"
          style={{ y: y1 }}
          className="hidden lg:block absolute right-[-2%] top-24 text-[200px] font-bold text-accent-base/[0.02] select-none"
        >
          01
        </motion.div>
        
        <SectionAtmosphere 
          number="01" 
          glowColor="rgba(201,166,107,0.05)" 
          glowPosition={{ left: '10%', top: '20%' }} 
          glowSize={500} 
          isHovered={false} 
        />

        <Container className="relative z-10">
          <div className="max-w-[680px] mx-auto">
            <ScrollReveal>
              <Meta className="mb-6">THE CHALLENGE</Meta>
              <h2 className="text-[28px] md:text-[32px] font-bold text-warm-white tracking-tight leading-[1.2] mb-8">
                {caseStudy.challenge.heading}
              </h2>
            </ScrollReveal>

            <div className="space-y-6">
              {caseStudy.challenge.paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <p className="text-[17px] leading-[1.85] text-white/50">
                    {p}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <blockquote className="mt-16 mb-16 pl-8 border-l-2 border-accent-base/20">
                <p className="text-[20px] italic text-white/70 leading-[1.6]">
                  "{caseStudy.challenge.pullQuote.text}"
                </p>
                <footer className="mt-6">
                  <cite className="not-italic text-[11px] font-bold tracking-[0.2em] text-accent-base uppercase">
                    — {caseStudy.challenge.pullQuote.attribution}
                  </cite>
                </footer>
              </blockquote>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── SECTION 4: THE APPROACH ── */}
      <section className="relative py-24 bg-white/[0.01]">
        <SectionAtmosphere 
          number="02" 
          glowColor="rgba(201,166,107,0.025)" 
          glowPosition={{ left: '50%', top: '50%' }} 
          glowSize={600} 
          isHovered={false} 
        />
        <Container className="relative z-10">
          <Hairline className="mb-24 opacity-20" />
          
          {/* Background "02" */}
          <motion.div 
            aria-hidden="true"
            style={{ y: y2 }}
            className="hidden lg:block absolute left-[-2%] top-48 text-[200px] font-bold text-accent-base/[0.015] select-none"
          >
            02
          </motion.div>

          <div className="max-w-[680px] mx-auto text-center mb-16">
            <ScrollReveal>
              <Meta className="mb-6 mx-auto">OUR APPROACH</Meta>
              <h2 className="text-[28px] md:text-[32px] font-bold text-warm-white tracking-tight leading-[1.2] mb-6">
                Three disciplines, one connected system.
              </h2>
              <p className="text-[17px] leading-[1.7] text-white/40">
                We didn't hand over a logo and wish them luck. We rebuilt the entire digital identity as one integrated system — brand, product, and code working as a single organism.
              </p>
            </ScrollReveal>
          </div>

          <StaggerGroup>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {caseStudy.approach.map((step, i) => (
                <GlassPane 
                  key={step.discipline}
                  hover
                  interactive
                  className="p-8 md:p-10 flex flex-col h-full bg-white/[0.02] border-white/5"
                >
                  <span className="text-[10px] font-bold tracking-[0.2em] text-accent-base uppercase mb-6">
                    {step.phase}
                  </span>
                  <h3 className="text-[20px] font-bold text-warm-white leading-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-white/40 mb-8 flex-grow">
                    {step.body}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/5 text-[9px] font-bold tracking-widest text-white/30 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassPane>
              ))}
            </div>
          </StaggerGroup>
        </Container>
      </section>

      {/* ── SECTION 5: THE RESULTS ── */}
      <section className="relative py-24 overflow-hidden">
        <SectionAtmosphere 
          number="03" 
          glowColor="rgba(201,166,107,0.02)" 
          glowPosition={{ right: '10%', top: '40%' }} 
          glowSize={400} 
          isHovered={false} 
        />
        {/* Background "03" */}
        <motion.div 
          aria-hidden="true"
          style={{ y: y3 }}
          className="hidden lg:block absolute right-[-2%] top-48 text-[200px] font-bold text-accent-base/[0.015] select-none"
        >
          03
        </motion.div>

        <Container className="relative z-10">
          <Hairline className="mb-24 opacity-20" />
          
          <div className="max-w-[680px] mx-auto mb-16">
            <ScrollReveal>
              <Meta className="mb-6">THE RESULTS</Meta>
              <h2 className="text-[28px] md:text-[32px] font-bold text-warm-white tracking-tight leading-[1.2]">
                The numbers told the story within 90 days.
              </h2>
            </ScrollReveal>
          </div>

          <div className="max-w-[800px] mx-auto space-y-0">
            {caseStudy.results.map((res, i) => (
              <ScrollReveal key={res.label} delay={i * 0.06}>
                <div className="group py-12 border-b border-white/5">
                  <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12 items-center">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[28px] font-bold text-accent-base leading-none">
                          <CountUpNumber value={parseInt(res.value.replace(/[^0-9]/g, ''))} duration={1} />
                        </span>
                        <span className="text-[20px] font-bold text-accent-base leading-none">
                          {res.value.replace(/[0-9]/g, '')}
                        </span>
                      </div>
                      <span className="mt-1 text-[11px] font-bold tracking-widest text-white/20 uppercase whitespace-nowrap">
                        {res.label}
                      </span>
                    </div>
                    <p className="text-[15px] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-500">
                      {res.narrative}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 6: TESTIMONIAL ── */}
      <section className="relative py-24">
        <Container>
          <SectionAtmosphere 
            number="“" 
            glowColor="rgba(201,166,107,0.03)" 
            glowPosition={{ left: '50%', top: '50%' }} 
            glowSize={600} 
            isHovered={false} 
          />
          <div className="max-w-[760px] mx-auto">
            <ScrollReveal>
              <GlassPane 
                className="p-12 md:p-16 text-center bg-accent-base/[0.03] border-accent-base/10"
              >
                <div className="text-accent-base/15 text-[56px] font-serif leading-none mb-4 h-8 select-none">
                  “
                </div>
                <p className="text-[20px] md:text-[24px] italic text-white/70 leading-[1.6] mb-8">
                  {caseStudy.testimonial.quote}
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-10 h-[1px] bg-accent-base/20 mb-6" />
                  <h4 className="text-[14px] font-bold text-nearWhite uppercase tracking-wider">
                    {caseStudy.testimonial.name}
                  </h4>
                  <p className="mt-1 text-[11px] font-bold tracking-[0.2em] text-white/20 uppercase">
                    {caseStudy.testimonial.role}
                  </p>
                </div>
              </GlassPane>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── SECTION 7: PROJECT DETAILS ── */}
      <section className="relative py-16">
        <Container>
          <Hairline className="mb-16 opacity-20" />
          <FadeUp>
            <GlassPane className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-white/[0.02] border-white/5">
              <div>
                <Meta className="mb-2 !text-accent-base">CLIENT</Meta>
                <div className="text-[14px] font-bold text-warm-white uppercase tracking-wider">{caseStudy.title}</div>
              </div>
              <div>
                <Meta className="mb-2 !text-accent-base">TIMELINE</Meta>
                <div className="text-[14px] font-bold text-warm-white uppercase tracking-wider">{caseStudy.duration}</div>
              </div>
              <div>
                <Meta className="mb-2 !text-accent-base">SERVICES</Meta>
                <div className="text-[14px] font-bold text-warm-white uppercase tracking-wider">Brand, Product, Dev</div>
              </div>
              <div>
                <Meta className="mb-2 !text-accent-base">YEAR</Meta>
                <div className="text-[14px] font-bold text-warm-white uppercase tracking-wider">{caseStudy.year}</div>
              </div>
            </GlassPane>
          </FadeUp>
        </Container>
      </section>

      {/* ── SECTION 8: NAV + CTA ── */}
      <section className="relative py-24 pb-32">
        <Container>
          {/* Internal Nav */}
          <div className="flex flex-col md:flex-row gap-3 mb-16">
            {adjacent.prev && (
              <Link href={`/work/${adjacent.prev.id}`} className="flex-1 group">
                <GlassPane hover className="p-8 h-full bg-white/[0.02] border-white/5 group-hover:border-accent-base/20">
                  <Meta className="mb-2">PREVIOUS CASE STUDY</Meta>
                  <div className="text-[16px] font-bold text-white/60 group-hover:text-warm-white transition-colors">
                    ← {adjacent.prev.title || adjacent.prev.id}
                  </div>
                </GlassPane>
              </Link>
            )}
            {adjacent.next && (
              <Link href={`/work/${adjacent.next.id}`} className="flex-1 group">
                <GlassPane hover className="p-8 h-full bg-white/[0.02] border-white/5 group-hover:border-accent-base/20 text-right">
                  <Meta className="mb-2">NEXT CASE STUDY</Meta>
                  <div className="text-[16px] font-bold text-white/60 group-hover:text-warm-white transition-colors">
                    {adjacent.next.title || adjacent.next.id} →
                  </div>
                </GlassPane>
              </Link>
            )}
          </div>

          <div className="max-w-[600px] mx-auto text-center">
            <FadeUp>
              <h3 className="text-[20px] md:text-[24px] font-bold text-warm-white mb-4">
                Recognise this problem in your business?
              </h3>
              <p className="text-[15px] text-white/40 mb-10">
                Let's talk about building something similar.
              </p>
              <Button 
                href={`/contact?service=${caseStudy.disciplines[0].toLowerCase().replace(/\s+/g, '-')}`} 
                variant="primary"
                className="px-10"
              >
                Start Your Project
              </Button>
            </FadeUp>
          </div>
        </Container>
      </section>
    </div>
  );
}
