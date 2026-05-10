import type { Metadata } from 'next';
import { instrumentSans } from '@/lib/fonts';
import './globals.css';
import { Nav, Footer } from '@/components/ui/layout';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { GrainOverlay, Preloader, HydrationSafe } from '@/components/ui';
import { EasterEgg } from '@/components/ui/EasterEgg';
import { CursorGlow } from '@/components/ui/CursorGlow';
import { SmartCursor } from '@/components/ui/SmartCursor';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { LayoutAtmosphere } from '@/components/ui/layout/LayoutAtmosphere';

export const metadata: Metadata = {
 title: 'Imaginta — Creative Digital Agency | Brussels',
 description:
 'Long-term digital partner for startups and SMEs. Brand identity, product design, web development, and AI integration. Based in Brussels, Belgium.',
 keywords: [
 'digital agency',
 'creative agency',
 'web development',
 'brand identity',
 'product design',
 'Brussels',
 'Belgium',
 'AI integration',
 ],
 metadataBase: new URL('https://imaginta.com'),
 alternates: {
 canonical: 'https://imaginta.com',
 },
 openGraph: {
 title: 'Imaginta — Creative Digital Agency | Brussels',
 description:
 'Long-term digital partner for startups and SMEs. Brand identity, product design, web development, and AI integration. Based in Brussels, Belgium.',
 url: 'https://imaginta.com',
 siteName: 'Imaginta',
 locale: 'en_US',
 type: 'website',
 images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Imaginta' }],
 },
 twitter: {
 card: 'summary_large_image',
 title: 'Imaginta — Creative Digital Agency | Brussels',
 description:
 'Long-term digital partner for startups and SMEs. Brand identity, product design, web development, and AI integration. Based in Brussels, Belgium.',
 images: ['/og-image.jpg'],
 site: '@imagintax1',
 creator: '@imagintax1',
 },
 robots: {
 index: true,
 follow: true,
 },
 other: {
 'theme-color': '#060508',
 },
};

// A11y pass applied

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 const jsonLd = {
 '@context': 'https://schema.org',
 '@type': 'Organization',
 name: 'Imaginta',
 url: 'https://imaginta.com',
 logo: 'https://imaginta.com/og-image.jpg',
 description:
 'Long-term digital partner for startups and SMEs. Brand identity, product design, web development, and AI integration. Based in Brussels, Belgium.',
 address: {
 '@type': 'PostalAddress',
 addressLocality: 'Brussels',
 addressCountry: 'Belgium',
 },
 sameAs: [
 'https://x.com/imagintax1',
 'https://linkedin.com/company/imagintax1',
 'https://instagram.com/imagintax1',
 'https://facebook.com/imagintax1',
 ],
 };

 return (
 <html lang="en" className={`${instrumentSans.variable}`}>
 <body>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 />
 <HydrationSafe>
 <Preloader />
 </HydrationSafe>
 <a
 href="#main"
 className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 bg-accent-base text-[#060508] px-[24px] py-[12px] rounded-[50px] font-sans text-[14px] font-medium transition-transform"
 >
 Skip to main content
 </a>
 <Nav />
 <main id="main">
 {children}
 </main>
 <SectionDivider variant="accent" />
 <Footer />

 {/* GLOBAL ATMOSPHERE (Patch 3) */}
 <LayoutAtmosphere />
 <GrainOverlay />
 <CursorGlow />
 <SmartCursor />
 <EasterEgg />
 <Analytics />
 <SpeedInsights />
 </body>
 </html>
 );
}
