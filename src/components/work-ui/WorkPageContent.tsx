'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Dumbbell, UtensilsCrossed, Cloud, ShoppingBag, Building2, Brain, Layers, Car, Sparkles, Flame } from 'lucide-react';
import { Container, Meta, Button, GlassPane } from '@/components/ui';
import { ScaleReveal } from '@/components/motion/ScaleReveal';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { FadeUp } from '@/components/motion/FadeUp';
import { EASING } from '@/lib/constants';
import { FilterBar } from './FilterBar';
import { UseCaseCard } from './UseCaseCard';
import type { UseCaseData } from './UseCaseCard';

// ---------------------------------------------------------------------------
// USE CASE DATA
// ---------------------------------------------------------------------------

const USE_CASES: UseCaseData[] = [
    {
        slug: 'fitness-brand-launch',
        filterKey: 'launching-new',
        industry: 'Fitness & Wellness',
        icon: Dumbbell,
        timeframe: '10 weeks',
        headline: 'A gym wanted to charge premium prices but looked like every other gym.',
        situation:
            'They offered a luxury training experience — private sessions, world-class coaches, top-tier equipment. But their brand was a stock-photo logo, a free WordPress theme, and a color palette that screamed "budget." Premium clients were choosing competitors who simply looked the part.',
        approach: [
            {
                name: 'Brand Identity',
                description:
                    'Built a premium visual identity from scratch — logo system, type hierarchy, and a color palette that communicated exclusivity without pretension. Every touchpoint was designed to justify the price tag.',
            },
            {
                name: 'Web Design',
                description:
                    'Designed a conversion-focused website with editorial photography direction and clear membership tiers. The experience felt aspirational from the first scroll.',
            },
            {
                name: 'Content Strategy',
                description:
                    'Developed messaging that spoke to high-earning professionals who value their health. Shifted the narrative from "affordable fitness" to "invest in yourself."',
            },
        ],
        outcomes: [
            { value: '+140%', label: 'Premium memberships', detail: 'Within 6 months of launch' },
            { value: '3.2\u00d7', label: 'Perceived brand value', detail: 'Post-rebrand market survey' },
            { value: '\u201335%', label: 'Acquisition cost', detail: 'Qualified leads converted faster' },
        ],
        quote: 'People used to ask about discounts. Now they ask about the waitlist.',
        disciplines: ['Brand Identity', 'Web Design', 'Content Strategy', 'Photography Direction'],
    },
    {
        slug: 'artisan-pizza',
        filterKey: 'fixing-broken',
        industry: 'Hospitality & Food',
        icon: Flame,
        timeframe: '11 weeks',
        headline: 'The best pizza in Brussels, known only to the 40 people who could fit inside.',
        situation:
            'Neapolitan-trained pizzaiolo, 72-hour fermented dough, imported ingredients, fully booked every night by word of mouth — but no website, no online ordering, no catering pipeline, and a brand that competed on price with \u20ac9 takeaway chains.',
        approach: [
            {
                name: 'Brand Identity',
                description:
                    'Built a visual identity that honours Neapolitan tradition without the clich\u00e9s — custom hand-drawn wordmark, oven-inspired colour palette, still-life photography direction.',
            },
            {
                name: 'Product Design',
                description:
                    'Designed an ordering platform with menu micro-stories, a corporate catering flow with headcount calculators, and a reservation system — tested with 10 users before development.',
            },
            {
                name: 'Development',
                description:
                    'Built in Next.js with kitchen display integration, real-time order tracking, mobile PWA, automated loyalty system, and a CMS for menu management.',
            },
        ],
        outcomes: [
            { value: '+220%', label: 'Monthly Revenue', detail: 'Within 4 months' },
            { value: '\u20ac4,200', label: 'Avg. Catering Contract', detail: 'New revenue stream' },
            { value: '+22%', label: 'Avg. Order Value', detail: 'Online vs. phone' },
        ],
        quote: "My biggest problem now is whether to open a second location. That's a problem I never imagined having.",
        disciplines: ['Brand Identity', 'Product Design', 'Development'],
    },
    {
        slug: 'aura-automotive',
        filterKey: 'scaling-operations',
        industry: 'Automotive & Luxury Services',
        icon: Car,
        timeframe: '8 weeks',
        headline: "A master detailer's work spoke for itself — but his digital presence didn't say a word.",
        situation:
            "World-class ceramic coatings, PPF, and precision repair — booked by phone call, tracked by nothing, documented on the owner's camera roll. Clients spending €3,000+ expected a luxury digital experience to match.",
        approach: [
            {
                name: 'Brand Identity',
                description:
                    'Built a restrained luxury visual system — deep blacks, warm metallics, clean typography — that mirrors the precision of the craftsmanship itself.',
            },
            {
                name: 'Product Design',
                description:
                    'Designed a complete digital product: booking with transparent pricing, real-time service tracker, client portal with before-and-after galleries, and maintenance schedules.',
            },
        ],
        outcomes: [
            { value: '62', label: 'Screens Designed', detail: 'Full-fidelity, every state' },
            { value: '4.7/5', label: 'Usability Score', detail: 'Tested with real clients' },
            { value: '38', label: 'Components', detail: 'Production-ready system' },
        ],
        quote: "They gave me something I didn't know I needed — a digital experience that feels like Aura.",
        disciplines: ['Product Design', 'Brand Identity'],
    },
    {
        slug: 'ellecanta-beauty',
        filterKey: 'launching-new',
        industry: 'Beauty & Skincare',
        icon: Sparkles,
        timeframe: '12 weeks',
        headline: 'A skincare line with clinical-grade formulations and a Canva logo.',
        situation:
            'Three years of R&D, dermatologist-tested formulations, traceable Belgian ingredients — and a brand identity made in Canva, product photos shot on a kitchen counter, and 40 Instagram followers. In a market where perception is everything, they were invisible.',
        approach: [
            {
                name: 'Brand Identity',
                description:
                    'Built a complete brand system — from positioning and visual identity through a 14-SKU packaging range in frosted glass with debossed caps and colour-coded navigation.',
            },
            {
                name: 'AI Integration',
                description:
                    'Created a custom AI content pipeline producing 200+ on-brand visual assets in 4 weeks — product shots, textures, lifestyle imagery — with a reusable prompt system for ongoing content.',
            },
            {
                name: 'Product Design',
                description:
                    'Designed the e-commerce experience with product micro-stories, a personalised skin quiz, and a checkout flow built for first-time premium skincare buyers.',
            },
        ],
        outcomes: [
            { label: 'Social Engagement', value: '+280%', detail: 'Launch quarter' },
            { label: 'Shelf Impact Score', value: '94/100', detail: 'Consumer testing' },
            { label: 'Visual Assets', value: '200+', detail: 'AI-assisted pipeline' },
        ],
        quote: "Our first retail buyer said the packaging alone closed the deal before she even tested the product.",
        disciplines: ['Brand Identity', 'Product Design', 'AI Integration'],
    },
    {
        slug: 'corporate-wellness-iraq',
        filterKey: 'launching-new',
        industry: 'B2B Services',
        icon: Building2,
        timeframe: '12 weeks',
        headline: 'A wellness startup needed to launch in a market with zero digital infrastructure.',
        situation:
            "The concept was simple: healthy office snack subscriptions for corporate clients in Iraq. The execution was anything but. No existing delivery logistics, no digital payment culture, a bilingual audience expecting Arabic-first design, and zero brand awareness in a market that doesn't Google its suppliers.",
        approach: [
            {
                name: 'Brand Identity',
                description:
                    'Created a bilingual brand system that worked in both Arabic and English — RTL-native logo, dual-script typography, and visual language that resonated across both cultures.',
            },
            {
                name: 'Development',
                description:
                    'Built a bilingual RTL platform with custom ordering flows, corporate account management, and a delivery scheduling system designed for the local logistics reality.',
            },
            {
                name: 'Market Strategy',
                description:
                    'Designed a go-to-market playbook focused on direct B2B outreach rather than digital acquisition — because in this market, relationships close deals, not landing pages.',
            },
        ],
        outcomes: [
            { value: '35+', label: 'Corporate clients', detail: 'Signed within 6 months' },
            { value: '2.4\u00d7', label: 'Monthly reorders', detail: 'Average client retention metric' },
            { value: '2', label: 'Languages supported', detail: 'Arabic-first, English secondary' },
        ],
        quote: "They understood that building for Iraq isn't just translation — it's a completely different design language.",
        disciplines: ['Brand Identity', 'Development', 'Market Strategy', 'RTL Design'],
    },
    {
        slug: 'hotel-booking-conversion',
        filterKey: 'fixing-broken',
        industry: 'Hospitality',
        icon: UtensilsCrossed,
        timeframe: '7 weeks',
        headline: 'A boutique hotel was getting traffic but nobody was completing a booking.',
        situation:
            "The property was stunning — boutique, character-rich, Instagram-worthy. The website was getting solid traffic from travel blogs and social media. But only 2.1% of visitors completed a booking, less than half the industry average. The problem wasn't awareness — it was the seven-step booking form, hidden pricing, and a mobile experience that required pinch-zooming to read room descriptions.",
        approach: [
            {
                name: 'UX Research',
                description:
                    'Ran session recordings and heatmap analysis on the existing site. Identified the three exact points where visitors abandoned — pricing page, room selection, and the payment form.',
            },
            {
                name: 'Conversion Design',
                description:
                    'Rebuilt the booking flow from seven steps to three. Made pricing transparent upfront, added real-time availability, and designed room cards that sold the experience before asking for the credit card.',
            },
            {
                name: 'Development',
                description:
                    'Implemented the new flow with a mobile-first approach. Integrated directly with their booking engine API to eliminate redirect friction and keep guests on-site throughout.',
            },
        ],
        outcomes: [
            { value: '+52%', label: 'Booking conversion', detail: 'From 2.1% to 4.8% in 90 days' },
            { value: '4.2 min', label: 'Avg session duration', detail: 'Up from 1.8 minutes' },
            { value: '+38%', label: 'Mobile bookings', detail: 'Previously near-zero on phones' },
        ],
        quote: "Our rooms were always full on weekends from walk-ins. Now they're booked out two weeks ahead.",
        disciplines: ['UX Research', 'Conversion Design', 'Development', 'Analytics'],
    },
    {
        slug: 'ai-fitness-intelligence',
        filterKey: 'scaling-operations',
        industry: 'Fitness & Technology',
        icon: Brain,
        timeframe: '14 weeks',
        headline: "A fitness platform wanted AI-powered workouts but didn't know where to start.",
        situation:
            "The platform had 12,000 active users and a library of 800+ exercises. But every workout was manually programmed by trainers who were spending more time in spreadsheets than with clients. They wanted \"AI personalization\" but had no ML team, no data pipeline, and a genuine fear of shipping something that felt robotic or unsafe.",
        approach: [
            {
                name: 'AI Integration',
                description:
                    'Designed and implemented a recommendation engine that combined user history, fitness goals, and exercise science constraints. The AI suggests — trainers approve, keeping the human in the loop.',
            },
            {
                name: 'Product Design',
                description:
                    'Redesigned the workout experience to make AI feel helpful, not creepy. Users see why exercises are recommended, can swap alternatives, and always feel in control of their program.',
            },
            {
                name: 'Development',
                description:
                    'Built the ML pipeline, API layer, and frontend integration. Designed for graceful degradation — if AI confidence is low, it defers to trainer-curated defaults.',
            },
        ],
        outcomes: [
            { value: '4.8/5', label: 'User satisfaction', detail: 'Post-AI feature launch survey' },
            { value: '60%', label: 'Trainer time saved', detail: 'On workout programming tasks' },
            { value: '3.1\u00d7', label: 'Workout completion', detail: 'AI-matched vs generic programs' },
        ],
        quote: "It doesn't feel like AI — it feels like having a really attentive coach.",
        disciplines: ['AI Integration', 'Product Design', 'Development', 'Data Engineering'],
    },
    {
        slug: 'agency-own-platform',
        filterKey: 'fixing-broken',
        industry: 'Digital Agency',
        icon: Layers,
        timeframe: 'Ongoing',
        headline: 'We needed to prove our methodology works — so we used it on ourselves.',
        situation:
            "Most agencies have cobbler's children syndrome — they build beautiful things for clients while their own website collects dust. We decided to make Imaginta's platform the ultimate stress test. Same timeline pressure. Same design system rigor. Same quality bar. If our process couldn't survive building our own site, it couldn't survive anything.",
        approach: [
            {
                name: 'Design System',
                description:
                    'Built a 42-component system with glassmorphism primitives, motion tokens, and accessibility baked in. Every component was tested across viewports, color modes, and assistive technologies.',
            },
            {
                name: 'Development',
                description:
                    'Shipped the entire site in 3 weeks using AI-assisted development workflows. Next.js 14, server components, Framer Motion choreography — all production-grade from commit one.',
            },
            {
                name: 'Brand Identity',
                description:
                    'Evolved the Imaginta brand to reflect maturity — warm premium aesthetic, confident restraint, and a visual language that lets the work speak without shouting.',
            },
        ],
        outcomes: [
            { value: '97', label: 'Lighthouse score', detail: 'Performance + accessibility' },
            { value: '42', label: 'Component library', detail: 'Reusable design system pieces' },
            { value: '3 wks', label: 'Full site shipped', detail: 'AI-assisted development pipeline' },
        ],
        quote: "If you want to know how we work, you're looking at it.",
        disciplines: ['Design System', 'Development', 'Brand Identity', 'AI Workflow'],
    },
];

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------

