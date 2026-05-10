'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Container, 
  Meta, 
  InteractiveGlassPane, 
  GrainOverlay, 
  CountUpNumber,
  Button,
  SectionDivider,
  Whisper,
  StatusDot,
  AmbientLighting
} from '@/components/ui';
import { ScaleReveal, FadeUp, StaggerGroup, StaggerItem, ScrollReveal } from '@/components/motion';
import { 
  BrainCircuit, 
  Cpu, 
  Zap, 
  Network, 
  Shield, 
  ArrowUpRight, 
  Sparkles, 
  Activity, 
  Settings, 
  Layers, 
  Power,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { EASING } from '@/lib/constants';
import { cn } from '@/lib/utils';

const PILLARS = [
  {
    id: "01",
    title: "Autonomous Operational Logic",
    category: "SYSTEM",
    description: "A silent background system that manages, cleans, and optimizes your business workflows with zero manual friction. Always fresh, always operating.",
    icon: BrainCircuit,
    stats: { label: "OPEX REDUCTION", value: "42", unit: "%" }
  },
  {
    id: "02",
    title: "Competitive Intelligence Tier",
    category: "ADVANTAGE",
    description: "Utilizing the latest frontier models to ensure your business logic outpaces competitors. Real-time market adaptation through intelligent telemetry.",
    icon: Zap,
    stats: { label: "MARKET EDGE", value: "88", unit: "th" }
  },
  {
    id: "03",
    title: "Plug-and-Play Integration",
    category: "PROTOCOL",
    description: "Not a service, but a work model. Our intelligence layer attaches directly to your existing infrastructure, delivering immediate, above-average growth.",
    icon: Network,
    stats: { label: "DEPLOY TIME", value: "14", unit: "days" }
  }
];

function EngineTelemetry() {
  return (
    <div className="flex flex-wrap gap-8 p-6 md:p-8 rounded-[32px] bg-[#F5F2ED]/[0.02] border border-[#F5F2ED]/[0.06] backdrop-blur-[8px] relative overflow-hidden group">
      {/* Animated Scanning Line - Now with Emerald Vitality */}
      <motion.div 
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-prestige/5 to-transparent skew-x-12 pointer-events-none"
      />
      
      <div className="flex items-center gap-4 border-r border-[#F5F2ED]/[0.06] pr-8">
        <StatusDot status="active" pulse={true} className="w-2 h-2" />
        <div className="flex flex-col">
          <span className="text-[9px] font-mono text-[#F5F2ED]/20 uppercase tracking-widest leading-none mb-1">Status</span>
          <span className="text-[11px] font-bold text-prestige uppercase tracking-wider">Online</span>
        </div>
      </div>

      <div className="flex flex-col gap-1 pr-8 border-r border-[#F5F2ED]/[0.06]">
        <span className="text-[9px] font-mono text-[#F5F2ED]/20 uppercase tracking-widest leading-none mb-1">Throughput</span>
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-bold text-[#F5F2ED] tracking-tighter">
            <CountUpNumber value={94.2} decimals={1} />
          </span>
          <span className="text-[10px] text-[#F5F2ED]/20 font-light">%</span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[9px] font-mono text-[#F5F2ED]/20 uppercase tracking-widest leading-none mb-1">Latency</span>
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-bold text-[#F5F2ED] tracking-tighter">12</span>
          <span className="text-[10px] text-[#F5F2ED]/20 font-light">MS</span>
        </div>
      </div>
    </div>
  );
}

function IntelligenceHero() {
  return (
    <section className="relative w-full pt-[160px] pb-[80px] md:pt-[220px] md:pb-[100px] overflow-hidden bg-[#060508]">
      <Container className="relative z-10">
        <div className="max-w-5xl">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full border border-accent-base/20 flex items-center justify-center relative overflow-hidden bg-accent-base/5">
                <Settings size={16} className="text-accent-base animate-spin-slow" />
              </div>
              <Meta className="m-0 text-accent-base uppercase tracking-[0.5em] font-bold text-[10px]">INTELLIGENCE</Meta>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <h1 className="text-[clamp(44px,7vw,88px)] font-bold tracking-tighter leading-[0.9] text-[#F5F2ED] mb-10 uppercase">
              The System of <br />
              <span className="text-[#F5F2ED]/20 font-serif italic lowercase tracking-tight">high-fidelity</span> <span className="text-accent-base/40">Growth.</span>
            </h1>
          </FadeUp>

          <div className="flex flex-col lg:flex-row items-start gap-12 mt-4">
            <FadeUp delay={0.3} className="max-w-2xl">
              <p className="text-[18px] md:text-[21px] text-[#F5F2ED]/40 leading-relaxed font-light">
                Imaginta isn’t just an agency—it’s a <span className="text-[#F5F2ED]/80 font-medium">Work Model</span>. 
                We deploy as a background system that keeps your business fresh, clean, and perfectly operated, utilizing latest intelligence resources to maintain an unassailable market lead.
              </p>
              <div className="flex items-center gap-6 mt-10">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-prestige/20 bg-prestige/5">
                  <CheckCircle2 size={12} className="text-prestige" />
                  <span className="text-[10px] font-mono text-prestige/60 uppercase tracking-widest font-bold">Always_Fresh</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-prestige/20 bg-prestige/5">
                  <CheckCircle2 size={12} className="text-prestige" />
                  <span className="text-[10px] font-mono text-prestige/60 uppercase tracking-widest font-bold">Background_Ops</span>
                </div>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.4} className="w-full lg:w-auto">
              <EngineTelemetry />
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PillarCard({ pillar, index }: { pillar: typeof PILLARS[0], index: number }) {
  const Icon = pillar.icon;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <StaggerItem className="h-full">
      <InteractiveGlassPane
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-full group border-[#F5F2ED]/[0.06] bg-[#F5F2ED]/[0.01] hover:bg-[#F5F2ED]/[0.02] transition-all duration-700"
        padding="32px"
        radius={24}
      >
        <div className="flex flex-col h-full relative z-10">
          <div className="flex items-start justify-between mb-10">
            <div className="p-4 rounded-2xl bg-[#F5F2ED]/[0.03] border border-[#F5F2ED]/[0.08] group-hover:border-accent-base/40 transition-all duration-700">
              <Icon size={20} className="text-[#F5F2ED]/30 group-hover:text-accent-base transition-all duration-700" />
            </div>
            <span className="text-[9px] font-bold text-[#F5F2ED]/10 uppercase tracking-[0.4em] mt-1 group-hover:text-accent-base/40 transition-colors">{pillar.category}</span>
          </div>

          <h3 className="text-xl font-bold text-[#F5F2ED] tracking-tight mb-4 group-hover:text-[#F5F2ED] transition-colors duration-500">
            {pillar.title}
          </h3>
          
          <p className="text-[14px] text-[#F5F2ED]/30 leading-relaxed font-light mb-10 group-hover:text-[#F5F2ED]/50 transition-colors duration-500">
            {pillar.description}
          </p>

          <div className="mt-auto pt-6 border-t border-[#F5F2ED]/[0.06] flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[8px] font-bold text-[#F5F2ED]/10 uppercase tracking-widest">{pillar.stats.label}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-[#F5F2ED] tracking-tighter">
                  <CountUpNumber value={parseFloat(pillar.stats.value)} decimals={pillar.stats.value.includes('.') ? 1 : 0} />
                </span>
                <span className="text-sm text-[#F5F2ED]/20 font-light lowercase">{pillar.stats.unit}</span>
              </div>
            </div>
            
            <div className="w-8 h-8 rounded-full border border-[#F5F2ED]/[0.06] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0 bg-accent-base/10">
              <ArrowUpRight size={14} className="text-accent-base" />
            </div>
          </div>
        </div>
      </InteractiveGlassPane>
    </StaggerItem>
  );
}

function AttachmentProtocol() {
  return (
    <>
      <SectionDivider variant="standard" />
      <section className="py-32 md:py-48 bg-[#060508] relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
            <ScrollReveal>
              <Meta className="mb-6">THE ATTACHMENT PROTOCOL</Meta>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#F5F2ED] leading-[1.05] mb-8 uppercase">
                Not a service. <br />
                <span className="text-[#F5F2ED]/20">A Plug-and-Play</span> <br />
                <span className="text-accent-base/40">Work Model.</span>
              </h2>
              <p className="text-[17px] text-[#F5F2ED]/40 font-light leading-relaxed mb-10 max-w-lg">
                We don’t disrupt your flow. We attach to it. Our model acts as a cognitive skin over your business, optimizing every operation from the inside out using frontier intelligence technology.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Integration", value: "Zero Friction", desc: "Non-disruptive attachment.", status: "active" },
                  { label: "Performance", value: "Tier-1 Logic", desc: "Latest intelligence models.", status: "active" },
                  { label: "Outcome", value: "Above Average", desc: "Beating the market norms.", status: "active" },
                  { label: "Maintenance", value: "Self-Cleaning", desc: "Automated freshness.", status: "active" }
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-[#F5F2ED]/[0.01] border border-[#F5F2ED]/[0.06] hover:border-prestige/10 transition-all duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <StatusDot status={item.status as any} className="w-1 h-1" />
                      <span className="text-[9px] font-mono text-[#F5F2ED]/20 uppercase tracking-widest">{item.label}</span>
                    </div>
                    <h4 className="text-[15px] font-bold text-[#F5F2ED] mb-1 uppercase">{item.value}</h4>
                    <p className="text-[11px] text-[#F5F2ED]/30 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <div className="relative aspect-square">
              <ScrollReveal delay={0.2} className="h-full">
                <div className="relative h-full w-full flex items-center justify-center">
                  {/* Visual Core of the "System" */}
                  <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
                    <div className="absolute inset-0 border border-[#F5F2ED]/[0.06] rounded-full animate-spin-slow" />
                    <div className="absolute inset-[15%] border border-prestige/5 rounded-full animate-reverse-spin" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-prestige/20 opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
                        <InteractiveGlassPane radius={100} padding="0" className="w-48 h-48 flex items-center justify-center border-prestige/20 bg-prestige/5 shadow-[0_0_50px_rgba(196,163,110,0.1)]">
                          <div className="flex flex-col items-center">
                            <Power size={32} className="text-prestige mb-4 animate-pulse" />
                            <span className="text-[10px] font-mono text-prestige font-bold tracking-[0.4em] uppercase">Attached</span>
                          </div>
                        </InteractiveGlassPane>
                      </div>
                    </div>

                    {/* Data Points */}
                    {[0, 72, 144, 216, 288].map((deg, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-prestige/40"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${deg}deg) translate(180px) rotate(-${deg}deg)`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function IntelligencePage() {
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

      <main className="w-full min-h-screen bg-[#060508] text-[#F5F2ED] relative z-10 overflow-hidden">
        <GrainOverlay />
        <Whisper text="INTELLIGENCE" className="fixed left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left opacity-10 pointer-events-none" />
        
        <IntelligenceHero />

        <section className="py-24 md:py-40 relative">
          <Container>
            <div className="max-w-3xl mb-24">
              <ScrollReveal>
                <Meta className="mb-6">THE WORK MODEL</Meta>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-[#F5F2ED] leading-none uppercase">
                  Integrated <br />
                  <span className="text-[#F5F2ED]/20 font-serif italic lowercase text-[0.8em]">Operational</span> <br />
                  <span className="text-accent-base/40">Excellence.</span>
                </h2>
              </ScrollReveal>
            </div>

            <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PILLARS.map((pillar, idx) => (
                <PillarCard key={pillar.id} pillar={pillar} index={idx} />
              ))}
            </StaggerGroup>
          </Container>
        </section>

        <AttachmentProtocol />

        <SectionDivider variant="standard" />
        {/* Live State Section */}
        <section className="py-32 md:py-48 bg-[#060508] relative overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
              {[
                { label: "Operational Health", value: "100", unit: "%", icon: CheckCircle2, status: "active" },
                { label: "Logic Freshness", value: "Real-time", unit: "SYNC", icon: RefreshCw, status: "active" },
                { label: "System Accuracy", value: "99.8", unit: "%", icon: Shield, status: "security" },
                { label: "Deployment Velocity", value: "Above", unit: "AVG", icon: Sparkles, status: "active" }
              ].map((metric, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex flex-col gap-4 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={cn(
                        "w-10 h-10 rounded-2xl bg-[#F5F2ED]/[0.02] border border-[#F5F2ED]/[0.08] flex items-center justify-center transition-all duration-500",
                        metric.status === 'security' ? "group-hover:border-prestige/30 bg-prestige/[0.02]" : "group-hover:border-accent-base/30"
                      )}>
                        <metric.icon size={18} className={cn(
                          "text-[#F5F2ED]/20 transition-colors",
                          metric.status === 'security' ? "group-hover:text-prestige" : "group-hover:text-accent-base"
                        )} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-[#F5F2ED]/20 uppercase tracking-widest">{metric.label}</span>
                        <div className="flex items-center gap-1.5 mt-1">
                           <StatusDot status={metric.status as any} className="w-1 h-1" />
                           <span className="text-[8px] font-mono text-prestige/40 uppercase tracking-tighter">{metric.status}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-[#F5F2ED] tracking-tighter">
                        {isNaN(parseFloat(metric.value)) 
                          ? metric.value 
                          : <CountUpNumber value={parseFloat(metric.value)} decimals={metric.value.includes('.') ? 1 : 0} />
                        }
                      </span>
                      <span className="text-xl text-[#F5F2ED]/20 font-light lowercase">{metric.unit}</span>
                    </div>
                    <div className="w-full h-[1px] bg-[#F5F2ED]/[0.03] relative overflow-hidden mt-4">
                      <motion.div 
                        animate={{ left: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                        className={cn(
                          "absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent to-transparent",
                          metric.status === 'security' ? "via-prestige/20" : "via-accent-base/20"
                        )}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        <SectionDivider variant="accent" />
        {/* Final CTA */}
        <section className="py-48 relative overflow-hidden">
          <Container className="text-center relative z-10">
            <ScaleReveal>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#F5F2ED] mb-12 uppercase">
                Activate your <br />
                <span className="font-serif italic text-prestige/40 lowercase">Intelligence</span> <span className="text-accent-base/40">System.</span>
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
                <Button 
                  href="/contact" 
                  className="px-12 py-6 bg-prestige text-[#060508] text-[12px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white transition-all duration-500"
                >
                  Contact Us
                </Button>
                <Button 
                  href="/services" 
                  variant="ghost"
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F5F2ED]/40 hover:text-[#F5F2ED]"
                >
                  Explore Capabilities
                </Button>
              </div>
            </ScaleReveal>
          </Container>
        </section>
      </main>
    </div>
  );
}
