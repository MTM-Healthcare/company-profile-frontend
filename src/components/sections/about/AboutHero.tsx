'use client';
import Image from 'next/image';
import { CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutHero() {
    return (
        <section className="max-w-7xl mx-auto px-[45px]">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-[55%] lg:w-[50%]"
                >
                    <h1 className="font-heading font-extrabold text-[36px] md:text-[46px] lg:text-[54px] text-[#1a1a1a] mb-4 leading-[1.2] tracking-tight pr-0 lg:pr-10">
                        Layanan Kesehatan <br />
                        <span className="text-[#a52126]">Terpercaya</span> untuk Anda <br />
                        dan Keluarga
                    </h1>
                    <p className="text-[20px] md:text-[24px] font-bold text-[#a52126] mb-8">
                        #TemanSehatKamu
                    </p>
                    
                    <p className="text-[14px] md:text-[15px] font-medium text-[#1a1a1a] leading-[1.6] max-w-[520px] mb-12">
                        MTM Healthcare hadir untuk memberikan layanan kesehatan yang mudah diakses, terpercaya, dan berfokus pada kebutuhan masyarakat. Kami mengembangkan jaringan layanan kesehatan yang mencakup apotek, klinik, serta berbagai solusi kesehatan lainnya untuk membantu masyarakat mendapatkan perawatan yang tepat
                    </p>

                    <div className="flex flex-wrap gap-5 text-[12px] md:text-[13px] font-semibold text-[#8a8a8a] mt-4">
                        <div className="flex items-center gap-2"><CheckCircle className="text-[#3fc979] w-[18px] h-[18px]" strokeWidth={2.5} /> Obat Berkualitas</div>
                        <div className="flex items-center gap-2"><CheckCircle className="text-[#3fc979] w-[18px] h-[18px]" strokeWidth={2.5} /> Harga Terjangkau</div>
                        <div className="flex items-center gap-2"><CheckCircle className="text-[#3fc979] w-[18px] h-[18px]" strokeWidth={2.5} /> Pelayanan Ramah</div>
                    </div>
                </motion.div>

                {/* Hero Image with floating cards */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:w-[45%] lg:w-[50%] relative w-full mt-16 md:mt-0"
                >
                    <div className="relative rounded-[2rem] overflow-hidden w-full h-[380px] md:h-[500px] shadow-sm ml-auto">
                        <Image src="/about-hero.png" alt="Nursing Service" fill className="object-cover object-top" />
                    </div>

                    {/* Floating Card 1 */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                        className="absolute bottom-[20%] lg:bottom-[15%] left-0 md:-left-12 lg:-left-24 bg-white rounded-xl px-4 py-3 md:px-5 md:py-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center gap-4 z-10 border border-gray-100/50"
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#e6f4ea] flex items-center justify-center text-[#3fc979] shrink-0">
                            <Star className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                        <div className="pr-4 md:pr-6 text-left">
                            <h4 className="font-heading font-extrabold text-[16px] md:text-[20px] text-[#1a1a1a] leading-tight mb-1 md:mb-0">100%</h4>
                            <p className="text-[9px] md:text-[11px] text-[#8a8a8a] font-medium whitespace-nowrap">Kepuasan Pasien</p>
                        </div>
                    </motion.div>

                    {/* Floating Card 2 */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                        className="absolute -bottom-6 md:-bottom-8 right-4 md:right-8 bg-white rounded-xl px-4 py-3 md:px-5 md:py-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center gap-4 z-10 border border-gray-100/50"
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#e6f4ea] flex items-center justify-center text-[#3fc979] shrink-0">
                            <Star className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </div>
                        <div className="pr-2 md:pr-4 text-left">
                            <h4 className="font-heading font-extrabold text-[15px] md:text-[18px] text-[#1a1a1a] leading-tight mb-1 md:mb-0.5">Profesionalitas</h4>
                            <p className="text-[9px] md:text-[11px] text-[#8a8a8a] font-medium whitespace-nowrap">Kinerja yang sudah terverifikasi profesional</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}

