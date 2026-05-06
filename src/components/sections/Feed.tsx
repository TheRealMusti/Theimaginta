'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Meta } from '@/components/ui';
import { EASING } from '@/lib/constants';
import { ArrowUpRight, Radio, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

interface Post {
    id: string;
    time: string;
    date: string;
    category: string;
    status: string;
    title: string;
    excerpt: string;
    tag: string;
}

const FEED_POSTS: Post[] = [
    {
        id: '01',
        time: '14:20 UTC',
        date: 'MAY 05',
        category: 'INTELLIGENCE',
        status: 'VERIFIED',
        title: 'Synthesizing Efficiency: The Autonomous Founder',
        excerpt: 'How AI-driven workflows are reclaiming 20+ hours weekly for mid-size founders through autonomous delegation systems.',
        tag: 'TRENDING'
    },
    {
        id: '02',
        time: '09:45 UTC',
        date: 'MAY 04',
        category: 'ARCHITECTURE',
        status: 'ENCRYPTED',
        title: 'The Quiet Authority in Brand Systems',
        excerpt: 'Why minimalist brand architecture outperforms loud marketing in the 2026 digital landscape of hyper-noise.',
        tag: 'LATEST'
    },
    {
        id: '03',
        time: '18:12 UTC',
        date: 'MAY 02',
        category: 'SCALING',
        status: 'STABLE',
        title: 'Signal vs Noise: Strategic Growth Roadmap',
        excerpt: 'Filtering technical debt: A guide to sustainable scaling for long-term SME growth and stability.',
        tag: 'ARCHIVE'
    },
    {
        id: '04',
        time: '11:05 UTC',
        date: 'APR 30',
        category: 'IDENTITY',
        status: 'VERIFIED',
        title: 'Neural Brand Pipelines: The New Standard',
        excerpt: 'Embedding custom AI workflows that solve deep business bottlenecks and drive competitive efficiency.',
        tag: 'FEATURED'
    }
];

function WireItem({ post, index }: { post: Post; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
            className="group relative border-b border-white/[0.04] last:border-none cursor-pointer overflow-hidden transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Refractive Glass Sweep */}
            <motion.div 
                animate={{ 
                    x: isHovered ? ['-100%', '200%'] : '-100%',
                    opacity: isHovered ? [0, 0.1, 0] : 0
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white to-transparent -rotate-12 pointer-events-none z-0"
            />

            <div className="flex flex-col md:flex-row items-start md:items-center py-6 md:py-8 gap-6 md:gap-10 relative z-10 px-4 md:px-6 transition-colors duration-500 group-hover:bg-white/[0.01]">
                
                {/* 1. COMPACT INDEX & TIME */}
                <div className="flex items-center gap-6 min-w-[140px]">
                    <span className="text-[10px] font-mono text-white/10 group-hover:text-accent-base transition-colors duration-500 font-bold">
                        {post.id}
                    </span>
                    <div className="flex flex-col">
                        <span className="text-[11px] font-mono text-accent-base font-bold tracking-widest">{post.time}</span>
                        <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] mt-0.5">{post.date}</span>
                    </div>
                </div>

                {/* 2. COMPACT STATUS */}
                <div className="flex items-center gap-4 min-w-[180px]">
                    <div className="relative px-3 py-1 border border-white/5 bg-white/[0.02] rounded-full backdrop-blur-md">
                        <span className="text-[8px] font-mono text-white/50 uppercase tracking-[0.2em] font-medium">{post.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className={`w-1 h-1 rounded-full ${post.status === 'VERIFIED' ? 'bg-emerald-500' : 'bg-accent-base'} animate-pulse`} />
                         <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] font-bold">{post.status}</span>
                    </div>
                </div>

                {/* 3. CONTENT (Clean & Clear) */}
                <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white/50 group-hover:text-white transition-all duration-500 uppercase leading-tight">
                        {post.title}
                    </h3>
                    
                    <motion.div
                        animate={{ 
                            height: isHovered ? 'auto' : 0,
                            opacity: isHovered ? 1 : 0 
                        }}
                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="text-white/30 text-[14px] mt-4 leading-relaxed font-light max-w-2xl">
                            {post.excerpt}
                        </p>
                    </motion.div>
                </div>

                {/* 4. COMPACT ACTION */}
                <div className="flex items-center gap-8 ml-auto">
                    <div className="hidden lg:flex flex-col items-end">
                        <span className="text-[9px] font-bold tracking-[0.4em] text-white/5 uppercase transition-colors group-hover:text-accent-base/40">
                            Impact
                        </span>
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{post.tag}</span>
                    </div>
                    <div className="relative w-10 h-10 rounded-full border border-white/5 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent-base group-hover:scale-105">
                         <ArrowUpRight size={18} className="relative z-10 transition-colors duration-500 group-hover:text-black" />
                         <motion.div 
                            initial={{ y: '100%' }}
                            animate={{ y: isHovered ? '0%' : '100%' }}
                            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                            className="absolute inset-0 bg-accent-base"
                         />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function Feed() {
    return (
        <section className="relative bg-[#030303] flex flex-col py-20 overflow-hidden min-h-[80vh]">
            {/* Background Architecture */}
            <div className="absolute inset-0 pointer-events-none opacity-50">
                <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.01]" />
                <div className="absolute top-0 left-3/4 w-px h-full bg-white/[0.01]" />
            </div>

            <Container className="relative z-10">
                {/* Compact Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <Zap size={14} className="text-accent-base" />
                            <Meta className="m-0 text-accent-base tracking-[0.5em] uppercase font-bold text-[10px]">Intelligence_Wire.v2</Meta>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white leading-none uppercase">
                            The News <span className="text-accent-base/20 italic font-serif lowercase">feed.</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-8 bg-white/[0.02] border border-white/5 px-6 py-4 rounded-xl backdrop-blur-xl">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Status</span>
                            <span className="text-[11px] font-bold text-emerald-500 uppercase">Synchronized</span>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Latency</span>
                            <span className="text-[11px] font-bold text-white uppercase">12ms</span>
                        </div>
                    </div>
                </div>

                {/* Compact List */}
                <div className="flex flex-col border-t border-white/[0.08]">
                    {FEED_POSTS.map((post, i) => (
                        <WireItem key={post.id} post={post} index={i} />
                    ))}
                </div>

                {/* Compact Action */}
                <div className="mt-12 flex justify-center">
                    <Link 
                        href="/intelligence" 
                        className="group flex items-center gap-4 px-8 py-3 border border-white/10 rounded-full hover:border-accent-base transition-all duration-500"
                    >
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 group-hover:text-white">Full Archive</span>
                        <ArrowUpRight size={14} className="text-white/20 group-hover:text-accent-base transition-colors" />
                    </Link>
                </div>
            </Container>

            {/* Minimal Footer */}
            <div className="mt-auto py-8 border-t border-white/[0.01] flex justify-between px-12 opacity-10 pointer-events-none">
                <span className="text-[9px] font-mono tracking-[0.6em] uppercase">Imaginta_Neural_System</span>
                <span className="text-[9px] font-mono tracking-[0.6em] uppercase">Status: Nominal</span>
            </div>
        </section>
    );
}
