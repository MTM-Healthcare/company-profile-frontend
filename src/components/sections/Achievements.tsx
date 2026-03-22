'use client';
import { motion } from 'framer-motion';
import { Award, Shield, Clock, HeartPulse } from 'lucide-react';

const achievementsData = [
    {
        icon: Award,
        text: "Kualitas Pelayanan Kesehatan Masyarakat yang Tinggi dan Profesional"
    },
    {
        icon: Shield,
        text: "Fasilitas dan Layanan kesehatan yang modern dan kenyamanan pasien"
    },
    {
        icon: Clock,
        text: "Kolaborasi dengan tenaga kesehatan profesional, sebagai standar layanan medis MTM"
    },
    {
        icon: HeartPulse,
        text: "Komitmen kami dalam menghadirkan pelayanan kesehatan yang aman dan terpercaya"
    }
];

export function Achievements() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Header Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto mb-16"
            >
                <h1 className="font-heading font-bold text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                    Kepercayaan yang Telah Kami Bangun
                </h1>
                <h2 className="text-[#1a1a1a] text-[14px] md:text-[15px] leading-[1.6] font-medium">
                    MTM Healthcare terus berkomitmen menghadirkan layanan kesehatan yang berkualitas, profesional, dan terpercaya. Berbagai pencapaian ini menjadi bukti komitmen kami dalam memberikan pelayanan kesehatan terbaik bagi masyarakat.
                </h2>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-0">
                {achievementsData.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-center justify-center text-center min-h-[260px]"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#f1f5f9] flex items-center justify-center mb-6 shrink-0">
                                <Icon className="text-[#9e2a2b]" size={24} strokeWidth={2} />
                            </div>
                            <p className="text-[13px] text-gray-500 font-medium leading-[1.6]">
                                {item.text}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
