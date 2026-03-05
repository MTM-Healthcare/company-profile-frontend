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
                    src="/hero-home.png"
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

                </motion.div>
            </motion.div>
        </section>
    );
}
