'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useAnimation, PanInfo } from 'framer-motion';
import Image from 'next/image';

const partners = [
    { id: 1, name: 'Kalbe Farma', image: '/kalbe.png' },
    { id: 2, name: 'Kalbe Farma', image: '/kalbe.png' },
    { id: 3, name: 'Kalbe Farma', image: '/kalbe.png' },
    { id: 4, name: 'Kalbe Farma', image: '/kalbe.png' },
    { id: 5, name: 'Kalbe Farma', image: '/kalbe.png' },
    { id: 6, name: 'Kalbe Farma', image: '/kalbe.png' },
];

const CARD_WIDTH = 350;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;

export function OurPartner() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [trackWidth, setTrackWidth] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const controls = useAnimation();
    const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isDragging = useRef(false);

    /* ─── Measure track width ─── */
    useEffect(() => {
        const measure = () => {
            if (trackRef.current) setTrackWidth(trackRef.current.offsetWidth);
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    /* ─── Max drag constraint (negative = dragged left) ─── */
    const maxDrag = -(partners.length * STEP - STEP - trackWidth + CARD_GAP);

    /* ─── Snap to a specific index with smooth spring ─── */
    const snapToIndex = useCallback((index: number) => {
        const target = Math.max(Math.min(-(index * STEP), 0), maxDrag);
        controls.start({
            x: target,
            transition: { type: 'spring', stiffness: 300, damping: 35, mass: 0.8 },
        });
        setActiveIndex(index);
    }, [controls, maxDrag]);

    /* ─── Auto-advance ─── */
    const startAutoTimer = useCallback(() => {
        if (autoTimerRef.current) clearInterval(autoTimerRef.current);
        autoTimerRef.current = setInterval(() => {
            setActiveIndex((cur) => {
                const next = (cur + 1) % partners.length;
                const target = Math.max(-(next * STEP), maxDrag);
                controls.start({
                    x: target,
                    transition: { type: 'spring', stiffness: 300, damping: 35, mass: 0.8 },
                });
                return next;
            });
        }, 3000);
    }, [controls, maxDrag]);

    useEffect(() => {
        startAutoTimer();
        return () => { if (autoTimerRef.current) clearInterval(autoTimerRef.current); };
    }, [startAutoTimer]);

    /* ─── Drag handlers ─── */
    const onDragStart = () => {
        isDragging.current = true;
        if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };

    const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        isDragging.current = false;
        const currentX = x.get();
        const velocity = info.velocity.x;

        // Figure out which index to snap to based on position + velocity
        let targetIndex = Math.round(-currentX / STEP);
        if (velocity < -200) targetIndex = Math.min(targetIndex + 1, partners.length - 1);
        if (velocity > 200) targetIndex = Math.max(targetIndex - 1, 0);
        targetIndex = Math.max(0, Math.min(targetIndex, partners.length - 1));

        snapToIndex(targetIndex);
        startAutoTimer();
    };

    return (
        <section className="w-full py-20 relative overflow-hidden bg-transparent mt-4">
            <div className="max-w-7xl mx-auto px-[45px]">
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

                {/* Carousel Track */}
                <div ref={trackRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: maxDrag, right: 0 }}
                        dragElastic={0.08}
                        dragTransition={{ bounceStiffness: 400, bounceDamping: 40 }}
                        style={{ x }}
                        animate={controls}
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                        className="flex gap-6 w-max py-4"
                    >
                        {partners.map((partner, idx) => (
                            <div
                                key={partner.id}
                                className="flex items-center justify-center shrink-0 overflow-hidden rounded-xl
                                           w-[320px] sm:w-[380px] md:w-[420px] h-[220px]"
                            >
                                <div className="relative w-full h-full pointer-events-none">
                                    <Image
                                        src={partner.image}
                                        alt={partner.name}
                                        fill
                                        className="object-contain opacity-80 mix-blend-multiply p-3"
                                        sizes="420px"
                                        draggable={false}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Slider Indicator */}
                <div className="flex justify-center mt-8">
                    <div className="relative w-48 h-1.5 bg-[#183988]/20 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-[#98141F] rounded-full"
                            animate={{
                                width: `${100 / partners.length}%`,
                                x: `${activeIndex * 100}%`,
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
