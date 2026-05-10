'use client';

import React from 'react';
import { 
  Container, 
  Meta, 
  GrainOverlay,
  GlassPane
} from '@/components/ui';
import { ScrollReveal, FadeUp } from '@/components/motion';
import { 
  Palette, 
  Layout, 
  Bot, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─────────────────────────── Data ─────────────────────────── */

const SERVICES = [
  {
    id: "01",
    title: "Brand Strategy & Design",
    category: "Identity",
    description: "We help you tell a story that people remember. It’s about more than just a logo—it’s about building trust and making sure your brand feels premium at every touchpoint.",
    deliverables: ["Visual Identity", "Brand Story", "Creative Direction"],
    icon: Palette,
    isPrestige: true
  },
  {
    id: "02",
    title: "Web & App Development",
    category: "Digital",
    description: "We build fast, beautiful websites that work perfectly on every screen. Our focus is on creating smooth experiences that make it easy for your customers to take action.",
    deliverables: ["Responsive Sites", "Mobile Apps", "E-commerce"],
    icon: Layout,
    isPrestige: false
  },
  {
    id: "03",
    title: "AI & Smart Automation",
    category: "Productivity",
    description: "We use smart tools to handle repetitive tasks, giving you more time for the work that matters. It’s like having an extra team that never sleeps, working to keep you ahead.",
    deliverables: ["AI Tools", "Task Automation", "Workflow Support"],
    icon: Bot,
    isPrestige: true
  }
];

/* ─────────────────────────── Main Section ─────────────────────────── */

export function Services() {
  return (
    <section id="services" className="relative w-full bg-transparent pt-8 sm:pt-10 md:pt-[56px] lg:pt-20 pb-12 sm:pb-14 md:pb-[72px] lg:pb-24 overflow-hidden">
      <GrainOverlay opacity={0.012} />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <ScrollReveal>
            <div className="mb-4 lg:mb-6">
              <Meta className="meta-text meta-amber">What_We_Do</Meta>
            </div>
            <h2 className="section-h2 text-[#F5F2ED] uppercase">
              Designing for <br />
              <span className="text-prestige/30 font-serif italic lowercase tracking-tight font-normal">Growth &</span> <span className="text-[#F5F2ED]/20 font-serif italic lowercase tracking-tight font-normal">Connection.</span>
            </h2>
            <p className="body-text">
              We combine world-class design with practical technology to help founders build products that people love. No tech jargon—just <span className="text-prestige/60 font-medium">results that matter</span>.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch">
          {SERVICES.map((service, idx) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={idx} 
              className={cn(idx === 2 && "md:col-span-2 lg:col-span-1")}
            />
          ))}
        </ScrollReveal>

        {/* Simplified Footer Action */}
        <ScrollReveal delay={0.4} className="mt-16 md:mt-24 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-prestige/[0.03] border border-prestige/10 flex items-center justify-center">
              <CheckCircle2 size={20} className="text-prestige/60" />
            </div>
            <div className="flex flex-col">
               <span className="text-[10px] font-mono text-prestige tracking-[0.3em] font-bold uppercase">Our Commitment</span>
               <span className="text-sm text-[#F5F2ED]/30 uppercase tracking-tight">Practical Solutions // Premium Delivery</span>
            </div>
          </div>
          
          <GlassPane 
            plane={3} 
            noBlur={true} 
            padding="0"
            radius={999}
            className="group"
          >
            <a 
              href="/services" 
              className="flex items-center gap-8 px-12 py-5 transition-all duration-700"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#F5F2ED]/60 group-hover:text-prestige">Explore_All_Services</span>
              <ArrowUpRight size={18} className="text-prestige group-hover:rotate-45 transition-transform" />
            </a>
          </GlassPane>
        </ScrollReveal>
      </Container>
    </section>
  );
}

/* ─────────────────────────── Sub-Components ─────────────────────────── */

function ServiceCard({ service, index, className }: { service: typeof SERVICES[0], index: number, className?: string }) {
  const Icon = service.icon;
  
  return (
    <FadeUp delay={0.1 + index * 0.1} className={cn("h-full", className)}>
      <GlassPane
        plane={2}
        hover={true}
        variant={service.isPrestige ? 'warm' : 'standard'}
        radius={24}
        className="h-full flex flex-col group overflow-hidden"
      >
        <div className="p-[24px_20px] md:p-[28px_24px] lg:p-[32px_28px] flex flex-col h-full relative z-10">
          {/* Header */}
          <div className="mb-16 flex items-center justify-between">
            <div className={cn(
              "w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-700",
              service.isPrestige ? "bg-prestige/5 border-prestige/20 group-hover:bg-prestige" : "bg-white/[0.02] border-white/[0.1] group-hover:bg-[#F5F2ED]/10"
            )}>
              <Icon size={24} className={cn(
                "transition-colors duration-700",
                service.isPrestige ? "text-prestige group-hover:text-black" : "text-[#F5F2ED]/40 group-hover:text-[#F5F2ED]"
              )} />
            </div>
            <span className="text-[10px] font-mono text-prestige/30 tracking-[0.3em] font-bold uppercase">
              SEV.0{index + 1}
            </span>
          </div>

          {/* Title & Description */}
          <div className="mb-12">
            <span className="meta-text meta-amber mb-4 block">
              {service.category}
            </span>
            <h3 className="card-h3 text-[#F5F2ED] mb-4 group-hover:text-prestige transition-colors duration-700">
              {service.title}
            </h3>
            <p className="card-body group-hover:text-[#F5F2ED]/70 transition-colors duration-700">
              {service.description}
            </p>
          </div>

          {/* Deliverables: Minimalist Glass Pills - Plane 3 (RECEDED) */}
          <div className="mt-auto pt-10">
             <div className="flex flex-wrap gap-2">
                {service.deliverables.map((item, i) => (
                  <GlassPane
                    key={i}
                    plane={3}
                    radius={999}
                    padding="6px 16px"
                    className="group-hover:border-prestige/20 group-hover:bg-prestige/5 transition-all duration-700"
                  >
                    <span className="text-[10px] font-mono text-[#F5F2ED]/30 tracking-wider uppercase group-hover:text-prestige/60">
                      {item}
                    </span>
                  </GlassPane>
                ))}
             </div>
          </div>
          
          {/* Arrow Indicator */}
          <div className="absolute top-10 right-10 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700">
             <ArrowUpRight size={20} className="text-prestige" />
          </div>
        </div>
      </GlassPane>
    </FadeUp>
  );
}
