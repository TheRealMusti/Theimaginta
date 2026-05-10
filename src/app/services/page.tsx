'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Settings, Shield, Zap, Power, Layers, Activity, RefreshCw, Cpu, BrainCircuit, Network, Sparkles, ArrowUpRight } from 'lucide-react';
import { 
 Container, 
 Meta, 
 GlassPane, 
 Badge,
 Button, 
 SectionDivider,
 Whisper, 
 ScrollProgress, 
 GrainOverlay, 
 InteractiveGlassPane, 
 CountUpNumber,
 AmbientLighting
} from '@/components/ui';
import { ScaleReveal, FadeUp, ScrollReveal, StaggerGroup, StaggerItem } from '@/components/motion';
import { EASING } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { CTABand } from '@/components/sections/CTABand';

const NAV_ANCHORS = [
 { id: 'identity-synthesis', number: '01', title: 'Identity Synthesis', tag: 'BRANDING · DNA' },
 { id: 'operational-ux', number: '02', title: 'Operational UX', tag: 'UX · INTERFACE' },
 { id: 'core-engineering', number: '03', title: 'Core Engineering', tag: 'TECH · MECHANICS' },
 { id: 'cognitive-intelligence', number: '04', title: 'Cognitive Intel', tag: 'AI · LOGIC' }
];

const FAQ_DATA = [
 { q: "How does your model differ from a traditional agency?", a: "Traditional agencies deliver assets; we deliver operations. Our model attaches to your business as a background system, managing everything from brand DNA to automated workflows so you can focus on scale." },
 { q: "Is the integration disruptive to our current team?", a: "Zero friction. We deploy as a non-disruptive layer over your existing infrastructure. We don't replace your flow; we optimize and automate it from the inside out." },
 { q: "What does 'fresh, clean, and well-operated' mean in practice?", a: "It means no tech debt, no stale design, and zero operational bottlenecks. We continuously clean your codebase, update your brand touchpoints, and automate repetitive tasks in the background." },
 { q: "Can we attach the model to an existing product?", a: "Absolutely. We specialize in taking over existing ecosystems and 'tuning' them for high-performance output. We improve your current foundations without needing a total teardown." },
 { q: "What is the 'Logic Freshness' metric?", a: "This tracks how current your AI and automation logic is compared to the latest frontier models. We ensure your business never operates on outdated intelligence." },
 { q: "How long does the initial 'Attachment' take?", a: "A standard integration takes approximately 14 days, during which we audit your stack, align our team with your goals, and activate the first phase of the system." }
];

