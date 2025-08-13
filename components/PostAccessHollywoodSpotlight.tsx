/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import {
    MicrophoneIcon,
    CalendarIcon,
    UserGroupIcon,
    ExclamationTriangleIcon,
    CheckBadgeIcon,
    NewspaperIcon,
    SparklesIcon,
    ClockIcon,
} from '@heroicons/react/24/outline';

export function PostAccessHollywoodSpotlight() {
    const [isMounted, setIsMounted] = useState(false);
    const [selectedAccuser, setSelectedAccuser] = useState<number | null>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const accusers = [
        {
            name: 'Jessica Leeds',
            year: '1980s',
            allegation: 'Groped on airplane',
            description:
                'Alleges Trump lifted armrest and grabbed her breasts, tried to put hand up skirt during flight.',
            verified: true,
            witnesses: 4,
        },
        {
            name: 'Rachel Crooks',
            year: '2005',
            allegation: 'Forced kissing in Trump Tower',
            description:
                'Receptionist at Bayrock Group says Trump kissed her without consent in elevator.',
            verified: true,
            witnesses: 2,
        },
        {
            name: 'Natasha Stoynoff',
            year: '2005',
            allegation: 'Assault during interview',
            description:
                'People magazine writer alleges Trump pushed her against wall and forced tongue in mouth at Mar-a-Lago.',
            verified: true,
            witnesses: 6,
            publication: 'People Magazine',
        },
        {
            name: 'Mindy McGillivray',
            year: '2003',
            allegation: 'Groped at Mar-a-Lago',
            description:
                'Says Trump grabbed her buttocks at his estate during a concert.',
            verified: true,
            witnesses: 1,
        },
        {
            name: 'Jessica Drake',
            year: '2006',
            allegation: 'Unwanted kissing and proposition',
            description:
                'Adult film actress says Trump kissed her and two friends without consent, offered $10,000 for sex.',
            verified: true,
            witnesses: 2,
        },
        {
            name: 'Summer Zervos',
            year: '2007',
            allegation: 'Sexual assault at Beverly Hills Hotel',
            description:
                'Former Apprentice contestant alleges Trump kissed her, groped breasts, thrust genitals on her.',
            verified: true,
            lawsuit: 'Filed defamation suit',
        },
        {
            name: 'Kristin Anderson',
            year: 'Early 1990s',
            allegation: 'Groped at nightclub',
            description:
                'Says Trump reached under her skirt and touched her vagina at Manhattan nightclub.',
            verified: true,
            witnesses: 2,
        },
        {
            name: 'Cathy Heller',
            year: '1997',
            allegation: 'Forced kissing at Mar-a-Lago',
            description:
                "Alleges Trump grabbed and kissed her at Mother's Day brunch in front of family.",
            verified: true,
            witnesses: 3,
        },
        {
            name: 'Temple Taggart McDowell',
            year: '1997',
            allegation: 'Unwanted kisses',
            description:
                'Miss Utah USA says Trump kissed her without consent, made her uncomfortable.',
            verified: true,
            pageant: 'Miss Utah USA',
        },
        {
            name: 'Karena Virginia',
            year: '1998',
            allegation: 'Groped after US Open',
            description:
                'Says Trump grabbed her arm and touched her breast while commenting on her legs.',
            verified: true,
            witnesses: 1,
        },
        {
            name: 'Ninni Laaksonen',
            year: '2006',
            allegation: 'Grabbed buttocks',
            description:
                'Miss Finland 2006 says Trump grabbed her buttocks before Letterman appearance.',
            verified: true,
            pageant: 'Miss Finland',
        },
        {
            name: 'Cassandra Searles',
            year: '2013',
            allegation: 'Groping at pageant',
            description:
                'Miss Washington USA says Trump "continually" groped her buttocks, invited her to hotel room.',
            verified: true,
            pageant: 'Miss Washington USA',
        },
    ];

    const timeline = [
        { 
            date: 'October 7, 2016', 
            event: 'Access Hollywood tape released',
            impact: 'Sparked national outrage',
            icon: MicrophoneIcon,
        },
        {
            date: 'October 9, 2016',
            event: 'Second presidential debate - Trump denies ever assaulting women',
            impact: 'Triggered survivors to speak',
            icon: ExclamationTriangleIcon,
        },
        {
            date: 'October 12-27, 2016',
            event: 'Multiple women come forward with allegations',
            impact: '15+ accusers in 20 days',
            icon: UserGroupIcon,
        },
        {
            date: 'October 22, 2016',
            event: 'Trump vows to sue all accusers after election',
            impact: 'Never filed suits',
            icon: NewspaperIcon,
        },
    ];

    return (
        <div className='relative isolate overflow-hidden bg-gradient-to-b from-black to-neutral-950 py-24 sm:py-32'>
            <Container>
                <FadeIn>
                    <div className='mx-auto max-w-5xl'>
                        <div className='text-center'>
                            <h2 className='text-5xl font-bold tracking-tight text-white sm:text-6xl quote-serif'>
                                The October Avalanche
                            </h2>
                            <div className='mt-2 flex items-center justify-center gap-2 text-sm text-neutral-500'>
                                <CheckBadgeIcon className='h-4 w-4 text-green-500' />
                                <span className='quote-attribution uppercase tracking-wider'>
                                    Post-Access Hollywood Allegations • October 2016
                                </span>
                            </div>
                            <p className='mt-6 text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto'>
                                When Trump denied ever acting on his recorded boasts, 
                                <span className='font-semibold text-white'> 15+ women</span> broke 
                                their silence within <span className='font-semibold text-white'>20 days</span>
                            </p>
                        </div>

                        <div className='mt-16'>
                            {/* The Catalyst - Enhanced */}
                            <div className={`mb-12 rounded-2xl bg-gradient-to-r from-red-950/50 to-red-950/30 backdrop-blur p-10 shadow-2xl border border-red-500/20 transition-all duration-700 ${
                                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                <div className='flex items-center gap-x-4 mb-6'>
                                    <div className='p-3 bg-red-600 rounded-full'>
                                        <MicrophoneIcon className='h-8 w-8 text-white' />
                                    </div>
                                    <div>
                                        <h3 className='text-3xl font-bold text-white quote-serif'>
                                            The Access Hollywood Tape
                                        </h3>
                                        <p className='text-sm text-red-400 font-semibold uppercase tracking-wider mt-1'>
                                            The Catalyst That Changed Everything
                                        </p>
                                    </div>
                                </div>
                                <blockquote className='border-l-4 border-red-500 pl-8'>
                                    <p className='text-2xl text-white italic quote-serif leading-relaxed mb-6'>
                                        "I don't even wait. And when you're a star, they let you do it. 
                                        You can do anything... <span className='highlight-text font-bold'>Grab them by the pussy</span>. 
                                        You can do anything."
                                    </p>
                                    <footer className='text-base text-neutral-400'>
                                        <span className='font-bold text-white'>— Donald Trump</span>, 
                                        2005 recording released October 7, 2016
                                    </footer>
                                </blockquote>
                                <div className='mt-8 p-6 bg-black/50 rounded-xl border border-white/10'>
                                    <div className='flex items-start gap-3'>
                                        <ExclamationTriangleIcon className='h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5' />
                                        <div>
                                            <p className='text-base text-white font-semibold mb-2'>
                                                The Denial That Triggered an Avalanche
                                            </p>
                                            <p className='text-sm text-neutral-300'>
                                                During the second debate, Trump denied ever actually doing what he described, 
                                                calling it "locker room talk." This denial prompted many women to come forward 
                                                with their own experiences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* The Response - Statistics Enhanced */}
                            <div className={`mb-12 transition-all duration-700 ${
                                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`} style={{ transitionDelay: '200ms' }}>
                                <h3 className='text-2xl font-bold text-white mb-6 text-center quote-serif'>
                                    The Immediate Impact
                                </h3>
                                <div className='grid grid-cols-3 gap-6'>
                                    <div className='bg-neutral-900/50 backdrop-blur rounded-xl p-8 border border-white/10 text-center hover:border-red-500/50 transition-all hover:scale-105'>
                                        <SparklesIcon className='h-8 w-8 text-red-500 mx-auto mb-3' />
                                        <p className='text-5xl font-bold text-red-500 quote-serif'>15+</p>
                                        <p className='mt-2 text-xs font-bold text-white uppercase tracking-wider'>
                                            Women Came Forward
                                        </p>
                                        <div className='mt-2 h-0.5 w-12 mx-auto bg-red-500'></div>
                                    </div>
                                    <div className='bg-neutral-900/50 backdrop-blur rounded-xl p-8 border border-white/10 text-center hover:border-amber-500/50 transition-all hover:scale-105'>
                                        <ClockIcon className='h-8 w-8 text-amber-500 mx-auto mb-3' />
                                        <p className='text-5xl font-bold text-amber-500 quote-serif'>20</p>
                                        <p className='mt-2 text-xs font-bold text-white uppercase tracking-wider'>
                                            Days of Revelations
                                        </p>
                                        <div className='mt-2 h-0.5 w-12 mx-auto bg-amber-500'></div>
                                    </div>
                                    <div className='bg-neutral-900/50 backdrop-blur rounded-xl p-8 border border-white/10 text-center hover:border-primary-500/50 transition-all hover:scale-105'>
                                        <CalendarIcon className='h-8 w-8 text-primary-500 mx-auto mb-3' />
                                        <p className='text-5xl font-bold text-primary-500 quote-serif'>40+</p>
                                        <p className='mt-2 text-xs font-bold text-white uppercase tracking-wider'>
                                            Years of Incidents
                                        </p>
                                        <div className='mt-2 h-0.5 w-12 mx-auto bg-primary-500'></div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline - Enhanced */}
                            <div className={`mb-12 bg-neutral-900/50 backdrop-blur rounded-xl p-8 border border-white/10 transition-all duration-700 ${
                                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`} style={{ transitionDelay: '300ms' }}>
                                <h4 className='text-xl font-bold text-white mb-6 quote-serif'>
                                    October 2016: A Timeline of Courage
                                </h4>
                                <div className='space-y-4'>
                                    {timeline.map((item, idx) => {
                                        const Icon = item.icon;
                                        return (
                                            <div
                                                key={item.date}
                                                className='flex gap-x-6 p-4 rounded-lg hover:bg-white/5 transition-all'
                                                style={{ animationDelay: `${idx * 100}ms` }}
                                            >
                                                <Icon className='h-6 w-6 text-primary-500 mt-0.5 flex-shrink-0' />
                                                <div className='flex-1'>
                                                    <div className='flex items-start justify-between'>
                                                        <div>
                                                            <span className='text-sm font-bold text-primary-400 uppercase tracking-wider'>
                                                                {item.date}
                                                            </span>
                                                            <p className='text-base text-white font-semibold mt-1'>
                                                                {item.event}
                                                            </p>
                                                        </div>
                                                        <span className='text-xs text-neutral-500 italic'>
                                                            {item.impact}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Individual Accusers Grid - Enhanced */}
                            <div className='mb-8'>
                                <h4 className='text-2xl font-bold text-white mb-8 text-center quote-serif'>
                                    Women Who Found Their Voice
                                </h4>
                                <FadeInStagger>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        {accusers.map((accuser, idx) => (
                                            <FadeIn key={accuser.name}>
                                                <div 
                                                    className={`rounded-xl bg-neutral-900/50 backdrop-blur p-6 border-2 transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                                                        selectedAccuser === idx 
                                                            ? 'border-red-500/50 shadow-xl shadow-red-500/20' 
                                                            : 'border-white/10 hover:border-red-500/30'
                                                    }`}
                                                    onClick={() => setSelectedAccuser(selectedAccuser === idx ? null : idx)}
                                                >
                                                    <div className='flex items-start justify-between mb-3'>
                                                        <div>
                                                            <h5 className='text-lg font-bold text-white quote-serif'>
                                                                {accuser.name}
                                                            </h5>
                                                            <div className='flex items-center gap-2 mt-1'>
                                                                <span className='text-xs font-bold text-red-400 uppercase tracking-wider'>
                                                                    {accuser.year}
                                                                </span>
                                                                {accuser.verified && (
                                                                    <CheckBadgeIcon className='h-4 w-4 text-green-500' />
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className='text-right'>
                                                            {accuser.witnesses && (
                                                                <span className='inline-block px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full'>
                                                                    {accuser.witnesses} witnesses
                                                                </span>
                                                            )}
                                                            {accuser.lawsuit && (
                                                                <span className='inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full'>
                                                                    {accuser.lawsuit}
                                                                </span>
                                                            )}
                                                            {accuser.pageant && (
                                                                <span className='inline-block px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full'>
                                                                    {accuser.pageant}
                                                                </span>
                                                            )}
                                                            {accuser.publication && (
                                                                <span className='inline-block px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full'>
                                                                    {accuser.publication}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <p className='text-sm font-semibold text-red-300 mb-2'>
                                                        {accuser.allegation}
                                                    </p>
                                                    <p className={`text-sm text-neutral-300 leading-relaxed ${
                                                        selectedAccuser !== idx ? 'line-clamp-2' : ''
                                                    }`}>
                                                        {accuser.description}
                                                    </p>
                                                </div>
                                            </FadeIn>
                                        ))}
                                    </div>
                                </FadeInStagger>
                            </div>

                            {/* Trump's Response - Enhanced */}
                            <div className='mt-12 p-8 bg-gradient-to-r from-red-950/30 to-transparent rounded-xl border-2 border-red-500/30'>
                                <div className='flex items-start gap-4'>
                                    <ExclamationTriangleIcon className='h-8 w-8 text-red-500 flex-shrink-0' />
                                    <div>
                                        <p className='text-xl font-bold text-white mb-4 quote-serif'>
                                            Trump's Response to the Accusers
                                        </p>
                                        <ul className='space-y-3 text-base text-neutral-300'>
                                            <li className='flex items-start gap-2'>
                                                <span className='text-red-500 mt-1'>•</span>
                                                <span>Called all allegations <span className='font-semibold text-white'>"false"</span> and <span className='font-semibold text-white'>"fabricated"</span></span>
                                            </li>
                                            <li className='flex items-start gap-2'>
                                                <span className='text-red-500 mt-1'>•</span>
                                                <span>Threatened to sue <span className='font-semibold text-white'>The New York Times</span> and all accusers</span>
                                            </li>
                                            <li className='flex items-start gap-2'>
                                                <span className='text-red-500 mt-1'>•</span>
                                                <span>Claimed it was a conspiracy by <span className='font-semibold text-white'>Clinton campaign</span> and media</span>
                                            </li>
                                            <li className='flex items-start gap-2'>
                                                <span className='text-red-500 mt-1'>•</span>
                                                <span>Said some accusers were <span className='italic text-red-400'>"not attractive enough"</span> for him to assault</span>
                                            </li>
                                            <li className='flex items-start gap-2'>
                                                <span className='text-red-500 mt-1'>•</span>
                                                <span className='font-bold text-amber-400'>Never filed any lawsuits against accusers as threatened</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Pattern Recognition - Enhanced */}
                            <div className='mt-8 p-8 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl'>
                                <p className='text-lg text-white text-center'>
                                    <span className='text-2xl font-bold quote-serif block mb-4'>
                                        Pattern Recognition
                                    </span>
                                    Many women stated they came forward specifically because Trump denied ever 
                                    engaging in the behavior he bragged about on tape. Several had told friends 
                                    and family about incidents years earlier, providing 
                                    <span className='font-semibold text-green-400'> corroborating witnesses</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
}