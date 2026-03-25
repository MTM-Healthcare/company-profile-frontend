'use client';
import * as React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Extracted Sections
import { OurAchievementsHero } from '@/components/sections/our-achievements/OurAchievementsHero';
import { OurAchievementsFeatured } from '@/components/sections/our-achievements/OurAchievementsFeatured';
import { OurAchievementsGrid } from '@/components/sections/our-achievements/OurAchievementsGrid';

export default function OurAchievementsPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden bg-[#EAF3FA]">
            <Navbar />
            <main className="pt-28 pb-24 flex-grow w-full relative z-10">
                <OurAchievementsHero />
                <OurAchievementsFeatured />
                <OurAchievementsGrid />
            </main>
            <Footer />
        </div>
    );
}

