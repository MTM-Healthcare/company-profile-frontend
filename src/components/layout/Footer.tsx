import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="relative overflow-hidden pt-10 md:pt-16 pb-6 md:pb-8" style={{ backgroundColor: '#CEDFFF' }}>
            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
                <Image
                    src="/footer.png"
                    alt="Footer Background"
                    fill
                    className="object-cover object-bottom"
                    quality={100}
                />
            </div>

            <div className="max-w-7xl mx-auto px-[45px] relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 justify-between">

                    {/* Column 1: Logo & Socials */}
                    <div className="col-span-1 md:col-span-12 lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <Link href="/" className="inline-block mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-12 h-12 shrink-0">
                                        <Image
                                            src="/logo-mtm-logo.png"
                                            alt="MTM Healthcare Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-heading font-medium text-[24px] text-[#2F3061]">MTM Healthcare</span>
                                </div>
                            </Link>
                            <p className="text-[15px] text-[#1a1a1a] font-bold mb-6">
                                #TemanSehatKamu
                            </p>
                            <div className="flex gap-4 mb-6">
                                {/* Instagram */}
                                <a href="https://www.instagram.com/mtm.healthcare/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 relative shrink-0 hover:scale-105 transition-transform">
                                    <Image src="/ig-icon.png" alt="Instagram" fill className="object-contain" />
                                </a>
                                {/* WhatsApp */}
                                <a href="#" className="w-12 h-12 md:w-14 md:h-14 relative shrink-0 hover:scale-105 transition-transform">
                                    <Image src="/wa-icon.png" alt="WhatsApp" fill className="object-contain" />
                                </a>
                                {/* LinkedIn */}
                                <a href="#" className="w-12 h-12 md:w-14 md:h-14 relative shrink-0 hover:scale-105 transition-transform">
                                    <Image src="/linkedin-icon.png" alt="LinkedIn" fill className="object-contain" />
                                </a>
                                {/* TikTok */}
                                <a href="#" className="w-12 h-12 md:w-14 md:h-14 relative shrink-0 hover:scale-105 transition-transform">
                                    <Image src="/tiktok-icon.png" alt="TikTok" fill className="object-contain" />
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:block mt-8">
                            <p className="text-[13px] font-medium text-[#1a1a1a]">© 2026 MTM Health – All Rights Reserved</p>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-2 pt-2">
                        <h4 className="font-heading font-extrabold text-[#1a1a1a] text-[18px] md:text-[20px] mb-6">Navigation</h4>
                        <ul className="space-y-4 text-[14px] font-bold text-[#1a1a1a]">
                            <li><Link href="/" className="hover:text-[#8E151F] transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-[#8E151F] transition">About Us</Link></li>
                            <li><Link href="/blog-events" className="hover:text-[#8E151F] transition">Blog & Events</Link></li>
                            <li><Link href="/health-service" className="hover:text-[#8E151F] transition">Product</Link></li>
                            <li><Link href="/contact" className="hover:text-[#8E151F] transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Link */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-2 pt-2">
                        <h4 className="font-heading font-extrabold text-[#1a1a1a] text-[18px] md:text-[20px] mb-6">Quick Link</h4>
                        <ul className="space-y-4 text-[14px] font-bold text-[#1a1a1a]">
                            <li><Link href="#" className="hover:text-[#8E151F] transition">Health Services</Link></li>
                            <li><Link href="#" className="hover:text-[#8E151F] transition">Why Choose Us</Link></li>
                            <li><Link href="/achievements" className="hover:text-[#8E151F] transition">Achievements</Link></li>
                            <li><Link href="/faq" className="hover:text-[#8E151F] transition">FAQ</Link></li>
                            <li><Link href="/events" className="hover:text-[#8E151F] transition">Events</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Check Our Instagram */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-4 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end gap-6 relative pt-2">
                        <div className="relative z-10 flex flex-col mt-0 lg:mt-0 lg:mr-4">
                            <h4 className="font-heading font-extrabold text-[#1a1a1a] text-[18px] md:text-[20px] mb-6 text-center md:text-left">
                                Ikuti Media<br className="hidden md:block" />Social Kami
                            </h4>
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                {/* Mini Icons */}
                                <div className="w-6 h-6 relative shrink-0">
                                    <Image src="/ig-icon.png" alt="Instagram" fill className="object-contain" />
                                </div>
                                <div className="w-6 h-6 relative shrink-0 flex items-center justify-center">
                                    <Image src="/tiktok-icon.png" alt="TikTok" fill className="object-contain" />
                                </div>
                                <a href="https://www.instagram.com/mtm.healthcare/" target="_blank" rel="noopener noreferrer" className="group cursor-pointer hover:opacity-80 transition-opacity ml-1">
                                    <span className="text-[14px] md:text-[16px] font-bold text-[#1a1a1a] leading-none tracking-tight underline underline-offset-4 decoration-2 group-hover:text-[#8E151F] group-hover:decoration-[#8E151F] transition-colors">
                                        @mtm.healthcare
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="relative w-[120px] h-[240px] shrink-0 z-0 drop-shadow-lg">
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
                    <div className="col-span-1 md:col-span-12 block lg:hidden mt-4 pt-4 border-t border-gray-300">
                        <p className="text-[13px] font-medium text-[#1a1a1a] text-center">© 2026 MTM Health – All Rights Reserved</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}

