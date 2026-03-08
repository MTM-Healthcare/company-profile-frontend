'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, stagger } from './Shared';

const projects = [
    {
        title: "Project No #1",
        img: "/company-project.png", // using an existing image or fall back to unsplash
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Project No #2",
        img: "/company-project.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Project No #3",
        img: "/company-project.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Project No #4",
        img: "/company-project.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

export function CompanyProject() {
    return (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                    <motion.h2 variants={fadeUp as any} custom={0} className="font-heading font-black text-4xl md:text-5xl text-[#1a202c]">
                        Our Company Project
                    </motion.h2>
                    <motion.button variants={fadeUp as any} custom={0.2} className="bg-[#d0e1fd] hover:bg-[#b8cff2] text-[#1a202c] font-medium px-8 py-2.5 rounded-full shadow-sm transition-colors duration-300">
                        See All Projects
                    </motion.button>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Featured Left */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        className="lg:col-span-7 flex flex-col group cursor-pointer"
                    >
                        <Link href="/our-achievements" className="contents">
                            <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-md bg-white mb-6">
                                <Image
                                    src={projects[0].img}
                                    alt={projects[0].title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-heading font-bold text-2xl text-[#1a202c] mb-3 group-hover:text-blue-600 transition-colors">
                                {projects[0].title}
                            </h3>
                            <p className="text-sm text-[#1a202c]/80 leading-relaxed font-medium">
                                {projects[0].desc}
                            </p>
                        </Link>
                    </motion.div>

                    {/* List Right */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col gap-6 justify-between"
                    >
                        {projects.slice(1).map((proj, i) => (
                            <motion.div
                                key={i}
                                variants={fadeRight}
                                custom={i * 0.1}
                            >
                                <Link href="/our-achievements" className="flex gap-4 items-stretch group cursor-pointer">
                                    <div className="w-40 relative rounded-[1.5rem] overflow-hidden shrink-0 shadow-md bg-white border-2 border-white">
                                        <Image src={proj.img} alt={proj.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <p className="text-[11px] text-[#1a202c]/80 leading-relaxed font-medium mb-2">
                                            {proj.desc}
                                        </p>
                                        <h4 className="font-heading font-bold text-lg text-[#1a202c] group-hover:text-blue-600 transition-colors">
                                            {proj.title}
                                        </h4>
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
