'use client';
import * as React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { 
    ChevronLeft,
    Clock,
    MessageCircle
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function ScheduleSelectionPage() {
    const router = useRouter();
    const params = useParams() as { id: string };

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-1 pb-24 w-full relative z-10 flex flex-col items-center overflow-hidden">
                {/* Ambient blobs from page.tsx */}
                <div className="absolute inset-0 pointer-events-none -z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/25 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/20 rounded-full blur-[110px] translate-y-1/4 -translate-x-1/4" />
                </div>
                {/* Subtle top/bottom fade bands */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent pointer-events-none -z-0" />
                
                <div className="relative z-10 w-full pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* 1. Page Header */}
                    <div className="flex flex-col mb-8 w-full max-w-[900px] mx-auto">
                        <button onClick={() => router.back()} className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#98141F] transition-colors mb-2 w-fit group">
                            <ChevronLeft size={24} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
                            <h1 className="font-heading font-extrabold text-[24px] md:text-[28px] leading-tight">
                                Kembali ke Pilihan Layanan
                            </h1>
                        </button>
                        <p className="text-[13px] md:text-[14px] text-[#1a1a1a] font-medium ml-8">
                            30 + Layanan Tersedia
                        </p>
                    </div>

                    {/* 2. Schedule Card */}
                    <div className="w-full max-w-[900px] mx-auto bg-white rounded-[16px] shadow-sm border border-[#3CA3F0] p-8 md:p-12 mb-8 mt-4 text-center">
                        <h2 className="font-heading font-bold text-[22px] md:text-[26px] text-[#1a1a1a] mb-2 leading-tight">
                            Pilih Jadwal Layanan Anda
                        </h2>
                        <p className="text-[13px] md:text-[14px] text-gray-600 mb-8 font-medium max-w-md mx-auto leading-relaxed">
                            Tentukan tanggal dan waktu yang Anda inginkan untuk mendapatkan layanan kesehatan.
                        </p>

                        <div className="flex justify-center mt-4">
                            <button 
                                onClick={() => alert('Fitur atur jadwal (kalender/waktu) sedang dalam pengembangan.')}
                                className="w-full max-w-[600px] bg-[#98141F] hover:bg-[#7a1018] text-white flex justify-center items-center gap-2 font-bold text-[15px] md:text-[16px] py-4 rounded-xl transition-colors shadow-sm"
                            >
                                <Clock size={20} className="text-white" strokeWidth={2.5} />
                                Atur Jadwal Anda Sekarang
                            </button>
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
