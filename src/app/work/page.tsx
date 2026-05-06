import { Suspense } from 'react';
import type { Metadata } from 'next';
import WorkPageContent from '@/components/sections/work/WorkPageContent';

export const metadata: Metadata = {
    title: 'Use Cases — Imaginta | Business Problems We Solve',
    description:
        'Real business challenges, real outcomes. See how Imaginta helps startups and SMEs launch brands, fix broken digital experiences, and integrate AI — with measurable results.',
    openGraph: {
        title: 'Use Cases — Imaginta | Business Problems We Solve',
        description:
            'Real business challenges, real outcomes. See how Imaginta helps startups and SMEs launch brands, fix broken digital experiences, and integrate AI.',
        url: 'https://imaginta.com/work',
    },
    twitter: {
        title: 'Use Cases — Imaginta | Business Problems We Solve',
        description:
            'Real business challenges, real outcomes. See how Imaginta helps startups and SMEs launch brands, fix broken digital experiences, and integrate AI.',
    },
    alternates: {
        canonical: 'https://imaginta.com/work',
    },
};

export default function WorkPage() {
    return (
        <Suspense fallback={<div className="min-h-screen" />}>
            <WorkPageContent />
        </Suspense>
    );
}
