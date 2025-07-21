/* eslint-disable react/no-unescaped-entities */
export default function EpsteinBirthdayQuoteSection() {
    return (
        <section className='relative isolate bg-secondary/30 py-16 sm:py-28 md:py-32 overflow-hidden'>
            {/* Background pattern */}
            <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
            
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-4xl animate-fade-up'>
                    <figure>
                        <blockquote className='relative text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl'>
                            <p className='before:content-["\u201C"] after:content-["\u201D"] sm:before:absolute sm:before:right-full sm:before:-mr-4 sm:before:text-6xl sm:before:text-muted-foreground/30 sm:after:absolute sm:after:left-full sm:after:ml-4 sm:after:text-6xl sm:after:text-muted-foreground/30'>
                                Happy Birthday — and may every day be another
                                wonderful secret
                            </p>
                        </blockquote>
                        <figcaption className='mt-10 flex items-center gap-x-6'>
                            <div className='h-16 w-16 rounded-full bg-gradient-to-br from-info/20 to-info/10 flex items-center justify-center'>
                                <svg
                                    className='w-8 h-8 text-info'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className='font-semibold text-foreground'>
                                    Birthday Letter
                                </div>
                                <div className='mt-1 text-sm text-muted-foreground'>
                                    Jeffrey Epstein's 50th Birthday, 2003
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
