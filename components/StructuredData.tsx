export function StructuredData() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Trump-Epstein Connections: A Comprehensive Archive',
        description: 'Comprehensive documentation of allegations, court records, and evidence regarding Donald Trump\'s connections to Jeffrey Epstein and sexual assault allegations spanning four decades.',
        image: 'https://trumprapes.com/images/documents/trump-epstein-birthday-letter.png',
        datePublished: '2025-10-15T08:00:00+08:00',
        dateModified: new Date().toISOString(),
        author: {
            '@type': 'Organization',
            name: 'Public Record Archive',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Public Record Archive',
            logo: {
                '@type': 'ImageObject',
                url: 'https://trumprapes.com/images/documents/trump-epstein-birthday-letter.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://trumprapes.com', // Replace with actual domain
        },
        about: [
            {
                '@type': 'Person',
                name: 'Donald Trump',
            },
            {
                '@type': 'Person',
                name: 'Jeffrey Epstein',
            },
        ],
        keywords: [
            'Trump Epstein connections',
            'sexual assault allegations',
            'E. Jean Carroll',
            'court documents',
            'public records',
            'investigative journalism',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
