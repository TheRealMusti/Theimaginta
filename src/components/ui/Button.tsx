'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'prestige';
  size?: 'default' | 'small';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  className,
  onClick,
  href,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-sans text-[13px] font-medium tracking-[0.01em] rounded-pill flex items-center justify-center transition-all duration-400 ease-smooth min-h-[44px] relative overflow-hidden group';
  const sizeStyles = size === 'small' ? 'px-6 py-2' : 'px-[40px] py-[16px]';

  const variants = {
    primary: 'bg-[#C9A66B] text-[#060508] hover:bg-[#D4B47A] hover:-translate-y-[1.5px] hover:shadow-[0_6px_20px_rgba(201,166,107,0.18),0_0_0_1px_rgba(201,166,107,0.06)] active:scale-[0.97] active:translate-y-0 transition-all duration-100',
    prestige: 'bg-prestige text-[#060508] hover:bg-[#D4B47A] hover:-translate-y-[1.5px] hover:shadow-[0_6px_20px_rgba(196,163,110,0.18),0_0_0_1px_rgba(196,163,110,0.08)] active:scale-[0.97] active:translate-y-0 transition-all duration-100',
    ghost: 'bg-transparent text-[rgba(245,242,237,0.5)] border-[0.5px] border-[rgba(245,242,237,0.06)] hover:text-[#F5F2ED] hover:border-[rgba(201,166,107,0.10)] active:scale-[0.97] relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 hover:before:h-full before:bg-gradient-to-t before:from-[rgba(201,166,107,0.05)] before:to-transparent before:transition-[height] before:duration-[400ms] before:ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden',
  };

  const classes = cn(baseStyles, sizeStyles, variants[variant], className);

  const content = (
    <>
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className={classes}
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={classes}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {content}
    </button>
  );
}
