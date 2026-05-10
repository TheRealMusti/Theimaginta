'use client';

import React, { useState, useEffect } from 'react';

/**
 * A utility component that only renders its children on the client side.
 * This prevents hydration mismatch errors for components that rely on 
 * browser-only APIs or non-deterministic data (like Math.random or current time).
 */
export function HydrationSafe({ children, fallback = null }: { children: React.ReactNode; fallback?: React.ReactNode }) {
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
 setMounted(true);
 }, []);

 if (!mounted) {
 return <>{fallback}</>;
 }

 return <>{children}</>;
}
