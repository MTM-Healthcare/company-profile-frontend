'use client';
import Image from 'next/image';
import { CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutHero() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2"
                >
                    <h1 className="font-heading font-extrabold text-[40px] md:text-[52px] lg:text-[64px] text-[#242e4c] mb-6 leading-[1.1] tracking-tight">
                        Pelayanan Kesehatan <br />
                        <span className="text-[#B21F24]">yang Terpercaya</span>
                    </h1>
                    <p className="text-base md:text-lg text-[#242e4c] mb-12 leading-relaxed max-w-[500px] font-medium font-sans">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="flex gap-16 mb-8 mt-4">
                        <div className="flex flex-col">
                            <h2 className="font-heading font-extrabold text-6xl text-[#1a202c]">100+</h2>
                            <p className="text-[12px] text-[#4a5568] font-medium leading-tight mt-3">Kerja sama dengan ratusan<br />petugas kesehatan profesional</p>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-heading font-extrabold text-6xl text-[#1a202c]">25</h2>
                            <p className="text-[12px] text-[#4a5568] font-medium leading-tight mt-3">Pencapaian kesehatan terbaik<br />Se-Indonesia</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-5 text-[13px] font-medium text-[#718096] mt-10">
                        <div className="flex items-center gap-2"><CheckCircle className="text-green-500 w-[18px] h-[18px]" strokeWidth={2} /> Obat Berkualitas</div>
                        <div className="flex items-center gap-2"><CheckCircle className="text-green-500 w-[18px] h-[18px]" strokeWidth={2} /> Harga Terjangkau</div>
                        <div className="flex items-center gap-2"><CheckCircle className="text-green-500 w-[18px] h-[18px]" strokeWidth={2} /> Pelayanan Ramah</div>
                    </div>
                </motion.div>

                {/* Hero Image with floating cards */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:w-1/2 relative w-full mt-16 md:mt-0"
                >
                    <div className="relative rounded-[32px] overflow-hidden w-full max-w-[500px] mx-auto aspect-[4/4.5] shadow-xl">
                        <Image src="/about-hero.png" alt="Nursing Service" fill className="object-cover" />
                    </div>

                    {/* Floating Card 1 */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                        className="absolute bottom-[20%] lg:bottom-[25%] -left-6 md:-left-16 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 z-10"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#e6f6ee] flex items-center justify-center text-[#38a169]">
                            <Star className="w-6 h-6" strokeWidth={2} />
                        </div>
                        <div className="pr-4">
                            <h4 className="font-heading font-extrabold text-[22px] text-[#1a202c] leading-tight">100%</h4>
                            <p className="text-[11px] text-[#718096] font-medium whitespace-nowrap">Kepuasan Pasien</p>
                        </div>
                    </motion.div>

                    {/* Floating Card 2 */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                        className="absolute -bottom-8 right-0 md:-right-8 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 z-10"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#e6f6ee] flex items-center justify-center text-[#38a169]">
                            <Star className="w-6 h-6" strokeWidth={2} />
                        </div>
                        <div className="pr-4">
                            <h4 className="font-heading font-extrabold text-[18px] text-[#1a202c] leading-tight mb-0.5">Profesionalitas</h4>
                            <p className="text-[11px] text-[#718096] font-medium whitespace-nowrap">Kinerja yang sudah terverifikasi profesional</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
