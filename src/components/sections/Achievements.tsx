'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Shield, Clock, HeartPulse } from 'lucide-react';
import type { Achievement } from '@/types/cms';

const FALLBACK_ICONS = [Award, Shield, Clock, HeartPulse];

const FALLBACK_ITEMS: Achievement[] = [
    { id: 1, imageUrl: '', text: 'Kualitas Pelayanan Kesehatan Masyarakat yang Tinggi dan Profesional', order: 0 },
    { id: 2, imageUrl: '', text: 'Fasilitas dan Layanan kesehatan yang modern dan kenyamanan pasien', order: 1 },
    { id: 3, imageUrl: '', text: 'Kolaborasi dengan tenaga kesehatan profesional, sebagai standar layanan medis MTM', order: 2 },
    { id: 4, imageUrl: '', text: 'Komitmen kami dalam menghadirkan pelayanan kesehatan yang aman dan terpercaya', order: 3 },
];

interface AchievementsProps {
    items?: Achievement[];
}

export function Achievements({ items = FALLBACK_ITEMS }: AchievementsProps) {
    return (
        <section className="max-w-7xl mx-auto px-[45px] text-center">
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
                {items.map((item, idx) => {
                    const FallbackIcon = FALLBACK_ICONS[idx % FALLBACK_ICONS.length];
                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-center justify-center text-center min-h-[260px]"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#f1f5f9] flex items-center justify-center mb-6 shrink-0 relative overflow-hidden">
                                {item.imageUrl ? (
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.text}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <FallbackIcon className="text-[#9e2a2b]" size={24} strokeWidth={2} />
                                )}
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
