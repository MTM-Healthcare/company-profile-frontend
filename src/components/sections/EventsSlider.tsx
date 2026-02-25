'use client';
import * as React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
];

export function EventsSlider() {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center">
            <h2 className="font-heading font-bold text-3xl text-brand-dark">MTM Events</h2>
            <p className="text-sm text-gray-500 mt-2">Kegiatan dan Acara Medis Kami</p>

            <div className="mt-8 relative group">
                {/* Slider Container */}
                <div className="rounded-[2rem] shadow-md relative w-full h-[400px] bg-gray-100 overflow-hidden">
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={images[currentSlide]}
                                alt={`Event slide ${currentSlide + 1}`}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-blue-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition opacity-0 group-hover:opacity-100 z-10"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-blue-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition opacity-0 group-hover:opacity-100 z-10"
                >
                    <ChevronRight size={20} />
                </button>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-4 z-10 relative">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition ${idx === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
