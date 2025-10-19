/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    DocumentTextIcon,
    CalendarDaysIcon,
    HomeIcon,
    ExclamationTriangleIcon,
    CheckBadgeIcon,
    NewspaperIcon,
    SparklesIcon,
    MagnifyingGlassPlusIcon,
} from '@heroicons/react/24/outline';

export default function TrumpEpsteinTies() {
    const [isMounted, setIsMounted] = useState(false);
    const [showDocumentModal, setShowDocumentModal] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className='bg-gradient-to-b from-neutral-950 to-black px-6 py-24 lg:px-8'>
            <div className='mx-auto max-w-4xl'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold tracking-tight text-white sm:text-6xl quote-serif'>
                        Trump and Epstein:{' '}
                        <span className='highlight-text'>15+ Years</span>
                    </h1>
                    <div className='mt-2 flex items-center justify-center gap-2 text-sm text-neutral-500'>
                        <CheckBadgeIcon className='h-4 w-4 text-green-500' />
                        <span className='quote-attribution uppercase tracking-wider'>
                            Documented through Court Records & Media Archives
                        </span>
                    </div>
                    <p className='mt-6 text-xl text-neutral-300 leading-relaxed'>
                        Their well-documented relationship spanned from the{' '}
                        <span className='font-semibold text-white'>
                            late 1980s until 2004
                        </span>
                    </p>
                </div>

                <div className='mt-16 space-y-12'>
                    {/* Key Facts */}
                    <div className='grid gap-6 md:grid-cols-3'>
                        <div
                            className={`bg-neutral-900/50 backdrop-blur rounded-xl border-2 border-white/10 p-8 transition-all duration-700 transform hover:scale-105 hover:border-primary-500/50 ${
                                isMounted
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                            }`}
                            style={{ transitionDelay: '100ms' }}
                        >
                            <CalendarDaysIcon className='h-10 w-10 text-primary-500 mb-4' />
                            <h3 className='text-lg font-bold text-white mb-3 quote-serif'>
                                15 Years of Friendship
                            </h3>
                            <p className='text-base text-neutral-300 leading-relaxed'>
                                Trump in 2002:{' '}
                                <span className='italic text-white'>
                                    "I've known Jeff for fifteen years. Terrific
                                    guy... he likes beautiful women as much as I
                                    do, and many of them are on the younger
                                    side."
                                </span>
                            </p>
                        </div>

                        <div
                            className={`bg-neutral-900/50 backdrop-blur rounded-xl border-2 border-white/10 p-8 transition-all duration-700 transform hover:scale-105 hover:border-info/50 ${
                                isMounted
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                            }`}
                            style={{ transitionDelay: '200ms' }}
                        >
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
                                Trump appeared on Epstein's flight logs{' '}
                                <span className='font-semibold text-white'>
                                    7+ times
                                </span>
                                between 1993-1997, including one flight with
                                "Marla and Tiffany".
                            </p>
                        </div>

                        <div
                            className={`bg-neutral-900/50 backdrop-blur rounded-xl border-2 border-white/10 p-8 transition-all duration-700 transform hover:scale-105 hover:border-warning/50 ${
                                isMounted
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                            }`}
                            style={{ transitionDelay: '300ms' }}
                        >
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
                                1992 NBC footage shows Trump and Epstein
                                partying together at Mar-a-Lago with NFL
                                cheerleaders.
                            </p>
                        </div>
                    </div>

                    {/* Document Evidence Section */}
                    <div
                        className={`bg-gradient-to-br from-blue-950/20 to-neutral-950/20 backdrop-blur-xl rounded-2xl border border-blue-500/30 overflow-hidden transition-all duration-700 transform ${
                            isMounted
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '350ms' }}
                    >
                        <div className='bg-gradient-to-r from-blue-600/10 to-transparent p-6 border-b border-white/10'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <div className='flex items-center gap-2 mb-2'>
                                        <DocumentTextIcon className='h-6 w-6 text-blue-400' />
                                        <span className='text-xs font-bold text-blue-400 uppercase tracking-widest'>
                                            Official Document
                                        </span>
                                    </div>
                                    <h3 className='text-2xl font-bold text-white quote-serif'>
                                        Trump's Birthday Message to Epstein
                                    </h3>
                                    <p className='text-sm text-neutral-400 mt-1'>
                                        Personal correspondence • Released in
                                        court filings
                                    </p>
                                </div>
                                <CheckBadgeIcon className='h-10 w-10 text-green-500' />
                            </div>
                        </div>

                        <div className='p-8'>
                            <div className='grid md:grid-cols-2 gap-8'>
                                {/* Document Image Preview */}
                                <div className='relative'>
                                    <div
                                        className='relative aspect-[8.5/11] bg-white rounded-lg overflow-hidden shadow-2xl border-4 border-white/20 group cursor-pointer'
                                        onClick={() =>
                                            setShowDocumentModal(true)
                                        }
                                    >
                                        {/* Placeholder for document image */}
                                        {/* <div className='absolute inset-0 bg-neutral-100 flex items-center justify-center'>
                                            <div className='text-center p-8'>
                                                <DocumentTextIcon className='h-20 w-20 text-neutral-400 mx-auto mb-4' />
                                                <p className='text-sm text-neutral-500 font-medium mb-2'>
                                                    Trump Birthday Letter to
                                                    Epstein
                                                </p>
                                                <p className='text-xs text-neutral-400'>
                                                    Add image to:
                                                    <br />
                                                    public/images/documents/trump-epstein-birthday-letter.jpg
                                                </p>
                                            </div>
                                        </div> */}
                                        {/* Uncomment when image is added: */}
                                        <Image
                                            src="/images/documents/trump-epstein-birthday-letter.png"
                                            alt="Trump's birthday message to Jeffrey Epstein"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                       
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity'>
                                            <div className='absolute bottom-4 left-4 flex items-center gap-2 text-white'>
                                                <MagnifyingGlassPlusIcon className='h-5 w-5' />
                                                <span className='text-sm font-semibold'>
                                                    Click to enlarge
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Document Details */}
                                <div className='flex flex-col justify-center'>
                                    <div className='space-y-4'>
                                        <div>
                                            <h4 className='text-sm font-bold text-blue-400 uppercase tracking-wider mb-2'>
                                                What This Shows
                                            </h4>
                                            <p className='text-neutral-300 leading-relaxed'>
                                                A personal birthday message from
                                                Donald Trump to Jeffrey Epstein,
                                                demonstrating their
                                                <span className='font-bold text-white'>
                                                    {' '}
                                                    close personal friendship
                                                </span>{' '}
                                                during the period when Epstein
                                                was actively trafficking young
                                                women and girls.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className='text-sm font-bold text-blue-400 uppercase tracking-wider mb-2'>
                                                Key Details
                                            </h4>
                                            <ul className='space-y-2 text-neutral-300'>
                                                <li className='flex items-start gap-2'>
                                                    <span className='text-blue-400 mt-1'>
                                                        •
                                                    </span>
                                                    <span>
                                                        Personal correspondence
                                                        showing warm, friendly
                                                        relationship
                                                    </span>
                                                </li>
                                                <li className='flex items-start gap-2'>
                                                    <span className='text-blue-400 mt-1'>
                                                        •
                                                    </span>
                                                    <span>
                                                        Sent during the period
                                                        of Epstein's criminal
                                                        activities
                                                    </span>
                                                </li>
                                                <li className='flex items-start gap-2'>
                                                    <span className='text-blue-400 mt-1'>
                                                        •
                                                    </span>
                                                    <span>
                                                        Released in recent court
                                                        document unsealing
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className='pt-4 border-t border-white/10'>
                                            <p className='text-xs text-neutral-500 italic'>
                                               Trump initally denied the existence
                                               of this letter, but it was
                                               later verified through court
                                               documents.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Katie Johnson Section */}
                    <div
                        className={`bg-red-950/30 backdrop-blur rounded-xl border-2 border-red-500/20 p-10 transition-all duration-700 transform ${
                            isMounted
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '400ms' }}
                    >
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
                                    In 2016, an anonymous plaintiff filed
                                    lawsuits alleging Trump and Epstein raped
                                    her when she was{' '}
                                    <span className='font-bold text-white'>
                                        13 years old in 1994
                                    </span>
                                    . The case was withdrawn days before the
                                    2016 election.
                                </p>
                                <blockquote className='border-l-4 border-red-500 pl-6 text-lg text-white italic quote-serif'>
                                    "The plaintiff alleged that Trump tied her
                                    to a bed, struck her, and threatened her
                                    family."
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    {/* Falling Out */}
                    <div
                        className={`transition-all duration-700 transform ${
                            isMounted
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '500ms' }}
                    >
                        <h2 className='text-3xl font-bold text-white mb-6 quote-serif'>
                            The Falling Out
                        </h2>
                        <div className='bg-neutral-900/50 backdrop-blur rounded-xl border border-white/10 p-8'>
                            <p className='text-lg text-neutral-300 leading-relaxed'>
                                Their friendship ended abruptly in{' '}
                                <span className='font-semibold text-white'>
                                    November 2004
                                </span>{' '}
                                over a Palm Beach mansion auction. Trump won
                                with a{' '}
                                <span className='font-semibold text-green-400'>
                                    $41.35 million
                                </span>{' '}
                                bid. Just two weeks later, police received their
                                first tip about young women at Epstein's home.
                                By 2007, Epstein was reportedly{' '}
                                <span className='font-semibold text-red-400'>
                                    banned from Mar-a-Lago
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Document Modal/Lightbox */}
            {showDocumentModal && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm'
                    onClick={() => setShowDocumentModal(false)}
                >
                    <div className='relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-auto'>
                        <button
                            onClick={() => setShowDocumentModal(false)}
                            className='sticky top-4 right-4 float-right bg-black/80 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors z-10'
                        >
                            Close
                        </button>
                        <div className='p-8'>
                            <h3 className='text-2xl font-bold mb-4'>
                                Trump's Birthday Message to Epstein - Full
                                Document
                            </h3>
                            <p className='text-neutral-600 mb-6'>
                                Personal correspondence between Trump and
                                Epstein, released in court filings. Shows their
                                close personal relationship.
                            </p>
                            {/* Placeholder for full document */}
                            {/* <div className='bg-neutral-100 aspect-[8.5/11] rounded flex items-center justify-center'>
                                <div className='text-center p-12'>
                                    <DocumentTextIcon className='h-24 w-24 text-neutral-400 mx-auto mb-4' />
                                    <p className='text-neutral-500'>
                                        Add full document image to:
                                        <br />
                                        <code className='text-sm bg-neutral-200 px-2 py-1 rounded mt-2 inline-block'>
                                            public/images/documents/trump-epstein-birthday-letter.jpg
                                        </code>
                                    </p>
                                </div>
                            </div> */}
                            {/* Uncomment when image is added: */}
                            <Image
                                src='/images/documents/trump-epstein-birthday-letter.png'
                                alt="Trump's birthday message to Jeffrey Epstein - full document"
                                width={1200}
                                height={1600}
                                className='w-full h-auto'
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
