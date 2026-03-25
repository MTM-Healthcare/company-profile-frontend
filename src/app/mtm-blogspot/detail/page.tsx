'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, MessageSquare, User, Share2, BookmarkPlus, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { fadeUp, fadeLeft, fadeRight } from '@/utils/animations';

const postBase = {
    title: "Understanding Telemedicine: The Future of Healthcare in Indonesia",
    category: "Digital Health",
    date: "March 15, 2026",
    author: "Dr. Aulia Rahman, Sp.PD",
    readTime: "6 Min Read",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600",
}

const relatedPosts = [
    {
        title: "5 Essential Tips for Managing Diabetes Effectively",
        category: "Wellness",
        date: "March 10, 2026",
        src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "The Importance of Early Cancer Screening",
        category: "Oncology",
        date: "March 05, 2026",
        src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Mental Health in the Workplace: Recognizing Burnout",
        category: "Mental Health",
        date: "February 28, 2026",
        src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    }
];

export default function BlogDetailPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-grow w-full pt-28 pb-20 relative z-10">

                {/* ── ARTICLE HEADER ── */}
                <section className="max-w-4xl mx-auto px-[45px] mt-10 mb-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Link href="/mtm-blogspot" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold mb-6 transition-colors">
                            <ArrowLeft size={16} /> Back to Blog
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="bg-blue-50 text-blue-600 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-blue-100">{postBase.category}</span>
                            <span className="text-gray-400">•</span>
                            <span className="flex items-center gap-1.5 text-gray-500 text-sm"><Clock size={14} /> {postBase.readTime}</span>
                        </div>

                        <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-[1.1] mb-8 tracking-tight">
                            {postBase.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between border-y border-gray-100 py-4 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 overflow-hidden relative shadow-sm border border-blue-50">
                                    <Image src="https://images.unsplash.com/photo-1612349317150-e410f624c400?auto=format&fit=crop&q=80&w=150" fill className="object-cover" alt="Author" />
                                </div>
                                <div>
                                    <p className="font-bold text-brand-dark text-sm">{postBase.author}</p>
                                    <p className="text-xs text-gray-500 flex items-center gap-1"><Calendar size={12} /> {postBase.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors"><BookmarkPlus size={18} /></button>
                                <button className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-colors"><Share2 size={18} /></button>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* ── HERO IMAGE ── */}
                <section className="max-w-5xl mx-auto px-[45px] mb-16">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="w-full h-[300px] md:h-[500px] relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10">
                        <Image src={postBase.heroImage} alt={postBase.title} fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    </motion.div>
                    <p className="text-center text-sm text-gray-400 mt-4 italic">The rapid adoption of telehealth is changing how patients interact with medical professionals.</p>
                </section>

                {/* ── ARTICLE CONTENT ── */}
                <section className="max-w-3xl mx-auto px-[45px]">
                    <div className="prose prose-lg prose-blue max-w-none text-gray-600 leading-relaxed font-serif">
                        <p className="lead text-xl text-gray-700 font-medium mb-8">
                            As digital adoption accelerates across the archipelago, telehealth is no longer just a convenience—it's becoming a fundamental pillar of modern healthcare infrastructure. In this article, we explore how MTM Healthcare's new platform is bridging the gap between patients and specialists.
                        </p>

                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-dark mt-12 mb-6 font-sans">The Connectivity Challenge in Indonesia</h2>
                        <p className="mb-6">
                            Indonesia's unique geography presents significant logistical challenges for healthcare delivery. With thousands of islands and vast rural areas, ensuring equitable access to specialized medical care has historically been difficult. Patients often have to travel for hours, or even days, to reach a major hospital in urban centers like Jakarta or Surabaya.
                        </p>
                        <p className="mb-8">
                            This disparity in accessibility often leads to delayed diagnoses and poorer health outcomes for rural populations. Telemedicine seeks to democratize access by allowing anyone with an internet connection to consult with top-tier specialists regardless of their physical location.
                        </p>

                        <blockquote className="border-l-4 border-blue-500 pl-6 my-10 bg-blue-50/50 py-4 pr-6 rounded-r-2xl italic font-medium text-blue-900 text-lg">
                            "Telehealth is not a replacement for in-person care; it is an evolution of access. Our goal is to ensure that a patient in a remote village has the same initial access to a specialist as a patient living next door to our flagship hospital." <br />
                            <span className="block mt-3 text-sm font-bold font-sans not-italic text-blue-600">— Dr. Aulia Rahman, Head of Digital Innovation</span>
                        </blockquote>

                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-dark mt-12 mb-6 font-sans">How the MTM Telehealth Platform Works</h2>
                        <p className="mb-6">
                            Our proprietary platform was designed with simplicity and security in mind. Patients can easily download the MTM app, create a secure profile, and browse a directory of available specialists. The integrated ecosystem includes:
                        </p>
                        <ul className="mb-8 space-y-3 font-sans">
                            <li><strong>Secure Video Consultations:</strong> High-definition video calls with end-to-end encryption to protect patient privacy and comply with national data standards.</li>
                            <li><strong>Digital Prescriptions (e-Resep):</strong> Doctors can issue digital prescriptions immediately after a consultation, which are automatically sent to the nearest MTM pharmacy for dispensing and home delivery.</li>
                            <li><strong>Integrated Medical Records:</strong> Consult notes are directly synced with the patient's centralized Electronic Medical Record (EMR), ensuring continuity of care if they visit a physical clinic later.</li>
                        </ul>

                        <div className="my-12">
                            <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900" alt="Doctor on video call" width={900} height={450} className="w-full h-auto rounded-[2rem] shadow-lg" />
                        </div>

                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-brand-dark mt-12 mb-6 font-sans">Looking Ahead</h2>
                        <p className="mb-8">
                            While the initial rollout has been overwhelmingly successful, we are already looking at the next phase of digital healthcare. Future updates will include integration with wearable IoT devices to monitor patient vitals in real-time, AI-assisted symptom checkers for better triage, and expanded mental health services. The future of healthcare is connected, and MTM is proud to lead the charge.
                        </p>
                    </div>

                    {/* Author Bio Box */}
                    <div className="mt-16 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 p-8 rounded-3xl border border-indigo-100 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                        <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 shadow-md border-4 border-white relative">
                            <Image src="https://images.unsplash.com/photo-1612349317150-e410f624c400?auto=format&fit=crop&q=80&w=150" fill className="object-cover" alt="Dr. Aulia Rahman" />
                        </div>
                        <div>
                            <h4 className="font-heading font-black text-xl text-brand-dark mb-1">Dr. Aulia Rahman, Sp.PD</h4>
                            <p className="text-blue-600 text-sm font-semibold mb-3">Head of Internal Medicine & Digital Innovation</p>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
                                Dr. Rahman is a leading specialist in internal medicine with over 15 years of clinical experience. He passionately advocates for the intersection of technology and patient care.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── SEE ANOTHER ARTICLES ── */}
                <section className="bg-gray-50 mt-24 py-20 border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-[45px]">

                        <div className="flex items-end justify-between mb-12">
                            <div>
                                <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-dark">Related Articles</h2>
                                <p className="text-gray-500 mt-2 font-serif text-lg">Continue reading about health and innovation.</p>
                            </div>
                            <Link href="/mtm-blogspot" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                                View all articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((post, idx) => (
                                <Link href="/mtm-blogspot/detail" key={idx} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-50">
                                    <div className="w-full h-[220px] relative overflow-hidden">
                                        <Image src={post.src} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur text-blue-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{post.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3"><Calendar size={13} /> {post.date}</div>
                                            <h4 className="font-heading font-bold text-xl text-brand-dark group-hover:text-blue-600 transition-colors leading-snug mb-4">{post.title}</h4>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-10 md:hidden flex justify-center">
                            <Link href="/mtm-blogspot" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
                                View all articles <ArrowRight size={16} />
                            </Link>
                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

