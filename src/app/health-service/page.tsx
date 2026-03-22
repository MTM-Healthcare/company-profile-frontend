'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Search, 
    Stethoscope, 
    Activity, 
    Syringe, 
    Pill, 
    Microscope, 
    HeartPulse, 
    ChevronDown, 
    ChevronUp,
    MessageCircle
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Mocks
const categories = [
    { id: 1, name: 'Konsultasi dengan\nDokter Kami', icon: Stethoscope },
    { id: 2, name: 'Tindakan Medis', icon: Activity },
    { id: 3, name: 'Suntik Vaksin', icon: Syringe },
    { id: 4, name: 'Suntik Vitamin\nBooster', icon: Pill },
    { id: 5, name: 'MCU', icon: Microscope },
    { id: 6, name: 'Cek Laboratorium', icon: HeartPulse },
];

const popularServices = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: 'Konsultasi Umum',
    desc: 'Konsultasi kesehatan menyeluruh dengan dokter yang berpengalaman.',
    price: 'Rp 75.000',
    orders: '1.250+ pemesanan',
}));

const faqs = [
    {
        q: 'Bagaimana cara memesan layanan kesehatan?',
        a: 'Anda dapat memesan layanan dengan mengklik tombol "Chat Admin" pada layanan yang diinginkan. Tim kami akan membantu Anda mengatur jadwal dan detail konsultasi.'
    },
    {
        q: 'Apakah layanan konsultasi tersedia 24/7?',
        a: 'Ya, layanan konsultasi kami tersedia 24 jam sehari, 7 hari seminggu untuk mendukung kesehatan Anda kapan saja.'
    },
    {
        q: 'Bagaimana sistem pembayaran layanan?',
        a: 'Pembayaran dapat dilakukan melalui transfer bank, e-wallet, atau kartu kredit setelah Anda melakukan konfirmasi jadwal dengan admin.'
    },
    {
        q: 'Apakah saya bisa membatalkan atau mengubah jadwal?',
        a: 'Tentu, Anda dapat mengubah jadwal dengan menghubungi admin maksimal 24 jam sebelum waktu konsultasi yang telah ditentukan.'
    },
    {
        q: 'Berapa lama durasi konsultasi berlangsung?',
        a: 'Rata-rata durasi konsultasi adalah 15-30 menit, tergantung pada kondisi dan jenis layanan yang Anda pilih.'
    }
];

