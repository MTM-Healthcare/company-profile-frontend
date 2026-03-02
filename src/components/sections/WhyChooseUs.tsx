'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ShieldCheck, Award, Clock, HeartHandshake } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const features = [
    {
        icon: ShieldCheck,
        title: "Licensed & Certified Practice",
        description: "Every pharmacist and attending physician holds verified national board certifications.",
    },
    {
        icon: Clock,
        title: "24/7 Availability",
        description: "Medical emergencies don't wait. We provide round-the-clock pharmacy and clinical support.",
    },
    {
        icon: Award,
        title: "Award-Winning Service",
        description: "Recognized as the top regional healthcare provider for 5 consecutive years.",
    },
    {
        icon: HeartHandshake,
        title: "Patient-First Approach",
        description: "Your comfort, privacy, and long-term wellbeing dictate every decision we make.",
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-transparent overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionHeader
                            title="Why Trust MTM Healthcare?"
                            alignment="left"
                            className="mb-10"
                        />

                        <div className="space-y-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/70 backdrop-blur-sm border border-blue-100 text-primary shadow-sm">
                                        <feature.icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-base">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:h-[700px] w-full aspect-square lg:aspect-auto rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
                            alt="Hospital Corridor"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50"
                        >
                            <div className="flex items-center gap-4">
                                <div className="size-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                    <Award size={32} />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900">#1 Rated</div>
                                    <div className="text-slate-600 font-medium">Healthcare Facility 2024</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
