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
        <div className="bg-gradient-to-b from-black to-neutral-950 py-24 sm:py-32">
            <Container>
                <FadeIn>
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl quote-serif">
                                The Data Tells the Story
                            </h2>
                            <p className="mt-4 text-xl text-neutral-300">
                                Interactive visualizations revealing patterns and connections
                            </p>
                        </div>

                        {/* View selector */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <button
                                onClick={() => setSelectedView('network')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                                    selectedView === 'network'
                                        ? 'bg-primary-600 text-white shadow-xl scale-105'
                                        : 'bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800/50'
                                }`}
                            >
                                <UserGroupIcon className="inline-block h-5 w-5 mr-2" />
                                Connection Network
                            </button>
                            <button
                                onClick={() => setSelectedView('timeline')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                                    selectedView === 'timeline'
                                        ? 'bg-primary-600 text-white shadow-xl scale-105'
                                        : 'bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800/50'
                                }`}
                            >
                                <ChartBarIcon className="inline-block h-5 w-5 mr-2" />
                                Allegations Timeline
                            </button>
                            <button
                                onClick={() => setSelectedView('comparison')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                                    selectedView === 'comparison'
                                        ? 'bg-primary-600 text-white shadow-xl scale-105'
                                        : 'bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800/50'
                                }`}
                            >
                                <ArrowsRightLeftIcon className="inline-block h-5 w-5 mr-2" />
                                Claims vs Facts
                            </button>
                        </div>

                        {/* Network Diagram */}
                        {selectedView === 'network' && (
                            <div className={`bg-neutral-900/50 backdrop-blur rounded-2xl p-8 border border-white/10 transition-all duration-700 ${
                                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                <h3 className="text-2xl font-bold text-white mb-6 quote-serif">Power Network Connections</h3>
                                <div className="relative h-96 bg-black/50 rounded-xl overflow-hidden">
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
                            <div className={`bg-neutral-900/50 backdrop-blur rounded-2xl p-8 border border-white/10 transition-all duration-700 ${
                                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                <h3 className="text-2xl font-bold text-white mb-6 quote-serif">Allegations Over Time</h3>
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
                            <div className={`space-y-6 transition-all duration-700 ${
                                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}>
                                <h3 className="text-2xl font-bold text-white mb-6 quote-serif text-center">Trump Says vs Facts Say</h3>
                                {comparisons.map((item, idx) => (
                                    <div 
                                        key={idx}
                                        className="bg-neutral-900/50 backdrop-blur rounded-xl border border-white/10 overflow-hidden"
                                        style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                        <div className="bg-gradient-to-r from-red-600/20 to-transparent p-4 border-b border-white/10">
                                            <h4 className="text-lg font-bold text-white">{item.topic}</h4>
                                        </div>
                                        <div className="grid md:grid-cols-2 divide-x divide-white/10">
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <XCircleIcon className="h-5 w-5 text-red-500" />
                                                    <span className="text-sm font-bold text-red-400 uppercase tracking-wider">Trump Claims</span>
                                                </div>
                                                <p className="text-neutral-300 italic">"{item.trumpSays}"</p>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                                    <span className="text-sm font-bold text-green-400 uppercase tracking-wider">Documented Facts</span>
                                                </div>
                                                <p className="text-white font-semibold">{item.factsSay}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
}