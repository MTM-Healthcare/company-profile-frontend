'use client';
import * as React from 'react';
import Image from 'next/image';
import { Filter, Search, PackageSearch } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const products = [
    { id: 1, name: "Paracetamol", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300" },
    { id: 2, name: "Amoxicillin", image: "https://images.unsplash.com/photo-1550572017-edb309624515?auto=format&fit=crop&q=80&w=300" },
    { id: 3, name: "Vitamin C 500mg", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=300" },
    { id: 4, name: "Ibuprofen", image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=300" },
    { id: 5, name: "Cetirizine", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300" },
    { id: 6, name: "Omeprazole", image: "https://images.unsplash.com/photo-1550572017-edb309624515?auto=format&fit=crop&q=80&w=300" },
    { id: 7, name: "Multivitamin", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=300" },
    { id: 8, name: "Cough Syrup", image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=300" },
    { id: 9, name: "Antacid Liquid", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300" },
    { id: 10, name: "Aspirin", image: "https://images.unsplash.com/photo-1550572017-edb309624515?auto=format&fit=crop&q=80&w=300" },
    { id: 11, name: "Eye Drops", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=300" },
    { id: 12, name: "Asthma Inhaler", image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=300" },
];

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-1 pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 relative">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6"
                    >
                        <PackageSearch size={14} />
                        Product Catalog
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight mb-6 drop-shadow-sm"
                    >
                        Complete Pharmacy Center
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        We provide a wide range of high-quality medicines and medical equipment guaranteed for authenticity and safety.
                    </motion.p>
                </div>

                {/* Search & Filter Section */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-16"
                >
                    {/* Search Bar - Glassmorphism Style */}
                    <div className="max-w-3xl mx-auto relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200 to-indigo-100 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative flex items-stretch bg-white/70 backdrop-blur-md rounded-full shadow-lg border border-white/60 h-14 md:h-16">
                            <div className="pl-6 flex items-center text-gray-400">
                                <Search size={22} className="group-hover:text-blue-500 transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search for medicines, symptoms, or health supplements..."
                                className="flex-grow px-4 outline-none text-sm md:text-base text-gray-700 bg-transparent placeholder:text-gray-400"
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold px-6 md:px-10 rounded-r-full transition-colors duration-200 flex items-center justify-center gap-2 m-1">
                                <span className="hidden sm:inline">Find</span>
                                <Search size={18} className="sm:hidden" />
                            </button>
                        </div>
                    </div>

                    {/* Filter Button */}
                    <div className="max-w-3xl mx-auto mt-6 flex justify-center md:justify-end">
                        <button className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white rounded-full px-6 py-2.5 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-white hover:shadow-md transition-all duration-300 shadow-sm cursor-pointer">
                            <Filter size={16} /> Category Filter
                        </button>
                    </div>
                </motion.section>

                {/* Products Grid */}
                <section>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {products.map((product, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.05 * (idx % 4) }}
                                key={product.id}
                                className="bg-white/60 backdrop-blur-lg rounded-[2rem] p-5 shadow-sm border border-white/80 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 cursor-pointer group flex flex-col items-center hover:-translate-y-2 relative"
                            >
                                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full px-3 py-1 text-[10px] font-bold text-blue-600 border border-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    Available
                                </div>
                                <div className="relative h-40 md:h-48 w-full mb-5 flex items-center justify-center p-3 overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50/50 border border-white shadow-inner">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                        className="object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply p-4"
                                    />
                                </div>
                                <h3 className="font-heading font-bold text-base md:text-lg text-brand-dark text-center mt-auto group-hover:text-blue-600 transition-colors">
                                    {product.name}
                                </h3>
                                {/* Small animated underline effect */}
                                <div className="w-8 h-1 rounded-full bg-blue-100 mt-3 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
