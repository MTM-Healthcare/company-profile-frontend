'use client';
import * as React from 'react';
import Image from 'next/image';
import { Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Use paracetamol.png for all as per the mockup
const mockProducts = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: "Paracetamol",
    image: "/paracetamol.png",
}));

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden bg-gradient-to-b from-[#eef4fc] to-[#e1edfc]">
            <Navbar />

            <main className="flex-1 pt-36 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center">
                
                {/* Header text */}
                <div className="text-center mb-8 mt-2">
                    <h1 className="font-heading font-black text-3xl md:text-[42px] text-[#22272e] leading-tight mb-3 tracking-tight">
                        Complete Pharmacy Center
                    </h1>
                    <p className="text-[13px] md:text-[14px] text-[#4a5568] max-w-xl mx-auto leading-snug font-medium">
                        We provide a wide range of high-quality medicines and medical equipment<br className="hidden md:block" />
                        guaranteed for authenticity and safety.
                    </p>
                </div>

                {/* Search & Filter Container */}
                <div className="w-full max-w-[700px] mb-12 flex flex-col items-end">
                    {/* Search Bar */}
                    <div className="w-full flex items-center bg-white rounded-full border border-gray-300 shadow-sm p-1.5 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                        <input
                            type="text"
                            placeholder="Type a medicine name, illness, or classification code..."
                            className="flex-grow pl-5 pr-4 py-2 outline-none text-[13px] text-gray-700 bg-transparent placeholder-gray-400"
                        />
                        <button className="bg-[#bfd4f9] hover:bg-[#aec9f5] border border-[#aabdf0] text-[#1e293b] font-bold text-[13px] px-8 py-2 rounded-full transition-colors shadow-sm">
                            Search
                        </button>
                    </div>

                    {/* Filter Button */}
                    <button className="mt-3 flex items-center gap-2 bg-white border border-gray-300 rounded-full px-5 py-1.5 text-[12px] font-bold text-[#1e293b] hover:bg-gray-50 transition-colors shadow-sm">
                        <Filter size={13} className="fill-[#1e293b]" /> Filters
                    </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full">
                    {mockProducts.map((product) => (
                        <div 
                            key={product.id} 
                            className="bg-white rounded-[14px] border border-gray-300 p-4 flex flex-col items-center hover:shadow-md transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative w-full h-[160px] md:h-[200px] mb-4">
                                <Image 
                                    src={product.image} 
                                    alt={product.name} 
                                    fill 
                                    className="object-contain"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                            <h3 className="font-black text-[#1e293b] text-[14px] mb-1 text-center font-heading">
                                {product.name}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4 mt-12 text-[#1e293b]">
                    <button className="text-gray-600 hover:text-black transition-colors">
                        <ChevronLeft size={18} strokeWidth={2.5} />
                    </button>
                    <div className="bg-white border border-gray-300 rounded-[6px] w-8 h-8 flex items-center justify-center font-bold text-[13px] shadow-sm text-[#1e293b]">
                        1
                    </div>
                    <button className="text-gray-600 hover:text-black transition-colors">
                        <ChevronRight size={18} strokeWidth={2.5} />
                    </button>
                </div>

            </main>

            <Footer />
        </div>
    );
}
