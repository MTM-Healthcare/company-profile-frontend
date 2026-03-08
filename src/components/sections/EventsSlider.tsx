'use client';
import * as React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '@/utils/animations';

export interface EventSlide {
    image: string;
    label?: string;
    title?: string;
    date?: string;
}

interface EventsSliderProps {
    slides: EventSlide[];
    title?: string;
    description?: string;
    badgeText?: string;
    hideHeader?: boolean;
}

export function EventsSlider({
    slides,
    title,
    description,
    badgeText,
    hideHeader = false
}: EventsSliderProps) {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${hideHeader ? '' : 'mt-32'}`}>
            {!hideHeader && (
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
                    {badgeText && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                            {badgeText}
                        </span>
                    )}
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
                        {title || "MTM Events"}
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}
                    </p>
                </motion.div>
            )}

            <div className="relative group">
                {/* Slider Container */}
                <div className="rounded-[2rem] shadow-2xl shadow-blue-100 relative w-full h-[420px] md:h-[500px] bg-gray-100 overflow-hidden">
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].title || "Event Image"}
                                fill
                                className="object-cover"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                            {/* Slide Text */}
                            {(slides[currentSlide].label || slides[currentSlide].title || slides[currentSlide].date) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="absolute bottom-10 left-8 text-left"
                                >
                                    {slides[currentSlide].label && (
                                        <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                            {slides[currentSlide].label}
                                        </span>
                                    )}
                                    {slides[currentSlide].title && (
                                        <h3 className="font-heading font-bold text-2xl md:text-3xl text-white drop-shadow mb-1">
                                            {slides[currentSlide].title}
                                        </h3>
                                    )}
                                    {slides[currentSlide].date && (
                                        <p className="text-sm text-blue-100 font-medium">{slides[currentSlide].date}</p>
                                    )}
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-blue-600 hover:text-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10 backdrop-blur-sm"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-blue-600 hover:text-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10 backdrop-blur-sm"
                >
                    <ChevronRight size={20} />
                </button>

                {/* Pill Dots */}
                <div className="flex justify-center gap-2 mt-5 z-10 relative">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-blue-600 w-8' : 'bg-blue-200 w-2.5'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
