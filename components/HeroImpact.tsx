/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState, useRef } from 'react';

export function HeroImpact() {
    const [isMounted, setIsMounted] = useState(false);
    const [currentStatIndex, setCurrentStatIndex] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;
        const interval = setInterval(() => {
            setCurrentStatIndex((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, [isMounted]);

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                const scrollProgress = Math.max(0, -rect.top / (rect.height * 0.8));
                setScrollY(scrollProgress);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const stats = [
        { number: '25+', label: 'Women Have Accused Trump', color: 'text-red-500' },
        { number: '13', label: 'Years Old - Youngest Alleged Victim', color: 'text-amber-500' },
        { number: '$88.3M', label: 'Jury Award to E. Jean Carroll', color: 'text-green-500' },
        { number: '34', label: 'Criminal Convictions', color: 'text-purple-500' },
    ];

    const scrollToContent = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Animated background gradient - Parallax Layer 1 (slowest) */}
            <div
                className="absolute inset-0 transition-transform duration-100"
                style={{
                    transform: `translateY(${scrollY * 50}px) scale(${1 + scrollY * 0.1})`,
                    opacity: 1 - scrollY * 0.3,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-red-950/20 animate-gradient" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
            </div>

            {/* Grid pattern overlay - Parallax Layer 2 (medium speed) */}
            <div
                className="absolute inset-0 opacity-10 transition-transform duration-100"
                style={{
                    transform: `translateY(${scrollY * 80}px)`,
                    opacity: 0.1 - scrollY * 0.1,
                }}
            >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            {/* Content - Parallax Layer 3 (fastest, stays in place mostly) */}
            <div
                className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center transition-all duration-100"
                style={{
                    transform: `translateY(${scrollY * 30}px)`,
                    opacity: 1 - scrollY * 0.8,
                }}
            >
                {/* Subtitle */}
                <div className={`mb-8 transition-all duration-1000 ${
                    isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
                        <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
                            A Pattern of Predation
                        </span>
                    </span>
                </div>

                {/* Main headline */}
                <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 transition-all duration-1000 ${
                    isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}>
                    <span className="block text-white">
                        Decades of
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                        Sexual Assault
                    </span>
                    <span className="block text-white">
                        Allegations
                    </span>
                </h1>

                {/* Subheadline */}
                <p className={`text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 ${
                    isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}>
                    From the 1970s to today, over 25 women have accused Donald Trump of sexual misconduct, 
                    assault, and rape — including a 13-year-old child.
                </p>

                {/* Rotating statistics */}
                <div className={`mb-16 h-32 flex items-center justify-center transition-all duration-1000 ${
                    isMounted ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}>
                    <div className="relative">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                                    currentStatIndex === index 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-4'
                                }`}
                            >
                                <div className={`text-6xl md:text-7xl font-bold ${stat.color} mb-2`}>
                                    {stat.number}
                                </div>
                                <div className="text-lg md:text-xl text-white font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 ${
                    isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '800ms' }}>
                    <button 
                        onClick={scrollToContent}
                        className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-all transform hover:scale-105"
                    >
                        View the Evidence
                    </button>
                    <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all">
                        Read Court Documents
                    </button>
                </div>

                {/* Key facts */}
                <div className={`grid md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 ${
                    isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '1000ms' }}>
                    <div className="text-center">
                        <div className="text-4xl mb-2">⚖️</div>
                        <h3 className="text-white font-semibold mb-1">Found Liable</h3>
                        <p className="text-neutral-400 text-sm">
                            Jury found Trump liable for sexual abuse
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-2">🔒</div>
                        <h3 className="text-white font-semibold mb-1">34 Convictions</h3>
                        <p className="text-neutral-400 text-sm">
                            Criminal convictions for falsifying records
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl mb-2">📄</div>
                        <h3 className="text-white font-semibold mb-1">Court Testimony</h3>
                        <p className="text-neutral-400 text-sm">
                            Sworn depositions and witness accounts
                        </p>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                    isMounted ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '1200ms' }}>
                    <button 
                        onClick={scrollToContent}
                        className="animate-bounce"
                        aria-label="Scroll to content"
                    >
                        <svg className="w-8 h-8 text-white/50 hover:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Quote preview at bottom - Parallax reveal */}
            <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-20 pb-20 transition-all duration-100"
                style={{
                    transform: `translateY(${Math.max(0, (1 - scrollY) * 20)}px)`,
                    opacity: Math.min(1, scrollY * 2),
                }}
            >
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-white/60 text-sm uppercase tracking-wider mb-2">Coming Up</p>
                    <p className="text-white/40 text-lg italic">
                        "I don't even wait... when you're a star, they let you do it."
                    </p>
                </div>
            </div>
        </div>
    );
}