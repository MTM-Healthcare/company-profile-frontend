'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
        text: "Achieved the highest recovery rate for post-stroke medical rehabilitation programs."
    }
];

export function Achievements() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 text-center">
            {/* Section Badge */}
            <h2 className="font-heading font-bold text-4xl text-brand-dark">This is Our Achievements</h2>
            <p className="text-base text-gray-500 mt-3 max-w-2xl mx-auto leading-relaxed">
                We are proud to be part of the development of modern healthcare services. Our dedication brings results recognized by global health institutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 px-2 md:px-0">
                {achievementsData.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group flex flex-col items-center cursor-pointer"
                    >
                        <Link href="/our-achievements/detail" className="w-full h-full flex flex-col items-center outline-none">
                            {/* Rounded Image Container */}
                            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-gray-100 shadow-sm border-[3px] border-white/40 mb-5 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10 group-hover:border-blue-100/50">
                                <Image
                                    src={item.image}
                                    alt={`Achievement ${idx + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>

                            {/* Centered Text Container */}
                            <div className="w-full text-center">
                                <p className="text-xs md:text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-300 leading-relaxed font-medium px-1">
                                    {item.text}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
