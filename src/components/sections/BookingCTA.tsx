'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function BookingCTA() {
    return (
        <section className="w-full relative bg-[#d9e5ff] overflow-hidden py-20 lg:py-24">
            {/* Background shape */}
            <div className="absolute right-0 bottom-0 w-[120%] lg:w-[65%] h-full pointer-events-none z-0 flex justify-end">
                <svg
                    viewBox="0 0 800 1000"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <path
                        fill="#ffffff"
                        d="M 800 0 C 600 0 550 350 300 400 C 100 440 0 700 0 1000 L 800 1000 Z"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#242e4c] mb-6 leading-tight">
                            Pesan Layanan Kesehatan Kami dengan Mudah & Cepat
                        </h2>
                        
                        <p className="text-[#242e4c] font-semibold text-lg mb-4">
                            Booking appointment kini jadi lebih mudah dan cepat.
                        </p>
                        
                        <p className="text-[#242e4c]/80 text-base leading-relaxed mb-10">
                            Didukung oleh petugas kesehatan yang telah terstandarisasi secara nasional serta mengikuti SOP medis dari MTM Health Care, kami memastikan setiap layanan diberikan dengan kualitas, keamanan, dan profesionalisme terbaik.
                        </p>

                        <Link href="/health-service">
                            <button className="bg-[#98141F] hover:bg-[#7a1018] text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-colors duration-300 shadow-md">
                                Pesan Layanan Kesehatan Kami
                            </button>
                        </Link>
                    </motion.div>

                    {/* Right Content - Mockup Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-full aspect-video md:aspect-[4/3] flex items-center justify-center"
                    >
                        <div className="relative w-full h-full max-w-[600px] max-h-[450px]">
                            <Image
                                src="/bookcta.png"
                                alt="Layanan MTM Healthcare"
                                fill
                                className="object-contain drop-shadow-xl"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
