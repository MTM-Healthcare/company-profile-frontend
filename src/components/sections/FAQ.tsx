'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleQuestion } from 'lucide-react';
import Image from 'next/image';

import { companyFaqData } from '@/data/faq';
import { fadeUp } from '@/utils/animations';

export function FAQ() {

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">

            {/* Header — right-aligned */}
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

            {/* Two columns — questions & image at the same level */}
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">

                {/* Left — FAQ Questions */}
                <div className="md:w-1/2 w-full order-2 md:order-1">
                    <div className="space-y-4">
                        {companyFaqData.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: idx * 0.1 }}
                                className="rounded-2xl border border-gray-100 bg-white/60 backdrop-blur-sm shadow-sm overflow-hidden"
                            >
                                <div className="flex items-start gap-4 px-5 py-4">
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-blue-50 text-blue-400 mt-0.5">
                                        <MessageCircleQuestion size={17} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-heading font-semibold text-sm md:text-base text-black">
                                            Question #{idx + 1}
                                        </h3>
                                        <p className="text-sm leading-relaxed mt-1.5">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right — Image */}
                <div className="md:w-1/2 w-full order-1 md:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="relative w-full h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xl shadow-blue-100/40"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800"
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
