'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';

import { companyFaqData } from '@/data/faq';
import { fadeUp } from '@/utils/animations';

export function AboutFAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0); // 0 corresponds to the first item

    return (
        <section className="max-w-7xl mx-auto px-[45px] mt-32">

            {/* Header â€” right-aligned */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-10 text-right"
            >
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-dark mb-4">
                    Company FAQ
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed max-w-md ml-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </motion.div>

            {/* Two columns â€” questions & image at the same level */}
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">

                {/* Left â€” FAQ Questions */}
                <div className="md:w-1/2 w-full order-2 md:order-1 mt-6 md:mt-0">
                    <div className="flex flex-col">
                        {companyFaqData.map((faq, idx) => {
                            const isOpen = openIndex === idx;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: idx * 0.1 }}
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="cursor-pointer border-b border-gray-400 py-5 transition-all duration-300 ease-in-out"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-0.5 text-white font-bold text-lg">
                                            {idx + 1}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-heading font-black text-[22px] text-[#1a1a1a] tracking-tight">
                                                {faq.question}
                                            </h3>

                                            {/* Accordion Content */}
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: isOpen ? 'auto' : 0,
                                                    opacity: isOpen ? 1 : 0,
                                                    marginTop: isOpen ? 8 : 0
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-sm font-medium text-[#1a1a1a]/80 leading-relaxed pr-6">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Right â€” Image */}
                <div className="md:w-1/2 w-full order-1 md:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="relative w-full h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xl shadow-blue-100/40"
                    >
                        <Image
                            src="/faq-img.png"
                            alt="Hospital Building"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

