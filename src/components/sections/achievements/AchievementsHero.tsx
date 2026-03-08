'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from './Shared';

// Using the doctor image provided
const mockImage = "/achievement-hero-doctor.png";
const waveImages = Array(5).fill({ src: mockImage, label: "Doctor" });

// V-Shape styling classes
const waveTransforms = [
    { margin: 'mt-0' },          // Far left (Highest)
    { margin: 'mt-16' },         // Mid left (Lower)
    { margin: 'mt-32' },         // Center (Lowest)
    { margin: 'mt-16' },         // Mid right (Lower)
    { margin: 'mt-0' },          // Far right (Highest)
];

export function AchievementsHero() {
    return (
        <section className="w-full pt-32 pb-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                {/* ── Text Intro ── */}
                <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center">
                    <motion.h1
                        variants={fadeUp} custom={0}
                        className="font-heading font-extrabold text-[#1a202c] text-4xl md:text-5xl lg:text-[54px] mb-4 tracking-tight"
                    >
                        Company Achievements
                    </motion.h1>
                    <motion.p
                        variants={fadeUp} custom={0.1}
                        className="text-[13px] md:text-sm text-[#1a202c] font-medium max-w-2xl mx-auto mb-6 leading-relaxed"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </motion.p>
                    <motion.div variants={fadeUp} custom={0.2}>
                        <button className="bg-[#c2d6ff] text-[#1a202c] px-10 py-2.5 rounded-full font-bold text-[15px] shadow-sm hover:bg-[#a6c3ff] transition-colors duration-300">
                            See More
                        </button>
                    </motion.div>
                </motion.div>

                {/* ── Image Gallery (V-Shape) ── */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center items-start gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto mt-16 md:mt-24 px-2"
                >
                    {waveImages.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { 
                                    opacity: 1, 
                                    y: 0, 
                                    transition: { 
                                        duration: 0.8, 
                                        delay: 0.4 + (idx * 0.15), 
                                        ease: [0.22, 1, 0.36, 1] 
                                    } 
                                }
                            }}
                            className={`w-1/5 relative rounded-[2rem] overflow-hidden shadow-md shadow-blue-900/5 aspect-[3/4.5] group transition-all duration-500 hover:-translate-y-4 hover:shadow-xl hover:shadow-blue-900/15 ${waveTransforms[idx].margin}`}
                        >
                            <Image
                                src={item.src}
                                alt={item.label}
                                fill
                                className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110"
                                sizes="(max-width: 768px) 20vw, 20vw"
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
