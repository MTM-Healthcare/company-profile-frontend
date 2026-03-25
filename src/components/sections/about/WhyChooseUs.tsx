'use client';
import { motion } from 'framer-motion';
import { Award, Shield, Clock, HeartPulse } from 'lucide-react';

export function WhyChooseUs() {
    const reasons = [
        {
            icon: <Award size={20} strokeWidth={2.5} />,
            description: "MTM Healthcare berkomitmen memberikan layanan kesehatan yang profesional, terpercaya, dan mudah diakses oleh masyarakat."
        },
        {
            icon: <Shield size={20} strokeWidth={2.5} />,
            description: "MTM Healthcare bekerja sama dengan tenaga kesehatan profesional untuk memastikan setiap pasien mendapatkan pelayanan yang tepat dan aman."
        },
        {
            icon: <Clock size={20} strokeWidth={2.5} />,
            description: "Jaringan layanan MTM Healthcare tersedia di berbagai wilayah seperti Bekasi, Tangerang, dan Bintaro, sehingga masyarakat dapat lebih mudah mendapatkan layanan kesehatan."
        },
        {
            icon: <HeartPulse size={20} strokeWidth={2.5} />,
            description: "Kami percaya bahwa pelayanan kesehatan yang baik harus disertai dengan komunikasi yang ramah, jelas, dan berfokus pada kebutuhan pasien."
        }
    ];

    return (
        <section className="w-full bg-[#E5EEFF] py-20 pb-28">
            <div className="max-w-7xl mx-auto px-[45px] text-center mt-8">
                <h2 className="font-heading font-extrabold text-[36px] md:text-[42px] lg:text-[48px] text-[#1a1a1a] mb-5 tracking-tight">Mengapa Kami?</h2>
                <p className="text-[14px] md:text-[15px] text-[#1a1a1a] font-medium leading-[1.6] max-w-[700px] mx-auto mb-16">
                    MTM Healthcare berkomitmen memberikan layanan kesehatan yang profesional, terpercaya, dan mudah diakses oleh masyarakat.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-0">
                    {reasons.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-white rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-center min-h-[250px] justify-start"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#9e2a2b] mb-6 shrink-0">
                                {reason.icon}
                            </div>
                            <p className="text-[12px] md:text-[13px] text-[#8a8a8a] leading-[1.7] text-center font-medium mt-1">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

