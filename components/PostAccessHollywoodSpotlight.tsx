import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import {
    MicrophoneIcon,
    CalendarIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';

export function PostAccessHollywoodSpotlight() {
    const accusers = [
        {
            name: 'Jessica Leeds',
            year: '1980s',
            allegation: 'Groped on airplane',
            description:
                'Alleges Trump lifted armrest and grabbed her breasts, tried to put hand up skirt during flight.',
        },
        {
            name: 'Rachel Crooks',
            year: '2005',
            allegation: 'Forced kissing in Trump Tower',
            description:
                'Receptionist at Bayrock Group says Trump kissed her without consent in elevator.',
        },
        {
            name: 'Natasha Stoynoff',
            year: '2005',
            allegation: 'Assault during interview',
            description:
                'People magazine writer alleges Trump pushed her against wall and forced tongue in mouth at Mar-a-Lago.',
        },
        {
            name: 'Mindy McGillivray',
            year: '2003',
            allegation: 'Groped at Mar-a-Lago',
            description:
                'Says Trump grabbed her buttocks at his estate during a concert.',
        },
        {
            name: 'Jessica Drake',
            year: '2006',
            allegation: 'Unwanted kissing and proposition',
            description:
                'Adult film actress says Trump kissed her and two friends without consent, offered $10,000 for sex.',
        },
        {
            name: 'Summer Zervos',
            year: '2007',
            allegation: 'Sexual assault at Beverly Hills Hotel',
            description:
                'Former Apprentice contestant alleges Trump kissed her, groped breasts, thrust genitals on her.',
        },
        {
            name: 'Kristin Anderson',
            year: 'Early 1990s',
            allegation: 'Groped at nightclub',
            description:
                'Says Trump reached under her skirt and touched her vagina at Manhattan nightclub.',
        },
        {
            name: 'Cathy Heller',
            year: '1997',
            allegation: 'Forced kissing at Mar-a-Lago',
            description:
                "Alleges Trump grabbed and kissed her at Mother's Day brunch in front of family.",
        },
        {
            name: 'Temple Taggart McDowell',
            year: '1997',
            allegation: 'Unwanted kisses',
            description:
                'Miss Utah USA says Trump kissed her without consent, made her uncomfortable.',
        },
        {
            name: 'Karena Virginia',
            year: '1998',
            allegation: 'Groped after US Open',
            description:
                'Says Trump grabbed her arm and touched her breast while commenting on her legs.',
        },
        {
            name: 'Ninni Laaksonen',
            year: '2006',
            allegation: 'Grabbed buttocks',
            description:
                'Miss Finland 2006 says Trump grabbed her buttocks before Letterman appearance.',
        },
        {
            name: 'Cassandra Searles',
            year: '2013',
            allegation: 'Groping at pageant',
            description:
                'Miss Washington USA says Trump "continually" groped her buttocks, invited her to hotel room.',
        },
    ];

    const timeline = [
        { date: 'October 7, 2016', event: 'Access Hollywood tape released' },
        {
            date: 'October 9, 2016',
            event: 'Second presidential debate - Trump denies ever assaulting women',
        },
        {
            date: 'October 12-27, 2016',
            event: 'Multiple women come forward with allegations',
        },
        {
            date: 'October 22, 2016',
            event: 'Trump vows to sue all accusers after election',
        },
    ];

    return (
        <div className='relative isolate overflow-hidden bg-gradient-to-b from-black to-neutral-950 py-24 sm:py-32'>
            <Container>
                <FadeIn>
                    <div className='mx-auto max-w-4xl'>
                        <div className='text-center'>
                            <h2 className='text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl'>
                                Post-Access Hollywood Accusers
                            </h2>
                            <p className='mt-4 text-lg leading-8 text-neutral-600'>
                                The flood of allegations following the October
                                2016 tape release
                            </p>
                        </div>

                        <div className='mt-16'>
                            {/* The Catalyst */}
                            <div className='mb-12 rounded-2xl bg-black p-8 shadow-lg'>
                                <div className='flex items-center gap-x-3 mb-6'>
                                    <MicrophoneIcon className='h-8 w-8 text-white' />
                                    <h3 className='text-2xl font-bold text-white'>
                                        The Access Hollywood Tape
                                    </h3>
                                </div>
                                <blockquote className='border-l-4 border-primary-500 pl-6'>
                                    <p className='text-lg text-white italic mb-4'>
                                        {`"I don't even wait. And when
                                        you're a star, they let you do it.
                                        You can do anything... Grab them by the
                                        pussy. You can do anything."`}
                                    </p>
                                    <footer className='text-sm text-neutral-300'>
                                        — Donald Trump, 2005 recording released
                                        October 7, 2016
                                    </footer>
                                </blockquote>
                                <div className='mt-6 p-4 bg-white/10 rounded-lg'>
                                    <p className='text-sm text-white'>
                                        During the second debate, Trump denied
                                        ever actually doing what he described,
                                        calling it &rdquo;locker room
                                        talk.&quot; This denial prompted many
                                        women to come forward.
                                    </p>
                                </div>
                            </div>

                            {/* The Response */}
                            <div className='mb-8 p-6 bg-primary-50 rounded-lg border border-primary-200'>
                                <div className='flex items-center gap-x-3 mb-4'>
                                    <UserGroupIcon className='h-6 w-6 text-primary-600' />
                                    <h4 className='text-lg font-semibold text-neutral-900'>
                                        The October 2016 Wave
                                    </h4>
                                </div>
                                <div className='grid grid-cols-3 gap-4 text-center'>
                                    <div>
                                        <p className='text-3xl font-bold text-primary-600'>
                                            15+
                                        </p>
                                        <p className='text-sm text-neutral-600'>
                                            Women came forward
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-3xl font-bold text-primary-600'>
                                            20 days
                                        </p>
                                        <p className='text-sm text-neutral-600'>
                                            Time span
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-3xl font-bold text-primary-600'>
                                            1970s-2013
                                        </p>
                                        <p className='text-sm text-neutral-600'>
                                            Alleged incidents
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className='mb-8 p-4 bg-neutral-100 rounded-lg'>
                                <h4 className='text-sm font-semibold text-neutral-900 mb-3'>
                                    October 2016 Timeline
                                </h4>
                                <div className='space-y-2'>
                                    {timeline.map((item) => (
                                        <div
                                            key={item.date}
                                            className='flex gap-x-4 text-sm'
                                        >
                                            <CalendarIcon className='h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0' />
                                            <span className='font-semibold text-primary-600 w-32 flex-shrink-0'>
                                                {item.date}
                                            </span>
                                            <span className='text-neutral-700'>
                                                {item.event}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Individual Accusers Grid */}
                            <h4 className='text-lg font-semibold text-neutral-900 mb-4'>
                                Women Who Came Forward
                            </h4>
                            <FadeInStagger>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    {accusers.map((accuser) => (
                                        <FadeIn key={accuser.name}>
                                            <div className='rounded-lg bg-white p-4 shadow-sm ring-1 ring-neutral-200'>
                                                <div className='mb-2'>
                                                    <h5 className='font-semibold text-neutral-900'>
                                                        {accuser.name}
                                                    </h5>
                                                    <p className='text-xs text-primary-600'>
                                                        {accuser.year} •{' '}
                                                        {accuser.allegation}
                                                    </p>
                                                </div>
                                                <p className='text-sm text-neutral-600'>
                                                    {accuser.description}
                                                </p>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </FadeInStagger>

                            {/* Trump's Response */}
                            <div className='mt-8 p-4 bg-red-50 rounded-lg border border-red-200'>
                                <p className='text-sm font-semibold text-red-900 mb-2'>
                                    Trump&apos;s Response to Accusers
                                </p>
                                <ul className='space-y-1 text-sm text-red-800'>
                                    <li>
                                        • Called all allegations
                                        &quot;false&quot; and
                                        &quot;fabricated&quot;
                                    </li>
                                    <li>
                                        • Threatened to sue The New York Times
                                        and all accusers
                                    </li>
                                    <li>
                                        • Claimed it was a conspiracy by Clinton
                                        campaign and media
                                    </li>
                                    <li>
                                        • Said some accusers were not attractive
                                        enough for him to assault
                                    </li>
                                    <li>
                                        • Never filed any lawsuits against
                                        accusers as threatened
                                    </li>
                                </ul>
                            </div>

                            <div className='mt-6 p-4 bg-neutral-100 rounded-lg'>
                                <p className='text-sm text-neutral-700'>
                                    <span className='font-semibold'>
                                        Pattern Recognition:
                                    </span>{' '}
                                    Many women stated they came forward
                                    specifically because Trump denied ever
                                    engaging in the behavior he bragged about on
                                    tape. Several had told friends and family
                                    about incidents years earlier, providing
                                    corroborating witnesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
}
