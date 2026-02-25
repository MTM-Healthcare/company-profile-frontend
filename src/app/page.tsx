import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { DoctorHighlight } from '@/components/sections/DoctorHighlight';
import { EventsSlider } from '@/components/sections/EventsSlider';
import { Achievements } from '@/components/sections/Achievements';
import { Projects } from '@/components/sections/Projects';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Newsletter } from '@/components/sections/Newsletter';
import { LocationMap } from '@/components/sections/LocationMap';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Main content area wrapped identically to the provided HTML */}
            <main className="flex-1 pt-24 pb-12">
                <Hero />
                <About />
                <DoctorHighlight />
                <EventsSlider />
                <Achievements />
                <Projects />
                <FAQ />
                <Contact />
                <Newsletter />
                <LocationMap />
            </main>

            <Footer />
        </div>
    );
}
