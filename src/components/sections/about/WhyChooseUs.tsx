'use client';
import { motion } from 'framer-motion';
import { Award, User, Clock, HeartHandshake } from 'lucide-react';

export function WhyChooseUs() {
    const reasons = [
        {
            icon: <Award size={20} />,
            title: "Best Quality Services",
            description: "We prioritize quality and care in every medical treatment."
        },
        {
            icon: <User size={20} />,
            title: "Professional Staff",
            description: "Certified doctors and nurses with years of experience."
        },
        {
            icon: <Clock size={20} />,
            title: "Long Time Record",
            description: "Trusted by the community since 1997 with a proven track record."
        },
        {
            icon: <HeartHandshake size={20} />,
            title: "Personal Approach",
            description: "Caring for patients with empathy and a warm, personal touch."
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center">
            <h2 className="font-heading font-bold text-3xl text-brand-dark mb-4">Why Choose Us?</h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {reasons.map((reason, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 flex flex-col items-center hover:shadow-md transition-shadow"
                    >
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-red mb-4">
                            {reason.icon}
                        </div>
                        <h4 className="font-heading font-bold text-sm text-brand-dark mb-2">{reason.title}</h4>
                        <p className="text-[10px] text-gray-500 leading-relaxed text-center">{reason.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
