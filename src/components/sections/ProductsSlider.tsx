'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
            const { scrollLeft, scrollWidth } = scrollContainerRef.current;
            const cardWidth = scrollWidth / products.length;
            const newIndex = Math.round(scrollLeft / cardWidth);
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

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => {
                const next = (current + 1) % products.length;
                if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const cardWidth = container.scrollWidth / products.length;
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
        <section className="w-full bg-gradient-to-b from-blue-50/40 via-[#e9effc] to-blue-100/30 py-20 relative overflow-hidden">
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
                            Our Product
                        </h2>
                        <p className="text-sm md:text-[15px] font-medium text-[#242e4c]/80 leading-relaxed font-sans max-w-md">
                            Professional and educated, prioritizing patients and<br className="hidden md:block"/>
                            customers as number one for health and good<br className="hidden md:block"/>
                            cooperation.
                        </p>
                    </div>

                    <div className="flex items-start shrink-0 pt-2">
                        <Link href="/products">
                            <button className="px-7 py-3 bg-[#CEDFFF] hover:bg-[#b5ccfb] text-[#242e4c] text-[15px] font-bold rounded-full transition-colors duration-300 font-sans shadow-sm backdrop-blur-sm border border-white/50 cursor-pointer">
                                See All Product
                            </button>
                        </Link>
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
                            className="bg-white rounded-[20px] p-6 shadow-sm border border-transparent hover:border-blue-100 flex flex-col items-start justify-end aspect-[3/4] group relative hover:shadow-lg transition-all duration-300 snap-center shrink-0 w-[260px] sm:w-[280px] md:w-[300px]"
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

                            <div className="relative z-20 w-full mt-auto">
                                <h3 className="font-heading font-bold text-[22px] text-[#242e4c] group-hover:text-[#183988] transition-colors duration-300">
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
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx
                            ? 'bg-[#B21F24] scale-125'
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
