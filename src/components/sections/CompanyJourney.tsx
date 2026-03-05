'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function CompanyJourney() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-14 mb-16"
            >
                <div className="md:w-[45%] text-left">
                    <h2 className="font-heading font-black text-4xl md:text-5xl text-brand-dark mb-4">
                        Company Journey
                    </h2>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                        Profesional dan berdedikasi, mengutamakan pasien dan
                        pelanggan sebagai prioritas utama untuk kesehatan dan
                        kerja sama yang baik.
                    </p>
                </div>
                <div className="md:w-[45%] text-left">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                        Sejak berdiri, MTM Healthcare terus berinovasi dalam
                        menyediakan layanan farmasi terbaik dengan komitmen
                        terhadap kualitas dan kepercayaan masyarakat.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
