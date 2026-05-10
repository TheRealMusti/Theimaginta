'use client';

import React from 'react';
import { 
  Container, 
  Meta, 
  GrainOverlay,
  GlassPane
} from '@/components/ui';
import { ScrollReveal, FadeUp } from '@/components/motion';
import { ArrowUpRight, BookOpen, Sparkles, Compass, Heart } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

/* ─────────────────────────── Data ─────────────────────────── */

interface Post {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  tag: string;
  icon: any;
  author: string;
}

const FEED_POSTS: Post[] = [
  {
    id: 'INSIGHT.01',
    category: 'TRUST',
    title: 'Design is a promise.',
    excerpt: 'When your website feels stable and polished, customers instinctively believe your service will be too. Polish is the universal language of reliability.',
    tag: 'STRATEGY',
    icon: Heart,
    author: 'Strategic Lead'
  },
  {
    id: 'INSIGHT.02',
    category: 'FOCUS',
    title: 'The power of one thing.',
    excerpt: 'Doing one thing perfectly is better than offering ten things poorly. Focus your digital experience on the one action that actually grows your business.',
    tag: 'GUIDE',
    icon: Compass,
    author: 'Founder Insight'
  },
  {
    id: 'INSIGHT.03',
    category: 'GROWTH',
    title: 'Simplify to scale.',
    excerpt: 'Complexity is the enemy of growth. Remove the noise, shorten the path to purchase, and let your core value shine through the minimalist design.',
    tag: 'TIPS',
    icon: Sparkles,
    author: 'Growth Expert'
  },
  {
    id: 'INSIGHT.04',
    category: 'CRAFT',
    title: 'Build for humans.',
    excerpt: 'Technology is just a tool. Always design for the person on the other side of the screen. Human-centric products build lifelong brand loyalty.',
    tag: 'EDITORIAL',
    icon: BookOpen,
    author: 'Product Head'
  }
];

/* ─────────────────────────── Main Section ─────────────────────────── */

export function Feed() {
  return (
    <section className="relative bg-transparent pt-16 sm:pt-18 md:pt-[88px] lg:pt-28 pb-12 sm:pb-14 md:pb-[72px] lg:pb-24 overflow-hidden">
      <GrainOverlay opacity={0.012} />
      
      <Container className="relative z-10">
        {/* Cinematic Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <ScrollReveal>
            <div className="mb-4 lg:mb-6">
              <Meta className="meta-text meta-amber">Strategic_Insights</Meta>
            </div>
            <h2 className="section-h2 text-[#F5F2ED] uppercase">
              The Founder’s <br />
              <span className="text-prestige/30 font-serif italic lowercase tracking-tight font-normal">Journal.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="max-w-xs">
            <p className="body-text border-l border-prestige/20 pl-8">
              Practical wisdom on building brands, shaping products, and scaling businesses with high-fidelity digital tools.
            </p>
          </ScrollReveal>
        </div>

        {/* Insights Grid */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {FEED_POSTS.map((post, i) => (
            <InsightCard key={post.id} post={post} index={i} />
          ))}
        </ScrollReveal>

        {/* Global Action */}
        <ScrollReveal delay={0.4} className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-prestige tracking-[0.3em] font-bold uppercase">Expert Guidance</span>
            <span className="text-[14px] text-[#F5F2ED]/30 uppercase tracking-tight font-bold">Updated Weekly // New Strategies Available</span>
          </div>

          <GlassPane 
            plane={3} 
            noBlur={true} 
            padding="0"
            radius={999}
            className="group"
          >
            <Link 
              href="/intelligence" 
              className="flex items-center gap-8 px-12 py-5 transition-all duration-700"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#F5F2ED]/60 group-hover:text-prestige">READ_ALL_INSIGHTS</span>
              <ArrowUpRight size={18} className="text-prestige group-hover:rotate-45 transition-transform" />
            </Link>
          </GlassPane>
        </ScrollReveal>
      </Container>
    </section>
  );
}

/* ─────────────────────────── Sub-Components ─────────────────────────── */

function InsightCard({ post, index }: { post: Post; index: number }) {
  const Icon = post.icon;

  return (
    <FadeUp delay={0.1 + index * 0.1} className="h-full">
      <GlassPane 
        plane={2}
        hover={true}
        radius={24}
        className="h-full flex flex-col group overflow-hidden"
      >
        <div className="p-[24px_20px] md:p-[28px_24px] lg:p-[32px_28px] flex flex-col h-full relative z-10">
          {/* Card Header */}
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div className="w-12 h-12 rounded-2xl bg-prestige/[0.03] border border-prestige/10 flex items-center justify-center group-hover:bg-prestige transition-all duration-700">
              <Icon size={20} className="text-prestige group-hover:text-black transition-colors" />
            </div>
            <span className="text-[9px] font-mono tracking-[0.3em] text-prestige/30 font-bold uppercase">
              {post.id}
            </span>
          </div>

          {/* Card Content */}
          <div className="mb-4 md:mb-6">
            <span className="meta-text meta-amber mb-4 block">
              {post.category} // {post.tag}
            </span>
            <h3 className="card-h3 text-[#F5F2ED] group-hover:text-prestige transition-colors duration-700">
              {post.title}
            </h3>
          </div>

          <p className="card-body mb-6 md:mb-8 group-hover:text-[#F5F2ED]/70 transition-colors duration-700">
            {post.excerpt}
          </p>

          {/* Card Footer */}
          <div className="mt-auto pt-6 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono text-prestige/20 tracking-widest uppercase mb-1">Author</span>
              <span className="text-[10px] font-bold text-[#F5F2ED]/30 uppercase tracking-tight group-hover:text-[#F5F2ED]/60">{post.author}</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/[0.05] flex items-center justify-center group-hover:border-prestige/40 group-hover:bg-prestige transition-all duration-700">
              <ArrowUpRight size={16} className="text-prestige group-hover:text-black" />
            </div>
          </div>
        </div>
      </GlassPane>
    </FadeUp>
  );
}
