'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, CheckCircle2, User, Share2, Tag, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { fadeUp, fadeLeft, fadeRight } from '@/utils/animations';

const projectBase = {
    title: "Integrated Hospital Management System Implementation",
    category: "Digital Transformation",
    date: "August 2025",
    client: "MTM Central Hospital",
    duration: "18 Months",
    status: "Completed",
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
}

const relatedProjects = [
    {
        title: "Medical Supply Chain Platform",
        category: "Logistics",
        src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Telehealth Consultation App",
        category: "Technology",
        src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Patient Loyalty & Wellness Program",
        category: "Customer Experience",
        src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=600",
    }
];

export default function ProjectDetailPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-grow w-full relative z-10">

                {/* ── HERO IMAGE ── */}
                <section className="relative w-full h-[60vh] min-h-[500px] mt-20">
                    <Image src={projectBase.heroImage} alt={projectBase.title} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10" />

                    <div className="absolute bottom-0 inset-x-0 w-full pb-16">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                <Link href="/our-projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-6 transition-colors">
                                    <ArrowLeft size={16} /> Back to Projects
                                </Link>
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="bg-blue-600 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">{projectBase.category}</span>
                                    <span className="flex items-center gap-1.5 text-white/80 text-sm"><Calendar size={14} /> {projectBase.date}</span>
                                </div>
                                <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 drop-shadow-lg">
                                    {projectBase.title}
                                </h1>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── PROJECT DETAILS ── */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Quick Info Bar */}
                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-blue-50/50 p-6 rounded-3xl mb-16 border border-blue-100/50">
                        <div><p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Client</p><p className="font-semibold text-brand-dark">{projectBase.client}</p></div>
                        <div><p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Duration</p><p className="font-semibold text-brand-dark">{projectBase.duration}</p></div>
                        <div><p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Role</p><p className="font-semibold text-brand-dark">Lead Integrator</p></div>
                        <div><p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Status</p><p className="font-semibold text-blue-600 flex items-center gap-1"><CheckCircle2 size={16} /> {projectBase.status}</p></div>
                    </motion.div>

                    {/* Content Body */}
                    <div className="prose prose-lg prose-blue max-w-none text-gray-600">
                        <h2 className="font-heading font-bold text-3xl text-brand-dark mb-6">Project Overview</h2>
                        <p className="mb-6 leading-relaxed">
                            The healthcare industry is rapidly evolving, and maintaining efficient hospital operations while delivering top-tier patient care is more challenging than ever. This project represented a comprehensive digital transformation for MTM Central Hospital, modernizing their entire technology stack from the ground up.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Our team was tasked with replacing legacy siloed systems with a unified Hospital Information System (HIS) that seamlessly integrates patient records, scheduling, billing, pharmacy dispensers, and laboratory results. The goal was to reduce patient wait times, eliminate paper-based errors, and provide doctors with real-time access to patient histories.
                        </p>

                        <div className="my-12">
                            <Image src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=1200" alt="Hospital Interior" width={1200} height={600} className="w-full h-auto rounded-[2rem] shadow-xl shadow-blue-500/10" />
                            <p className="text-center text-sm text-gray-400 mt-4 italic">The newly integrated digital reception and triage area.</p>
                        </div>

                        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">Key Challenges & Solutions</h3>
                        <ul className="mb-8 space-y-4">
                            <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-500 mt-1 shrink-0" size={20} /><span><strong>Data Migration:</strong> Securely migrating 10+ years of patient data from fragmented databases into the new unified cloud architecture without downtime.</span></li>
                            <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-500 mt-1 shrink-0" size={20} /><span><strong>Staff Training:</strong> Upskilling over 400 medical and administrative staff to confidently operate the new system through targeted, role-based workshops.</span></li>
                            <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-500 mt-1 shrink-0" size={20} /><span><strong>Interoperability:</strong> Building custom APIs to connect the new HIS with existing high-value radiological equipment and automated laboratory analyzers.</span></li>
                        </ul>

                        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">The Impact</h3>
                        <p className="mb-6 leading-relaxed">
                            Following the 18-month rollout, the hospital saw a dramatic improvement in operational efficiency. Patient registration times were cut by 45%, prescription errors dropped to near-zero thanks to digital cross-referencing, and doctor satisfaction scores improved significantly due to the intuitive interface and mobile accessibility.
                        </p>
                    </div>

                    {/* Share / Tags */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-brand-dark flex items-center gap-2"><Tag size={16} /> Tags:</span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-gray-200 cursor-pointer transition">Healthcare IT</span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-gray-200 cursor-pointer transition">Digitalization</span>
                        </div>
                        <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-full transition-colors">
                            <Share2 size={16} /> Share Project
                        </button>
                    </div>

                </section>

                {/* ── SEE ANOTHER PROJECTS ── */}
                <section className="bg-gradient-to-b from-blue-50/40 to-white py-24 border-t border-blue-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="flex items-end justify-between mb-12">
                            <div>
                                <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-dark">More Projects</h2>
                                <p className="text-gray-500 mt-2">Explore other successful initiatives.</p>
                            </div>
                            <Link href="/our-projects" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                                View all portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedProjects.map((proj, idx) => (
                                <Link href="/our-projects/detail" key={idx} className="group">
                                    <div className="w-full h-[240px] rounded-[2rem] overflow-hidden relative mb-5 shadow-sm border border-gray-100">
                                        <Image src={proj.src} alt={proj.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur text-blue-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{proj.category}</span>
                                        </div>
                                    </div>
                                    <h4 className="font-heading font-bold text-xl text-brand-dark group-hover:text-blue-600 transition-colors leading-snug">{proj.title}</h4>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-10 md:hidden flex justify-center">
                            <Link href="/our-projects" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
                                View all portfolio <ArrowRight size={16} />
                            </Link>
                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
