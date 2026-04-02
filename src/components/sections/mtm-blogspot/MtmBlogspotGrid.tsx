'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { fadeUp } from '@/utils/animations';
import type { BlogPost } from '@/types/cms';

const FALLBACK_POSTS: BlogPost[] = [
    {
        id: 1,
        title: "Mental Health in the Workplace: Recognizing Burnout",
        category: "Mental Health",
        description: "Workplace stress is on the rise. Learn to identify the early signs of burnout and discover practical coping strategies for a healthier work-life balance.",
        imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900",
        status: "published",
        createdAt: '',
        updatedAt: '',
    },
    {
        id: 2,
        title: "Heart Disease Prevention: What You Need to Know",
        category: "Cardiology",
        description: "Cardiovascular conditions remain leading causes of mortality. Discover lifestyle changes and dietary guidelines that can significantly lower your risk.",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=900",
        status: "published",
        createdAt: '',
        updatedAt: '',
    },
    {
        id: 3,
        title: "Demystifying Pharmacy Compounding",
        category: "Pharmacy",
        description: "When one-size-fits-all medications don't work, compounding pharmacies provide tailored solutions.",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900",
        status: "published",
        createdAt: '',
        updatedAt: '',
    },
    {
        id: 4,
        title: "Nutrition for Seniors: Staying Healthy After 60",
        category: "Geriatrics",
        description: "Aging changes our bodies' nutritional needs. Explore expert advice on meal planning, essential supplements, and maintaining muscle mass.",
        imageUrl: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=900",
        status: "published",
        createdAt: '',
        updatedAt: '',
    },
];

interface MtmBlogspotGridProps {
    posts?: BlogPost[];
}

export function MtmBlogspotGrid({ posts = FALLBACK_POSTS }: MtmBlogspotGridProps) {
    return (
        <section className="max-w-7xl mx-auto px-[45px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {posts.map((post, idx) => (
                    <Link key={post.id || idx} href={`/mtm-blogspot/${post.id}`}>
                    <motion.div variants={fadeUp as any} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx * 0.1} className="flex flex-col group cursor-pointer">
                        <div className="w-full h-[280px] md:h-[360px] rounded-[2.5rem] overflow-hidden mb-7 relative border border-white/80 shadow-xl shadow-blue-100/40">
                            <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-blue-700 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm tracking-wide uppercase"><Zap size={9} className="fill-blue-500 text-blue-500" />{post.category}</span>
                            </div>
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-brand-dark mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-snug">{post.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{post.description}</p>
                        <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">Read article <ArrowRight size={15} /></div>
                    </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
