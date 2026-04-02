import { Instagram, MessageCircle, Linkedin, Twitter, Facebook, type LucideIcon } from 'lucide-react';
import { fetchCMS } from '@/lib/cms';
import type { SocialLink as CmsSocialLink } from '@/types/cms';

const ICON_MAP: Record<string, LucideIcon> = {
    instagram: Instagram,
    whatsapp: MessageCircle,
    linkedin: Linkedin,
    twitter: Twitter,
    facebook: Facebook,
};

const DEFAULT_BG_MAP: Record<string, string> = {
    instagram: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600',
    whatsapp: 'bg-gradient-to-br from-green-400 to-green-600',
    linkedin: 'bg-gradient-to-br from-blue-500 to-blue-700',
    twitter: 'bg-gradient-to-br from-gray-700 to-gray-900',
    facebook: 'bg-gradient-to-br from-blue-600 to-blue-800',
};

export const socialLinks = [
    { Icon: Instagram, bg: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600', href: '#' },
    { Icon: MessageCircle, bg: 'bg-gradient-to-br from-green-400 to-green-600', href: '#' },
    { Icon: Linkedin, bg: 'bg-gradient-to-br from-blue-500 to-blue-700', href: '#' },
    { Icon: Twitter, bg: 'bg-gradient-to-br from-gray-700 to-gray-900', href: '#' },
    { Icon: Facebook, bg: 'bg-gradient-to-br from-blue-600 to-blue-800', href: '#' },
];

export async function getSocialLinks() {
    const links = await fetchCMS<CmsSocialLink[]>('/api/public/social-links', 86400);
    if (!links.length) return socialLinks;
    return links.map((link) => ({
        Icon: ICON_MAP[link.platform.toLowerCase()] ?? MessageCircle,
        bg: link.bgColor ?? DEFAULT_BG_MAP[link.platform.toLowerCase()] ?? 'bg-gradient-to-br from-gray-500 to-gray-700',
        href: link.href,
    }));
}
