import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { EventsSlider } from '@/components/sections/EventsSlider';
import { BlogHero } from '@/components/sections/blog-events/BlogHero';
import { WeDoManyEvents } from '@/components/sections/blog-events/WeDoManyEvents';
import { MtmBlogspot } from '@/components/sections/blog-events/MtmBlogspot';
import { Contact } from '@/components/sections/Contact';
import { Newsletter } from '@/components/sections/Newsletter';
import { fetchCMS } from '@/lib/cms';
import { sliderEvents } from '@/data/slider';
import type { Event, BlogPostsResponse, EventSlide } from '@/types/cms';

export const revalidate = 1800;

export default async function BlogEventsPage() {
    const [eventsResult, postsResult, slidesResult] = await Promise.allSettled([
        fetchCMS<Event[]>('/api/public/events'),
        fetchCMS<BlogPostsResponse>('/api/public/blog-posts?limit=4'),
        fetchCMS<EventSlide[]>('/api/public/event-slides'),
    ]);

    const events = eventsResult.status === 'fulfilled' ? eventsResult.value : [];
    const posts = postsResult.status === 'fulfilled' ? postsResult.value.posts : [];
    const slides = slidesResult.status === 'fulfilled' && slidesResult.value.length
        ? slidesResult.value.map((s) => ({ image: s.imageUrl }))
        : sliderEvents;

    return (
        <div
            className="flex flex-col min-h-screen antialiased relative overflow-hidden"
            style={{ background: 'linear-gradient(to right, #CEDFFF, #FFFFFF, #CEDFFF)' }}
        >
            <Navbar />

            <main className="flex-1 pt-24 pb-24 w-full relative z-10">
                <BlogHero />
                <WeDoManyEvents events={events.length ? events : undefined} />
                <MtmBlogspot posts={posts.length ? posts : undefined} />
                <EventsSlider
                    slides={slides}
                    title="MTM Events"
                    description="Our Social Events with Publicity"
                />
                <Contact />
                <Newsletter />
            </main>

            <Footer />
        </div>
    );
}
