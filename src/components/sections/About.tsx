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
                className="w-full py-14 mt-16"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-24">
                        {/* Left Side: Logo & Stats */}
                        <div className="flex flex-col gap-8 md:w-1/2 items-center md:items-start pl-0 lg:pl-10">
                            {/* Logo */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0">
                                    <Image
                                        src="/logo-mtm-logo.png"
                                        alt="MTM Healthcare Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h2 className="font-heading font-bold text-[1.5rem] md:text-[1.8rem] text-[#1a1a1a] tracking-tight">MTM Healthcare</h2>
                            </div>
                            
                            {/* Stats */}
                            <div className="flex gap-4 lg:gap-10 w-full justify-center md:justify-start pl-0 lg:pl-2">
                                <div className="text-center w-[140px] md:w-[150px]">
                                    <h3 className="font-heading font-black text-[3rem] md:text-[3.5rem] leading-none text-[#1A1A1A] mb-2 tracking-tighter">100+</h3>
                                    <p className="text-[9px] md:text-[10px] text-[#1a1a1a] leading-[1.3] font-medium">
                                        Tenaga Kesehatan Profesional<br/>dalam Ekosistem MTM Healthcare
                                    </p>
                                </div>
                                <div className="text-center w-[140px] md:w-[150px]">
                                    <h3 className="font-heading font-black text-[3rem] md:text-[3.5rem] leading-none text-[#1A1A1A] mb-2 tracking-tighter">25+</h3>
                                    <p className="text-[9px] md:text-[10px] text-[#1a1a1a] leading-[1.3] font-medium">
                                        Program dan Inisiatif Layanan<br/>Kesehatan
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-[4px] h-[110px] bg-[#9e2a2b] rounded-full shrink-0 mt-4"></div>
                        <div className="block md:hidden h-[4px] w-[110px] bg-[#9e2a2b] rounded-full shrink-0 my-4"></div>

                        {/* Right Side: Our Clinic */}
                        <div className="flex flex-col gap-5 md:w-1/3 w-full max-w-sm pr-0 lg:pr-10">
                            <h2 className="font-heading font-bold text-[1.5rem] md:text-[1.8rem] text-[#1a1a1a] text-center md:text-left">Our Clinic</h2>
                            <ul className="space-y-3">
                                {[
                                    'MTM Medical Clinic',
                                    'Apotek HKM Tangerang',
                                    'Apotek MTM Bekasi',
                                    'Apotek MTM Bintaro'
                                ].map((clinic, index) => (
                                    <li key={index} className="flex items-center gap-3 justify-center md:justify-start">
                                        <MapPin className="text-[#c13025] shrink-0" size={20} strokeWidth={2.5} />
                                        <span className="text-sm md:text-[14px] font-semibold text-[#1a1a1a] tracking-wide">{clinic}</span>
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
