'use client';
import * as React from 'react';
import Image from 'next/image';
import { Instagram, MessageCircle, Linkedin, Twitter, Facebook } from 'lucide-react';

export function ContactHero() {
    return (
        <div className="w-full flex flex-col pt-20">
            {/* Hero Image */}
            <div className="w-full h-[250px] md:h-[400px] relative">
                <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                    alt="MTM Healthcare Building"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Info Bar */}
            <div className="w-full">
                <div className="max-w-7xl mx-auto px-[45px] py-8 md:py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4 border-b border-white/20 pb-4 md:pb-0 md:border-none">

                        {/* Left: Logo & Text */}
                        <div className="md:w-3/5">
                            <div className="mb-5 flex items-center gap-3">
                                <Image
                                    src="/logo-mtm-logo.png"
                                    alt="MTM Healthcare Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                                <span className="font-heading font-semibold text-[20px] text-[#2c3e50] tracking-tight">MTM Healthcare</span>
                            </div>
                            <p className="text-[#1a1a1a] text-[13px] md:text-[14px] font-medium leading-[1.6] max-w-[500px]">
                                Profesional dan berpendidikan, mengutamakan pasien dan pelanggan sebagai prioritas utama untuk kesehatan dan kerja sama yang baik.
                            </p>
                        </div>

                        {/* Right: Social Icons */}
                        <div className="flex gap-4 items-center self-start md:self-center">
                            {/* Instagram */}
                            <a href="https://www.instagram.com/mtm.healthcare/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 relative shrink-0 hover:scale-105 transition-transform">
                                <Image src="/ig-icon.png" alt="Instagram" fill className="object-contain" />
                            </a>
                            {/* WhatsApp */}
                            <a href="#" className="w-10 h-10 md:w-12 md:h-12 relative shrink-0 hover:scale-105 transition-transform">
                                <Image src="/wa-icon.png" alt="WhatsApp" fill className="object-contain" />
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-10 h-10 md:w-12 md:h-12 relative shrink-0 hover:scale-105 transition-transform">
                                <Image src="/linkedin-icon.png" alt="LinkedIn" fill className="object-contain" />
                            </a>
                            {/* TikTok */}
                            <a href="#" className="w-10 h-10 md:w-12 md:h-12 relative shrink-0 hover:scale-105 transition-transform">
                                <Image src="/tiktok-icon.png" alt="TikTok" fill className="object-contain" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
