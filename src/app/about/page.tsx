import { Metadata } from 'next';
import { Container, Meta, Hairline } from '@/components/ui';
import { FadeUp, ScaleReveal } from '@/components/motion';
import { AboutOrigin, AboutPrinciples, AboutAdvantages, AboutMetrics, AboutFit, AboutStudio, AboutTestimonial, AboutCTA } from '@/components/about-ui';

export const metadata: Metadata = {
    title: 'About — Imaginta',
    description: 'A creative digital agency in Brussels built around one idea: your business deserves a partner who stays, not a vendor who ships and disappears.',
    openGraph: {
        title: 'About — Imaginta',
        description: 'A creative digital agency in Brussels built around one idea: your business deserves a partner who stays.',
    }
};

export default function AboutPage() {
    return (
        <main className="relative w-full min-h-screen bg-void text-white overflow-hidden selection:bg-accent-base/20 selection:text-white pb-[120px]">
            {/* GLOBAL DECORATIVE WHISPER */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] font-sans font-medium tracking-[0.2em] text-white/[0.15] uppercase select-none pointer-events-none z-50 hidden xl:block">
                IMAGINTA / 50.8503°N
            </div>

            {/* GLOBAL TOP WARM WASH */}
            <div 
                className="absolute top-0 left-0 w-full h-[800px] pointer-events-none mix-blend-screen"
                style={{
                    background: 'radial-gradient(ellipse 80% 60% at 50% 10%, rgba(201,166,107,0.045), transparent 70%)'
                }}
            />

            <ScaleReveal delay={0}>
                {/* SECTION 1 — PAGE HEADER (The Opening Statement) */}
                <section className="relative w-full pt-[120px] md:pt-[160px] pb-[100px]">
                    <Container>
                        <div className="relative flex flex-col items-center justify-center text-center max-w-[800px] mx-auto">
                            {/* Breathing Background Glow */}
                            {/* 
                              Wait, we'll use a client component for framer-motion animate if needed, 
                              but since this is a server component by default, we should extract 
                              the breathing header into its own client component later if needed. 
                              For now, standard CSS animation or we add "use client" to a wrapper.
                            */}
                            
                            <FadeUp delay={0.15}>
                                <Meta className="mb-[40px] text-accent-base">ABOUT IMAGINTA</Meta>
                            </FadeUp>

                            <FadeUp delay={0.30}>
                                <h1 className="font-sans text-[clamp(36px,5.5vw,64px)] font-semibold tracking-[-0.03em] text-white leading-[1.15]">
                                    We exist because too many businesses get abandoned by their agencies.
                                </h1>
                            </FadeUp>

                            <FadeUp delay={0.45}>
                                <p className="font-sans text-[18px] font-normal text-white/[0.72] leading-[1.8] mt-[32px] max-w-[540px] mx-auto">
                                    You hire an agency. They build something beautiful. They disappear. Six months later, you need changes and there's no one to call. Imaginta was built to be the opposite of that.
                                </p>
                            </FadeUp>

                            <FadeUp delay={0.60}>
                                <div className="mt-[56px] flex items-center justify-center">
                                    <div className="w-[80px] h-[0.5px] bg-[linear-gradient(90deg,transparent,rgba(201,166,107,0.08))]" />
                                    <div className="w-[6px] h-[6px] rounded-full bg-accent-base/30 mx-[2px]" />
                                    <div className="w-[80px] h-[0.5px] bg-[linear-gradient(90deg,rgba(201,166,107,0.08),transparent)]" />
                                </div>
                            </FadeUp>
                        </div>
                    </Container>
                </section>

                {/* SECTION 2 — THE ORIGIN */}
                <AboutOrigin />

                {/* SECTION 3 — THE PRINCIPLES */}
                <AboutPrinciples />

                {/* SECTION 4 — THE ADVANTAGES */}
                <AboutAdvantages />

                {/* SECTION 5 — THE NUMBERS */}
                <AboutMetrics />

                {/* SECTION 6 — WHO WE SERVE */}
                <AboutFit />

                {/* SECTION 7 — THE STUDIO */}
                <AboutStudio />

                {/* SECTION 8 — THE PROOF */}
                <AboutTestimonial />

                {/* SECTION 9 — THE CLOSE */}
                <AboutCTA />
            </ScaleReveal>
        </main>
    );
}
