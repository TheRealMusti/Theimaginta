'use client';

import React from 'react';
import { cn } from '@/lib/utils';

const PARTNERS = [
  { name: 'Grok AI', color: '#00F2FF', type: 'intelligence' },
  { name: 'Claude AI', color: '#D97706', type: 'intelligence' },
  { name: 'Google AI', color: '#4285F4', type: 'intelligence' },
  { name: 'Open Ai', color: '#10A37F', type: 'intelligence' },
  { name: 'AWS', color: '#FF9900', type: 'operations' },
  { name: 'Azure', color: '#00A4EF', type: 'operations' },
  { name: 'Zapier', color: '#FF4A00', type: 'operations' },
  { name: 'N8N', color: '#FF6C37', type: 'operations' },
  { name: 'SAP', color: '#008FD3', type: 'operations' },
  { name: 'Odoo', color: '#875A7B', type: 'operations' },
  { name: 'Shopify', color: '#95BF47', type: 'operations' },
  { name: 'WordPress', color: '#21759B', type: 'operations' },
  { name: 'Wix', color: '#F5F2ED', type: 'operations' },
  { name: 'Elementor', color: '#92003B', type: 'operations' },
  { name: 'Fiverr', color: '#1DBF73', type: 'operations' },
  { name: 'Upwork', color: '#6FDA44', type: 'operations' }
];

export function EcosystemMarquee() {
  // Large enough set for a continuous loop
  const items = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="relative w-full min-h-[30vh] py-20 bg-[#060508] flex flex-col justify-center overflow-hidden border-y border-[#F5F2ED]/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Compact Vertical Title */}
        <div className="flex-shrink-0 flex flex-col gap-1 border-l border-accent-base/40 pl-4 py-1">
          <span className="text-[10px] font-mono text-accent-base tracking-[0.3em] uppercase">Ecosystem</span>
          <span className="text-[13px] font-bold text-[#F5F2ED] tracking-tighter uppercase whitespace-nowrap">Strategic Infrastructure</span>
        </div>

        {/* The Ribbon */}
        <div 
          className="relative flex-grow h-14"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex overflow-hidden group h-full">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] items-center">
              {items.map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="relative flex-shrink-0 mx-4 group/pill cursor-crosshair"
                >
                  <div className={cn(
                    "px-6 py-2.5 rounded-full bg-[#F5F2ED]/[0.01] backdrop-blur-[8px] border border-[#F5F2ED]/[0.06] transition-all duration-500",
                    "group-hover/pill:bg-[#F5F2ED]/[0.03] group-hover/pill:border-[#F5F2ED]/[0.1] group-hover/pill:scale-[1.05]",
                    partner.type === 'intelligence' && "border-b-prestige/20 shadow-[0_4px_12px_rgba(196,163,110,0.05)]"
                  )}>
                    <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#F5F2ED]/30 transition-colors duration-500 group-hover/pill:text-[#F5F2ED]">
                      {partner.name}
                    </span>
                  </div>
                  
                  {/* Subsurface Brand Glow (Compact) */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover/pill:opacity-10 transition-opacity duration-700 pointer-events-none blur-xl"
                    style={{ background: partner.color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
