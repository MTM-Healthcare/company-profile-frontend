'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Facebook, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight } from '@/utils/animations';
import { SectionHeader } from '@/components/shared/SectionHeader';

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

export function BlogConnectAndMap() {
    return (
        <section className="max-w-7xl mx-auto px-[45px] mt-32 mb-10">
            <SectionHeader
                badgeText="Contact Us"
                badgeIcon={<MapPin size={13} />}
                title={<>Let&apos;s Connect <br className="hidden md:block" />With Us</>}
                align="right"
                className="mb-12"
            />

            <div className="flex flex-col md:flex-row gap-8 lg:gap-10 bg-white/40 backdrop-blur-2xl p-6 md:p-10 rounded-[3rem] border border-white/60 shadow-2xl shadow-blue-100/40">
                {/* Info Left */}
                <motion.div variants={fadeLeft as any} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="md:w-1/3 space-y-5">
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
                <motion.div variants={fadeRight as any} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} className="md:w-2/3 rounded-[2.5rem] overflow-hidden shadow-xl border border-white/50 min-h-[420px] md:min-h-[520px] relative">
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
    );
}

