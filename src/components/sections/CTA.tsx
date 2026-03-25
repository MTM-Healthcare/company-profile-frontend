'use client';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
    return (
        <section className="py-24 bg-slate-50">
            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl p-10 md:p-16 lg:p-20 shadow-xl border border-slate-100 text-center relative overflow-hidden"
                >
                    {/* Subtle decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -ml-32 -mb-32" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                            Ready to Prioritize Your Health?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Schedule a consultation today or visit our pharmacy for immediate assistance. Experience the premium standard of medical care.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" className="w-full sm:w-auto hover:-translate-y-1 transition-transform group">
                                Book an Appointment
                                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto hover:bg-slate-50 hover:-translate-y-1 transition-transform">
                                Contact Our Pharmacy
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}

