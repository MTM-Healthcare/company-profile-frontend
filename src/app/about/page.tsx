import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { Services } from '@/components/sections/about/Services';
import { CompanyJourney } from '@/components/sections/about/CompanyJourney';
import { WhyChooseUs } from '@/components/sections/about/WhyChooseUs';
import { CompanyDetail } from '@/components/sections/about/CompanyDetail';
import { AboutFAQ } from '@/components/sections/about/AboutFAQ';
import { AboutContact } from '@/components/sections/about/AboutContact';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            <main className="flex-1 pt-32 pb-12 overflow-hidden relative z-10">
                <AboutHero />
                <Services />
                <WhyChooseUs />
                <AboutFAQ />
                <AboutContact />
            </main>

            <Footer />
        </div>
    );
}
