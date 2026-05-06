'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Shield, 
    Lock, 
    EyeOff, 
    ChevronRight,
    Zap,
    Globe
} from 'lucide-react';
import { 
    Container, 
    Meta, 
    SectionAtmosphere 
} from '@/components/ui';
import { ScrollReveal, StaggerItem } from '@/components/motion';
import { cn } from '@/lib/utils';

const SECURITY_FEATURES = [
    {
        id: "ZT",
        title: "Zero-Trust Architecture",
        description: "Every request is verified. End-to-end encryption by default ensures data remains invisible to unauthorized actors.",
        icon: Lock,
        tag: "ENCRYPTION"
    },
    {
        id: "CM",
        title: "Continuous Monitoring",
        description: "Autonomous threat detection systems provide real-time mitigation and forensic signal analysis across all layers.",
        icon: EyeOff,
        tag: "THREAT_INTEL"
    },
    {
        id: "CR",
        title: "Compliance Engineering",
        description: "Hardened for global standards including GDPR, SOC2, and HIPAA. Built-in audit trails and automated governance.",
        icon: Shield,
        tag: "GOVERNANCE"
    }
];

function FortifiedCore() {
    return (
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none min-h-[300px]">
            {/* Concentric Rings */}
            {[1, 2, 3].map((ring) => (
                <motion.div
                    key={ring}
                    className="absolute rounded-full border border-white/[0.04] border-dashed"
                    style={{
                        width: `${ring * 25 + 25}%`,
                        height: `${ring * 25 + 25}%`,
                    }}
                    animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                    transition={{ 
                        duration: 30 + ring * 10, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                />
            ))}

            {/* Breathing Aura */}
            <motion.div 
                className="absolute w-48 h-48 bg-accent-base/10 rounded-full blur-[60px]"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
            />

            {/* Central Shield Module */}
            <div className="relative z-10 w-24 h-24 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(201,166,107,0.1)]">
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Shield size={40} className="text-accent-base" />
                </motion.div>
                
                {/* Orbital Particles */}
                <motion.div 
                    className="absolute -top-1 -right-1 w-3 h-3 bg-accent-base/40 rounded-full blur-[1px]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "center 60px" }}
                />
            </div>
        </div>
    );
}

function SecurityVaultCard({ feature, index }: { feature: typeof SECURITY_FEATURES[0], index: number }) {
    const Icon = feature.icon;
    return (
        <StaggerItem className="h-full">
            <div 
                className="relative h-full group"
            >
                {/* Volumetric Vault Frame */}
                <div className={cn(
                    "relative h-full flex flex-col overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    "bg-white/[0.01] border border-white/[0.04] backdrop-blur-2xl rounded-[32px]",
                    "group-hover:bg-white/[0.02] group-hover:border-accent-base/30 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                )}>
                    {/* Recessed Depth Inner Border */}
                    <div className="absolute inset-[1px] rounded-[31px] border border-white/[0.02] pointer-events-none" />
                    
                    {/* Scrolling Technical Metadata Overlay (Holographic) */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 left-4 font-mono text-[10px] text-white leading-loose whitespace-nowrap animate-marquee-vertical">
                            {Array(20).fill(0).map((_, i) => (
                                <div key={i}>
                                    ENC_HASH_0{index}_{((index + i) * 12345).toString(16).padEnd(8, '0').toUpperCase()} <br />
                                    SYSTEM_INTEGRITY_CHECK_OK <br />
                                    DECRYPT_ATTEMPT_REJECTED <br />
                                    PROTOCOL_V3_ACTIVE <br />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col h-full p-10">
                        {/* Top Section: Status Module */}
                        <div className="flex items-start justify-between mb-12">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-base/40 animate-pulse" />
                                    <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-accent-base/60 uppercase">
                                        Vault_0{index + 1}
                                    </span>
                                </div>
                                <div className="h-px w-8 bg-white/[0.1] group-hover:w-full group-hover:bg-accent-base/30 transition-all duration-700" />
                            </div>
                            
                            <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center group-hover:border-accent-base/40 transition-all duration-700 relative overflow-hidden">
                                <Icon size={24} className="text-white/40 group-hover:text-accent-base transition-all duration-700 z-10" />
                                <div className="absolute inset-0 bg-accent-base/0 group-hover:bg-accent-base/5 transition-all duration-500" />
                            </div>
                        </div>

                        {/* Mid Section: Narrative */}
                        <div className="flex-grow">
                            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight mb-6">
                                {feature.title}
                            </h3>
                            <div className="relative">
                                <p className="text-[15px] leading-relaxed text-white/40 group-hover:text-white/70 transition-all duration-700 max-w-[90%]">
                                    {feature.description}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Section: Shutter Reveal Footer */}
                        <div className="mt-10 pt-8 border-t border-white/[0.05] group-hover:border-accent-base/20 transition-colors duration-700">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">Security Protocol</span>
                                    <span className="text-[11px] font-bold text-white/60 group-hover:text-white transition-colors uppercase tracking-wider">
                                        {feature.tag}
                                    </span>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-base/20 transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                                    <ChevronRight size={14} className="text-white/40 group-hover:text-accent-base" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent skew-x-[-20deg] group-hover:animate-shimmer" />
                    </div>
                </div>
            </div>
        </StaggerItem>
    );
}

export function SecurityArchitecture() {
    return (
        <section className="w-full relative py-20 md:py-32 bg-black overflow-hidden min-h-[80vh] flex items-center">
            {/* Atmospheric Background */}
            <SectionAtmosphere 
                number="05" 
                glowColor="rgba(201, 166, 107, 0.02)"
                glowPosition={{ top: '20%', right: '0%' }}
                glowSize={1000}
                isHovered={false} 
            />

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-16 md:mb-20">
                    <div className="max-w-3xl">
                        <ScrollReveal>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-px bg-accent-base/40" />
                                <Meta className="m-0 text-accent-base/60 uppercase tracking-[0.4em] font-bold text-[10px]">THE FORTIFIED CORE</Meta>
                            </div>
                            
                            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
                                Beautifully engineered. <br />
                                <span className="text-white/20 font-serif italic text-4xl md:text-6xl">Impenetrably secured.</span>
                            </h2>
                        </ScrollReveal>
                    </div>

                    {/* Integrated Side Visualization (Compact) */}
                    <div className="hidden lg:block w-48 h-48 relative">
                        <FortifiedCore />
                        <div className="absolute -bottom-2 inset-x-0 text-center">
                            <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">Active_Grid</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {SECURITY_FEATURES.map((feature, idx) => (
                        <SecurityVaultCard key={feature.id} feature={feature} index={idx} />
                    ))}
                </div>

                {/* Compact Technical Footer */}
                <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3">
                            <Globe size={14} className="text-accent-base/40" />
                            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">24 Global Nodes // Active</span>
                        </div>
                        <div className="hidden md:flex gap-1.5">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="w-4 h-[1px] bg-white/[0.1] overflow-hidden">
                                    <motion.div 
                                        className="w-full h-full bg-accent-base/40"
                                        animate={{ opacity: [0.2, 1, 0.2] }}
                                        transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="flex items-center gap-4 group">
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] group-hover:text-accent-base transition-colors">Request Security Protocol Audit</span>
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-base/40 transition-all">
                            <Zap size={14} className="text-white/30 group-hover:text-accent-base group-hover:animate-pulse" />
                        </div>
                    </button>
                </div>
            </Container>
        </section>
    );
}
