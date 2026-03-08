'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/animations';

const gridProjects = [
    {
        title: "Branch Expansion — Tangerang",
        desc: "Opening our newest state-of-the-art branch in BSD Tangerang Selatan, bringing premium healthcare closer to the growing suburb population.",
        src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900",
    },
    {
        title: "AI-Assisted Diagnostic Tools",
        desc: "Deploying machine learning models to assist radiologists and pathologists in detecting anomalies faster and with greater accuracy.",
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900",
    },
    {
        title: "Staff Training & Upskilling Hub",
        desc: "A dedicated internal training center providing continuous medical education, certification programs, and leadership development for our 500+ staff.",
        src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=900",
    },
    {
        title: "Green Pharmacy Initiative",
        desc: "Replacing plastic packaging with biodegradable materials across all pharmacy dispensing operations, reducing our annual plastic waste by 4 tonnes.",
        src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900",
    },
];

export function GridProjects() {
    return (
        <section className="w-full pb-24 pt-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {gridProjects.map((proj, idx) => (
                        <motion.div key={idx} variants={fadeUp as any} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx * 0.1}>
                            <Link href="/our-projects/detail" className="flex flex-col group cursor-pointer">
                                <div className="w-full aspect-[4/3] md:aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-6 relative shadow-md bg-white border-2 border-white">
                                    <Image src={proj.src} alt={proj.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <h3 className="font-heading font-bold text-2xl text-[#1a202c] mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                                    {proj.title}
                                </h3>
                                <p className="text-[13px] md:text-sm text-[#1a202c]/80 leading-relaxed font-medium">
                                    {proj.desc}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
