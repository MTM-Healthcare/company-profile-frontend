'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck } from 'lucide-react';

export function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full h-[460px] md:h-[560px] rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-blue-200/50"
            >
                <Image
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
                    alt="MTM Healthcare Hospital"
                    fill
                    priority
                    className="object-cover scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Hero Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="absolute bottom-10 left-8 md:left-12 right-8 md:right-auto max-w-xl"
                >
                    <div className="relative w-72 md:w-96 h-28 mb-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 shadow-xl shadow-black/10">
                        <Image
                            src="/logo-mtm-healthcare.png"
                            alt="MTM Healthcare Logo"
                            fill
                            className="object-contain object-left px-4"
                        />
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-full text-sm border border-white/30 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Learn More
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
