'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

interface CountUpNumberProps {
    value: number;
    duration?: number;
    decimals?: number;
}

export function CountUpNumber({ value, duration = 1200, decimals = 0 }: CountUpNumberProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
    const count = useCountUp(value, duration, inView, decimals);

    return (
        <span ref={ref}>{count}</span>
    );
}
