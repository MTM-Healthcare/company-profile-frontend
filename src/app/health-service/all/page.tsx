'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Search, 
    Stethoscope, 
    ChevronDown, 
    ChevronUp,
    MessageCircle,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Base Categories
const categoriesList = [
    { id: 0, name: 'Semua Layanan' },
    { id: 1, name: 'Konsultasi' },
    { id: 2, name: 'Tindakan Medis' },
    { id: 3, name: 'Suntik Vaksin' },
    { id: 4, name: 'Suntik Vitamin Booster' },
    { id: 5, name: 'MCU' },
    { id: 6, name: 'Cek Laboratorium' },
];

// Dummy Products
const allServices = [
    { id: 1, title: 'Konsultasi Dokter Umum', category: 'Konsultasi', desc: 'Konsultasi kesehatan menyeluruh dengan dokter yang berpengalaman.', price: 'Rp 75.000', orders: '1.250+ pemesanan' },
    { id: 2, title: 'Konsultasi Spesialis Paru', category: 'Konsultasi', desc: 'Konsultasi paru dan pernapasan.', price: 'Rp 150.000', orders: '300+ pemesanan' },
    { id: 3, title: 'Terapi Nebulizer', category: 'Tindakan Medis', desc: 'Terapi uap nebulizer untuk gangguan pernapasan.', price: 'Rp 120.000', orders: '450+ pemesanan' },
    { id: 4, title: 'Rawat Luka Ringan', category: 'Tindakan Medis', desc: 'Pembersihan dan perawatan luka ringan.', price: 'Rp 50.000', orders: '800+ pemesanan' },
    { id: 5, title: 'Vaksin Influenza', category: 'Suntik Vaksin', desc: 'Vaksin influenza untuk mencegah flu musiman.', price: 'Rp 300.000', orders: '120+ pemesanan' },
    { id: 6, title: 'Suntik Vitamin C 1000mg', category: 'Suntik Vitamin Booster', desc: 'Suntikan vitamin C untuk daya tahan tubuh.', price: 'Rp 100.000', orders: '600+ pemesanan' },
    { id: 7, title: 'Paket MCU Basic', category: 'MCU', desc: 'Pemeriksaan kesehatan dasar untuk umum.', price: 'Rp 450.000', orders: '80+ pemesanan' },
    { id: 8, title: 'Cek Gula Darah', category: 'Cek Laboratorium', desc: 'Pemeriksaan kadar gula darah puasa / sewaktu.', price: 'Rp 35.000', orders: '2.000+ pemesanan' },
    { id: 9, title: 'Cek Kolesterol', category: 'Cek Laboratorium', desc: 'Pemeriksaan kadar kolesterol total.', price: 'Rp 45.000', orders: '1.500+ pemesanan' },
];

// Dummy FAQs
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

