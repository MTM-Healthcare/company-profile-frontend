'use client';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Layanan Kami', href: '/health-service' },
        { name: 'Tentang Kami', href: '/about' },
        { name: 'Hubungi Kami', href: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled || pathname === '/contact'
                ? 'bg-white/75 backdrop-blur-md shadow-sm shadow-blue-100/50 border-b border-blue-50/50'
                : 'bg-transparent border-b border-transparent'
        }`}>
            <div className="w-full px-[45px]">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 group pt-1">
                        <div className="relative w-44 lg:w-56 h-14 lg:h-16">
                            <Image
                                src="/logo-mtm-healthcare.png"
                                alt="Logo MTM Healthcare"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu — hidden on mobile & tablet, shown on lg+ */}
                    <div className="hidden lg:flex space-x-8 items-center ml-auto mr-8">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className={`font-medium text-sm transition-colors duration-200 relative group ${
                                    pathname === link.href
                                        ? 'text-[#8E151F] font-semibold'
                                        : 'text-gray-600 hover:text-[#8E151F]'
                                }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#8E151F] transition-all duration-300 ${
                                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                                }`} />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button (desktop) + Hamburger (mobile & tablet) */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/health-service/1/location"
                            className="hidden lg:inline-flex bg-[#8E151F] hover:bg-[#771119] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
                        >
                            Pesan Layanan Kesehatan
                        </Link>
                        <div className="lg:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-600 hover:text-gray-900 focus:outline-none p-1"
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile / Tablet Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-6 py-5 flex flex-col gap-1">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                                        pathname === link.href
                                            ? 'text-[#8E151F] bg-red-50'
                                            : 'text-gray-600 hover:text-[#8E151F] hover:bg-red-50/60'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-gray-100">
                                <Link
                                    href="/health-service/1/location"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-center bg-[#8E151F] hover:bg-[#771119] text-white px-5 py-3 rounded-xl text-sm font-semibold w-full transition"
                                >
                                    Pesan Layanan Kesehatan
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

