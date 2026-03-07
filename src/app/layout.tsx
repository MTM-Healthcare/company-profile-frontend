import type { Metadata } from 'next';
import { Host_Grotesk } from 'next/font/google';
import './globals.css';
import { constructMetadata } from '@/lib/seo';

const hostGrotesk = Host_Grotesk({
    subsets: ['latin'],
    variable: '--font-host-grotesk',
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className="scroll-smooth">
            <body className={`${hostGrotesk.variable} font-sans text-brand-text antialiased bg-gradient-to-r from-[#CEDFFF] via-white to-[#CEDFFF] min-h-screen`}>
                {children}
            </body>
        </html>
    );
}
