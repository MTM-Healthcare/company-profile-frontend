import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative overflow-hidden pt-20 pb-8 border-t border-gray-200 bg-white">
            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                    src="/footer.png"
                    alt="Footer Background"
                    fill
                    className="object-cover object-bottom"
                    quality={100}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-6 md:pb-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 justify-between h-full">

                    {/* Column 1: Logo & Socials */}
                    <div className="col-span-1 md:col-span-12 lg:col-span-3 flex flex-col h-full">
                        <div>
                            <Link href="/" className="inline-block mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
                                        <Image
                                            src="/logo-mtm-logo.png"
                                            alt="MTM Healthcare Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-heading font-medium text-[20px] md:text-[22px] text-[#2F3061]">MTM Healthcare</span>
                                </div>
                            </Link>
                            <p className="text-[14px] md:text-[15px] text-[#1a1a1a] font-semibold mb-6">
                                #TemanSehatKamu
                            </p>
                            <div className="flex gap-2.5 mb-10">
                                {/* Instagram */}
                                <a href="#" className="w-8 h-8 md:w-9 md:h-9 rounded shrink-0 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] shadow-sm flex items-center justify-center text-white hover:scale-105 transition-transform">
                                    <Instagram size={18} strokeWidth={2.5} />
                                </a>
                                {/* WhatsApp */}
                                <a href="#" className="w-8 h-8 md:w-9 md:h-9 rounded shrink-0 bg-[#25D366] shadow-sm flex items-center justify-center text-white hover:scale-105 transition-transform">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </a>
                                {/* LinkedIn */}
                                <a href="#" className="w-8 h-8 md:w-9 md:h-9 rounded shrink-0 bg-[#0077B5] shadow-sm flex items-center justify-center text-white hover:scale-105 transition-transform">
                                    <Linkedin size={18} fill="currentColor" stroke="none" />
                                </a>
                                {/* TikTok */}
                                <a href="#" className="w-8 h-8 md:w-9 md:h-9 rounded shrink-0 bg-black shadow-sm flex items-center justify-center text-white hover:scale-105 transition-transform">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.97-1.535 4.78 4.78 0 0 1-1.148-3.151h-3.832v15.004a3.832 3.832 0 0 1-7.663 0 3.832 3.832 0 0 1 3.832-3.832 3.82 3.82 0 0 1 1.725.412V9.663a7.643 7.643 0 0 0-1.725-.2 7.663 7.663 0 0 0 0 15.326 7.663 7.663 0 0 0 7.663-7.663V8.724a8.667 8.667 0 0 0 5.118 1.68v-3.718z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:block mt-auto pb-4">
                            <p className="text-[12.5px] font-medium text-[#1a1a1a]">© 2026 MTM Health – All Rights Reserved</p>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-2">
                        <h4 className="font-heading font-extrabold text-[#1a1a1a] text-[18px] md:text-[20px] mb-5">Navigation</h4>
                        <ul className="space-y-3.5 text-[14px] font-bold text-[#1a1a1a]">
                            <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-600 transition">About Us</Link></li>
                            <li><Link href="/blog-events" className="hover:text-blue-600 transition">Blog & Events</Link></li>
                            <li><Link href="/health-service" className="hover:text-blue-600 transition">Product</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Link */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-2">
                        <h4 className="font-heading font-extrabold text-[#1a1a1a] text-[18px] md:text-[20px] mb-5">Quick Link</h4>
                        <ul className="space-y-3.5 text-[14px] font-bold text-[#1a1a1a]">
                            <li><Link href="#" className="hover:text-blue-600 transition">Health Services</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Why Choose Us</Link></li>
                            <li><Link href="/achievements" className="hover:text-blue-600 transition">Achievements</Link></li>
                            <li><Link href="/faq" className="hover:text-blue-600 transition">FAQ</Link></li>
                            <li><Link href="/events" className="hover:text-blue-600 transition">Events</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Check Our Instagram */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-5 flex items-start gap-4 lg:gap-8 justify-start lg:justify-end lg:pl-4 relative">
                        <div className="relative z-10 flex flex-col mt-8">
                            <h4 className="font-heading font-extrabold text-[#1a1a1a] text-[18px] md:text-[20px] mb-4">
                                Ikuti Media<br />Social Kami
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="w-6 h-6 rounded shrink-0 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white">
                                    <Instagram size={12} strokeWidth={2.5} />
                                </div>
                                <div className="w-6 h-6 rounded shrink-0 bg-black flex items-center justify-center text-white">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.97-1.535 4.78 4.78 0 0 1-1.148-3.151h-3.832v15.004a3.832 3.832 0 0 1-7.663 0 3.832 3.832 0 0 1 3.832-3.832 3.82 3.82 0 0 1 1.725.412V9.663a7.643 7.643 0 0 0-1.725-.2 7.663 7.663 0 0 0 0 15.326 7.663 7.663 0 0 0 7.663-7.663V8.724a8.667 8.667 0 0 0 5.118 1.68v-3.718z" />
                                    </svg>
                                </div>
                                <span className="text-[13px] md:text-[14px] font-bold text-[#1a1a1a] leading-none tracking-tight">
                                    @mtm.healthcare
                                </span>
                            </div>
                        </div>
                        <div className="relative w-[180px] h-[340px] md:w-[220px] md:h-[400px] shrink-0 -mt-10 lg:-mt-16 z-0">
                            <Image
                                src="/check-instagram-footer.png"
                                alt="Instagram Preview"
                                fill
                                className="object-contain object-top"
                                quality={100}
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Mobile copyright */}
                    <div className="col-span-1 md:col-span-12 block lg:hidden mt-8 pt-6 border-t border-gray-300">
                        <p className="text-[13px] font-medium text-[#1a1a1a] text-center">© 2026 MTM Health – All Rights Reserved</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
