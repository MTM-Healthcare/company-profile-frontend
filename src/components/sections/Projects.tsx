'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Layers, ArrowRight } from 'lucide-react';

const sideProjects = [
    {
        id: '01',
        description: 'Update of the integrated electronic medical record system between branches for administrative efficiency.',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: '02',
        description: 'Procurement of the latest high-resolution MRI equipment for early detection of neurological diseases.',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: '03',
        description: 'Construction of a healing garden facility for pediatric and elderly patients.',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=200'
    }
];

export function Projects() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            <div className="flex justify-between items-end pb-6 mb-8">
                <div>
                    {/* Section Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-3">
                        <Layers size={13} />
                        Our Projects
                    </div>
                    <h2 className="font-heading font-bold text-4xl text-brand-dark">Company Projects</h2>
                </div>
                <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold bg-blue-600 text-white rounded-full px-5 py-2.5 hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-blue-600/30"
                >
                    View All
                    <ArrowRight size={15} />
                </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Featured Project (Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-8 group cursor-pointer"
                >
                    <div className="relative w-full h-[300px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-xl shadow-blue-100 mb-5">
                        <Image
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                            alt="Facility Construction"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">Project No 04</span>
                            <h3 className="font-heading font-bold text-xl text-white drop-shadow">Integrated ICU Facility</h3>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
                        Construction of an intensive care ward with remote monitoring technology. This project aims to improve medical response to critical patients and minimize unnecessary physical contact in isolation areas.
                    </p>
                </motion.div>

                {/* Project List (Right) */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    {sideProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="flex gap-4 items-start bg-white/70 backdrop-blur-sm p-4 rounded-2xl shadow-md shadow-blue-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-white/60 group"
                        >
                            <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                                <Image
                                    src={project.image}
                                    alt={`Project ${project.id}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-400"
                                />
                            </div>
                            <div className="flex flex-col h-full justify-between">
                                <p className="text-xs text-gray-500 line-clamp-3 mb-2 leading-relaxed">
                                    {project.description}
                                </p>
                                <h4 className="font-heading font-bold text-sm text-blue-600">
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
