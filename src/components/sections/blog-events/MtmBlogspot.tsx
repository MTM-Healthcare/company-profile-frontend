'use client';
import * as React from 'react';
import Image from 'next/image';

const mockProjects = Array.from({ length: 3 }).map((_, i) => ({
    id: i + 2,
    number: `Project No #${i + 2}`,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800", // Using general medical corridor image
}));

export function MtmBlogspot() {
    return (
        <section className="w-full py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
                    {/* Featured Project (Left) */}
                    <div className="lg:col-span-7 flex flex-col group cursor-pointer">
                        <div className="relative w-full h-[300px] md:h-[420px] rounded-3xl overflow-hidden mb-6 shadow-sm border border-gray-200/50">
                            <Image
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
                                alt="Main Project"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <h3 className="font-heading font-bold text-2xl md:text-[26px] text-[#22272e] mb-3">
                            Project No #1
                        </h3>
                        <p className="text-[#1a202c] text-[13px] leading-relaxed font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    {/* Small Projects List (Right) */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6 md:gap-0">
                        {mockProjects.map((project) => (
                            <div key={project.id} className="flex gap-5 items-center group cursor-pointer">
                                <div className="relative w-36 h-[100px] rounded-2xl overflow-hidden shrink-0 shadow-sm border border-gray-200/50">
                                    <Image
                                        src={project.image}
                                        alt={project.number}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex flex-col justify-center flex-1">
                                    <p className="text-[#1a202c] text-[10px] sm:text-[11px] font-medium leading-[1.6] mb-2 line-clamp-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#22272e]">
                                        {project.number}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
