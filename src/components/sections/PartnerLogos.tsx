'use client';
import Image from 'next/image';

export function PartnerLogos() {
    return (
        <section className="w-full bg-white/60 backdrop-blur-sm border-y border-blue-50 py-8 relative z-20">
            <div className="max-w-7xl mx-auto px-[45px]">
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
                    <div className="relative h-12 w-36 md:h-16 md:w-48 opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <Image src="/logo-mtm-logo.png" alt="Apotek MTM" fill className="object-contain" />
                    </div>
                    <div className="relative h-12 w-36 md:h-16 md:w-56 opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <Image src="/carousel-1.png" alt="MTM Medical Clinic" fill className="object-contain" />
                    </div>
                    <div className="relative h-12 w-36 md:h-16 md:w-56 opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <Image src="/carousel-2.png" alt="Yayasan Multi Talenta Medika" fill className="object-contain" />
                    </div>
                    <div className="relative h-10 w-32 md:h-14 md:w-44 opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <Image src="/logo-hkm.png" alt="Apotek HKM" fill className="object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
}

