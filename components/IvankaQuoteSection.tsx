/* eslint-disable react/no-unescaped-entities */
export default function IvankaQuoteSection() {
    return (
        <section className='isolate overflow-hidden bg-background px-6 lg:px-8'>
            <div className='relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl'>
                <div className='absolute top-0 left-1/2 -z-10 h-[200px] w-[360px] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.warning/10),theme(colors.background))] opacity-20 lg:left-36' />
                <div className='absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-card shadow-xl ring-1 shadow-warning/10 ring-border sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center' />

                <figure className='grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10'>
                    <div className='relative col-span-2 lg:col-start-1 lg:row-start-2'>
                        <svg
                            fill='none'
                            viewBox='0 0 162 128'
                            aria-hidden='true'
                            className='absolute -top-12 left-0 -z-10 h-32 stroke-muted-foreground/20'
                        >
                            <path
                                d='M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z'
                                id='b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb'
                            />
                            <use
                                x={86}
                                href='#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb'
                            />
                        </svg>

                        <blockquote className='text-xl/8 font-semibold text-foreground sm:text-2xl/9'>
                            <p>
                                I've said if Ivanka weren't my daughter, perhaps
                                I'd be dating her.
                            </p>
                        </blockquote>
                    </div>

                    <div className='col-end-1 w-16 lg:row-span-4 lg:w-72'>
                        <div className='aspect-square rounded-xl bg-gradient-to-br from-warning/20 to-warning/10 lg:rounded-3xl flex items-center justify-center'>
                            <svg
                                className='w-32 h-32 text-warning/40'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={1}
                                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                                />
                            </svg>
                        </div>
                    </div>

                    <figcaption className='text-base lg:col-start-1 lg:row-start-3'>
                        <div className='font-semibold text-foreground'>
                            Donald Trump
                        </div>
                        <div className='mt-1 text-muted-foreground'>
                            Speaking on The View, 2006
                        </div>
                        <div className='mt-2 text-sm text-muted-foreground'>
                            One of several documented instances of inappropriate
                            comments about his daughter on national television
                        </div>
                    </figcaption>
                </figure>

                <div className='mt-16 bg-card rounded-lg border border-warning/20 p-6'>
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
        </section>
    );
}
