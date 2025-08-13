/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useRef, useState } from 'react';
import { ImpactQuote } from '@/components/ImpactQuote';

export default function TestimonyQuoteSection() {
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
            {/* Main dramatic quote */}
            <ImpactQuote
                quote="You remind me of my daughter. Smart, blonde and beautiful. And people underestimate her as well."
                highlightedPhrases={["remind me of my daughter"]}
                author="Donald Trump to Stormy Daniels"
                source="Sworn Court Testimony"
                date="May 7, 2024"
                credibilityBadge="Criminal Trial Testimony"
                underOath={true}
                courtFiling={true}
                witnessCount={1}
                status="Convicted on 34 counts"
                backgroundClass="bg-gradient-to-br from-purple-950 via-black to-red-950"
            />

            {/* Pattern documentation section */}
            <section className="relative bg-black py-24">
                <div 
                    ref={sectionRef}
                    className={`mx-auto max-w-5xl px-6 lg:px-8 transition-all duration-1000 ${
                        isMounted ? (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8') : ''
                    }`}
                >
                    {/* Court verification badges */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-green-500 text-sm font-semibold uppercase tracking-wider">
                                Court Verified
                            </span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
                            <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-amber-500 text-sm font-semibold uppercase tracking-wider">
                                Under Oath
                            </span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
                                Criminal Conviction
                            </span>
                        </div>
                    </div>

                    {/* Pattern header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            A Disturbing <span className="text-red-500">Pattern</span>
                        </h2>
                        <p className="text-xl text-neutral-400">
                            Multiple women report the same inappropriate comparison
                        </p>
                    </div>

                    {/* Individual testimonies */}
                    <div className="space-y-8">
                        {/* Karen McDougal */}
                        <div className="relative group">
                            <div className="absolute -left-8 top-0 text-[80px] text-purple-500/10 font-serif leading-none select-none">
                                "
                            </div>
                            <div className="relative bg-gradient-to-r from-purple-950/30 to-transparent p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Karen McDougal</h3>
                                        <p className="text-purple-400 text-sm">Former Playboy Model</p>
                                    </div>
                                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full">
                                        TV Interview
                                    </span>
                                </div>
                                <blockquote className="text-white text-lg leading-relaxed mb-4">
                                    "He said I was <span className="text-purple-400 font-semibold">beautiful like her</span> and, 
                                    you know, you're a smart girl. And there wasn't a lot of comparing, but there was 
                                    some, yes. <span className="text-purple-400 font-semibold">I heard a lot about her.</span>"
                                </blockquote>
                                <cite className="text-neutral-400 text-sm not-italic">
                                    — Anderson Cooper 360 interview
                                </cite>
                            </div>
                        </div>

                        {/* Stormy Daniels 60 Minutes */}
                        <div className="relative group">
                            <div className="absolute -left-8 top-0 text-[80px] text-red-500/10 font-serif leading-none select-none">
                                "
                            </div>
                            <div className="relative bg-gradient-to-r from-red-950/30 to-transparent p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Stormy Daniels</h3>
                                        <p className="text-red-400 text-sm">Adult Film Actress</p>
                                    </div>
                                    <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full">
                                        60 Minutes
                                    </span>
                                </div>
                                <blockquote className="text-white text-lg leading-relaxed mb-4">
                                    "He was like, 'Wow, you — you are special. <span className="text-red-400 font-semibold">You remind me of my daughter.</span>' 
                                    You know — he was like, 'You're smart and beautiful, and a woman to be 
                                    reckoned with, and I like you. I like you."
                                </blockquote>
                                <cite className="text-neutral-400 text-sm not-italic">
                                    — 60 Minutes interview, 2018
                                </cite>
                            </div>
                        </div>
                    </div>

                    {/* Legal context box */}
                    <div className="mt-12 p-8 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl border border-neutral-800">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Legal Outcome</h3>
                                <p className="text-neutral-300 leading-relaxed mb-4">
                                    These statements were made under oath during criminal proceedings where Trump was 
                                    charged with <span className="text-red-400 font-semibold">34 counts of falsifying business records</span> related 
                                    to hush money payments to adult film actress Stormy Daniels.
                                </p>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg">
                                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-red-400 font-semibold">
                                        Convicted on all 34 counts - May 30, 2024
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}