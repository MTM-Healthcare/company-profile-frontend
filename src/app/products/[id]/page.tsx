'use client';
import * as React from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useState } from 'react';

export default function ProductDetailPage() {
    // Accordion State Management
    const [openSection, setOpenSection] = useState<string | null>('deskripsi');

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-1 pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                
                {/* Top Section: Images and Details side-by-side */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-12">
                    
                    {/* Left: Product Images */}
                    <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col gap-4">
                        {/* Main Image */}
                        <div className="bg-white rounded-[16px] border border-gray-300 shadow-sm aspect-square w-full flex items-center justify-center p-8 relative">
                            <Image
                                src="/paracetamol.png"
                                alt="Vitamin E Main"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        {/* Thumbnails */}
                        <div className="flex gap-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="bg-white rounded-[12px] border border-gray-300 shadow-sm aspect-square flex-1 relative flex items-center justify-center cursor-pointer hover:border-gray-400">
                                    <Image
                                        src="/paracetamol.png"
                                        alt={`Vitamin E Thumbnail ${item}`}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col">
                        <p className="text-[#8a8a8a] font-semibold text-[15px] mb-2 tracking-wide font-heading">Vitamin & Supply</p>
                        <h1 className="font-heading font-black text-[36px] md:text-[42px] text-[#1a1a1a] leading-tight mb-2 tracking-tight">
                            Vitamin E
                        </h1>
                        <p className="font-heading font-extrabold text-[20px] md:text-[22px] text-[#1a1a1a] mb-6">
                            Rp 43.000
                        </p>
                        
                        <div className="text-[13.5px] text-[#1a1a1a] leading-[1.6] space-y-4 mb-8 font-medium">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        <button className="bg-[#9e2a2b] hover:bg-[#852324] text-white font-bold text-[15px] px-8 py-3.5 rounded-xl transition-colors shadow-md w-full md:w-auto self-start border border-[#7a1f20]">
                            Pesan Sekarang
                        </button>
                    </div>

                </div>

                {/* Bottom Section: Accordions */}
                <div className="flex flex-col gap-4 w-full max-w-3xl">
                    
                    {/* Accordion 1: Deskripsi & Manfaat */}
                    <div className="bg-white rounded-[16px] shadow-sm overflow-hidden border border-gray-200">
                        <button 
                            onClick={() => toggleSection('deskripsi')}
                            className="w-full px-6 py-5 flex items-center justify-between bg-white text-left focus:outline-none"
                        >
                            <span className="font-heading font-extrabold text-[#1a1a1a] text-[16px] tracking-tight">Deskripsi & Manfaat</span>
                            <ChevronDown 
                                size={20} 
                                className={`text-gray-500 transition-transform duration-300 ${openSection === 'deskripsi' ? 'rotate-180' : ''}`} 
                                strokeWidth={2} 
                            />
                        </button>
                        <div className={`px-6 pb-6 text-[12.5px] text-[#2c3e50] leading-[1.6] font-medium transition-all duration-300 ease-in-out ${openSection === 'deskripsi' ? 'block' : 'hidden'}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>

                    {/* Accordion 2: Dosis & Aturan Pakai */}
                    <div className="bg-white rounded-[16px] shadow-sm overflow-hidden border border-gray-200">
                        <button 
                            onClick={() => toggleSection('dosis')}
                            className="w-full px-6 py-5 flex items-center justify-between bg-white text-left focus:outline-none"
                        >
                            <span className="font-heading font-extrabold text-[#1a1a1a] text-[16px] tracking-tight">Dosis & Aturan Pakai</span>
                            {openSection === 'dosis' ? (
                                <ChevronDown size={20} className="text-gray-500 rotate-180 transition-transform duration-300" strokeWidth={2} />
                            ) : (
                                <ChevronRight size={20} className="text-gray-500 transition-transform duration-300" strokeWidth={2} />
                            )}
                        </button>
                        {openSection === 'dosis' && (
                             <div className="px-6 pb-6 text-[12.5px] text-[#2c3e50] leading-[1.6] font-medium">
                                Informasi detail mengenai dosis dan aturan pakai akan ditampilkan di sini.
                             </div>
                        )}
                    </div>

                    {/* Accordion 3: Informasi Keamanan */}
                    <div className="bg-white rounded-[16px] shadow-sm overflow-hidden border border-gray-200">
                         <button 
                            onClick={() => toggleSection('keamanan')}
                            className="w-full px-6 py-5 flex items-center justify-between bg-white text-left focus:outline-none"
                        >
                            <span className="font-heading font-extrabold text-[#1a1a1a] text-[16px] tracking-tight">Informasi Keamanan</span>
                            <ChevronDown 
                                size={20} 
                                className={`text-gray-500 transition-transform duration-300 ${openSection === 'keamanan' ? 'rotate-180' : ''}`} 
                                strokeWidth={2} 
                            />
                        </button>
                        <div className={`px-6 pb-6 text-[12.5px] text-[#2c3e50] leading-[1.6] font-medium transition-all duration-300 ease-in-out ${openSection === 'keamanan' ? 'block' : 'hidden'}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>

                    {/* Accordion 4: Detail Produk */}
                    <div className="bg-white rounded-[16px] shadow-sm overflow-hidden border border-gray-200">
                        <button 
                            onClick={() => toggleSection('detail')}
                            className="w-full px-6 py-5 flex items-center justify-between bg-white text-left focus:outline-none"
                        >
                            <span className="font-heading font-extrabold text-[#1a1a1a] text-[16px] tracking-tight">Detail Produk</span>
                            {openSection === 'detail' ? (
                                <ChevronDown size={20} className="text-gray-500 rotate-180 transition-transform duration-300" strokeWidth={2} />
                            ) : (
                                <ChevronRight size={20} className="text-gray-500 transition-transform duration-300" strokeWidth={2} />
                            )}
                        </button>
                        {openSection === 'detail' && (
                             <div className="px-6 pb-6 text-[12.5px] text-[#2c3e50] leading-[1.6] font-medium">
                                Informasi tambahan mengenai komposisi, produsen, dan detail teknis produk.
                             </div>
                        )}
                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
}
