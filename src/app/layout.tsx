import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { constructMetadata } from '@/lib/seo';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className="scroll-smooth">
            <body className={`${inter.variable} ${poppins.variable} font-sans text-brand-text antialiased bg-gradient-to-r from-[#CEDFFF] via-white to-[#CEDFFF] min-h-screen`}>
                {children}
            </body>
        </html>
    );
}
