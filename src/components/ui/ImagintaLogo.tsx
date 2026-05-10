'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ImagintaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSloganMobile?: boolean;
}

const DIGITAL_CHARS = "01<>[]{}/\\|_#X+=".split('');
const SLOGAN = "Architecting Digital Intelligence";

function CipherLetter({ char, isLooping }: { char: string, isLooping: boolean }) {
  const [displayChar, setDisplayChar] = useState(char);
  const [isCiphers, setIsCiphers] = useState(false);

  useEffect(() => {
    if (!isLooping) return;

    const runCipher = async () => {
      await new Promise(resolve => setTimeout(resolve, Math.random() * 15000 + 10000));
      
      setIsCiphers(true);
      let iterations = 0;
      const maxIterations = 3;
      
      const interval = setInterval(() => {
        setDisplayChar(DIGITAL_CHARS[Math.floor(Math.random() * DIGITAL_CHARS.length)]);
        iterations++;
        
        if (iterations >= maxIterations) {
          clearInterval(interval);
          setDisplayChar(char);
          setIsCiphers(false);
          runCipher();
        }
      }, 150);
    };

    const timer = setTimeout(runCipher, 5000);
    return () => clearTimeout(timer);
  }, [char, isLooping]);

  return (
    <motion.span
      className={cn(
        "inline-block transition-colors duration-500",
        isCiphers ? "text-accent-base" : "text-[#F5F2ED]"
      )}
    >
      {displayChar}
    </motion.span>
  );
}

export function ImagintaLogo({ className, size = 'md', showSloganMobile = false }: ImagintaLogoProps) {
  const sizes = {
    sm: { text: 'text-[14px]', slogan: 'text-[6px]', gap: 'gap-1' },
    md: { text: 'text-[18px]', slogan: 'text-[7px]', gap: 'gap-1.5' },
    lg: { text: 'text-[24px]', slogan: 'text-[8px]', gap: 'gap-2' },
  };

  const currentSize = sizes[size];
  const wordmark = "IMAGINTA";

  return (
    <div className={cn("flex flex-col group cursor-pointer", className)}>
      <div className="flex items-center">
        {/* TYPOGRAPHY CORE */}
        <motion.div 
          className="relative flex items-center"
          animate={{
            letterSpacing: ["0.05em", "0.15em", "0.05em"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex font-bold uppercase tracking-tighter">
            {wordmark.split('').map((char, i) => (
              <CipherLetter 
                key={i} 
                char={char} 
                isLooping={true} 
              />
            ))}
            
            {/* THE INTELLIGENT POINT */}
            <div className="relative flex items-center ml-1">
              <motion.span 
                className={cn("text-accent-base font-bold", currentSize.text)}
                animate={{
                  opacity: [1, 0.4, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                .
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SLOGAN WITH STAGGERED REVEAL */}
      <div className={cn(showSloganMobile ? "flex" : "hidden md:flex", "overflow-hidden", currentSize.slogan)}>
        <motion.div 
          className="flex whitespace-nowrap opacity-40 group-hover:opacity-100 transition-opacity duration-500"
          initial="initial"
          animate="animate"
        >
          {SLOGAN.split('').map((char, i) => (
            <motion.span
              key={i}
              className="font-mono uppercase tracking-[0.2em] text-[#F5F2ED]"
              variants={{
                initial: { opacity: 0, y: 5 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 1.2 + (i * 0.02), duration: 0.8 } 
                }
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
