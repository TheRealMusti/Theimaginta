'use client';
import React, { useRef, useEffect } from 'react';
import { Container, Meta, GlassPane } from '@/components/ui';
import { ScaleReveal, FadeUp } from '@/components/motion';
import { useInView, animate } from 'framer-motion';
import Link from 'next/link';

function AnimatedNumber({ value }: { value: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, amount: 0.5 });
    
    useEffect(() => {
        if (!inView || !nodeRef.current) return;
        const controls = animate(0, value, {
            duration: 1.2,
            ease: "easeOut",
            onUpdate: (latest) => {
                if (nodeRef.current) {
                    nodeRef.current.textContent = Math.round(latest).toString();
                }
            }
        });
        return () => controls.stop();
    }, [inView, value]);

    return <span ref={nodeRef}>0</span>;
}

const METRICS = [
    { label: "CLIENT RETENTION", number: 96, suffix: "%", context: "of clients return for follow-up work" },
    { label: "AVG. ENGAGEMENT", number: 14, suffix: "mo", context: "average client relationship length" },
    { label: "DISCIPLINES", number: 4, suffix: "in-house", context: "brand, product, code, AI — one studio" },
    { label: "OVERHEAD", number: 0, suffix: "layers", context: "direct access to the people doing the work" }
];

export function AboutMetrics() {
    return (
        <section className="w-full py-[80px] relative z-10">
            {/* Ambient Warm Glow */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none mix-blend-screen"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(201,166,107,0.03), transparent 70%)'
                }}
                aria-hidden="true"
            />

            <Container>
                <ScaleReveal>
                    <GlassPane 
                        padding="48px 40px" 
                        className="w-full bg-accent-base/[0.03] border-accent-base/[0.1] shadow-[inset_0_1px_0_rgba(201,166,107,0.08)]"
                    >
                        <div className="flex flex-col md:flex-row gap-[40px] md:gap-0 divide-y md:divide-y-0 md:divide-x divide-accent-base/[0.1]">
                            {METRICS.map((metric, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center text-center px-[20px] pt-[20px] md:pt-0 first:pt-0">
                                    <Meta className="mb-[16px] text-accent-base">{metric.label}</Meta>
                                    <div className="flex items-baseline gap-[4px] mb-[12px]">
                                        <span className="font-sans text-[42px] font-semibold tracking-[-0.02em] text-white leading-none">
                                            <AnimatedNumber value={metric.number} />
                                        </span>
                                        <span className="font-sans text-[20px] font-medium text-white/[0.6]">{metric.suffix}</span>
                                    </div>
                                    <span className="font-sans text-[12px] font-medium tracking-[0.16em] uppercase text-white/[0.3] max-w-[180px]">
                                        {metric.context}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </GlassPane>
                </ScaleReveal>

                <FadeUp delay={0.3} className="mt-[24px] flex items-center justify-center gap-[12px]">
                    <Meta className="text-white/[0.4]">Numbers are nice. Work is better.</Meta>
                    <Link 
                        href="/work" 
                        className="font-sans text-[14px] font-medium text-accent-base group flex items-center gap-[4px] transition-colors hover:text-white"
                        data-cursor="VIEW · WORK"
                    >
                        See our work 
                        <span className="transition-transform duration-300 group-hover:translate-x-[4px]">→</span>
                    </Link>
                </FadeUp>
            </Container>
        </section>
    );
}
