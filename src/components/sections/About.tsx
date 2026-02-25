'use client';
import { motion } from 'framer-motion';
import { ShieldAlert, PlusSquare, Stethoscope, HeartPulse, Building2 } from 'lucide-react'; // Nearest substitutes for FontAwesome shield-heart, hospital

export function About() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:w-3/5"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <ShieldAlert size={20} />
                        </div>
                        <h1 className="font-heading font-bold text-3xl text-brand-dark">MTM Healthcare</h1>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-500">
                        Kami adalah pelopor dalam layanan kesehatan terpadu yang memadukan teknologi medis terkini dengan sentuhan manusiawi. Komitmen kami adalah memberikan perawatan terbaik bagi setiap pasien. Berdiri sejak lama, kami terus berinovasi untuk masa depan kesehatan yang lebih cerah dan mudah diakses oleh semua kalangan.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:w-2/5 flex gap-12 items-center justify-start md:justify-end border-l-2 border-gray-100 pl-8"
                >
                    <div className="text-center">
                        <h2 className="font-heading font-bold text-4xl text-brand-dark">100+</h2>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Dokter Spesialis</p>
                    </div>
                    <div className="text-center">
                        <h2 className="font-heading font-bold text-4xl text-brand-dark">25</h2>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Cabang Klinik</p>
                    </div>
                </motion.div>
            </div>

            {/* Partner Logos Carousel (Full Width) */}
            <div className="w-full bg-brand-blue py-8 mt-24 mb-12 overflow-hidden relative">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] pointer-events-auto">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16 md:gap-24 items-center pl-16 md:pl-24 opacity-70 grayscale hover:grayscale-0 transition duration-500">
                            <div className="flex items-center gap-2 whitespace-nowrap">
                                <PlusSquare className="text-blue-600" size={24} />
                                <span className="font-bold text-lg text-brand-dark">Klinik MTM</span>
                            </div>
                            <div className="flex items-center gap-2 whitespace-nowrap">
                                <Building2 className="text-blue-800" size={24} />
                                <span className="font-bold text-lg text-brand-dark">RSIA Budi Kemuliaan</span>
                            </div>
                            <div className="flex items-center gap-2 whitespace-nowrap">
                                <Stethoscope className="text-green-600" size={24} />
                                <span className="font-bold text-lg text-brand-dark">Health Care Center</span>
                            </div>
                            <div className="flex items-center gap-2 whitespace-nowrap">
                                <HeartPulse className="text-red-500" size={24} />
                                <span className="font-bold text-lg text-brand-dark">Asuransi HKN</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
