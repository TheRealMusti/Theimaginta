'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ParticleField = React.memo(function ParticleField() {
 const [mounted, setMounted] = React.useState(false);

 React.useEffect(() => {
 setMounted(true);
 }, []);

 if (!mounted) return null;

 return (
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 {Array.from({ length: 8 }).map((_, i) => (
 <motion.div
 key={i}
 className="absolute bg-[#C9A66B]/[0.15] rounded-full"
 style={{
 width: Math.random() * 2 + 1 + 'px',
 height: Math.random() * 2 + 1 + 'px',
 left: Math.random() * 100 + '%',
 top: Math.random() * 100 + '%',
 }}
 animate={{
 y: [0, -30, 0],
 x: [0, Math.random() * 20 - 10, 0],
 opacity: [0.1, 0.4, 0.1],
 }}
 transition={{
 duration: 8 + Math.random() * 10,
 repeat: Infinity,
 ease: "easeInOut",
 delay: Math.random() * 5,
 }}
 />
 ))}
 </div>
 );
});

export const SystemScan = React.memo(function SystemScan() {
 return (
 <motion.div
 className="absolute left-0 w-full h-[1px] z-[2] pointer-events-none"
 style={{
 background: 'linear-gradient(90deg, transparent, rgba(201, 166, 107, 0.03), transparent)',
 }}
 animate={{
 top: ['-10%', '110%'],
 opacity: [0, 1, 1, 0],
 }}
 transition={{
 duration: 4,
 repeat: Infinity,
 repeatDelay: 10,
 ease: "linear",
 }}
 />
 );
});
