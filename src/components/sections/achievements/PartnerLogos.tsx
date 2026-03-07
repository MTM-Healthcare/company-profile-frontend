'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { stagger } from './Shared';

export function PartnerLogos() {
    return (
        <section className="w-full relative mt-28">
            {/* Glass strip */}
            <div className="absolute inset-0 bg-white/50 backdrop-blur-xl border-y border-white/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-indigo-50/20" />

            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-7xl mx-auto py-12 relative z-10"
            >
                {/* Partner Logos Carousel */}
                <div className="w-full overflow-hidden relative">
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused] pointer-events-auto items-center">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-16 md:gap-24 items-center pl-16 md:pl-24">
                                <div className="relative w-32 md:w-44 h-16 opacity-70 hover:opacity-100 transition-all duration-300">
                                    <Image src="/carousel-1.png" alt="Partner 1" fill className="object-contain" />
                                </div>
                                <div className="relative w-32 md:w-44 h-16 opacity-70 hover:opacity-100 transition-all duration-300">
                                    <Image src="/carousel-2.png" alt="Partner 2" fill className="object-contain" />
                                </div>
                                <div className="relative w-32 md:w-44 h-16 opacity-70 hover:opacity-100 transition-all duration-300">
                                    <Image src="/carousel-3.png" alt="Partner 3" fill className="object-contain" />
                                </div>
                                <div className="relative w-32 md:w-44 h-16 opacity-70 hover:opacity-100 transition-all duration-300">
                                    <Image src="/carousel-4.png" alt="Partner 4" fill className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
