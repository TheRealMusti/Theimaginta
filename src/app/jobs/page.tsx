'use client';

import React, { useRef } from 'react';
import { 
 Container, 
 Meta, 
 GlassPane, 
 Button, 
 Badge, 
 GrainOverlay, 
 CountUpNumber,
 ScrollProgress,
 AmbientLighting
} from '@/components/ui';
import { FadeUp, ScaleReveal, StaggerGroup, StaggerItem } from '@/components/motion';
import { Globe, Zap, Heart, Clock, Code, Palette, Search, Mail, ArrowUpRight, Cpu, Network } from 'lucide-react';
import { CTABand } from '@/components/sections/CTABand';

const OPEN_NODES = [
 {
 title: "Interface Architect",
 type: "Creative Integration",
 nodes: "Belgium / Remote",
 description: "Designing sentient architecture and high-fidelity interfaces for the next generation of digital products.",
 icon: Palette
 },
 {
 title: "Cognitive Engineer",
 type: "AI & Automation",
 nodes: "Belgium / Remote",
 description: "Building neural pipelines and autonomous workflows that power our background operational system.",
 icon: Cpu
 },
 {
 title: "Brand Synthesizer",
 type: "Strategic Identity",
 nodes: "Belgium / Remote",
 description: "Defining and encoding brand DNA into scalable, high-authority strategic systems.",
 icon: Network
 }
];

