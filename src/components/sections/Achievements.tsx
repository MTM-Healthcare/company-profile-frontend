'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const achievementsData = [
    {
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
        text: "Penghargaan Rumah Sakit dengan Pelayanan Pasien Terbaik tingkat Nasional tahun 2023."
    },
    {
        image: "https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=400",
        text: "Sertifikasi Internasional JCI untuk Standar Keselamatan Pasien dan Manajemen Fasilitas."
    },
    {
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        text: "Pusat riset teknologi bedah non-invasif pertama di Asia Tenggara yang diakui WHO."
    },
    {
        image: "https://images.unsplash.com/photo-1582750433449-648ed127d0f8?auto=format&fit=crop&q=80&w=400",
        text: "Mencapai angka kesembuhan tertinggi untuk program rehabilitasi medis pasca stroke."
    }
];

export function Achievements() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
            <h2 className="font-heading font-bold text-3xl text-brand-dark">Pencapaian Kami</h2>
            <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">Kami bangga menjadi bagian dari perkembangan layanan kesehatan modern. Dedikasi kami membawa hasil yang diakui oleh berbagai institusi kesehatan global.</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {achievementsData.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                    >
                        <div className="relative w-full h-48 rounded-xl mb-4 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={`Pencapaian ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed text-left">
                            {item.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
