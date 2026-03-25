'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Building2, Zap } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { fadeUp, fadeLeft, fadeRight } from '@/utils/animations';

const featuredItem = {
    title: "MTM Healthcare Group — Corporate Profile",
    tag: "Company Overview",
    desc: "Founded with a mission to deliver integrated, patient-centered healthcare to all, MTM Healthcare Group has grown into one of Jakarta's most trusted pharmaceutical and medical service providers. With 12 operational branches and over 500 dedicated professionals, we combine clinical excellence with compassionate care.",
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
};

const sideItems = [
    {
        title: "Our Vision & Mission",
        tag: "Core Values",
        desc: "To be Indonesia's leading integrated healthcare partner — accessible, compassionate, and driven by innovation.",
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Leadership & Management",
        tag: "Governance",
        desc: "Led by experienced healthcare executives and clinicians committed to quality, ethics, and continuous improvement.",
        src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Our Branch Network",
        tag: "Presence",
        desc: "12 strategically located branches across Greater Jakarta, Bogor, Depok and Tangerang serving over 200,000 patients annually.",
        src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=600",
    },
];

const gridItems = [
    {
        title: "Pharmacy & Dispensing Services",
        tag: "Core Service",
        desc: "Full-service licensed pharmacies offering prescription fulfillment, OTC medicines, medical devices, vitamins, and personalized medication counseling by our clinical pharmacists.",
        src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900",
    },
    {
        title: "Specialist Outpatient Clinics",
        tag: "Medical Services",
        desc: "Multi-specialty outpatient clinics covering General Practice, Internal Medicine, Pediatrics, Obstetrics, Cardiology, and more — staffed by experienced specialist doctors.",
        src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900",
    },
    {
        title: "Diagnostic & Laboratory Services",
        tag: "Diagnostics",
        desc: "ISO-accredited clinical laboratory and radiology center providing a full suite of diagnostic tests, imaging, and point-of-care testing at competitive pricing.",
        src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=900",
    },
    {
        title: "Corporate Health Programs",
        tag: "B2B Services",
        desc: "Tailored occupational health solutions for corporate clients including medical check-ups, vaccination programs, and employee wellness initiatives.",
        src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900",
    },
];

const stagger = { visible: { transition: { staggerChildren: 0.1 } }, hidden: {} };

export default function CompanyDetailsPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />
            <main className="pt-28 pb-24 flex-grow w-full relative z-10">

                <section className="max-w-7xl mx-auto px-[45px] pt-8 pb-20">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center text-center">
                        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-7 shadow-sm">
                            <Building2 size={13} className="text-blue-500" /> About MTM
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.1] mb-6 tracking-tight">
                            Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Details</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Get to know MTM Healthcare — our story, our values, our leadership, and the comprehensive services that define us as a healthcare leader in Indonesia.
                        </motion.p>
                        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                    </motion.div>
                </section>

                <section className="max-w-7xl mx-auto px-[45px] mb-28">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 flex flex-col group cursor-pointer">
                            <div className="w-full h-[320px] md:h-[430px] rounded-[2.5rem] overflow-hidden mb-7 relative shadow-2xl shadow-blue-100/60 border border-white/80">
                                <Image src={featuredItem.src} alt={featuredItem.title} fill priority className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/5 to-transparent" />
                                <div className="absolute top-6 left-6">
                                    <span className="inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg"><Star size={11} className="fill-white" />{featuredItem.tag}</span>
                                </div>
                                <div className="absolute bottom-0 inset-x-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <h3 className="font-heading font-black text-white text-xl drop-shadow-lg">{featuredItem.title}</h3>
                                </div>
                            </div>
                            <h3 className="font-heading font-bold text-2xl md:text-3xl text-brand-dark mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">{featuredItem.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{featuredItem.desc}</p>
                            <div className="mt-5 flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">Read more <ArrowRight size={15} /></div>
                        </motion.div>
                        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 flex flex-col gap-5 justify-between">
                            {sideItems.map((item, i) => (
                                <motion.div key={i} variants={fadeRight} custom={i * 0.1} className="flex flex-col sm:flex-row gap-4 items-center bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-white/90 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group">
                                    <div className="w-full sm:w-36 h-32 relative rounded-2xl overflow-hidden shrink-0 border border-blue-50 shadow-sm"><Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                                    <div className="flex-grow py-1 min-w-0">
                                        <span className="inline-block text-[10px] text-blue-500 font-bold tracking-widest uppercase mb-1">{item.tag}</span>
                                        <h4 className="font-heading font-bold text-base text-brand-dark mb-2 group-hover:text-blue-600 transition-colors leading-snug">{item.title}</h4>
                                        <p className="text-[11px] text-gray-500 line-clamp-3 leading-relaxed">{item.desc}</p>
                                    </div>
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 opacity-0 group-hover:opacity-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 self-center"><ArrowRight size={14} /></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <div className="relative w-full my-4 mb-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-blue-50/60 to-indigo-50/20 border-y border-blue-100/40" />
                    <div className="relative z-10 max-w-7xl mx-auto px-[45px] py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div><p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">What We Offer</p><h2 className="font-heading font-black text-2xl md:text-3xl text-brand-dark">Our Core Services</h2></div>
                        <p className="text-sm text-gray-500 max-w-md leading-relaxed md:text-right">Explore the comprehensive medical, pharmaceutical, and wellness services that MTM Healthcare provides to individuals and corporate clients alike.</p>
                    </div>
                </div>

                <section className="max-w-7xl mx-auto px-[45px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {gridItems.map((item, idx) => (
                            <motion.div key={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx * 0.1} className="flex flex-col group cursor-pointer">
                                <div className="w-full h-[280px] md:h-[360px] rounded-[2.5rem] overflow-hidden mb-7 relative border border-white/80 shadow-xl shadow-blue-100/40">
                                    <Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-blue-700 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm tracking-wide uppercase"><Zap size={9} className="fill-blue-500 text-blue-500" />{item.tag}</span>
                                    </div>
                                </div>
                                <h3 className="font-heading font-bold text-2xl text-brand-dark mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">Read more <ArrowRight size={15} /></div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

