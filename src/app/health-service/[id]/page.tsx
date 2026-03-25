'use client';
import * as React from 'react';
import Link from 'next/link';
import { 
    ChevronLeft, 
    Stethoscope, 
    Users, 
    Clock, 
    Shield, 
    CheckCircle2,
    Info,
    ShieldCheck,
    MessageCircle,
    PhoneCall,
    Sparkles,
    CheckSquare
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function HealthServiceDetailPage() {
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
                
                <div className="relative z-10 w-full pt-32 max-w-7xl mx-auto px-[45px]">
                {/* 1. Page Header (Back Button) */}
                <div className="flex items-center mb-8 w-full max-w-5xl mx-auto">
                    <Link href="/health-service/all" className="flex items-center gap-3 text-[#1a1a1a] hover:text-[#98141F] transition-colors group">
                        <ChevronLeft size={28} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
                        <h1 className="font-heading font-extrabold text-[24px] md:text-[28px]">
                            Detail Layanan
                        </h1>
                    </Link>
                </div>

                {/* 2. Main Content Grid */}
                <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
                    
                    {/* Left Column: Content */}
                    <div className="flex flex-col gap-6 lg:col-span-2">
                        
                        {/* Main Info Card */}
                        <div className="bg-white rounded-[16px] p-6 md:p-8 shadow-sm border border-gray-200 flex flex-col">
                            <div className="w-16 h-16 rounded-[14px] bg-[#EEF2FF] flex items-center justify-center mb-6 border border-blue-50">
                                <Stethoscope size={32} className="text-[#98141F]" strokeWidth={2} />
                            </div>
                            
                            <h4 className="text-[#98141F] font-bold text-[13px] md:text-[14px] mb-2">
                                Konsultasi dan Administrasi
                            </h4>
                            <h2 className="font-heading font-extrabold text-[24px] md:text-[32px] text-[#1a1a1a] leading-tight mb-3">
                                Konsultasi dan Administrasi
                            </h2>
                            <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed max-w-xl pb-6 border-b border-gray-100">
                                Paket konsultasi medis lengkap dengan berbagai pemeriksaan
                            </p>
                            
                            {/* Metrics Row */}
                            <div className="flex flex-wrap items-center gap-6 mt-6 pt-2">
                                <div className="flex items-center gap-2 text-[#1a1a1a] font-medium text-[13px] md:text-[14px]">
                                    <Users size={16} className="text-gray-500" />
                                    <span>420+ pemesanan</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#1a1a1a] font-medium text-[13px] md:text-[14px]">
                                    <Clock size={16} className="text-gray-500" />
                                    <span>15-30 menit</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#1a1a1a] font-medium text-[13px] md:text-[14px]">
                                    <Shield size={16} className="text-[#1a1a1a]" fill="currentColor" />
                                    <span>Profesionalitas</span>
                                </div>
                            </div>
                        </div>

                        {/* Benefits List Card */}
                        <div className="bg-white rounded-[16px] p-6 md:p-8 shadow-sm border border-gray-200">
                            <h3 className="font-heading font-bold text-[18px] md:text-[20px] text-[#1a1a1a] mb-6">
                                Keuntungan Layanan
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Tenaga medis profesional dan berpengalaman',
                                    'Konsultasi gratis sebelum tindakan',
                                    'Peralatan medis steril dan modern',
                                    'Rekam medis digital terintegrasi'
                                ].map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#98141F] shrink-0 mt-0.5" strokeWidth={2.5} />
                                        <span className="text-[14px] md:text-[15px] text-[#1a1a1a] font-medium">
                                            {benefit}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                    </div>

                    {/* Right Column: Pricing & Action Card */}
                    <div className="bg-white rounded-[16px] shadow-sm border border-gray-200 overflow-hidden flex flex-col lg:col-span-1 sticky top-32">
                        {/* Red Header Bar */}
                        <div className="bg-[#98141F] py-3.5 px-6 flex items-center justify-center gap-2 text-white font-semibold text-[13px] md:text-[14px]">
                            <Sparkles size={16} strokeWidth={2.5} />
                            <span>Layanan Terpercaya</span>
                        </div>

                        <div className="p-6 md:p-8 flex flex-col">
                            {/* Price */}
                            <p className="text-gray-500 font-medium text-[13px] md:text-[14px] mb-1">
                                Harga Mulai Dari
                            </p>
                            <h3 className="font-heading font-extrabold text-[#1a1a1a] text-[32px] md:text-[38px] leading-none mb-3 tracking-tight">
                                Rp 200.000
                            </h3>
                            
                            {/* Variable Note */}
                            <div className="flex items-start gap-1.5 text-red-500 mb-8">
                                <Info size={14} className="shrink-0 mt-0.5" />
                                <span className="text-[10px] md:text-[11px] font-medium leading-tight text-gray-500">
                                    Harga dapat bervariasi sesuai kebutuhan
                                </span>
                            </div>

                            {/* Badges / Guarantees Grid */}
                            <div className="flex items-start justify-between gap-2 mb-10 border-b border-gray-100 pb-8">
                                <div className="flex flex-col items-center text-center gap-2 max-w-[80px]">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                                        <ShieldCheck size={20} className="text-blue-500" strokeWidth={2} />
                                    </div>
                                    <span className="text-[10px] text-gray-600 font-semibold leading-tight">
                                        Aman & Terpercaya
                                    </span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2 max-w-[80px]">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                                        <div className="bg-green-500 rounded-sm p-0.5">
                                            <CheckSquare size={16} className="text-white" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-gray-600 font-semibold leading-tight">
                                        Profesional dan<br />Terakreditasi
                                    </span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2 max-w-[80px]">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
                                        <Clock size={20} className="text-purple-500" strokeWidth={2} />
                                    </div>
                                    <span className="text-[10px] text-gray-600 font-semibold leading-tight">
                                        Tepat Waktu
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 mb-6">
                                <Link href="/health-service/1/location" className="w-full">
                                    <button className="w-full bg-[#98141F] hover:bg-[#7a1018] text-white font-bold text-[15px] py-3.5 rounded-xl transition-colors shadow-sm">
                                        Pesan Sekarang
                                    </button>
                                </Link>
                                <button className="w-full bg-white border border-[#98141F] hover:bg-red-50 text-[#1a1a1a] font-bold text-[15px] py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm">
                                    <MessageCircle size={18} className="text-[#1a1a1a]" strokeWidth={2.5} /> Chat Admin
                                </button>
                            </div>

                            {/* Help Alert */}
                            <div className="bg-[#EBF1FF] rounded-[16px] p-4 flex items-start gap-4">
                                <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center border border-blue-100">
                                    <PhoneCall size={18} className="text-[#98141F]" strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-[#1a1a1a] text-[13px] mb-0.5">
                                        Butuh Bantuan?
                                    </span>
                                    <span className="text-[11px] text-gray-600 font-medium leading-[1.4]">
                                        Tim kami siap membantu anda 24/7 untuk informasi lebih lanjut.
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
