'use client';
import * as React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Extracted Sections
import { MtmBlogspotHero } from '@/components/sections/mtm-blogspot/MtmBlogspotHero';
import { MtmBlogspotFeatured } from '@/components/sections/mtm-blogspot/MtmBlogspotFeatured';
import { MtmBlogspotDivider } from '@/components/sections/mtm-blogspot/MtmBlogspotDivider';
import { MtmBlogspotGrid } from '@/components/sections/mtm-blogspot/MtmBlogspotGrid';

export default function BlogSpotPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />
            <main className="pt-28 pb-24 flex-grow w-full relative z-10">
                <MtmBlogspotHero />
                <MtmBlogspotFeatured />
                <MtmBlogspotDivider />
                <MtmBlogspotGrid />
            </main>
            <Footer />
        </div>
    );
}
