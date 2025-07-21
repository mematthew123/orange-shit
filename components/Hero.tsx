'use client';

import {
    DocumentTextIcon,
    ShieldCheckIcon,
    ExclamationTriangleIcon,
    ScaleIcon,
    CalendarDaysIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function Hero() {
    return (
        <div className='relative bg-background overflow-hidden'>
            {/* Enhanced background effects */}
            <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/5' />
                <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                    <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-destructive/30 to-warning/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]' />
                </div>
                <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
                    <div className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary/20 to-info/20 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]' />
                </div>
            </div>

            <div className='relative'>
                <div className='mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8'>
                    <div className='mx-auto max-w-3xl text-center'>
                        {/* Alert badge */}
                        <div className='mb-10 flex justify-center'>
                            <div className='relative group'>
                                <div className='absolute -inset-1 bg-gradient-to-r from-destructive to-warning rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity'></div>
                                <div className='relative flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-semibold text-destructive ring-1 ring-destructive/20 backdrop-blur-sm'>
                                    <ExclamationTriangleIcon className='h-4 w-4' />
                                    <span>
                                        Documented Evidence & Court Records
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Main heading with gradient text */}
                        <h1 className='text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl'>
                            <span className='block text-foreground'>
                                The Truth About
                            </span>
                            <span className='block bg-gradient-to-r from-destructive via-warning to-primary bg-clip-text text-transparent animate-gradient'>
                                Trump & Epstein
                            </span>
                        </h1>

                        <p className='mt-8 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto'>
                            A comprehensive archive documenting decades of
                            allegations, court testimonies, and verified
                            connections. Every claim backed by public records
                            and mainstream media sources.
                        </p>

                        {/* Enhanced CTA buttons */}
                        <div className='mt-12 flex flex-col sm:flex-row items-center justify-center gap-4'>
                            <a
                                href='#timeline'
                                className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-foreground transition-all duration-200 bg-gradient-to-r from-destructive to-destructive/80 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-destructive'
                            >
                                <span className='relative'>
                                    View the Timeline
                                </span>
                                <ArrowRightIcon className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
                            </a>
                            <a
                                href='#documents'
                                className='group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground border-2 border-border bg-card/50 backdrop-blur-sm rounded-xl hover:border-primary hover:bg-card transition-all duration-200 hover:scale-105'
                            >
                                Explore Evidence
                                <DocumentTextIcon className='ml-2 h-5 w-5' />
                            </a>
                        </div>
                    </div>

                    {/* Enhanced stats section */}
                    <div className='mx-auto mt-20 max-w-5xl'>
                        <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
                            <div className='group relative bg-card backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-destructive/50 transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                                <div className='absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity' />
                                <div className='relative'>
                                    <p className='text-5xl font-black bg-gradient-to-br from-destructive to-destructive/60 bg-clip-text text-transparent'>
                                        25+
                                    </p>
                                    <p className='mt-2 text-sm font-medium text-muted-foreground'>
                                        Documented Accusers
                                    </p>
                                </div>
                            </div>
                            <div className='group relative bg-card backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-warning/50 transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                                <div className='absolute inset-0 bg-gradient-to-br from-warning/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity' />
                                <div className='relative'>
                                    <p className='text-5xl font-black bg-gradient-to-br from-warning to-warning/60 bg-clip-text text-transparent'>
                                        50+
                                    </p>
                                    <p className='mt-2 text-sm font-medium text-muted-foreground'>
                                        Years of Records
                                    </p>
                                </div>
                            </div>
                            <div className='group relative bg-card backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                                <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity' />
                                <div className='relative'>
                                    <p className='text-5xl font-black bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent'>
                                        $88.3M
                                    </p>
                                    <p className='mt-2 text-sm font-medium text-muted-foreground'>
                                        Court Damages
                                    </p>
                                </div>
                            </div>
                            <div className='group relative bg-card backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-info/50 transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                                <div className='absolute inset-0 bg-gradient-to-br from-info/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity' />
                                <div className='relative'>
                                    <p className='text-5xl font-black bg-gradient-to-br from-info to-info/60 bg-clip-text text-transparent'>
                                        100+
                                    </p>
                                    <p className='mt-2 text-sm font-medium text-muted-foreground'>
                                        Media Sources
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature cards with icons */}
                    <div className='mx-auto mt-24 max-w-5xl'>
                        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                            <div className='group relative bg-card backdrop-blur-sm rounded-2xl p-8 border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'>
                                <div className='absolute -inset-px bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity' />
                                <div className='relative'>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <div className='p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors'>
                                            <ScaleIcon className='h-6 w-6 text-primary' />
                                        </div>
                                        <h3 className='text-lg font-bold text-foreground'>
                                            Court Documents
                                        </h3>
                                    </div>
                                    <p className='text-muted-foreground'>
                                        Verified legal filings, depositions, and
                                        court records from multiple cases
                                        spanning decades.
                                    </p>
                                </div>
                            </div>

                            <div className='group relative bg-card backdrop-blur-sm rounded-2xl p-8 border-2 border-border hover:border-warning/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'>
                                <div className='absolute -inset-px bg-gradient-to-r from-warning/20 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity' />
                                <div className='relative'>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <div className='p-3 bg-warning/10 rounded-xl group-hover:bg-warning/20 transition-colors'>
                                            <ShieldCheckIcon className='h-6 w-6 text-warning' />
                                        </div>
                                        <h3 className='text-lg font-bold text-foreground'>
                                            Verified Sources
                                        </h3>
                                    </div>
                                    <p className='text-muted-foreground'>
                                        Every claim sourced from mainstream
                                        media, public records, and official
                                        documents.
                                    </p>
                                </div>
                            </div>

                            <div className='group relative bg-card backdrop-blur-sm rounded-2xl p-8 border-2 border-border hover:border-info/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'>
                                <div className='absolute -inset-px bg-gradient-to-r from-info/20 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity' />
                                <div className='relative'>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <div className='p-3 bg-info/10 rounded-xl group-hover:bg-info/20 transition-colors'>
                                            <CalendarDaysIcon className='h-6 w-6 text-info' />
                                        </div>
                                        <h3 className='text-lg font-bold text-foreground'>
                                            Complete Timeline
                                        </h3>
                                    </div>
                                    <p className='text-muted-foreground'>
                                        Navigate events, relationships, and
                                        proceedings from the 1970s to present
                                        day.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}