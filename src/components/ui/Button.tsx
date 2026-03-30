'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'ghost';
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
    const baseStyles = 'font-sans text-[13px] font-medium tracking-[0.01em] rounded-pill flex items-center justify-center transition-all duration-400 ease-smooth min-h-[44px]';
    const sizeStyles = size === 'small' ? 'px-6 py-2' : 'px-[40px] py-[16px]';

    const variants = {
        primary: 'bg-white text-black hover:bg-accent-base hover:-translate-y-[1px] hover:shadow-[0_8px_32px_rgba(201,166,107,0.15)]',
        ghost: 'bg-transparent text-white/60 border-[0.5px] border-white/[0.06] hover:text-white hover:border-white/[0.25] hover:bg-white/[0.03]',
    };

    const classes = cn(baseStyles, sizeStyles, variants[variant], className);

    if (href) {
        return (
            <Link 
                href={href} 
                className={classes}
                onClick={() => {
                    if (onClick) onClick();
                }}
            >
                {children}
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
            {children}
        </button>
    );
}
