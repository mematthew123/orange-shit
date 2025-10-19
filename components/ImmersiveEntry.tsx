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
                <div className="h-full flex items-center justify-center p-8">
                    <div className="max-w-2xl w-full animate-fade-in">
                        <div className="text-center mb-12">
                            <div className="inline-flex p-6 bg-red-950/30 rounded-full mb-8">
                                <ShieldExclamationIcon className="h-20 w-20 text-red-500" />
                            </div>
                            <h1 className="text-5xl font-bold text-white mb-6 quote-serif">
                                Content Advisory
                            </h1>
                            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                                This site contains detailed accounts of sexual assault, 
                                harassment, and abuse. The content includes court testimonies, 
                                victim statements, and graphic descriptions.
                            </p>
                        </div>

                        <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-6 mb-8">
                            <div className="flex items-start gap-3">
                                <ExclamationTriangleIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-bold text-white mb-2">Trigger Warning</h3>
                                    <p className="text-sm text-neutral-300">
                                        This content may be triggering for survivors of sexual violence. 
                                        Support is available 24/7 at <span className="font-bold text-white">1-800-656-HOPE (4673)</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => window.history.back()}
                                className="px-8 py-4 bg-neutral-800 text-white rounded-xl font-semibold hover:bg-neutral-700 transition-all flex items-center gap-2"
                            >
                                <XMarkIcon className="h-5 w-5" />
                                Leave Site
                            </button>
                            <button
                                onClick={() => setStage('preview')}
                                className="px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-500 transition-all flex items-center gap-2 hover:scale-105"
                            >
                                I Understand
                                <ArrowRightIcon className="h-5 w-5" />
                            </button>
                        </div>

                        <p className="text-center text-xs text-neutral-500 mt-8">
                            By proceeding, you acknowledge you are 18+ years of age
                        </p>
                    </div>
                </div>
            )}

            {/* Stage 2: Preview */}
            {stage === 'preview' && (
                <div className="h-full flex flex-col items-center justify-center p-8">
                    <div className="max-w-4xl w-full animate-fade-in">
                        <div className="text-center mb-12">
                            <h2 className="text-6xl font-bold text-white mb-6 quote-serif">
                                The Documented Truth
                            </h2>
                            <p className="text-2xl text-neutral-300 leading-relaxed">
                                A comprehensive archive of allegations, testimonies, and legal proceedings
                            </p>
                        </div>

                        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 ${
                            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            {stats.map((stat, idx) => (
                                <div 
                                    key={stat.label}
                                    className="text-center"
                                    style={{ transitionDelay: `${idx * 200}ms` }}
                                >
                                    <p className="text-5xl font-bold text-red-500 mb-2 quote-serif">
                                        {stat.number}
                                    </p>
                                    <p className="text-sm text-neutral-400 uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-neutral-900/50 rounded-xl p-8 mb-8 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">What You'll Find Inside:</h3>
                            <ul className="space-y-3 text-neutral-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary-500 mt-1">•</span>
                                    <span>Court documents and verified testimonies from 25+ women</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary-500 mt-1">•</span>
                                    <span>Timeline of events spanning over 40 years</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary-500 mt-1">•</span>
                                    <span>Audio and video evidence from public records</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary-500 mt-1">•</span>
                                    <span>Resources and support for survivors</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => setStage('warning')}
                                className="px-8 py-4 bg-neutral-800 text-white rounded-xl font-semibold hover:bg-neutral-700 transition-all"
                            >
                                Go Back
                            </button>
                            <button
                                onClick={() => setStage('ready')}
                                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-semibold hover:scale-105 transition-all flex items-center gap-2 shadow-xl"
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
                <div className="h-full flex items-center justify-center p-8">
                    <div className="text-center animate-fade-in">
                        <h2 className="text-7xl font-bold text-white mb-8 quote-serif">
                            Truth Matters
                        </h2>
                        <p className="text-2xl text-neutral-300 mb-12">
                            Every survivor deserves to be heard
                        </p>
                        <button
                            onClick={handleEnter}
                            className="px-12 py-6 bg-white text-black rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-2xl animate-pulse"
                        >
                            Begin
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}