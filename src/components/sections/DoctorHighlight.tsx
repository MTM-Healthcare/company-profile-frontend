'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function DoctorHighlight() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            <div className="flex flex-col md:flex-row items-center gap-16">

                {/* Image with overlapping card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:w-1/2 relative w-full"
                >
                    <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1612349317150-e410f624c400?auto=format&fit=crop&q=80&w=800"
                            alt="Prof. Dr. Hans"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Floating Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="absolute -bottom-8 md:-bottom-12 left-1/2 transform -translate-x-1/2 bg-blue-100 rounded-2xl p-6 shadow-lg flex items-center justify-between w-11/12 max-w-sm border border-white"
                    >
                        <div className="text-center w-1/2 border-r border-blue-200">
                            <h3 className="font-heading font-bold text-xl text-brand-dark">TOP 5</h3>
                            <p className="text-[10px] text-gray-600 uppercase">Dokter Terbaik</p>
                        </div>
                        <div className="text-center w-1/2">
                            <h3 className="font-heading font-bold text-xl text-brand-dark">100+</h3>
                            <p className="text-[10px] text-gray-600 uppercase">Operasi Sukses</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:w-1/2 mt-12 md:mt-0"
                >
                    <h2 className="font-heading font-bold text-3xl text-brand-dark mb-4">Prof. Dr. Hans M.D,G</h2>
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                        Dokter spesialis bedah saraf terkemuka dengan pengalaman lebih dari 20 tahun di rumah sakit internasional. Beliau telah memimpin berbagai penelitian medis tingkat lanjut dan terus berdedikasi untuk memberikan solusi medis terbaik bagi setiap pasiennya.
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Lulus dari Universitas Kedokteran ternama di Jerman, Prof. Hans sering diundang sebagai pembicara tamu di berbagai seminar kesehatan global. Beliau percaya bahwa empati dan teknologi adalah dua pilar utama dalam penyembuhan.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
