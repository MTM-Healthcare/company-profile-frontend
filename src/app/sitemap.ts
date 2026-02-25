import { siteConfig } from '@/content/site';

export default function sitemap() {
    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
        },
        // We will dynamically add paths here when they are built
    ];
}
