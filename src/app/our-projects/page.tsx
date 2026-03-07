'use client';
import * as React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Extracted Sections
import { OurProjectsHero } from '@/components/sections/our-projects/OurProjectsHero';
import { FeaturedProjects } from '@/components/sections/our-projects/FeaturedProjects';
import { MoreInitiativesDivider } from '@/components/sections/our-projects/MoreInitiativesDivider';
import { GridProjects } from '@/components/sections/our-projects/GridProjects';

export default function OurProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />
            <main className="pt-28 pb-24 flex-grow w-full relative z-10">
                <OurProjectsHero />
                <FeaturedProjects />
                <MoreInitiativesDivider />
                <GridProjects />
            </main>
            <Footer />
        </div>
    );
}
