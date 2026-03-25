'use client';
import * as React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Extracted Sections
import { AchievementsHero } from '@/components/sections/achievements/AchievementsHero';
import { PartnerLogos } from '@/components/sections/achievements/PartnerLogos';
import { CompanyProject } from '@/components/sections/achievements/CompanyProject';
import { CompanyAchievements } from '@/components/sections/achievements/CompanyAchievements';
import { ConnectAndMap } from '@/components/sections/achievements/ConnectAndMap';
import { Newsletter } from '@/components/sections/Newsletter';

export default function AchievementsPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-1 w-full relative z-10 pt-32 pb-24">
                <AchievementsHero />
                <PartnerLogos />
                <CompanyProject />
                <CompanyAchievements />
                <ConnectAndMap />
                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}

