'use client';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, MessageCircle, Facebook } from 'lucide-react';
import { fadeUp } from '@/utils/animations';

export function Contact() {
    return (
        <section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 py-14 rounded-3xl"
            style={{ backgroundColor: '#CEDFFF' }}
        >
            {/* Title — right-aligned */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-10 text-right"
            >
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-dark">
                    Lets Connect With Us
                </h2>
            </motion.div>

            {/* Two columns */}
            <div className="flex flex-col md:flex-row gap-8 items-start">

                {/* Left — Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:w-2/5 w-full"
                >
                    <h3 className="font-heading font-bold text-xl text-brand-dark mb-4">Connect Here</h3>

                    {/* Social Icons */}
                    <div className="flex gap-2.5 mb-6">
                        <a href="#" className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center hover:opacity-90 transition hover:-translate-y-0.5 shadow-sm">
                            <Instagram size={16} />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition hover:-translate-y-0.5 shadow-sm">
                            <Linkedin size={16} />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center hover:opacity-90 transition hover:-translate-y-0.5 shadow-sm">
                            <MessageCircle size={16} />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition hover:-translate-y-0.5 shadow-sm">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center hover:opacity-90 transition hover:-translate-y-0.5 shadow-sm">
                            <Facebook size={16} />
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-m leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* Address */}
                    <p className="text-s leading-relaxed">
                        Letjen S. Parman St No.1, RT.6/RW.16,<br />
                        Tomang, Grogol petamburan, West Jakarta<br />
                        City, Jakarta 11440
                    </p>
                </motion.div>

                {/* Right — Google Map */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:w-3/5 w-full rounded-2xl overflow-hidden shadow-xl border border-white/60"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.03159955376!2d106.72629631248037!3d-6.2840509618585675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1709825484838!5m2!1sen!2sid"
                        className="w-full h-full min-h-[360px]"
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
