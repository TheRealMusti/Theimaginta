'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import { COLORS } from '@/lib/constants';

export function CursorGlow() {
 const { mousePosition, isTouchDevice, isLowEnd } = useMousePosition();
 const [isHoveringGlass, setIsHoveringGlass] = useState(false);
 const [isHoveringClickable, setIsHoveringClickable] = useState(false);
 const [isClicking, setIsClicking] = useState(false);
 const [isIdle, setIsIdle] = useState(false);
 
 const cursorX = useMotionValue(-100);
 const cursorY = useMotionValue(-100);

 const springConfig = { stiffness: 200, damping: 30 };
 const smoothX = useSpring(cursorX, springConfig);
 const smoothY = useSpring(cursorY, springConfig);

 useEffect(() => {
 if (mousePosition) {
 cursorX.set(mousePosition.x);
 cursorY.set(mousePosition.y);
 }
 }, [mousePosition, cursorX, cursorY]);

 useEffect(() => {
 const handleMouseOver = (e: MouseEvent) => {
 const target = e.target as HTMLElement;
 const isClickable = !!target.closest('a, button, input, select, [role="button"], [role="tab"]');
 const isGlass = !!target.closest('.backdrop-blur-glass') || !!target.closest('[class*="bg-[#F5F2ED]/"]');
 
 setIsHoveringClickable(isClickable);
 setIsHoveringGlass(isGlass);
 };
 
 const handleMouseDown = () => setIsClicking(true);
 const handleMouseUp = () => setIsClicking(false);

 window.addEventListener('mouseover', handleMouseOver);
 window.addEventListener('mousedown', handleMouseDown);
 window.addEventListener('mouseup', handleMouseUp);

 return () => {
 window.removeEventListener('mouseover', handleMouseOver);
 window.removeEventListener('mousedown', handleMouseDown);
 window.removeEventListener('mouseup', handleMouseUp);
 };
 }, []);

 useEffect(() => {
 setIsIdle(false);
 const idleTimer = setTimeout(() => setIsIdle(true), 15000);
 return () => clearTimeout(idleTimer);
 }, [mousePosition]);

 if (isTouchDevice || isLowEnd || !mousePosition) return null;

 let radius = 40;
 let opacity = 0.028;

 if (isClicking) {
 radius = 20;
 } else if (isHoveringClickable) {
 radius = 60;
 opacity = 0.042;
 }
 
 if (isHoveringGlass && !isClicking) {
 opacity = 0.056;
 }

 if (isIdle) {
 opacity = 0;
 }

 const diameter = radius * 2;

 return (
 <motion.div
 className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full mix-blend-screen"
 style={{
 x: smoothX,
 y: smoothY,
 width: diameter,
 height: diameter,
 backgroundColor: COLORS.accent.base,
 opacity: opacity,
 translateX: '-50%',
 translateY: '-50%',
 willChange: 'transform, width, height, opacity',
 }}
 transition={{
 width: { duration: 0.2, ease: 'easeOut' },
 height: { duration: 0.2, ease: 'easeOut' },
 opacity: { duration: isIdle ? 3 : 0.5, ease: 'easeOut' }
 }}
 animate={{
 width: diameter,
 height: diameter,
 opacity: opacity,
 }}
 >
 <div className="w-full h-full rounded-full blur-[24px]" style={{ backgroundColor: COLORS.accent.base }} />
 </motion.div>
 );
}
