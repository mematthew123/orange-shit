'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/Container';

export function CallToAction() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const stats = [
        { label: 'Women who have accused Trump', value: '25+', color: 'text-red-500' },
        { label: 'Years of allegations', value: '50', subtext: '1970s-2020s', color: 'text-amber-500' },
        { label: 'Successful verdict', value: '$88.3M', subtext: 'E. Jean Carroll', color: 'text-green-500' },
        { label: 'Criminal convictions', value: '34', subtext: 'Falsifying records', color: 'text-purple-500' },
    ];

    const resources = [
        {
            title: 'Court Documents',
            description: 'Access original court filings and testimony',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            title: 'Timeline of Events',
            description: 'Comprehensive chronology of allegations',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'Support Resources',
            description: 'Help for survivors of sexual assault',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="relative bg-black py-32 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 to-transparent" />
            
            <Container>
                <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            The Pattern Is Clear
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                            Decades of allegations, court testimony, and a criminal conviction paint a consistent picture
                        </p>
                    </div>

                    {/* Statistics Grid */}
                    <div className="grid md:grid-cols-4 gap-8 mb-20">
                        {stats.map((stat, index) => (
                            <div 
                                key={stat.label}
                                className={`text-center transition-all duration-500 ${
                                    isMounted 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-8'
                                }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                <div className={`text-5xl font-bold ${stat.color} mb-2`}>
                                    {stat.value}
                                </div>
                                <div className="text-white font-medium">
                                    {stat.label}
                                </div>
                                {stat.subtext && (
                                    <div className="text-neutral-500 text-sm mt-1">
                                        {stat.subtext}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Resources */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-white text-center mb-12">
                            Learn More
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {resources.map((resource, index) => (
                                <div 
                                    key={resource.title}
                                    className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all cursor-pointer ${
                                        isMounted 
                                            ? 'opacity-100 translate-y-0' 
                                            : 'opacity-0 translate-y-8'
                                    }`}
                                    style={{
                                        transitionDelay: `${400 + index * 100}ms`
                                    }}
                                >
                                    <div className="text-white mb-4">
                                        {resource.icon}
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-2">
                                        {resource.title}
                                    </h4>
                                    <p className="text-neutral-400 text-sm">
                                        {resource.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Share Section */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Share The Truth
                        </h3>
                        <div className="flex justify-center gap-4 mb-8">
                            <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors">
                                Share on Twitter
                            </button>
                            <button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                                Copy Link
                            </button>
                        </div>
                        <p className="text-neutral-500 text-sm">
                            Help spread awareness by sharing this documentation
                        </p>
                    </div>

                    {/* RAINN Hotline */}
                    <div className="mt-20 p-8 bg-gradient-to-r from-blue-950/50 to-purple-950/50 rounded-xl border border-white/10">
                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-white mb-3">
                                If you or someone you know needs help
                            </h4>
                            <p className="text-3xl font-bold text-white mb-2">
                                1-800-656-HOPE (4673)
                            </p>
                            <p className="text-neutral-400">
                                RAINN National Sexual Assault Hotline • Free • Confidential • 24/7
                            </p>
                        </div>
                    </div>

                    {/* Footer note */}
                    <div className="mt-20 text-center">
                        <p className="text-neutral-500 text-sm max-w-2xl mx-auto">
                            This site presents publicly available information from court records, 
                            news reports, and sworn testimony. All allegations and quotes are 
                            documented from credible sources.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}