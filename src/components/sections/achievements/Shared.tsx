'use client';
import * as React from 'react';
import { Variants } from 'framer-motion';

// Animation Variants
export const fadeUp: Variants = { hidden: { opacity: 0, y: 32 }, visible: (d: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] as any } }) };
export const fadeLeft: Variants = { hidden: { opacity: 0, x: -36 }, visible: (d: number = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] as any } }) };
export const fadeRight: Variants = { hidden: { opacity: 0, x: 36 }, visible: (d: number = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] as any } }) };
export const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.10 } } };

export function PillBadge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`inline-flex items-center gap-1.5 bg-blue-100/80 backdrop-blur-sm text-blue-700 text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-blue-200/50 ${className}`}>
            {children}
        </div>
    );
}
