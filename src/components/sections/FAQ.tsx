'use client';
import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import Image from 'next/image';

import { companyFaqData } from '@/data/faq';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { FaqAccordion } from '@/components/shared/FaqAccordion';

export function FAQ() {

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
            <div className="flex flex-col md:flex-row gap-14 items-start">

                {/* FAQ Accordion */}
                <div className="md:w-1/2 w-full order-2 md:order-1 mt-8 md:mt-0">
                    <SectionHeader
                        badgeText="FAQ"
                        badgeIcon={<HelpCircle size={13} />}
                        title="Company FAQ"
                        description="Find answers to the most frequently asked questions about our services."
                        align="left"
                        className="mb-8"
                    />

                    <FaqAccordion items={companyFaqData} variant="minimal" />
                </div>

                {/* FAQ Image */}
                <div className="md:w-1/2 w-full order-1 md:order-2">
                    <div className="relative w-full h-[420px] rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden shadow-2xl shadow-blue-200/50">
                        <Image
                            src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800"
                            alt="Hospital Building"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
                    </div>
                </div>

            </div>
        </section>
    );
}
