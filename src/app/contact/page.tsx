'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useScroll } from 'framer-motion';
import {
 Mail,
 ArrowUpRight,
 Calendar,
 Clock,
 MapPin,
 Globe,
} from 'lucide-react';
import {
 Container,
 Meta,
 HydrationSafe,
 AmbientLighting,
 GrainOverlay,
} from '@/components/ui';
import {
 ScrollReveal,
} from '@/components/motion';
import { cn } from '@/lib/utils';
import { CustomSelect } from '@/components/ui/contact/CustomSelect';
import { FormField } from '@/components/ui/contact/FormField';
import { SuccessState } from '@/components/ui/contact/SuccessState';
import { FAQAccordion } from '@/components/ui/contact/FAQAccordion';

/* ─────────────────────────── Studio Status ─────────────────────────── */

function useStudioStatus() {
 const [status, setStatus] = useState<'online' | 'offline'>('offline');

 useEffect(() => {
 const check = () => {
 const parts = new Intl.DateTimeFormat('en-US', {
 timeZone: 'Europe/Brussels',
 hour: 'numeric',
 hourCycle: 'h23',
 weekday: 'short',
 }).formatToParts(new Date());

 const day = parts.find((p) => p.type === 'weekday')?.value ?? '';
 const hour = parseInt(
 parts.find((p) => p.type === 'hour')?.value ?? '0',
 10
 );
 const isOpen =
 ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day) &&
 hour >= 9 &&
 hour < 18;
 setStatus(isOpen ? 'online' : 'offline');
 };

 check();
 const id = setInterval(check, 60_000);
 return () => clearInterval(id);
 }, []);

 return status;
}

/* ─────────────────────────── Constants ─────────────────────────── */

const SERVICE_OPTIONS = [
 { value: 'brand-identity', label: 'Brand Identity' },
 { value: 'web-design', label: 'Web Design & Development' },
 { value: 'digital-experience', label: 'Digital Experience' },
 { value: 'creative-direction', label: 'Creative Direction' },
 { value: 'motion-design', label: 'Motion Design' },
 { value: 'other', label: 'Something Else' },
];

const BUDGET_OPTIONS = [
 { value: '10-25k', label: '€10k – €25k' },
 { value: '25-50k', label: '€25k – €50k' },
 { value: '50-100k', label: '€50k – €100k' },
 { value: '100k+', label: '€100k+' },
 { value: 'not-sure', label: 'Not sure yet' },
];

const TIMELINE_OPTIONS = [
 { value: 'asap', label: 'As soon as possible' },
 { value: '1-2-months', label: '1 – 2 months' },
 { value: '3-6-months', label: '3 – 6 months' },
 { value: 'flexible', label: 'Flexible' },
];

const FAQ_ITEMS = [
 {
 question: 'What happens after I submit a brief?',
 answer: 'We review your brief internally within 24 hours. A strategist will reach out to schedule a discovery call where we dive deeper into your goals, timeline, and vision. There\'s no commitment at this stage — it\'s simply a conversation.',
 },
 {
 question: 'Do you work with early-stage startups?',
 answer: 'Absolutely. We\'ve partnered with teams at every stage — from pre-seed founders to established enterprises. What matters most is alignment on ambition and a willingness to invest in quality craft.',
 },
 {
 question: 'What does a typical engagement look like?',
 answer: 'Most projects span 6 – 12 weeks and follow our four-phase process: Discovery, Define, Design, and Deliver. We work in close collaboration with your team, with weekly check-ins and transparent progress updates.',
 },
 {
 question: 'Can you work with our existing brand?',
 answer: 'Yes. Whether you need a full rebrand or want to evolve what you have, we\'re comfortable working within existing brand systems. We often refine and extend existing identities rather than starting from scratch.',
 },
];

/* ─────────────────────────── Form Types ─────────────────────────── */

