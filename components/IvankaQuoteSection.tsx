/* eslint-disable react/no-unescaped-entities */
export default function IvankaQuoteSection() {
    return (
        <section className='relative isolate bg-secondary/30 py-16 sm:py-28 md:py-32 overflow-hidden'>
            {/* Background pattern */}
            <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
            
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-4xl animate-fade-up'>
                    <figure>
                        <blockquote className='relative font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl'>
                            <p className='before:content-["\\""] after:content-["\\""] sm:before:absolute sm:before:right-full sm:before:-mr-4 sm:before:text-6xl sm:before:text-muted-foreground/30 sm:after:absolute sm:after:left-full sm:after:ml-4 sm:after:text-6xl sm:after:text-muted-foreground/30'>
                                I've said if Ivanka weren't my daughter, perhaps
                                I'd be dating her.
                            </p>
                        </blockquote>
                        <figcaption className='mt-10 flex items-center gap-x-6'>
                            <div className='h-16 w-16 rounded-full bg-gradient-to-br from-warning/20 to-warning/10 flex items-center justify-center'>
                                <svg
                                    className='w-8 h-8 text-warning'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                                    />
                                </svg>
                            </div>
                            <div>
                                <div className='font-semibold text-foreground'>
                                    Donald Trump
                                </div>
                                <div className='mt-1 text-sm text-muted-foreground'>
                                    Speaking on The View, 2006
                                </div>
                                <div className='mt-2 text-sm text-muted-foreground'>
                                    One of several documented instances of inappropriate
                                    comments about his daughter on national television
                                </div>
                            </div>
                        </figcaption>
                    </figure>

                    <div className='mt-16 bg-card/50 rounded-lg border border-warning/20 p-6'>
                        <h3 className='text-sm font-semibold text-warning mb-2'>
                            Pattern of Comments
                        </h3>
                        <p className='text-sm text-muted-foreground mb-3'>
                            This quote represents one of multiple documented
                            instances where Trump made inappropriate comments about
                            his daughter in public forums:
                        </p>
                        <ul className='text-sm text-muted-foreground space-y-2'>
                            <li>
                                • 2006 on The View: "If Ivanka weren't my daughter,
                                perhaps I'd be dating her"
                            </li>
                            <li>
                                • 2013 on Wendy Williams: When asked what he had in
                                common with Ivanka, responded "Sex"
                            </li>
                            <li>
                                • 2003 on Howard Stern: Agreed when Stern called
                                Ivanka "a piece of ass"
                            </li>
                            <li>
                                • Multiple instances praising her physical
                                appearance in ways critics found inappropriate
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}