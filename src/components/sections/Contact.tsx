'use client';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Facebook, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            {/* Section Badge + Heading */}
            <div className="mb-10">
                <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-3">
                    <Mail size={13} />
                    Contact Us
                </div>
                <h2 className="font-heading font-bold text-4xl text-brand-dark">Let&apos;s Connect With Us</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Contact Info Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:w-1/3 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-blue-100/60 border border-white/60 flex flex-col gap-7"
                >
                    {/* Social Icons */}
                    <div>
                        <h3 className="font-heading font-bold text-lg text-brand-dark mb-4">Follow Us</h3>
                        <div className="flex gap-3 flex-wrap">
                            <a href="#" className="flex items-center gap-1.5 bg-gradient-to-br from-pink-500 to-rose-500 text-white text-xs font-medium px-3 py-2 rounded-xl hover:opacity-90 transition hover:-translate-y-0.5 shadow-sm">
                                <Instagram size={14} /> Instagram
                            </a>
                            <a href="#" className="flex items-center gap-1.5 bg-green-500 text-white text-xs font-medium px-3 py-2 rounded-xl hover:opacity-90 transition hover:-translate-y-0.5 shadow-sm">
                                <MessageCircle size={14} /> WhatsApp
                            </a>
                            <a href="#" className="flex items-center gap-1.5 bg-blue-600 text-white text-xs font-medium px-3 py-2 rounded-xl hover:opacity-90 transition hover:-translate-y-0.5 shadow-sm">
                                <Linkedin size={14} /> LinkedIn
                            </a>
                            <a href="#" className="flex items-center gap-1.5 bg-sky-500 text-white text-xs font-medium px-3 py-2 rounded-xl hover:opacity-90 transition hover:-translate-y-0.5 shadow-sm">
                                <Twitter size={14} /> Twitter
                            </a>
                            <a href="#" className="flex items-center gap-1.5 bg-blue-700 text-white text-xs font-medium px-3 py-2 rounded-xl hover:opacity-90 transition hover:-translate-y-0.5 shadow-sm">
                                <Facebook size={14} /> Facebook
                            </a>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex gap-3 items-start text-sm text-gray-500">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                            <MapPin size={16} />
                        </div>
                        <div>
                            <p className="font-semibold text-brand-dark text-xs uppercase tracking-wider mb-1">Address</p>
                            <p className="leading-relaxed">
                                Jl. Kesehatan Raya No. 123<br />
                                Kebayoran Baru, Jakarta Selatan<br />
                                DKI Jakarta, 12190
                            </p>
                        </div>
                    </div>

                    {/* Phone + Email */}
                    <div className="flex gap-3 items-start text-sm text-gray-500">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                            <Phone size={16} />
                        </div>
                        <div>
                            <p className="font-semibold text-brand-dark text-xs uppercase tracking-wider mb-1">Contact</p>
                            <p>+62 21 555 1234</p>
                            <p>info@mtmhealthcare.id</p>
                        </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="flex gap-3 items-start">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                            <Clock size={16} />
                        </div>
                        <div>
                            <p className="font-semibold text-brand-dark text-xs uppercase tracking-wider mb-1">Operating Hours</p>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                <span className="font-medium text-green-600">ER: 24/7</span><br />
                                Outpatient: Monday – Saturday<br />
                                08:00 – 20:00 WIB
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Google Map */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:w-2/3 rounded-3xl overflow-hidden shadow-xl shadow-blue-100 border border-white/60"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.03159955376!2d106.72629631248037!3d-6.2840509618585675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1709825484838!5m2!1sen!2sid"
                        className="w-full h-full min-h-[400px]"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
