'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Trophy, Share2, Tag, ArrowRight, Star, Award } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { fadeUp } from '@/utils/animations';

const achievementBase = {
    title: "Integrated Diagnostic Center Building",
    category: "Flagship Project",
    date: "October 2025",
    awardedBy: "Ministry of Health Indonesia",
    recognition: "Excellence in Healthcare Innovation",
    impact: "Serving 50,000+ patients annually",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600",
}

const relatedAchievements = [
    {
        title: "Pharma Innovation Lab",
        category: "R&D",
        src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Digital Health Platform",
        category: "Technology",
        src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Community Wellness Hub",
        category: "CSR Initiative",
        src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=600",
    }
];

export default function AchievementDetailPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-grow w-full relative z-10">

                {/* ── HERO IMAGE ── */}
                <section className="relative w-full h-[60vh] min-h-[500px] mt-20">
                    <Image src={achievementBase.heroImage} alt={achievementBase.title} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10" />

                    <div className="absolute bottom-0 inset-x-0 w-full pb-16">
                        <div className="max-w-4xl mx-auto px-[45px]">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                <Link href="/our-achievements" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-6 transition-colors">
                                    <ArrowLeft size={16} /> Back to Achievements
                                </Link>
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="bg-blue-600 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">{achievementBase.category}</span>
                                    <span className="flex items-center gap-1.5 text-white/80 text-sm"><Calendar size={14} /> {achievementBase.date}</span>
                                </div>
                                <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 drop-shadow-lg">
                                    {achievementBase.title}
                                </h1>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── ACHIEVEMENT DETAILS ── */}
                <section className="max-w-4xl mx-auto px-[45px] py-16">

                    {/* Quick Info Bar */}
                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-blue-50/50 p-6 rounded-3xl mb-16 border border-blue-100/50">
                        <div>
                            <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Recognized Entity</p>
                            <p className="font-semibold text-brand-dark">MTM Healthcare</p>
                        </div>
                        <div>
                            <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Awarded By</p>
                            <p className="font-semibold text-brand-dark">{achievementBase.awardedBy}</p>
                        </div>
                        <div>
                            <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Recognition</p>
                            <p className="font-semibold text-brand-dark">{achievementBase.recognition}</p>
                        </div>
                        <div>
                            <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Impact Highlights</p>
                            <p className="font-semibold text-blue-600 flex items-center gap-1"><Star size={16} className="fill-blue-600" /> {achievementBase.impact}</p>
                        </div>
                    </motion.div>

                    {/* Content Body */}
                    <div className="prose prose-lg prose-blue max-w-none text-gray-600">
                        <h2 className="font-heading font-bold text-3xl text-brand-dark mb-6">Achievement Overview</h2>
                        <p className="mb-6 leading-relaxed">
                            Developing a state-of-the-art facility requires unwavering dedication to quality, safety, and innovation. The establishment of our Integrated Diagnostic Center marks a critical milestone in our journey bridging world-class technology with community health accessibility.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            This flagship project combined nuclear medicine, advanced imaging arrays, and rapid laboratory services under a single roof. This synergy fundamentally transformed diagnostic accuracy and slashed waiting times for thousands across the greater West Jakarta region, earning national recognition for healthcare excellence.
                        </p>

                        <div className="my-12">
                            <Image src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" alt="Advanced MRI Facility" width={1200} height={600} className="w-full h-auto rounded-[2rem] shadow-xl shadow-blue-500/10" />
                            <p className="text-center text-sm text-gray-400 mt-4 italic">The nationally recognized diagnostic imaging wing.</p>
                        </div>

                        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">Milestone Highlights</h3>
                        <ul className="mb-8 space-y-4">
                            <li className="flex gap-4 items-start"><Award className="text-blue-500 mt-1 shrink-0" size={20} /><span><strong>Pioneering Technology:</strong> First in the region to deploy AI-assisted radiological screening setups for faster oncology detection.</span></li>
                            <li className="flex gap-4 items-start"><Award className="text-blue-500 mt-1 shrink-0" size={20} /><span><strong>Sustainability:</strong> The building was constructed adhering strictly to Green Hospital initiatives, utilizing solar tracking systems.</span></li>
                            <li className="flex gap-4 items-start"><Award className="text-blue-500 mt-1 shrink-0" size={20} /><span><strong>National Recognition:</strong> Awarded the 'Excellence in Healthcare Innovation' trophy by the Ministry of Health.</span></li>
                        </ul>

                        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">The Legacy</h3>
                        <p className="mb-6 leading-relaxed">
                            Beyond the technology and the accolades, the true success of the Integrated Diagnostic Center lies in the lives it touches daily. By empowering our physicians with the best tools available, we continue to fulfill our pledge to deliver superior patient outcomes.
                        </p>
                    </div>

                    {/* Share / Tags */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-brand-dark flex items-center gap-2"><Tag size={16} /> Tags:</span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-gray-200 cursor-pointer transition">Innovation</span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-gray-200 cursor-pointer transition">Awards</span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-gray-200 cursor-pointer transition">Diagnostic</span>
                        </div>
                        <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-full transition-colors">
                            <Share2 size={16} /> Share Milestone
                        </button>
                    </div>

                </section>

                {/* ── SEE MORE ACHIEVEMENTS ── */}
                <section className="bg-gradient-to-b from-blue-50/40 to-white py-24 border-t border-blue-50">
                    <div className="max-w-7xl mx-auto px-[45px]">

                        <div className="flex items-end justify-between mb-12">
                            <div>
                                <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-dark">More Achievements</h2>
                                <p className="text-gray-500 mt-2">Explore our other incredible milestones.</p>
                            </div>
                            <Link href="/our-achievements" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                                View all achievements <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedAchievements.map((achieve, idx) => (
                                <Link href="/our-achievements/detail" key={idx} className="group">
                                    <div className="w-full h-[240px] rounded-[2rem] overflow-hidden relative mb-5 shadow-sm border border-gray-100">
                                        <Image src={achieve.src} alt={achieve.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur text-blue-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                                                <Trophy size={10} className="text-blue-600" /> {achieve.category}
                                            </span>
                                        </div>
                                    </div>
                                    <h4 className="font-heading font-bold text-xl text-brand-dark group-hover:text-blue-600 transition-colors leading-snug">{achieve.title}</h4>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-10 md:hidden flex justify-center">
                            <Link href="/our-achievements" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
                                View all achievements <ArrowRight size={16} />
                            </Link>
                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

