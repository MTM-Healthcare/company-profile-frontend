'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Star, TrendingUp, Users, Instagram, Linkedin, Twitter, Facebook, MessageCircle, MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink, Trophy } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// ─── Data ────────────────────────────────────────────────────────────────────

const waveImages = [
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600", label: "Prime Service" },
    { src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600", label: "Modern Facilities" },
    { src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600", label: "Expert Staff" },
    { src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600", label: "Research & Innovation" },
    { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600", label: "Trust" },
];

const waveTransforms = [
    { y: '-translate-y-10 md:-translate-y-14', h: 'h-[260px] md:h-[340px]' },
    { y: 'translate-y-4 md:translate-y-6', h: 'h-[220px] md:h-[280px]' },
    { y: 'translate-y-16 md:translate-y-24', h: 'h-[180px] md:h-[240px]' },
    { y: 'translate-y-4 md:translate-y-6', h: 'h-[220px] md:h-[280px]' },
    { y: '-translate-y-10 md:-translate-y-14', h: 'h-[260px] md:h-[340px]' },
];

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

const stats = [
    { value: "1997", label: "Established", desc: "Becoming the premier health clinic in the West Jakarta area.", icon: <Star size={22} /> },
    { value: "340+", label: "Expert Staff", desc: "Professionals in 25 branches spread across Greater Jakarta.", icon: <Users size={22} /> },
    { value: "2005", label: "Accredited", desc: "Full certification as a private medical service facility.", icon: <Award size={22} /> },
    { value: "10M+", label: "Patients Served", desc: "Total patients with a 98% service satisfaction index.", icon: <TrendingUp size={22} /> },
];

const partners = [
    { name: "APOTEK\nMTM", sub: "", icon: "💊", color: "text-red-600", border: "border-red-200", bg: "bg-red-50" },
    { name: "MTM Healthcare", sub: "", icon: "❤️", color: "text-rose-600", border: "border-rose-200", bg: "bg-rose-50" },
    { name: "YAYASAN\nMULTI TALENTA MEDIKA", sub: "", icon: "🏥", color: "text-blue-700", border: "border-blue-200", bg: "bg-blue-50" },
    { name: "Apotek\nHKM", sub: "", icon: "➕", color: "text-green-600", border: "border-green-200", bg: "bg-green-50" },
];

const contactInfo = [
    { icon: <MapPin size={18} />, label: 'Headquarters', content: 'Letjen S. Parman St No.1, RT.6/RW.16, Tomang, Grogol petamburan, West Jakarta City, Jakarta 11440' },
    { icon: <Phone size={18} />, label: '24/7 Call Center', content: '1500 - MTM (686)' },
    { icon: <Mail size={18} />, label: 'Email', content: 'cs@mtmhealthcare.id' },
    { icon: <Clock size={18} />, label: 'Operating Hours', content: 'Monday – Friday, 08:00 AM – 05:00 PM' },
];

const socials = [
    { icon: <Instagram size={18} />, bg: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600', label: 'Instagram' },
    { icon: <MessageCircle size={18} />, bg: 'bg-gradient-to-br from-green-400 to-green-600', label: 'WhatsApp' },
    { icon: <Linkedin size={18} />, bg: 'bg-gradient-to-br from-blue-500 to-blue-700', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, bg: 'bg-gradient-to-br from-slate-600 to-slate-900', label: 'Twitter' },
    { icon: <Facebook size={18} />, bg: 'bg-gradient-to-br from-blue-600 to-blue-800', label: 'Facebook' },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

import { Variants } from 'framer-motion';

const fadeUp: Variants = { hidden: { opacity: 0, y: 32 }, visible: (d: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] as any } }) };
const fadeLeft: Variants = { hidden: { opacity: 0, x: -36 }, visible: (d: number = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] as any } }) };
const fadeRight: Variants = { hidden: { opacity: 0, x: 36 }, visible: (d: number = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] as any } }) };
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.10 } } };

// ─── Component ────────────────────────────────────────────────────────────────

function PillBadge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`inline-flex items-center gap-1.5 bg-blue-100/80 backdrop-blur-sm text-blue-700 text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-blue-200/50 ${className}`}>
            {children}
        </div>
    );
}

