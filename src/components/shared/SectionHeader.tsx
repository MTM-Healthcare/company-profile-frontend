'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/animations';

interface SectionHeaderProps {
    badgeText: string;
    badgeIcon?: ReactNode;
    title: string | ReactNode;
    description?: string;
    align?: 'left' | 'center' | 'right';
    className?: string;
}

export function SectionHeader({ badgeText, badgeIcon, title, description, align = 'left', className = '' }: SectionHeaderProps) {
    const alignClasses = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right md:ml-auto',
    };

    const containerAlignment = alignClasses[align];
    const badgeAlignment = align === 'right' ? 'md:ml-auto' : align === 'center' ? 'mx-auto' : '';

    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col ${containerAlignment} ${className}`}
        >
            <div className={`inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4 w-max ${badgeAlignment}`}>
                {badgeIcon} {badgeText}
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-dark mb-4">
                {title}
            </h2>
            {description && (
                <p className={`text-sm text-gray-500 leading-relaxed max-w-lg ${align === 'center' ? 'mx-auto' : badgeAlignment}`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
}
