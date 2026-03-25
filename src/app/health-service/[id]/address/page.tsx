'use client';
import * as React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { 
    ChevronLeft, 
    MapPin,
    MessageCircle
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function AddressInputPage() {
    const params = useParams() as { id: string };
    const router = useRouter();
    const [address, setAddress] = React.useState('');
    const [error, setError] = React.useState(false);

    const handleNext = () => {
        if (!address.trim()) {
            setError(true);
            return;
        }
        setError(false);
        router.push(`/health-service/${params.id}/services`);
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
                        <Link href={`/health-service/${params.id}/location`} className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#98141F] transition-colors mb-2 w-fit group">
                            <ChevronLeft size={24} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
                            <h1 className="font-heading font-extrabold text-[24px] md:text-[28px] leading-tight">
                                Ubah Jenis Lokasi
                            </h1>
                        </Link>
                    </div>

                    {/* 2. Address Input Card */}
                    <div className="w-full max-w-[800px] mx-auto bg-white rounded-[16px] shadow-sm border border-gray-200 p-6 md:p-10 mb-8">
                        <h2 className="font-heading font-bold text-[22px] md:text-[26px] text-[#1a1a1a] mb-2 leading-tight">
                            Masukan Lokasi Anda
                        </h2>
                        <p className="text-[14px] text-gray-600 mb-10 font-medium">
                            Silakan isi alamat lengkap untuk layanan kunjungan ke lokasi Anda.
                        </p>

                        <div className="flex flex-col mb-10">
                            {/* Input Field */}
                            <input 
                                type="text" 
                                value={address}
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                    if (error) setError(false);
                                }}
                                placeholder="Isi Lokasi Disini, Contoh: Jl. Tomang Raya No. 123, Jakarta Barat"
                                className={`w-full border-b py-3 text-[14px] md:text-[15px] outline-none text-[#1a1a1a] placeholder-gray-400 bg-transparent transition-colors ${
                                    error ? 'border-red-500' : 'border-[#98141F] focus:border-[#7a1018]'
                                }`}
                            />
                            {/* Inline Error Message */}
                            {error && (
                                <span className="text-red-500 text-[12px] md:text-[13px] font-medium mt-2">
                                    *Harap masukkan alamat lengkap Anda terlebih dahulu.
                                </span>
                            )}

                            {/* Info Text */}
                            <div className="flex items-start gap-2 mt-4 text-gray-600">
                                <div className="shrink-0 mt-0.5 transform -rotate-45">
                                    <MapPin size={16} className="text-[#98141F]" strokeWidth={2.5} fill="#98141F" />
                                </div>
                                <div className="text-[12px] md:text-[13px] font-medium leading-[1.6]">
                                    <p>Gratis biaya transportasi untuk jarak hingga 10 km dari MTM Medical Clinic.</p>
                                    <p>Untuk jarak lebih dari 10 km, dikenakan biaya tambahan sebesar Rp100.000 per 10 km.</p>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-2 pb-2">
                            <button 
                                onClick={handleNext}
                                className="bg-[#98141F] hover:bg-[#7a1018] text-white font-bold text-[14px] md:text-[15px] px-16 py-3.5 rounded-xl transition-colors shadow-sm"
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
