'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/animations';
import { socialLinks } from '@/data/socials';

export function ContactIntro() {
    return (
        <section className="max-w-7xl mx-auto px-[45px] -mt-10 md:-mt-14 relative z-20 pb-4">
            <motion.div
                variants={fadeUp as any}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-white/70 backdrop-blur-2xl p-7 md:p-10 rounded-[2.5rem] border border-white/80 shadow-2xl shadow-blue-100/40"
            >
                {/* Left */}
                <div className="md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="relative w-40 h-16 shrink-0 md:mr-4">
                            <Image
                                src="/logo-mtm.png"
                                alt="MTM Pharmacy Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                        Professional and educated, prioritizing patients and customers as number one for health and good cooperation.
                    </p>
                </div>

                {/* Right – social icons (same gradient style as other pages) */}
                <div className="md:w-1/2 flex flex-wrap gap-3 items-center justify-start md:justify-end">
                    {socialLinks.map((s, i) => (
                        <a key={i} href={s.href} className={`w-12 h-12 rounded-2xl ${s.bg} text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 shadow-md`}>
                            <s.Icon size={20} />
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

