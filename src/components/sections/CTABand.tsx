'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Container, Button, Whisper, Meta, GlassPane } from '@/components/ui';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { ArrowRight, Star, Sparkles, ShieldCheck, Globe } from 'lucide-react';

export function CTABand() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax and transformation effects
  const scale = useTransform(smoothProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const yWatermark = useTransform(smoothProgress, [0, 1], [100, -100]);
  const rotateElements = useTransform(smoothProgress, [0, 1], [0, 20]);

  return (
    <section 
      ref={sectionRef}
      id="cta" 
      aria-label="Call to Action" 
      className="relative w-full min-h-[60vh] flex flex-col items-center justify-center bg-[#000000] overflow-hidden pt-8 sm:pt-10 md:pt-[56px] lg:pt-20 pb-12 sm:pb-14 md:pb-[72px] lg:pb-24"
    >
      {/* --- BESPOKE CINEMATIC LAYER --- */}
      <div className="absolute inset-0 pointer-events-none">
        
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#C9A66B_1px,transparent_1px),linear-gradient(to_bottom,#C9A66B_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />
        </div>

        {/* Decorative Symbols - More organic/prestige focused */}
        <motion.div 
          style={{ y: useTransform(smoothProgress, [0, 1], [-40, 40]), rotate: rotateElements }}
          className="absolute top-[15%] left-[12%] text-[#C9A66B]/5 hidden lg:block"
        >
          <Star size={100} strokeWidth={0.3} />
        </motion.div>
        
        <motion.div 
          style={{ y: useTransform(smoothProgress, [0, 1], [40, -40]), rotate: useTransform(smoothProgress, [0, 1], [0, -15]) }}
          className="absolute bottom-[15%] right-[15%] text-[#C9A66B]/5 hidden lg:block"
        >
          <Sparkles size={80} strokeWidth={0.3} />
        </motion.div>
      </div>

      <Container className="relative z-10">
        <motion.div 
          style={{ scale, opacity }}
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          <GlassPane
            plane={1}
            noBlur={true} // Footer element, nothing behind
            radius={48}
            padding="48px 24px md:p-20"
            className="w-full flex flex-col items-center text-center"
          >
            <div className="mb-4 lg:mb-6">
              <Meta className="meta-text meta-amber">Now Accepting New Partners</Meta>
            </div>

            <h2 className="section-h2 !max-w-none text-white text-center uppercase mb-8 lg:mb-12">
              CRAFT YOUR <br />
              <span className="text-prestige/30 font-serif italic lowercase tracking-tight font-normal">Digital Legacy.</span>
            </h2>

            <p className="body-text !max-w-none text-center mb-12 lg:mb-16">
              We partner with ambitious leaders to build exceptional experiences. 
              Let&apos;s transform your vision into a reality that truly moves the needle.
            </p>

            {/* CTA Button - Clear Action */}
            <div className="relative group">
              {/* NO filter:blur on glow - using radial-gradient falloff for softness */}
              <div 
                className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" 
                style={{
                  background: 'radial-gradient(circle at center, rgba(201,166,107,0.05) 0%, transparent 70%)'
                }}
              />
              
              <MagneticButton>
                <Button 
                  variant="primary"
                  className="relative h-20 md:h-22 px-10 md:px-16 rounded-[50px] bg-white text-black hover:bg-white text-sm md:text-base font-bold tracking-[0.2em] uppercase overflow-hidden group/btn flex items-center gap-5 transition-all shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_60px_rgba(201,166,107,0.2)]"
                >
                  <span className="relative z-10 flex items-center gap-5">
                    Start a Conversation
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500 ease-in-out" />
                  </span>
                  
                  <motion.div 
                    className="absolute inset-0 bg-[#C9A66B] origin-right"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1, originX: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </Button>
              </MagneticButton>
            </div>

            {/* Strategic Info - Trust & Value Focused - Plane 3 (RECEDED) */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 opacity-20">
              <div className="flex flex-col items-center gap-2 group">
                <ShieldCheck size={14} className="text-[#C9A66B] group-hover:scale-110 transition-transform" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono">Premium Quality</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <Sparkles size={14} className="text-[#C9A66B] group-hover:rotate-12 transition-transform" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono">Custom Built</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <Globe size={14} className="text-[#C9A66B] group-hover:scale-110 transition-transform" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono">Global Impact</span>
              </div>
            </div>
          </GlassPane>
        </motion.div>
      </Container>

      {/* Kinetic Background Watermark */}
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-1/2 left-[-5%] -translate-y-1/2 text-[20vw] font-black text-white/[0.008] leading-none select-none pointer-events-none whitespace-nowrap -rotate-3"
      >
        IMAGINTA STUDIO
      </motion.div>
    </section>
  );
}
