/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState, useRef } from 'react';

export function HeroImpact() {
    const [isMounted, setIsMounted] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

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
                <p className={`text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
                    isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}>
                    From the 1970s to today, over 25 women have accused Donald Trump of sexual misconduct,
                    assault, and rape — including a 13-year-old child.
                </p>
            </div>

            {/* Quote preview at bottom - Parallax reveal */}
            <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-32 pb-12 transition-all duration-100 pointer-events-none"
                style={{
                    transform: `translateY(${Math.max(0, (1 - scrollY) * 20)}px)`,
                    opacity: Math.min(1, scrollY * 2),
                }}
            >
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-3 font-semibold">
                        Next: His Own Words
                    </p>
                    <p className="text-white/60 text-xl md:text-2xl italic font-light quote-serif leading-relaxed">
                        "I don't even wait... when you're a star,<br className="hidden sm:block" /> they let you do it."
                    </p>
                    <p className="text-white/40 text-sm mt-3">
                        — Donald Trump, Access Hollywood, 2005
                    </p>
                </div>
            </div>
        </div>
    );
}