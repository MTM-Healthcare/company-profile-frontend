'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { fadeLeft, fadeRight } from '@/utils/animations';

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

const stagger = { visible: { transition: { staggerChildren: 0.1 } }, hidden: {} };

export function OurAchievementsFeatured() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                <motion.div variants={fadeLeft as any} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 flex flex-col group cursor-pointer">
                    <div className="w-full h-[320px] md:h-[430px] rounded-[2.5rem] overflow-hidden mb-7 relative shadow-2xl shadow-blue-100/60 border border-white/80">
                        <Image src={featuredProject.src} alt={featuredProject.title} fill priority className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/5 to-transparent" />
                        <div className="absolute top-6 left-6"><span className="inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg"><Star size={11} className="fill-white" />{featuredProject.tag}</span></div>
                        <div className="absolute bottom-0 inset-x-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"><h3 className="font-heading font-black text-white text-xl drop-shadow-lg">{featuredProject.title}</h3></div>
                    </div>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-brand-dark mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">{featuredProject.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{featuredProject.desc}</p>
                    <div className="mt-5 flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">Read more <ArrowRight size={15} /></div>
                </motion.div>
                <motion.div variants={stagger as any} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 flex flex-col gap-5 justify-between">
                    {sideProjects.map((proj, i) => (
                        <motion.div key={i} variants={fadeRight as any} custom={i * 0.1} className="flex flex-col sm:flex-row gap-4 items-center bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-white/90 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group">
                            <div className="w-full sm:w-36 h-32 relative rounded-2xl overflow-hidden shrink-0 border border-blue-50 shadow-sm"><Image src={proj.src} alt={proj.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                            <div className="flex-grow py-1 min-w-0">
                                <span className="inline-block text-[10px] text-blue-500 font-bold tracking-widest uppercase mb-1">{proj.tag}</span>
                                <h4 className="font-heading font-bold text-base text-brand-dark mb-2 group-hover:text-blue-600 transition-colors leading-snug">{proj.title}</h4>
                                <p className="text-[11px] text-gray-500 line-clamp-3 leading-relaxed">{proj.desc}</p>
                            </div>
                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 opacity-0 group-hover:opacity-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 self-center"><ArrowRight size={14} /></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
