'use client';
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Image from 'next/image';

const faqs = [
    {
        question: "Apakah menerima BPJS?",
        answer: "Ya, kami menerima pasien BPJS Kesehatan sesuai dengan rujukan dari faskes tingkat pertama. Harap bawa dokumen lengkap saat registrasi."
    },
    {
        question: "Bagaimana cara mendaftar online?",
        answer: "Anda dapat mengunduh aplikasi MTM Healthcare di PlayStore atau AppStore, lalu pilih jadwal dokter dan poli yang dituju."
    },
    {
        question: "Jam operasional UGD?",
        answer: "Unit Gawat Darurat (UGD) kami buka 24 jam setiap hari, termasuk hari libur nasional, dilengkapi dengan tim medis yang siap siaga."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    const toggleFaq = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            <div className="flex flex-col md:flex-row gap-12 items-start">

                {/* FAQ Accordion */}
                <div className="md:w-1/2 w-full order-2 md:order-1 mt-8 md:mt-0">
                    <h2 className="font-heading font-bold text-3xl text-brand-dark mb-2 text-right">Company FAQ</h2>
                    <p className="text-xs text-gray-500 text-right mb-8">Temukan jawaban untuk pertanyaan yang paling sering diajukan mengenai layanan kami.</p>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className="border-b border-gray-200 pb-4 cursor-pointer overflow-hidden"
                                    onClick={() => toggleFaq(idx)}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4 items-center">
                                            <span className="text-blue-200 text-2xl font-light">0{idx + 1}</span>
                                            <h3 className="font-heading font-semibold text-brand-dark">{faq.question}</h3>
                                        </div>
                                        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
                                            <Plus className="text-gray-400" size={20} />
                                        </motion.div>
                                    </div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="pl-10 pr-4"
                                            >
                                                <div className="pt-2">
                                                    <p className="text-xs text-gray-500 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* FAQ Image */}
                <div className="md:w-1/2 w-full order-1 md:order-2">
                    <div className="relative w-full h-[400px] rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800"
                            alt="Gedung Rumah Sakit"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
