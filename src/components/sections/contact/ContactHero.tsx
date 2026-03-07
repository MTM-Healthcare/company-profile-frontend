'use client';
import * as React from 'react';
import Image from 'next/image';
import { Instagram, MessageCircle, Linkedin, Twitter, Facebook } from 'lucide-react';

export function ContactHero() {
    return (
        <div className="w-full flex flex-col pt-20">
            {/* Hero Image */}
            <div className="w-full h-[250px] md:h-[450px] relative">
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                        {/* Left: Logo & Text */}
                        <div className="md:w-3/5">
                            <div className="mb-3">
                                <Image
                                    src="/logo-mtm.png"
                                    alt="Apotek MTM"
                                    width={140}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-[#1a202c] text-sm md:text-[15px] font-medium leading-relaxed max-w-[500px]">
                                Professional and educated, prioritizing patients and customers as number one for health and good cooperation.
                            </p>
                        </div>

                        {/* Right: Social Icons */}
                        <div className="flex gap-4 items-center self-start md:self-center">
                            {/* Instagram */}
                            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform">
                                <Instagram size={24} strokeWidth={2.5} />
                            </a>
                            {/* WhatsApp */}
                            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform">
                                <MessageCircle size={24} strokeWidth={2.5} />
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#0077b5] flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform">
                                <Linkedin size={24} strokeWidth={2.5} fill="currentColor" />
                            </a>
                            {/* X (Twitter) */}
                            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform">
                                <Twitter size={24} strokeWidth={2.5} fill="currentColor" />
                            </a>
                            {/* Facebook */}
                            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#1877f2] flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform">
                                <Facebook size={24} strokeWidth={2.5} fill="currentColor" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
