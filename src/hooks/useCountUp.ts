'use client';

import { useState, useEffect } from 'react';

export function useCountUp(end: number, duration: number = 1200, startWhen: boolean = true, decimals: number = 0) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startWhen) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            
            const easeProgress = Math.min(progress / duration, 1);
            const easeOutQuad = easeProgress * (2 - easeProgress);

            const currentVal = end * easeOutQuad;
            const formatted = Number(currentVal.toFixed(decimals));
            
            setCount(formatted);

            if (progress < duration) {
                animationFrame = window.requestAnimationFrame(step);
            } else {
                setCount(end); // Hit target exactly
            }
        };

        animationFrame = window.requestAnimationFrame(step);

        return () => window.cancelAnimationFrame(animationFrame);
    }, [end, duration, startWhen, decimals]);

    return count;
}
