'use client';
import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Stethoscope, Instagram, Linkedin, Twitter, Facebook, MapPin, Navigation, CalendarDays, Newspaper, MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { fadeUp, fadeLeft, fadeRight } from '@/utils/animations';
import { eventCardsData, blogPostsData } from '@/data/events';
import { sliderImages } from '@/data/slider';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { EventsSlider } from '@/components/sections/EventsSlider';

const contactInfo = [
    { icon: <MapPin size={18} />, label: 'Headquarters', content: 'Letjen S. Parman St No.1, RT.6/RW.16, Tomang, Grogol petamburan, West Jakarta City, Jakarta 11440' },
    { icon: <Phone size={18} />, label: '24/7 Call Center', content: '1500 - MTM (686)' },
    { icon: <Mail size={18} />, label: 'Email', content: 'cs@mtmhealthcare.id' },
    { icon: <Clock size={18} />, label: 'Operating Hours', content: 'Monday – Friday, 08:00 AM – 05:00 PM' },
];

const socials = [
    { icon: <Instagram size={18} />, bg: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600', label: 'Instagram' },
    { icon: <MessageCircle size={18} />, bg: 'bg-gradient-to-br from-green-400 to-green-600', label: 'WhatsApp' },
    { icon: <Linkedin size={18} />, bg: 'bg-gradient-to-br from-blue-500 to-blue-700', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, bg: 'bg-gradient-to-br from-slate-600 to-slate-900', label: 'Twitter' },
    { icon: <Facebook size={18} />, bg: 'bg-gradient-to-br from-blue-600 to-blue-800', label: 'Facebook' },
];

/* ─── Component ───────────────────────────────────────────────────── */
export default function BlogEventsPage() {

    return (
        <div className="flex flex-col min-h-screen bg-white antialiased relative overflow-hidden">
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[160px] -translate-y-1/3 translate-x-1/3 pointer-events-none -z-0" />
            <div className="fixed bottom-[20%] left-0 w-[600px] h-[600px] bg-indigo-100/20 rounded-full blur-[130px] -translate-x-1/3 pointer-events-none -z-0" />

            <Navbar />

            <main className="flex-1 pt-36 pb-24 w-full relative z-10">

                {/* ═══════════════════════════════════════════════════
                    1. HERO SECTION  
                ═══════════════════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="w-full h-[280px] md:h-[460px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-300/30 relative group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&q=80&w=2000"
                            alt="Tenaga Medis MTM"
                            fill
                            priority
                            className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent" />
                        {/* Floating text overlay on hero */}
                        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full border border-white/30 mb-3"
                            >
                                <Newspaper size={12} /> Blog & Events
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="font-heading font-bold text-3xl md:text-5xl text-white drop-shadow-lg max-w-xl leading-tight"
                            >
                                Insights & Events <br className="hidden md:block" />MTM Healthcare
                            </motion.h1>
                        </div>
                    </motion.div>

                    {/* Hero Info & Stats Row */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-center mt-10 gap-8 bg-white/50 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/70 shadow-lg shadow-blue-100/30"
                    >
                        {/* Left: Logo & Text */}
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-blue-50 border-2 border-brand-dark flex items-center justify-center text-red-600 shadow-md shrink-0">
                                    <Stethoscope size={22} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-semibold text-gray-400 tracking-[0.2em] uppercase leading-none">Pharmacy</span>
                                    <span className="font-heading font-bold text-2xl text-brand-dark leading-tight">MTM</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                                Stay connected with the latest developments, upcoming events, and in-depth medical insights from our team of professional experts at MTM Healthcare.
                            </p>
                        </div>

                        {/* Right: Stats */}
                        <div className="md:w-1/2 flex gap-6 md:gap-10 items-center justify-start md:justify-end w-full">
                            {[
                                { value: '100+', label: 'Professional medical staff & employees' },
                                { value: '25', label: 'Clinics spread across Indonesia' }
                            ].map((stat) => (
                                <div key={stat.value} className="text-center bg-white/80 backdrop-blur-md px-6 py-5 rounded-3xl border border-white/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/stat cursor-default">
                                    <h2 className="font-heading font-bold text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 drop-shadow-sm">{stat.value}</h2>
                                    <p className="text-xs text-gray-500 font-medium mt-2 max-w-[140px] mx-auto leading-relaxed">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    2. WE DO MANY EVENTS
                ═══════════════════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
                    <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-6 mb-14">
                        <motion.button
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-brand-dark hover:to-brand-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 duration-300"
                        >
                            View All Events
                        </motion.button>
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full md:w-auto mt-6 md:mt-0 md:ml-auto"
                        >
                            <SectionHeader
                                badgeText="Our Events"
                                badgeIcon={<CalendarDays size={13} />}
                                title="We Do Many Events"
                                description="Various routine activities we hold to increase public health awareness and build closer relationships with our loyal patients."
                                align="right"
                            />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
                        {eventCardsData.map((event, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white/60 backdrop-blur-lg p-3 rounded-[2.5rem] border border-white/80 shadow-sm hover:shadow-2xl hover:shadow-blue-200/40 hover:-translate-y-3 transition-all duration-500 group cursor-pointer"
                            >
                                <div className="relative w-full h-48 md:h-56 rounded-[2rem] overflow-hidden mb-4">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {/* Floating event title on hover */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-white font-heading font-bold text-sm drop-shadow-lg">{event.title}</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed text-center px-3 pb-3">
                                    {event.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    3. MTM BLOGSPOT
                ═══════════════════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 relative">
                    {/* Background decorative blob */}
                    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -translate-y-1/2 -z-10" />

                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 md:gap-0">
                        <SectionHeader
                            badgeText="Health Articles"
                            badgeIcon={<Newspaper size={13} />}
                            title="MTM Blogspot"
                            align="left"
                            className="md:max-w-xl"
                        />
                        <motion.button
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white/70 backdrop-blur-md hover:bg-blue-600 hover:text-white text-blue-600 font-semibold px-8 py-3 rounded-full text-sm transition-all duration-300 shadow-sm hidden md:block border border-blue-100 hover:border-blue-600 hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Read More Articles
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Featured Post (Left) */}
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-8 bg-white/50 backdrop-blur-xl p-4 md:p-5 rounded-[2.5rem] border border-white/80 shadow-md hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500 group cursor-pointer flex flex-col"
                        >
                            <div className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden mb-6">
                                <Image
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
                                    alt="Inovasi Telemedicine MTM"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                <div className="absolute top-5 left-5 bg-red-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg ring-2 ring-white/20">New</div>
                                {/* Date badge on bottom-right */}
                                <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur-md text-brand-dark text-xs font-semibold px-4 py-2 rounded-full shadow-md">
                                    Feb 24, 2025
                                </div>
                            </div>
                            <div className="px-2 md:px-4 pb-4 flex-1 flex flex-col justify-center">
                                <h3 className="font-heading font-bold text-2xl md:text-3xl text-brand-dark mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                                    MTM Healthcare&apos;s Telemedicine Service Innovation in 2025
                                </h3>
                                <p className="text-base text-gray-500 leading-relaxed mb-6">
                                    Understanding the importance of fast and accurate healthcare access, MTM launched a remote consultation platform with digital prescription integration. This revolutionary feature allows patients to speak directly with specialists from their homes.
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-400 font-medium mt-auto">
                                    <span className="flex items-center gap-1.5"><CalendarDays size={14} /> Feb 24, 2025</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    <span>Dr. Andi R.</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Blog List (Right) */}
                        <div className="lg:col-span-4 flex flex-col gap-5">
                            {blogPostsData.map((post, idx) => (
                                <motion.div
                                    key={post.id}
                                    variants={fadeRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                                    className="flex flex-col sm:flex-row lg:flex-row gap-4 items-center bg-white/50 backdrop-blur-lg p-3 rounded-[1.8rem] border border-white/80 shadow-sm hover:shadow-lg hover:bg-white/80 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="relative w-full sm:w-32 h-28 sm:h-28 rounded-2xl overflow-hidden shrink-0">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between py-1 flex-1">
                                        <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-1.5">{post.category}</span>
                                        <h4 className="font-heading font-bold text-sm md:text-base text-brand-dark line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors leading-snug">{post.title}</h4>
                                        <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{post.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="lg:hidden w-full flex justify-center mt-4">
                            <button className="bg-white/70 backdrop-blur text-blue-600 font-semibold px-8 py-3 rounded-full text-sm shadow-sm border border-blue-100">Read More Articles</button>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    4. MTM EVENTS SLIDER
                ═══════════════════════════════════════════════════ */}
                <EventsSlider
                    slides={sliderImages.map(img => ({ image: img }))}
                    badgeText="Documentation"
                    title="MTM Events Archive"
                    description="Documentation of our social and internal activities building strong bonds within our healthcare ecosystem."
                />

                {/* ═══════════════════════════════════════════════════
                    5. CONNECT / CONTACT
                ═══════════════════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-10">
                    <SectionHeader
                        badgeText="Contact Us"
                        badgeIcon={<MapPin size={13} />}
                        title={<>Let&apos;s Connect <br className="hidden md:block" />With Us</>}
                        align="right"
                        className="mb-12"
                    />

                    <div className="flex flex-col md:flex-row gap-8 lg:gap-10 bg-white/40 backdrop-blur-2xl p-6 md:p-10 rounded-[3rem] border border-white/60 shadow-2xl shadow-blue-100/40">
                        {/* Info Left */}
                        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="md:w-1/3 space-y-5">
                            <div>
                                <h3 className="font-heading font-bold text-xl text-brand-dark mb-4">Social Media</h3>
                                <div className="flex gap-2.5">
                                    {socials.map((s, i) => (
                                        <a key={i} href="#" title={s.label} className={`w-9 h-9 rounded-full ${s.bg} text-white flex items-center justify-center shadow-md hover:scale-110 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
                                            {s.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {contactInfo.map((item, i) => (
                                <motion.div key={i} variants={fadeUp as any} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08 + 0.1} className="group bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white/90 shadow-sm hover:shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300">
                                    <h4 className="flex items-center gap-2 font-bold text-brand-dark text-sm mb-1.5 group-hover:text-blue-600 transition-colors">
                                        <span className="w-7 h-7 rounded-xl bg-blue-100/80 group-hover:bg-blue-600 group-hover:text-white text-blue-600 flex items-center justify-center transition-colors duration-300 shadow-sm shrink-0">
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </h4>
                                    <p className="text-xs text-gray-500 leading-relaxed pl-9">{item.content}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Map Right */}
                        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} className="md:w-2/3 rounded-[2.5rem] overflow-hidden shadow-xl border border-white/50 min-h-[420px] md:min-h-[520px] relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.03159955376!2d106.72629631248037!3d-6.2840509618585675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1709825484838!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '520px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </motion.div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
