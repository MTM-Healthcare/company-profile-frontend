'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function CompanyJourney() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text and Stats */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-10">
                        <h2 className="font-heading font-bold text-3xl text-brand-dark mb-4">Company Journey</h2>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-md">Professional and affordable, pharmacy services and customize as number one for health and great cooperations.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                        <div>
                            <h3 className="font-heading font-bold text-4xl text-brand-dark mb-2">1997</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">Hospital was founded as a single clinic in Jakarta.</p>
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-4xl text-brand-dark mb-2">340</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">Workers total in 25 clinics built with dedicated minds.</p>
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-4xl text-brand-dark mb-2">2005</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">Nominated as the best clinic in the national category and got an award.</p>
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-4xl text-brand-dark mb-2">10Jt +</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">Total value of the company after expansion and continuous trust from patients.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Masonry Images */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-sm text-gray-500 mb-6 hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 rounded-3xl overflow-hidden h-48 md:h-56 shadow-md relative group">
                            <Image src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800" alt="Hospital Exterior" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-3xl overflow-hidden h-48 shadow-md relative group">
                            <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" alt="Hospital Interior" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-3xl overflow-hidden h-48 shadow-md relative group">
                            <Image src="https://images.unsplash.com/photo-1504439468489-c8920d786a2b?auto=format&fit=crop&q=80&w=600" alt="Hospital Bed" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
