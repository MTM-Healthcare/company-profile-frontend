'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft, ChevronRight, Instagram, Linkedin, Twitter,
    Facebook, MessageCircle, Plus, Minus, MapPin, Phone, Mail, Clock, Send, Stethoscope
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import { fadeUp, fadeLeft, fadeRight } from '@/utils/animations';
import { socialLinks } from '@/data/socials';
import { contactFaqData } from '@/data/faq';
import { sliderImages } from '@/data/slider';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { EventsSlider } from '@/components/sections/EventsSlider';
import { FaqAccordion } from '@/components/shared/FaqAccordion';

/* ─── Component ────────────────────────────────────────────────────── */
export default function ContactPage() {

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-1 w-full relative z-10">

                {/* ═══════════════════════════════════════════════════
                    1. HERO BANNER  — full-width like other pages
                ═══════════════════════════════════════════════════ */}
                <div className="w-full h-[300px] md:h-[450px] relative pt-20">
                    <Image
                        src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=2000"
                        alt="MTM Healthcare Building"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-white/30" />
                    {/* Hero title overlay */}
                    <div className="absolute bottom-8 left-6 md:bottom-14 md:left-16 max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full border border-white/30 mb-3"
                        >
                            <Phone size={12} /> Contact Us
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="font-heading font-bold text-3xl md:text-5xl text-white drop-shadow-lg leading-tight"
                        >
                            Connect with <br className="hidden md:block" />MTM Healthcare
                        </motion.h1>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════════════
                    2. INTRO CARD  — overlaps hero bottom like blog page
                ═══════════════════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-14 relative z-20 pb-4">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-white/70 backdrop-blur-2xl p-7 md:p-10 rounded-[2.5rem] border border-white/80 shadow-2xl shadow-blue-100/40"
                    >
                        {/* Left */}
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative w-40 h-16 shrink-0 md:mr-4">
                                    <Image
                                        src="/logo-mtm.png"
                                        alt="MTM Pharmacy Logo"
                                        fill
                                        className="object-contain object-left"
                                    />
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                                Professional and educated, prioritizing patients and customers as number one for health and good cooperation.
                            </p>
                        </div>

                        {/* Right – social icons (same gradient style as other pages) */}
                        <div className="md:w-1/2 flex flex-wrap gap-3 items-center justify-start md:justify-end">
                            {socialLinks.map((s, i) => (
                                <a key={i} href={s.href} className={`w-12 h-12 rounded-2xl ${s.bg} text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 shadow-md`}>
                                    <s.Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    3. EVENTS SLIDER  — identical style to Blog & Events
                ═══════════════════════════════════════════════════ */}
                <EventsSlider
                    slides={sliderImages.map(img => ({ image: img }))}
                    badgeText="Documentation"
                    title="MTM Events Archive"
                    description="Documentation of our social and internal activities building strong bonds with the community."
                />

                {/* ═══════════════════════════════════════════════════
                    4. FAQ SECTION
                ═══════════════════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
                    <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">

                        {/* Accordion – left */}
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2 w-full order-2 md:order-1"
                        >
                            <FaqAccordion items={contactFaqData} />
                        </motion.div>

                        {/* Image + title – right */}
                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="md:w-1/2 w-full order-1 md:order-2 flex flex-col items-end"
                        >
                            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                                Help & Info
                            </div>
                            <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-dark mb-4 text-right">Company FAQ</h2>
                            <p className="text-sm text-gray-500 text-right mb-8 max-w-sm leading-relaxed">
                                Find quick answers to frequently asked questions about our services, procedures, and operations.
                            </p>
                            <div className="w-full relative rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-2xl shadow-blue-200/40 border-4 border-white/60 group h-[280px] md:h-[360px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                                    alt="Gedung FAQ"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    5. CONNECT / MAP  — same as homepage LocationMap style
                ═══════════════════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
                    {/* Section header */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
                            <MapPin size={13} /> Contact Us
                        </div>
                        <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-dark md:text-right leading-tight">
                            Let&apos;s Connect <br className="hidden md:block" />With Us
                        </h2>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-8 lg:gap-10 bg-white/40 backdrop-blur-2xl p-6 md:p-10 rounded-[3rem] border border-white/60 shadow-2xl shadow-blue-100/30">

                        {/* Contact info card */}
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/3 flex flex-col justify-center space-y-6"
                        >
                            {/* Social icons */}
                            <div>
                                <h3 className="font-heading font-bold text-xl text-brand-dark mb-4">Social Media</h3>
                                <div className="flex gap-3">
                                    {socialLinks.map((s, i) => (
                                        <a key={i} href={s.href} className={`w-10 h-10 rounded-full ${s.bg} text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm`}>
                                            <s.Icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Info blocks */}
                            {[
                                { icon: <MapPin size={16} className="text-blue-600 shrink-0" />, label: 'Headquarters', content: 'Letjen S. Parman St No.1, RT.6/RW.16, Tomang, Grogol petamburan, West Jakarta City, Jakarta 11440' },
                                { icon: <Phone size={16} className="text-blue-600 shrink-0" />, label: '24/7 Call Center', content: '1500 - MTM (686)' },
                                { icon: <Mail size={16} className="text-blue-600 shrink-0" />, label: 'Email', content: 'cs@mtmhealthcare.id' },
                                { icon: <Clock size={16} className="text-blue-600 shrink-0" />, label: 'Operating Hours', content: 'Monday – Friday, 08:00 AM – 05:00 PM' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/60 backdrop-blur-md p-5 rounded-3xl border border-white/80 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h4 className="flex items-center gap-2 font-bold text-brand-dark text-sm mb-2">
                                        {item.icon} {item.label}
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-relaxed pl-6">{item.content}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Real Google Maps iframe — same as LocationMap component */}
                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="md:w-2/3 rounded-[2.5rem] overflow-hidden shadow-xl border border-white/50 min-h-[400px] md:min-h-[500px]"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.03159955376!2d106.72629631248037!3d-6.2840509618585675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1709825484838!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '500px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    6. NEWSLETTER — same glassmorphism card
                ═══════════════════════════════════════════════════ */}
                <section className="max-w-3xl mx-auto px-4 mt-32 mb-20 text-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white/50 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] border border-white/80 shadow-2xl shadow-blue-100/40"
                    >
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 mb-6 shadow-inner ring-4 ring-white/80">
                            <Send size={22} />
                        </div>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">Our Newsletters</h2>
                        <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-lg mx-auto">
                            Subscribe to our monthly newsletter for exclusive health tips, clinic promo info, and the latest specialist doctor schedule updates.
                        </p>
                        <form className="relative w-full max-w-lg mx-auto mb-5">
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                className="w-full pl-6 pr-28 py-4 rounded-full bg-white/80 backdrop-blur border border-white/80 focus:border-blue-400 focus:outline-none shadow-sm focus:shadow-md focus:bg-white text-sm transition-all duration-300 placeholder:text-gray-400 text-brand-dark"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-7 rounded-full hover:shadow-xl hover:shadow-blue-500/30 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-sm"
                            >
                                Submit
                            </button>
                        </form>
                        <p className="text-xs text-gray-400">✨ Spam-free. Unsubscribe at any time.</p>
                    </motion.div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
