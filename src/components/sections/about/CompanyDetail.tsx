'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function CompanyDetail() {
    const companies = [
        { name: "Company No #1", logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200" },
        { name: "Company No #2", logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200" },
        { name: "Company No #3", logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200" },
        { name: "Company No #4", logo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200" }
    ];

    return (
        <section className="max-w-7xl mx-auto px-[45px] mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                    <h2 className="font-heading font-bold text-3xl text-brand-dark mb-4">Company Detail</h2>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-md">We have many partner hospitals that we are very proud of. See our branches below to find the nearest healthcare that we can assist on.</p>
                </div>
                <div className="md:flex md:items-end md:justify-end">
                    <p className="text-sm text-gray-500 leading-relaxed max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {companies.map((comp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="bg-white rounded-[2rem] p-4 shadow-sm flex flex-col sm:flex-row gap-4 items-center sm:items-start border border-gray-50 hover:shadow-md transition-shadow"
                    >
                        <div className="relative w-full sm:w-32 h-32 rounded-2xl shrink-0 overflow-hidden">
                            <Image src={comp.logo} alt={comp.name} fill className="object-cover" />
                        </div>
                        <div className="py-2 flex flex-col justify-center">
                            <p className="text-[10px] text-gray-500 mb-2 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                            <h4 className="font-heading font-bold text-base text-brand-dark">{comp.name}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 text-center md:text-right">
                <button className="bg-blue-100 hover:bg-blue-200 text-brand-dark font-medium px-8 py-2.5 rounded-full text-sm transition shadow-sm">
                    See More
                </button>
            </div>
        </section>
    );
}