interface FormData {
 name: string;
 email: string;
 company: string;
 service: string;
 budget: string;
 timeline: string;
 details: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL_FORM: FormData = {
 name: '',
 email: '',
 company: '',
 service: '',
 budget: '',
 timeline: '',
 details: '',
};

/* ─────────────────────────── Page Component ─────────────────────────── */

function useBrusselsTime() {
 const [time, setTime] = useState('--:--:--');

 useEffect(() => {
 const update = () => {
 const now = new Intl.DateTimeFormat('en-GB', {
 timeZone: 'Europe/Brussels',
 hour: '2-digit',
 minute: '2-digit',
 second: '2-digit',
 hour12: false,
 }).format(new Date());
 setTime(now);
 };
 update();
 const id = setInterval(update, 1000);
 return () => clearInterval(id);
 }, []);

 return time;
}

export default function ContactPage() {
 const searchParams = useSearchParams();
 const studioStatus = useStudioStatus();
 const brusselsTime = useBrusselsTime();
 const successRef = useRef<HTMLHeadingElement>(null!);
 const pageRef = useRef<HTMLDivElement>(null);

 // Form state
 const [form, setForm] = useState<FormData>(() => {
 const preselectedService = searchParams?.get('service') || '';
 return { ...INITIAL_FORM, service: preselectedService };
 });
 const [status, setStatus] = useState<FormStatus>('idle');

 const updateField = useCallback(
 (field: keyof FormData) =>
 (
 e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => {
 setForm((f) => ({ ...f, [field]: e.target.value }));
 },
 []
 );

 const updateSelect = useCallback(
 (field: keyof FormData) => (value: string) => {
 setForm((f) => ({ ...f, [field]: value }));
 },
 []
 );

 // Count completed fields for progress
 const completedFields = useMemo(() => {
 let count = 0;
 if (form.name.trim()) count++;
 if (form.email.trim()) count++;
 if (form.company.trim()) count++;
 if (form.service) count++;
 if (form.budget) count++;
 if (form.timeline) count++;
 if (form.details.trim()) count++;
 return count;
 }, [form]);

 const isFormValid = form.name.trim() && form.email.trim() && form.service;

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 if (!isFormValid) return;
 setStatus('submitting');
 try {
 console.log('Form submission:', form);
 await new Promise((resolve) => setTimeout(resolve, 1500));
 setStatus('success');
 setTimeout(() => successRef.current?.focus(), 100);
 } catch {
 setStatus('error');
 }
 };

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

  <main id="main" className="w-full min-h-screen bg-[#060508] text-[#F5F2ED] relative z-10 overflow-hidden">
  <GrainOverlay opacity={0.01} />
  
  {/* ═══════════════ PAGE HEADER & ATMOSPHERE ═══════════════ */}
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
  <Container>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
  <div className="relative z-10">
  <ScrollReveal>
  <div className="flex items-center gap-4 mb-10">
  <div className="w-12 h-px bg-accent-base/40" />
  <Meta className="m-0 text-accent-base uppercase tracking-[0.4em] font-semibold text-[11px]">PROJECT INITIATION</Meta>
  </div>
  
  <h1 className="text-6xl md:text-8xl font-semibold text-[#F5F2ED] tracking-tighter leading-[0.9] mb-12">
  Tell us about <br />
  <span className="text-[#F5F2ED]/20 font-serif italic text-5xl md:text-7xl">your vision.</span>
  </h1>
  
  <HydrationSafe fallback={<div className="h-4 w-48 opacity-0" />}>
  <div className="flex flex-col md:flex-row items-start md:items-center gap-8 text-[#F5F2ED]/40">
  <div className="flex items-center gap-3">
  <div className={cn(
  "w-2 h-2 rounded-full",
  studioStatus === 'online' ? "bg-accent-base " : "bg-amber-500 "
  )} />
  <span className="text-[11px] font-mono uppercase tracking-[0.2em]">Studio: {studioStatus === 'online' ? 'Active' : 'Standby'}</span>
  </div>
  <div className="flex items-center gap-3">
  <Clock size={14} className="text-[#F5F2ED]/20" />
  <span className="text-[11px] font-mono uppercase tracking-[0.2em]">Brussels: {brusselsTime} CET</span>
  </div>
  </div>
  </HydrationSafe>
  </ScrollReveal>
  </div>

  <div className="hidden lg:block">
  <ScrollReveal delay={0.2}>
  <div className="flex flex-col gap-2 p-10 border-l border-[#F5F2ED]/[0.05]">
  <span className="text-[10px] font-mono text-[#F5F2ED]/20 uppercase tracking-[0.4em] mb-4">Connection_Protocol</span>
  <p className="text-[16px] text-[#F5F2ED]/40 leading-relaxed font-light">
  Our strategy team reviews every brief within 24 hours. Once accepted, we establish a direct secure channel for your project discovery.
  </p>
  </div>
  </ScrollReveal>
  </div>
  </div>
  </Container>
  </section>

  {/* ═══════════════ INTERACTIVE FORM MODULE ═══════════════ */}
  <section className="pb-32">
  <Container>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
  {/* Form Column */}
  <div className="lg:col-span-8">
  <ScrollReveal>
  <div className="bg-[#F5F2ED]/[0.01] border border-[#F5F2ED]/[0.05] rounded-[40px] p-8 md:p-16 backdrop-blur-[8px] relative overflow-hidden group/form">
  {/* Shimmer line */}
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-base/20 to-transparent" />
  
  {status === 'success' ? (
  <SuccessState successRef={successRef} />
  ) : (
  <form onSubmit={handleSubmit} className="flex flex-col gap-12">
  <div className="flex items-center justify-between">
  <div className="flex flex-col gap-1">
  <span className="text-[10px] font-mono text-[#F5F2ED]/20 uppercase tracking-[0.3em]">Module_ID</span>
  <span className="text-[14px] font-semibold text-[#F5F2ED] uppercase tracking-widest font-mono">BRIEF_COLLECTION_v3.0</span>
  </div>
  <div className="flex flex-col items-end gap-1">
  <span className="text-[10px] font-mono text-[#F5F2ED]/20 uppercase tracking-[0.3em]">Validation</span>
  <span className="text-[14px] font-semibold text-accent-base uppercase tracking-widest font-mono">{completedFields} / 7</span>
  </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  <FormField
  label="IDENTIFICATION // NAME"
  name="name"
  required
  autoComplete="name"
  value={form.name}
  onChange={updateField('name')}
  isValid={form.name.trim().length > 1}
  />
  <FormField
  label="CONTACT // EMAIL"
  name="email"
  type="email"
  required
  autoComplete="email"
  value={form.email}
  onChange={updateField('email')}
  isValid={/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)}
  />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  <FormField
  label="ORGANIZATION // COMPANY"
  name="company"
  autoComplete="organization"
  value={form.company}
  onChange={updateField('company')}
  isValid={form.company.trim().length > 0}
  />
  <div className="flex flex-col gap-3">
  <span className="text-[10px] font-mono text-[#F5F2ED]/20 uppercase tracking-[0.3em]">Project_Nature</span>
  <CustomSelect
  id="service-select"
  name="service"
  options={SERVICE_OPTIONS}
  value={form.service}
  onChange={updateSelect('service')}
  placeholder="Service requested"
  />
  </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  <div className="flex flex-col gap-3">
  <span className="text-[10px] font-mono text-[#F5F2ED]/20 uppercase tracking-[0.3em]">Capital_Allocation</span>
  <CustomSelect
  id="budget-select"
  name="budget"
  options={BUDGET_OPTIONS}
  value={form.budget}
  onChange={updateSelect('budget')}
  placeholder="Budget range"
  />
  </div>
  <div className="flex flex-col gap-3">
  <span className="text-[10px] font-mono text-[#F5F2ED]/20 uppercase tracking-[0.3em]">Temporal_Window</span>
  <CustomSelect
  id="timeline-select"
  name="timeline"
  options={TIMELINE_OPTIONS}
  value={form.timeline}
  onChange={updateSelect('timeline')}
  placeholder="Desired timeline"
  />
  </div>
  </div>

  <FormField
  label="VISION_DESCRIPTION // DETAILS"
  name="details"
  as="textarea"
  rows={5}
  maxLength={2000}
  value={form.details}
  onChange={updateField('details')}
  placeholder="Describe the objective, core challenges, and desired impact..."
  />

  <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-[#F5F2ED]/[0.05]">
  <p className="text-[11px] text-[#F5F2ED]/30 max-w-[300px]">
  By initiating this brief, you agree to our project discovery protocols and data privacy standards.
  </p>
  <button
  type="submit"
  disabled={!isFormValid || status === 'submitting'}
  className={cn(
  "relative px-12 py-5 bg-accent-base text-black font-semibold uppercase tracking-[0.2em] text-[12px] rounded-full overflow-hidden transition-all duration-700",
  "hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(201,166,107,0.04)] disabled:opacity-30 disabled:grayscale disabled:scale-100",
  status === 'submitting' && "pointer-events-none"
  )}
  >
  <span className="relative z-10">
  {status === 'submitting' ? 'Transmitting...' : 'Initiate Brief'}
  </span>
  <div className="absolute inset-0 bg-[#F5F2ED]/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
  </button>
  </div>
  </form>
  )}
  </div>
  </ScrollReveal>
  </div>

  {/* Sidebar Column */}
  <div className="lg:col-span-4 flex flex-col gap-6">
  <ScrollReveal delay={0.2}>
  <div className="p-10 bg-[#F5F2ED]/[0.01] border border-[#F5F2ED]/[0.05] rounded-[32px] flex flex-col gap-8 group hover:border-accent-base/20 transition-all duration-700">
  <div className="flex flex-col gap-1">
  <span className="text-[10px] font-mono text-[#F5F2ED]/20 uppercase tracking-[0.3em]">Communication_Bridge</span>
  <h4 className="text-xl font-semibold text-[#F5F2ED] uppercase tracking-tighter">Direct Channels</h4>
  </div>
  
  <div className="flex flex-col gap-4">
  <a href="mailto:hello@imaginta.com" className="flex items-center justify-between group/link">
  <div className="flex items-center gap-4">
  <div className="w-10 h-10 rounded-2xl bg-[#F5F2ED]/[0.02] border border-[#F5F2ED]/[0.05] flex items-center justify-center group-hover/link:border-accent-base/40 transition-all">
  <Mail size={16} className="text-[#F5F2ED]/30 group-hover/link:text-accent-base" />
  </div>
  <span className="text-[14px] text-[#F5F2ED]/60 group-hover/link:text-[#F5F2ED] transition-colors">hello@imaginta.com</span>
  </div>
  <ArrowUpRight size={14} className="text-[#F5F2ED]/10 group-hover/link:text-accent-base" />
  </a>
  <a href="https://cal.com/imaginta" target="_blank" className="flex items-center justify-between group/link">
  <div className="flex items-center gap-4">
  <div className="w-10 h-10 rounded-2xl bg-[#F5F2ED]/[0.02] border border-[#F5F2ED]/[0.05] flex items-center justify-center group-hover/link:border-accent-base/40 transition-all">
  <Calendar size={16} className="text-[#F5F2ED]/30 group-hover/link:text-accent-base" />
  </div>
  <span className="text-[14px] text-[#F5F2ED]/60 group-hover/link:text-[#F5F2ED] transition-colors">Schedule Call</span>
  </div>
  <ArrowUpRight size={14} className="text-[#F5F2ED]/10 group-hover/link:text-accent-base" />
  </a>
  </div>
  </div>
  </ScrollReveal>

  <ScrollReveal delay={0.4}>
  <div className="p-10 bg-[#F5F2ED]/[0.01] border border-[#F5F2ED]/[0.05] rounded-[32px] flex flex-col gap-6">
  <div className="flex flex-col gap-1">
  <span className="text-[10px] font-mono text-[#F5F2ED]/20 uppercase tracking-[0.3em]">Studio_Presence</span>
  <h4 className="text-xl font-semibold text-[#F5F2ED] uppercase tracking-tighter">Brussels, BE</h4>
  </div>
  <div className="flex flex-col gap-3">
  <div className="flex items-center gap-4 text-[#F5F2ED]/40">
  <MapPin size={14} />
  <span className="text-[13px]">Rue de la Régence, 1000 Brussels</span>
  </div>
  <div className="flex items-center gap-4 text-[#F5F2ED]/40">
  <Globe size={14} />
  <span className="text-[13px]">Global Operations Active</span>
  </div>
  </div>
  <div className="mt-4 pt-6 border-t border-[#F5F2ED]/[0.05]">
  <div className="flex gap-2">
  {[1, 2, 3, 4, 5].map(i => (
  <div key={i} className="w-2 h-[2px] bg-accent-base/20" />
  ))}
  </div>
  </div>
  </div>
  </ScrollReveal>
  </div>
  </div>
  </Container>
  </section>

  {/* ═══════════════ FAQ SECTION ═══════════════ */}
  <section className="py-32 border-t border-[#F5F2ED]/[0.05]">
  <Container className="max-w-4xl">
  <ScrollReveal>
  <div className="text-center mb-20">
  <span className="text-[10px] font-mono text-accent-base/60 uppercase tracking-[0.4em] block mb-4">Inquiry_Support</span>
  <h2 className="text-4xl md:text-5xl font-semibold text-[#F5F2ED] tracking-tighter">Frequently Asked</h2>
  </div>
  </ScrollReveal>

  <ScrollReveal delay={0.2}>
  <div className="bg-[#F5F2ED]/[0.01] border border-[#F5F2ED]/[0.05] rounded-[40px] p-8 md:p-12 backdrop-blur-[8px]">
  <FAQAccordion items={FAQ_ITEMS} />
  </div>
  </ScrollReveal>
  </Container>
  </section>

  {/* ═══════════════ CLOSING ═══════════════ */}
  <section className="py-32 text-center">
  <Container>
  <ScrollReveal>
  <span className="text-5xl md:text-7xl font-bold text-[#F5F2ED]/10 tracking-tighter hover:text-accent-base/40 transition-all duration-1000 cursor-default select-none">
  IMAGINTA.
  </span>
  <p className="mt-8 text-[14px] italic text-[#F5F2ED]/20 font-serif">
  Every great partnership starts with a conversation.
  </p>
  </ScrollReveal>
  </Container>
  </section>
  </main>
 </div>
 );
}
