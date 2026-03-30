'use client';

import React, { useEffect } from 'react';
import { Container, Meta, Button } from '@/components/ui';

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Application Error Boundary caught an error:', error);
    }, [error]);

    return (
        <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
            <Container className="flex flex-col items-center justify-center text-center z-10 relative">
                <span className="font-sans text-[clamp(80px,15vw,180px)] font-bold leading-none text-white/[0.05] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[2px] whitespace-nowrap">
                    ERROR
                </span>
                <Meta as="h1" className="mb-[32px] text-white/50">Something went wrong</Meta>
                <p className="font-sans text-[17px] text-white/[0.55] max-w-[400px] mb-[40px]">
                    We&apos;ve encountered an unexpected issue while loading this page.
                </p>
                <Button variant="ghost" onClick={() => reset()}>Try Again</Button>
            </Container>
        </main>
    );
}
