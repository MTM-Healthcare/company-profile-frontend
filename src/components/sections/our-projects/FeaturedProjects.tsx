'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '@/utils/animations';
import type { Project } from '@/types/cms';

const stagger = { visible: { transition: { staggerChildren: 0.1 } }, hidden: {} };

const FALLBACK: Project[] = [
    { id: 1, imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200', title: 'Project No #1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', linkText: 'Project No #1', isFeatured: true, order: 0, createdAt: '', updatedAt: '' },
    { id: 2, imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600', title: 'Project No #2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', linkText: 'Project No #2', isFeatured: false, order: 1, createdAt: '', updatedAt: '' },
    { id: 3, imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600', title: 'Project No #3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', linkText: 'Project No #3', isFeatured: false, order: 2, createdAt: '', updatedAt: '' },
    { id: 4, imageUrl: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=600', title: 'Project No #4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', linkText: 'Project No #4', isFeatured: false, order: 3, createdAt: '', updatedAt: '' },
];

interface FeaturedProjectsProps {
    projects?: Project[];
}

export function FeaturedProjects({ projects = FALLBACK }: FeaturedProjectsProps) {
    const [featured, ...side] = projects;
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
                        <Link href="/our-projects/detail" className="contents">
                            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[1.5rem] overflow-hidden shadow-md bg-white mb-6 border-2 border-white">
                                <Image
                                    src={featured.imageUrl}
                                    alt={featured.title ?? featured.description}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-heading font-bold text-2xl text-[#1a202c] mb-3 group-hover:text-blue-600 transition-colors">
                                {featured.title ?? featured.linkText ?? 'Project'}
                            </h3>
                            <p className="text-[13px] md:text-sm text-[#1a202c]/80 leading-relaxed font-medium">
                                {featured.description}
                            </p>
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
                        {side.slice(0, 3).map((proj, i) => (
                            <motion.div key={proj.id} variants={fadeRight as any} custom={i * 0.1} className="flex-1 flex">
                                <Link href="/our-projects/detail" className="flex gap-4 items-stretch group cursor-pointer w-full">
                                    <div className="w-32 md:w-40 relative rounded-[1.5rem] overflow-hidden shrink-0 shadow-md bg-white border-2 border-white">
                                        <Image src={proj.imageUrl} alt={proj.title ?? proj.description} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center py-2">
                                        <h4 className="font-heading font-bold text-lg text-[#1a202c] mb-1.5 group-hover:text-blue-600 transition-colors">
                                            {proj.title ?? proj.linkText ?? `Project No #${i + 2}`}
                                        </h4>
                                        <p className="text-[10px] md:text-[11px] text-[#1a202c]/80 leading-relaxed font-medium">
                                            {proj.description}
                                        </p>
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
