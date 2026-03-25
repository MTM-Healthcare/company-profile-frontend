'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export function OurProjectsHero() {
    return (
        <section className="max-w-7xl mx-auto px-[45px] pt-8 pb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center text-center">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-7 shadow-sm">
                    <Briefcase size={13} className="text-blue-500" /> Our Portfolio
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.1] mb-6 tracking-tight">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Projects</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    A curated showcase of our most impactful healthcare projects — from digital infrastructure to physical expansion and community programs.
                </motion.p>
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
            </motion.div>
        </section>
    );
}
