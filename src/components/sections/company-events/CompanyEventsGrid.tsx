'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { fadeUp } from '@/utils/animations';

const gridEvents = [
    {
        title: "World Blood Donor Day Campaign",
        tag: "Annual Campaign",
        desc: "MTM Healthcare partnered with PMI to host a blood donation drive across 5 branches, successfully collecting over 300 blood bags for the national blood bank stockpile.",
        src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900",
    },
    {
        title: "Healthcare Technology Expo Participation",
        tag: "Industry Expo",
        desc: "MTM represented as an exhibitor at Indonesia's premier Health Technology Expo, showcasing our telehealth platform, pharmacy robotics, and AI diagnostics to 10,000+ visitors.",
        src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=900",
    },
    {
        title: "Annual Doctor's Appreciation Day",
        tag: "Internal Celebration",
        desc: "Honoring our team of 80+ specialist and general practitioners with a dedicated appreciation luncheon, awards ceremony, and professional development sessions.",
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900",
    },
    {
        title: "Mental Health Awareness Month",
        tag: "Awareness Campaign",
        desc: "A month-long series of free webinars, consultations, and social media campaigns raising awareness of mental health, stress management, and the importance of seeking help.",
        src: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=900",
    },
];

export function CompanyEventsGrid() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {gridEvents.map((evt, idx) => (
                    <motion.div key={idx} variants={fadeUp as any} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx * 0.1} className="flex flex-col group cursor-pointer">
                        <div className="w-full h-[280px] md:h-[360px] rounded-[2.5rem] overflow-hidden mb-7 relative border border-white/80 shadow-xl shadow-blue-100/40">
                            <Image src={evt.src} alt={evt.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-blue-700 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm tracking-wide uppercase"><Zap size={9} className="fill-blue-500 text-blue-500" />{evt.tag}</span>
                            </div>
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">{evt.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{evt.desc}</p>
                        <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">Read more <ArrowRight size={15} /></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
