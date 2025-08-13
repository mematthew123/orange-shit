'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/Container';

interface ImpactQuoteProps {
    quote: string;
    highlightedPhrases?: string[];
    author: string;
    source: string;
    date?: string;
    credibilityBadge?: string;
    location?: string;
    status?: string;
    witnessCount?: number;
    underOath?: boolean;
    courtFiling?: boolean;
    backgroundClass?: string;
}

export function ImpactQuote({
    quote,
    highlightedPhrases = [],
    author,
    source,
    date,
    credibilityBadge,
    location,
    status,
    witnessCount,
    underOath,
    courtFiling,
    backgroundClass = 'bg-black',
}: ImpactQuoteProps) {
    const quoteRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (quoteRef.current) {
            observer.observe(quoteRef.current);
        }

        return () => observer.disconnect();
    }, [isMounted]);

    // Highlight specific phrases in the quote
    const renderQuoteWithHighlights = () => {
        let processedQuote = quote;
        highlightedPhrases.forEach((phrase) => {
            processedQuote = processedQuote.replace(
                phrase,
                `<span class="text-red-400 font-semibold">${phrase}</span>`
            );
        });
        return { __html: processedQuote };
    };

    return (
        <section className={`relative min-h-screen flex items-center ${backgroundClass} overflow-hidden`}>
            {/* Giant quotation mark background */}
            <div className="absolute top-0 left-0 text-[400px] text-white/5 font-serif leading-none select-none">
                {'"'}
            </div>
            
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black opacity-90" />
            
            <Container>
                <div 
                    ref={quoteRef}
                    className={`relative z-10 max-w-5xl mx-auto transition-all duration-1000 ${
                        isMounted ? (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8') : ''
                    }`}
                >
                    {/* Credibility indicators */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        {credibilityBadge && (
                            <div className="inline-flex items-center gap-2">
                                <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                                <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">
                                    {credibilityBadge}
                                </span>
                            </div>
                        )}
                        {underOath && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full">
                                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">
                                    Under Oath
                                </span>
                            </div>
                        )}
                        {courtFiling && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
                                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
                                </svg>
                                <span className="text-blue-500 text-xs font-semibold uppercase tracking-wider">
                                    Court Filing
                                </span>
                            </div>
                        )}
                        {witnessCount && witnessCount > 0 && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                                <span className="text-green-500 text-xs font-semibold uppercase tracking-wider">
                                    {witnessCount} {witnessCount === 1 ? 'Witness' : 'Witnesses'}
                                </span>
                            </div>
                        )}
                    </div>
                    
                    {/* Main quote with massive typography */}
                    <blockquote className="mb-12">
                        <p 
                            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight"
                            dangerouslySetInnerHTML={highlightedPhrases.length > 0 ? renderQuoteWithHighlights() : { __html: quote }}
                        />
                    </blockquote>
                    
                    {/* Attribution with enhanced styling */}
                    <div className="flex items-start gap-4 mb-8">
                        <div className="w-1 h-16 bg-gradient-to-b from-red-500 to-red-700 rounded-full" />
                        <div>
                            <cite className="text-white text-2xl font-semibold not-italic block mb-1">
                                {author}
                            </cite>
                            <p className="text-neutral-400">
                                {source}
                                {date && <span className="text-neutral-500"> • {date}</span>}
                            </p>
                        </div>
                    </div>
                    
                    {/* Supporting context grid */}
                    {(location || status) && (
                        <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                            {location && (
                                <div>
                                    <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">
                                        Location
                                    </p>
                                    <p className="text-white text-lg">
                                        {location}
                                    </p>
                                </div>
                            )}
                            {date && (
                                <div>
                                    <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">
                                        Date
                                    </p>
                                    <p className="text-white text-lg font-bold">
                                        {date}
                                    </p>
                                </div>
                            )}
                            {status && (
                                <div>
                                    <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2">
                                        Status
                                    </p>
                                    <p className={`text-lg ${
                                        status.includes('Withdrawn') ? 'text-amber-400' :
                                        status.includes('Verdict') ? 'text-green-400' :
                                        'text-white'
                                    }`}>
                                        {status}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </Container>
            
            {/* Scroll indicator - only show when mounted */}
            {isMounted && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            )}
        </section>
    );
}