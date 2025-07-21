/* eslint-disable react/no-unescaped-entities */
export default function TestimonyQuoteSection() {
    return (
        <section className='relative isolate bg-secondary/30 py-16 sm:py-28 md:py-32 overflow-hidden'>
            {/* Background pattern */}
            <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
            
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-4xl animate-fade-up'>
                    <figure>
                        <blockquote className='relative font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl'>
                            <p className='before:content-["\\""] after:content-["\\""] sm:before:absolute sm:before:right-full sm:before:-mr-4 sm:before:text-6xl sm:before:text-muted-foreground/30 sm:after:absolute sm:after:left-full sm:after:ml-4 sm:after:text-6xl sm:after:text-muted-foreground/30 mb-4'>
                                You remind me of my daughter. Smart, blonde and
                                beautiful. And people underestimate her as
                                well.
                            </p>
                            <p className='text-base font-normal text-muted-foreground italic'>
                                — Donald Trump to Stormy Daniels in his hotel
                                room, according to her sworn testimony
                            </p>
                        </blockquote>
                        <figcaption className='mt-10 flex items-center gap-x-6'>
                            <div className='h-16 w-16 rounded-full bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center'>
                                <svg
                                    className='w-8 h-8 text-destructive'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className='font-semibold text-foreground'>
                                    Stormy Daniels Testimony
                                </div>
                                <div className='mt-1 text-sm text-muted-foreground'>
                                    Manhattan Criminal Court, May 7, 2024
                                </div>
                                <div className='mt-2 text-sm text-muted-foreground'>
                                    Sworn testimony during Trump's criminal trial for
                                    falsifying business records
                                </div>
                            </div>
                        </figcaption>
                    </figure>

                    <div className='mt-16 space-y-6'>
                        <div className='bg-card/50 rounded-lg border border-destructive/20 p-6'>
                            <h3 className='text-sm font-semibold text-destructive mb-2'>
                                Pattern Across Multiple Women
                            </h3>
                            <div className='text-sm text-muted-foreground space-y-4'>
                                <p>
                                    This comparison to his daughter was not isolated
                                    to Stormy Daniels. Court testimony and
                                    interviews reveal a disturbing pattern:
                                </p>

                                <div className='space-y-3'>
                                    <div className='pl-4 border-l-2 border-border'>
                                        <p className='font-medium text-foreground'>
                                            Karen McDougal (Former Playboy Model)
                                        </p>
                                        <p className='mt-1'>
                                            "He said I was beautiful like her and,
                                            you know, you're a smart girl. And there
                                            wasn't a lot of comparing, but there was
                                            some, yes. I heard a lot about her."
                                        </p>
                                        <p className='text-xs mt-1'>
                                            — Anderson Cooper 360 interview
                                        </p>
                                    </div>

                                    <div className='pl-4 border-l-2 border-border'>
                                        <p className='font-medium text-foreground'>
                                            Stormy Daniels (2018 Interview)
                                        </p>
                                        <p className='mt-1'>
                                            "He was like, 'Wow, you — you are
                                            special. You remind me of my daughter.'
                                            You know — he was like, 'You're smart
                                            and beautiful, and a woman to be
                                            reckoned with, and I like you. I like
                                            you."
                                        </p>
                                        <p className='text-xs mt-1'>
                                            — 60 Minutes interview
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-secondary/50 rounded-lg p-4'>
                            <p className='text-sm text-muted-foreground'>
                                <span className='font-semibold'>
                                    Legal Context:
                                </span>{' '}
                                These statements were made under oath during
                                criminal proceedings where Trump was charged with 34
                                counts of falsifying business records related to
                                hush money payments. He was ultimately convicted on
                                all counts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}