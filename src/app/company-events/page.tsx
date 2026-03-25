'use client';
import * as React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Extracted Sections
import { CompanyEventsHero } from '@/components/sections/company-events/CompanyEventsHero';
import { CompanyEventsFeatured } from '@/components/sections/company-events/CompanyEventsFeatured';
import { CompanyEventsGrid } from '@/components/sections/company-events/CompanyEventsGrid';

export default function CompanyEventsPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />
            <main className="pt-28 pb-24 flex-grow w-full relative z-10">
                <CompanyEventsHero />
                <CompanyEventsFeatured />
                <CompanyEventsGrid />
            </main>
            <Footer />
        </div>
    );
}

