'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/animations';
import type { Project } from '@/types/cms';

const FALLBACK: Project[] = [
    { id: 1, imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900', title: 'Branch Expansion — Tangerang', description: 'Opening our newest state-of-the-art branch in BSD Tangerang Selatan, bringing premium healthcare closer to the growing suburb population.', linkText: null, isFeatured: false, order: 0, createdAt: '', updatedAt: '' },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900', title: 'AI-Assisted Diagnostic Tools', description: 'Deploying machine learning models to assist radiologists and pathologists in detecting anomalies faster and with greater accuracy.', linkText: null, isFeatured: false, order: 1, createdAt: '', updatedAt: '' },
    { id: 3, imageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=900', title: 'Staff Training & Upskilling Hub', description: 'A dedicated internal training center providing continuous medical education, certification programs, and leadership development for our 500+ staff.', linkText: null, isFeatured: false, order: 2, createdAt: '', updatedAt: '' },
    { id: 4, imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900', title: 'Green Pharmacy Initiative', description: 'Replacing plastic packaging with biodegradable materials across all pharmacy dispensing operations, reducing our annual plastic waste by 4 tonnes.', linkText: null, isFeatured: false, order: 3, createdAt: '', updatedAt: '' },
];

interface GridProjectsProps {
    projects?: Project[];
}

export function GridProjects({ projects = FALLBACK }: GridProjectsProps) {
    return (
        <section className="w-full pb-24 pt-12 px-[45px]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {projects.map((proj, idx) => (
                        <motion.div key={proj.id} variants={fadeUp as any} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx * 0.1}>
                            <Link href="/our-projects/detail" className="flex flex-col group cursor-pointer">
                                <div className="w-full aspect-[4/3] md:aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-6 relative shadow-md bg-white border-2 border-white">
                                    <Image src={proj.imageUrl} alt={proj.title ?? proj.description} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <h3 className="font-heading font-bold text-2xl text-[#1a202c] mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                                    {proj.title ?? proj.linkText ?? `Project No #${idx + 1}`}
                                </h3>
                                <p className="text-[13px] md:text-sm text-[#1a202c]/80 leading-relaxed font-medium">
                                    {proj.description}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
