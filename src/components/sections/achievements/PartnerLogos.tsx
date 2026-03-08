'use client';
import * as React from 'react';
import Image from 'next/image';

export function PartnerLogos() {
    return (
        <section className="w-full relative">
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
        </section>
    );
}
