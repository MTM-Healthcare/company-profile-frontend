import { fetchCMS } from '@/lib/cms';
import type { SiteConfig } from '@/types/cms';

// Static fallback — used for synchronous contexts
export const siteConfig = {
    name: 'MTM Healthcare',
    description: 'Your trusted local pharmacy for all your health and medical needs.',
    url: 'https://apotek.com',
    ogImage: 'https://apotek.com/og.jpg',
    links: {
        twitter: 'https://twitter.com/apotek',
        facebook: 'https://facebook.com/apotek',
    },
    contact: {
        phone: '+62 123 4567 8900',
        email: 'hello@apotek.com',
        address: 'Jl. Sehat Selalu No. 123, Jakarta, Indonesia',
        mapLink: 'https://maps.google.com/?q=jakarta',
        workingHours: 'Senin - Minggu: 08:00 - 22:00',
    },
};

// Async — fetches live data from CMS
export async function getSiteConfig(): Promise<SiteConfig> {
    return fetchCMS<SiteConfig>('/api/public/site-config', 86400);
}
