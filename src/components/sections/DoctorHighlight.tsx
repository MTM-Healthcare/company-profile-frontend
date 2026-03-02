'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Stethoscope, CalendarCheck, BadgeCheck } from 'lucide-react';

export function DoctorHighlight() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
            <div className="flex flex-col md:flex-row items-center gap-16">

                {/* Image with overlapping card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="md:w-1/2 relative w-full"
                >
                    <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-200/60">
                        <Image
                            src="/dr-hans-dummy.png"
                            alt="Prof. Dr. Hans"
                            fill
                            className="object-cover"
                        />
                        {/* Subtle gradient overlay at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
                    </div>

                    {/* Below Image Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl shadow-blue-100 flex items-start justify-between w-full max-w-lg border border-white/60"
                    >
                        <div className="text-center w-1/2 border-r border-blue-100 px-2 md:px-4">
                            <h3 className="font-heading font-bold text-2xl md:text-3xl text-blue-600 mb-1">TOP 5</h3>
                            <p className="text-[10px] leading-relaxed text-gray-500 uppercase tracking-wider">5th best national doctor awarded directly by IDI in 2025</p>
                        </div>
                        <div className="text-center w-1/2 px-2 md:px-4">
                            <h3 className="font-heading font-bold text-2xl md:text-3xl text-blue-600 mb-1">100+</h3>
                            <p className="text-[10px] leading-relaxed text-gray-500 uppercase tracking-wider">Over 100 internationally recognized researches discussing health</p>
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
                    {/* Section Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
                        <Stethoscope size={13} />
                        Featured Doctor
                    </div>

                    <h2 className="font-heading font-bold text-4xl text-brand-dark mb-2">Prof. Dr. Hans M.D,G</h2>

                    {/* Specialty tag */}
                    <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-5 border border-blue-100">
                        <BadgeCheck size={13} />
                        Neurosurgery Specialist
                    </div>

                    <p className="text-base text-gray-500 mb-4 leading-relaxed">
                        A leading neurosurgery specialist with over 20 years of experience in international hospitals. He has led various advanced medical researches and remains dedicated to providing the best medical solutions for every patient.
                    </p>
                    <p className="text-base text-gray-500 leading-relaxed mb-8">
                        Graduating from a renowned Medical University in Germany, Prof. Hans is frequently invited as a guest speaker at various global health seminars. He believes that empathy and technology are the two main pillars in healing.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
