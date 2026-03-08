'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle2, Share2, Tag, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { fadeUp } from '@/utils/animations';

const eventBase = {
    title: "MTM Healthcare Annual Health Symposium 2025",
    category: "Flagship Event",
    date: "October 15, 2025",
    location: "Jakarta Convention Center",
    attendees: "1,500+ Professionals",
    status: "Upcoming",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600",
}

const relatedEvents = [
    {
        title: "Free Community Health Screening Drive",
        category: "CSR Event",
        src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "MTM Staff Award Night 2025",
        category: "Internal Event",
        src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Pediatric Health & Nutrition Workshop",
        category: "Public Workshop",
        src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    }
];

export default function CompanyEventDetailPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-grow w-full relative z-10">

                {/* ── HERO IMAGE ── */}
                <section className="relative w-full h-[60vh] min-h-[500px] mt-20">
                    <Image src={eventBase.heroImage} alt={eventBase.title} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10" />

                    <div className="absolute bottom-0 inset-x-0 w-full pb-16">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                <Link href="/company-events" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mb-6 transition-colors">
                                    <ArrowLeft size={16} /> Back to Events
                                </Link>
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="bg-blue-600 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">{eventBase.category}</span>
                                    <span className="flex items-center gap-1.5 text-white/80 text-sm"><Calendar size={14} /> {eventBase.date}</span>
                                </div>
                                <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 drop-shadow-lg">
                                    {eventBase.title}
                                </h1>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── EVENT DETAILS ── */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                    {/* Quick Info Bar */}
                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-blue-50/50 p-6 rounded-3xl mb-16 border border-blue-100/50">
                        <div><p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1 flex items-center gap-1"><MapPin size={12} /> Location</p><p className="font-semibold text-brand-dark">{eventBase.location}</p></div>
                        <div><p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1 flex items-center gap-1"><Users size={12} /> Expected Attendees</p><p className="font-semibold text-brand-dark">{eventBase.attendees}</p></div>
                        <div><p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Host</p><p className="font-semibold text-brand-dark">MTM Healthcare</p></div>
                        <div><p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Status</p><p className="font-semibold text-blue-600 flex items-center gap-1"><CheckCircle2 size={16} /> {eventBase.status}</p></div>
                    </motion.div>

                    {/* Content Body */}
                    <div className="prose prose-lg prose-blue max-w-none text-gray-600">
                        <h2 className="font-heading font-bold text-3xl text-brand-dark mb-6">Event Overview</h2>
                        <p className="mb-6 leading-relaxed">
                            Bringing together leading medical professionals, industry experts, and healthcare innovators for a full-day symposium on the future of integrated healthcare, precision medicine, and digital health transformation in Indonesia. This annual gathering is the pinnacle of knowledge-sharing within the MTM ecosystem.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Attendees will have the opportunity to participate in interactive panel discussions, hands-on workshops with the latest medical technologies, and networking sessions designed to foster collaboration across multidisciplinary medical teams.
                        </p>

                        <div className="my-12">
                            <Image src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200" alt="Audience at a healthcare symposium" width={1200} height={600} className="w-full h-auto rounded-[2rem] shadow-xl shadow-blue-500/10" />
                            <p className="text-center text-sm text-gray-400 mt-4 italic">A snapshot from our previous successful year's symposium.</p>
                        </div>

                        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">Key Highlights & Agenda</h3>
                        <ul className="mb-8 space-y-4">
                            <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-500 mt-1 shrink-0" size={20} /><span><strong>Keynote Speakers:</strong> Renowned international specialists sharing insights on AI in diagnostics and post-pandemic care protocols.</span></li>
                            <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-500 mt-1 shrink-0" size={20} /><span><strong>Technology Expo:</strong> A dedicated hall showcasing the newest hospital equipment and telemedicine software integrations.</span></li>
                            <li className="flex gap-4 items-start"><CheckCircle2 className="text-blue-500 mt-1 shrink-0" size={20} /><span><strong>Awards Ceremony:</strong> Recognizing pioneering research and outstanding patient care delivery within the MTM network.</span></li>
                        </ul>

                        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-4">Why Attend?</h3>
                        <p className="mb-6 leading-relaxed">
                            Whether you are a clinician looking to stay ahead of the curve, a researcher presenting new findings, or an administrator seeking operational excellence, the MTM Health Symposium offers unparalleled value, continuing medical education (CME) credits, and the chance to shape the future of healthcare. 
                        </p>
                    </div>

                    {/* Share / Tags */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-brand-dark flex items-center gap-2"><Tag size={16} /> Tags:</span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-gray-200 cursor-pointer transition">Symposium</span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-gray-200 cursor-pointer transition">Medical Education</span>
                        </div>
                        <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-full transition-colors">
                            <Share2 size={16} /> Share Event
                        </button>
                    </div>

                </section>

                {/* ── SEE ANOTHER EVENTS ── */}
                <section className="bg-[#EAF3FA] py-24 border-t border-blue-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="flex items-end justify-between mb-12">
                            <div>
                                <h2 className="font-heading font-black text-3xl md:text-4xl text-brand-dark">More Events</h2>
                                <p className="text-gray-500 mt-2">Explore other initiatives and gatherings.</p>
                            </div>
                            <Link href="/company-events" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                                View all events <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedEvents.map((evt, idx) => (
                                <Link href="/company-events/detail" key={idx} className="group">
                                    <div className="w-full h-[240px] rounded-[2rem] overflow-hidden relative mb-5 shadow-sm border border-gray-100 bg-white">
                                        <Image src={evt.src} alt={evt.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur text-blue-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{evt.category}</span>
                                        </div>
                                    </div>
                                    <h4 className="font-heading font-bold text-xl text-brand-dark group-hover:text-blue-600 transition-colors leading-snug">{evt.title}</h4>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-10 md:hidden flex justify-center">
                            <Link href="/company-events" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
                                View all events <ArrowRight size={16} />
                            </Link>
                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