export default function WorkPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const prefersReducedMotion = useReducedMotion();

    const activeFilter = searchParams.get('challenge') || 'all';
    const filteredCases =
        activeFilter === 'all'
            ? USE_CASES
            : USE_CASES.filter((uc) => uc.filterKey === activeFilter);

    const handleFilterChange = (key: string) => {
        if (key === 'all') {
            router.push('/work', { scroll: false });
        } else {
            router.push(`/work?challenge=${key}`, { scroll: false });
        }
    };

    // Parallax for background "CASES" text
    const { scrollY } = useScroll();
    const casesY = useTransform(scrollY, [0, 3000], [0, 180]);

    return (
        <main id="main" className="relative min-h-screen overflow-hidden bg-void">
            {/* ── TOP WARM WASH ── */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] pointer-events-none z-0"
                aria-hidden="true"
                style={{
                    background: 'radial-gradient(ellipse at center top, rgba(201,166,107,0.05), transparent 70%)',
                }}
            />

            {/* ── LARGE "CASES" BACKGROUND TEXT ── */}
            <motion.div
                className="hidden lg:block fixed right-[-5%] top-[15%] pointer-events-none z-0 select-none opacity-[0.03]"
                aria-hidden="true"
                style={{ y: prefersReducedMotion ? 0 : casesY }}
            >
                <span
                    className="font-sans font-bold tracking-[-0.06em] text-accent-base"
                    style={{ fontSize: '20vw', lineHeight: 1 }}
                >
                    CASES
                </span>
            </motion.div>

            {/* ══════════════════════════════════════════════════════════════
                PAGE HEADER
            ══════════════════════════════════════════════════════════════ */}
            <Container className="pt-[140px] pb-[80px] relative z-10">
                <ScaleReveal>
                    <Meta className="!text-accent-base">USE CASES</Meta>

                    <h1 className="mt-[24px] font-sans font-bold tracking-[-0.03em] text-white" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', lineHeight: 1.05 }}>
                        What happens when the
                        <br />
                        <span className="italic text-white/50">right partner shows up.</span>
                    </h1>

                    <p className="mt-[24px] font-sans text-[18px] leading-[1.6] text-white/40 max-w-[520px]">
                        These aren&apos;t portfolio pieces. They&apos;re business problems we&apos;ve
                        solved — the kind you might be facing right now.
                    </p>

                    <div className="mt-[48px]">
                        <FilterBar activeFilter={activeFilter} onFilterChange={handleFilterChange} />
                    </div>
                </ScaleReveal>
            </Container>

            {/* ══════════════════════════════════════════════════════════════
                USE CASE FEED
            ══════════════════════════════════════════════════════════════ */}
            <Container className="pb-[120px] relative z-10">
                <div className="flex flex-col gap-[64px]">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {filteredCases.map((uc, i) => (
                            <motion.div
                                key={uc.slug}
                                layout={!prefersReducedMotion}
                                initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98, y: -20 }}
                                transition={
                                    prefersReducedMotion
                                        ? { duration: 0 }
                                        : {
                                              layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                                              opacity: { duration: 0.4 },
                                              scale: { duration: 0.4 },
                                              y: { duration: 0.4 }
                                          }
                                }
                                className="relative"
                            >
                                {/* TODO: Build individual case study pages for all remaining slugs */}
                                <Link href={`/work/${uc.slug}`} className="block">
                                    <ScrollReveal>
                                        <UseCaseCard useCase={uc} />
                                    </ScrollReveal>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </Container>

            {/* ══════════════════════════════════════════════════════════════
                CLOSING CTA
            ══════════════════════════════════════════════════════════════ */}
            <Container className="pb-[120px] relative z-10">
                <ScrollReveal>
                    <GlassPane
                        hover
                        interactive
                        className="p-12 md:p-24 text-center overflow-hidden relative"
                    >
                        {/* Subtle glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none" 
                             style={{ background: 'radial-gradient(circle at center, rgba(201,166,107,0.2), transparent)' }} />
                        
                        <h2 className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-white relative z-10">
                            Recognise your situation?
                        </h2>
                        <p className="mt-6 text-[18px] text-white/40 max-w-[480px] mx-auto relative z-10">
                            Every success story above started with a single conversation. 
                            Let&apos;s talk about yours.
                        </p>
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <Button href="/contact" className="w-full sm:w-auto">Describe Your Challenge</Button>
                            <Button variant="ghost" href="/process" className="w-full sm:w-auto">
                                Explore Our Process &rarr;
                            </Button>
                        </div>
                    </GlassPane>
                </ScrollReveal>

                <div className="mt-24 text-center">
                    <Meta className="opacity-20">SHOWING {filteredCases.length} OF {USE_CASES.length} SCENARIOS</Meta>
                </div>
            </Container>
        </main>
    );
}
