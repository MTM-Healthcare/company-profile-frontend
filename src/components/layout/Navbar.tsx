'use client';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PlusSquare } from 'lucide-react';

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
        { name: 'About Us', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Blog & Events', href: '/blog-events' },
        { name: 'Achievements', href: '/achievements' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || pathname === '/contact'
            ? 'bg-white/75 backdrop-blur-md shadow-sm shadow-blue-100/50 border-b border-blue-50/50'
            : 'bg-transparent border-b border-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 group pt-1">
                        <div className="relative w-44 md:w-56 h-14 md:h-16">
                            <Image
                                src="/logo-navbar.png"
                                alt="Logo MTM Healthcare"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu (Pushed to Right) */}
                    <div className="hidden md:flex space-x-8 items-center ml-auto mr-4">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className={`font-medium text-sm transition-colors duration-200 relative group ${pathname === link.href ? 'text-[#8E151F]' : 'text-gray-600 hover:text-[#8E151F]'}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#8E151F] transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <div className="md:hidden">
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

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="md:hidden bg-white/90 backdrop-blur-md border-t border-blue-50 overflow-hidden"
                    >
                        <div className="px-4 py-5 space-y-1 flex flex-col">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition ${pathname === link.href ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/60'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-gray-100">
                                <button className="flex items-center justify-center gap-2 text-xs font-medium text-gray-500 mb-3 w-full">
                                    <Image src="https://flagcdn.com/w20/gb.png" alt="EN" width={18} height={13} />
                                    English (EN)
                                </button>
                                <a href="#" className="flex items-center justify-center bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-semibold w-full hover:bg-blue-700 transition shadow-md shadow-blue-600/30">
                                    Login Portal
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
