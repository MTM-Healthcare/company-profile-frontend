'use client';
import * as React from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { 
    ChevronLeft,
    MessageCircle
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function LukaDanJahitanPage() {
    const router = useRouter();
    const params = useParams() as { id: string };
    const [selectedService, setSelectedService] = React.useState<string | null>(null);
    const [showWarningModal, setShowWarningModal] = React.useState(false);

    const servicesList = [
        'Jahit Luka 0-5 Jahitan',
        'Jahit Luka 6-10 Jahitan',
        'Jahit Luka >10 Jahitan',
        'Hechting 1-5 Jahitan',
        'Hechting 6-10 Jahitan',
        'Hechting >11 Jahitan',
        'Aff Hechting 1-5 Jahitan',
        'Aff Hechting 6-10 Jahitan',
        'Aff Hechting >11 Jahitan'
    ];

    const handleNext = () => {
        if (!selectedService) {
            setShowWarningModal(true);
            return;
        }
        router.push(`/health-service/${params.id}/schedule`);
    };

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
                                Layanan Kesehatan MTM Healthcare
                            </h1>
                        </button>
                        <p className="text-[13px] md:text-[14px] text-[#1a1a1a] font-medium ml-8">
                            30 + Layanan Tersedia
                        </p>
                    </div>

                    {/* 2. Services List Card */}
                    <div className="w-full max-w-[900px] mx-auto bg-white rounded-[16px] shadow-sm border border-gray-200 p-6 md:p-10 mb-8 mt-4">
                        <h2 className="font-heading font-bold text-[20px] md:text-[24px] text-[#1a1a1a] mb-8 leading-tight">
                            Layanan Penanganan Luka dan Jahitan
                        </h2>

                        {/* List Options */}
                        <div className="flex flex-col gap-4 mb-10">
                            {servicesList.map((service, idx) => (
                                <label 
                                    key={idx}
                                    className={`flex items-center cursor-pointer border-2 rounded-full py-3.5 px-6 transition-all duration-300 ${
                                        selectedService === service 
                                        ? 'border-[#98141F] bg-[#98141F] text-white' 
                                        : 'border-[#98141F] bg-white text-[#1a1a1a] hover:bg-red-50/50'
                                    }`}
                                >
                                    <input 
                                        type="radio" 
                                        name="med_service" 
                                        value={service} 
                                        checked={selectedService === service}
                                        onChange={() => setSelectedService(service)}
                                        className="hidden"
                                    />
                                    <span className="font-semibold text-[14px] md:text-[15px]">
                                        {service}
                                    </span>
                                </label>
                            ))}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pb-2">
                            <button 
                                onClick={handleNext}
                                className="bg-[#98141F] hover:bg-[#7a1018] text-white font-bold text-[14px] md:text-[15px] px-16 py-3.5 rounded-xl transition-colors shadow-sm"
                            >
                                Selanjutnya
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

            {/* Custom Warning Modal */}
            {showWarningModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-300">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl flex flex-col relative transform scale-100 transition-all duration-300">
                        <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-5">
                            <MessageCircle size={30} className="text-[#98141F]" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[20px] font-bold text-center text-[#1a1a1a] mb-2 font-heading leading-tight">
                            Peringatan
                        </h3>
                        <p className="text-gray-600 text-center text-[14px] md:text-[15px] mb-8 font-medium leading-relaxed">
                            Silakan pilih salah satu layanan luka dan jahitan terlebih dahulu sebelum melanjutkan ke langkah berikutnya.
                        </p>
                        <button 
                            onClick={() => setShowWarningModal(false)}
                            className="w-full bg-[#98141F] hover:bg-[#7a1018] text-white font-bold py-3.5 rounded-xl transition-all shadow-md active:scale-[0.98]"
                        >
                            Mengerti
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
