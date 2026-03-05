'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Paracetamol',
    },
    {
        id: 2,
        name: 'Paracetamol',
    },
    {
        id: 3,
        name: 'Paracetamol',
    },
    {
        id: 4,
        name: 'Paracetamol',
    },
    {
        id: 5,
        name: 'Paracetamol',
    },
    {
        id: 6,
        name: 'Paracetamol',
    },
];

export function ProductsSlider() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.offsetWidth * 0.8;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const newIndex = Math.round(scrollLeft / clientWidth);
            setActiveIndex(newIndex);
        }
    };

    const scrollToProduct = (index: number) => {
        if (scrollContainerRef.current) {
            const current = scrollContainerRef.current;
            const cardWidth = current.scrollWidth / products.length;
            current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-24">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-end justify-between mb-10"
            >

                {/* Navigation Arrows */}
                <div className="hidden md:flex items-center gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-brand-dark hover:text-brand-dark hover:bg-white transition-all cursor-pointer shadow-sm active:scale-95 z-10"
                        aria-label="Geser ke kiri"
                    >
                        <ChevronLeft className="w-5 h-5 pointer-events-none" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-brand-dark hover:text-brand-dark hover:bg-white transition-all cursor-pointer shadow-sm active:scale-95 z-10"
                        aria-label="Geser ke kanan"
                    >
                        <ChevronRight className="w-5 h-5 pointer-events-none" />
                    </button>
                </div>
            </motion.div>

            {/* Product Cards Slider */}
            <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-4 hide-scrollbar cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: idx * 0.1,
                            }}
                            className="bg-gradient-to-br from-blue-50 to-white backdrop-blur-md rounded-2xl p-5 md:p-6 border-[2px] border-white shadow-lg shadow-blue-100/40 flex flex-col items-start justify-end aspect-[3/4] group relative hover:shadow-xl hover:shadow-blue-200/60 transition-all duration-500 snap-center shrink-0 w-[200px] sm:w-[220px] md:w-[240px]"
                        >
                            {/* Product Image */}
                            <div className="absolute inset-x-0 bottom-1/4 top-6 flex items-center justify-center pointer-events-none z-10">
                                <div className="relative w-full h-full max-h-[170px] group-hover:scale-110 group-hover:-translate-y-3 transition-transform duration-500 origin-bottom">
                                    <Image
                                        src="/paracetamol.png"
                                        alt={product.name}
                                        fill
                                        className="object-contain drop-shadow-xl"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </div>

                            <div className="relative z-20 w-full pt-2 mt-auto">
                                <h3 className="font-heading font-bold text-lg text-brand-dark group-hover:text-blue-600 transition-colors duration-300">
                                    {product.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
                {products.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToProduct(idx)}
                        aria-label={`Lihat produk ${idx + 1}`}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === idx
                            ? 'bg-brand-dark scale-110'
                            : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
