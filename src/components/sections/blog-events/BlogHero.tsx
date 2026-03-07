'use client';
import * as React from 'react';
import Image from 'next/image';

export function BlogHero() {
    return (
        <section className="w-full">
            {/* Hero Image */}
            <div className="w-full h-[300px] md:h-[500px] relative">
                <Image
                    src="https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&q=80&w=2000"
                    alt="Tenaga Medis MTM"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            
            {/* Info Section */}
            <div className="w-full bg-[#e0eafe]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                        {/* Left: Logo & Text */}
                        <div className="md:w-1/2">
                            <div className="mb-4">
                                <Image 
                                    src="/logo-mtm.png" 
                                    alt="Apotek MTM" 
                                    width={160} 
                                    height={50} 
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-[#1a202c] text-sm md:text-[15px] leading-relaxed font-semibold max-w-[500px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        {/* Right: Stats */}
                        <div className="md:w-1/2 flex gap-10 md:gap-16 justify-start md:justify-end mt-4 md:mt-0">
                            <div className="text-center">
                                <h2 className="font-heading font-extrabold text-[#1a202c] tracking-tight mb-2 leading-none text-5xl lg:text-[64px]">
                                    100+
                                </h2>
                                <p className="text-[11px] md:text-xs text-[#1a202c] font-medium leading-relaxed max-w-[180px] mx-auto">
                                    Kerja sama dengan ratusan<br className="hidden md:block" /> petugas kesehatan profesional
                                </p>
                            </div>
                            <div className="text-center">
                                <h2 className="font-heading font-extrabold text-[#1a202c] tracking-tight mb-2 leading-none text-5xl lg:text-[64px]">
                                    25
                                </h2>
                                <p className="text-[11px] md:text-xs text-[#1a202c] font-medium leading-relaxed max-w-[150px] mx-auto">
                                    Pencapaian kesehatan terbaik<br className="hidden md:block" /> Se-Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
