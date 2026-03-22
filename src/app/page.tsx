import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { OurPartner } from '@/components/sections/OurPartner';
import { EventsSlider } from '@/components/sections/EventsSlider';
import { Achievements } from '@/components/sections/Achievements';
import { BookingCTA } from '@/components/sections/BookingCTA';
import { Projects } from '@/components/sections/Projects';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Newsletter } from '@/components/sections/Newsletter';
import { LocationMap } from '@/components/sections/LocationMap';
import { sliderEvents } from '@/data/slider';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen relative overflow-hidden">
            <Navbar />

            {/* Main content area */}
            <main className="flex-1 pt-24 pb-12 relative z-10">

                {/* Hero — standalone */}
                <Hero />

                {/* Pair 1 — Normal (white) */}
                <About />
                <OurPartner />

                {/* Pair 2 — Highlighted */}
                <div className="w-full relative overflow-hidden mt-8 pb-16">
                    {/* Ambient blobs */}
                    <div className="absolute inset-0 pointer-events-none -z-0">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/25 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/20 rounded-full blur-[110px] translate-y-1/4 -translate-x-1/4" />
                    </div>
                    {/* Subtle top/bottom fade bands */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent pointer-events-none -z-0" />
                    <div className="relative z-10">
                        <Achievements />
                        <div className="mt-20">
                            <BookingCTA />
                        </div>
                        <EventsSlider slides={sliderEvents} />
                    </div>
                </div>

                {/* Pair 3 — Normal (white) */}
                <FAQ />

                {/* Pair 4 — Highlighted */}
                <div className="w-full relative overflow-hidden mt-32 pb-4">
                    {/* Ambient blobs */}
                    <div className="absolute inset-0 pointer-events-none -z-0">
                        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/25 rounded-full blur-[130px] -translate-y-1/4 -translate-x-1/4" />
                        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/20 rounded-full blur-[110px] translate-y-1/4 translate-x-1/4" />
                    </div>
                    {/* Subtle top/bottom fade bands */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent pointer-events-none -z-0" />
                    <div className="relative z-10 -mt-32">
                        <Contact />
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
