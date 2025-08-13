/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import {
    DocumentTextIcon,
    CalendarDaysIcon,
    HomeIcon,
    ExclamationTriangleIcon,
    CheckBadgeIcon,
    NewspaperIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

export default function TrumpEpsteinTies() {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    return (
        <div className='bg-gradient-to-b from-neutral-950 to-black px-6 py-24 lg:px-8'>
            <div className='mx-auto max-w-4xl'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold tracking-tight text-white sm:text-6xl quote-serif'>
                        Trump and Epstein: <span className='highlight-text'>15+ Years</span>
                    </h1>
                    <div className='mt-2 flex items-center justify-center gap-2 text-sm text-neutral-500'>
                        <CheckBadgeIcon className='h-4 w-4 text-green-500' />
                        <span className='quote-attribution uppercase tracking-wider'>Documented through Court Records & Media Archives</span>
                    </div>
                    <p className='mt-6 text-xl text-neutral-300 leading-relaxed'>
                        Their well-documented relationship spanned from the <span className='font-semibold text-white'>late 1980s until 2004</span>
                    </p>
                </div>

                <div className='mt-16 space-y-12'>
                    {/* Key Facts */}
                    <div className='grid gap-6 md:grid-cols-3'>
                        <div className={`bg-neutral-900/50 backdrop-blur rounded-xl border-2 border-white/10 p-8 transition-all duration-700 transform hover:scale-105 hover:border-primary-500/50 ${
                            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '100ms' }}>
                            <CalendarDaysIcon className='h-10 w-10 text-primary-500 mb-4' />
                            <h3 className='text-lg font-bold text-white mb-3 quote-serif'>
                                15 Years of Friendship
                            </h3>
                            <p className='text-base text-neutral-300 leading-relaxed'>
                                Trump in 2002: <span className='italic text-white'>"I've known Jeff for fifteen years. 
                                Terrific guy... he likes beautiful women as much as I do, 
                                and many of them are on the younger side."</span>
                            </p>
                        </div>

                        <div className={`bg-neutral-900/50 backdrop-blur rounded-xl border-2 border-white/10 p-8 transition-all duration-700 transform hover:scale-105 hover:border-info/50 ${
                            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '200ms' }}>
                            <DocumentTextIcon className='h-10 w-10 text-info mb-4' />
                            <h3 className='text-lg font-bold text-white mb-3 quote-serif'>
                                Flight Records
                            </h3>
                            <div className='mb-2'>
                                <span className='inline-flex items-center gap-1 px-2 py-1 text-xs font-bold bg-blue-500/20 text-blue-400 rounded-full'>
                                    <NewspaperIcon className='h-3 w-3' />
                                    VERIFIED
                                </span>
                            </div>
                            <p className='text-base text-neutral-300 leading-relaxed'>
                                Trump appeared on Epstein's flight logs <span className='font-semibold text-white'>7+ times</span> 
                                between 1993-1997, including one flight with 
                                "Marla and Tiffany".
                            </p>
                        </div>

                        <div className={`bg-neutral-900/50 backdrop-blur rounded-xl border-2 border-white/10 p-8 transition-all duration-700 transform hover:scale-105 hover:border-warning/50 ${
                            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '300ms' }}>
                            <HomeIcon className='h-10 w-10 text-warning mb-4' />
                            <h3 className='text-lg font-bold text-white mb-3 quote-serif'>
                                Mar-a-Lago Parties
                            </h3>
                            <div className='mb-2'>
                                <span className='inline-flex items-center gap-1 px-2 py-1 text-xs font-bold bg-amber-500/20 text-amber-400 rounded-full'>
                                    <SparklesIcon className='h-3 w-3' />
                                    VIDEO EVIDENCE
                                </span>
                            </div>
                            <p className='text-base text-neutral-300 leading-relaxed'>
                                1992 NBC footage shows Trump and Epstein partying 
                                together at Mar-a-Lago with NFL cheerleaders.
                            </p>
                        </div>
                    </div>

                    {/* Katie Johnson Section */}
                    <div className={`bg-red-950/30 backdrop-blur rounded-xl border-2 border-red-500/20 p-10 transition-all duration-700 transform ${
                        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '400ms' }}>
                        <div className='flex items-start gap-4'>
                            <ExclamationTriangleIcon className='h-8 w-8 text-red-500 flex-shrink-0 mt-0.5' />
                            <div className='flex-1'>
                                <h2 className='text-2xl font-bold text-white mb-4 quote-serif'>
                                    The Katie Johnson Allegations
                                </h2>
                                <div className='mb-4'>
                                    <span className='inline-flex items-center gap-1 px-3 py-1 text-xs font-bold bg-red-500/20 text-red-400 rounded-full uppercase tracking-wider'>
                                        <ExclamationTriangleIcon className='h-3 w-3' />
                                        FEDERAL LAWSUIT FILED
                                    </span>
                                </div>
                                <p className='text-lg text-neutral-300 mb-6 leading-relaxed'>
                                    In 2016, an anonymous plaintiff filed lawsuits alleging 
                                    Trump and Epstein raped her when she was <span className='font-bold text-white'>13 years old in 1994</span>. 
                                    The case was withdrawn days before the 2016 election.
                                </p>
                                <blockquote className='border-l-4 border-red-500 pl-6 text-lg text-white italic quote-serif'>
                                    "The plaintiff alleged that Trump tied her to a bed, 
                                    struck her, and threatened her family."
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    {/* Falling Out */}
                    <div className={`transition-all duration-700 transform ${
                        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '500ms' }}>
                        <h2 className='text-3xl font-bold text-white mb-6 quote-serif'>
                            The Falling Out
                        </h2>
                        <div className='bg-neutral-900/50 backdrop-blur rounded-xl border border-white/10 p-8'>
                            <p className='text-lg text-neutral-300 leading-relaxed'>
                                Their friendship ended abruptly in <span className='font-semibold text-white'>November 2004</span> over a Palm Beach 
                                mansion auction. Trump won with a <span className='font-semibold text-green-400'>$41.35 million</span> bid. Just two weeks 
                                later, police received their first tip about young women at Epstein's 
                                home. By 2007, Epstein was reportedly <span className='font-semibold text-red-400'>banned from Mar-a-Lago</span>.
                            </p>
                        </div>
                    </div>

                    {/* Important Context */}
                    <div className={`bg-amber-500/10 border-2 border-amber-500/30 rounded-xl p-8 transition-all duration-700 transform ${
                        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '600ms' }}>
                        <div className='flex items-start gap-3'>
                            <NewspaperIcon className='h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5' />
                            <div>
                                <p className='text-base text-neutral-300 leading-relaxed'>
                                    <span className='font-bold text-white uppercase tracking-wider text-sm'>Note:</span> While 
                                    their friendship was well-documented, no credible evidence has 
                                    emerged linking Trump to Epstein's crimes. Virginia Giuffre stated 
                                    in 2016: <span className='italic text-white'>"I don't think Donald Trump participated in anything."</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}