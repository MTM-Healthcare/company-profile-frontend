'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { fadeLeft, fadeRight } from '@/utils/animations';

const featuredEvent = {
    title: "MTM Healthcare Annual Health Symposium 2025",
    tag: "Flagship Event",
    desc: "Bringing together leading medical professionals, industry experts, and healthcare innovators for a full-day symposium on the future of integrated healthcare, precision medicine, and digital health transformation in Indonesia.",
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
};

const sideEvents = [
    {
        title: "Free Community Health Screening Drive",
        tag: "CSR Event",
        desc: "A city-wide free health screening initiative covering blood pressure, blood sugar, BMI, cholesterol, and eye checks for 2,000+ residents.",
        src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "MTM Staff Award Night 2025",
        tag: "Internal Event",
        desc: "Celebrating outstanding performance and years of service with our 500+ team members in a gala evening of recognition and appreciation.",
        src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Pediatric Health & Nutrition Workshop",
        tag: "Public Workshop",
        desc: "A free interactive workshop for parents on child nutrition, vaccine schedules, and early childhood development milestones.",
        src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    },
];

const stagger = { visible: { transition: { staggerChildren: 0.1 } }, hidden: {} };

export function CompanyEventsFeatured() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                <motion.div variants={fadeLeft as any} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 flex flex-col group cursor-pointer">
                    <div className="w-full h-[320px] md:h-[430px] rounded-[2.5rem] overflow-hidden mb-7 relative shadow-2xl shadow-blue-100/60 border border-white/80">
                        <Image src={featuredEvent.src} alt={featuredEvent.title} fill priority className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/5 to-transparent" />
                        <div className="absolute top-6 left-6"><span className="inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg"><Star size={11} className="fill-white" />{featuredEvent.tag}</span></div>
                        <div className="absolute bottom-0 inset-x-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"><h3 className="font-heading font-black text-white text-xl drop-shadow-lg">{featuredEvent.title}</h3></div>
                    </div>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-brand-dark mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">{featuredEvent.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{featuredEvent.desc}</p>
                    <div className="mt-5 flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">Read more <ArrowRight size={15} /></div>
                </motion.div>
                <motion.div variants={stagger as any} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 flex flex-col gap-5 justify-between">
                    {sideEvents.map((evt, i) => (
                        <motion.div key={i} variants={fadeRight as any} custom={i * 0.1} className="flex flex-col sm:flex-row gap-4 items-center bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-white/90 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group">
                            <div className="w-full sm:w-36 h-32 relative rounded-2xl overflow-hidden shrink-0 border border-blue-50 shadow-sm"><Image src={evt.src} alt={evt.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                            <div className="flex-grow py-1 min-w-0">
                                <span className="inline-block text-[10px] text-blue-500 font-bold tracking-widest uppercase mb-1">{evt.tag}</span>
                                <h4 className="font-heading font-bold text-base text-brand-dark mb-2 group-hover:text-blue-600 transition-colors leading-snug">{evt.title}</h4>
                                <p className="text-[11px] text-gray-500 line-clamp-3 leading-relaxed">{evt.desc}</p>
                            </div>
                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 opacity-0 group-hover:opacity-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 self-center"><ArrowRight size={14} /></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
