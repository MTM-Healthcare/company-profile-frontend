'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '@/utils/animations';

const featuredProject = {
    title: "Project No #1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
};

const sideProjects = [
    {
        title: "Project No #2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Project No #3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Project No #4",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=600",
    },
];

const stagger = { visible: { transition: { staggerChildren: 0.1 } }, hidden: {} };

export function OurAchievementsFeatured() {
    return (
        <section className="w-full pt-16 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* Featured Left */}
                    <motion.div
                        variants={fadeLeft as any}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-7 flex flex-col group cursor-pointer"
                    >
                        <Link href="/our-achievements/detail" className="contents">
                            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[1.5rem] overflow-hidden shadow-md bg-white mb-6 border-2 border-white">
                                <Image
                                    src={featuredProject.src}
                                    alt={featuredProject.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-heading font-bold text-2xl text-[#1a202c] mb-3 group-hover:text-blue-600 transition-colors">
                                {featuredProject.title}
                            </h3>
                            <p className="text-[13px] md:text-sm text-[#1a202c]/80 leading-relaxed font-medium">
                                {featuredProject.desc}
                            </p>
                        </Link>
                    </motion.div>

                    {/* List Right */}
                    <motion.div
                        variants={stagger as any}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col gap-6 justify-between"
                    >
                        {sideProjects.map((proj, i) => (
                            <motion.div
                                key={i}
                                variants={fadeRight as any}
                                custom={i * 0.1}
                                className="flex-1 flex"
                            >
                                <Link href="/our-achievements/detail" className="flex gap-4 items-stretch group cursor-pointer w-full">
                                    <div className="w-32 md:w-40 relative rounded-[1.5rem] overflow-hidden shrink-0 shadow-md bg-white border-2 border-white">
                                        <Image src={proj.src} alt={proj.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center py-2">
                                        <h4 className="font-heading font-bold text-lg text-[#1a202c] mb-1.5 group-hover:text-blue-600 transition-colors">
                                            {proj.title}
                                        </h4>
                                        <p className="text-[10px] md:text-[11px] text-[#1a202c]/80 leading-relaxed font-medium">
                                            {proj.desc}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
