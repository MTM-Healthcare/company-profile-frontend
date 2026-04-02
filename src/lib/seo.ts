import { Metadata } from 'next';

const FALLBACK = {
    name: 'MTM Healthcare',
    description: 'Your trusted local pharmacy for all your health and medical needs.',
    ogImage: 'https://apotek.com/og.jpg',
    url: 'https://apotek.com',
};

export function constructMetadata({
    title = FALLBACK.name,
    description = FALLBACK.description,
    image = FALLBACK.ogImage,
    icons = '/logo-mtm-logo.png',
    noIndex = false,
    baseUrl = FALLBACK.url,
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
    baseUrl?: string;
} = {}): Metadata {
    return {
        title: {
            default: title,
            template: `MTM Healthcare - %s`,
        },
        description,
        openGraph: {
            title,
            description,
            images: [{ url: image }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@apotek',
        },
        icons,
        metadataBase: new URL(baseUrl),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
