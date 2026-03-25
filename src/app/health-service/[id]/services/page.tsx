'use client';
import * as React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { 
    ChevronLeft, 
    Search,
    Stethoscope,
    BedDouble,
    Syringe,
    FlaskConical,
    ActivitySquare,
    Microscope,
    MessageCircle
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function ServicesSelectionPage() {
    const router = useRouter();
    const params = useParams() as { id: string };

    const services = [
        { name: 'Konsultasi dengan Dokter Kami', icon: Stethoscope },
        { name: 'Tindakan Medis', icon: BedDouble },
        { name: 'Suntik Vaksin', icon: Syringe },
        { name: 'Suntik Vitamin Booster', icon: ActivitySquare },
        { name: 'ICV', icon: FlaskConical },
        { name: 'Cek Laboratorium', icon: Microscope },
    ];

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-1 pb-24 w-full relative z-10 flex flex-col items-center overflow-hidden">
                {/* Ambient blobs from page.tsx */}
                <div className="absolute inset-0 pointer-events-none -ز-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/25 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/20 rounded-full blur-[110px] translate-y-1/4 -translate-x-1/4" />
                </div>
                {/* Subtle top/bottom fade bands */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent pointer-events-none -z-0" />
                
                <div className="relative z-10 w-full pt-32 max-w-7xl mx-auto px-[45px]">
                    
                    {/* 1. Page Header */}
                    <div className="flex flex-col mb-8 w-full max-w-[900px] mx-auto">
                        <button onClick={() => router.back()} className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#98141F] transition-colors mb-2 w-fit group">
                            <ChevronLeft size={24} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
                            <h1 className="font-heading font-extrabold text-[24px] md:text-[28px] leading-tight">
                                Kembali ke Lokasi
                            </h1>
                        </button>
                    </div>

                    {/* 2. Services Card */}
                    <div className="w-full max-w-[900px] mx-auto bg-white rounded-[16px] shadow-sm border border-gray-200 p-6 md:p-10 mb-8 mt-4">
                        <h2 className="font-heading font-bold text-[22px] md:text-[26px] text-[#1a1a1a] mb-2 leading-tight">
                            Pilih Layanan Kesehatan Kami
                        </h2>
                        <p className="text-[14px] text-gray-600 mb-8 font-medium">
                            Kami menyediakan layanan kesehatan lengkap dengan penanganan profesional, cepat, dan terpercaya.
                        </p>

                        {/* Search Bar */}
                        <div className="relative w-full mb-12">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search size={20} className="text-[#98141F]" strokeWidth={2.5} />
                            </div>
                            <input 
                                type="text"
                                placeholder="Cari Layanan Kesehatan.."
                                className="w-full pl-12 pr-4 py-3.5 border-2 border-[#98141F] rounded-full text-[14px] text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-100 transition-shadow"
                            />
                        </div>

                        {/* Service Icons Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-4 pb-4">
                            {services.map((service, idx) => {
                                const Icon = service.icon;
                                return (
                                    <div 
                                        key={idx} 
                                        onClick={() => {
                                            if (service.name === 'Tindakan Medis') {
                                                router.push(`/health-service/${params.id}/services/tindakan-medis`);
                                            } else {
                                                alert("Halaman kategori ini masih dalam pengembangan.");
                                            }
                                        }}
                                        className="flex flex-col items-center text-center cursor-pointer group"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-[#EBF1FF] flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors shadow-sm">
                                            <Icon size={32} className="text-[#98141F]" strokeWidth={2} />
                                        </div>
                                        <span className="text-[12px] md:text-[13px] font-bold text-[#1a1a1a] leading-tight group-hover:text-[#98141F] transition-colors max-w-[120px]">
                                            {service.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* 3. CTA Banner */}
                    <div className="w-full max-w-[900px] mx-auto bg-[#98141F] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-[#7a1018]">
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

                </div>
            </main>

            <Footer />
        </div>
    );
}
