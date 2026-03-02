'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Trophy } from 'lucide-react';

const achievementsData = [
    {
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
        text: "Award for Hospital with Best Patient Service at the National level in 2023."
    },
    {
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
        text: "JCI International Certification for Patient Safety Standards and Facility Management."
    },
    {
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
        text: "The first non-invasive surgical technology research center in Southeast Asia recognized by WHO."
    },
    {
        image: "https://images.unsplash.com/photo-1584308666744-24d5e4a781b4?auto=format&fit=crop&q=80&w=400",
        text: "Achieved the highest recovery rate for post-stroke medical rehabilitation programs."
    }
];

export function Achievements() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 text-center">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                <Trophy size={13} />
                Our Awards
            </div>
            <h2 className="font-heading font-bold text-4xl text-brand-dark">Our Achievements</h2>
            <p className="text-base text-gray-500 mt-3 max-w-2xl mx-auto leading-relaxed">
                We are proud to be part of the development of modern healthcare services. Our dedication brings results recognized by global health institutions.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
                {achievementsData.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md shadow-blue-100/60 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1 transition-all duration-300 border border-white/60 group cursor-pointer"
                    >
                        {/* Image with number badge */}
                        <div className="relative w-full h-48 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={`Achievement ${idx + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                                {String(idx + 1).padStart(2, '0')}
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-xs text-gray-600 leading-relaxed text-left">
                                {item.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
