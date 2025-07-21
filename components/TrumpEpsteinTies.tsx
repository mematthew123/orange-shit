/* eslint-disable react/no-unescaped-entities */
import {
    InformationCircleIcon,
    DocumentTextIcon,
    CalendarDaysIcon,
    HomeIcon,
    ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function TrumpEpsteinTies() {
    return (
        <div className='bg-background px-6 py-24 sm:py-32 lg:px-8'>
            <div className='mx-auto max-w-4xl'>
                <div className='text-center mb-12'>
                    <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-destructive/10 text-destructive'>
                        <DocumentTextIcon className='w-4 h-4' />
                        Documented Relationship
                    </span>
                    <h1 className='mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl'>
                        Trump and Epstein: A 15+ Year Friendship
                    </h1>
                    <p className='mt-6 text-xl text-muted-foreground max-w-3xl mx-auto'>
                        Donald Trump and Jeffrey Epstein maintained a
                        well-documented friendship spanning approximately 15-20
                        years, from the late 1980s until around 2004. Their
                        relationship included socializing at parties, shared
                        flights, and eventually a bitter falling out over a real
                        estate deal.
                    </p>
                </div>

                <div className='mt-16 space-y-16'>
                    {/* Introduction Card */}
                    <div className='bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-shadow duration-300'>
                        <p className='text-muted-foreground leading-relaxed'>
                            The relationship between Trump and Epstein was
                            extensively documented through photographs, videos,
                            flight logs, and Trump's own public statements.
                            While Trump has denied any involvement in Epstein's
                            crimes, their long friendship has remained a source
                            of controversy and scrutiny.
                        </p>
                    </div>

                    {/* Key Facts Grid */}
                    <div className='grid gap-6 md:grid-cols-3'>
                        <div className='bg-card rounded-xl border-2 border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-md group'>
                            <div className='flex items-start gap-4'>
                                <div className='p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors'>
                                    <CalendarDaysIcon className='w-6 h-6 text-primary' />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='font-semibold text-foreground mb-2'>
                                        15 Years of Friendship
                                    </h3>
                                    <p className='text-sm text-muted-foreground'>
                                        Trump told New York Magazine in 2002:
                                        "I've known Jeff for fifteen years.
                                        Terrific guy. He's a lot of fun to be
                                        with. It is even said that he likes
                                        beautiful women as much as I do, and
                                        many of them are on the younger side."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-card rounded-xl border-2 border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-md group'>
                            <div className='flex items-start gap-4'>
                                <div className='p-2 bg-info/10 rounded-lg group-hover:bg-info/20 transition-colors'>
                                    <DocumentTextIcon className='w-6 h-6 text-info' />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='font-semibold text-foreground mb-2'>
                                        Flight Records
                                    </h3>
                                    <p className='text-sm text-muted-foreground'>
                                        Trump appeared on Epstein's flight logs
                                        at least 7 times between 1993-1997,
                                        flying between Palm Beach and New York.
                                        One June 1994 flight listed "Marla and
                                        Tiffany" (Trump's then-wife and infant
                                        daughter).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-card rounded-xl border-2 border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-md group'>
                            <div className='flex items-start gap-4'>
                                <div className='p-2 bg-warning/10 rounded-lg group-hover:bg-warning/20 transition-colors'>
                                    <HomeIcon className='w-6 h-6 text-warning' />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='font-semibold text-foreground mb-2'>
                                        Mar-a-Lago Parties
                                    </h3>
                                    <p className='text-sm text-muted-foreground'>
                                        November 1992 NBC News footage shows
                                        Trump and Epstein partying together at
                                        Mar-a-Lago with NFL cheerleaders. The
                                        video shows them laughing together, with
                                        Trump whispering in Epstein's ear.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Context */}
                    <div className='bg-secondary/20 rounded-xl p-6'>
                        <p className='text-muted-foreground'>
                            Their properties were also notably close - Epstein
                            purchased his Palm Beach mansion in 1990, located
                            near Trump's Mar-a-Lago estate. The two men moved in
                            similar wealthy New York-to-Palm Beach social
                            circles throughout the 1990s and early 2000s.
                        </p>
                    </div>

                    {/* Katie Johnson Section */}
                    <div className='space-y-8'>
                        <div className='flex items-center gap-3'>
                            <ExclamationTriangleIcon className='w-8 h-8 text-destructive' />
                            <h2 className='text-3xl font-bold text-foreground'>
                                The Katie Johnson Allegations
                            </h2>
                        </div>
                        <div className='bg-card rounded-xl border-2 border-destructive/20 p-8'>
                            <p className='text-muted-foreground leading-relaxed'>
                                In 2016, an anonymous plaintiff using the
                                pseudonyms "Katie Johnson" and "Jane Doe" filed
                                federal lawsuits alleging that Trump and Epstein
                                raped her when she was 13 years old in 1994. The
                                lawsuit claimed the incidents occurred at
                                Epstein's Manhattan residence during the summer
                                of 1994.
                            </p>
                            <figure className='mt-8 border-l-4 border-destructive pl-6'>
                                <blockquote className='text-foreground italic'>
                                    <p>
                                        "The plaintiff alleged that Trump tied
                                        her to a bed, struck her, and threatened
                                        her family. She claimed both Trump and
                                        Epstein forced her to perform sexual
                                        acts. A witness using the pseudonym
                                        'Tiffany Doe' claimed to have recruited
                                        underage girls and witnessed assaults."
                                    </p>
                                </blockquote>
                                <figcaption className='mt-4'>
                                    <div className='text-sm text-muted-foreground'>
                                        <span className='font-semibold text-foreground'>
                                            Federal Court Filing
                                        </span>{' '}
                                        – April 2016, refiled June & September
                                        2016
                                    </div>
                                </figcaption>
                            </figure>
                            <p className='mt-6 text-muted-foreground'>
                                The case was voluntarily withdrawn on November
                                4, 2016, just days before the presidential
                                election. A scheduled press conference was
                                canceled due to alleged threats. Trump's
                                attorney Alan Garten called the allegations
                                "categorically untrue" and "politically
                                motivated."
                            </p>
                        </div>
                    </div>

                    {/* Falling Out Section */}
                    <div className='space-y-8'>
                        <h2 className='text-3xl font-bold text-foreground'>
                            The Falling Out and Aftermath
                        </h2>
                        <div className='bg-card rounded-xl border border-border p-8'>
                            <p className='text-muted-foreground leading-relaxed mb-6'>
                                The friendship ended abruptly in November 2004
                                over a bitter real estate auction for the Maison
                                de l'Amitié mansion in Palm Beach. Both men bid
                                aggressively, with Trump winning at $41.35
                                million. Phone records show Trump left two
                                messages for Epstein that month - their last
                                known interaction.
                            </p>
                            <p className='text-muted-foreground leading-relaxed'>
                                Just two weeks after the auction, Palm Beach
                                police received their first tip about young
                                women at Epstein's home. By 2007, Epstein was
                                reportedly banned from Mar-a-Lago after
                                allegedly hitting on a member's daughter. When
                                Epstein was arrested in 2019, Trump stated: "I
                                had a falling out with him a long time ago. I
                                don't think I've spoken to him for 15 years. I
                                wasn't a fan."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