export default function AchievementsPage() {

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-1 w-full relative z-10 pt-32 pb-24">

                {/* ════════════════════════════════════════════
                    1. HERO — Company Achievements
                ════════════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">

                    {/* ── Text Intro ── */}
                    <motion.div variants={stagger} initial="hidden" animate="visible">
                        <motion.div variants={fadeUp} custom={0}>
                            <PillBadge className="mb-5">
                                <Trophy size={13} /> Truly Proud
                            </PillBadge>
                        </motion.div>
                        <motion.h1
                            variants={fadeUp} custom={0.1}
                            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-6 leading-[1.1] tracking-tight"
                        >
                            Company{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                                Achievements
                            </span>
                        </motion.h1>
                        <motion.p
                            variants={fadeUp} custom={0.2}
                            className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            MTM Healthcare&apos;s footsteps of success and continuous achievements in dedicating itself to high-standard comprehensive healthcare services.
                        </motion.p>
                        <motion.div variants={fadeUp} custom={0.3} className="flex items-center justify-center gap-4">
                            <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
                                See More
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-blue-100 text-blue-700 px-8 py-3 rounded-full font-semibold text-sm shadow-sm hover:shadow-md hover:bg-white transition-all duration-300">
                                Download Profile
                                <ExternalLink size={14} />
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* ── Wave Images Gallery ── */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0.4}
                        className="flex justify-center items-center gap-2 sm:gap-3 md:gap-5 max-w-6xl mx-auto mt-20 px-2 h-[420px] md:h-[460px]"
                    >
                        {waveImages.map((item, idx) => (
                            <div
                                key={idx}
                                className={`w-1/5 rounded-[2.5rem] overflow-hidden border-[3px] border-white shadow-2xl shadow-blue-900/15 relative group transform transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:z-10 hover:!translate-y-0 hover:!h-[400px] md:hover:!h-[450px] ${waveTransforms[idx].y} ${waveTransforms[idx].h}`}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.label}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110"
                                    sizes="20vw"
                                />
                                {/* Always-on subtle tint */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-900/10 to-transparent" />
                                {/* Hover glow ring */}
                                <div className="absolute inset-0 ring-2 ring-inset ring-white/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                {/* Label badge on hover */}
                                <div className="absolute bottom-0 inset-x-0 px-3 pb-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="block text-center text-[11px] font-semibold text-white drop-shadow-md tracking-wide">
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ════════════════════════════════════════════
                    2. PARTNER LOGOS STRIP
                ════════════════════════════════════════════ */}
                <section className="w-full relative mt-28">
                    {/* Glass strip */}
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-xl border-y border-white/80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-indigo-50/20" />

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="max-w-7xl mx-auto py-12 relative z-10"
                    >
                        {/* Partner Logos Carousel */}
                        <div className="w-full overflow-hidden relative">
                            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] pointer-events-auto items-center">
                                {[...Array(2)].map((_, i) => (
                                    <div key={i} className="flex gap-16 md:gap-24 items-center pl-16 md:pl-24">
                                        <div className="relative w-32 md:w-44 h-16 opacity-70 hover:opacity-100 transition-all duration-300">
                                            <Image src="/carousel-1.png" alt="Partner 1" fill className="object-contain" />
                                        </div>
                                        <div className="relative w-32 md:w-44 h-16 opacity-70 hover:opacity-100 transition-all duration-300">
                                            <Image src="/carousel-2.png" alt="Partner 2" fill className="object-contain" />
                                        </div>
                                        <div className="relative w-32 md:w-44 h-16 opacity-70 hover:opacity-100 transition-all duration-300">
                                            <Image src="/carousel-3.png" alt="Partner 3" fill className="object-contain" />
                                        </div>
                                        <div className="relative w-32 md:w-44 h-16 opacity-70 hover:opacity-100 transition-all duration-300">
                                            <Image src="/carousel-4.png" alt="Partner 4" fill className="object-contain" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* ════════════════════════════════════════════
                    3. OUR COMPANY PROJECT
                ════════════════════════════════════════════ */}
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

                {/* ════════════════════════════════════════════
                    4. COMPANY ACHIEVEMENTS — Stats + Masonry
                ════════════════════════════════════════════ */}
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

                {/* ════════════════════════════════════════════
                    5. CONNECT & MAP
                ════════════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-36">

                    {/* Header */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
                    >
                        <motion.div variants={fadeUp as any} custom={0}>
                            <PillBadge><MapPin size={13} /> Contact Us</PillBadge>
                        </motion.div>
                        <motion.h2 variants={fadeUp as any} custom={0.1} className="font-heading font-black text-4xl md:text-5xl text-brand-dark md:text-right leading-tight">
                            Let&apos;s Connect<br className="hidden md:block" /> With Us
                        </motion.h2>
                    </motion.div>

                    {/* Card */}
                    <div className="bg-gradient-to-br from-white/50 to-blue-50/30 backdrop-blur-2xl border border-white/70 rounded-[3rem] p-6 md:p-10 shadow-2xl shadow-blue-100/40">
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-10">

                            {/* Info Left */}
                            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="md:w-1/3 space-y-5">
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-brand-dark mb-4">Social Media</h3>
                                    <div className="flex gap-2.5">
                                        {socials.map((s, i) => (
                                            <a key={i} href="#" title={s.label} className={`w-9 h-9 rounded-full ${s.bg} text-white flex items-center justify-center shadow-md hover:scale-110 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
                                                {s.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {contactInfo.map((item, i) => (
                                    <motion.div key={i} variants={fadeUp as any} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08 + 0.1} className="group bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white/90 shadow-sm hover:shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300">
                                        <h4 className="flex items-center gap-2 font-bold text-brand-dark text-sm mb-1.5 group-hover:text-blue-600 transition-colors">
                                            <span className="w-7 h-7 rounded-xl bg-blue-100/80 group-hover:bg-blue-600 group-hover:text-white text-blue-600 flex items-center justify-center transition-colors duration-300 shadow-sm shrink-0">
                                                {item.icon}
                                            </span>
                                            {item.label}
                                        </h4>
                                        <p className="text-xs text-gray-500 leading-relaxed pl-9">{item.content}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Map Right */}
                            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} className="md:w-2/3 rounded-[2.5rem] overflow-hidden shadow-xl border border-white/50 min-h-[420px] md:min-h-[520px] relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.03159955376!2d106.72629631248037!3d-6.2840509618585675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1709825484838!5m2!1sen!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '520px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                />
                            </motion.div>

                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
