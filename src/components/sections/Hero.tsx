'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden relative shadow-lg"
            >
                <Image
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
                    alt="Rumah Sakit"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>
        </section>
    );
}
