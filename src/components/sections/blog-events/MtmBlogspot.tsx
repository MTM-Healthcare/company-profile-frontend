'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/types/cms';

const FALLBACK_POSTS: BlogPost[] = [
    { id: 1, title: 'Project No #1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200', category: 'Health', status: 'published', createdAt: '', updatedAt: '' },
    { id: 2, title: 'Project No #2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', category: 'Health', status: 'published', createdAt: '', updatedAt: '' },
    { id: 3, title: 'Project No #3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', category: 'Health', status: 'published', createdAt: '', updatedAt: '' },
    { id: 4, title: 'Project No #4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', category: 'Health', status: 'published', createdAt: '', updatedAt: '' },
];

interface MtmBlogspotProps {
    posts?: BlogPost[];
}

export function MtmBlogspot({ posts = FALLBACK_POSTS }: MtmBlogspotProps) {
    const [featured, ...side] = posts;
    if (!featured) return null;

    return (
        <section className="w-full py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-[45px]">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <h2 className="font-heading font-extrabold text-[#22272e] text-4xl md:text-[42px] tracking-tight">
                        MTM Blogspot
                    </h2>
                    <button className="bg-[#c2d6fb] hover:bg-[#aec9f5] border border-[#aabdf0] text-[#1e293b] font-bold text-sm px-8 py-3 rounded-full transition-colors shadow-sm">
                        See All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                    {/* Featured Post (Left) */}
                    <Link href={`/mtm-blogspot/${featured.id}`} className="lg:col-span-7 flex flex-col group cursor-pointer">
                        <div className="relative w-full h-[300px] md:h-[420px] rounded-3xl overflow-hidden mb-6 shadow-sm border border-gray-200/50">
                            <Image
                                src={featured.imageUrl}
                                alt={featured.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <h3 className="font-heading font-bold text-2xl md:text-[26px] text-[#22272e] mb-3">
                            {featured.title}
                        </h3>
                        <p className="text-[#1a202c] text-[13px] leading-relaxed font-medium">
                            {featured.description}
                        </p>
                    </Link>

                    {/* Small Posts List (Right) */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6 md:gap-0">
                        {side.slice(0, 3).map((post) => (
                            <Link key={post.id} href={`/mtm-blogspot/${post.id}`} className="flex gap-5 items-center group cursor-pointer">
                                <div className="relative w-36 h-[100px] rounded-2xl overflow-hidden shrink-0 shadow-sm border border-gray-200/50">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex flex-col justify-center flex-1">
                                    <p className="text-[#1a202c] text-[10px] sm:text-[11px] font-medium leading-[1.6] mb-2 line-clamp-4">
                                        {post.description}
                                    </p>
                                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#22272e]">
                                        {post.title}
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
