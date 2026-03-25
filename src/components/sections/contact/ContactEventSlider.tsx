'use client';
import * as React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

interface ContactEventSliderProps {
    images: string[];
}

export function ContactEventSlider({ images }: ContactEventSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-carousel effect
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [nextSlide]);

    if (!images || images.length === 0) return null;

    return (
        <div className="w-full py-16 md:py-20 relative">
            <div className="max-w-6xl mx-auto px-[45px] relative group">
                
                {/* Main Image Container */}
                <div className="w-full relative aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-white">
                    <Image
                        src={images[currentIndex]}
                        alt={`Contact Event Slide ${currentIndex + 1}`}
                        fill
                        className="object-cover transition-opacity duration-500"
                    />
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#1b365d] hover:bg-[#132644] text-white rounded-full flex items-center justify-center shadow-lg transition-all z-10 opacity-90 hover:opacity-100 hidden md:flex"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} strokeWidth={2.5} className="ml-[-2px]" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#1b365d] hover:bg-[#132644] text-white rounded-full flex items-center justify-center shadow-lg transition-all z-10 opacity-90 hover:opacity-100 hidden md:flex"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} strokeWidth={2.5} className="mr-[-2px]" />
                </button>

                {/* Mobile Arrows (visible only on small screens) */}
                <div className="flex md:hidden justify-between absolute top-1/2 -translate-y-1/2 left-4 right-4 z-10">
                    <button
                        onClick={prevSlide}
                        className="w-8 h-8 bg-[#1b365d]/80 text-white rounded-full flex items-center justify-center shadow-md pb-[1px]"
                    >
                        <ChevronLeft size={18} strokeWidth={2.5} className="ml-[-1px]" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-8 h-8 bg-[#1b365d]/80 text-white rounded-full flex items-center justify-center shadow-md pb-[1px]"
                    >
                        <ChevronRight size={18} strokeWidth={2.5} className="mr-[-1px]" />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center gap-2 mt-8">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`rounded-full transition-all duration-300 ${
                                currentIndex === idx 
                                ? 'w-3 h-3 bg-[#9e2a2b]' // Active dot (dark red)
                                : 'w-2.5 h-2.5 bg-[#1b365d] hover:bg-[#1b365d]/80' // Inactive dots (dark blue)
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
                
            </div>
        </div>
    );
}

