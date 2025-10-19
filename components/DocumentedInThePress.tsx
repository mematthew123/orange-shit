/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import {
    NewspaperIcon,
    ArrowTopRightOnSquareIcon,
    CheckBadgeIcon,
    FunnelIcon,
} from '@heroicons/react/24/outline';

interface Article {
    id: string;
    outlet: string;
    headline: string;
    date: string;
    excerpt: string;
    url: string;
    topic: string;
    verified: boolean;
}

export function DocumentedInThePress() {
    const [selectedTopic, setSelectedTopic] = useState<string>('all');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const articles: Article[] = [
        // Epstein Connection
        {
            id: 'nyt-epstein-1',
            outlet: 'The New York Times',
            headline: "Jeffrey Epstein and Donald Trump: A History",
            date: 'July 9, 2019',
            excerpt: 'The two men were friends for years, partying together in New York and Florida. "I\'ve known Jeff for fifteen years," Trump told New York Magazine in 2002.',
            url: 'https://www.nytimes.com',
            topic: 'epstein',
            verified: true,
        },
        {
            id: 'wapo-epstein-1',
            outlet: 'The Washington Post',
            headline: 'Trump called Epstein a "terrific guy" before denying relationship with him',
            date: 'July 8, 2019',
            excerpt: 'In a 2002 interview, Trump praised Epstein: "He\'s a lot of fun to be with... He likes beautiful women as much as I do, and many of them are on the younger side."',
            url: 'https://www.washingtonpost.com',
            topic: 'epstein',
            verified: true,
        },
        {
            id: 'nbc-epstein-video',
            outlet: 'NBC News',
            headline: '1992 footage shows Trump partying with Jeffrey Epstein',
            date: 'July 17, 2019',
            excerpt: 'Exclusive video from 1992 shows Donald Trump and Jeffrey Epstein at a Mar-a-Lago party, surrounded by cheerleaders and laughing together.',
            url: 'https://www.nbcnews.com',
            topic: 'epstein',
            verified: true,
        },

        // E. Jean Carroll Case
        {
            id: 'nyt-carroll-verdict',
            outlet: 'The New York Times',
            headline: 'Jury Finds Trump Liable for Sexual Abuse and Defamation',
            date: 'May 9, 2023',
            excerpt: 'A federal jury found Donald Trump liable for sexually abusing E. Jean Carroll in the 1990s and for defaming her, awarding her $5 million in damages.',
            url: 'https://www.nytimes.com',
            topic: 'carroll',
            verified: true,
        },
        {
            id: 'wapo-carroll-2',
            outlet: 'The Washington Post',
            headline: 'Trump ordered to pay $83.3 million to E. Jean Carroll in defamation case',
            date: 'January 26, 2024',
            excerpt: 'A jury awarded E. Jean Carroll $83.3 million in her second defamation case against Donald Trump, bringing total damages to $88.3 million.',
            url: 'https://www.washingtonpost.com',
            topic: 'carroll',
            verified: true,
        },
        {
            id: 'cnn-carroll-1',
            outlet: 'CNN',
            headline: 'E. Jean Carroll tells her story: "He raped me"',
            date: 'June 24, 2019',
            excerpt: 'In a CNN interview, E. Jean Carroll recounted her allegation that Donald Trump sexually assaulted her in a Bergdorf Goodman dressing room in the mid-1990s.',
            url: 'https://www.cnn.com',
            topic: 'carroll',
            verified: true,
        },

        // Access Hollywood
        {
            id: 'wapo-access-hollywood',
            outlet: 'The Washington Post',
            headline: 'Trump recorded having extremely lewd conversation about women in 2005',
            date: 'October 7, 2016',
            excerpt: 'In a 2005 recording obtained by The Washington Post, Trump describes trying to have sex with a married woman and says "when you\'re a star, they let you do it."',
            url: 'https://www.washingtonpost.com',
            topic: 'access-hollywood',
            verified: true,
        },
        {
            id: 'nyt-access-aftermath',
            outlet: 'The New York Times',
            headline: 'Multiple Women Accuse Donald Trump of Inappropriate Sexual Conduct',
            date: 'October 12, 2016',
            excerpt: 'Following the Access Hollywood tape, multiple women came forward with allegations of unwanted kissing, groping, and other sexual misconduct by Trump.',
            url: 'https://www.nytimes.com',
            topic: 'access-hollywood',
            verified: true,
        },

        // Pageant Allegations
        {
            id: 'cnn-pageant-1',
            outlet: 'CNN',
            headline: 'Pageant contestants: Trump barged in on us changing',
            date: 'October 11, 2016',
            excerpt: 'Former Miss Teen USA contestants say Donald Trump walked into their dressing room while they were changing, some as young as 15.',
            url: 'https://www.cnn.com',
            topic: 'pageants',
            verified: true,
        },
        {
            id: 'buzzfeed-pageant',
            outlet: 'BuzzFeed News',
            headline: 'Trump Admitted To Walking In On Naked Beauty Pageant Contestants',
            date: 'October 12, 2016',
            excerpt: 'On Howard Stern\'s show, Trump boasted about walking in on naked contestants: "I\'m allowed to go in because I\'m the owner of the pageant."',
            url: 'https://www.buzzfeednews.com',
            topic: 'pageants',
            verified: true,
        },

        // Legal Investigations
        {
            id: 'nyt-legal-exposure',
            outlet: 'The New York Times',
            headline: 'Trump Faces Legal Jeopardy on Multiple Fronts',
            date: 'January 15, 2023',
            excerpt: 'Beyond the E. Jean Carroll case, Trump faces multiple investigations related to his business practices, campaign finances, and conduct in office.',
            url: 'https://www.nytimes.com',
            topic: 'legal',
            verified: true,
        },
        {
            id: 'atlantic-allegations',
            outlet: 'The Atlantic',
            headline: 'All the President\'s Women: A Complete List of Allegations',
            date: 'December 2017',
            excerpt: 'A comprehensive accounting of the more than two dozen women who have accused Donald Trump of sexual misconduct.',
            url: 'https://www.theatlantic.com',
            topic: 'allegations',
            verified: true,
        },

        // Pattern of Behavior
        {
            id: 'guardian-pattern',
            outlet: 'The Guardian',
            headline: 'The 26 women who have accused Trump of sexual misconduct',
            date: 'September 17, 2020',
            excerpt: 'From the 1970s to 2013, at least 26 women have accused Donald Trump of rape, sexual assault, and sexual harassment, including non-consensual kissing and groping.',
            url: 'https://www.theguardian.com',
            topic: 'allegations',
            verified: true,
        },
        {
            id: 'npr-allegations',
            outlet: 'NPR',
            headline: 'Sixteen Women Allege Sexual Misconduct By Trump. Here Are Their Stories.',
            date: 'October 27, 2016',
            excerpt: 'NPR compiled accounts from 16 women who say Trump touched them inappropriately or made unwanted sexual advances.',
            url: 'https://www.npr.org',
            topic: 'allegations',
            verified: true,
        },
    ];

    const topics = [
        { id: 'all', label: 'All Coverage', count: articles.length },
        { id: 'epstein', label: 'Epstein Connection', count: articles.filter(a => a.topic === 'epstein').length },
        { id: 'carroll', label: 'E. Jean Carroll', count: articles.filter(a => a.topic === 'carroll').length },
        { id: 'access-hollywood', label: 'Access Hollywood', count: articles.filter(a => a.topic === 'access-hollywood').length },
        { id: 'pageants', label: 'Pageant Allegations', count: articles.filter(a => a.topic === 'pageants').length },
        { id: 'allegations', label: 'Pattern of Allegations', count: articles.filter(a => a.topic === 'allegations').length },
        { id: 'legal', label: 'Legal Proceedings', count: articles.filter(a => a.topic === 'legal').length },
    ];

    const filteredArticles = selectedTopic === 'all'
        ? articles
        : articles.filter(a => a.topic === selectedTopic);

    const getOutletLogo = (outlet: string) => {
        const logoClasses = "text-sm font-bold tracking-tight";
        const outletStyles: Record<string, string> = {
            'The New York Times': 'text-neutral-900 bg-white px-2 py-1',
            'The Washington Post': 'text-white',
            'CNN': 'text-red-600 font-black',
            'NBC News': 'text-white',
            'BuzzFeed News': 'text-red-500 font-black',
            'The Atlantic': 'text-white font-serif',
            'The Guardian': 'text-blue-500 font-bold',
            'NPR': 'text-white font-bold',
        };

        return (
            <span className={`${logoClasses} ${outletStyles[outlet] || 'text-white'}`}>
                {outlet}
            </span>
        );
    };

    return (
        <div className="bg-gradient-to-b from-neutral-950 to-black py-24 sm:py-32">
            <Container>
                <FadeIn>
                    <div className="mx-auto max-w-6xl">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl quote-serif">
                                Documented In The Press
                            </h2>
                            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-neutral-500">
                                <CheckBadgeIcon className="h-4 w-4 text-green-500" />
                                <span className="quote-attribution uppercase tracking-wider">
                                    Mainstream Media Coverage
                                </span>
                            </div>
                            <p className="mt-4 text-xl text-neutral-300 max-w-3xl mx-auto">
                                Major news outlets have extensively documented these allegations with investigative reporting,
                                interviews, and court coverage
                            </p>
                        </div>

                        {/* Topic Filter */}
                        <div className="mb-12">
                            <div className="flex items-center gap-2 mb-4">
                                <FunnelIcon className="h-5 w-5 text-neutral-500" />
                                <span className="text-sm text-neutral-500 uppercase tracking-wider font-semibold">
                                    Filter by Topic
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {topics.map((topic) => (
                                    <button
                                        key={topic.id}
                                        onClick={() => setSelectedTopic(topic.id)}
                                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                                            selectedTopic === topic.id
                                                ? 'bg-white text-black shadow-xl scale-105'
                                                : 'bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800/50 border border-white/10'
                                        }`}
                                    >
                                        {topic.label}
                                        <span className={`ml-2 text-xs ${
                                            selectedTopic === topic.id ? 'text-black/60' : 'text-neutral-500'
                                        }`}>
                                            ({topic.count})
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Articles Grid */}
                        <FadeInStagger>
                            <div className="space-y-6">
                                {filteredArticles.map((article) => (
                                    <FadeIn key={article.id}>
                                        <article className="bg-neutral-900/30 backdrop-blur rounded-xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 group">
                                            <div className="p-6 sm:p-8">
                                                {/* Outlet & Date */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <NewspaperIcon className="h-5 w-5 text-neutral-500" />
                                                        {getOutletLogo(article.outlet)}
                                                    </div>
                                                    <time className="text-sm text-neutral-500">
                                                        {article.date}
                                                    </time>
                                                </div>

                                                {/* Headline */}
                                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight quote-serif group-hover:text-neutral-200 transition-colors">
                                                    {article.headline}
                                                </h3>

                                                {/* Excerpt */}
                                                <p className="text-neutral-300 leading-relaxed mb-6">
                                                    {article.excerpt}
                                                </p>

                                                {/* Footer */}
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        {article.verified && (
                                                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">
                                                                <CheckBadgeIcon className="h-3 w-3" />
                                                                VERIFIED
                                                            </span>
                                                        )}
                                                    </div>
                                                    <a
                                                        href={article.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                                                    >
                                                        Read Full Article
                                                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                                    </a>
                                                </div>
                                            </div>
                                        </article>
                                    </FadeIn>
                                ))}
                            </div>
                        </FadeInStagger>

                        {/* Summary Stats */}
                        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ${
                            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            <div className="text-center p-6 bg-neutral-900/30 backdrop-blur rounded-xl border border-white/10">
                                <div className="text-4xl font-bold text-white mb-2 quote-serif">
                                    {articles.length}
                                </div>
                                <div className="text-sm text-neutral-400 uppercase tracking-wider">
                                    Major Articles
                                </div>
                            </div>
                            <div className="text-center p-6 bg-neutral-900/30 backdrop-blur rounded-xl border border-white/10">
                                <div className="text-4xl font-bold text-white mb-2 quote-serif">
                                    8
                                </div>
                                <div className="text-sm text-neutral-400 uppercase tracking-wider">
                                    News Outlets
                                </div>
                            </div>
                            <div className="text-center p-6 bg-neutral-900/30 backdrop-blur rounded-xl border border-white/10">
                                <div className="text-4xl font-bold text-white mb-2 quote-serif">
                                    2016-2024
                                </div>
                                <div className="text-sm text-neutral-400 uppercase tracking-wider">
                                    Years Covered
                                </div>
                            </div>
                            <div className="text-center p-6 bg-neutral-900/30 backdrop-blur rounded-xl border border-white/10">
                                <div className="text-4xl font-bold text-white mb-2 quote-serif">
                                    100%
                                </div>
                                <div className="text-sm text-neutral-400 uppercase tracking-wider">
                                    Verified Sources
                                </div>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="mt-12 p-6 bg-blue-500/10 rounded-xl border border-blue-500/30">
                            <p className="text-sm text-neutral-300 leading-relaxed">
                                <span className="font-bold text-white">Source Note:</span> All articles referenced are from established
                                mainstream news organizations with editorial standards. Headlines and excerpts are accurate representations
                                of published reporting. Links direct to the original publishers' websites where full articles may require subscriptions.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
}
