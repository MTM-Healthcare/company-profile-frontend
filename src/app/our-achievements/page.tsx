'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Trophy, Zap } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { fadeUp, fadeLeft, fadeRight } from '@/utils/animations';

// ─── Data ─────────────────────────────────────────────────────────────────────
const featuredProject = {
    title: "Integrated Diagnostic Center Building",
    tag: "Flagship Project",
    desc: "Spearheading the development of our state-of-the-art Integrated Diagnostic Center, combining nuclear medicine, advanced imaging, and lab services under one roof to deliver faster, more accurate diagnoses for patients across West Jakarta.",
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
};

const sideProjects = [
    {
        title: "Pharma Innovation Lab",
        tag: "R&D",
        desc: "Pioneering next-generation drug dispensing systems and compounding technologies, improving medication accuracy and patient safety.",
        src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Digital Health Platform",
        tag: "Technology",
        desc: "Launching an integrated telemedicine and e-prescription platform, reducing wait times and extending healthcare access across Indonesia.",
        src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Community Wellness Hub",
        tag: "CSR Initiative",
        desc: "Building free health-screening clinics and preventive care centers in underserved communities across the greater Jakarta region.",
        src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=600",
    },
];

const gridProjects = [
    {
        title: "Advanced Oncology Suite",
        tag: "Specialist Care",
        desc: "Establishing a comprehensive cancer treatment center with the latest radiotherapy, chemotherapy infusion, and palliative care facilities, serving hundreds of patients annually.",
        src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900",
    },
    {
        title: "Cardiology Center of Excellence",
        tag: "Specialist Care",
        desc: "A fully equipped cardiac catheterization lab and non-invasive heart imaging center, enabling world-class interventional cardiology without leaving West Jakarta.",
        src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900",
    },
    {
        title: "MTM Green Hospital Initiative",
        tag: "Sustainability",
        desc: "Achieving Green Building certification by adopting solar energy, water recycling, and sustainable procurement to reduce our environmental footprint.",
        src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900",
    },
    {
        title: "Pediatric & Maternal Care Wing",
        tag: "Specialized Wing",
        desc: "State-of-the-art pediatric and maternity wards designed with child-friendly environments, specialized neonatal ICUs, and family-centered care protocols.",
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900",
    },
];

// ─── Animation Variants ────────────────────────────────────────────────────────
const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
    hidden: {},
};

// ─── Component ─────────────────────────────────────────────────────────────────
export default function OurAchievementsPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">

            <Navbar />

            <main className="pt-28 pb-24 flex-grow w-full relative z-10">

                {/* ── HERO HEADER ── */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center text-center"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-7 shadow-sm"
                        >
                            <Trophy size={13} className="text-blue-500" />
                            Our Portfolio
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.1] mb-6 tracking-tight"
                        >
                            Company{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                                Achievements
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed"
                        >
                            Celebrating milestones of dedication and innovation in healthcare. Every project here reflects our commitment to a healthier, more accessible future for all.
                        </motion.p>

                        {/* Decorative divider */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-10 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        />
                    </motion.div>
                </section>

                {/* ── FEATURED + SIDE LIST ── */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

                        {/* Featured Project */}
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:col-span-7 flex flex-col group cursor-pointer"
                        >
                            <div className="w-full h-[320px] md:h-[430px] rounded-[2.5rem] overflow-hidden mb-7 relative shadow-2xl shadow-blue-100/60 border border-white/80">
                                <Image
                                    src={featuredProject.src}
                                    alt={featuredProject.title}
                                    fill
                                    priority
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/5 to-transparent" />
                                {/* Floating badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                                        <Star size={11} className="fill-white" />
                                        {featuredProject.tag}
                                    </span>
                                </div>
                                {/* Hover title */}
                                <div className="absolute bottom-0 inset-x-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <h3 className="font-heading font-black text-white text-xl drop-shadow-lg">{featuredProject.title}</h3>
                                </div>
                            </div>
                            <h3 className="font-heading font-bold text-2xl md:text-3xl text-brand-dark mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                                {featuredProject.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                                {featuredProject.desc}
                            </p>
                            <div className="mt-5 flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                                Read more <ArrowRight size={15} />
                            </div>
                        </motion.div>

                        {/* Side List */}
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:col-span-5 flex flex-col gap-5 justify-between"
                        >
                            {sideProjects.map((proj, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeRight}
                                    custom={i * 0.1}
                                    className="flex flex-col sm:flex-row gap-4 items-center bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-white/90 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                                >
                                    <div className="w-full sm:w-36 h-32 relative rounded-2xl overflow-hidden shrink-0 border border-blue-50 shadow-sm">
                                        <Image
                                            src={proj.src}
                                            alt={proj.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-grow py-1 min-w-0">
                                        <span className="inline-block text-[10px] text-blue-500 font-bold tracking-widest uppercase mb-1">{proj.tag}</span>
                                        <h4 className="font-heading font-bold text-base text-brand-dark mb-2 group-hover:text-blue-600 transition-colors leading-snug">{proj.title}</h4>
                                        <p className="text-[11px] text-gray-500 line-clamp-3 leading-relaxed">{proj.desc}</p>
                                    </div>
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 opacity-0 group-hover:opacity-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 self-center">
                                        <ArrowRight size={14} />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </section>

                {/* ── SECTION DIVIDER ── */}
                <div className="relative w-full my-4 mb-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-blue-50/60 to-indigo-50/20 border-y border-blue-100/40" />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">Our Impact</p>
                            <h2 className="font-heading font-black text-2xl md:text-3xl text-brand-dark">More Projects & Initiatives</h2>
                        </div>
                        <p className="text-sm text-gray-500 max-w-md leading-relaxed md:text-right">
                            Each project below represents a cornerstone of our mission to deliver world-class healthcare services to our community.
                        </p>
                    </div>
                </div>

                {/* ── 2-COLUMN GRID ── */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {gridProjects.map((proj, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={idx * 0.1}
                                className="flex flex-col group cursor-pointer"
                            >
                                <div className="w-full h-[280px] md:h-[360px] rounded-[2.5rem] overflow-hidden mb-7 relative border border-white/80 shadow-xl shadow-blue-100/40">
                                    <Image
                                        src={proj.src}
                                        alt={proj.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {/* Tag */}
                                    <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-blue-700 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm tracking-wide uppercase">
                                            <Zap size={9} className="fill-blue-500 text-blue-500" />
                                            {proj.tag}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="font-heading font-bold text-2xl text-brand-dark mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                                    {proj.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {proj.desc}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                                    Read more <ArrowRight size={15} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
