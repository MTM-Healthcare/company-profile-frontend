'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight } from '@/utils/animations';
import { socialLinks } from '@/data/socials';

export function ContactConnectAndMap() {
    return (
        <section className="max-w-7xl mx-auto px-[45px] mt-32">
            {/* Section header */}
            <motion.div
                variants={fadeUp as any}
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
                    variants={fadeLeft as any}
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
                    variants={fadeRight as any}
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
    );
}

