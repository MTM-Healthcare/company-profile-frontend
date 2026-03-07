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

/* ─── Component ───────────────────────────────────────────────────── */
export default function BlogEventsPage() {

    return (
        <div 
            className="flex flex-col min-h-screen antialiased relative overflow-hidden"
            style={{ background: 'linear-gradient(to right, #CEDFFF, #FFFFFF, #CEDFFF)' }}
        >
            <Navbar />

            <main className="flex-1 pt-36 pb-24 w-full relative z-10">
                <BlogHero />
                <WeDoManyEvents />
                <MtmBlogspot />

                <EventsSlider
                    slides={sliderImages.map(img => ({ image: img }))}
                    badgeText="Documentation"
                    title="MTM Events"
                    description="Documentation of our social and internal activities building strong bonds within our healthcare ecosystem."
                />

                <Contact />
            </main>

            <Footer />
        </div>
    );
}
