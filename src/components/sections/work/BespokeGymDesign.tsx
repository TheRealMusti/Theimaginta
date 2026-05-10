'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Container, Meta, GlassPane, Button, CountUpNumber } from '@/components/ui';
import Image from 'next/image';
import { FadeUp, ScrollReveal } from '@/components/motion';
import { EASING } from '@/lib/constants';
import type { CaseStudy } from '@/data/case-studies';
import { MoveRight, ShieldCheck, Zap, Target } from 'lucide-react';

export function BespokeGymDesign({ caseStudy }: { caseStudy: CaseStudy }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <div ref={containerRef} className="bg-[#060508] text-[#F5F2ED] selection:bg-prestige/30">
      
      {/* ── CINEMATIC SPLIT HERO ── */}
      <section className="relative h-[120vh] flex items-center overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <Image 
            src={caseStudy.image || "/selectedwork/gym.jpg"} 
            alt="Lifestyle Gym"
            fill
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060508] via-[#060508]/80 to-transparent" />
        </motion.div>

        <Container className="relative z-10">
          <div className="max-w-4xl">
            <motion.div style={{ y: textY }}>
              <FadeUp delay={0.1}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-prestige" />
                  <Meta className="m-0 text-prestige tracking-[0.5em] font-bold text-[10px] uppercase">PROJECT_ARCHIVE_01</Meta>
                </div>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <h1 className="text-[12vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tighter uppercase mb-12">
                  Luxury <br />
                  <span className="text-prestige italic font-serif lowercase tracking-tight opacity-80">Meets</span> <br />
                  Discipline
                </h1>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/10 max-w-2xl">
                  <StatItem label="Industry" value={caseStudy.industry} />
                  <StatItem label="Location" value={caseStudy.location} />
                  <StatItem label="Timeline" value={caseStudy.duration} />
                  <StatItem label="Status" value="Delivered" />
                </div>
              </FadeUp>
            </motion.div>
          </div>
        </Container>

        {/* Vertical Side Scroll Cue */}
        <div className="absolute right-12 bottom-12 hidden lg:flex flex-col items-center gap-8 opacity-20">
          <span className="text-[9px] font-mono tracking-[0.5em] uppercase [writing-mode:vertical-rl]">SCROLL_TO_ENTER</span>
          <div className="w-px h-24 bg-white/40" />
        </div>
      </section>

      {/* ── THE CHALLENGE: EDITORIAL OVERLAP ── */}
      <section className="py-32 lg:py-64 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
               <ScrollReveal>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
                    <Image 
                      src="/selectedwork/skincare.jpg" // Using as a textured placeholder or gym detail
                      alt="The Disconnect"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-prestige/10 mix-blend-overlay" />
                  </div>
               </ScrollReveal>
               {/* Decorative Frame */}
               <div className="absolute -inset-4 border border-white/5 rounded-[40px] -z-10" />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <ScrollReveal>
                <Meta className="text-prestige mb-8">01 / THE FRICTION</Meta>
                <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-10 uppercase">
                  A Generic Brand <br />
                  <span className="text-white/30">for a Premium</span> <br />
                  Experience.
                </h2>
                <div className="space-y-8 text-xl text-white/40 font-light leading-relaxed max-w-xl">
                  {caseStudy.challenge.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                
                <div className="mt-16 p-8 bg-prestige/[0.03] border-l-2 border-prestige">
                   <p className="text-2xl italic font-serif text-white/80 leading-relaxed">
                      "{caseStudy.challenge.pullQuote.text}"
                   </p>
                   <p className="mt-4 text-[10px] font-bold tracking-widest text-prestige uppercase">— {caseStudy.challenge.pullQuote.attribution}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── THE APPROACH: DISCIPLINE MAP ── */}
      <section className="py-32 lg:py-48 bg-[#0A090C] relative overflow-hidden">
        {/* Blueprint Grid Decor */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: `linear-gradient(#F5F2ED 1px, transparent 1px), linear-gradient(90deg, #F5F2ED 1px, transparent 1px)`, backgroundSize: '100px 100px' }} 
        />

        <Container className="relative z-10">
          <div className="text-center mb-24">
             <Meta className="mx-auto text-prestige mb-6">02 / THE METHOD</Meta>
             <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase">Building the System</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.approach.map((step, idx) => (
              <PhaseCard key={idx} step={step} index={idx} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── RESULTS: TELEMETRY ── */}
      <section className="py-32 lg:py-64">
        <Container>
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
            <div className="max-w-2xl">
               <Meta className="text-prestige mb-8">03 / THE OUTPUT</Meta>
               <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
                  Impact <br />
                  <span className="text-white/20 italic font-serif lowercase tracking-tight">Validated.</span>
               </h2>
            </div>
            <div className="flex items-center gap-3 opacity-40">
               <span className="text-[10px] font-mono tracking-widest uppercase">LIVE_PERFORMANCE_METRICS</span>
               <div className="w-2 h-2 rounded-full bg-prestige animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {caseStudy.results.map((result, idx) => (
              <div key={idx} className="bg-[#060508] p-12 lg:p-20 group hover:bg-prestige/[0.02] transition-colors duration-700">
                 <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-8xl font-bold tracking-tighter text-prestige">
                      <CountUpNumber value={parseInt(result.value.replace(/[^0-9]/g, ''))} />
                      {result.value.replace(/[0-9]/g, '')}
                    </span>
                 </div>
                 <h4 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">{result.label}</h4>
                 <p className="text-white/40 leading-relaxed font-light text-lg">{result.narrative}</p>
                 <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between text-[10px] font-mono tracking-widest text-white/20 uppercase">
                    <span>Target_Metric</span>
                    <span className="text-prestige/40">{result.detail}</span>
                 </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── TESTIMONIAL: FULLSCREEN FOCUS ── */}
      <section className="py-32 lg:py-64 bg-prestige/[0.02] relative">
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-8xl font-serif text-prestige/20 leading-none block mb-8">“</span>
            <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-16">
               {caseStudy.testimonial.quote}
            </blockquote>
            <div className="flex flex-col items-center">
               <div className="w-12 h-px bg-prestige mb-8" />
               <p className="text-xl font-bold uppercase tracking-widest">{caseStudy.testimonial.name}</p>
               <p className="text-sm text-prestige/60 tracking-widest uppercase mt-2">{caseStudy.testimonial.role}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FOOTER: NEXT STEP ── */}
      <section className="py-32 border-t border-white/5">
         <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-prestige mb-2 tracking-widest uppercase">READY_TO_PERFORM?</span>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Start Your <br /> Transformation</h3>
               </div>
               <Button href="/contact" className="w-full md:w-auto h-20 px-12 text-lg uppercase tracking-widest bg-white text-black hover:bg-prestige hover:text-white transition-all duration-500">
                  Secure Your Consult <MoveRight className="ml-4" />
               </Button>
            </div>
         </Container>
      </section>

    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">{label}</span>
      <span className="text-sm font-bold uppercase tracking-tight">{value}</span>
    </div>
  );
}

function PhaseCard({ step, index }: { step: any; index: number }) {
  const Icon = index === 0 ? ShieldCheck : index === 1 ? Zap : Target;
  
  return (
    <GlassPane className="p-10 bg-white/[0.01] border-white/5 hover:border-prestige/30 transition-all duration-1000 group h-full flex flex-col">
       <div className="w-12 h-12 rounded-2xl bg-prestige/5 flex items-center justify-center mb-10 group-hover:bg-prestige transition-colors duration-700">
          <Icon size={20} className="text-prestige group-hover:text-black transition-colors duration-700" />
       </div>
       <span className="text-[10px] font-mono text-prestige mb-4 tracking-widest uppercase">PHASE_0{index + 1}</span>
       <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 group-hover:text-prestige transition-colors duration-700">{step.title}</h3>
       <p className="text-white/40 leading-relaxed font-light mb-8 flex-grow">{step.body}</p>
       <div className="flex flex-wrap gap-2">
          {step.tags.map((tag: string) => (
            <span key={tag} className="text-[9px] font-mono text-white/20 border border-white/5 px-2 py-1 rounded">#{tag}</span>
          ))}
       </div>
    </GlassPane>
  );
}
