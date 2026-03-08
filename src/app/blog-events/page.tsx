'use client';
import * as React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { EventsSlider } from '@/components/sections/EventsSlider';
import { sliderImages } from '@/data/slider';

// Extracted Sections
import { BlogHero } from '@/components/sections/blog-events/BlogHero';
import { WeDoManyEvents } from '@/components/sections/blog-events/WeDoManyEvents';
import { MtmBlogspot } from '@/components/sections/blog-events/MtmBlogspot';
import { Contact } from '@/components/sections/Contact';
import { Newsletter } from '@/components/sections/Newsletter';

/* ─── Component ───────────────────────────────────────────────────── */
export default function BlogEventsPage() {

    return (
        <div
            className="flex flex-col min-h-screen antialiased relative overflow-hidden"
            style={{ background: 'linear-gradient(to right, #CEDFFF, #FFFFFF, #CEDFFF)' }}
        >
            <Navbar />

            <main className="flex-1 pt-24 pb-24 w-full relative z-10">
                <BlogHero />
                <WeDoManyEvents />
                <MtmBlogspot />

                <EventsSlider
                    slides={sliderImages.map(img => ({ image: img }))}
                    title="MTM Events"
                    description="Our Social Events with Publicity"
                />

                <Contact />
                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}
