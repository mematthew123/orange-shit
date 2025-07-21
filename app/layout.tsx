import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Orange Shit - Quotes & Testimonials',
    description: 'A collection of notable quotes and testimonials',
    keywords: ['quotes', 'testimonials', 'timeline'],
    authors: [{ name: 'Orange Shit' }],
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#fafafa' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
            >
                <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md">
                    Skip to main content
                </a>
                <Navigation />
                <main id="main-content">
                    {children}
                </main>
            </body>
        </html>
    );
}
