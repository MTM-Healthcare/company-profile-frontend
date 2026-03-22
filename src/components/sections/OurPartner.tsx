'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
    { id: 1, name: 'Kalbe Farma', image: '/kalbe.png' },
    { id: 2, name: 'Kalbe Farma', image: '/kalbe.png' },
    { id: 3, name: 'Kalbe Farma', image: '/kalbe.png' },
    { id: 4, name: 'Kalbe Farma', image: '/kalbe.png' },
    { id: 5, name: 'Kalbe Farma', image: '/kalbe.png' },
    { id: 6, name: 'Kalbe Farma', image: '/kalbe.png' },
];

export function OurPartner() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth } = scrollContainerRef.current;
            const cardWidth = scrollWidth / partners.length;
            const newIndex = Math.round(scrollLeft / cardWidth);
            setActiveIndex(newIndex);
        }
    };

    const scrollToPartner = (index: number) => {
        if (scrollContainerRef.current) {
            const current = scrollContainerRef.current;
            const cardWidth = current.scrollWidth / partners.length;
            current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => {
                const next = (current + 1) % partners.length;
                if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const cardWidth = container.scrollWidth / partners.length;
                    container.scrollTo({
                        left: cardWidth * next,
                        behavior: 'smooth'
                    });
                }
                return next;
            });
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full py-20 relative overflow-hidden bg-transparent mt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-6 w-full"
                >
                    <div className="flex-1 max-w-2xl">
                        <h2 className="text-5xl md:text-[54px] font-heading font-extrabold text-[#242e4c] mb-6 tracking-tight">
                            Partner Resmi Kami
                        </h2>
                        <p className="text-sm md:text-[15px] font-medium text-[#242e4c]/80 leading-relaxed font-sans max-w-md">
                            Profesional dan berpendidikan, mengutamakan pasien dan pelanggan sebagai prioritas utama untuk kesehatan dan kerja sama yang baik.
                        </p>
                    </div>
                </motion.div>

                {/* Partner Cards Slider */}
                <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-4 hide-scrollbar cursor-grab active:cursor-grabbing"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {partners.map((partner, idx) => (
                            <motion.div
                                key={partner.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: idx * 0.1,
                                }}
                                className="flex items-center justify-center group relative transition-all duration-300 snap-center shrink-0 w-[280px] sm:w-[320px] md:w-[350px] h-[180px]"
                            >
                                {/* Partner Image */}
                                <div className="relative w-[480px] h-[240px] group-hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={partner.image}
                                        alt={partner.name}
                                        fill
                                        className="object-contain opacity-80 group-hover:opacity-100 mix-blend-multiply"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center gap-2 mt-8">
                    {partners.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToPartner(idx)}
                            aria-label={`Lihat partner ${idx + 1}`}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === idx
                                ? 'bg-[#98141F] scale-110'
                                : 'bg-[#183988] hover:bg-[#0c2460]'
                                }`}
                        />
                    ))}
                </div>
            </div>
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
