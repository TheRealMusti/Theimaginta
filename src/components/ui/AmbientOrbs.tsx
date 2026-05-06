'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface OrbConfig {
    color: string;
    size: number;
    x: string;
    y: string;
    duration: number;
}

export function AmbientOrbs({ orbs }: { orbs: OrbConfig[] }) {
    const prefersReducedMotion = useReducedMotion();
    
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen">
            {orbs.map((orb, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                        width: orb.size,
                        height: orb.size,
                        left: orb.x,
                        top: orb.y,
                        filter: 'blur(100px)',
                    }}
                    animate={prefersReducedMotion ? {} : {
                        x: [0, 30, -20, 0],
                        y: [0, -30, 20, 0],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
}
