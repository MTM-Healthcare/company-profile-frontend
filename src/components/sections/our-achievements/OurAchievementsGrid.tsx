'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/animations';
import type { Achievement } from '@/types/cms';

const FALLBACK: Achievement[] = [
    { id: 1, imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900', text: 'Project No #1', order: 0 },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900', text: 'Project No #2', order: 1 },
    { id: 3, imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900', text: 'Project No #3', order: 2 },
    { id: 4, imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900', text: 'Project No #4', order: 3 },
];

interface OurAchievementsGridProps {
    achievements?: Achievement[];
}

export function OurAchievementsGrid({ achievements = FALLBACK }: OurAchievementsGridProps) {
    return (
        <section className="w-full pb-24 pt-12 px-[45px]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {achievements.map((item, idx) => (
                        <motion.div key={item.id} variants={fadeUp as any} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx * 0.1}>
                            <Link href="/our-achievements/detail" className="flex flex-col group cursor-pointer">
                                <div className="w-full aspect-[4/3] md:aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-6 relative shadow-md bg-white border-2 border-white">
                                    <Image src={item.imageUrl} alt={item.text} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <h3 className="font-heading font-bold text-2xl text-[#1a202c] mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                                    {item.text}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
