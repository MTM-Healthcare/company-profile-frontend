'use client';
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronDown } from 'lucide-react';

export interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    items: FaqItem[];
    variant?: 'default' | 'minimal';
}

export function FaqAccordion({ items, variant = 'default' }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    const toggleFaq = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    if (variant === 'minimal') {
        return (
            <div className="space-y-3">
                {items.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className={`bg-white/70 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? 'border-blue-200 shadow-md shadow-blue-50' : 'border-white/60 shadow-sm'}`}
                            onClick={() => toggleFaq(idx)}
                        >
                            <div className="flex justify-between items-center px-5 py-4">
                                <div className="flex gap-4 items-center">
                                    <span className="text-blue-200 text-xl font-light shrink-0">0{idx + 1}</span>
                                    <h3 className="font-heading font-semibold text-brand-dark text-sm">{faq.question}</h3>
                                </div>
                                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 ml-3">
                                    <ChevronDown className={`transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-300'}`} size={20} />
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="px-5 overflow-hidden"
                                    >
                                        <div className="pb-4 pl-10 border-t border-blue-50 pt-3">
                                            <p className="text-sm text-gray-500 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="space-y-4 pt-4 md:pt-14">
            {items.map((faq, idx) => {
                const open = openIndex === idx;
                return (
                    <div
                        key={idx}
                        onClick={() => toggleFaq(idx)}
                        className={`bg-white/60 backdrop-blur-lg border ${open ? 'border-blue-300/70 shadow-lg shadow-blue-100/40' : 'border-white/80 shadow-sm hover:shadow-md hover:bg-white/70'} rounded-3xl p-5 cursor-pointer transition-all duration-300`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 text-blue-500'}`}>
                                {open ? <Minus size={17} /> : <Plus size={17} />}
                            </div>
                            <h3 className={`font-heading font-semibold text-sm md:text-base transition-colors duration-300 ${open ? 'text-blue-700' : 'text-brand-dark'}`}>
                                {faq.question}
                            </h3>
                        </div>
                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-sm text-gray-500 leading-relaxed pt-4 pl-14 pr-2">{faq.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
