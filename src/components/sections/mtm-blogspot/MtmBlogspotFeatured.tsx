'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { fadeLeft, fadeRight } from '@/utils/animations';

const featuredPost = {
    title: "Understanding Telemedicine: The Future of Healthcare in Indonesia",
    tag: "Digital Health",
    desc: "As digital adoption accelerates, telehealth is bridging the gap between patients and specialists. Learn how MTM Healthcare's new platform is revolutionizing access to quality care across the archipelago.",
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
};

const sidePosts = [
    {
        title: "5 Essential Tips for Managing Managing Diabetes",
        tag: "Wellness",
        desc: "A comprehensive guide by our Head Endocrinologist on diet, exercise, and medication management for better blood sugar control.",
        src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "The Importance of Early Cancer Screening",
        tag: "Oncology",
        desc: "Why early detection saves lives. Understanding the different types of screening available at MTM's Diagnostic Center.",
        src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Navigating Pediatric Vaccination Schedules",
        tag: "Pediatrics",
        desc: "A parent's guide to understanding the IDAI recommended immunization schedule for infants and toddlers.",
        src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    },
];

const stagger = { visible: { transition: { staggerChildren: 0.1 } }, hidden: {} };

export function MtmBlogspotFeatured() {
    return (
        <section className="max-w-7xl mx-auto px-[45px] mb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                <motion.div variants={fadeLeft as any} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7 flex flex-col group cursor-pointer">
                    <div className="w-full h-[320px] md:h-[430px] rounded-[2.5rem] overflow-hidden mb-7 relative shadow-2xl shadow-blue-100/60 border border-white/80">
                        <Image src={featuredPost.src} alt={featuredPost.title} fill priority className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/5 to-transparent" />
                        <div className="absolute top-6 left-6"><span className="inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg"><Star size={11} className="fill-white" />{featuredPost.tag}</span></div>
                        <div className="absolute bottom-0 inset-x-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"><h3 className="font-heading font-black text-white text-xl drop-shadow-lg">{featuredPost.title}</h3></div>
                    </div>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-brand-dark mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">{featuredPost.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{featuredPost.desc}</p>
                    <div className="mt-5 flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">Read article <ArrowRight size={15} /></div>
                </motion.div>
                <motion.div variants={stagger as any} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5 flex flex-col gap-5 justify-between">
                    {sidePosts.map((post, i) => (
                        <motion.div key={i} variants={fadeRight as any} custom={i * 0.1} className="flex flex-col sm:flex-row gap-4 items-center bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-white/90 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group">
                            <div className="w-full sm:w-36 h-32 relative rounded-2xl overflow-hidden shrink-0 border border-blue-50 shadow-sm"><Image src={post.src} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                            <div className="flex-grow py-1 min-w-0">
                                <span className="inline-block text-[10px] text-blue-500 font-bold tracking-widest uppercase mb-1">{post.tag}</span>
                                <h4 className="font-heading font-bold text-base text-brand-dark mb-2 group-hover:text-blue-600 transition-colors leading-snug">{post.title}</h4>
                                <p className="text-[11px] text-gray-500 line-clamp-3 leading-relaxed">{post.desc}</p>
                            </div>
                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 opacity-0 group-hover:opacity-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 self-center"><ArrowRight size={14} /></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

