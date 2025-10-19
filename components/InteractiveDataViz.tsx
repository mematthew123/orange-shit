/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import {
    ChartBarIcon,
    UserGroupIcon,
    ArrowsRightLeftIcon,
    CheckCircleIcon,
    XCircleIcon,
} from '@heroicons/react/24/outline';

export function InteractiveDataViz() {
    const [selectedView, setSelectedView] = useState<'network' | 'timeline' | 'comparison'>('network');
    const [isMounted, setIsMounted] = useState(false);
    const [hoveredConnection, setHoveredConnection] = useState<string | null>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Network connections data
    const connections = [
        { id: 'epstein', name: 'Jeffrey Epstein', type: 'primary', x: 50, y: 50 },
        { id: 'trump', name: 'Donald Trump', type: 'primary', x: 30, y: 30 },
        { id: 'maxwell', name: 'Ghislaine Maxwell', type: 'secondary', x: 70, y: 40 },
        { id: 'clinton', name: 'Bill Clinton', type: 'secondary', x: 60, y: 70 },
        { id: 'andrew', name: 'Prince Andrew', type: 'secondary', x: 40, y: 70 },
        { id: 'dershowitz', name: 'Alan Dershowitz', type: 'tertiary', x: 25, y: 60 },
        { id: 'acosta', name: 'Alex Acosta', type: 'tertiary', x: 75, y: 60 },
    ];

    const links = [
        { source: 'trump', target: 'epstein', strength: 'strong', label: '15+ years friendship' },
        { source: 'epstein', target: 'maxwell', strength: 'strong', label: 'Co-conspirator' },
        { source: 'epstein', target: 'clinton', strength: 'medium', label: '26 flights' },
        { source: 'epstein', target: 'andrew', strength: 'strong', label: 'Frequent visitor' },
        { source: 'trump', target: 'maxwell', strength: 'medium', label: 'Social events' },
        { source: 'epstein', target: 'dershowitz', strength: 'medium', label: 'Legal advisor' },
        { source: 'epstein', target: 'acosta', strength: 'medium', label: '2008 plea deal' },
        { source: 'trump', target: 'acosta', strength: 'weak', label: 'Labor Secretary' },
    ];

    // Timeline data with allegations count by year
    const timelineData = [
        { year: '1980s', allegations: 2, events: 1 },
        { year: '1990s', allegations: 8, events: 3 },
        { year: '2000s', allegations: 12, events: 5 },
        { year: '2010s', allegations: 15, events: 8 },
        { year: '2020s', allegations: 3, events: 4 },
    ];

    // Comparison data: Trump's denials vs documented facts
    const comparisons = [
        {
            topic: 'Relationship with Epstein',
            trumpSays: "I was not a fan of his",
            factsSay: "15+ year friendship documented through photos, videos, and Trump's own 2002 quote praising Epstein",
            verified: true,
        },
        {
            topic: "Knowledge of Epstein's crimes",
            trumpSays: "I had no idea",
            factsSay: 'Trump in 2002: "He likes beautiful women as much as I do, and many of them are on the younger side"',
            verified: true,
        },
        {
            topic: 'Access Hollywood behavior',
            trumpSays: "Just locker room talk",
            factsSay: "25+ women came forward with similar allegations after the tape's release",
            verified: true,
        },
        {
            topic: 'E. Jean Carroll case',
            trumpSays: "I don't know this woman",
            factsSay: "Jury found Trump liable for sexual abuse and defamation, awarding $88.3 million",
            verified: true,
        },
        {
            topic: 'Beauty pageant conduct',
            trumpSays: "Never happened",
            factsSay: "Trump admitted on Howard Stern to walking into dressing rooms to 'inspect'",
            verified: true,
        },
    ];

    return (
        <div className="relative bg-gradient-to-b from-black via-neutral-950 to-black py-24 sm:py-32 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            <Container>
                <FadeIn>
                    <div className="mx-auto max-w-6xl relative">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
                                <ChartBarIcon className="h-5 w-5 text-blue-400" />
                                <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                                    Data Analysis
                                </span>
                            </div>
                            <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl quote-serif mb-4">
                                The Data Tells the Story
                            </h2>
                            <p className="mt-4 text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                                Patterns, connections, and contradictions revealed through interactive analysis
                            </p>
                        </div>

                        {/* View selector */}
                        <div className="flex flex-wrap justify-center gap-3 mb-16">
                            <button
                                onClick={() => setSelectedView('network')}
                                className={`group px-6 py-4 rounded-xl font-semibold transition-all border-2 ${
                                    selectedView === 'network'
                                        ? 'bg-white text-black border-white shadow-2xl scale-105'
                                        : 'bg-transparent text-neutral-300 border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900/50'
                                }`}
                            >
                                <UserGroupIcon className={`inline-block h-5 w-5 mr-2 ${
                                    selectedView === 'network' ? 'text-black' : 'text-neutral-400 group-hover:text-neutral-300'
                                }`} />
                                Connection Network
                            </button>
                            <button
                                onClick={() => setSelectedView('timeline')}
                                className={`group px-6 py-4 rounded-xl font-semibold transition-all border-2 ${
                                    selectedView === 'timeline'
                                        ? 'bg-white text-black border-white shadow-2xl scale-105'
                                        : 'bg-transparent text-neutral-300 border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900/50'
                                }`}
                            >
                                <ChartBarIcon className={`inline-block h-5 w-5 mr-2 ${
                                    selectedView === 'timeline' ? 'text-black' : 'text-neutral-400 group-hover:text-neutral-300'
                                }`} />
                                Timeline Analysis
                            </button>
                            <button
                                onClick={() => setSelectedView('comparison')}
                                className={`group px-6 py-4 rounded-xl font-semibold transition-all border-2 ${
                                    selectedView === 'comparison'
                                        ? 'bg-white text-black border-white shadow-2xl scale-105'
                                        : 'bg-transparent text-neutral-300 border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900/50'
                                }`}
                            >
                                <ArrowsRightLeftIcon className={`inline-block h-5 w-5 mr-2 ${
                                    selectedView === 'comparison' ? 'text-black' : 'text-neutral-400 group-hover:text-neutral-300'
                                }`} />
                                Claims vs Facts
                            </button>
                        </div>

                        {/* Network Diagram */}
                        {selectedView === 'network' && (
                            <div className={`bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl transition-all duration-700 ${
                                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2 quote-serif">Power Network Connections</h3>
                                        <p className="text-neutral-400 text-sm">Hover over connections to see relationships</p>
                                    </div>
                                    <UserGroupIcon className="h-12 w-12 text-neutral-700" />
                                </div>
                                <div className="relative h-[500px] bg-black/50 rounded-xl overflow-hidden border border-white/5">
                                    <svg className="w-full h-full">
                                        {/* Draw links */}
                                        {links.map((link, idx) => {
                                            const source = connections.find(c => c.id === link.source);
                                            const target = connections.find(c => c.id === link.target);
                                            if (!source || !target) return null;
                                            
                                            const isHovered = hoveredConnection === link.source || hoveredConnection === link.target;
                                            
                                            return (
                                                <g key={idx}>
                                                    <line
                                                        x1={`${source.x}%`}
                                                        y1={`${source.y}%`}
                                                        x2={`${target.x}%`}
                                                        y2={`${target.y}%`}
                                                        stroke={
                                                            link.strength === 'strong' ? '#ef4444' :
                                                            link.strength === 'medium' ? '#f59e0b' : '#6b7280'
                                                        }
                                                        strokeWidth={isHovered ? 3 : link.strength === 'strong' ? 2 : 1}
                                                        opacity={isHovered ? 1 : 0.6}
                                                        className="transition-all duration-300"
                                                    />
                                                    {isHovered && (
                                                        <text
                                                            x={`${(source.x + target.x) / 2}%`}
                                                            y={`${(source.y + target.y) / 2}%`}
                                                            fill="white"
                                                            fontSize="12"
                                                            textAnchor="middle"
                                                            className="animate-fade-in"
                                                        >
                                                            {link.label}
                                                        </text>
                                                    )}
                                                </g>
                                            );
                                        })}
                                        
                                        {/* Draw nodes */}
                                        {connections.map((node) => (
                                            <g key={node.id}>
                                                <circle
                                                    cx={`${node.x}%`}
                                                    cy={`${node.y}%`}
                                                    r={node.type === 'primary' ? 20 : node.type === 'secondary' ? 15 : 10}
                                                    fill={
                                                        node.type === 'primary' ? '#dc2626' :
                                                        node.type === 'secondary' ? '#f59e0b' : '#3b82f6'
                                                    }
                                                    className="cursor-pointer transition-all duration-300 hover:scale-125"
                                                    onMouseEnter={() => setHoveredConnection(node.id)}
                                                    onMouseLeave={() => setHoveredConnection(null)}
                                                />
                                                <text
                                                    x={`${node.x}%`}
                                                    y={`${node.y + 8}%`}
                                                    fill="white"
                                                    fontSize="14"
                                                    fontWeight="bold"
                                                    textAnchor="middle"
                                                    className="pointer-events-none"
                                                >
                                                    {node.name}
                                                </text>
                                            </g>
                                        ))}
                                    </svg>
                                </div>
                                <div className="mt-6 flex items-center justify-center gap-6 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                                        <span className="text-neutral-400">Primary figures</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                                        <span className="text-neutral-400">Associates</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                        <span className="text-neutral-400">Connected parties</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Timeline Chart */}
                        {selectedView === 'timeline' && (
                            <div className={`bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl transition-all duration-700 ${
                                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2 quote-serif">Allegations Over Time</h3>
                                        <p className="text-neutral-400 text-sm">Four decades of documented allegations</p>
                                    </div>
                                    <ChartBarIcon className="h-12 w-12 text-neutral-700" />
                                </div>
                                <div className="space-y-6">
                                    {timelineData.map((period, idx) => (
                                        <div key={period.year} 
                                            className="flex items-center gap-4"
                                            style={{ animationDelay: `${idx * 100}ms` }}
                                        >
                                            <div className="w-20 text-right">
                                                <span className="text-sm font-bold text-neutral-400">{period.year}</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="relative h-12 bg-black/50 rounded-lg overflow-hidden">
                                                    <div 
                                                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-red-400 rounded-lg transition-all duration-1000"
                                                        style={{ 
                                                            width: `${(period.allegations / 15) * 100}%`,
                                                            transitionDelay: `${idx * 200}ms`
                                                        }}
                                                    >
                                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white font-bold">
                                                            {period.allegations} allegations
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mt-1 text-xs text-neutral-500">
                                                    {period.events} major events
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                                    <p className="text-sm text-neutral-300">
                                        <span className="font-bold text-white">Total:</span> Over 40 allegations spanning 40+ years, 
                                        with the majority occurring in the 1990s-2010s period.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Comparison View */}
                        {selectedView === 'comparison' && (
                            <div className={`transition-all duration-700 ${
                                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                <div className="text-center mb-12">
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <ArrowsRightLeftIcon className="h-8 w-8 text-neutral-600" />
                                        <h3 className="text-3xl font-bold text-white quote-serif">Claims vs Reality</h3>
                                    </div>
                                    <p className="text-neutral-400 text-sm">Comparing statements against documented facts</p>
                                </div>
                                <div className="space-y-6">
                                {comparisons.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-xl rounded-xl border border-white/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
                                        style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                        <div className="bg-gradient-to-r from-red-600/10 via-transparent to-green-600/10 p-5 border-b border-white/10">
                                            <h4 className="text-xl font-bold text-white quote-serif">{item.topic}</h4>
                                        </div>
                                        <div className="grid md:grid-cols-2 divide-x divide-white/10">
                                            <div className="p-6 bg-red-500/5">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="p-1.5 bg-red-500/20 rounded-full">
                                                        <XCircleIcon className="h-4 w-4 text-red-400" />
                                                    </div>
                                                    <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Claim</span>
                                                </div>
                                                <p className="text-neutral-300 italic leading-relaxed">"{item.trumpSays}"</p>
                                            </div>
                                            <div className="p-6 bg-green-500/5">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="p-1.5 bg-green-500/20 rounded-full">
                                                        <CheckCircleIcon className="h-4 w-4 text-green-400" />
                                                    </div>
                                                    <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Fact</span>
                                                </div>
                                                <p className="text-white font-medium leading-relaxed">{item.factsSay}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        )}
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
}