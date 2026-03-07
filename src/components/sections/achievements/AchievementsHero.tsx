'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Trophy, ArrowRight, ExternalLink } from 'lucide-react';
import { fadeUp, stagger, PillBadge } from './Shared';

const waveImages = [
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600", label: "Prime Service" },
    { src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600", label: "Modern Facilities" },
    { src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600", label: "Expert Staff" },
    { src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600", label: "Research & Innovation" },
    { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600", label: "Trust" },
];

const waveTransforms = [
    { y: '-translate-y-10 md:-translate-y-14', h: 'h-[260px] md:h-[340px]' },
    { y: 'translate-y-4 md:translate-y-6', h: 'h-[220px] md:h-[280px]' },
    { y: 'translate-y-16 md:translate-y-24', h: 'h-[180px] md:h-[240px]' },
    { y: 'translate-y-4 md:translate-y-6', h: 'h-[220px] md:h-[280px]' },
    { y: '-translate-y-10 md:-translate-y-14', h: 'h-[260px] md:h-[340px]' },
];

export function AchievementsHero() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">

            {/* ── Text Intro ── */}
            <motion.div variants={stagger} initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <PillBadge className="mb-5">
                        <Trophy size={13} /> Truly Proud
                    </PillBadge>
                </motion.div>
                <motion.h1
                    variants={fadeUp} custom={0.1}
                    className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-6 leading-[1.1] tracking-tight"
                >
                    Company{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                        Achievements
                    </span>
                </motion.h1>
                <motion.p
                    variants={fadeUp} custom={0.2}
                    className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    MTM Healthcare&apos;s footsteps of success and continuous achievements in dedicating itself to high-standard comprehensive healthcare services.
                </motion.p>
                <motion.div variants={fadeUp} custom={0.3} className="flex items-center justify-center gap-4">
                    <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
                        See More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-blue-100 text-blue-700 px-8 py-3 rounded-full font-semibold text-sm shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
                        Download Profile
                        <ExternalLink size={14} />
                    </button>
                </motion.div>
            </motion.div>

            {/* ── Wave Images Gallery ── */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.4}
                className="flex justify-center items-center gap-2 sm:gap-3 md:gap-5 max-w-6xl mx-auto mt-20 px-2 h-[420px] md:h-[460px]"
            >
                {waveImages.map((item, idx) => (
                    <div
                        key={idx}
                        className={`w-1/5 rounded-[2.5rem] overflow-hidden border-[3px] border-white shadow-2xl shadow-blue-900/15 relative group transform transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:z-10 hover:!translate-y-0 hover:!h-[400px] md:hover:!h-[450px] ${waveTransforms[idx].y} ${waveTransforms[idx].h}`}
                    >
                        <Image
                            src={item.src}
                            alt={item.label}
                            fill
                            className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110"
                            sizes="20vw"
                        />
                        {/* Always-on subtle tint */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-900/10 to-transparent" />
                        {/* Hover glow ring */}
                        <div className="absolute inset-0 ring-2 ring-inset ring-white/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Label badge on hover */}
                        <div className="absolute bottom-0 inset-x-0 px-3 pb-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="block text-center text-[11px] font-semibold text-white drop-shadow-md tracking-wide">
                                {item.label}
                            </span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
