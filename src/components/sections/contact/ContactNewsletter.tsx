'use client';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function ContactNewsletter() {
    return (
        <section className="max-w-5xl mx-auto px-4 mt-28">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="px-8 md:px-16 py-12 text-center"
            >
                <h2 className="font-heading font-bold text-4xl text-brand-dark mb-3">Our Newsletters</h2>
                <p className="text-base mb-8 max-w-md mx-auto leading-relaxed">
                    Subscribe to our monthly newsletter for exclusive health tips, clinic promo info, and the latest specialist doctor schedule updates.
                </p>

                <form className="relative max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full pl-6 pr-36 py-4 rounded-full bg-white/80 border-2 border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none shadow-sm text-sm transition-all text-brand-dark placeholder:text-gray-400"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 rounded-full transition-colors duration-200 text-sm shadow-md shadow-blue-600/30"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-s mt-4">We respect your privacy. No spam.</p>
            </motion.div>
        </section>
    );
}