export default function LayananKesehatanPage() {
    const [openFaq, setOpenFaq] = React.useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-1 pb-20 w-full relative z-10 flex flex-col items-center overflow-hidden">
                {/* Ambient blobs */}
                <div className="absolute inset-0 pointer-events-none -z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/25 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/20 rounded-full blur-[110px] translate-y-1/4 -translate-x-1/4" />
                </div>
                {/* Subtle top/bottom fade bands */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent pointer-events-none -z-0" />
                
                <div className="relative z-10 w-full">
                {/* 1. Hero / Search Section */}
                <section className="w-full pt-36 pb-16 px-4">
                    <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                        <h1 className="font-heading font-extrabold text-[32px] md:text-[42px] text-[#1a1a1a] leading-tight mb-4 tracking-tight">
                            Pilih Layanan Kesehatan Kami
                        </h1>
                        <p className="text-[14px] md:text-[15px] text-[#1a1a1a] max-w-[600px] leading-[1.6] font-medium mb-10">
                            Pilih jenis layanan kesehatan MTM Healthcare yang Anda butuhkan sebelum melanjutkan proses pengajuan
                        </p>

                        {/* Search Bar */}
                        <div className="w-full max-w-[800px] flex items-center bg-white rounded-full border border-[#98141F] focus-within:ring-1 focus-within:ring-[#98141F] transition-all overflow-hidden h-[54px] mb-12 shadow-sm">
                            <div className="pl-6 pr-3 flex items-center justify-center text-[#98141F]">
                                <Search size={20} strokeWidth={2.5} />
                            </div>
                            <input
                                type="text"
                                placeholder="Cari Layanan Kesehatan..."
                                className="flex-grow pr-6 py-2 outline-none text-[14px] text-gray-700 bg-transparent placeholder-gray-400 font-medium"
                            />
                        </div>

                        {/* Category Icons */}
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 w-full max-w-[900px]">
                            {categories.map(cat => {
                                const Icon = cat.icon;
                                return (
                                    <div key={cat.id} className="flex flex-col items-center gap-3 cursor-pointer group">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#E2E8F0] border-2 border-transparent group-hover:border-[#98141F] group-hover:bg-white transition-all flex items-center justify-center shadow-sm">
                                            <Icon size={28} className="text-[#98141F]" strokeWidth={2} />
                                        </div>
                                        <span className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a] whitespace-pre-line leading-tight">
                                            {cat.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 2. Popular Services Section */}
                <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <h2 className="font-heading font-extrabold text-[28px] md:text-[32px] text-[#1a1a1a] leading-tight mb-2">
                                Layanan yang Sering Dipesan
                            </h2>
                            <p className="text-[14px] md:text-[15px] text-[#1a1a1a] font-medium max-w-sm">
                                Pilihan layanan terpopuler yang dipercaya oleh ribuan pasien kami
                            </p>
                        </div>
                        <Link href="/health-service/all" className="shrink-0">
                            <button className="bg-[#D3E3FF] text-[#1a1a1a] font-bold text-[13px] md:text-[14px] px-6 py-2.5 rounded-full hover:bg-[#c2d6fd] transition-colors w-full">
                                Lihat Semua Layanan
                            </button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {popularServices.map((svc) => (
                            <div key={svc.id} className="bg-white rounded-[16px] p-6 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-5">
                                    <Stethoscope size={24} className="text-[#98141F]" strokeWidth={2} />
                                </div>
                                <h3 className="font-heading font-bold text-[18px] text-[#1a1a1a] mb-2">
                                    {svc.title}
                                </h3>
                                <p className="text-[13px] text-gray-600 mb-6 leading-relaxed flex-grow">
                                    {svc.desc}
                                </p>
                                
                                <div className="flex items-center justify-between mt-auto mb-5">
                                    <div className="flex items-center gap-1.5 text-[#98141F] font-bold text-[15px]">
                                        {/* Icon Tag/Price placeholder */}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                                        {svc.price}
                                    </div>
                                    <span className="text-[12px] text-gray-500 font-medium">
                                        {svc.orders}
                                    </span>
                                </div>

                                <Link href={`/health-service/${svc.id}`} className="w-full">
                                    <button className="w-full bg-[#98141F] hover:bg-[#7a1018] text-white font-semibold text-[14px] py-3 rounded-xl transition-colors">
                                        Pesan Layanan
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. FAQ Section */}
                <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                    <div className="text-center mb-10">
                        <h2 className="font-heading font-extrabold text-[28px] md:text-[32px] text-[#1a1a1a] leading-tight mb-2">
                            Pertanyaan Umum
                        </h2>
                        <p className="text-[14px] md:text-[15px] text-[#1a1a1a] font-medium">
                            Temukan jawaban untuk pertanyaan yang sering diajukan
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`bg-white rounded-xl border ${openFaq === index ? 'border-[#98141F] shadow-sm' : 'border-gray-200'} overflow-hidden transition-all duration-300`}
                            >
                                <button 
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="font-bold text-[15px] text-[#1a1a1a] pr-4">
                                        {faq.q}
                                    </span>
                                    {openFaq === index ? (
                                        <ChevronUp size={20} className="text-[#1a1a1a] shrink-0" />
                                    ) : (
                                        <ChevronDown size={20} className="text-[#1a1a1a] shrink-0" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-5 pt-0 text-[14px] text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                                <div className="mt-4 pl-4 border-l-2 border-[#98141F]">
                                                    {faq.a}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. CTA Banner Section */}
                <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
                    <div className="bg-[#98141F] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                        <div className="text-white text-center md:text-left">
                            <h3 className="font-heading font-extrabold text-[24px] mb-2">
                                Masih Ada Pertanyaan?
                            </h3>
                            <p className="text-white/90 text-[15px] font-medium">
                                Tim kami siap membantu Anda 24/7
                            </p>
                        </div>
                        <button className="bg-white hover:bg-gray-50 text-[#98141F] font-bold text-[15px] px-8 py-3.5 rounded-full flex items-center gap-2 transition-colors shadow-sm shrink-0">
                            <MessageCircle size={20} strokeWidth={2.5} /> Chat Admin
                        </button>
                    </div>
                </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}
