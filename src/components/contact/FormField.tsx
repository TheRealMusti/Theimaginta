'use client';

import React, { useState, useId } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FormFieldProps {
    label: string;
    id?: string;
    name: string;
    type?: string;
    required?: boolean;
    autoComplete?: string;
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    error?: string;
    isValid?: boolean;
    maxLength?: number;
    rows?: number;
    as?: 'input' | 'textarea';
    placeholder?: string;
}

export function FormField({
    label,
    id,
    name,
    type = 'text',
    required = false,
    autoComplete,
    value,
    onChange,
    error,
    isValid,
    maxLength,
    rows = 4,
    as = 'input',
    placeholder,
}: FormFieldProps) {
    const [isFocused, setIsFocused] = useState(false);
    const generatedId = useId();
    const fieldId = id || generatedId;
    const errorId = `${fieldId}-error`;
    const hasValue = value.length > 0;
    const isFloated = isFocused || hasValue;

    const sharedClasses = cn(
        'w-full bg-transparent border-0 border-b border-[rgba(245,242,237,0.08)]',
        'py-[14px] font-sans text-[15px] text-white',
        'placeholder:text-white/20',
        'focus:outline-none transition-colors duration-400',
        'min-text-[16px]',
        error && 'border-[rgba(239,68,68,0.4)]'
    );

    const inputStyle: React.CSSProperties = { fontSize: '16px' };

    return (
        <div className="relative">
            {/* Screen-reader label */}
            <label htmlFor={fieldId} className="sr-only">
                {label}
                {required && ' (required)'}
            </label>

            {/* Floating decorative label */}
            <span
                aria-hidden="true"
                className={cn(
                    'absolute left-0 pointer-events-none transition-all duration-300',
                    'font-sans',
                    isFloated
                        ? 'top-[-8px] text-[10px] font-medium tracking-[0.16em] uppercase text-accent-base'
                        : 'top-[14px] text-[15px] text-white/35'
                )}
            >
                {label}
            </span>

            {/* Field */}
            {as === 'textarea' ? (
                <textarea
                    id={fieldId}
                    name={name}
                    required={required}
                    autoComplete={autoComplete}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    rows={rows}
                    maxLength={maxLength}
                    placeholder={isFloated ? placeholder : undefined}
                    className={cn(sharedClasses, 'resize-none')}
                    style={inputStyle}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorId : undefined}
                />
            ) : (
                <input
                    id={fieldId}
                    name={name}
                    type={type}
                    required={required}
                    autoComplete={autoComplete}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={isFloated ? placeholder : undefined}
                    className={sharedClasses}
                    style={inputStyle}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorId : undefined}
                />
            )}

            {/* Focus underline */}
            <span
                className={cn(
                    'absolute bottom-0 left-0 h-[1.5px] origin-left transition-transform duration-400',
                    error ? 'bg-[rgba(239,68,68,0.6)]' : 'bg-accent-base',
                    isFocused ? 'scale-x-100' : 'scale-x-0'
                )}
                style={{ width: '100%' }}
                aria-hidden="true"
            />

            {/* Valid checkmark */}
            {isValid && !error && hasValue && (
                <span
                    className="absolute right-0 top-[14px] text-[#34D399]/50 animate-in fade-in duration-300"
                    aria-hidden="true"
                >
                    <Check size={14} />
                </span>
            )}

            {/* Error message */}
            {error && (
                <p
                    id={errorId}
                    className="mt-[6px] font-sans text-[13px] text-[rgba(239,68,68,0.8)]"
                    role="alert"
                >
                    {error}
                </p>
            )}

            {/* Character counter for textarea */}
            {as === 'textarea' && maxLength && (
                <span
                    className="absolute right-0 bottom-[-22px] font-sans text-[10px] font-medium tracking-[0.16em] uppercase text-white/20"
                    aria-hidden="true"
                >
                    {value.length} / {maxLength}
                </span>
            )}
        </div>
    );
}
