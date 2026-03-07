'use client';
import { motion } from 'framer-motion';
import { Stethoscope, HeartPulse, UserCircle2, Pill, Activity, Baby } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Services() {
    const services = [
        {
            icon: <Stethoscope size={24} />,
            title: "General Consultation",
            description: "Comprehensive medical consultation with experienced general practitioner for various health concerns."
        },
        {
            icon: <HeartPulse size={24} />,
            title: "Medical Check-up",
            description: "Regular health screening and preventive care to maintain your overall wellness."
        },
        {
            icon: <Baby size={24} />,
            title: "Child Healthcare",
            description: "Specialized pediatric care for infants, children, and adolescents with gentle approach."
        },
        {
            icon: <UserCircle2 size={24} />,
            title: "Senior Care",
            description: "Dedicated healthcare services for elderly patients with chronic condition management."
        },
        {
            icon: <Pill size={24} />,
            title: "Prescription Medicine",
            description: "Quality generic and essential medicines from trusted pharmaceutical partners."
        },
        {
            icon: <Activity size={24} />,
            title: "Basic Medical Procedures",
            description: "Minor medical procedures and treatments performed with care and precision."
        }
    ];

    return (
        <section className="w-full bg-[#CEDFFF] py-24 mt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="font-heading font-extrabold text-[40px] md:text-[52px] text-[#242e4c] mb-6 tracking-tight">Our Healthcare Services</h1>
                <p className="text-base md:text-[17px] text-[#242e4c] font-medium leading-relaxed max-w-[650px] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((svc, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-start min-h-[300px]"
                    >
                        <div className="w-[52px] h-[52px] rounded-[14px] bg-[#e9effc] flex items-center justify-center text-[#B21F24] mb-8">
                            {svc.icon}
                        </div>
                        <h3 className="font-heading font-bold text-[20px] text-[#242e4c] mb-3">{svc.title}</h3>
                        <p className="text-[14px] text-gray-500 mb-8 leading-relaxed font-medium">{svc.description}</p>
                        <Link href="#" className="mt-auto text-[#B21F24] text-[13px] font-bold hover:underline flex items-center gap-1.5 w-max">
                            Learn More <ArrowRight size={14} />
                        </Link>
                    </motion.div>
                ))}
            </div>
            </div>
        </section>
    );
}
