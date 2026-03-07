'use client';
import * as React from 'react';
import Image from 'next/image';

const mockEvents = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800", // Using a generic medical image placeholder similar to the mockup
}));

export function WeDoManyEvents() {
    return (
        <section className="w-full bg-[#dbe8ff] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-start gap-8 mb-16">
                    {/* Left: Button */}
                    <button className="bg-white/90 hover:bg-white text-[#1a202c] font-bold text-sm px-7 py-3 rounded-full shadow-sm transition-colors border border-gray-200/50 mt-4 md:mt-2">
                        See All Projects
                    </button>

                    {/* Right: Title and Description text */}
                    <div className="md:w-3/5 md:text-right">
                        <h2 className="font-heading font-extrabold text-[#1a202c] text-3xl md:text-[34px] tracking-tight mb-4">
                            We Do Many Events
                        </h2>
                        <p className="text-[#1a202c] text-[13px] leading-relaxed font-medium md:ml-auto max-w-[600px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {mockEvents.map((event) => (
                        <div key={event.id} className="flex flex-col gap-4 group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src={event.image}
                                    alt="Medical Event"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                            </div>
                            
                            {/* Text underneath image */}
                            <p className="text-[#1a202c] text-[12px] leading-relaxed text-center font-medium px-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
