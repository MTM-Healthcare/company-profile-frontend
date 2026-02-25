'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const sideProjects = [
    {
        id: '01',
        description: 'Pembaruan sistem rekam medis elektronik terintegrasi antar cabang untuk efisiensi administrasi.',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: '02',
        description: 'Pengadaan alat MRI terbaru dengan resolusi tinggi untuk deteksi dini penyakit saraf.',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: '03',
        description: 'Pembangunan fasilitas taman penyembuhan (healing garden) untuk pasien anak dan lansia.',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=200'
    }
];

export function Projects() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            <div className="flex justify-between items-end border-b border-gray-200 pb-4 mb-8">
                <h2 className="font-heading font-bold text-3xl text-brand-dark">Proyek Perusahaan</h2>
                <a href="#" className="text-sm font-medium border border-gray-300 rounded-full px-4 py-1.5 hover:bg-gray-50 transition text-brand-text">
                    Lihat Semua
                </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Featured Project (Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-8"
                >
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-sm mb-6">
                        <Image
                            src="https://images.unsplash.com/photo-1538108149393-cebb47acddb2?auto=format&fit=crop&q=80&w=800"
                            alt="Pembangunan Fasilitas"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-dark mb-2">Project No 04.</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
                        Pembangunan bangsal perawatan intensif dengan teknologi pemantauan jarak jauh. Proyek ini bertujuan untuk meningkatkan respons medis terhadap pasien kritis serta meminimalisir kontak fisik yang tidak perlu di area isolasi.
                    </p>
                </motion.div>

                {/* Project List (Right) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {sideProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="flex gap-4 items-start bg-white p-3 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
                        >
                            <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                                <Image
                                    src={project.image}
                                    alt={`Project ${project.id}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col h-full justify-between">
                                <p className="text-[10px] text-gray-500 line-clamp-3 mb-2 leading-relaxed">
                                    {project.description}
                                </p>
                                <h4 className="font-heading font-bold text-sm text-brand-dark">
                                    Project No {project.id}.
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
