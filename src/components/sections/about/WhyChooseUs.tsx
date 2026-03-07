'use client';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, HeartPulse } from 'lucide-react';

export function WhyChooseUs() {
    const reasons = [
        {
            icon: <Award className="w-[22px] h-[22px]" strokeWidth={2} />,
            title: "22+ Years Experience",
            description: "Over two decades of trusted medical practice serving the Sintang community."
        },
        {
            icon: <ShieldCheck className="w-[22px] h-[22px]" strokeWidth={2} />,
            title: "Professional Care",
            description: "Quality healthcare with modern facilities and trusted pharmaceutical partners."
        },
        {
            icon: <Clock className="w-[22px] h-[22px]" strokeWidth={2} />,
            title: "Easy Appointment",
            description: "Simple and convenient booking system for your medical consultations."
        },
        {
            icon: <HeartPulse className="w-[22px] h-[22px]" strokeWidth={2} />,
            title: "Personal Approach",
            description: "Friendly, empathetic, and personalized care for every patient."
        }
    ];

    return (
        <section className="w-full py-24 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-heading font-extrabold text-[40px] md:text-[52px] text-[#242e4c] mb-6 tracking-tight">Why Choose Us?</h2>
                <p className="text-base md:text-[17px] text-[#242e4c] font-medium leading-relaxed max-w-[650px] mx-auto mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {reasons.map((reason, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="bg-white rounded-[20px] p-8 shadow-sm border border-transparent hover:border-blue-100 flex flex-col items-center hover:shadow-lg transition-all duration-300"
                    >
                        <div className="w-[52px] h-[52px] rounded-full bg-[#f1f5fd] flex items-center justify-center text-[#B21F24] mb-6">
                            {reason.icon}
                        </div>
                        <h4 className="font-heading font-bold text-[16px] text-[#242e4c] mb-3 leading-tight">{reason.title}</h4>
                        <p className="text-[13px] text-[#718096] leading-[1.6] text-center font-medium px-2">{reason.description}</p>
                    </motion.div>
                ))}
            </div>
            </div>
        </section>
    );
}
