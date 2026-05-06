'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
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
    const baseStyles = 'font-sans text-[13px] font-medium tracking-[0.01em] rounded-pill flex items-center justify-center transition-all duration-400 ease-smooth min-h-[44px] relative overflow-hidden group';
    const sizeStyles = size === 'small' ? 'px-6 py-2' : 'px-[40px] py-[16px]';

    const variants = {
        primary: 'bg-[#C9A66B] text-[#030303] hover:bg-[#D4B47A] hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(201,166,107,0.25),0_0_0_1px_rgba(201,166,107,0.1)] active:scale-[0.97] active:translate-y-0 active:shadow-sm',
        ghost: 'bg-transparent text-[rgba(245,242,237,0.5)] border-[0.5px] border-[rgba(245,242,237,0.08)] hover:text-[#F5F2ED] hover:border-[rgba(201,166,107,0.15)] active:scale-[0.97]',
    };

    const classes = cn(baseStyles, sizeStyles, variants[variant], className);

    const content = (
        <>
            {variant === 'ghost' && (
                <div className="absolute bottom-0 left-0 width-full h-0 bg-gradient-to-t from-[rgba(201,166,107,0.05)] to-transparent transition-all duration-500 ease-smooth group-hover:h-full" />
            )}
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
