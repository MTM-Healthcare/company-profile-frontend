'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-1 pt-36 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center">
                
                {/* Header text */}
                <div className="text-center mb-10 mt-2">
                    <h1 className="font-heading font-extrabold text-[36px] md:text-[42px] text-[#1a1a1a] leading-tight mb-4 tracking-tight">
                        Pusat Farmasi Lengkap
                    </h1>
                    <p className="text-[13px] md:text-[14px] text-[#1a1a1a] max-w-[700px] mx-auto leading-[1.6] font-medium">
                        Kami menyediakan berbagai macam obat-obatan berkualitas tinggi dan peralatan medis yang dijamin keaslian dan keamanannya
                    </p>
                </div>

                {/* Search & Filter Container */}
                <div className="w-full max-w-[800px] mb-12 flex flex-col items-end">
                    {/* Search Bar */}
                    <div className="w-full flex items-center bg-white rounded-full border border-gray-400 shadow-[0_4px_10px_rgb(0,0,0,0.03)] focus-within:border-gray-500 transition-all overflow-hidden h-[46px]">
                        <input
                            type="text"
                            placeholder="Ketik nama obat yang dicari.."
                            className="flex-grow pl-6 pr-4 py-2 outline-none text-[13px] text-gray-700 bg-transparent placeholder-gray-400 font-medium"
                        />
                        <button className="bg-[#CFE1FF] border-l border-gray-400 text-[#1a1a1a] font-bold text-[14px] px-10 h-full flex items-center justify-center transition-colors">
                            Cari
                        </button>
                    </div>

                    {/* Filter Button */}
                    <button className="mt-4 flex items-center gap-2 bg-white border border-gray-400 rounded-full px-6 py-1.5 text-[13px] font-bold text-[#1a1a1a] hover:bg-gray-50 transition-colors shadow-sm">
                        <Filter size={14} className="fill-[#1a1a1a] text-[#1a1a1a]" /> Filter
                    </button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full">
                    {mockProducts.map((product) => (
                        <div 
                            key={product.id} 
                            className="bg-white rounded-[14px] border border-gray-400 p-4 pb-5 flex flex-col items-center hover:shadow-md transition-all duration-300 relative"
                        >
                            <div className="relative w-full h-[180px] md:h-[220px] mb-3">
                                <Image 
                                    src={product.image} 
                                    alt={product.name} 
                                    fill 
                                    className="object-contain"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                            <h3 className="font-extrabold text-[#1a1a1a] text-[15px] mb-4 text-center font-heading w-full text-left pl-1">
                                {product.name}
                            </h3>
                            <Link href={`/products/${product.id}`} className="w-full">
                                <button className="bg-[#CFE1FF] border border-gray-400 text-[#1a1a1a] font-bold text-[12px] w-full py-1.5 rounded-full hover:bg-[#b5cff6] transition-colors">
                                    Cari
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-5 mt-14 text-[#1a1a1a]">
                    <button className="text-gray-600 hover:text-black transition-colors">
                        <ChevronLeft size={20} strokeWidth={2.5} />
                    </button>
                    <div className="bg-white border text-gray-400 border-gray-300 rounded-[8px] w-8 h-8 flex items-center justify-center font-bold text-[14px] shadow-sm">
                        1
                    </div>
                    <button className="text-gray-600 hover:text-black transition-colors">
                        <ChevronRight size={20} strokeWidth={2.5} />
                    </button>
                </div>

            </main>

            <Footer />
        </div>
    );
}
