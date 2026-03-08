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
        <section className="w-full py-24 px-4 sm:px-6 lg:px-8 mt-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: TItle & Stats */}
                    <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
                        <h2 className="font-heading font-black text-4xl md:text-5xl text-[#1a202c] mb-6 leading-tight">
                            Company Achievements
                        </h2>
                        <p className="text-[#1a202c]/80 text-sm md:text-base leading-relaxed mb-16 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-16">
                            {/* Stat 1 */}
                            <div className="flex flex-col items-start md:items-center text-left md:text-center">
                                <span className="font-heading font-black text-5xl md:text-6xl text-[#1a202c] mb-3">
                                    1997
                                </span>
                                <p className="text-[13px] md:text-sm text-[#1a202c]/80 font-medium leading-relaxed max-w-[200px]">
                                    Mengabdi untuk kesehatan Indonesia sejak tahun 1997
                                </p>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex flex-col items-start md:items-center text-left md:text-center">
                                <span className="font-heading font-black text-5xl md:text-6xl text-[#1a202c] mb-3">
                                    340
                                </span>
                                <p className="text-[13px] md:text-sm text-[#1a202c]/80 font-medium leading-relaxed max-w-[200px]">
                                    Bekerja sama dengan 340 cabang rumah sakit di seluruh dunia
                                </p>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex flex-col items-start md:items-center text-left md:text-center">
                                <span className="font-heading font-black text-5xl md:text-6xl text-[#1a202c] mb-3">
                                    2005
                                </span>
                                <p className="text-[13px] md:text-sm text-[#1a202c]/80 font-medium leading-relaxed max-w-[200px]">
                                    Mendapatkan seritfikat dari Ikatan Dokter Indonesia sebagai salah satu rumah sakit ter-profesional
                                </p>
                            </div>

                            {/* Stat 4 */}
                            <div className="flex flex-col items-start md:items-center text-left md:text-center">
                                <span className="font-heading font-black text-5xl md:text-6xl text-[#1a202c] mb-3 whitespace-nowrap">
                                    10Jt +
                                </span>
                                <p className="text-[13px] md:text-sm text-[#1a202c]/80 font-medium leading-relaxed max-w-[200px]">
                                    Telah melayani dan mengabdi untuk masyarakat dan memberikan kesehatan yang terbaik
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Masonry Images */}
                    <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Top full-width */}
                            <div className="col-span-2 relative h-48 md:h-60 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-md group">
                                <Image 
                                    src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=1000" 
                                    alt="Hospital Building" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                />
                            </div>
                            
                            {/* Bottom left */}
                            <div className="relative h-56 md:h-72 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-md group">
                                <Image 
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=500" 
                                    alt="Hospital Interior" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                />
                            </div>

                            {/* Bottom right */}
                            <div className="relative h-56 md:h-72 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-md group mt-12">
                                <Image 
                                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=500" 
                                    alt="Hospital Bed" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
