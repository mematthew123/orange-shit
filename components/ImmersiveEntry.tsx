/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import { 
    ExclamationTriangleIcon, 
    ShieldExclamationIcon,
    ArrowRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';

export function ImmersiveEntry({ onEnter }: { onEnter: () => void }) {
    const [stage, setStage] = useState<'warning' | 'preview' | 'ready'>('warning');
    const [isExiting, setIsExiting] = useState(false);
    const [statsVisible, setStatsVisible] = useState(false);

    useEffect(() => {
        if (stage === 'preview') {
            setTimeout(() => setStatsVisible(true), 500);
        }
    }, [stage]);

    const handleEnter = () => {
        setIsExiting(true);
        setTimeout(() => {
            onEnter();
        }, 500);
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
                        <div className="text-center mb-8 sm:mb-12">
                            <div className="inline-flex p-4 sm:p-6 bg-red-950/30 rounded-full mb-6 sm:mb-8">
                                <ShieldExclamationIcon className="h-12 w-12 sm:h-16 md:h-20 sm:w-16 md:w-20 text-red-500" />
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 quote-serif">
                                Content Advisory
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed mb-6 sm:mb-8 px-2">
                                This site contains detailed accounts of sexual assault,
                                harassment, and abuse. The content includes court testimonies,
                                victim statements, and graphic descriptions.
                            </p>
                        </div>

                        <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <ExclamationTriangleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-white mb-2 text-sm sm:text-base">Trigger Warning</h3>
                                    <p className="text-xs sm:text-sm text-neutral-300">
                                        This content may be triggering for survivors of sexual violence.
                                        Support is available 24/7 at <span className="font-bold text-white">1-800-656-HOPE (4673)</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <button
                                onClick={() => window.history.back()}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-neutral-800 text-white rounded-xl font-semibold hover:bg-neutral-700 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                            >
                                <XMarkIcon className="h-5 w-5" />
                                Leave Site
                            </button>
                            <button
                                onClick={() => setStage('preview')}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-500 transition-all flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base"
                            >
                                I Understand
                                <ArrowRightIcon className="h-5 w-5" />
                            </button>
                        </div>

                        <p className="text-center text-xs text-neutral-500 mt-6 sm:mt-8">
                            By proceeding, you acknowledge you are 18+ years of age
                        </p>
                    </div>
                </div>
            )}

            {/* Stage 2: Preview */}
            {stage === 'preview' && (
                <div className="h-full flex flex-col items-center justify-center p-4 sm:p-8 overflow-y-auto">
                    <div className="max-w-4xl w-full animate-fade-in py-8 sm:py-0">
                        <div className="text-center mb-8 sm:mb-12">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 quote-serif px-2">
                                Donald Trump & Jeffrey Epstein
                            </h2>
                            <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 leading-relaxed px-2">
                                Friendship & Allegations Spanning Decades
                            </p>
                        </div>

                        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 transition-all duration-1000 ${
                            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            {stats.map((stat, idx) => (
                                <div
                                    key={stat.label}
                                    className="text-center"
                                    style={{ transitionDelay: `${idx * 200}ms` }}
                                >
                                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-1 sm:mb-2 quote-serif">
                                        {stat.number}
                                    </p>
                                    <p className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider px-1">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-neutral-900/50 rounded-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-white/10">
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">What You'll Find Inside:</h3>
                            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-neutral-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                                    <span>Court documents and verified testimonies from 25+ women</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                                    <span>Timeline of events spanning over 40 years</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                                    <span>Audio and video evidence from public records</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                                    <span>Resources and support for survivors</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <button
                                onClick={() => setStage('warning')}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-neutral-800 text-white rounded-xl font-semibold hover:bg-neutral-700 transition-all text-sm sm:text-base"
                            >
                                Go Back
                            </button>
                            <button
                                onClick={() => setStage('ready')}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-xl text-sm sm:text-base"
                            >
                                Enter Site
                                <ArrowRightIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Stage 3: Ready */}
            {stage === 'ready' && (
                <div className="h-full flex items-center justify-center p-4 sm:p-8">
                    <div className="text-center animate-fade-in px-4">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 quote-serif">
                            Truth Matters
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 mb-8 sm:mb-12">
                            Every survivor deserves to be heard
                        </p>
                        <button
                            onClick={handleEnter}
                            className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-white text-black rounded-xl font-bold text-lg sm:text-xl hover:scale-105 transition-all shadow-2xl animate-pulse"
                        >
                            Begin
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}