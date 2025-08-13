'use client';

import { useState, useEffect } from 'react';
import {
    ChevronDownIcon,
    ChevronUpIcon,
    CalendarIcon,
    DocumentTextIcon,
    ScaleIcon,
    ExclamationTriangleIcon,
    CheckBadgeIcon,
    NewspaperIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

interface TimelineItem {
    name: string;
    description: string;
    date: string;
    dateTime: string;
    category: string;
    subcategory?: string;
    isKeyEvent?: boolean;
}

const timeline: TimelineItem[] = [
    {
        name: 'First Meeting',
        description:
            'Trump and Epstein first meet in New York social circles. Trump later told New York Magazine in 2002 he had known Epstein for "15 years," dating their acquaintance to approximately 1987.',
        date: 'Late 1980s',
        dateTime: '1987',
        category: 'relationship',
        isKeyEvent: true,
    },
    {
        name: 'Mar-a-Lago Party',
        description:
            "NBC News footage shows Trump and Epstein partying together at Mar-a-Lago with Buffalo Bills and Miami Dolphins cheerleaders. Video shows them laughing together, with Trump whispering in Epstein's ear.",
        date: 'Nov 1992',
        dateTime: '1992-11',
        category: 'relationship',
    },
    {
        name: 'Flight Records Begin',
        description:
            'Trump appears on Epstein\'s flight logs at least 7 times between 1993-1997, flying between Palm Beach and New York. One June 1994 flight lists "Marla and Tiffany" (Trump\'s then-wife and infant daughter).',
        date: '1993-1997',
        dateTime: '1993',
        category: 'relationship',
    },
    {
        name: 'Katie Johnson Case Filed',
        description:
            'Anonymous plaintiff files lawsuit alleging Trump and Epstein raped her when she was 13 years old in 1994. Case filed under pseudonyms "Katie Johnson" and "Jane Doe." Withdrawn without explanation in November 2016.',
        date: 'Apr 2016',
        dateTime: '2016-04',
        category: 'legal',
        subcategory: 'allegation',
    },
    {
        name: 'Jessica Leeds Allegation',
        description:
            'Alleges Trump groped her on an airplane in the late 1970s or early 1980s, grabbing her breasts and attempting to put his hand up her skirt.',
        date: 'Oct 2016',
        dateTime: '2016-10',
        category: 'allegation',
    },
    {
        name: 'E. Jean Carroll Incident',
        description:
            'Carroll alleges Trump sexually assaulted her in a Bergdorf Goodman dressing room. This would later result in the only successful legal case against Trump.',
        date: '1995-1996',
        dateTime: '1996',
        category: 'allegation',
    },
    {
        name: 'Photo at Mar-a-Lago',
        description:
            'Trump and Melania photographed with Epstein and Ghislaine Maxwell at Mar-a-Lago, showing their continued social connection.',
        date: 'Feb 12, 2000',
        dateTime: '2000-02-12',
        category: 'relationship',
    },
    {
        name: "Trump's Infamous Quote",
        description:
            'Trump tells New York Magazine: "I\'ve known Jeff for fifteen years. Terrific guy. He\'s a lot of fun to be with. It is even said that he likes beautiful women as much as I do, and many of them are on the younger side."',
        date: '2002',
        dateTime: '2002',
        category: 'relationship',
        isKeyEvent: true,
    },
    {
        name: 'The Birthday Letter',
        description:
            'Wall Street Journal reports on alleged letter from Trump to Epstein featuring outline of naked woman and message: "Happy Birthday — and may every wonderful secret." Trump denies writing it, sues WSJ for $20 billion.',
        date: '2003',
        dateTime: '2003',
        category: 'relationship',
    },
    {
        name: 'The Falling Out',
        description:
            'Trump and Epstein have bitter falling out over Palm Beach mansion auction. Trump wins with $41.35 million bid. Their last known interaction occurs this month - marking the end of their friendship.',
        date: 'Nov 2004',
        dateTime: '2004-11',
        category: 'relationship',
    },
    {
        name: 'Access Hollywood Tape',
        description:
            'Release of 2005 recording where Trump says: "When you\'re a star, they let you do it. You can do anything. Grab them by the pussy." Prompts many women to come forward with allegations.',
        date: 'Oct 7, 2016',
        dateTime: '2016-10-07',
        category: 'scandal',
        isKeyEvent: true,
    },
    {
        name: 'Multiple Accusers Come Forward',
        description:
            'Following Access Hollywood tape release, at least 15 women publicly accuse Trump of sexual misconduct, including Jessica Drake, Ninni Laaksonen, and Summer Zervos.',
        date: 'Oct 2016',
        dateTime: '2016-10',
        category: 'allegation',
    },
    {
        name: 'Epstein Arrested',
        description:
            "Jeffrey Epstein arrested on federal sex trafficking charges. Trump comments: \"I had a falling out with him a long time ago. I don't think I've spoken to him for 15 years. I wasn't a fan.\"",
        date: 'Jul 2019',
        dateTime: '2019-07',
        category: 'legal',
    },
    {
        name: 'Epstein Dies in Jail',
        description:
            'Epstein found dead in jail cell, ruled suicide. Conspiracy theories emerge but DOJ/FBI later conclude no evidence of murder or "client list."',
        date: 'Aug 10, 2019',
        dateTime: '2019-08-10',
        category: 'legal',
    },
    {
        name: 'E. Jean Carroll Verdict',
        description:
            'Jury finds Trump liable for sexual abuse and defamation in E. Jean Carroll case. Awards $5 million in damages. Only successful legal case among all accusations.',
        date: 'May 2023',
        dateTime: '2023-05',
        category: 'legal',
        isKeyEvent: true,
    },
    {
        name: 'Carroll Defamation Verdict',
        description:
            "Second E. Jean Carroll case results in $83.3 million verdict for defamation based on Trump's denials. Total damages: $88.3 million.",
        date: 'Jan 2024',
        dateTime: '2024-01',
        category: 'legal',
        isKeyEvent: true,
    },
    {
        name: 'Stacey Williams Allegation',
        description:
            'Former model alleges Trump groped her in 1993 while she was dating Jeffrey Epstein, adding to the list of accusers.',
        date: 'Oct 2024',
        dateTime: '2024-10',
        category: 'allegation',
    },
];

const categories = {
    all: { name: 'All Events', color: 'text-primary', icon: CalendarIcon },
    relationship: {
        name: 'Trump-Epstein Relationship',
        color: 'text-info',
        icon: DocumentTextIcon,
    },
    allegation: {
        name: 'Sexual Assault Allegations',
        color: 'text-warning',
        icon: ExclamationTriangleIcon,
    },
    legal: {
        name: 'Legal Proceedings',
        color: 'text-destructive',
        icon: ScaleIcon,
    },
    scandal: {
        name: 'Public Scandals',
        color: 'text-accent-foreground',
        icon: DocumentTextIcon,
    },
};

export default function LineTimeline() {
    const [selectedCategory, setSelectedCategory] =
        useState<keyof typeof categories>('all');
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const filteredTimeline =
        selectedCategory === 'all'
            ? timeline
            : timeline.filter((item) => item.category === selectedCategory);

    const toggleExpanded = (index: number) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(index)) {
            newExpanded.delete(index);
        } else {
            newExpanded.add(index);
        }
        setExpandedItems(newExpanded);
    };

    return (
        <div className='bg-gradient-to-b from-black to-neutral-950 py-24 sm:py-32' id='timeline'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl text-center mb-12'>
                    <h2 className='text-5xl font-bold tracking-tight text-white sm:text-6xl quote-serif'>
                        Timeline of Events
                    </h2>
                    <div className='mt-2 flex items-center justify-center gap-2 text-sm text-neutral-500'>
                        <CheckBadgeIcon className='h-4 w-4 text-green-500' />
                        <span className='quote-attribution uppercase tracking-wider'>Verified Court Records & Media Reports</span>
                    </div>
                    <p className='mt-6 text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto'>
                        A chronological record spanning <span className='highlight-text font-semibold text-white'>40+ years</span> of relationships, 
                        allegations, and legal proceedings
                    </p>
                </div>

                {/* Category Filter */}
                <div className='flex flex-wrap justify-center gap-3 mb-16'>
                    {Object.entries(categories).map(([key, value]) => {
                        const Icon = value.icon;
                        const isSelected = selectedCategory === key;
                        return (
                            <button
                                key={key}
                                onClick={() =>
                                    setSelectedCategory(
                                        key as keyof typeof categories,
                                    )
                                }
                                className={`group relative px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                                    isSelected
                                        ? 'bg-primary-600 text-white shadow-xl scale-105 ring-2 ring-primary-500/20'
                                        : 'bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800/50 hover:scale-105 hover:shadow-md border border-white/10'
                                }`}
                            >
                                <div className='flex items-center gap-2'>
                                    <Icon
                                        className={`h-4 w-4 ${
                                            isSelected
                                                ? 'animate-pulse'
                                                : 'group-hover:animate-pulse'
                                        }`}
                                    />
                                    <span>{value.name}</span>
                                </div>
                                {isSelected && (
                                    <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full' />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Vertical Timeline */}
                <div className='mx-auto max-w-6xl'>
                    <div className='relative'>
                        {/* Timeline line - left on mobile, center on desktop */}
                        <div className='absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-white/10 via-primary-500/20 to-white/10' />

                        <div className='space-y-12'>
                            {filteredTimeline.map((item, index) => {
                                const isExpanded = expandedItems.has(index);
                                const categoryInfo =
                                    categories[
                                        item.category as keyof typeof categories
                                    ];
                                const isEven = index % 2 === 0;

                                return (
                                    <div 
                                        key={index} 
                                        className={`relative transition-all duration-700 ${
                                            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        {/* Mobile Layout */}
                                        <div className='md:hidden flex'>
                                            {/* Timeline dot for mobile */}
                                            <div className='absolute left-8 -translate-x-1/2 z-10'>
                                                <div
                                                    className={`w-4 h-4 rounded-full border-4 border-black shadow-lg ${categoryInfo.color.replace(
                                                        'text-',
                                                        'bg-',
                                                    )}`}
                                                />
                                                <div
                                                    className={`absolute -inset-2 rounded-full ${categoryInfo.color.replace(
                                                        'text-',
                                                        'bg-',
                                                    )} opacity-20 ${
                                                        isExpanded
                                                            ? 'animate-ping'
                                                            : 'animate-pulse'
                                                    }`}
                                                />
                                            </div>

                                            {/* Content for mobile */}
                                            <div className='ml-16 flex-1'>
                                                <div
                                                    className={`bg-neutral-900/50 backdrop-blur p-6 rounded-xl border-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                                                        isExpanded
                                                            ? 'border-primary-500/50 shadow-lg'
                                                            : 'border-white/10 hover:border-primary-500/30'
                                                    }`}
                                                >
                                                    <div className='flex items-center gap-2 mb-3'>
                                                        <CalendarIcon className='h-4 w-4 text-primary-500' />
                                                        <time
                                                            dateTime={item.dateTime}
                                                            className={`text-xs font-bold ${categoryInfo.color} uppercase tracking-wider quote-attribution`}
                                                        >
                                                            {item.date}
                                                        </time>
                                                    </div>

                                                    <div className='flex items-start justify-between'>
                                                        <h3 className='text-xl font-bold text-white pr-2 quote-serif leading-tight'>
                                                            {item.isKeyEvent && (
                                                                <SparklesIcon className='inline-block h-5 w-5 text-amber-500 mr-2' />
                                                            )}
                                                            {item.name}
                                                        </h3>
                                                        <button
                                                            onClick={() =>
                                                                toggleExpanded(
                                                                    index,
                                                                )
                                                            }
                                                            className='flex-shrink-0 p-2 hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-110'
                                                            aria-label={
                                                                isExpanded
                                                                    ? 'Show less'
                                                                    : 'Show more'
                                                            }
                                                        >
                                                            {isExpanded ? (
                                                                <ChevronUpIcon className='h-5 w-5 text-neutral-400' />
                                                            ) : (
                                                                <ChevronDownIcon className='h-5 w-5 text-neutral-400' />
                                                            )}
                                                        </button>
                                                    </div>

                                                    <p
                                                        className={`mt-3 text-base text-neutral-300 leading-relaxed ${
                                                            !isExpanded
                                                                ? 'line-clamp-3'
                                                                : 'animate-fade-in'
                                                        }`}
                                                    >
                                                        {item.description}
                                                    </p>

                                                    <div className='mt-4 flex items-center gap-2 flex-wrap'>
                                                        {item.subcategory && (
                                                            <span className='inline-flex items-center gap-1 px-3 py-1 text-xs font-bold bg-red-500/20 text-red-400 rounded-full uppercase tracking-wider'>
                                                                <ExclamationTriangleIcon className='h-3 w-3' />
                                                                {item.subcategory}
                                                            </span>
                                                        )}
                                                        {item.category === 'legal' && (
                                                            <span className='inline-flex items-center gap-1 px-3 py-1 text-xs font-bold bg-green-500/20 text-green-400 rounded-full'>
                                                                <ScaleIcon className='h-3 w-3' />
                                                                Court Filing
                                                            </span>
                                                        )}
                                                        {item.category === 'scandal' && (
                                                            <span className='inline-flex items-center gap-1 px-3 py-1 text-xs font-bold bg-amber-500/20 text-amber-400 rounded-full'>
                                                                <NewspaperIcon className='h-3 w-3' />
                                                                Public Record
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop Layout */}
                                        <div
                                            className={`hidden md:flex items-center ${
                                                isEven
                                                    ? 'justify-start'
                                                    : 'justify-end'
                                            }`}
                                        >
                                            <div
                                                className={`w-5/12 ${
                                                    isEven
                                                        ? 'text-right pr-8'
                                                        : 'text-left pl-8 order-1'
                                                }`}
                                            >
                                                <div className={`inline-flex items-center gap-2 ${isEven ? 'flex-row-reverse' : ''}`}>
                                                    <CalendarIcon className='h-4 w-4 text-primary-500' />
                                                    <time
                                                        dateTime={item.dateTime}
                                                        className={`text-xs font-bold ${categoryInfo.color} uppercase tracking-wider quote-attribution`}
                                                    >
                                                        {item.date}
                                                    </time>
                                                </div>
                                            </div>

                                            {/* Timeline dot for desktop */}
                                            <div className='absolute left-1/2 -translate-x-1/2 z-10'>
                                                <div
                                                    className={`w-4 h-4 rounded-full border-4 border-black shadow-lg ${categoryInfo.color.replace(
                                                        'text-',
                                                        'bg-',
                                                    )}`}
                                                />
                                                <div
                                                    className={`absolute -inset-2 rounded-full ${categoryInfo.color.replace(
                                                        'text-',
                                                        'bg-',
                                                    )} opacity-20 ${
                                                        isExpanded
                                                            ? 'animate-ping'
                                                            : 'animate-pulse'
                                                    }`}
                                                />
                                            </div>

                                            {/* Content card for desktop */}
                                            <div
                                                className={`w-5/12 ${
                                                    isEven ? 'order-1' : ''
                                                }`}
                                            >
                                                <div
                                                    className={`bg-neutral-900/50 backdrop-blur p-6 rounded-xl border-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                                                        isExpanded
                                                            ? 'border-primary-500/50 shadow-lg'
                                                            : 'border-white/10 hover:border-primary-500/30'
                                                    }`}
                                                >
                                                    <div className='flex items-start justify-between'>
                                                        <h3 className='text-xl font-bold text-white pr-2 quote-serif leading-tight'>
                                                            {item.isKeyEvent && (
                                                                <SparklesIcon className='inline-block h-5 w-5 text-amber-500 mr-2' />
                                                            )}
                                                            {item.name}
                                                        </h3>
                                                        <button
                                                            onClick={() =>
                                                                toggleExpanded(
                                                                    index,
                                                                )
                                                            }
                                                            className='flex-shrink-0 p-2 hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-110'
                                                            aria-label={
                                                                isExpanded
                                                                    ? 'Show less'
                                                                    : 'Show more'
                                                            }
                                                        >
                                                            {isExpanded ? (
                                                                <ChevronUpIcon className='h-5 w-5 text-neutral-400' />
                                                            ) : (
                                                                <ChevronDownIcon className='h-5 w-5 text-neutral-400' />
                                                            )}
                                                        </button>
                                                    </div>

                                                    <p
                                                        className={`mt-3 text-base text-neutral-300 leading-relaxed ${
                                                            !isExpanded
                                                                ? 'line-clamp-3'
                                                                : 'animate-fade-in'
                                                        }`}
                                                    >
                                                        {item.description}
                                                    </p>

                                                    <div className='mt-4 flex items-center gap-2 flex-wrap'>
                                                        {item.subcategory && (
                                                            <span className='inline-flex items-center gap-1 px-3 py-1 text-xs font-bold bg-red-500/20 text-red-400 rounded-full uppercase tracking-wider'>
                                                                <ExclamationTriangleIcon className='h-3 w-3' />
                                                                {item.subcategory}
                                                            </span>
                                                        )}
                                                        {item.category === 'legal' && (
                                                            <span className='inline-flex items-center gap-1 px-3 py-1 text-xs font-bold bg-green-500/20 text-green-400 rounded-full'>
                                                                <ScaleIcon className='h-3 w-3' />
                                                                Court Filing
                                                            </span>
                                                        )}
                                                        {item.category === 'scandal' && (
                                                            <span className='inline-flex items-center gap-1 px-3 py-1 text-xs font-bold bg-amber-500/20 text-amber-400 rounded-full'>
                                                                <NewspaperIcon className='h-3 w-3' />
                                                                Public Record
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Summary Stats with NYT-style emphasis */}
                <div className='mt-24 mb-8 text-center'>
                    <h3 className='text-2xl font-bold text-white mb-8 quote-serif'>By the Numbers</h3>
                </div>
                <div className='grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-4'>
                    <div className='group text-center bg-neutral-900/50 backdrop-blur p-8 rounded-xl border-2 border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2'>
                        <p className='text-5xl font-bold bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent quote-serif'>
                            25+
                        </p>
                        <p className='mt-3 text-xs font-bold text-neutral-400 group-hover:text-white transition-colors uppercase tracking-wider quote-attribution'>
                            Total Accusers
                        </p>
                        <div className='mt-2 h-0.5 w-8 mx-auto bg-red-500 opacity-50'></div>
                    </div>
                    <div className='group text-center bg-neutral-900/50 backdrop-blur p-8 rounded-xl border-2 border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2'>
                        <p className='text-5xl font-bold bg-gradient-to-br from-amber-400 to-amber-600 bg-clip-text text-transparent quote-serif'>
                            17
                        </p>
                        <p className='mt-3 text-xs font-bold text-neutral-400 group-hover:text-white transition-colors uppercase tracking-wider quote-attribution'>
                            Years of Friendship
                        </p>
                        <div className='mt-2 h-0.5 w-8 mx-auto bg-amber-500 opacity-50'></div>
                    </div>
                    <div className='group text-center bg-neutral-900/50 backdrop-blur p-8 rounded-xl border-2 border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2'>
                        <p className='text-5xl font-bold bg-gradient-to-br from-green-400 to-green-600 bg-clip-text text-transparent quote-serif'>
                            2
                        </p>
                        <p className='mt-3 text-xs font-bold text-neutral-400 group-hover:text-white transition-colors uppercase tracking-wider quote-attribution'>
                            Successful Lawsuits
                        </p>
                        <div className='mt-2 h-0.5 w-8 mx-auto bg-green-500 opacity-50'></div>
                    </div>
                    <div className='group text-center bg-neutral-900/50 backdrop-blur p-8 rounded-xl border-2 border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2'>
                        <p className='text-5xl font-bold bg-gradient-to-br from-primary-400 to-primary-600 bg-clip-text text-transparent quote-serif'>
                            $88.3M
                        </p>
                        <p className='mt-3 text-xs font-bold text-neutral-400 group-hover:text-white transition-colors uppercase tracking-wider quote-attribution'>
                            Court Damages
                        </p>
                        <div className='mt-2 h-0.5 w-8 mx-auto bg-primary-500 opacity-50'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
