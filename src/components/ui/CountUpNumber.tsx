'use client';

import { useState, useEffect, useRef } from 'react';

interface CountUpNumberProps {
 value: number;
 duration?: number;
 decimals?: number;
}

export function CountUpNumber({ value, duration = 1200, decimals = 0 }: CountUpNumberProps) {
 const [count, setCount] = useState(0);
 const ref = useRef<HTMLSpanElement>(null);

 useEffect(() => {
 let observer: IntersectionObserver;
 let animationFrame: number;
 let hasAnimated = false;

 const startAnimation = () => {
 if (hasAnimated) return;
 hasAnimated = true;
 let startTime: number | null = null;
 
 const step = (timestamp: number) => {
 if (!startTime) startTime = timestamp;
 const progress = timestamp - startTime;
 
 const easeProgress = Math.min(progress / duration, 1);
 const easeOutQuad = easeProgress * (2 - easeProgress);

 const currentVal = value * easeOutQuad;
 setCount(Number(currentVal.toFixed(decimals)));

 if (progress < duration) {
 animationFrame = window.requestAnimationFrame(step);
 } else {
 setCount(value);
 }
 };
 animationFrame = window.requestAnimationFrame(step);
 };

 if (ref.current) {
 observer = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 startAnimation();
 observer.disconnect();
 }
 },
 { threshold: 0.1 }
 );
 observer.observe(ref.current);
 }

 return () => {
 if (observer) observer.disconnect();
 if (animationFrame) window.cancelAnimationFrame(animationFrame);
 };
 }, [value, duration, decimals]);

 return (
 <span ref={ref}>{count}</span>
 );
}
