'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, MessageCircle, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { fadeUp } from '@/utils/animations';

const locations = [
    {
        name: "Apotek MTM - Bekasi, Galaxy City",
        address: "Grand Galaxy City, Ruko Sentra Niaga Boulevard No 20, RT.001/RW.002, Jaka Setia, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17147",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.6393952!2d106.9634!3d-6.2755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTYnMzEuOCJTIDEwNsKwNTcnNDguMiJF!5e0!3m2!1sen!2sid!4v1700000000000"
    },
    {
        name: "Apotek MTM - Bintaro Trade Center",
        address: "Bintaro Trade Centre, Lantai Dasar Ruko Blok E2 06, Jl. Jend. Sudirman, Pusat Kawasan Niaga Bintaro Jaya Sektor VII, Tangerang, Kota Tangerang Selatan, Banten 15524",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.12341!2d106.7212!3d-6.2731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTYnMjMuMiJTIDEwNsKwNDMnMTYuMyJF!5e0!3m2!1sen!2sid!4v1700000000001"
    },
    {
        name: "Apotek HKM - Tangerang, Banjar Wijaya",
        address: "Pasar Modern Banjar Wijaya, Blok RA/7, Cipete, Kec. Pinang, Kota Tangerang, Banten 15141",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.551!2d106.6621!3d-6.2222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMTkuOSJTIDEwNsKwMzknNDMuNiJF!5e0!3m2!1sen!2sid!4v1700000000002"
    },
    {
        name: "MTM Medical Clinic - Tangerang",
        address: "Banjar Wijaya (Coming Soon)",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.551!2d106.6621!3d-6.2222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMTkuOSJTIDEwNsKwMzknNDMuNiJF!5e0!3m2!1sen!2sid!4v1700000000002" // Using Banjar Wijaya map for coming soon
    }
];

export function ConnectAndMap() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % locations.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 8000); // Auto change every 8 seconds
        return () => clearInterval(timer);
    }, [currentIndex]);
    
    return (
        <section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 py-14 rounded-3xl"
            style={{ backgroundColor: '#CEDFFF' }}
        >
            {/* Title â€” right-aligned */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-10 text-right"
            >
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-dark">
                    MTM Healthcare
                </h2>
                <p className="text-xl font-medium text-brand-dark/80 mt-2">
                    MTM #TemanSehatKamu
                </p>
            </motion.div>

            {/* Two columns */}
            <div className="flex flex-col md:flex-row gap-8 items-start">

                {/* Left â€” Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:w-2/5 w-full"
                >
                    <h3 className="font-heading font-bold text-xl text-brand-dark mb-4">Connect Here</h3>

                    {/* Social Icons */}
                    <div className="flex gap-2.5 mb-6">
                        <a href="https://instagram.com/mtm.healthcare" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-[4px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:opacity-90 transition shadow-sm">
                            <Instagram size={16} />
                        </a>
                        <a href="https://wa.me/62859106528909" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-[4px] bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm">
                            <MessageCircle size={16} /> {/* Using MessageCircle as placeholder for WA */}
                        </a>
                        <a href="#" className="w-8 h-8 rounded-[4px] bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm">
                            <Linkedin size={16} fill="currentColor" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-[4px] bg-black text-white flex items-center justify-center hover:opacity-90 transition shadow-sm">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-[4px] bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition shadow-sm">
                            {/* Facebook SVG Logo */}
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                    </div>

                    {/* Data Details below icons */}
                    <div className="text-[13px] md:text-sm text-brand-dark/90 leading-relaxed font-medium space-y-3 mb-8">
                        <p>
                            Instagram: @mtm.healthcare<br />
                            WhatsApp: 0859106528909
                        </p>
                        <p>
                            Jam Buka: Setiap Hari (07.00 - 19.00)
                        </p>
                        <p>
                            E-Commerce:<br />
                            <a href="https://www.tokopedia.com/amtm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                                https://www.tokopedia.com/amtm
                            </a>
                        </p>
                    </div>

                    {/* Address Display synced with map */}
                    <div className="bg-white/40 p-5 rounded-2xl shadow-sm border border-white/50 backdrop-blur-sm relative">
                        {/* Static height container so it doesn't jump */}
                        <div className="min-h-[140px] flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 text-blue-600 bg-white p-2 rounded-full shadow-sm">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-bold text-lg text-brand-dark mb-1">
                                                {locations[currentIndex].name}
                                                {currentIndex === 3 && <span className="ml-2 text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full uppercase tracking-widest align-middle">Coming Soon</span>}
                                            </h4>
                                            <p className="text-sm text-gray-700 leading-relaxed pr-2">
                                                {locations[currentIndex].address}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Dots Indicator inside the text box */}
                        <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
                            {locations.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-blue-600' : 'w-2 bg-blue-200 hover:bg-blue-400'
                                        }`}
                                    aria-label={`Go to location ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right â€” Google Map Carousel */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:w-3/5 w-full relative group"
                >
                    <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-white/60 bg-white relative h-[360px] md:h-[420px]">
                        <AnimatePresence mode="wait">
                            <motion.iframe
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                src={locations[currentIndex].mapSrc}
                                className="absolute inset-0 w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </AnimatePresence>

                        {/* Frosty Overlay for "Coming Soon" */}
                        {currentIndex === 3 && (
                            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-10">
                                <div className="bg-white/90 px-6 py-3 rounded-full shadow-lg border border-blue-100 flex items-center gap-2">
                                    <MapPin className="text-blue-500" size={20} />
                                    <span className="font-heading font-black text-brand-dark tracking-wide">Location Coming Soon</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-gray-800 shadow-lg flex items-center justify-center opacity-90 transition duration-300 hover:bg-blue-50 hover:text-blue-600 z-20"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-gray-800 shadow-lg flex items-center justify-center opacity-90 transition duration-300 hover:bg-blue-50 hover:text-blue-600 z-20"
                    >
                        <ChevronRight size={24} />
                    </button>

                </motion.div>
            </div>
        </section>
    );
}
