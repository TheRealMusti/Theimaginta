'use client';

import React from 'react';
import { Container, Meta, Button, GlassPane } from '@/components/ui';
import { motion } from 'framer-motion';

export default function NotFound() {
 return (
 <main data-cursor="VOID · EMPTY" className="min-h-screen bg-[#060508] flex items-center justify-center relative overflow-hidden">
 {/* Fake ambient layer for 404 to appear brighter */}
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,166,107,0.05)_0%,transparent_60%)] pointer-events-none z-0" />
 
 <Container className="flex flex-col items-center justify-center text-center z-10 relative">
 <motion.div 
 animate={{ y: [0, -4, 0] }}
 transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
 className="font-sans text-[clamp(120px,20vw,240px)] font-bold leading-none text-[#F5F2ED]/[0.05] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[2px]"
 >
 404
 </motion.div>
 
 <Meta as="h1" className="mb-[32px] text-[#F5F2ED]/50">Page Not Found</Meta>
 
 <p className="font-sans text-[17px] text-[#F5F2ED]/[0.55] max-w-[400px] mb-[40px]">
 This page wandered off. It happens to the best of us.
 </p>

 <GlassPane padding="24px" radius={24} className="mt-8 backdrop-blur-[8px]">
 <div className="flex flex-col sm:flex-row gap-4 items-center">
 <Button href="/">Take me home</Button>
 <Button variant="ghost" href="/contact">Start a project instead &rarr;</Button>
 </div>
 </GlassPane>
 </Container>
 </main>
 );
}