export default function AllHealthServicesPage() {
    const [openFaq, setOpenFaq] = React.useState<number | null>(0);
    const [selectedCategory, setSelectedCategory] = React.useState<string>('Semua Layanan');
    const [searchQuery, setSearchQuery] = React.useState<string>('');

    const filteredServices = allServices.filter(svc => {
        const matchesCategory = selectedCategory === 'Semua Layanan' || svc.category === selectedCategory;
        const matchesSearch = svc.title.toLowerCase().includes(searchQuery.toLowerCase()) || svc.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const sidebarCategories = categoriesList.map(cat => {
        const count = cat.name === 'Semua Layanan' 
            ? allServices.length 
            : allServices.filter(s => s.category === cat.name).length;
        return { ...cat, count, active: selectedCategory === cat.name };
    });

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-1 pb-20 w-full relative z-10 flex flex-col items-center overflow-hidden">
                {/* Ambient blobs from page.tsx */}
                <div className="absolute inset-0 pointer-events-none -z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/25 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/20 rounded-full blur-[110px] translate-y-1/4 -translate-x-1/4" />
                </div>
                {/* Subtle top/bottom fade bands */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent pointer-events-none -z-0" />
                
                <div className="relative z-10 w-full pt-36 max-w-7xl mx-auto flex flex-col items-center px-[45px]">
                {/* 1. Page Header */}
                <div className="flex flex-col mb-8 w-full max-w-5xl mx-auto">
                    <Link href="/health-service" className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#98141F] transition-colors mb-2 w-fit group">
                        <ChevronLeft size={24} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
                        <h1 className="font-heading font-extrabold text-[24px] md:text-[28px] leading-tight">
                            Layanan Kesehatan MTM Healthcare
                        </h1>
                    </Link>
                    <p className="text-[13px] md:text-[14px] text-[#1a1a1a] font-medium ml-8">
                        30 + Layanan Tersedia
                    </p>
                </div>

                {/* 2. Main Search Bar */}
                <div className="w-full max-w-5xl mx-auto mb-10">
                    <div className="w-full flex items-center bg-transparent rounded-full border border-[#98141F] focus-within:ring-1 focus-within:ring-[#98141F] transition-all overflow-hidden h-[48px]">
                        <div className="pl-5 pr-3 flex items-center justify-center text-[#98141F]">
                            <Search size={18} strokeWidth={2.5} />
                        </div>
                        <input
                            type="text"
                            placeholder="Cari Layanan Kesehatan.."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow pr-6 py-2 outline-none text-[13px] text-[#1a1a1a] bg-transparent placeholder-gray-500 font-medium"
                        />
                    </div>
                </div>

                {/* 3. Content Area: Sidebar + Grid */}
                <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    
                    {/* Sidebar */}
                    <aside className="w-full md:w-[260px] shrink-0 bg-white rounded-[16px] shadow-sm border border-gray-100 p-5 hidden md:block">
                        <h3 className="text-[12px] font-bold text-gray-500 mb-4 tracking-wider uppercase">
                            Kategori
                        </h3>
                        <ul className="flex flex-col gap-2">
                            {sidebarCategories.map(cat => (
                                <li key={cat.id}>
                                    <button 
                                        onClick={() => setSelectedCategory(cat.name)}
                                        className={`w-full text-left px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-colors flex justify-between items-center ${
                                            cat.active 
                                            ? 'bg-[#98141F] text-white' 
                                            : 'text-[#1a1a1a] hover:bg-red-50 hover:text-[#98141F]'
                                        }`}
                                    >
                                        <span>{cat.name}</span>
                                        <span className={cat.active ? 'text-white/90' : 'text-gray-500'}>({cat.count})</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Mobile Caching Filter (Optional for future, currently hidden on desktop) */}
                    <div className="w-full md:hidden flex overflow-x-auto gap-2 pb-2 hide-scrollbar">
                        {sidebarCategories.map(cat => (
                            <button 
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.name)}
                                className={`shrink-0 px-4 py-2 rounded-full text-[12px] font-semibold transition-colors border ${
                                    cat.active 
                                    ? 'bg-[#98141F] border-[#98141F] text-white' 
                                    : 'bg-white border-gray-200 text-[#1a1a1a]'
                                }`}
                            >
                                {cat.name} ({cat.count})
                            </button>
                        ))}
                    </div>

                    {/* Main Grid */}
                    <div className="flex-1 w-full">
                        {filteredServices.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {filteredServices.map((svc) => (
                                <div key={svc.id} className="bg-white rounded-[16px] p-5 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-4">
                                        <Stethoscope size={20} className="text-[#98141F]" strokeWidth={2.5} />
                                    </div>
                                    <h3 className="font-heading font-bold text-[16px] text-[#1a1a1a] mb-2">
                                        {svc.title}
                                    </h3>
                                    <p className="text-[12px] text-gray-600 mb-5 leading-relaxed flex-grow">
                                        {svc.desc}
                                    </p>
                                    
                                    <div className="flex items-center justify-between mt-auto mb-4">
                                        <div className="flex items-center gap-1.5 text-[#98141F] font-bold text-[13px]">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                                            {svc.price}
                                        </div>
                                        <span className="text-[10px] text-gray-400 font-semibold">
                                            {svc.orders}
                                        </span>
                                    </div>

                                    <Link href={`/health-service/${svc.id}`} className="w-full">
                                        <button className="w-full bg-[#98141F] hover:bg-[#7a1018] text-white font-semibold text-[13px] py-2.5 rounded-lg transition-colors">
                                            Pesan Layanan
                                        </button>
                                    </Link>
                                </div>
                            ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-[16px] p-10 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                                <Search size={48} className="text-gray-300 mb-4" />
                                <h3 className="font-heading font-bold text-xl text-[#1a1a1a] mb-2">Layanan tidak ditemukan</h3>
                                <p className="text-sm text-gray-500">Coba ubah kata kunci pencarian atau kategori yang dipilih.</p>
                            </div>
                        )}

                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-2 mt-12 mb-8">
                            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-500 hover:text-black transition-colors shadow-sm">
                                <ChevronLeft size={16} strokeWidth={2} />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded border border-[#98141F] bg-[#98141F] text-white font-bold text-[13px] shadow-sm">
                                1
                            </button>
                            {[2, 3, 4, 5].map(num => (
                                <button key={num} className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-600 font-medium text-[13px] hover:border-gray-400 transition-colors shadow-sm">
                                    {num}
                                </button>
                            ))}
                            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-500 hover:text-black transition-colors shadow-sm">
                                <ChevronRight size={16} strokeWidth={2} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 4. FAQ Section (Reused styling) */}
                <section className="w-full max-w-4xl mx-auto mt-16">
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
                                className={`bg-white rounded-xl border ${openFaq === index ? 'border-[#98141F] shadow-sm' : 'border-[#98141F]/40'} overflow-hidden transition-all duration-300`}
                            >
                                <button 
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="font-bold text-[14px] md:text-[15px] text-[#1a1a1a] pr-4">
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

                {/* 5. CTA Banner Section (Reused styling) */}
                <section className="w-full max-w-5xl mx-auto mt-12 mb-8">
                    <div className="bg-[#98141F] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-[#7a1018]">
                        <div className="text-white text-center md:text-left">
                            <h3 className="font-heading font-bold text-[20px] md:text-[22px] mb-1">
                                Masih Ada Pertanyaan?
                            </h3>
                            <p className="text-white/90 text-[13px] md:text-[14px] font-medium">
                                Tim kami siap membantu Anda 24/7
                            </p>
                        </div>
                        <button className="bg-white hover:bg-gray-50 text-[#98141F] font-bold text-[13px] md:text-[14px] px-8 py-3 rounded-full flex items-center gap-2 transition-colors shadow-sm shrink-0">
                            <MessageCircle size={18} strokeWidth={2.5} /> Chat Admin
                        </button>
                    </div>
                </section>

                </div>
            </main>

            <Footer />
            
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}

