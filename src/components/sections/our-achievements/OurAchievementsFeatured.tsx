'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '@/utils/animations';
import type { Achievement } from '@/types/cms';

const stagger = { visible: { transition: { staggerChildren: 0.1 } }, hidden: {} };

const FALLBACK: Achievement[] = [
    { id: 1, imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200', text: 'Project No #1', order: 0 },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600', text: 'Project No #2', order: 1 },
    { id: 3, imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600', text: 'Project No #3', order: 2 },
    { id: 4, imageUrl: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=600', text: 'Project No #4', order: 3 },
];

interface OurAchievementsFeaturedProps {
    achievements?: Achievement[];
}

export function OurAchievementsFeatured({ achievements = FALLBACK }: OurAchievementsFeaturedProps) {
    const [featured, ...side] = achievements;
    if (!featured) return null;

    return (
        <section className="w-full pt-16 pb-12 px-[45px]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Featured Left */}
                    <motion.div
                        variants={fadeLeft as any}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-7 flex flex-col group cursor-pointer"
                    >
                        <Link href="/our-achievements/detail" className="contents">
                            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[1.5rem] overflow-hidden shadow-md bg-white mb-6 border-2 border-white">
                                <Image
                                    src={featured.imageUrl}
                                    alt={featured.text}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-heading font-bold text-2xl text-[#1a202c] mb-3 group-hover:text-blue-600 transition-colors">
                                {featured.text}
                            </h3>
                        </Link>
                    </motion.div>

                    {/* List Right */}
                    <motion.div
                        variants={stagger as any}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col gap-6 justify-between"
                    >
                        {side.slice(0, 3).map((item, i) => (
                            <motion.div key={item.id} variants={fadeRight as any} custom={i * 0.1} className="flex-1 flex">
                                <Link href="/our-achievements/detail" className="flex gap-4 items-stretch group cursor-pointer w-full">
                                    <div className="w-32 md:w-40 relative rounded-[1.5rem] overflow-hidden shrink-0 shadow-md bg-white border-2 border-white">
                                        <Image src={item.imageUrl} alt={item.text} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center py-2">
                                        <h4 className="font-heading font-bold text-lg text-[#1a202c] mb-1.5 group-hover:text-blue-600 transition-colors">
                                            {item.text}
                                        </h4>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
