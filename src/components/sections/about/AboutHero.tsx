'use client';
import Image from 'next/image';
import { CheckCircle, Smile, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutHero() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2"
                >
                    <h1 className="font-heading font-bold text-4xl lg:text-5xl text-brand-dark mb-4 leading-tight">
                        Healthcare Services <br />
                        <span className="text-brand-red">You Can Trust</span>
                    </h1>
                    <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="flex gap-12 mb-8">
                        <div>
                            <h2 className="font-heading font-bold text-4xl text-brand-dark">100+</h2>
                            <p className="text-[10px] text-gray-400 font-medium uppercase mt-1 max-w-[120px]">Experienced staff & medical personnel</p>
                        </div>
                        <div>
                            <h2 className="font-heading font-bold text-4xl text-brand-dark">25</h2>
                            <p className="text-[10px] text-gray-400 font-medium uppercase mt-1 max-w-[120px]">Clinics spread across Indonesia</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-500">
                        <div className="flex items-center gap-1.5"><CheckCircle className="text-green-500" size={14} /> Obstetrics Clinic</div>
                        <div className="flex items-center gap-1.5"><CheckCircle className="text-green-500" size={14} /> Gynecology Clinic</div>
                        <div className="flex items-center gap-1.5"><CheckCircle className="text-green-500" size={14} /> Pediatric Clinic</div>
                    </div>
                </motion.div>

                {/* Hero Image with floating cards */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:w-1/2 relative w-full mt-12 md:mt-0"
                >
                    <div className="relative rounded-[2.5rem] overflow-hidden w-full max-w-md mx-auto aspect-[4/5] shadow-2xl">
                        <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" alt="Nursing Service" fill className="object-cover" />
                    </div>

                    {/* Floating Card 1 */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        className="absolute top-1/4 -left-4 md:-left-12 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-white/50 backdrop-blur-sm"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-lg">
                            <Smile size={20} />
                        </div>
                        <div>
                            <h4 className="font-heading font-bold text-sm text-brand-dark">10.000+</h4>
                            <p className="text-[10px] text-gray-500">Happy Patients</p>
                        </div>
                    </motion.div>

                    {/* Floating Card 2 */}
                    <div className="absolute bottom-1/4 -right-4 md:-right-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-white/50">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-lg">
                            <ThumbsUp size={20} />
                        </div>
                        <div>
                            <h4 className="font-heading font-bold text-sm text-brand-dark">Great work health care</h4>
                            <p className="text-[10px] text-gray-500">Rated 4.9/5 by our patients</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
