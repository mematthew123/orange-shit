'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const timeline = [
    {
        name: 'First Meeting',
        description:
            'Trump and Epstein first meet in New York social circles. Trump later told New York Magazine in 2002 he had known Epstein for "15 years," dating their acquaintance to approximately 1987.',
        date: 'Late 1980s',
        dateTime: '1987',
        category: 'relationship',
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
    },
    {
        name: 'Carroll Defamation Verdict',
        description:
            "Second E. Jean Carroll case results in $83.3 million verdict for defamation based on Trump's denials. Total damages: $88.3 million.",
        date: 'Jan 2024',
        dateTime: '2024-01',
        category: 'legal',
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
    all: { name: 'All Events', color: 'text-primary' },
    relationship: { name: 'Trump-Epstein Relationship', color: 'text-info' },
    allegation: { name: 'Sexual Assault Allegations', color: 'text-warning' },
    legal: { name: 'Legal Proceedings', color: 'text-destructive' },
    scandal: { name: 'Public Scandals', color: 'text-accent-foreground' },
};

export default function Timeline() {
    const [selectedCategory, setSelectedCategory] =
        useState<keyof typeof categories>('all');
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

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
        <div className='bg-background py-24 sm:py-32' id='timeline'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl text-center mb-12'>
                    <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
                        Timeline of Events
                    </h2>
                    <p className='mt-4 text-lg text-muted-foreground'>
                        A chronological record of relationships, allegations,
                        and legal proceedings from the 1980s to present
                    </p>
                </div>

                {/* Category Filter */}
                <div className='flex flex-wrap justify-center gap-2 mb-12'>
                    {Object.entries(categories).map(([key, value]) => (
                        <button
                            key={key}
                            onClick={() =>
                                setSelectedCategory(
                                    key as keyof typeof categories,
                                )
                            }
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                selectedCategory === key
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                            }`}
                        >
                            {value.name}
                        </button>
                    ))}
                </div>

                {/* Timeline Grid */}
                <div className='relative'>
                    {/* Vertical line for mobile */}
                    <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:hidden' />

                    <div className='space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8'>
                        {filteredTimeline.map((item, index) => {
                            const isExpanded = expandedItems.has(index);
                            const categoryInfo =
                                categories[
                                    item.category as keyof typeof categories
                                ];

                            return (
                                <div
                                    key={index}
                                    className='relative lg:col-span-1'
                                >
                                    {/* Mobile timeline dot */}
                                    <div className='absolute left-8 -translate-x-1/2 w-4 h-4 bg-card rounded-full border-2 border-primary lg:hidden' />

                                    <div className='ml-16 lg:ml-0 bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors'>
                                        <div className='flex items-start justify-between'>
                                            <time
                                                dateTime={item.dateTime}
                                                className={`text-sm font-semibold ${categoryInfo.color}`}
                                            >
                                                {item.date}
                                            </time>
                                            <button
                                                onClick={() =>
                                                    toggleExpanded(index)
                                                }
                                                className='ml-2 p-1 hover:bg-accent rounded transition-colors'
                                                aria-label={
                                                    isExpanded
                                                        ? 'Show less'
                                                        : 'Show more'
                                                }
                                            >
                                                {isExpanded ? (
                                                    <ChevronUpIcon className='h-4 w-4 text-muted-foreground' />
                                                ) : (
                                                    <ChevronDownIcon className='h-4 w-4 text-muted-foreground' />
                                                )}
                                            </button>
                                        </div>

                                        <h3 className='mt-2 text-lg font-semibold text-card-foreground'>
                                            {item.name}
                                        </h3>

                                        <p
                                            className={`mt-2 text-sm text-muted-foreground ${
                                                !isExpanded
                                                    ? 'line-clamp-2'
                                                    : ''
                                            }`}
                                        >
                                            {item.description}
                                        </p>

                                        {item.subcategory && (
                                            <span className='inline-block mt-3 px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded'>
                                                {item.subcategory}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Summary Stats */}
                <div className='mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4'>
                    <div className='text-center'>
                        <p className='text-3xl font-bold text-primary'>25+</p>
                        <p className='mt-1 text-sm text-muted-foreground'>
                            Total Accusers
                        </p>
                    </div>
                    <div className='text-center'>
                        <p className='text-3xl font-bold text-primary'>17</p>
                        <p className='mt-1 text-sm text-muted-foreground'>
                            Years of Friendship
                        </p>
                    </div>
                    <div className='text-center'>
                        <p className='text-3xl font-bold text-primary'>2</p>
                        <p className='mt-1 text-sm text-muted-foreground'>
                            Successful Lawsuits
                        </p>
                    </div>
                    <div className='text-center'>
                        <p className='text-3xl font-bold text-primary'>
                            $88.3M
                        </p>
                        <p className='mt-1 text-sm text-muted-foreground'>
                            Court Damages
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
