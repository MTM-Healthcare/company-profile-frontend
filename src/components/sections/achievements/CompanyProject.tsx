'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, stagger, PillBadge } from './Shared';

const projects = [
    {
        title: "Integrated Diagnostic Center Building",
        tag: "Flagship Project",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
        desc: "Smart diagnostic facility project under one roof to improve the accuracy and speed of comprehensive patient medical reporting.",
        featured: true,
    },
    {
        title: "New Inpatient Facility",
        tag: "Project #2",
        img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=300",
        desc: "200-bed capacity with international standards and an integrated service system.",
    },
    {
        title: "Electronic Medical Records",
        tag: "Project #3",
        img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=300",
        desc: "Centralized system integration to accelerate patient service flow across all branches.",
    },
    {
        title: "24-Hour ER Expansion",
        tag: "Project #4",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
        desc: "High-tech emergency unit to handle complex trauma cases.",
    },
];

export function CompanyProject() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            {/* Header */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                <div>
                    <motion.div variants={fadeUp as any} custom={0}><PillBadge className="mb-3">Portfolio</PillBadge></motion.div>
                    <motion.h2 variants={fadeUp as any} custom={0.1} className="font-heading font-black text-4xl md:text-5xl text-brand-dark leading-tight">
                        Our Company<br className="hidden md:block" /> Project
                    </motion.h2>
                </div>
                <motion.button variants={fadeUp as any} custom={0.2} className="group hidden md:inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-blue-100 text-blue-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:border-transparent font-semibold px-7 py-3 rounded-full text-sm transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/25">
                    <a href="/our-achievements" className="flex items-center gap-2">
                        See All Projects
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.button>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                {/* Featured Left */}
                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className="lg:col-span-8 group"
                >
                    <div className="relative w-full h-[320px] md:h-[420px] rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-100/60 border-2 border-white/90 mb-6">
                        <Image
                            src={projects[0].img}
                            alt={projects[0].title}
                            fill
                            className="object-cover transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                        />
                        {/* Base gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                        {/* Floating tag */}
                        <div className="absolute top-6 left-6">
                            <span className="inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                                <Star size={11} className="fill-white" /> {projects[0].tag}
                            </span>
                        </div>
                        {/* Floating title on image */}
                        <div className="absolute bottom-0 inset-x-0 p-8 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <h3 className="font-heading font-black text-2xl text-white drop-shadow-lg">{projects[0].title}</h3>
                        </div>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-brand-dark mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {projects[0].title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-lg">{projects[0].desc}</p>
                </motion.div>

                {/* List Right */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="lg:col-span-4 flex flex-col gap-4"
                >
                    {projects.slice(1).map((proj, i) => (
                        <motion.div
                            key={i}
                            variants={fadeRight}
                            custom={i * 0.1}
                            className="flex gap-4 items-center bg-white/60 backdrop-blur-md p-3.5 rounded-3xl border border-white/80 shadow-sm hover:shadow-xl hover:shadow-blue-100/60 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                        >
                            <div className="w-28 h-20 relative rounded-2xl overflow-hidden shrink-0 border border-blue-50 shadow-sm">
                                <Image src={proj.img} alt={proj.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="inline-block text-[10px] text-blue-500 font-semibold tracking-wider uppercase mb-0.5">{proj.tag}</span>
                                <h4 className="font-heading font-bold text-sm text-brand-dark mb-1 group-hover:text-blue-600 transition-colors leading-snug">{proj.title}</h4>
                                <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">{proj.desc}</p>
                            </div>
                            <div className="shrink-0 w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 opacity-0 group-hover:opacity-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <ArrowRight size={13} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Mobile button */}
            <div className="lg:hidden flex justify-center mt-10">
                <a href="/our-achievements" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-full text-sm shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    See All Projects <ArrowRight size={14} />
                </a>
            </div>
        </section>
    );
}
