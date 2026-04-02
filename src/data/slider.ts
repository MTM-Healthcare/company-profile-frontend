import { fetchCMS } from '@/lib/cms';
import type { EventSlide as CmsEventSlide } from '@/types/cms';

export const sliderImages = [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1200",
];

// Static fallback used for SSR before CMS data loads
export const sliderEvents = [
    { image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" },
    { image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" },
    { image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" },
];

export async function getEventSlides(): Promise<{ image: string }[]> {
    const slides = await fetchCMS<CmsEventSlide[]>('/api/public/event-slides', 3600);
    if (!slides.length) return sliderEvents;
    return slides.map((s) => ({ image: s.imageUrl }));
}
