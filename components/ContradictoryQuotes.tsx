/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/Container';

interface QuotePair {
    trumpQuote: string;
    trumpSource: string;
    trumpDate: string;
    realityQuote: string;
    realitySource: string;
    realityDate: string;
    topic: string;
}

export function ContradictoryQuotes() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const quotePairs: QuotePair[] = [
        {
            topic: "On His Relationship with Epstein",
            trumpQuote: "I was not a fan of Jeffrey Epstein. I had a falling out with him a long time ago. I haven't spoken to him in 15 years.",
            trumpSource: "Trump to reporters",
            trumpDate: "July 2019",
            realityQuote: "I've known Jeff for fifteen years. Terrific guy. He's a lot of fun to be with. It is even said that he likes beautiful women as much as I do, and many of them are on the younger side.",
            realitySource: "Trump to New York Magazine",
            realityDate: "2002",
        },
        {
            topic: "On Sexual Assault",
            trumpQuote: "I have great respect for women. Nobody has more respect for women than I do.",
            trumpSource: "Presidential debate",
            trumpDate: "October 2016",
            realityQuote: "I don't even wait. And when you're a star, they let you do it. You can do anything... Grab them by the pussy.",
            realitySource: "Access Hollywood tape",
            realityDate: "2005",
        },
        {
            topic: "On E. Jean Carroll",
            trumpQuote: "I've never met this person in my life. She is trying to sell a new book—that should indicate her motivation.",
            trumpSource: "Trump statement",
            trumpDate: "June 2019",
            realityQuote: "Jury finds Trump liable for sexual abuse and defamation. Awards $5 million in damages, later additional $83.3 million.",
            realitySource: "Manhattan Federal Court verdict",
            realityDate: "May 2023",
        },
        {
            topic: "On Pageant Dressing Rooms",
            trumpQuote: "I have no idea who these women are. The stories are total fiction. They are 100% made up.",
            trumpSource: "Trump campaign statement",
            trumpDate: "October 2016",
            realityQuote: "I'll go backstage... You know, no men are anywhere. And I'm allowed to go in because I'm the owner of the pageant... they're standing there with no clothes.",
            realitySource: "Trump on Howard Stern Show",
            realityDate: "2005",
        },
    ];

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

    const currentPair = quotePairs[activeIndex];

    return (
        <section className="relative min-h-screen bg-black py-24 overflow-hidden">
            {/* Background grid effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            
            <Container>
                <div ref={sectionRef} className={`relative z-10 transition-all duration-1000 ${
                    isMounted ? (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8') : ''
                }`}>
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Words vs. <span className="text-red-500">Reality</span>
                        </h2>
                        <p className="text-xl text-neutral-400">
                            What Trump said then. What we know now.
                        </p>
                    </div>

                    {/* Topic selector */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {quotePairs.map((pair, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                                    activeIndex === index
                                        ? 'bg-red-500 text-white'
                                        : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                                }`}
                            >
                                {pair.topic}
                            </button>
                        ))}
                    </div>

                    {/* Current topic display */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
                            <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
                                {currentPair.topic}
                            </span>
                        </div>
                    </div>

                    {/* Side-by-side quotes */}
                    <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {/* Trump's Statement */}
                        <div className="relative">
                            <div className="absolute -top-8 -left-4 text-[120px] text-blue-500/10 font-serif leading-none select-none">
                                "
                            </div>
                            <div className="relative bg-gradient-to-br from-blue-950/50 to-neutral-950/50 p-8 rounded-2xl border border-blue-500/20">
                                <div className="mb-4">
                                    <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                                        Trump's Claim
                                    </span>
                                </div>
                                <blockquote className="mb-6">
                                    <p className="text-white text-2xl md:text-3xl font-serif leading-relaxed">
                                        {currentPair.trumpQuote}
                                    </p>
                                </blockquote>
                                <div className="flex items-center justify-between pt-4 border-t border-blue-500/20">
                                    <cite className="text-blue-300 not-italic">
                                        {currentPair.trumpSource}
                                    </cite>
                                    <time className="text-blue-400 text-sm">
                                        {currentPair.trumpDate}
                                    </time>
                                </div>
                            </div>
                        </div>

                        {/* Reality/Evidence */}
                        <div className="relative">
                            <div className="absolute -top-8 -right-4 text-[120px] text-red-500/10 font-serif leading-none select-none scale-x-[-1]">
                                "
                            </div>
                            <div className="relative bg-gradient-to-br from-red-950/50 to-neutral-950/50 p-8 rounded-2xl border border-red-500/20">
                                <div className="mb-4">
                                    <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
                                        The Reality
                                    </span>
                                </div>
                                <blockquote className="mb-6">
                                    <p className="text-white text-2xl md:text-3xl font-serif leading-relaxed">
                                        {currentPair.realityQuote}
                                    </p>
                                </blockquote>
                                <div className="flex items-center justify-between pt-4 border-t border-red-500/20">
                                    <cite className="text-red-300 not-italic">
                                        {currentPair.realitySource}
                                    </cite>
                                    <time className="text-red-400 text-sm">
                                        {currentPair.realityDate}
                                    </time>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VS indicator */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-gradient-to-br from-red-500 to-blue-500 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-2xl">
                            VS
                        </div>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center gap-2 mt-12">
                        {quotePairs.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-2 transition-all ${
                                    activeIndex === index
                                        ? 'w-8 bg-red-500'
                                        : 'w-2 bg-neutral-600 hover:bg-neutral-500'
                                } rounded-full`}
                                aria-label={`Go to quote pair ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}