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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
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
                            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-[12px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                                <Instagram size={24} strokeWidth={2} />
                            </a>
                            {/* WhatsApp */}
                            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-[12px] bg-[#25d366] flex items-center justify-center text-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                                <MessageCircle size={24} strokeWidth={2} />
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-[12px] bg-[#0077b5] flex items-center justify-center text-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                                <Linkedin size={22} strokeWidth={2} fill="currentColor" className="text-white" />
                            </a>
                            {/* X (Twitter) */}
                            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-[12px] bg-black flex items-center justify-center text-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                                {/* Next.js doesn't have an exact matching X icon in lucide-react natively, so using an alternative icon styling to simulate it */}
                                <Twitter size={22} strokeWidth={0} fill="currentColor" />
                            </a>
                            {/* Facebook */}
                            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-[12px] bg-[#1877f2] flex items-center justify-center text-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                                <Facebook size={26} strokeWidth={0} fill="currentColor" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
