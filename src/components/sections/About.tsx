'use client';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export function About() {
    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full py-10 mt-12 md:py-16"
            >
                <div className="max-w-7xl mx-auto px-[20px] md:px-[60px]">
                    <div className="flex flex-col md:flex-row items-center justify-center w-full">
                        {/* Left Side: Logo & Stats */}
                        <div className="flex flex-col gap-8 w-full md:w-1/2 items-center md:items-start md:pr-10 lg:pr-16">
                            {/* Logo */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0">
                                    <Image
                                        src="/logo-mtm-logo.png"
                                        alt="MTM Healthcare Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h2 className="font-heading font-bold text-[2rem] md:text-[2.5rem] text-[#1a1a1a] tracking-tight">MTM Healthcare</h2>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-8 md:gap-10 w-full justify-center">
                                <div className="text-center flex flex-col items-center">
                                    <h3 className="font-heading font-black text-[4rem] md:text-[5rem] leading-none text-[#1A1A1A] mb-2 tracking-tighter">100+</h3>
                                    <p className="text-[12px] md:text-[14px] text-[#1a1a1a] leading-relaxed font-bold max-w-[180px]">
                                        Tenaga Kesehatan Profesional dalam Ekosistem MTM Healthcare
                                    </p>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <h3 className="font-heading font-black text-[4rem] md:text-[5rem] leading-none text-[#1A1A1A] mb-2 tracking-tighter">25+</h3>
                                    <p className="text-[12px] md:text-[14px] text-[#1a1a1a] leading-relaxed font-bold max-w-[180px]">
                                        Program dan Inisiatif Layanan Kesehatan
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-[5px] h-[280px] bg-[#9e2a2b] rounded-full shrink-0 mx-8 lg:mx-24"></div>
                        <div className="block md:hidden h-[5px] w-[2800px] bg-[#9e2a2b] rounded-full shrink-0 my-12 mx-auto"></div>

                        {/* Right Side: Our Clinic */}
                        <div className="flex flex-col gap-6 w-full md:w-1/2 items-center md:items-start md:pl-10 lg:pl-16">
                            <h1 className="font-heading font-bold text-[2rem] md:text-[2.5rem] text-[#1a1a1a] text-center md:text-left w-full">Our Clinic</h1>
                            <ul className="space-y-3 w-full flex flex-col items-center md:items-start">
                                {[
                                    'MTM Medical Clinic',
                                    'Apotek HKM Tangerang',
                                    'Apotek MTM Bekasi',
                                    'Apotek MTM Bintaro'
                                ].map((clinic, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <MapPin className="text-[#c13025] shrink-0" size={20} strokeWidth={2.5} />
                                        <span className="text-sm md:text-[24px] text-[#1a1a1a] font-bold tracking-wide">{clinic}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Partner Logos Carousel */}
            <div className="w-full bg-[#CEDFFF] py-8 mt-24 mb-12 overflow-hidden relative">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] pointer-events-auto">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16 md:gap-24 items-center pl-16 md:pl-24">
                            <div className="relative w-48 md:w-64 h-24 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                <Image src="/carousel-1.png" alt="Partner 1" fill className="object-contain" />
                            </div>
                            <div className="relative w-48 md:w-64 h-24 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                <Image src="/carousel-2.png" alt="Partner 2" fill className="object-contain" />
                            </div>
                            <div className="relative w-48 md:w-64 h-24 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                <Image src="/carousel-3.png" alt="Partner 3" fill className="object-contain" />
                            </div>
                            <div className="relative w-36 md:w-52 h-16 md:h-20 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                                <Image src="/carousel-4.png" alt="Partner 4" fill className="object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

