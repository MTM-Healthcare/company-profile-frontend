import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="relative overflow-hidden pt-10 md:pt-16 pb-6 md:pb-8" style={{ backgroundColor: '#CEDFFF' }}>
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

            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-[45px] relative z-10">

                {/* Logo & Socials — full width on mobile */}
                <div className="mb-8 md:hidden">
                    <Link href="/" className="inline-block mb-3">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 shrink-0">
                                <Image src="/logo-mtm-logo.png" alt="MTM Healthcare Logo" fill className="object-contain" />
                            </div>
                            <span className="font-heading font-medium text-[22px] text-[#2F3061]">MTM Healthcare</span>
                        </div>
                    </Link>
                    <p className="text-[14px] text-[#1a1a1a] font-bold mb-4">#TemanSehatKamu</p>
                    <div className="flex gap-3 mb-2">
                        <a href="https://www.instagram.com/mtm.healthcare/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 relative shrink-0 hover:scale-105 transition-transform">
                            <Image src="/ig-icon.png" alt="Instagram" fill className="object-contain" />
                        </a>
                        <a href="#" className="w-10 h-10 relative shrink-0 hover:scale-105 transition-transform">
                            <Image src="/wa-icon.png" alt="WhatsApp" fill className="object-contain" />
                        </a>
                        <a href="#" className="w-10 h-10 relative shrink-0 hover:scale-105 transition-transform">
                            <Image src="/linkedin-icon.png" alt="LinkedIn" fill className="object-contain" />
                        </a>
                        <a href="#" className="w-10 h-10 relative shrink-0 hover:scale-105 transition-transform">
                            <Image src="/tiktok-icon.png" alt="TikTok" fill className="object-contain" />
                        </a>
                    </div>
                </div>

                {/* Nav + Quick Link side by side on mobile */}
                <div className="grid grid-cols-2 gap-6 mb-8 md:hidden">
                    {/* Navigation */}
                    <div>
                        <h4 className="font-heading font-extrabold text-[#1a1a1a] text-[16px] mb-4">Navigation</h4>
                        <ul className="space-y-3 text-[13px] font-bold text-[#1a1a1a]">
                            <li><Link href="/" className="hover:text-[#8E151F] transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-[#8E151F] transition">About Us</Link></li>
                            <li><Link href="/blog-events" className="hover:text-[#8E151F] transition">Blog &amp; Events</Link></li>
                            <li><Link href="/health-service" className="hover:text-[#8E151F] transition">Product</Link></li>
                            <li><Link href="/contact" className="hover:text-[#8E151F] transition">Contact</Link></li>
                        </ul>
                    </div>
                    {/* Quick Link */}
                    <div>
                        <h4 className="font-heading font-extrabold text-[#1a1a1a] text-[16px] mb-4">Quick Link</h4>
                        <ul className="space-y-3 text-[13px] font-bold text-[#1a1a1a]">
                            <li><Link href="#" className="hover:text-[#8E151F] transition">Health Services</Link></li>
                            <li><Link href="#" className="hover:text-[#8E151F] transition">Why Choose Us</Link></li>
                            <li><Link href="/achievements" className="hover:text-[#8E151F] transition">Achievements</Link></li>
                            <li><Link href="/faq" className="hover:text-[#8E151F] transition">FAQ</Link></li>
                            <li><Link href="/events" className="hover:text-[#8E151F] transition">Events</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Instagram section on mobile */}
                <div className="flex items-center gap-4 mb-6 md:hidden">
                    <div className="relative w-[90px] h-[180px] shrink-0 drop-shadow-md">
                        <Image src="/check-instagram-footer.png" alt="Instagram Preview" fill className="object-contain object-top" quality={100} unoptimized />
                    </div>
                    <div>
                        <h4 className="font-heading font-extrabold text-[#1a1a1a] text-[16px] mb-3">Ikuti Media Social Kami</h4>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 relative shrink-0">
                                <Image src="/ig-icon.png" alt="Instagram" fill className="object-contain" />
                            </div>
                            <div className="w-5 h-5 relative shrink-0">
                                <Image src="/tiktok-icon.png" alt="TikTok" fill className="object-contain" />
                            </div>
                            <a href="https://www.instagram.com/mtm.healthcare/" target="_blank" rel="noopener noreferrer" className="group hover:opacity-80 transition-opacity ml-1">
                                <span className="text-[13px] font-bold text-[#1a1a1a] underline underline-offset-4 decoration-2 group-hover:text-[#8E151F] group-hover:decoration-[#8E151F] transition-colors">
                                    @mtm.healthcare
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile copyright */}
                <div className="md:hidden pt-4 border-t border-gray-300">
                    <p className="text-[12px] font-medium text-[#1a1a1a] text-center">© 2026 MTM Health – All Rights Reserved</p>
                </div>

                {/* ── Desktop / Tablet layout (md+) ── */}
                <div className="hidden md:grid md:grid-cols-12 gap-6 lg:gap-10">

                    {/* Column 1: Logo & Socials */}
                    <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <Link href="/" className="inline-block mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-12 h-12 shrink-0">
                                        <Image src="/logo-mtm-logo.png" alt="MTM Healthcare Logo" fill className="object-contain" />
                                    </div>
                                    <span className="font-heading font-medium text-[24px] text-[#2F3061]">MTM Healthcare</span>
                                </div>
                            </Link>
                            <p className="text-[15px] text-[#1a1a1a] font-bold mb-6">#TemanSehatKamu</p>
                            <div className="flex gap-4 mb-6">
                                <a href="https://www.instagram.com/mtm.healthcare/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 relative shrink-0 hover:scale-105 transition-transform">
                                    <Image src="/ig-icon.png" alt="Instagram" fill className="object-contain" />
                                </a>
                                <a href="#" className="w-12 h-12 md:w-14 md:h-14 relative shrink-0 hover:scale-105 transition-transform">
                                    <Image src="/wa-icon.png" alt="WhatsApp" fill className="object-contain" />
                                </a>
                                <a href="#" className="w-12 h-12 md:w-14 md:h-14 relative shrink-0 hover:scale-105 transition-transform">
                                    <Image src="/linkedin-icon.png" alt="LinkedIn" fill className="object-contain" />
                                </a>
                                <a href="#" className="w-12 h-12 md:w-14 md:h-14 relative shrink-0 hover:scale-105 transition-transform">
                                    <Image src="/tiktok-icon.png" alt="TikTok" fill className="object-contain" />
                                </a>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-[13px] font-medium text-[#1a1a1a]">© 2026 MTM Health – All Rights Reserved</p>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="md:col-span-2 lg:col-span-2 pt-2">
                        <h4 className="font-heading font-extrabold text-[#1a1a1a] text-[18px] md:text-[20px] mb-6">Navigation</h4>
                        <ul className="space-y-4 text-[14px] font-bold text-[#1a1a1a]">
                            <li><Link href="/" className="hover:text-[#8E151F] transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-[#8E151F] transition">About Us</Link></li>
                            <li><Link href="/blog-events" className="hover:text-[#8E151F] transition">Blog &amp; Events</Link></li>
                            <li><Link href="/health-service" className="hover:text-[#8E151F] transition">Product</Link></li>
                            <li><Link href="/contact" className="hover:text-[#8E151F] transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Link */}
                    <div className="md:col-span-2 lg:col-span-2 pt-2">
                        <h4 className="font-heading font-extrabold text-[#1a1a1a] text-[18px] md:text-[20px] mb-6">Quick Link</h4>
                        <ul className="space-y-4 text-[14px] font-bold text-[#1a1a1a]">
                            <li><Link href="#" className="hover:text-[#8E151F] transition">Health Services</Link></li>
                            <li><Link href="#" className="hover:text-[#8E151F] transition">Why Choose Us</Link></li>
                            <li><Link href="/achievements" className="hover:text-[#8E151F] transition">Achievements</Link></li>
                            <li><Link href="/faq" className="hover:text-[#8E151F] transition">FAQ</Link></li>
                            <li><Link href="/events" className="hover:text-[#8E151F] transition">Events</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Instagram */}
                    <div className="md:col-span-4 lg:col-span-4 flex flex-row items-start justify-end gap-6 relative pt-2">
                        <div className="relative z-10 flex flex-col lg:mr-4">
                            <h4 className="font-heading font-extrabold text-[#1a1a1a] text-[18px] md:text-[20px] mb-6">
                                Ikuti Media<br />Social Kami
                            </h4>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 relative shrink-0">
                                    <Image src="/ig-icon.png" alt="Instagram" fill className="object-contain" />
                                </div>
                                <div className="w-6 h-6 relative shrink-0">
                                    <Image src="/tiktok-icon.png" alt="TikTok" fill className="object-contain" />
                                </div>
                                <a href="https://www.instagram.com/mtm.healthcare/" target="_blank" rel="noopener noreferrer" className="group hover:opacity-80 transition-opacity ml-1">
                                    <span className="text-[14px] md:text-[16px] font-bold text-[#1a1a1a] underline underline-offset-4 decoration-2 group-hover:text-[#8E151F] group-hover:decoration-[#8E151F] transition-colors">
                                        @mtm.healthcare
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="relative w-[120px] h-[240px] shrink-0 z-0 drop-shadow-lg">
                            <Image src="/check-instagram-footer.png" alt="Instagram Preview" fill className="object-contain object-top" quality={100} unoptimized />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}


