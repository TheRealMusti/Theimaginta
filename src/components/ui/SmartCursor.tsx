'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

export function SmartCursor() {
    const { mousePosition, isTouchDevice, isLowEnd } = useMousePosition();
    const [label, setLabel] = useState<string | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isIdle, setIsIdle] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Spring physics for coordinates (snappy yet slightly smooth, creating weight)
    const smoothX = useSpring(0, { stiffness: 500, damping: 35 });
    const smoothY = useSpring(0, { stiffness: 500, damping: 35 });

    useEffect(() => {
        if (mousePosition) {
            smoothX.set(mousePosition.x);
            smoothY.set(mousePosition.y);
        }
    }, [mousePosition, smoothX, smoothY]);

    useEffect(() => {
        if (isTouchDevice || isLowEnd) return;

        // Apply class to body to disable native pointer (except on inputs)
        document.body.classList.add('has-custom-cursor');

        // Introductory fade-in delay
        const mountTimer = setTimeout(() => setMounted(true), 1500);

        const handleMouseOver = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest?.('[data-cursor]');
            if (target) {
                setLabel(target.getAttribute('data-cursor'));
                setIsHovering(true);
            } else {
                setLabel(null);
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.body.classList.remove('has-custom-cursor');
            clearTimeout(mountTimer);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isTouchDevice, isLowEnd]);

    // 8-second idle timeout
    useEffect(() => {
        if (isTouchDevice || isLowEnd) return;
        setIsIdle(false);
        const idleTimer = setTimeout(() => setIsIdle(true), 8000);
        return () => clearTimeout(idleTimer);
    }, [mousePosition, isTouchDevice, isLowEnd]);

    if (isTouchDevice || isLowEnd || !mousePosition || !mounted) return null;

    const ringSize = isClicking ? 40 : isHovering ? 48 : 12;
    const ringColor = isHovering ? 'rgba(201, 166, 107, 0.5)' : 'rgba(201, 166, 107, 0.3)';
    const ringBg = isHovering ? 'rgba(201, 166, 107, 0.04)' : 'transparent';

    return (
        <motion.div
            style={{
                position: 'fixed',
                pointerEvents: 'none',
                zIndex: 9999,
                left: smoothX,
                top: smoothY,
                x: '-50%',
                y: '-50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Outer Ring */}
            <motion.div
                animate={
                    isIdle && !isHovering
                        ? {
                            width: ringSize,
                            height: ringSize,
                            backgroundColor: ringBg,
                            borderColor: ringColor,
                            opacity: [1, 0.3, 1], // Breathing effect (relative to container)
                            transition: {
                                width: { type: 'spring', stiffness: 300, damping: 25 },
                                height: { type: 'spring', stiffness: 300, damping: 25 },
                                opacity: { duration: 3, ease: 'easeInOut', repeat: Infinity },
                            },
                        }
                        : {
                            width: ringSize,
                            height: ringSize,
                            backgroundColor: ringBg,
                            borderColor: ringColor,
                            opacity: 1, // Full opacity when moving or hovering
                            transition: { type: 'spring', stiffness: 300, damping: 25 },
                        }
                }
                style={{
                    borderRadius: '50%',
                    borderWidth: 1,
                    borderStyle: 'solid',
                }}
            />

            {/* Contextual HUD Label */}
            <AnimatePresence>
                {label && (
                    <motion.span
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            x: '-50%',
                            marginTop: 12,
                            whiteSpace: 'nowrap',
                            fontFamily: 'var(--font-instrument)', // from the theme
                            fontSize: 10,
                            fontWeight: 500,
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            color: 'rgba(245, 242, 237, 0.4)',
                        }}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                    >
                        {label}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
