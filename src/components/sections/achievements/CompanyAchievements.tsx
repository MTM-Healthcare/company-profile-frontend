'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Star, TrendingUp, Users } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, PillBadge } from './Shared';

const stats = [
    { value: "1997", label: "Established", desc: "Becoming the premier health clinic in the West Jakarta area.", icon: <Star size={22} /> },
    { value: "340+", label: "Expert Staff", desc: "Professionals in 25 branches spread across Greater Jakarta.", icon: <Users size={22} /> },
    { value: "2005", label: "Accredited", desc: "Full certification as a private medical service facility.", icon: <Award size={22} /> },
    { value: "10M+", label: "Patients Served", desc: "Total patients with a 98% service satisfaction index.", icon: <TrendingUp size={22} /> },
];

export function CompanyAchievements() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

                {/* Left: Stats */}
                <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
                    <PillBadge className="mb-5"><Award size={13} /> Milestone</PillBadge>
                    <h2 className="font-heading font-black text-4xl md:text-5xl text-brand-dark mb-5 leading-tight">
                        Company<br className="hidden md:block" />{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Achievements</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-md mb-12">
                        These numbers are clear evidence of our dedication. From humble beginnings to becoming a main pillar of health.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp as any}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i * 0.1 + 0.2}
                                className="group relative bg-white/50 backdrop-blur-md border border-white/80 rounded-3xl p-5 hover:shadow-xl hover:shadow-blue-100/60 hover:bg-white hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
                            >
                                {/* Background glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-2xl bg-blue-100/80 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        {s.icon}
                                    </div>
                                    <div className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-blue-800 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300 mb-2">
                                        {s.value}
                                    </div>
                                    <div className="text-xs font-bold text-brand-dark mb-1 tracking-wide">{s.label}</div>
                                    <p className="text-[11px] text-gray-500 leading-relaxed">{s.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Masonry */}
                <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
                    <p className="text-sm text-gray-500 mb-8 hidden lg:block leading-relaxed max-w-md">
                        Collaboration, dedication, and cutting-edge medical technology support form the backbone of our daily operational success at MTM Healthcare.
                    </p>
                    <div className="grid grid-cols-2 gap-4 md:gap-5 bg-gradient-to-br from-white/60 to-blue-50/40 p-5 md:p-6 rounded-[3rem] backdrop-blur-xl border border-white/70 shadow-2xl shadow-blue-100/40">
                        {/* Top full-width */}
                        <div className="col-span-2 rounded-[2.5rem] overflow-hidden h-52 md:h-64 shadow-lg relative group">
                            <Image src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=1000" alt="MTM Hospital Exterior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        {/* Bottom left */}
                        <div className="rounded-[2.5rem] overflow-hidden h-48 shadow-md relative group">
                            <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=500" alt="Hospital Interior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        {/* Bottom right */}
                        <div className="rounded-[2.5rem] overflow-hidden h-48 shadow-md relative group">
                            <Image src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=500" alt="Hospital Bed" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
