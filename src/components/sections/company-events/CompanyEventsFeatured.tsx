'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '@/utils/animations';
import type { Event } from '@/types/cms';

const stagger = { visible: { transition: { staggerChildren: 0.1 } }, hidden: {} };

const FALLBACK_EVENTS: Event[] = [
    {
        id: 1,
        title: "Project No #1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
        status: "published",
        createdAt: '',
        updatedAt: '',
    },
    {
        id: 2,
        title: "Project No #2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600",
        status: "published",
        createdAt: '',
        updatedAt: '',
    },
    {
        id: 3,
        title: "Project No #3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
        status: "published",
        createdAt: '',
        updatedAt: '',
    },
    {
        id: 4,
        title: "Project No #4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
        status: "published",
        createdAt: '',
        updatedAt: '',
    },
];

interface CompanyEventsFeaturedProps {
    events?: Event[];
}

export function CompanyEventsFeatured({ events = FALLBACK_EVENTS }: CompanyEventsFeaturedProps) {
    const featuredEvent = events[0];
    const sideEvents = events.slice(1, 4);

    if (!featuredEvent) return null;

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
                        <Link href={`/company-events/${featuredEvent.id}`} className="contents">
                            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[1.5rem] overflow-hidden shadow-md bg-white mb-6 border-2 border-white">
                                <Image
                                    src={featuredEvent.imageUrl}
                                    alt={featuredEvent.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-heading font-bold text-2xl text-[#1a202c] mb-3 group-hover:text-blue-600 transition-colors">
                                {featuredEvent.title}
                            </h3>
                            <p className="text-[13px] md:text-sm text-[#1a202c]/80 leading-relaxed font-medium">
                                {featuredEvent.description}
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
                        {sideEvents.map((evt, i) => (
                            <motion.div
                                key={evt.id}
                                variants={fadeRight as any}
                                custom={i * 0.1}
                                className="flex-1 flex"
                            >
                                <Link href={`/company-events/${evt.id}`} className="flex gap-4 items-stretch group cursor-pointer w-full">
                                    <div className="w-32 md:w-40 relative rounded-[1.5rem] overflow-hidden shrink-0 shadow-md bg-white border-2 border-white">
                                        <Image src={evt.imageUrl} alt={evt.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center py-2">
                                        <h4 className="font-heading font-bold text-lg text-[#1a202c] mb-1.5 group-hover:text-blue-600 transition-colors">
                                            {evt.title}
                                        </h4>
                                        <p className="text-[10px] md:text-[11px] text-[#1a202c]/80 leading-relaxed font-medium">
                                            {evt.description}
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
