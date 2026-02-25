'use client';
import Image from 'next/image';
import { Instagram, Linkedin, Twitter, Facebook, MessageCircle, MapPin, Pointer } from 'lucide-react';

export function Contact() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            <h2 className="font-heading font-bold text-3xl text-brand-dark text-right mb-8">Mari Terhubung Dengan Kami</h2>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Contact Info */}
                <div className="md:w-1/3 space-y-6">
                    <div>
                        <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">Connect Here</h3>
                        <div className="flex gap-3">
                            <a href="#" className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:opacity-80 transition"><Instagram size={14} /></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center hover:opacity-80 transition"><MessageCircle size={14} /></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-80 transition"><Linkedin size={14} /></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center hover:opacity-80 transition"><Twitter size={14} /></a>
                            <a href="#" className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center hover:opacity-80 transition"><Facebook size={14} /></a>
                        </div>
                    </div>

                    <div className="text-sm text-gray-500 space-y-4">
                        <p>
                            Jl. Kesehatan Raya No. 123<br />
                            Kebayoran Baru, Jakarta Selatan<br />
                            DKI Jakarta, 12190
                        </p>
                        <p>
                            <strong>Telepon:</strong> +62 21 555 1234<br />
                            <strong>Email:</strong> info@mtmhealthcare.id
                        </p>
                        <div className="text-xs bg-blue-50 p-3 rounded-lg border border-blue-100 text-brand-text">
                            Kami beroperasi 24/7 untuk layanan gawat darurat. Untuk poli rawat jalan, buka Senin - Sabtu pukul 08:00 - 20:00 WIB.
                        </div>
                    </div>
                </div>

                {/* Google Map Embedded */}
                <div className="md:w-2/3 relative rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.03159955376!2d106.72629631248037!3d-6.2840509618585675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1709825484838!5m2!1sen!2sid"
                        className="w-full h-full min-h-[300px]"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
