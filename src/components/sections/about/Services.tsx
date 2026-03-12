'use client';
import { motion } from 'framer-motion';
import { Stethoscope, HeartPulse, UserCircle2, Pill, Activity, Users, ShieldAlert } from 'lucide-react';

export function Services() {
    const services = [
        {
            icon: <Stethoscope size={24} />,
            title: "Konsultasi Kesehatan",
            description: "Layanan konsultasi kesehatan dengan tenaga medis profesional untuk membantu Anda mendapatkan penanganan yang tepat sesuai kondisi kesehatan Anda."
        },
        {
            icon: <HeartPulse size={24} />,
            title: "Pemeriksaan Kesehatan",
            description: "Pemeriksaan kesehatan untuk membantu mendeteksi kondisi kesehatan sejak dini dan menjaga kesehatan Anda secara menyeluruh."
        },
        {
            icon: <Stethoscope size={24} />, // Used Stethoscope as closest to stethoscope overlay on pill in ref
            title: "Konsultasi Obat",
            description: "Apoteker kami siap membantu memberikan informasi dan panduan penggunaan obat yang tepat dan aman."
        },
        {
            icon: <Users size={24} />,
            title: "Layanan Apotek",
            description: "Apotek MTM Healthcare menyediakan berbagai obat, vitamin, dan produk kesehatan dengan kualitas yang terjamin dan harga yang terjangkau."
        },
        {
            icon: <Pill size={24} />,
            title: "Produk Kesehatan",
            description: "Berbagai produk kesehatan seperti vitamin, suplemen, dan kebutuhan kesehatan lainnya tersedia untuk membantu menjaga kesehatan Anda dan keluarga."
        },
        {
            icon: <Activity size={24} />,
            title: "Layanan Klinik",
            description: "MTM Healthcare menyediakan layanan klinik untuk berbagai kebutuhan kesehatan masyarakat dengan tenaga medis yang berpengalaman."
        }
    ];

    return (
        <section className="w-full bg-[#CEDFFF] py-24 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-[800px] mx-auto mb-16">
                    <h1 className="font-heading font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-[#1a1a1a] mb-6 tracking-tight">
                        Layanan Kesehatan MTM Healthcare
                    </h1>
                    <p className="text-[14px] md:text-[15px] text-[#1a1a1a] font-medium leading-[1.6]">
                        Kami menyediakan berbagai layanan kesehatan untuk membantu masyarakat mendapatkan perawatan yang mudah diakses, aman, dan terpercaya. Mulai dari layanan konsultasi kesehatan, layanan klinik, hingga kebutuhan obat dan produk kesehatan di apotek.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((svc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-start min-h-[320px] justify-start"
                        >
                            <div className="w-[52px] h-[52px] rounded-2xl bg-[#f1f5f9] flex items-center justify-center text-[#9e2a2b] mb-8 shrink-0">
                                {svc.icon}
                            </div>
                            <h3 className="font-heading font-bold text-[18px] md:text-[20px] text-[#1a1a1a] mb-4">
                                {svc.title}
                            </h3>
                            <p className="text-[12px] md:text-[13px] text-[#8a8a8a] leading-[1.6] font-medium">
                                {svc.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
