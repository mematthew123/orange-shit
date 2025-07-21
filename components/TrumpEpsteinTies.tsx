/* eslint-disable react/no-unescaped-entities */
import {
    DocumentTextIcon,
    CalendarDaysIcon,
    HomeIcon,
    ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function TrumpEpsteinTies() {
    return (
        <div className='bg-background px-6 py-24 lg:px-8'>
            <div className='mx-auto max-w-4xl'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold tracking-tight text-foreground sm:text-5xl'>
                        Trump and Epstein: A 15+ Year Friendship
                    </h1>
                    <p className='mt-6 text-lg text-muted-foreground'>
                        Their well-documented relationship spanned from the late 1980s until 2004
                    </p>
                </div>

                <div className='mt-16 space-y-12'>
                    {/* Key Facts */}
                    <div className='grid gap-6 md:grid-cols-3'>
                        <div className='bg-card rounded-lg border border-border p-6'>
                            <CalendarDaysIcon className='h-8 w-8 text-primary mb-3' />
                            <h3 className='font-semibold text-foreground mb-2'>
                                15 Years of Friendship
                            </h3>
                            <p className='text-sm text-muted-foreground'>
                                Trump in 2002: "I've known Jeff for fifteen years. 
                                Terrific guy... he likes beautiful women as much as I do, 
                                and many of them are on the younger side."
                            </p>
                        </div>

                        <div className='bg-card rounded-lg border border-border p-6'>
                            <DocumentTextIcon className='h-8 w-8 text-info mb-3' />
                            <h3 className='font-semibold text-foreground mb-2'>
                                Flight Records
                            </h3>
                            <p className='text-sm text-muted-foreground'>
                                Trump appeared on Epstein's flight logs 7+ times 
                                between 1993-1997, including one flight with 
                                "Marla and Tiffany".
                            </p>
                        </div>

                        <div className='bg-card rounded-lg border border-border p-6'>
                            <HomeIcon className='h-8 w-8 text-warning mb-3' />
                            <h3 className='font-semibold text-foreground mb-2'>
                                Mar-a-Lago Parties
                            </h3>
                            <p className='text-sm text-muted-foreground'>
                                1992 NBC footage shows Trump and Epstein partying 
                                together at Mar-a-Lago with NFL cheerleaders.
                            </p>
                        </div>
                    </div>

                    {/* Katie Johnson Section */}
                    <div className='bg-destructive/5 rounded-lg border border-destructive/20 p-8'>
                        <div className='flex items-start gap-3'>
                            <ExclamationTriangleIcon className='h-6 w-6 text-destructive flex-shrink-0 mt-0.5' />
                            <div>
                                <h2 className='text-xl font-semibold text-foreground mb-3'>
                                    The Katie Johnson Allegations
                                </h2>
                                <p className='text-muted-foreground mb-4'>
                                    In 2016, an anonymous plaintiff filed lawsuits alleging 
                                    Trump and Epstein raped her when she was 13 years old in 1994. 
                                    The case was withdrawn days before the 2016 election.
                                </p>
                                <blockquote className='border-l-4 border-destructive pl-4 text-sm text-muted-foreground italic'>
                                    "The plaintiff alleged that Trump tied her to a bed, 
                                    struck her, and threatened her family."
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    {/* Falling Out */}
                    <div className='prose prose-gray max-w-none'>
                        <h2 className='text-2xl font-semibold text-foreground'>
                            The Falling Out
                        </h2>
                        <p className='text-muted-foreground'>
                            Their friendship ended abruptly in November 2004 over a Palm Beach 
                            mansion auction. Trump won with a $41.35 million bid. Just two weeks 
                            later, police received their first tip about young women at Epstein's 
                            home. By 2007, Epstein was reportedly banned from Mar-a-Lago.
                        </p>
                    </div>

                    {/* Important Context */}
                    <div className='bg-warning/10 border border-warning/20 rounded-lg p-6'>
                        <p className='text-sm text-muted-foreground'>
                            <span className='font-semibold text-foreground'>Note:</span> While 
                            their friendship was well-documented, no credible evidence has 
                            emerged linking Trump to Epstein's crimes. Virginia Giuffre stated 
                            in 2016: "I don't think Donald Trump participated in anything."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}