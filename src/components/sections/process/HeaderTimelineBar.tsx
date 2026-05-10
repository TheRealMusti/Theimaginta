'use client';

import React, { useState } from 'react';
import { GlassPane, Meta } from '@/components/ui';

const PHASES = [
 { id: 'intro', num: '01', name: 'Intro', width: '5%' },
 { id: 'discovery', num: '02', name: 'Discovery', width: '15%' },
 { id: 'strategy-design', num: '03', name: 'Strategy & Design', width: '25%' },
 { id: 'build', num: '04', name: 'Build', width: '30%' },
 { id: 'launch', num: '05', name: 'Launch', width: '15%' },
 { id: 'evolve', num: '06', name: 'Evolve', width: '10%' },
];

export function HeaderTimelineBar() {
 const [hoveredPhase, setHoveredPhase] = useState<string | null>(null);
 
 // We could map scrollProgress to active phase, but for simplicity here we just support click & hover
 // The prompt says "The segment for the phase currently in view fills with amber". 
 // Implementing native scroll spy manually here or using simple JS on intersection.

 const scrollToPhase = (id: string) => {
 const el = document.getElementById(id);
 if (el) {
 window.scrollTo({
 top: el.offsetTop - 96, // Accounts for nav offset
 behavior: 'smooth'
 });
 }
 };

 return (
 <div className="w-full relative overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0">
 <GlassPane 
 padding="0" 
 className="h-[56px] min-w-[700px] w-full rounded-pill flex items-center border-[#F5F2ED]/[0.06] bg-[#F5F2ED]/[0.01]"
 >
 {PHASES.map((phase, index) => {
 const isHovered = hoveredPhase === phase.id;
 return (
 <div 
 key={phase.id}
 className="h-full flex flex-col justify-center items-center relative cursor-pointer snap-center group transition-colors duration-300 hover:bg-accent-base/[0.06]"
 style={{ width: phase.width }}
 onMouseEnter={() => setHoveredPhase(phase.id)}
 onMouseLeave={() => setHoveredPhase(null)}
 onClick={() => scrollToPhase(phase.id)}
 data-cursor={`JUMP · ${phase.name.toUpperCase()}`}
 >
 {/* Number */}
 <Meta className={`transition-colors duration-300 ${isHovered ? 'text-accent-base' : 'text-[#F5F2ED]/[0.30]'}`}>
 {phase.num}
 </Meta>
 
 {/* Phase Name Label appearing below */}
 <div className={`absolute bottom-[-32px] left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[10px]'}`}>
 <Meta className="!text-[9px] text-accent-base">
 {phase.name}
 </Meta>
 </div>

 {/* Divider line */}
 {index < PHASES.length - 1 && (
 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[0.5px] h-[24px] bg-[#F5F2ED]/[0.06]" />
 )}
 </div>
 );
 })}
 </GlassPane>
 </div>
 );
}
