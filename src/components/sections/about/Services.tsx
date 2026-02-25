'use client';
import { motion } from 'framer-motion';
import { Stethoscope, HeartPulse, Brain, Smile, Pill, Truck } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Services() {
    const services = [
        {
            icon: <Stethoscope size={24} />,
            title: "General Consultation",
            description: "Comprehensive medical check-ups and general consultation for all your health concerns."
        },
        {
            icon: <HeartPulse size={24} />,
            title: "Cardiology",
            description: "Expert care for heart and cardiovascular conditions with advanced diagnostic tools."
        },
        {
            icon: <Brain size={24} />,
            title: "Neurology",
            description: "Specialized treatment for disorders of the nervous system, brain, and spinal cord."
        },
        {
            icon: <Smile size={24} />,
            title: "Dental Care",
            description: "Complete dental services ranging from routine cleanings to complex oral surgeries."
        },
        {
            icon: <Pill size={24} />,
            title: "Prescription Medicine",
            description: "In-house pharmacy providing authentic medicines with precise dosage instructions."
        },
        {
            icon: <Truck size={24} />,
            title: "24/7 Medical Emergency",
            description: "Round-the-clock emergency care unit equipped with life-saving technology."
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="font-heading font-bold text-3xl text-brand-dark mb-4">Our Healthcare Services</h2>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((svc, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-red mb-6">
                            {svc.icon}
                        </div>
                        <h3 className="font-heading font-bold text-lg text-brand-dark mb-3">{svc.title}</h3>
                        <p className="text-xs text-gray-500 mb-6 leading-relaxed">{svc.description}</p>
                        <Link href="#" className="text-brand-red text-xs font-semibold hover:underline flex items-center gap-1 w-max">
                            Learn More <ArrowRight size={12} />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