export default function ServicesPage() {
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [activeSection, setActiveSection] = useState<string>('');
 const pageRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 const sections = document.querySelectorAll('section[id]');
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 const id = entry.target.getAttribute('id');
 if (id) {
 window.history.replaceState(null, '', `/services#${id}`);
 setActiveSection(id);
 }
 }
 });
 },
 { threshold: 0.3, rootMargin: '-20% 0px' } 
 );

 sections.forEach((section) => observer.observe(section));
 return () => sections.forEach((section) => observer.unobserve(section));
 }, []);

 const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
 e.preventDefault();
 const element = document.getElementById(id);
 if (element) {
 const offset = 96;
 const elementPosition = element.getBoundingClientRect().top;
 const offsetPosition = elementPosition + window.pageYOffset - offset;

 window.scrollTo({
 top: offsetPosition,
 behavior: 'smooth'
 });
 }
 };

 const activeIndex = NAV_ANCHORS.findIndex(a => a.id === activeSection);
 const progressScale = activeIndex >= 0 ? (activeIndex + 1) / NAV_ANCHORS.length : 0;

 return (
 <div ref={pageRef} className="relative w-full">
  <AmbientLighting 
    pageRef={pageRef}
    keyLight={{
      gradient: "radial-gradient(ellipse 50% 40% at 38% 15%, rgba(201,166,107,0.025), transparent 70%)",
      speed: 0.97
    }}
    fillLight={{
      gradient: "radial-gradient(ellipse 40% 35% at 62% 48%, rgba(201,166,107,0.015), transparent 70%)",
      speed: 0.93
    }}
    accentLight={{
      gradient: "radial-gradient(ellipse 30% 25% at 50% 85%, rgba(201,166,107,0.012), transparent 65%)",
      speed: 0.88
    }}
  />

  <main className="w-full min-h-screen bg-[#060508] text-[#F5F2ED] pt-[72px] relative z-10 overflow-hidden">
  <GrainOverlay />
  <ScrollProgress color="rgba(201,166,107,0.6)" />
  
  <ScaleReveal>
  
  {/* SECTION 1 - ENGINE OVERVIEW */}
  <section className="w-full pt-[120px] pb-[64px] md:pb-[96px] relative">
  <Container>
  <FadeUp delay={0.15}>
  <div className="flex items-center justify-between">
  <div className="flex items-center gap-[8px]">
  <Link href="/" className="hover:text-[#F5F2ED] transition-colors duration-300">
  <Meta>IMAGINTA</Meta>
  </Link>
  <Meta className="text-[#F5F2ED]/20">/</Meta>
  <Meta className="text-[#F5F2ED]/[0.35]">CAPABILITIES</Meta>
  </div>
  <div className="flex items-center gap-4">
  <div className="w-2 h-2 rounded-full bg-accent-base animate-pulse " />
  <Meta>AVAILABLE</Meta>
  </div>
  </div>
  </FadeUp>

  <FadeUp delay={0.3} className="mt-[48px]">
  <h1 className="font-sans text-[clamp(40px,6.5vw,84px)] font-bold tracking-[-0.04em] leading-[0.95] text-[#F5F2ED] uppercase">
  Integrated <br />
  <span className="font-serif italic text-[#F5F2ED]/20 lowercase tracking-tight">Capabilities.</span>
  </h1>
  </FadeUp>

  <FadeUp delay={0.45} className="mt-[32px] max-w-[640px]">
  <p className="font-sans text-[18px] md:text-[21px] font-light text-[#F5F2ED]/40 leading-relaxed">
  Our disciplines aren’t siloed services—they are the <span className="text-[#F5F2ED]/80">Core Components</span> of an integrated system designed to keep your business fresh, automated, and operating at peak competitive levels.
  </p>
  </FadeUp>
  </Container>

  {/* STICKY NAV */}
  <div className="sticky top-[72px] mt-[64px] z-40 w-full bg-[#060508]/85 backdrop-blur-[8px] pt-[16px] pb-[16px]">
  <div className="hidden md:block absolute bottom-0 left-[24px] right-[24px] h-[1px]">
  <div className="h-full bg-accent-base/[0.2] transition-transform duration-500 ease origin-left" style={{ transform: `scaleX(${progressScale})` }} />
  </div>

  <Container className="px-0 md:px-[24px]">
  <StaggerGroup delay={0.6} className="flex flex-row gap-[12px] min-w-max px-[24px] md:px-0 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-[4px]">
  {NAV_ANCHORS.map((anchor) => {
  const isActive = activeSection === anchor.id;
  return (
  <StaggerItem key={anchor.id} className="snap-start">
  <a
  href={`#${anchor.id}`}
  onClick={(e) => handleScroll(e, anchor.id)}
  data-cursor={anchor.tag}
  className="block"
  >
  <GlassPane 
  padding="12px 24px" 
  radius="50px" 
  className={`group shrink-0 cursor-pointer transition-all duration-500 ease ${isActive ? 'bg-accent-base/10 border-accent-base/20 ' : 'bg-[#F5F2ED]/[0.02] border-[#F5F2ED]/[0.06] hover:border-accent-base/20'}`}
  >
  <div className="flex items-center gap-[8px]">
  <Meta accent={!isActive} className={isActive ? 'text-accent-base' : 'text-[#F5F2ED]/20'}>{anchor.number}</Meta>
  <span className={`font-sans text-[12px] font-bold tracking-widest uppercase transition-colors duration-500 ${isActive ? 'text-[#F5F2ED]' : 'text-[#F5F2ED]/40 group-hover:text-[#F5F2ED]'}`}>
  {anchor.title}
  </span>
  </div>
  </GlassPane>
  </a>
  </StaggerItem>
  );
  })}
  </StaggerGroup>
  </Container>
  </div>
  </section>

  {/* SECTION 2 - IDENTITY SYNTHESIS */}
  <section 
  id="identity-synthesis" 
  className="w-full py-[80px] md:py-[120px] relative scroll-mt-[96px]"
  >
  <Container className="relative z-10">
  <div className="flex flex-col md:grid md:grid-cols-[1.2fr_1fr] gap-[48px] items-start">
  <FadeUp delay={0.15}>
  <div className="flex items-center gap-3 mb-6">
  <div className="p-3 rounded-2xl bg-accent-base/5 border border-accent-base/20">
  <Layers size={18} className="text-accent-base" />
  </div>
  <Meta className="text-accent-base/60 uppercase tracking-[0.4em] font-bold text-[10px]">BRAND STRATEGY</Meta>
  </div>
  <h2 className="font-sans text-[44px] md:text-[64px] font-bold tracking-tighter text-[#F5F2ED] leading-none uppercase">
  Identity <br />
  <span className="text-[#F5F2ED]/20 font-serif italic lowercase tracking-tight">Synthesis.</span>
  </h2>
  <p className="mt-[24px] max-w-[520px] font-sans text-[17px] font-light text-[#F5F2ED]/40 leading-relaxed">
  We synthesize your business DNA into a high-authority brand system. This isn’t just aesthetic—it’s the strategic foundation that encodes your market value into every pixel the system produces.
  </p>
  
  <div className="mt-12 grid grid-cols-2 gap-8">
  <div className="flex flex-col gap-2">
  <span className="text-[9px] font-mono text-[#F5F2ED]/20 uppercase tracking-widest">Brand Recall Lift</span>
  <span className="text-3xl font-bold text-[#F5F2ED] tracking-tighter"><CountUpNumber value={3.2} decimals={1} />x</span>
  </div>
  <div className="flex flex-col gap-2">
  <span className="text-[9px] font-mono text-[#F5F2ED]/20 uppercase tracking-widest">System Lifespan</span>
  <span className="text-3xl font-bold text-[#F5F2ED] tracking-tighter">8<span className="text-[#F5F2ED]/20 text-xl font-light">yr+</span></span>
  </div>
  </div>
  </FadeUp>

  <ScrollReveal delay={0.3} className="w-full">
  <InteractiveGlassPane padding="40px" radius={32} className="bg-[#F5F2ED]/[0.01] border-[#F5F2ED]/[0.06] hover:bg-[#F5F2ED]/[0.02]">
  <Meta className="mb-8">CORE CAPABILITIES</Meta>
  <div className="space-y-6">
  {[
  { title: "Strategic DNA", desc: "Market positioning and competitive synthesis." },
  { title: "Visual Logic", desc: "Cohesive identity systems built for scale." },
  { title: "Voice Architecture", desc: "Messaging frameworks that command authority." },
  { title: "System Documentation", desc: "Living guidelines for operational consistency." }
  ].map((item, i) => (
  <div key={i} className="flex gap-6 group/item">
  <div className="w-1 h-1 rounded-full bg-accent-base mt-2 group-hover/item:scale-150 transition-transform" />
  <div className="flex flex-col">
  <h4 className="text-[14px] font-bold text-[#F5F2ED] mb-1 uppercase tracking-tight">{item.title}</h4>
  <p className="text-[12px] text-[#F5F2ED]/30 font-light">{item.desc}</p>
  </div>
  </div>
  ))}
  </div>
  </InteractiveGlassPane>
  </ScrollReveal>
  </div>
  </Container>
  </section>

  <SectionDivider variant="standard" />
  <section 
  id="operational-ux" 
  className="w-full py-[80px] md:py-[120px] relative scroll-mt-[96px]"
  >
  <Container className="relative z-10">
  <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_1.2fr] gap-[48px] items-center">
  <ScrollReveal delay={0.3} className="w-full">
  <div className="grid grid-cols-1 gap-6">
  {[
  { icon: Shield, title: "Zero Friction", val: "91%", lab: "Usability Score" },
  { icon: Activity, title: "High Retention", val: "86+", lab: "Interfaces Shipped" }
  ].map((stat, i) => (
  <InteractiveGlassPane key={i} padding="32px" radius={24} className="bg-[#F5F2ED]/[0.02] border-[#F5F2ED]/[0.06] flex items-center gap-8">
  <div className="w-12 h-12 rounded-2xl bg-accent-base/5 border border-accent-base/10 flex items-center justify-center">
  <stat.icon size={20} className="text-accent-base" />
  </div>
  <div className="flex flex-col">
  <span className="text-[9px] font-mono text-[#F5F2ED]/20 uppercase tracking-widest">{stat.lab}</span>
  <span className="text-3xl font-bold text-[#F5F2ED] tracking-tighter">{stat.val}</span>
  </div>
  </InteractiveGlassPane>
  ))}
  </div>
  </ScrollReveal>

  <FadeUp delay={0.15}>
  <div className="flex items-center gap-3 mb-6">
  <div className="p-3 rounded-2xl bg-accent-base/5 border border-accent-base/20">
  <Cpu size={18} className="text-accent-base" />
  </div>
  <Meta className="text-accent-base/60 uppercase tracking-[0.4em] font-bold text-[10px]">PRODUCT DESIGN</Meta>
  </div>
  <h2 className="font-sans text-[44px] md:text-[64px] font-bold tracking-tighter text-[#F5F2ED] leading-none uppercase">
  Operational <br />
  <span className="text-[#F5F2ED]/20 font-serif italic lowercase tracking-tight">UX.</span>
  </h2>
  <p className="mt-[24px] max-w-[520px] font-sans text-[17px] font-light text-[#F5F2ED]/40 leading-relaxed">
  We design the control layer for your business. Our UX isn’t just about looking clean—it’s about operational efficiency, reducing cognitive load, and ensuring every interaction serves your primary goals.
  </p>
  <div className="mt-10 flex flex-wrap gap-2">
  {["User Research", "IA Architecture", "Interface Design", "Design Systems", "Prototyping"].map(tag => (
  <Badge key={tag} className="text-[9px] py-1 px-3 bg-[#F5F2ED]/[0.03] border-[#F5F2ED]/[0.08]">{tag}</Badge>
  ))}
  </div>
  </FadeUp>
  </div>
  </Container>
  </section>

  <SectionDivider variant="standard" />
  <section 
  id="core-engineering" 
  className="w-full py-[80px] md:py-[120px] relative scroll-mt-[96px]"
  >
  <Container className="relative z-10">
  <div className="flex flex-col md:grid md:grid-cols-[1.2fr_1fr] gap-[48px] items-start">
  <FadeUp delay={0.15}>
  <div className="flex items-center gap-3 mb-6">
  <div className="p-3 rounded-2xl bg-accent-base/5 border border-accent-base/20">
  <Settings size={18} className="text-accent-base animate-spin-slow" />
  </div>
  <Meta className="text-accent-base/60 uppercase tracking-[0.4em] font-bold text-[10px]">DEVELOPMENT</Meta>
  </div>
  <h2 className="font-sans text-[44px] md:text-[64px] font-bold tracking-tighter text-[#F5F2ED] leading-none uppercase">
  Core <br />
  <span className="text-[#F5F2ED]/20 font-serif italic lowercase tracking-tight">Engineering.</span>
  </h2>
  <p className="mt-[24px] max-w-[520px] font-sans text-[17px] font-light text-[#F5F2ED]/40 leading-relaxed">
  The mechanics that keep the system silent and fast. High-performance, technical precision, and zero-debt architectures that ensure your operational foundation is unshakeable.
  </p>
  
  <div className="mt-12 flex items-center gap-10">
  <div className="flex flex-col">
  <span className="text-[10px] font-mono text-[#F5F2ED]/20 tracking-widest uppercase mb-2">Lighthouse Avg</span>
  <span className="text-4xl font-bold text-[#F5F2ED] tracking-tighter">98<span className="text-accent-base text-2xl">+</span></span>
  </div>
  <div className="w-px h-12 bg-[#F5F2ED]/5" />
  <div className="flex flex-col">
  <span className="text-[10px] font-mono text-[#F5F2ED]/20 tracking-widest uppercase mb-2">Build Velocity</span>
  <span className="text-4xl font-bold text-[#F5F2ED] tracking-tighter">Fast<span className="text-accent-base text-2xl">_</span></span>
  </div>
  </div>
  </FadeUp>

  <ScrollReveal delay={0.3} className="w-full">
  <InteractiveGlassPane padding="40px" radius={32} className="bg-[#F5F2ED]/[0.01] border-[#F5F2ED]/[0.06] relative overflow-hidden group">
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-base/20 to-transparent" />
  <Meta className="mb-8">ENGINEERING SPECS</Meta>
  <div className="grid grid-cols-1 gap-4">
  {[
  { t: "Frontend Engineering", d: "Next.js & TypeScript Architecture" },
  { t: "Performance Ops", d: "Sub-second load optimization" },
  { t: "Infrastructure", d: "Serverless & Edge Compute" },
  { t: "CI/CD Protocol", d: "Automated Deployment Pipelines" }
  ].map((spec, i) => (
  <div key={i} className="p-4 rounded-2xl border border-[#F5F2ED]/[0.06] bg-[#F5F2ED]/[0.01] group-hover:bg-[#F5F2ED]/[0.02] transition-colors">
  <h5 className="text-[13px] font-bold text-[#F5F2ED] mb-1 uppercase">{spec.t}</h5>
  <p className="text-[11px] text-[#F5F2ED]/30 font-light">{spec.d}</p>
  </div>
  ))}
  </div>
  </InteractiveGlassPane>
  </ScrollReveal>
  </div>
  </Container>
  </section>

  <SectionDivider variant="standard" />
  <section 
  id="cognitive-intelligence" 
  className="w-full py-[80px] md:py-[120px] relative scroll-mt-[96px]"
  >
  <Container className="relative z-10">
  <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_1.2fr] gap-[48px] items-center">
  <ScrollReveal delay={0.3} className="w-full h-full">
  <InteractiveGlassPane padding="40px" radius={32} className="h-full border-accent-base/10 bg-accent-base/[0.02] relative flex flex-col justify-center overflow-hidden">
  <div className="relative z-10 flex flex-col items-center text-center">
  <BrainCircuit size={48} className="text-accent-base mb-6" />
  <span className="text-[10px] font-mono text-accent-base tracking-[0.4em] uppercase font-bold mb-4">SMART AUTOMATION</span>
  <div className="flex items-center gap-8">
  <div className="flex flex-col">
  <span className="text-4xl font-bold text-[#F5F2ED] tracking-tighter">64<span className="text-[#F5F2ED]/20 text-xl">%</span></span>
  <span className="text-[9px] font-mono text-[#F5F2ED]/20 uppercase tracking-widest">Efficiency</span>
  </div>
  <div className="w-px h-8 bg-[#F5F2ED]/10" />
  <div className="flex flex-col">
  <span className="text-4xl font-bold text-[#F5F2ED] tracking-tighter">99<span className="text-[#F5F2ED]/20 text-xl">.8%</span></span>
  <span className="text-[9px] font-mono text-[#F5F2ED]/20 uppercase tracking-widest">Accuracy</span>
  </div>
  </div>
  </div>
  </InteractiveGlassPane>
  </ScrollReveal>

  <FadeUp delay={0.15}>
  <div className="flex items-center gap-3 mb-6">
  <div className="p-3 rounded-2xl bg-accent-base/5 border border-accent-base/20">
  <Network size={18} className="text-accent-base" />
  </div>
  <Meta className="text-accent-base/60 uppercase tracking-[0.4em] font-bold text-[10px]">AI & AUTOMATION</Meta>
  </div>
  <h2 className="font-sans text-[44px] md:text-[64px] font-bold tracking-tighter text-[#F5F2ED] leading-none uppercase">
  Cognitive <br />
  <span className="text-[#F5F2ED]/20 font-serif italic lowercase tracking-tight">Intelligence.</span>
  </h2>
  <p className="mt-[24px] max-w-[520px] font-sans text-[17px] font-light text-[#F5F2ED]/40 leading-relaxed">
  The core of the system. We integrate custom AI workflows and neural pipelines that automate repetitive business logic and drive intelligent efficiency.
  </p>
  <div className="mt-10 space-y-4">
  {[
  "Custom LLM Agentic Workflows",
  "Automated Data Synthesis",
  "Semantic Search Architectures",
  "Predictive Operational Logic"
  ].map(point => (
  <div key={point} className="flex items-center gap-4">
  <div className="w-1 h-1 rounded-full bg-accent-base" />
  <span className="text-[13px] text-[#F5F2ED]/60 font-light">{point}</span>
  </div>
  ))}
  </div>
  </FadeUp>
  </div>
  </Container>
  </section>

  <SectionDivider variant="standard" />
  <section className="w-full py-[100px] md:py-[160px] relative">
  <Container>
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
  <div className="max-w-xl">
  <Meta className="mb-6">THE OPERATIONAL DIFFERENCE</Meta>
  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#F5F2ED] uppercase leading-[1.1]">
  One System. <br />
  <span className="text-[#F5F2ED]/20">Complete Alignment.</span>
  </h2>
  </div>
  <p className="text-[#F5F2ED]/40 text-[15px] font-light max-w-[320px] leading-relaxed">
  Traditional agencies create handoffs. We create continuity. One studio, one context, one unshakeable vision.
  </p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <GlassPane padding="48px" className="bg-[#F5F2ED]/[0.01] border-[#F5F2ED]/[0.06]">
  <h3 className="text-xl font-bold text-[#F5F2ED] mb-10 uppercase tracking-tight">The Legacy Model</h3>
  <div className="space-y-6">
  {[
  "Fragmented vendors and context loss.",
  "High technical debt and stale design.",
  "Manual, non-automated workflows.",
  "Inconsistent brand and product vision.",
  "Slow deployment and reactive support."
  ].map((text, i) => (
  <div key={i} className="flex gap-4 items-start text-[#F5F2ED]/20">
  <Plus size={16} className="mt-1 rotate-45" />
  <span className="text-[15px] font-light">{text}</span>
  </div>
  ))}
  </div>
  </GlassPane>

  <InteractiveGlassPane padding="48px" className="bg-accent-base/[0.02] border-accent-base/10 ">
  <h3 className="text-xl font-bold text-[#F5F2ED] mb-10 uppercase tracking-tight">The Imaginta System</h3>
  <div className="space-y-6">
  {[
  "Unified operational intelligence layer.",
  "Zero-debt, self-cleaning architectures.",
  "Autonomous, AI-driven background ops.",
  "Perfectly synthesized brand/UX DNA.",
  "Rapid deployment and proactive scaling."
  ].map((text, i) => (
  <div key={i} className="flex gap-4 items-start text-accent-base">
  <Plus size={16} className="mt-1" />
  <span className="text-[15px] font-bold text-[#F5F2ED]/80">{text}</span>
  </div>
  ))}
  </div>
  </InteractiveGlassPane>
  </div>
  </Container>
  </section>

  <SectionDivider variant="standard" />
  <section className="w-full py-[100px] md:py-[160px] relative">
  <Container>
  <div className="text-center max-w-2xl mx-auto mb-20">
  <Meta className="mb-6">ENGAGEMENT ARCHITECTURE</Meta>
  <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#F5F2ED] uppercase mb-6">
  Choose your <br />
  <span className="text-[#F5F2ED]/20 font-serif italic lowercase">Integration</span> <span className="text-accent-base/40">Tier.</span>
  </h2>
  </div>

  <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
  { 
  tier: "Standard Attachment", 
  desc: "Perfect for defined projects and initial system deployment.",
  timeline: "6-12 weeks",
  team: "2-3 Specialists",
  investment: "EUR 8K+"
  },
  { 
  tier: "Operational Retainer", 
  desc: "Continuous background optimization and feature deployment.",
  timeline: "3 months min",
  team: "Dedicated Squad",
  investment: "EUR 3K/mo",
  popular: true
  },
  { 
  tier: "Deep Integration", 
  desc: "We become your external product and brand architecture team.",
  timeline: "6+ months",
  team: "Full Core Team",
  investment: "Custom"
  }
  ].map((item, i) => (
  <StaggerItem key={i} className="h-full">
  <InteractiveGlassPane 
  padding="40px" 
  radius={32} 
  className={cn(
  "h-full flex flex-col group relative overflow-hidden",
  item.popular ? "border-accent-base/20 bg-accent-base/[0.03]" : "border-[#F5F2ED]/[0.06] bg-[#F5F2ED]/[0.01]"
  )}
  >
  {item.popular && (
  <div className="absolute top-8 right-8">
  <Badge className="bg-accent-base/10 text-accent-base border-accent-base/20 animate-pulse">RECOMMENDED</Badge>
  </div>
  )}
  <h3 className="text-2xl font-bold text-[#F5F2ED] mb-4 uppercase tracking-tighter">{item.tier}</h3>
  <p className="text-[14px] text-[#F5F2ED]/40 font-light leading-relaxed mb-10 flex-grow">
  {item.desc}
  </p>
  
  <div className="space-y-4 mb-10">
  <div className="flex justify-between items-center border-b border-[#F5F2ED]/[0.06] pb-3">
  <Meta className="text-[9px]">Timeline</Meta>
  <span className="text-[13px] text-[#F5F2ED]/80 font-bold">{item.timeline}</span>
  </div>
  <div className="flex justify-between items-center border-b border-[#F5F2ED]/[0.06] pb-3">
  <Meta className="text-[9px]">Resource</Meta>
  <span className="text-[13px] text-[#F5F2ED]/80 font-bold">{item.team}</span>
  </div>
  <div className="flex justify-between items-center">
  <Meta className="text-[9px]">Base Investment</Meta>
  <span className="text-[13px] text-accent-base font-bold uppercase tracking-widest">{item.investment}</span>
  </div>
  </div>

  <Button 
  variant={item.popular ? "primary" : "ghost"} 
  href="/contact"
  className="w-full justify-center group/btn"
  >
  <span className="relative z-10">Activate Tier</span>
  <ArrowUpRight size={14} className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
  </Button>
  </InteractiveGlassPane>
  </StaggerItem>
  ))}
  </StaggerGroup>
  </Container>
  </section>

  <SectionDivider variant="standard" />
  <section className="w-full py-[100px] md:py-[160px]">
  <Container>
  <div className="flex items-center gap-4 mb-16">
  <div className="w-12 h-px bg-accent-base/40" />
  <Meta className="text-accent-base/60 uppercase tracking-[0.4em] font-bold text-[10px]">QUERIES</Meta>
  </div>
  
  <div className="flex flex-col max-w-4xl">
  {FAQ_DATA.map((faq, index) => (
  <StaggerItem key={index}>
  <FAQItem
  question={faq.q}
  answer={faq.a}
  isOpen={openFaq === index}
  onClick={() => setOpenFaq(openFaq === index ? null : index)}
  />
  </StaggerItem>
  ))}
  </div>
  </Container>
  </section>

  <SectionDivider variant="accent" />
  <CTABand />

  </ScaleReveal>
  </main>
 </div>
 );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
 return (
 <div 
 className={cn(
 "border-b border-[#F5F2ED]/[0.06] w-full transition-all duration-500 border-l-[2px] pl-6 md:pl-10 mb-4",
 isOpen ? "border-l-accent-base bg-accent-base/[0.02]" : "border-l-transparent hover:border-l-white/10"
 )} 
 >
 <button 
 onClick={onClick}
 className="w-full py-8 flex items-center justify-between text-left group"
 >
 <span className={cn(
 "text-[17px] md:text-[20px] font-bold tracking-tight transition-colors duration-300 pr-8",
 isOpen ? "text-[#F5F2ED]" : "text-[#F5F2ED]/40 group-hover:text-[#F5F2ED]"
 )}>
 {question}
 </span>
 <div className={cn(
 "flex-shrink-0 transition-all duration-500",
 isOpen ? "rotate-45 text-accent-base" : "text-[#F5F2ED]/20"
 )}>
 <Plus size={20} />
 </div>
 </button>
 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: 'auto', opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.5, ease: EASING.smoothArray }}
 className="overflow-hidden"
 >
 <p className="text-[15px] md:text-[17px] font-light text-[#F5F2ED]/40 leading-relaxed max-w-3xl pb-10">
 {answer}
 </p>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
}
