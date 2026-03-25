'use client';
import * as React from 'react';
import Link from 'next/link';
import { 
    ChevronLeft, 
    Building2,
    Ambulance,
    MessageCircle
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useParams, useRouter } from 'next/navigation';

export default function LocationSelectionPage() {
    const params = useParams() as { id: string };
    const router = useRouter();
    const [selectedLocation, setSelectedLocation] = React.useState<string | null>('clinic');

    const handleNext = () => {
        if (selectedLocation === 'home') {
            router.push(`/health-service/${params.id}/address`);
        } else {
            router.push(`/health-service/${params.id}/services`);
        }
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
                
                <div className="relative z-10 w-full pt-32 max-w-7xl mx-auto px-[45px]">
                    
                    {/* 1. Page Header */}
                    <div className="flex flex-col mb-8 w-full max-w-[800px] mx-auto">
                        <Link href={`/health-service/${params.id}`} className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#98141F] transition-colors mb-2 w-fit group">
                            <ChevronLeft size={24} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
                            <h1 className="font-heading font-extrabold text-[24px] md:text-[28px] leading-tight">
                                Layanan Kesehatan MTM Healthcare
                            </h1>
                        </Link>
                        <p className="text-[13px] md:text-[14px] text-[#1a1a1a] font-medium ml-8">
                            30 + Layanan Tersedia
                        </p>
                    </div>

                    {/* 2. Selection Card */}
                    <div className="w-full max-w-[800px] mx-auto bg-white rounded-[16px] shadow-sm border border-gray-200 p-6 md:p-10 mb-8">
                        <h2 className="font-heading font-bold text-[22px] md:text-[26px] text-[#1a1a1a] mb-2 leading-tight">
                            Pilih Lokasi Layanan Anda
                        </h2>
                        <p className="text-[14px] text-gray-600 mb-8 font-medium">
                            Silakan tentukan lokasi yang paling nyaman bagi Anda untuk mendapatkan layanan kesehatan kami.
                        </p>

                        <div className="flex flex-col gap-6 mb-10">
                            {/* Option 1: Clinic */}
                            <div>
                                <label 
                                    className={`flex items-center cursor-pointer border-2 rounded-[12px] p-3 md:p-4 transition-all duration-300 ${
                                        selectedLocation === 'clinic' 
                                        ? 'border-[#98141F] bg-[#98141F]' 
                                        : 'border-[#98141F] bg-white hover:bg-red-50/50'
                                    }`}
                                >
                                    <input 
                                        type="radio" 
                                        name="location" 
                                        value="clinic" 
                                        checked={selectedLocation === 'clinic'}
                                        onChange={() => setSelectedLocation('clinic')}
                                        className="hidden"
                                    />
                                    <div className="flex items-center justify-center shrink-0 mr-3 pl-2">
                                        <Building2 size={24} className={selectedLocation === 'clinic' ? 'text-white' : 'text-[#98141F]'} strokeWidth={2.5} />
                                    </div>
                                    <span className={`font-bold text-[15px] md:text-[16px] ${selectedLocation === 'clinic' ? 'text-white' : 'text-[#1a1a1a]'}`}>
                                        Di MTM Medical Clinic
                                    </span>
                                </label>
                                <p className="text-[13px] text-gray-500 mt-2.5 ml-1 select-none w-full">
                                    Dapatkan layanan langsung di klinik kami dengan fasilitas lengkap dan tenaga medis profesional.
                                </p>
                            </div>

                            {/* Option 2: Home */}
                            <div>
                                <label 
                                    className={`flex items-center cursor-pointer border-2 rounded-[12px] p-3 md:p-4 transition-all duration-300 ${
                                        selectedLocation === 'home' 
                                        ? 'border-[#98141F] bg-[#98141F]' 
                                        : 'border-[#98141F] bg-white hover:bg-red-50/50'
                                    }`}
                                >
                                    <input 
                                        type="radio" 
                                        name="location" 
                                        value="home" 
                                        checked={selectedLocation === 'home'}
                                        onChange={() => setSelectedLocation('home')}
                                        className="hidden"
                                    />
                                    <div className="flex items-center justify-center shrink-0 mr-3 pl-2">
                                        <Ambulance size={24} className={selectedLocation === 'home' ? 'text-white' : 'text-[#98141F]'} strokeWidth={2.5} />
                                    </div>
                                    <span className={`font-bold text-[15px] md:text-[16px] ${selectedLocation === 'home' ? 'text-white' : 'text-[#1a1a1a]'}`}>
                                        Di Lokasi Saya
                                    </span>
                                </label>
                                <p className="text-[13px] text-gray-500 mt-2.5 ml-1 select-none w-full">
                                    Tim kami akan datang ke lokasi Anda untuk memberikan layanan dengan nyaman dan praktis.
                                </p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-2">
                            <button 
                                onClick={handleNext}
                                className="bg-[#98141F] hover:bg-[#7a1018] text-white font-bold text-[14px] md:text-[15px] px-12 md:px-16 py-3.5 rounded-xl transition-colors shadow-sm"
                            >
                                Selanjutnya
                            </button>
                        </div>
                    </div>

                    {/* 3. CTA Banner */}
                    <div className="w-full max-w-[800px] mx-auto bg-[#98141F] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-[#7a1018]">
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
