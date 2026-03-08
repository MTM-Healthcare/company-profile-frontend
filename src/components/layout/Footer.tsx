import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e6f0ff] to-[#f4f6f8] pt-20 pb-8 border-t border-gray-200">
            {/* Playful Dot Pattern Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="#a0aec0" />
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)"></rect>
                </svg>
            </div>
            
            {/* Abstract Blob Shapes */}
            <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">

                    {/* Logo & About */}
                    <div className="col-span-1 md:col-span-12 lg:col-span-4 pr-0 lg:pr-6">
                        <Link href="/" className="inline-block mb-3">
                            <div className="relative w-[600px] h-[120px]">
                                <Image
                                    src="/logo-mtm.png"
                                    alt="Logo MTM Healthcare"
                                    fill
                                    className="object-contain object-left"
                                    unoptimized
                                />
                            </div>
                        </Link>
                        <p className="text-[12px] text-gray-800 leading-relaxed mb-6 font-medium text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="flex gap-2.5">
                            {/* Instagram */}
                            <a href="#" className="w-[30px] h-[30px] rounded bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#E1306C] hover:scale-105 transition-transform">
                                <Instagram size={16} strokeWidth={2.5} />
                            </a>
                            {/* WhatsApp */}
                            <a href="#" className="w-[30px] h-[30px] rounded bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#25D366] hover:scale-105 transition-transform">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-[30px] h-[30px] rounded bg-[#0077B5] shadow-sm flex items-center justify-center text-white hover:scale-105 transition-transform">
                                <Linkedin size={15} fill="currentColor" stroke="none" />
                            </a>
                            {/* X / Twitter */}
                            <a href="#" className="w-[30px] h-[30px] rounded bg-black shadow-sm flex items-center justify-center text-white hover:scale-105 transition-transform">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="w-[30px] h-[30px] rounded bg-[#1877F2] shadow-sm flex items-center justify-center text-white hover:scale-105 transition-transform">
                                <Facebook size={16} fill="currentColor" stroke="none" />
                            </a>
                        </div>
                    </div>

                    {/* Links 1 - Navigation */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-2">
                        <h4 className="font-heading font-extrabold text-[#1a202c] text-[17px] mb-6">Navigation</h4>
                        <ul className="space-y-3.5 text-[13px] font-semibold text-[#1a202c]">
                            <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-600 transition">About Us</Link></li>
                            <li><Link href="/blog-events" className="hover:text-blue-600 transition">Blog & Events</Link></li>
                            <li><Link href="/achievements" className="hover:text-blue-600 transition">Achievements</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 - Quick Link */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-2">
                        <h4 className="font-heading font-extrabold text-[#1a202c] text-[17px] mb-6">Quick Link</h4>
                        <ul className="space-y-3.5 text-[13px] font-semibold text-[#1a202c]">
                            <li><Link href="#" className="hover:text-blue-600 transition">Company Face</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Our Projects</Link></li>
                            <li><Link href="/achievements" className="hover:text-blue-600 transition">Achievements</Link></li>
                            <li><Link href="/faq" className="hover:text-blue-600 transition">FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Work Hours */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-4">
                        <h4 className="font-heading font-extrabold text-[#1a202c] text-[17px] mb-6">Work Hours</h4>
                        <div className="space-y-5 text-[12px] font-medium text-gray-800 leading-[1.8] pr-0 lg:pr-10">
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="text-justify">
                                Letjen S. Parman St No.1, RT.6/RW.16, Tomang, Grogol petamburan, West Jakarta City, Jakarta 11440
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-5 border-t border-gray-300 flex items-center pl-1">
                    <p className="text-[12px] font-semibold text-[#1a202c]">© 2026 MTM Health - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}
