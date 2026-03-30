'use client';
import React, { useState } from 'react';
import { Container, Meta } from '@/components/ui';
import { FadeUp } from '@/components/motion';

const PHASES = [
    { num: '01', name: 'Intro', duration: '1–2 convos', width: '10%' },
    { num: '02', name: 'Discovery', duration: '1–2 weeks', width: '15%' },
    { num: '03', name: 'Strategy', duration: '2–4 weeks', width: '25%' },
    { num: '04', name: 'Build', duration: '4–12 weeks', width: '25%' },
    { num: '05', name: 'Launch', duration: '1 week', width: '10%' },
    { num: '06', name: 'Evolve', duration: 'Ongoing', width: '15%' },
];

export function TimelineSummary() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-[120px] relative z-20 bg-void">
            <Container>
                <div className="flex flex-col items-center text-center mb-[64px]">
                    <FadeUp>
                        <h2 className="font-sans text-[32px] md:text-[40px] font-bold tracking-[-0.03em] text-white">The whole picture.</h2>
                        <p className="font-sans text-[16px] font-normal text-white/[0.72] mt-[16px] max-w-[400px]">
                            A transparent view of how long it takes to go from first contact to launch.
                        </p>
                    </FadeUp>
                </div>

                {/* Desktop: Horizontal Bar */}
                <FadeUp delay={0.2} className="hidden md:flex w-full h-[80px] rounded-pill bg-white/[0.02] border border-white/[0.04] p-[4px]">
                    {PHASES.map((phase, i) => {
                        const isHovered = hoveredIndex === i;
                        return (
                            <div 
                                key={i}
                                className={`relative h-full rounded-pill transition-all duration-300 flex items-center justify-center cursor-default ${isHovered ? 'bg-accent-base/[0.1] border border-accent-base/[0.2]' : 'hover:bg-white/[0.04]'}`}
                                style={{ width: phase.width }}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={`flex flex-col items-center transition-opacity duration-300 absolute ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    <Meta className="text-accent-base mb-[4px] !text-[9px]">{phase.duration}</Meta>
                                    <span className="font-sans text-[12px] font-medium text-white whitespace-nowrap">{phase.name}</span>
                                </div>
                                <div className={`transition-opacity duration-300 ${!isHovered ? 'opacity-100' : 'opacity-0'}`}>
                                    <Meta className="text-white/[0.3]">{phase.num}</Meta>
                                </div>
                            </div>
                        );
                    })}
                </FadeUp>

                {/* Mobile: Vertical List */}
                <FadeUp delay={0.2} className="flex flex-col gap-[8px] md:hidden w-full max-w-[400px] mx-auto">
                    {PHASES.map((phase, i) => (
                        <div key={i} className="w-full p-[20px] rounded-[12px] bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
                            <div className="flex items-center gap-[16px]">
                                <Meta className="text-white/[0.3]">{phase.num}</Meta>
                                <span className="font-sans text-[15px] font-medium text-white">{phase.name}</span>
                            </div>
                            <Meta className="text-accent-base !text-[9px]">{phase.duration}</Meta>
                        </div>
                    ))}
                </FadeUp>
            </Container>
        </section>
    );
}
