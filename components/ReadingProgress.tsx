/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface Chapter {
    id: string;
    title: string;
    element?: HTMLElement | null;
}

export function ReadingProgress() {
    const [progress, setProgress] = useState(0);
    const [currentChapter, setCurrentChapter] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);
    const chapterElementsRef = useRef<(HTMLElement | null)[]>([]);

    const chapters: Chapter[] = [
        { id: 'hero', title: 'Opening' },
        { id: 'data-viz', title: 'The Data' },
        { id: 'chapter-1', title: 'The Epstein Files' },
        { id: 'chapter-2', title: 'Decades of Allegations' },
        { id: 'multimedia', title: 'Press Coverage' },
        { id: 'timeline', title: 'Timeline' },
        { id: 'chapter-3', title: 'Under Oath' },
        { id: 'chapter-4', title: 'The Verdict' },
        { id: 'survivors', title: 'Honoring Survivors' },
        { id: 'action', title: 'Take Action' },
    ];

    useEffect(() => {
        // Find and store chapter elements in ref
        chapterElementsRef.current = chapters.map(chapter =>
            document.getElementById(chapter.id)
        );

        const updateProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            const newProgress = (currentScroll / scrollHeight) * 100;
            setProgress(newProgress);

            // Update current chapter
            for (let i = chapterElementsRef.current.length - 1; i >= 0; i--) {
                const element = chapterElementsRef.current[i];
                if (element && currentScroll >= element.offsetTop - 100) {
                    setCurrentChapter(i);
                    break;
                }
            }

            // Show/hide based on scroll direction
            const scrollY = window.scrollY;

            // Show header after scrolling down a bit
            if (scrollY > 100) {
                // Hide when scrolling down, show when scrolling up
                if (scrollY > lastScrollY.current && scrollY > 300) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            } else {
                setIsVisible(false);
            }

            lastScrollY.current = scrollY;
            ticking.current = false;
        };

        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(updateProgress);
                ticking.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        updateProgress();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleChapterClick = (index: number) => {
        const chapter = chapters[index];
        const element = document.getElementById(chapter.id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setShowMenu(false);
        }
    };

    return (
        <>
            {/* Progress Bar - Always visible */}
            <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-neutral-900/80 backdrop-blur-sm">
                <div
                    className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Header Bar - Shows/hides on scroll */}
            <div className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}>
                <div className="mx-auto max-w-7xl px-4">
                    <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl mt-2 shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3">
                            {/* Chapter Info */}
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                                <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider whitespace-nowrap">
                                    Chapter {currentChapter + 1}
                                </span>
                                <div className="h-4 w-px bg-white/20" />
                                <span className="text-sm text-white font-medium truncate">
                                    {chapters[currentChapter]?.title}
                                </span>
                            </div>

                            {/* Progress Percentage */}
                            <div className="hidden sm:flex items-center gap-2 mx-4">
                                <div className="h-1.5 w-24 bg-neutral-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-red-500 transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                <span className="text-xs text-neutral-400 font-mono tabular-nums w-10 text-right">
                                    {Math.round(progress)}%
                                </span>
                            </div>

                            {/* Menu Button */}
                            <button
                                onClick={() => setShowMenu(!showMenu)}
                                className="p-2 hover:bg-white/10 rounded-lg transition-all shrink-0"
                                aria-label="Toggle chapter menu"
                            >
                                {showMenu ? (
                                    <XMarkIcon className="h-5 w-5 text-white" />
                                ) : (
                                    <Bars3Icon className="h-5 w-5 text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chapter Menu Dropdown */}
            {showMenu && (
                <div className={`fixed top-20 right-4 z-40 transition-all duration-300 ${
                    showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                    <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden min-w-[280px]">
                        <div className="p-2 border-b border-white/10 bg-white/5">
                            <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider px-3 py-2">
                                Jump to Chapter
                            </p>
                        </div>
                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {chapters.map((chapter, idx) => (
                                <button
                                    key={chapter.id}
                                    onClick={() => handleChapterClick(idx)}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-all group ${
                                        currentChapter === idx
                                            ? 'bg-red-600 text-white'
                                            : 'hover:bg-white/10 text-neutral-300'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`text-xs font-mono w-6 ${
                                            currentChapter === idx ? 'text-white/80' : 'text-neutral-500'
                                        }`}>
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-sm font-medium flex-1">
                                            {chapter.title}
                                        </span>
                                        {currentChapter === idx && (
                                            <span className="h-2 w-2 bg-white rounded-full animate-pulse" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Backdrop for menu */}
            {showMenu && (
                <div
                    className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
                    onClick={() => setShowMenu(false)}
                />
            )}
        </>
    );
}