export default function JobsPage() {
 const pageRef = useRef<HTMLDivElement>(null);

 return (
 <div ref={pageRef} className="relative w-full">
  <AmbientLighting 
    pageRef={pageRef}
    keyLight={{
      gradient: "radial-gradient(ellipse 55% 45% at 58% 22%, rgba(201,166,107,0.025), transparent 70%)",
      speed: 0.97
    }}
    fillLight={{
      gradient: "radial-gradient(ellipse 45% 40% at 32% 48%, rgba(201,166,107,0.015), transparent 70%)",
      speed: 0.93
    }}
    accentLight={{
      gradient: "radial-gradient(ellipse 35% 30% at 60% 85%, rgba(201,166,107,0.012), transparent 65%)",
      speed: 0.88
    }}
  />

  <main className="w-full min-h-screen bg-[#060508] text-[#F5F2ED] pt-[72px] relative z-10 overflow-hidden">
  <GrainOverlay />
  <ScrollProgress color="rgba(201,166,107,0.6)" />

  {/* HERO SECTION */}
  <section className="w-full pt-[120px] pb-[80px] relative">
  <Container>
  <FadeUp delay={0.15}>
  <div className="flex items-center gap-[8px] mb-12">
  <Meta>IMAGINTA</Meta>
  <Meta className="text-[#F5F2ED]/20">/</Meta>
  <Meta className="text-[#F5F2ED]/[0.35]">TALENT_INTEGRATION</Meta>
  </div>
  </FadeUp>

  <FadeUp delay={0.3}>
  <h1 className="font-sans text-[clamp(40px,7vw,92px)] font-bold tracking-[-0.04em] leading-[0.9] text-[#F5F2ED] uppercase max-w-[1000px]">
  Global Talent <br />
  <span className="font-serif italic text-[#F5F2ED]/20 lowercase tracking-tight">Integration.</span>
  </h1>
  </FadeUp>

  <div className="mt-12 flex flex-col md:grid md:grid-cols-[1.5fr_1fr] gap-20 items-end">
  <FadeUp delay={0.45}>
  <p className="font-sans text-[20px] md:text-[24px] font-light text-[#F5F2ED]/40 leading-relaxed max-w-[640px]">
  We are looking for elite <span className="text-[#F5F2ED]/80">creative mindsets</span> from around the globe to join our background system. No borders, just pure operational excellence.
  </p>
  </FadeUp>

  <FadeUp delay={0.6} className="hidden md:block">
  <div className="flex items-center gap-10 border-l border-[#F5F2ED]/[0.06] pl-10">
  <div className="flex flex-col">
  <span className="text-[10px] font-mono text-[#F5F2ED]/20 uppercase tracking-widest mb-2">Active Nodes</span>
  <span className="text-3xl font-bold text-[#F5F2ED] tracking-tighter"><CountUpNumber value={14} />+</span>
  </div>
  <div className="flex flex-col">
  <span className="text-[10px] font-mono text-[#F5F2ED]/20 uppercase tracking-widest mb-2">Uptime</span>
  <span className="text-3xl font-bold text-[#F5F2ED] tracking-tighter">99.9%</span>
  </div>
  </div>
  </FadeUp>
  </div>
  </Container>
  </section>

  {/* PHILOSOPHY SECTION */}
  <section className="w-full py-[100px] relative">
  <Container className="relative z-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
  <ScaleReveal>
  <div className="p-[64px] rounded-[40px] bg-[#F5F2ED]/[0.01] border border-[#F5F2ED]/[0.06]">
  <Meta className="mb-8">INTEGRATION PHILOSOPHY</Meta>
  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F2ED] uppercase mb-8 leading-tight">
  Mindset <span className="text-[#F5F2ED]/20 font-serif italic lowercase">over</span> Location.
  </h2>
  <p className="text-[#F5F2ED]/40 font-light leading-relaxed mb-10">
  Our system operates across all time zones. We value the creative autonomy and the technical precision required to work within a fully automated, high-velocity background environment.
  </p>
  
  <div className="space-y-6">
  {[
  { icon: Globe, t: "Borderless Collaboration", d: "Hire from anywhere, work from everywhere." },
  { icon: Zap, t: "Automated Workflows", d: "Zero administrative friction. Focus only on creation." },
  { icon: Heart, t: "Long-term Continuity", d: "We offer stable, long-term contracts and benefits." }
  ].map((item, i) => (
  <div key={i} className="flex gap-6 group/item">
  <div className="w-10 h-10 rounded-full bg-accent-base/5 flex items-center justify-center border border-accent-base/10 group-hover/item:border-accent-base/30 transition-all">
  <item.icon size={18} className="text-accent-base" />
  </div>
  <div className="flex flex-col">
  <h4 className="text-[14px] font-bold text-[#F5F2ED] uppercase tracking-tight mb-1">{item.t}</h4>
  <p className="text-[12px] text-[#F5F2ED]/30 font-light">{item.d}</p>
  </div>
  </div>
  ))}
  </div>
  </div>
  </ScaleReveal>

  <FadeUp delay={0.3} className="pt-10">
  <div className="space-y-12">
  <div>
  <Badge className="mb-4">Operational Benefits</Badge>
  <h3 className="text-2xl font-bold text-[#F5F2ED] mb-6 uppercase tracking-tight">Integrated Freedom</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {[
  "Fully Automated Tasking",
  "Flexible Scheduling",
  "Global Talent Nodes",
  "High-Performance Retainers",
  "Creative Sovereignty",
  "Technical Mentorship"
  ].map(benefit => (
  <div key={benefit} className="flex items-center gap-3">
  <div className="w-1 h-1 rounded-full bg-accent-base" />
  <span className="text-[13px] text-[#F5F2ED]/50 font-light">{benefit}</span>
  </div>
  ))}
  </div>
  </div>

  <div className="p-8 border-l border-accent-base/20 bg-accent-base/[0.02]">
  <span className="text-[9px] font-mono text-accent-base uppercase tracking-[0.4em] font-bold block mb-4">STATUS // SEARCHING</span>
  <p className="text-[14px] font-light text-[#F5F2ED]/60 leading-relaxed italic">
  "Imaginta is not just a studio; it's a living model that empowers freelancers to operate at their highest potential without the noise of traditional agency management."
  </p>
  </div>
  </div>
  </FadeUp>
  </div>
  </Container>
  </section>

  {/* OPEN POSITIONS SECTION */}
  <section className="w-full py-[100px] md:py-[160px] border-t border-[#F5F2ED]/[0.06]">
  <Container>
  <div className="flex flex-col items-center text-center mb-20">
  <Meta className="mb-6">ACTIVE INTEGRATION POINTS</Meta>
  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#F5F2ED] uppercase">
  Available <span className="text-[#F5F2ED]/20 font-serif italic lowercase">Nodes.</span>
  </h2>
  </div>

  <StaggerGroup className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {OPEN_NODES.map((node, i) => (
  <StaggerItem key={i} className="h-full">
  <div className="p-[40px] rounded-[32px] h-full bg-[#F5F2ED]/[0.01] border border-[#F5F2ED]/[0.06] hover:bg-[#F5F2ED]/[0.02] flex flex-col group relative overflow-hidden transition-colors duration-500">
  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
  <node.icon size={64} />
  </div>
  
  <div className="flex flex-col h-full relative z-10">
  <Badge className="mb-6 self-start bg-[#F5F2ED]/[0.03] border-[#F5F2ED]/[0.06]">{node.type}</Badge>
  <h3 className="text-2xl font-bold text-[#F5F2ED] mb-4 uppercase tracking-tighter">{node.title}</h3>
  <p className="text-[14px] text-[#F5F2ED]/40 font-light leading-relaxed mb-10 flex-grow">
  {node.description}
  </p>
  
  <div className="flex justify-between items-center pt-6 border-t border-[#F5F2ED]/[0.06] mt-auto">
  <div className="flex flex-col">
  <span className="text-[9px] font-mono text-[#F5F2ED]/20 uppercase tracking-widest">Location</span>
  <span className="text-[12px] text-[#F5F2ED]/70 font-bold">{node.nodes}</span>
  </div>
  <a 
  href="mailto:work@imaginta.com"
  className="w-10 h-10 rounded-full border border-[#F5F2ED]/10 flex items-center justify-center hover:bg-accent-base hover:border-accent-base hover:text-black transition-all"
  >
  <ArrowUpRight size={16} />
  </a>
  </div>
  </div>
  </div>
  </StaggerItem>
  ))}
  </StaggerGroup>
  </Container>
  </section>

  {/* CONTACT CTA */}
  <section className="w-full py-[120px] md:py-[180px] relative bg-[#F5F2ED]/[0.01]">
  <Container>
  <FadeUp>
  <div className="flex flex-col items-center text-center">
  <div className="w-20 h-20 rounded-full bg-accent-base/5 border border-accent-base/10 flex items-center justify-center mb-10">
  <Mail size={32} className="text-accent-base" />
  </div>
  <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-[#F5F2ED] uppercase mb-8 leading-none">
  Integrate <span className="text-[#F5F2ED]/20 font-serif italic lowercase">with</span> the system.
  </h2>
  <p className="text-[#F5F2ED]/40 text-[18px] md:text-[22px] font-light max-w-2xl mb-12">
  Send your portfolio and a brief statement on your creative mindset to our recruitment node.
  </p>
  
  <a 
  href="mailto:work@imaginta.com"
  className="group relative px-12 py-5 rounded-full bg-accent-base text-black font-sans text-[14px] font-bold tracking-[0.2em] uppercase overflow-hidden hover:shadow-[0_8px_32px_rgba(201,166,107,0.04)] transition-all"
  >
  <span className="relative z-10">work@imaginta.com</span>
  </a>
  </div>
  </FadeUp>
  </Container>
  </section>

  <CTABand />
  </main>
 </div>
 );
}
