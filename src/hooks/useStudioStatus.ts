'use client';

import { useState, useEffect } from 'react';

type StudioStatus = 'online' | 'break' | 'offline';

export function useStudioStatus() {
 const [status, setStatus] = useState<StudioStatus>('offline');

 useEffect(() => {
 const check = () => {
 const now = new Date();
 const parts = new Intl.DateTimeFormat('en-US', {
 timeZone: 'Europe/Brussels',
 hour: 'numeric',
 minute: 'numeric',
 hourCycle: 'h23',
 weekday: 'short',
 }).formatToParts(now);

 const day = parts.find((p) => p.type === 'weekday')?.value ?? '';
 const hour = parseInt(parts.find((p) => p.type === 'hour')?.value ?? '0', 10);
 const minute = parseInt(parts.find((p) => p.type === 'minute')?.value ?? '0', 10);

 const isWorkday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day);
 const totalMinutes = hour * 60 + minute;

 // 06:00 to 18:00 (Brussels Time)
 const isWorkingHours = totalMinutes >= 360 && totalMinutes < 1080;

 // Breaks (Brussels Time)
 const isBreak = 
 (totalMinutes >= 450 && totalMinutes < 480) || // 07:30 - 08:00
 (totalMinutes >= 720 && totalMinutes < 780) || // 12:00 - 13:00
 (totalMinutes >= 900 && totalMinutes < 920); // 15:00 - 15:20

 if (!isWorkday) {
 setStatus('offline');
 return;
 }

 if (isBreak) {
 setStatus('break');
 } else if (isWorkingHours) {
 setStatus('online');
 } else {
 setStatus('offline');
 }
 };

 check();
 const id = setInterval(check, 30_000); // Check every 30 seconds
 return () => clearInterval(id);
 }, []);

 return status;
}
