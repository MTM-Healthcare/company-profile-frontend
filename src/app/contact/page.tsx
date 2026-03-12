'use client';
import * as React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { EventsSlider } from '@/components/sections/EventsSlider';
import { sliderImages } from '@/data/slider';

// Extracted Sections
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactIntro } from '@/components/sections/contact/ContactIntro';
import { ContactFaq } from '@/components/sections/contact/ContactFaq';
import { Contact } from '@/components/sections/Contact';
import { ContactNewsletter } from '@/components/sections/contact/ContactNewsletter';
import { ContactEventSlider } from '@/components/sections/contact/ContactEventSlider';

/* ─── Component ────────────────────────────────────────────────────── */
export default function ContactPage() {

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-1 w-full relative z-10">
                <ContactHero />

                <ContactEventSlider images={sliderImages} />

                <ContactFaq />
                <Contact />
                <ContactNewsletter />
            </main>

            <Footer />
        </div>
    );
}
