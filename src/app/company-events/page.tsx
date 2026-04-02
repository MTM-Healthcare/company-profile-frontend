import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CompanyEventsHero } from '@/components/sections/company-events/CompanyEventsHero';
import { CompanyEventsFeatured } from '@/components/sections/company-events/CompanyEventsFeatured';
import { CompanyEventsGrid } from '@/components/sections/company-events/CompanyEventsGrid';
import { fetchCMS } from '@/lib/cms';
import type { Event } from '@/types/cms';

export const revalidate = 1800;

export default async function CompanyEventsPage() {
    const events = await fetchCMS<Event[]>('/api/public/events').catch(() => []);

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />
            <main className="pt-28 pb-24 flex-grow w-full relative z-10">
                <CompanyEventsHero />
                <CompanyEventsFeatured events={events} />
                <CompanyEventsGrid events={events.slice(4)} />
            </main>
            <Footer />
        </div>
    );
}
