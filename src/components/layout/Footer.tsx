import Image from 'next/image';
import Link from 'next/link';
import { PlusSquare, Instagram, Linkedin, Twitter, Facebook, Phone, Mail, Clock, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-r from-white via-blue-50 to-white bg-[length:200%_200%] animate-gradient border-t border-blue-100/50 pt-16 pb-8">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-8 left-[40%] w-72 h-72 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Logo & About */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-6 pt-2">
                            <div className="relative w-48 md:w-64 h-16 md:h-20">
                                <Image
                                    src="/logo-mtm.png"
                                    alt="Logo MTM Healthcare"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6 max-w-sm">
                            Providing comprehensive healthcare with cutting-edge technology and professional medical staff for a better quality of life.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"><Instagram size={15} /></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"><Twitter size={15} /></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"><Linkedin size={15} /></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"><Facebook size={15} /></a>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="font-heading font-bold text-sm text-brand-dark mb-4 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-2.5 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-blue-600 transition">About Us</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Medical Services</Link></li>
                            <li><Link href="/achievements" className="hover:text-blue-600 transition">Achievements</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Doctor&apos;s Schedule</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="font-heading font-bold text-sm text-brand-dark mb-4 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2.5 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-blue-600 transition">Online Registration</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Health Articles</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Medical Checkup Promo</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-bold text-sm text-brand-dark mb-4 uppercase tracking-wider">Contact Info</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-start gap-3">
                                <Clock size={15} className="mt-0.5 text-blue-500 shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-700">24/7 Working Hours</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={15} className="mt-0.5 text-blue-500 shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-700">Address</p>
                                    <p>Letjen S. Parman St No.1, RT.6/RW.16, Tomang, Grogol petamburan, West Jakarta City, Jakarta 11440</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={15} className="mt-0.5 text-blue-500 shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-700">Email</p>
                                    <p>cs@mtmhealthcare.id</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-14 pt-6 border-t border-blue-100/40 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">© {new Date().getFullYear()} MTM Healthcare. All rights reserved.</p>
                    <div className="flex gap-5 text-xs text-gray-400">
                        <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-blue-600 transition-colors">Terms &amp; Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
