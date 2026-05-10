'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Meta } from '@/components/ui';

interface SuccessStateProps {
  successRef: React.RefObject<HTMLHeadingElement>;
}

export function SuccessState({ successRef }: SuccessStateProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-[48px] flex flex-col items-center text-center"
      role="status"
      aria-live="polite"
    >
      {/* Checkmark circle - Now with Prestige */}
      <motion.div
        initial={
          prefersReducedMotion
            ? { scale: 1 }
            : { scale: 0 }
        }
        animate={{ scale: 1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }
        }
        className="w-[56px] h-[56px] rounded-full border-[1.5px] border-prestige flex items-center justify-center mb-[24px] shadow-[0_0_32px_rgba(196,163,110,0.15)] bg-prestige/5"
      >
        <Check size={24} className="text-prestige" />
      </motion.div>

      <h2
        ref={successRef}
        tabIndex={-1}
        className="font-sans text-[24px] font-semibold text-[#F5F2ED] mb-[12px] focus:outline-none"
      >
        Brief received.
      </h2>

      <p className="font-sans text-[15px] leading-[1.6] text-[#F5F2ED]/[0.72] max-w-[360px] mb-[32px]">
        We&apos;ll review your project details and get back to you within 24 hours.
      </p>

      {/* Next steps */}
      <div className="flex flex-col gap-[16px] mb-[32px]">
        {[
          'We review your brief internally',
          'A strategist reaches out within 24h',
          'We schedule a discovery call',
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-[12px]">
            <Meta className="text-prestige w-[16px] text-center flex-shrink-0">
              {i + 1}
            </Meta>
            <span className="font-sans text-[14px] text-[#F5F2ED]/60">
              {step}
            </span>
          </div>
        ))}
      </div>

      <Link
        href="/process"
        className="font-sans text-[13px] font-medium text-prestige hover:text-[#F5F2ED] transition-colors duration-300"
      >
        explore our process &rarr;
      </Link>
    </motion.div>
  );
}
