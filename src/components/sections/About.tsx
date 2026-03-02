'use client';
import { motion } from 'framer-motion';
import { ShieldAlert, PlusSquare, Stethoscope, HeartPulse, Building2 } from 'lucide-react';
import Image from 'next/image';

export function About() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-14">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-3/5"
                >
                    {/* Section Badge */}

                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-7">
                        <div className="relative w-40 h-16 shrink-0 ">
                            <Image
                                src="/logo-mtm-logo.png"
                                alt="MTM Pharmacy Logo"
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-brand-dark leading-tight border-l-0 md:border-l-2 md:border-blue-100 md:pl-6 py-1">
                            MTM Healthcare
                        </h1>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed text-gray-500 max-w-2xl">
                        We are pioneers in integrated healthcare services that combine the latest medical technology with a human touch. Our commitment is to provide the best care for every patient. Established long ago, we continue to innovate for a brighter and more accessible healthcare future for all.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:w-2/5 flex gap-8 sm:gap-12 items-center justify-start lg:justify-end border-t-2 lg:border-t-0 lg:border-l-2 border-blue-100/50 pt-8 lg:pt-0 lg:pl-12 w-full lg:w-auto"
                >
                    <div className="text-left md:text-center">
                        <h2 className="font-heading font-bold text-5xl md:text-6xl text-blue-600 drop-shadow-sm mb-1">100+</h2>
                        <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mt-2">Collaboration with hundreds of professional healthcare workers</p>
                    </div>
                    <div className="text-left md:text-center">
                        <h2 className="font-heading font-bold text-5xl md:text-6xl text-blue-600 drop-shadow-sm mb-1">25</h2>
                        <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mt-2">Best health achievements across Indonesia</p>
                    </div>
                </motion.div>
            </div>

            {/* Partner Logos Carousel */}
            <div className="w-full bg-white/60 backdrop-blur-sm border border-blue-50 py-8 mt-24 mb-12 overflow-hidden relative rounded-2xl shadow-sm">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] pointer-events-auto">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16 md:gap-24 items-center pl-16 md:pl-24">
                            <div className="relative w-32 md:w-44 h-16 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                <Image src="/carousel-1.png" alt="Partner 1" fill className="object-contain" />
                            </div>
                            <div className="relative w-32 md:w-44 h-16 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                <Image src="/carousel-2.png" alt="Partner 2" fill className="object-contain" />
                            </div>
                            <div className="relative w-32 md:w-44 h-16 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                <Image src="/carousel-3.png" alt="Partner 3" fill className="object-contain" />
                            </div>
                            <div className="relative w-32 md:w-44 h-16 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                <Image src="/carousel-4.png" alt="Partner 4" fill className="object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
