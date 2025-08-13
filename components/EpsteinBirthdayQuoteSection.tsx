/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useRef, useState } from 'react';
import { ImpactQuote } from '@/components/ImpactQuote';

export default function EpsteinBirthdayQuoteSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isMounted]);

    return (
        <>
            {/* NYT-style dramatic quote */}
            <ImpactQuote
                quote="Happy Birthday — and may every day be another wonderful secret"
                highlightedPhrases={["wonderful secret"]}
                author="Alleged Trump Letter"
                source="Wall Street Journal Report"
                date="2003"
                credibilityBadge="Epstein's 50th Birthday"
                location="Letter with naked woman outline"
                status="Trump sued WSJ for $20 billion"
                backgroundClass="bg-gradient-to-br from-red-950 via-black to-neutral-950"
            />

            {/* Additional context section */}
            <section className="relative bg-black py-24">
                <div 
                    ref={sectionRef}
                    className={`mx-auto max-w-4xl px-6 lg:px-8 transition-all duration-1000 ${
                        isMounted ? (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8') : ''
                    }`}
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* The Letter Details */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white">The Birthday Letter</h3>
                            </div>
                            <div className="space-y-4 text-neutral-300">
                                <p className="text-lg leading-relaxed">
                                    The Wall Street Journal reported Trump sent a <span className="text-red-400 font-semibold">"bawdy" letter</span> to 
                                    Epstein in 2003 for his 50th birthday.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span>Featured <span className="text-red-400">outline of a naked woman</span> hand-drawn in marker</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span>Trump's signature positioned to <span className="text-red-400">mimic pubic hair</span></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span>Collected by Ghislaine Maxwell in leather-bound album</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span>Examined by Justice Department during investigation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Trump's Response */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white">Trump's Response</h3>
                            </div>
                            <div className="space-y-4 text-neutral-300">
                                <p className="text-lg leading-relaxed">
                                    Trump filed a <span className="text-amber-400 font-semibold">$20 billion lawsuit</span> against 
                                    The Wall Street Journal the day after publication.
                                </p>
                                <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                                    <p className="text-amber-400 font-semibold mb-2">Lawsuit Claims:</p>
                                    <ul className="space-y-2 text-sm">
                                        <li>• Two counts of defamation</li>
                                        <li>• $10 billion per count</li>
                                        <li>• Called story "false, defamatory, unsubstantiated"</li>
                                        <li>• Filed in Southern District of Florida</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline context */}
                    <div className="mt-16 p-6 bg-gradient-to-r from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800">
                        <h4 className="text-lg font-semibold text-white mb-4">Timeline Context</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Letter Date</p>
                                <p className="text-white text-2xl font-bold">2003</p>
                                <p className="text-neutral-400 text-sm">Peak of friendship</p>
                            </div>
                            <div>
                                <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Friendship Ended</p>
                                <p className="text-white text-2xl font-bold">2004</p>
                                <p className="text-neutral-400 text-sm">One year later</p>
                            </div>
                            <div>
                                <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Story Published</p>
                                <p className="text-white text-2xl font-bold">July 2025</p>
                                <p className="text-neutral-400 text-sm">WSJ revelation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}