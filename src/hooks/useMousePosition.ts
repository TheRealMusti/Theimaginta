import { useState, useEffect } from 'react';

type Position = { x: number; y: number } | null;
type Listener = (pos: Position) => void;

let globalMousePosition: Position = null;
const listeners: Set<Listener> = new Set();
let isInitialized = false;
let isTouchDevice = false;
let isLowEnd = false;

function initGlobalMouseTracking() {
 if (typeof window === 'undefined') return;
 
 isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
 isLowEnd = navigator.hardwareConcurrency < 4;
 
 if (isTouchDevice) return;


 let currentX = 0;
 let currentY = 0;
 let hasNewPosition = false;

 const handleMouseMove = (e: MouseEvent) => {
 currentX = e.clientX;
 currentY = e.clientY;
 hasNewPosition = true;
 };

 const renderLoop = () => {
 if (hasNewPosition) {
 globalMousePosition = { x: currentX, y: currentY };
 hasNewPosition = false;
 listeners.forEach(listener => listener(globalMousePosition));
 }
 requestAnimationFrame(renderLoop);
 };

 window.addEventListener('mousemove', handleMouseMove, { passive: true });
 requestAnimationFrame(renderLoop);
}

export function useMousePosition() {
 const [mousePosition, setMousePosition] = useState<Position>(globalMousePosition);

 useEffect(() => {
 if (typeof window === 'undefined') return;
 
 if (!isInitialized) {
 initGlobalMouseTracking();
 isInitialized = true;
 }

 if (isTouchDevice) return;

 const listener: Listener = (pos) => setMousePosition(pos);
 listeners.add(listener);

 return () => {
 listeners.delete(listener);
 };
 }, []);

 return { mousePosition, isTouchDevice, isLowEnd };
}
