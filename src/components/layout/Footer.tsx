import Link from 'next/link';
import { PlusSquare, Instagram, Linkedin, Twitter, Facebook, Phone, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Logo & About */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                                <PlusSquare size={16} />
                            </div>
                            <span className="font-heading font-bold text-xl text-brand-dark">MTM</span>
                        </Link>
                        <p className="text-xs text-gray-500 leading-relaxed mb-4">
                            Memberikan pelayanan kesehatan paripurna dengan teknologi terdepan dan tenaga medis profesional demi kualitas hidup yang lebih baik.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Instagram size={18} /></a>
                            {/* Note: User used WhatsApp icon here, using Twitter as substitute or just sticking to standard socials as Lucide lacks WA */}
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin size={18} /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook size={18} /></a>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="font-heading font-bold text-brand-dark mb-4">Perusahaan</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-blue-600 transition">Tentang Kami</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Layanan Medis</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Fasilitas</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Jadwal Dokter</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Karir</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="font-heading font-bold text-brand-dark mb-4">Pintasan</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-blue-600 transition">Daftar Online</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Artikel Kesehatan</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Promo Medical Checkup</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-bold text-brand-dark mb-4">Pusat Informasi</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="mt-1 text-blue-600 shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-800">Call Center 24 Jam</p>
                                    <p>1500 - MTM (686)</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="mt-1 text-blue-600 shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-800">Email</p>
                                    <p>cs@mtmhealthcare.id</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">© {new Date().getFullYear()} MTM Healthcare. All rights reserved.</p>
                    <div className="flex gap-4 text-xs text-gray-400">
                        <Link href="#" className="hover:text-gray-600 transition-colors">Kebijakan Privasi</Link>
                        <Link href="#" className="hover:text-gray-600 transition-colors">Syarat & Ketentuan</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
