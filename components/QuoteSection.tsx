/* eslint-disable react/no-unescaped-entities */
export default function QuoteSection() {
    return (
        <section className='relative isolate bg-secondary/30 py-16 sm:py-28 md:py-32 overflow-hidden'>
            {/* Background pattern */}
            <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
            
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-4xl animate-fade-up'>
                    <figure>
                        <blockquote className='relative font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl'>
                            <p className='before:content-["\\""] after:content-["\\""] sm:before:absolute sm:before:right-full sm:before:-mr-4 sm:before:text-6xl sm:before:text-muted-foreground/30 sm:after:absolute sm:after:left-full sm:after:ml-4 sm:after:text-6xl sm:after:text-muted-foreground/30'>
                                I've known Jeff for fifteen years. Terrific guy.
                                He's a lot of fun to be with. It is even said
                                that he likes beautiful women as much as I do,
                                and many of them are on the younger side.
                            </p>
                        </blockquote>
                        <figcaption className='mt-10 flex items-center gap-x-6'>
                            <div className='h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center'>
                                <svg
                                    className='w-8 h-8 text-primary'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className='font-semibold text-foreground'>
                                    Donald Trump
                                </div>
                                <div className='mt-1 text-sm text-muted-foreground'>
                                    Speaking to New York Magazine, 2002
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
