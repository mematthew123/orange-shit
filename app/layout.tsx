import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { StructuredData } from '@/components/StructuredData';

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
    title: {
        default: 'Trump-Epstein Connections & Sexual Assault Allegations Archive',
        template: '%s | Trump-Epstein Archive',
    },
    description: 'Comprehensive documentation of Donald Trump\'s connections to Jeffrey Epstein and decades of sexual assault allegations. Featuring court documents, media coverage, and testimony from 25+ women.',
    keywords: [
        'Trump Epstein connections',
        'sexual assault allegations',
        'E. Jean Carroll',
        'Jeffrey Epstein',
        'court documents',
        'Katie Johnson',
        'Access Hollywood tape',
        'Miss Teen USA',
        'public records',
        'investigative journalism',
        'Trump allegations timeline',
        'Ghislaine Maxwell',
        'flight logs',
    ],
    authors: [{ name: 'Public Record Archive' }],
    creator: 'Public Record Archive',
    publisher: 'Public Record Archive',

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://trumprapes.com',
        siteName: 'Trump-Epstein Archive',
        title: 'Trump-Epstein Connections & Sexual Assault Allegations Archive',
        description: 'Comprehensive documentation of Donald Trump\'s connections to Jeffrey Epstein and decades of sexual assault allegations from 25+ women.',
        images: [
            {
                url: 'https://trumprapes.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Trump-Epstein Archive',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Trump-Epstein Connections & Sexual Assault Allegations Archive',
        description: 'Comprehensive documentation featuring court documents, media coverage, and testimony from 25+ women.',
        images: ['https://trumprapes.com/og-image.jpg'],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    verification: {
        // Add verification codes when ready
        // google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
    },

    alternates: {
        canonical: 'https://trumprapes.com',
    },

    other: {
        'revisit-after': '7 days',
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#fafafa' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='scroll-smooth'>
            <head>
                <StructuredData />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
            >
                <a
                    href='#main-content'
                    className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md'
                >
                    Skip to main content
                </a>
                <main id='main-content'>
                    <Analytics />
                    {children}
                </main>
            </body>
        </html>
    );
}
