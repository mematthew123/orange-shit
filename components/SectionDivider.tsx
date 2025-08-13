'use client';

import { useEffect, useRef, useState } from 'react';

interface SectionDividerProps {
    title: string;
    subtitle?: string;
    chapter?: number;
    theme?: 'dark' | 'light' | 'gradient';
}

export function SectionDivider({ 
    title, 
    subtitle, 
    chapter,
    theme = 'dark' 
}: SectionDividerProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const dividerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (dividerRef.current) {
            observer.observe(dividerRef.current);
        }

        return () => observer.disconnect();
    }, [isMounted]);

    const getThemeClasses = () => {
        switch (theme) {
            case 'light':
                return 'bg-white text-black';
            case 'gradient':
                return 'bg-gradient-to-r from-red-950 via-black to-red-950 text-white';
            default:
                return 'bg-black text-white';
        }
    };

    return (
        <section 
            ref={dividerRef}
            className={`relative py-32 overflow-hidden ${getThemeClasses()}`}
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            {/* Animated lines */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20 ${
                    isMounted && isVisible ? 'animate-pulse' : ''
                }`} />
                <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20 ${
                    isMounted && isVisible ? 'animate-pulse' : ''
                }`} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`text-center transition-all duration-1000 ${
                    isMounted ? (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8') : ''
                }`}>
                    {chapter && (
                        <div className="mb-8">
                            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-current opacity-30">
                                <span className="text-2xl font-bold">{chapter}</span>
                            </span>
                        </div>
                    )}
                    
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
                        {title.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className={`inline-block transition-all duration-500 ${
                                    isMounted && isVisible 
                                        ? 'opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-4'
                                }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                {word}
                                {index < title.split(' ').length - 1 && ' '}
                            </span>
                        ))}
                    </h2>
                    
                    {subtitle && (
                        <p className={`text-xl md:text-2xl opacity-70 max-w-3xl mx-auto transition-all duration-700 ${
                            isMounted && isVisible 
                                ? 'opacity-70 translate-y-0' 
                                : 'opacity-0 translate-y-4'
                        }`}
                        style={{
                            transitionDelay: '400ms'
                        }}>
                            {subtitle}
                        </p>
                    )}

                    {/* Scroll indicator */}
                    <div className={`mt-16 transition-all duration-1000 ${
                        isMounted && isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        transitionDelay: '800ms'
                    }}>
                        <svg 
                            className="w-6 h-6 mx-auto animate-bounce opacity-50" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}