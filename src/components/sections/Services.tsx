'use client';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Stethoscope, Pill, Activity, ShieldPlus, HeartPulse, Microscope } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
    {
        title: 'General Consultation',
        description: 'Expert medical advice for your day-to-day health concerns from seasoned professionals.',
        icon: Stethoscope,
        color: 'text-blue-600',
        bg: 'bg-blue-100',
    },
    {
        title: 'Pharmacy & Prescriptions',
        description: 'Fast, reliable prescription fulfillment and over-the-counter medicine guidance.',
        icon: Pill,
        color: 'text-emerald-600',
        bg: 'bg-emerald-100',
    },
    {
        title: 'Health Screenings',
        description: 'Comprehensive health check-ups to catch and prevent issues before they arise.',
        icon: Activity,
        color: 'text-rose-600',
        bg: 'bg-rose-100',
    },
    {
        title: 'Vaccinations & Immunity',
        description: 'Protect yourself with the latest immunizations and booster shots.',
        icon: ShieldPlus,
        color: 'text-indigo-600',
        bg: 'bg-indigo-100',
    },
    {
        title: 'Cardiology Support',
        description: 'Specialized care focusing on heart health and circulatory system longevity.',
        icon: HeartPulse,
        color: 'text-red-600',
        bg: 'bg-red-100',
    },
    {
        title: 'Laboratory Testing',
        description: 'Accurate and rapid diagnostic laboratory tests conducted on-site.',
        icon: Microscope,
        color: 'text-purple-600',
        bg: 'bg-purple-100',
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-transparent">
            <Container>
                <SectionHeader
                    title="Our Premium Services"
                    subtitle="We offer a comprehensive suite of medical and pharmaceutical services designed to cater to every aspect of your health journey."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-md shadow-blue-100/60 border border-white/60 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                        >
                            <div className={cn("inline-flex p-4 rounded-xl mb-6 transition-colors duration-300", service.bg, service.color, "group-hover:bg-primary group-hover:text-white")}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

