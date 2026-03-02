'use client';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function Newsletter() {
    return (
        <section className="max-w-5xl mx-auto px-4 mt-28">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/70 backdrop-blur-sm rounded-3xl px-8 md:px-16 py-12 text-center shadow-xl shadow-blue-100/60 border border-white/60"
            >
                <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                    <Send size={13} />
                    Newsletter
                </div>
                <h2 className="font-heading font-bold text-4xl text-brand-dark mb-3">Our Newsletters</h2>
                <p className="text-base text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
                    Get the latest health information, tips, and service promos directly to your email.
                </p>

                <form className="relative max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full pl-6 pr-36 py-4 rounded-full bg-white/80 border border-blue-100 focus:border-blue-300 focus:ring-4 focus:ring-blue-50 outline-none shadow-sm text-sm transition-all text-brand-dark placeholder:text-gray-400"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 rounded-full transition-colors duration-200 text-sm shadow-md shadow-blue-600/30"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-xs text-gray-400 mt-4">We respect your privacy. No spam.</p>
            </motion.div>
        </section>
    );
}
