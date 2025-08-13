/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import {
    PlayIcon,
    DocumentTextIcon,
    PhotoIcon,
    SpeakerWaveIcon,
    FilmIcon,
    NewspaperIcon,
    ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export function MultimediaEvidence() {
    const [selectedMedia, setSelectedMedia] = useState<'video' | 'audio' | 'documents' | 'photos'>('video');
    const [isMounted, setIsMounted] = useState(false);
    const [playingVideo, setPlayingVideo] = useState<string | null>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const videos = [
        {
            id: 'access-hollywood',
            title: 'Access Hollywood Tape (2005)',
            description: 'The infamous recording where Trump brags about sexual assault',
            quote: "When you're a star, they let you do it. You can do anything... Grab them by the pussy.",
            duration: '3:02',
            source: 'NBC News',
            impact: 'Led to 15+ women coming forward',
            warning: true,
        },
        {
            id: 'mar-a-lago',
            title: 'Trump & Epstein at Mar-a-Lago (1992)',
            description: 'NBC footage showing Trump and Epstein partying together',
            quote: "Trump is seen whispering in Epstein's ear and laughing",
            duration: '1:45',
            source: 'NBC Archives',
            impact: 'Proves close relationship',
        },
        {
            id: 'deposition',
            title: 'E. Jean Carroll Deposition (2022)',
            description: "Trump's video deposition played at trial",
            quote: "She's not my type",
            duration: '48:00',
            source: 'Federal Court',
            impact: 'Used as evidence in $88.3M verdict',
        },
    ];

    const audio = [
        {
            id: 'howard-stern',
            title: 'Howard Stern Interview (2005)',
            description: 'Trump admits to walking into pageant dressing rooms',
            quote: "I'm allowed to go in because I'm the owner... and therefore I'm inspecting it",
            duration: '2:34',
            source: 'Howard Stern Show',
        },
        {
            id: 'billy-bush',
            title: 'Full Access Hollywood Audio',
            description: 'Complete unedited recording with Billy Bush',
            duration: '3:02',
            source: 'NBC/Washington Post',
        },
    ];

    const documents = [
        {
            id: 'katie-johnson',
            title: 'Katie Johnson Federal Lawsuit',
            pages: 12,
            filed: 'April 2016',
            court: 'Southern District of New York',
            status: 'Withdrawn Nov 2016',
            keyAllegation: 'Rape of 13-year-old at Epstein parties',
        },
        {
            id: 'carroll-verdict',
            title: 'E. Jean Carroll Verdict Form',
            pages: 8,
            filed: 'May 9, 2023',
            court: 'Manhattan Federal Court',
            status: 'Verdict: Liable',
            keyAllegation: 'Sexual abuse and defamation - $5 million',
        },
        {
            id: 'epstein-logs',
            title: "Epstein's Flight Logs",
            pages: 73,
            filed: 'Released 2019',
            court: 'Evidence',
            status: 'Public Record',
            keyAllegation: 'Trump listed on 7+ flights 1993-1997',
        },
        {
            id: 'pageant-affidavits',
            title: 'Miss Teen USA Affidavits',
            pages: 15,
            filed: '2016',
            court: 'Media Investigation',
            status: 'Witness Statements',
            keyAllegation: 'Multiple contestants confirm dressing room entries',
        },
    ];

    const photos = [
        {
            id: 'epstein-maxwell',
            title: 'Trump with Epstein & Maxwell',
            year: '2000',
            location: 'Mar-a-Lago',
            verified: true,
        },
        {
            id: 'party-photos',
            title: 'Multiple Party Photos Together',
            year: '1992-2000',
            location: 'Various NYC/Palm Beach',
            verified: true,
        },
        {
            id: 'carroll-photo',
            title: 'Trump with E. Jean Carroll',
            year: '1987',
            location: 'NBC party',
            verified: true,
        },
    ];

    return (
        <div className="bg-gradient-to-b from-neutral-950 to-black py-24 sm:py-32">
            <Container>
                <FadeIn>
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl quote-serif">
                                Evidence Archive
                            </h2>
                            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-neutral-500">
                                <NewspaperIcon className="h-4 w-4 text-green-500" />
                                <span className="quote-attribution uppercase tracking-wider">
                                    Verified Media & Court Documents
                                </span>
                            </div>
                            <p className="mt-4 text-xl text-neutral-300">
                                Video, audio, and documentary evidence from public records
                            </p>
                        </div>

                        {/* Media selector */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <button
                                onClick={() => setSelectedMedia('video')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                                    selectedMedia === 'video'
                                        ? 'bg-red-600 text-white shadow-xl scale-105'
                                        : 'bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800/50'
                                }`}
                            >
                                <FilmIcon className="inline-block h-5 w-5 mr-2" />
                                Video Evidence
                            </button>
                            <button
                                onClick={() => setSelectedMedia('audio')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                                    selectedMedia === 'audio'
                                        ? 'bg-amber-600 text-white shadow-xl scale-105'
                                        : 'bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800/50'
                                }`}
                            >
                                <SpeakerWaveIcon className="inline-block h-5 w-5 mr-2" />
                                Audio Recordings
                            </button>
                            <button
                                onClick={() => setSelectedMedia('documents')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                                    selectedMedia === 'documents'
                                        ? 'bg-blue-600 text-white shadow-xl scale-105'
                                        : 'bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800/50'
                                }`}
                            >
                                <DocumentTextIcon className="inline-block h-5 w-5 mr-2" />
                                Court Documents
                            </button>
                            <button
                                onClick={() => setSelectedMedia('photos')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                                    selectedMedia === 'photos'
                                        ? 'bg-green-600 text-white shadow-xl scale-105'
                                        : 'bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800/50'
                                }`}
                            >
                                <PhotoIcon className="inline-block h-5 w-5 mr-2" />
                                Photo Evidence
                            </button>
                        </div>

                        {/* Video Section */}
                        {selectedMedia === 'video' && (
                            <FadeInStagger>
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {videos.map((video) => (
                                        <FadeIn key={video.id}>
                                            <div className="bg-neutral-900/50 backdrop-blur rounded-xl border border-white/10 overflow-hidden hover:border-red-500/50 transition-all duration-300">
                                                <div className="aspect-video bg-black relative group cursor-pointer"
                                                    onClick={() => setPlayingVideo(video.id)}
                                                >
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                            <PlayIcon className="h-10 w-10 text-white ml-1" />
                                                        </div>
                                                    </div>
                                                    {video.warning && (
                                                        <div className="absolute top-4 right-4">
                                                            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                                                                <ExclamationTriangleIcon className="inline h-3 w-3 mr-1" />
                                                                GRAPHIC
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="absolute bottom-4 left-4">
                                                        <span className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                                                            {video.duration}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="text-lg font-bold text-white mb-2">{video.title}</h3>
                                                    <p className="text-sm text-neutral-400 mb-3">{video.description}</p>
                                                    <blockquote className="text-sm italic text-neutral-300 border-l-2 border-red-500 pl-3 mb-3">
                                                        "{video.quote}"
                                                    </blockquote>
                                                    <div className="flex items-center justify-between text-xs text-neutral-500">
                                                        <span>{video.source}</span>
                                                        <span className="text-red-400">{video.impact}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </FadeInStagger>
                        )}

                        {/* Audio Section */}
                        {selectedMedia === 'audio' && (
                            <FadeInStagger>
                                <div className="space-y-6">
                                    {audio.map((item) => (
                                        <FadeIn key={item.id}>
                                            <div className="bg-neutral-900/50 backdrop-blur rounded-xl border border-white/10 p-8 hover:border-amber-500/50 transition-all">
                                                <div className="flex items-start gap-6">
                                                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <SpeakerWaveIcon className="h-8 w-8 text-white" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                                        <p className="text-neutral-400 mb-3">{item.description}</p>
                                                        <blockquote className="text-lg italic text-white border-l-4 border-amber-500 pl-4 mb-4">
                                                            "{item.quote}"
                                                        </blockquote>
                                                        <div className="flex items-center gap-4 text-sm text-neutral-500">
                                                            <span>{item.duration}</span>
                                                            <span>•</span>
                                                            <span>{item.source}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </FadeInStagger>
                        )}

                        {/* Documents Section */}
                        {selectedMedia === 'documents' && (
                            <FadeInStagger>
                                <div className="grid gap-6 md:grid-cols-2">
                                    {documents.map((doc) => (
                                        <FadeIn key={doc.id}>
                                            <div className="bg-neutral-900/50 backdrop-blur rounded-xl border border-white/10 p-6 hover:border-blue-500/50 transition-all">
                                                <div className="flex items-start gap-4">
                                                    <DocumentTextIcon className="h-10 w-10 text-blue-500 flex-shrink-0" />
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-bold text-white mb-2">{doc.title}</h3>
                                                        <div className="space-y-2 mb-4">
                                                            <div className="flex items-center gap-2 text-sm">
                                                                <span className="text-neutral-500">Pages:</span>
                                                                <span className="text-white font-semibold">{doc.pages}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-sm">
                                                                <span className="text-neutral-500">Filed:</span>
                                                                <span className="text-white font-semibold">{doc.filed}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-sm">
                                                                <span className="text-neutral-500">Court:</span>
                                                                <span className="text-white font-semibold">{doc.court}</span>
                                                            </div>
                                                        </div>
                                                        <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                                                            <p className="text-sm text-white">
                                                                <span className="font-bold">Key:</span> {doc.keyAllegation}
                                                            </p>
                                                        </div>
                                                        <div className="mt-4">
                                                            <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                                                                doc.status.includes('Liable') || doc.status.includes('Verdict') 
                                                                    ? 'bg-green-500/20 text-green-400'
                                                                    : doc.status.includes('Withdrawn')
                                                                    ? 'bg-red-500/20 text-red-400'
                                                                    : 'bg-blue-500/20 text-blue-400'
                                                            }`}>
                                                                {doc.status}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </FadeInStagger>
                        )}

                        {/* Photos Section */}
                        {selectedMedia === 'photos' && (
                            <FadeInStagger>
                                <div className="grid gap-6 md:grid-cols-3">
                                    {photos.map((photo) => (
                                        <FadeIn key={photo.id}>
                                            <div className="bg-neutral-900/50 backdrop-blur rounded-xl border border-white/10 overflow-hidden hover:border-green-500/50 transition-all">
                                                <div className="aspect-square bg-black/50 relative">
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <PhotoIcon className="h-20 w-20 text-neutral-700" />
                                                    </div>
                                                    {photo.verified && (
                                                        <div className="absolute top-4 right-4">
                                                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                                                                VERIFIED
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="text-base font-bold text-white mb-2">{photo.title}</h3>
                                                    <div className="flex items-center justify-between text-sm text-neutral-400">
                                                        <span>{photo.year}</span>
                                                        <span>{photo.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </FadeInStagger>
                        )}

                        {/* Disclaimer */}
                        <div className="mt-12 p-6 bg-amber-500/10 rounded-xl border border-amber-500/30">
                            <p className="text-sm text-neutral-300">
                                <span className="font-bold text-white">Legal Note:</span> All media shown here is from public records, 
                                court filings, and journalistic sources. Videos and audio are representative - actual media playback 
                                would require licensing agreements with copyright holders.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
}