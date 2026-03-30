import { useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';

export function useScrollVelocity() {
    const { scrollY } = useScroll();
    const rawVelocity = useVelocity(scrollY);
    const absVelocity = useTransform(rawVelocity, (v) => Math.abs(v));
    const rawIntensity = useTransform(absVelocity, [0, 200, 1500], [0, 0, 1]);
    const intensity = useSpring(rawIntensity, { stiffness: 100, damping: 30 });
    return { intensity };
}
