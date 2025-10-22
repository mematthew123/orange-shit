/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import {
    ArrowRightIcon,
} from '@heroicons/react/24/outline';

export function ImmersiveEntry({ onEnter }: { onEnter: () => void }) {
    const [stage, setStage] = useState<'warning' | 'preview'>('warning');
    const [isExiting, setIsExiting] = useState(false);
    const [statsVisible, setStatsVisible] = useState(false);
    const [rememberChoice, setRememberChoice] = useState(false);

    useEffect(() => {
        // Check if user has previously opted to skip
        const skipEntry = localStorage.getItem('skipContentWarning');
        if (skipEntry === 'true') {
            handleEnter();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (stage === 'preview') {
            setTimeout(() => setStatsVisible(true), 500);
        }
    }, [stage]);

    const handleEnter = () => {
        if (rememberChoice) {
            localStorage.setItem('skipContentWarning', 'true');
        }
        setIsExiting(true);
        setTimeout(() => {
            onEnter();
        }, 500);
    };

    const handleQuickEnter = () => {
        handleEnter();
    };

    const stats = [
        { number: '25+', label: 'Women Have Spoken' },
        { number: '40+', label: 'Years of Allegations' },
        { number: '$88.3M', label: 'Court Ordered Damages' },
        { number: '2', label: 'Guilty Verdicts' },
    ];

    return (
        <div className={`fixed inset-0 z-50 bg-black transition-opacity duration-500 ${
            isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
            {/* Stage 1: Warning */}
            {stage === 'warning' && (
                <div className="h-full flex items-center justify-center p-4 sm:p-8">
                    <div className="max-w-2xl w-full animate-fade-in">
                        <div className="text-center mb-6 sm:mb-8">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 quote-serif">
                                Content Advisory
                            </h1>
                            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-4 px-2">
                                This site documents sexual assault allegations and court proceedings.
                                Content may be disturbing.
                            </p>
                            <p className="text-sm text-neutral-400">
                                Support available 24/7: <span className="font-bold text-white">1-800-656-HOPE (4673)</span>
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:gap-6">
                            {/* Quick stats preview */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-neutral-900/50 rounded-lg p-3 text-center">
                                    <p className="text-2xl font-bold text-red-500">25+</p>
                                    <p className="text-xs text-neutral-400">Accusers</p>
                                </div>
                                <div className="bg-neutral-900/50 rounded-lg p-3 text-center">
                                    <p className="text-2xl font-bold text-red-500">$88.3M</p>
                                    <p className="text-xs text-neutral-400">Court Damages</p>
                                </div>
                            </div>

                            {/* Remember choice checkbox */}
                            <label className="flex items-center justify-center gap-2 text-sm text-neutral-400 cursor-pointer hover:text-neutral-300">
                                <input
                                    type="checkbox"
                                    checked={rememberChoice}
                                    onChange={(e) => setRememberChoice(e.target.checked)}
                                    className="rounded border-neutral-600 bg-neutral-800 text-red-600 focus:ring-red-500"
                                />
                                Don't show this warning again
                            </label>

                            {/* Action buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <button
                                    onClick={() => window.history.back()}
                                    className="px-6 py-3 bg-neutral-800 text-white rounded-lg font-semibold hover:bg-neutral-700 transition-all text-sm"
                                >
                                    Leave Site
                                </button>
                                <button
                                    onClick={handleQuickEnter}
                                    className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition-all text-sm"
                                >
                                    Quick Enter
                                </button>
                                <button
                                    onClick={() => setStage('preview')}
                                    className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-500 transition-all flex items-center justify-center gap-2 text-sm"
                                >
                                    View Details
                                    <ArrowRightIcon className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <p className="text-center text-xs text-neutral-500 mt-6">
                            By proceeding, you acknowledge you are 18+ years of age
                        </p>
                    </div>
                </div>
            )}

            {/* Stage 2: Preview */}
            {stage === 'preview' && (
                <div className="h-full flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
                    <div className="max-w-4xl w-full animate-fade-in">
                        <div className="text-center mb-6 sm:mb-8">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 quote-serif">
                                Donald Trump & Jeffrey Epstein
                            </h2>
                            <p className="text-base sm:text-lg text-neutral-300">
                                Documented Evidence & Court Records
                            </p>
                        </div>

                        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 transition-all duration-1000 ${
                            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            {stats.map((stat, idx) => (
                                <div
                                    key={stat.label}
                                    className="text-center"
                                    style={{ transitionDelay: `${idx * 150}ms` }}
                                >
                                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-1 quote-serif">
                                        {stat.number}
                                    </p>
                                    <p className="text-xs text-neutral-400 uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-neutral-900/50 rounded-lg p-4 sm:p-6 mb-6 border border-white/10">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-primary-500">•</span>
                                    Court testimonies & documents
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-primary-500">•</span>
                                    40+ year timeline
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-primary-500">•</span>
                                    Audio/video evidence
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-primary-500">•</span>
                                    Survivor resources
                                </li>
                            </ul>
                        </div>

                        {/* Remember choice checkbox */}
                        <label className="flex items-center justify-center gap-2 text-sm text-neutral-400 cursor-pointer hover:text-neutral-300 mb-6">
                            <input
                                type="checkbox"
                                checked={rememberChoice}
                                onChange={(e) => setRememberChoice(e.target.checked)}
                                className="rounded border-neutral-600 bg-neutral-800 text-red-600 focus:ring-red-500"
                            />
                            Don't show this warning again
                        </label>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                                onClick={() => setStage('warning')}
                                className="px-6 py-3 bg-neutral-800 text-white rounded-lg font-semibold hover:bg-neutral-700 transition-all text-sm"
                            >
                                Go Back
                            </button>
                            <button
                                onClick={handleEnter}
                                className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg text-sm"
                            >
                                Enter Site
                                <ArrowRightIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}