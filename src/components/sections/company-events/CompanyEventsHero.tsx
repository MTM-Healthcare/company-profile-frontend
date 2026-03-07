'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

export function CompanyEventsHero() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center text-center">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-7 shadow-sm">
                    <CalendarDays size={13} className="text-blue-500" /> Events & Activities
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.1] mb-6 tracking-tight">
                    Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Events</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    From community health drives to national symposiums, explore the events that define MTM Healthcare&apos;s commitment to people, health, and community.
                </motion.p>
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
            </motion.div>
        </section>
    );
}
