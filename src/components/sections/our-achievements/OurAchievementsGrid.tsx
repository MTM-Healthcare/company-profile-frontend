'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { fadeUp } from '@/utils/animations';

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

export function OurAchievementsGrid() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {gridProjects.map((proj, idx) => (
                    <motion.div key={idx} variants={fadeUp as any} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx * 0.1} className="flex flex-col group cursor-pointer">
                        <div className="w-full h-[280px] md:h-[360px] rounded-[2.5rem] overflow-hidden mb-7 relative border border-white/80 shadow-xl shadow-blue-100/40">
                            <Image src={proj.src} alt={proj.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-blue-700 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm tracking-wide uppercase"><Zap size={9} className="fill-blue-500 text-blue-500" />{proj.tag}</span>
                            </div>
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">{proj.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{proj.desc}</p>
                        <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">Read more <ArrowRight size={15} /></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
