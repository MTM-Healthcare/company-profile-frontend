import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { Services } from '@/components/sections/about/Services';
import { WhyChooseUs } from '@/components/sections/about/WhyChooseUs';
import { AboutFAQ } from '@/components/sections/about/AboutFAQ';
import { AboutContact } from '@/components/sections/about/AboutContact';
import { fetchCMS } from '@/lib/cms';
import type { FAQ as CmsFAQ } from '@/types/cms';

export const revalidate = 3600;

export default async function AboutPage() {
    const faqs = await fetchCMS<CmsFAQ[]>('/api/public/faq', 86400).catch(() => []);

    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-1 pt-32 overflow-hidden relative z-10">
                <AboutHero />
                <Services />
                <WhyChooseUs />
                <AboutFAQ items={faqs.length ? faqs : undefined} />
                <AboutContact />
            </main>

            <Footer />
        </div>
    );
}
