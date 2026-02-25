'use client';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PlusSquare } from 'lucide-react';

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    // The CSS provided didn't specify dynamic background on scroll, but the classes
    // 'fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100'
    // suggest it holds a sticky blurred state.

    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Products', href: '#' },
        { name: 'Blog & Events', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                            <PlusSquare size={18} />
                        </div>
                        <span className="font-heading font-bold text-xl text-brand-dark">MTM</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className={`font-medium transition ${pathname === link.href ? 'text-brand-red' : 'text-gray-500 hover:text-blue-600'}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Language & Login */}
                        <div className="flex items-center gap-4 ml-4 border-l pl-4 border-gray-200">
                            <button className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition">
                                <Image src="https://flagcdn.com/w20/id.png" alt="ID" width={20} height={15} className="block shadow-sm" />
                                ID
                            </button>
                            <button className="bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition">
                                Login
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
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
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-2 text-center flex flex-col">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-3 py-2 ${pathname === link.href ? 'text-brand-red font-medium' : 'text-gray-500 hover:text-blue-600 transition'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-4">
                                <button className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700">
                                    <Image src="https://flagcdn.com/w20/id.png" alt="ID" width={20} height={15} />
                                    Bahasa Indonesia (ID)
                                </button>
                                <button className="bg-brand-dark text-white px-5 py-3 rounded-full text-sm font-medium w-full mt-2">
                                    Login Portal
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
