/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import {
    HeartIcon,
    PhoneIcon,
    HandRaisedIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    ChatBubbleLeftRightIcon,
    InformationCircleIcon,
    ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export function VictimCenteredSection() {
    const [isMounted, setIsMounted] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(0);

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setSelectedTestimonial(prev => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        {
            name: 'E. Jean Carroll',
            role: 'Journalist & Author',
            quote: "I was a cheerful person, it left me unable to ever have a romantic life again. It affected me in every way.",
            outcome: 'Won $88.3 million verdict',
            year: '2023-2024',
            courage: 'Pursued justice despite death threats',
        },
        {
            name: 'Jessica Leeds',
            role: 'Former Businesswoman',
            quote: "He was like an octopus. His hands were everywhere. It was an assault.",
            outcome: 'Came forward after Access Hollywood tape',
            year: '2016',
            courage: 'First to speak publicly after tape release',
        },
        {
            name: 'Natasha Stoynoff',
            role: 'People Magazine Writer',
            quote: "We walked into that room alone, and Trump shut the door behind us. I turned around, and within seconds, he was pushing me against the wall.",
            outcome: 'Six witnesses corroborated her account',
            year: '2016',
            courage: 'Risked career to share truth',
        },
        {
            name: 'Summer Zervos',
            role: 'Former Apprentice Contestant',
            quote: "I want to be able to live with myself... I need to share my truth.",
            outcome: 'Filed defamation lawsuit',
            year: '2016',
            courage: 'Fought back against public denial',
        },
        {
            name: 'Rachel Crooks',
            role: 'Former Receptionist',
            quote: "It was so inappropriate. I was so upset that he thought I was so insignificant that he could do that.",
            outcome: 'Ran for state legislature to create change',
            year: '2016',
            courage: 'Turned trauma into political action',
        },
    ];

    const supportResources = [
        {
            name: 'RAINN National Sexual Assault Hotline',
            phone: '1-800-656-HOPE (4673)',
            description: '24/7 confidential support for survivors',
            icon: PhoneIcon,
            urgent: true,
        },
        {
            name: 'National Domestic Violence Hotline',
            phone: '1-800-799-7233',
            description: 'Confidential support in over 200 languages',
            icon: ShieldCheckIcon,
            urgent: true,
        },
        {
            name: 'Crisis Text Line',
            phone: 'Text HOME to 741741',
            description: 'Free, 24/7 crisis support via text',
            icon: ChatBubbleLeftRightIcon,
            urgent: true,
        },
        {
            name: 'NSVRC (National Sexual Violence Resource Center)',
            phone: '717-909-0710',
            description: 'Resources, research, and advocacy',
            icon: InformationCircleIcon,
        },
        {
            name: "Time's Up Legal Defense Fund",
            phone: 'timesupfoundation.org',
            description: 'Legal support for workplace harassment',
            icon: UserGroupIcon,
        },
        {
            name: 'Safe Horizon',
            phone: '1-800-621-HOPE',
            description: "America's largest victim services organization",
            icon: HeartIcon,
        },
    ];

    const howToHelp = [
        {
            title: 'Believe Survivors',
            description: 'Listen without judgment. Your support matters more than you know.',
            icon: HeartIcon,
        },
        {
            title: 'Donate to Support Organizations',
            description: 'Fund critical services for survivors and prevention programs.',
            icon: HandRaisedIcon,
        },
        {
            title: 'Advocate for Change',
            description: 'Support legislation that protects survivors and holds perpetrators accountable.',
            icon: ShieldCheckIcon,
        },
        {
            title: 'Share Resources',
            description: 'Help others find support by sharing hotlines and resources.',
            icon: UserGroupIcon,
        },
    ];

    return (
        <div className="bg-gradient-to-b from-black via-neutral-950 to-black py-24 sm:py-32">
            <Container>
                <FadeIn>
                    <div className="mx-auto max-w-6xl">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <HeartIcon className="h-8 w-8 text-red-500" />
                                <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl quote-serif">
                                    Honoring Their Courage
                                </h2>
                                <HeartIcon className="h-8 w-8 text-red-500" />
                            </div>
                            <p className="mt-4 text-xl text-neutral-300 max-w-3xl mx-auto">
                                Behind every allegation is a person who found the strength to speak their truth 
                                despite immense personal cost
                            </p>
                        </div>

                        {/* Testimonials Carousel */}
                        <div className={`mb-16 transition-all duration-700 ${
                            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            <h3 className="text-2xl font-bold text-white mb-8 text-center quote-serif">In Their Own Words</h3>
                            <div className="bg-gradient-to-r from-red-950/30 via-red-950/50 to-red-950/30 backdrop-blur rounded-2xl border border-red-500/20 p-10">
                                <div className="max-w-4xl mx-auto">
                                    {testimonials.map((testimonial, idx) => (
                                        <div
                                            key={idx}
                                            className={`transition-all duration-500 ${
                                                selectedTestimonial === idx
                                                    ? 'opacity-100 translate-y-0'
                                                    : 'opacity-0 translate-y-4 absolute'
                                            }`}
                                            style={{ display: selectedTestimonial === idx ? 'block' : 'none' }}
                                        >
                                            <blockquote className="text-2xl text-white italic quote-serif leading-relaxed mb-6">
                                                "{testimonial.quote}"
                                            </blockquote>
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <p className="text-lg font-bold text-white">{testimonial.name}</p>
                                                    <p className="text-sm text-neutral-400">{testimonial.role}</p>
                                                    <p className="text-sm text-red-400 mt-1">{testimonial.year}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-semibold text-green-400">{testimonial.outcome}</p>
                                                    <p className="text-xs text-neutral-500 mt-1">{testimonial.courage}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Progress dots */}
                                <div className="flex justify-center gap-2 mt-8">
                                    {testimonials.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedTestimonial(idx)}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                selectedTestimonial === idx
                                                    ? 'w-8 bg-red-500'
                                                    : 'bg-red-900 hover:bg-red-700'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Statistics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                            <div className="text-center">
                                <p className="text-5xl font-bold text-red-500 quote-serif">25+</p>
                                <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wider">Women Who Spoke Up</p>
                            </div>
                            <div className="text-center">
                                <p className="text-5xl font-bold text-amber-500 quote-serif">40+</p>
                                <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wider">Years of Allegations</p>
                            </div>
                            <div className="text-center">
                                <p className="text-5xl font-bold text-green-500 quote-serif">2</p>
                                <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wider">Successful Verdicts</p>
                            </div>
                            <div className="text-center">
                                <p className="text-5xl font-bold text-primary-500 quote-serif">∞</p>
                                <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wider">Courage Required</p>
                            </div>
                        </div>

                        {/* Support Resources */}
                        <div className="mb-16">
                            <h3 className="text-3xl font-bold text-white mb-8 text-center quote-serif">Get Help Now</h3>
                            <div className="bg-gradient-to-r from-green-950/30 to-green-950/10 backdrop-blur rounded-2xl border-2 border-green-500/30 p-2">
                                <FadeInStagger>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                                        {supportResources.map((resource) => {
                                            const Icon = resource.icon;
                                            return (
                                                <FadeIn key={resource.name}>
                                                    <div className={`bg-black/50 rounded-xl p-6 border ${
                                                        resource.urgent 
                                                            ? 'border-green-500/50 hover:border-green-400' 
                                                            : 'border-white/10 hover:border-white/30'
                                                    } transition-all hover:scale-105`}>
                                                        <div className="flex items-start gap-4">
                                                            <Icon className={`h-8 w-8 flex-shrink-0 ${
                                                                resource.urgent ? 'text-green-500' : 'text-neutral-400'
                                                            }`} />
                                                            <div>
                                                                <h4 className="font-bold text-white mb-1">{resource.name}</h4>
                                                                <p className={`text-lg font-bold mb-2 ${
                                                                    resource.urgent ? 'text-green-400' : 'text-primary-400'
                                                                }`}>
                                                                    {resource.phone}
                                                                </p>
                                                                <p className="text-sm text-neutral-400">{resource.description}</p>
                                                                {resource.urgent && (
                                                                    <span className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">
                                                                        24/7 SUPPORT
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </FadeIn>
                                            );
                                        })}
                                    </div>
                                </FadeInStagger>
                            </div>
                            <div className="mt-4 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
                                <div className="flex items-start gap-3">
                                    <ExclamationTriangleIcon className="h-6 w-6 text-amber-500 flex-shrink-0" />
                                    <p className="text-sm text-neutral-300">
                                        <span className="font-bold text-white">Remember:</span> You are not alone. 
                                        It's not your fault. Help is available. Your story matters.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* How to Help */}
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-8 text-center quote-serif">How You Can Help</h3>
                            <FadeInStagger>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {howToHelp.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <FadeIn key={item.title}>
                                                <div className="bg-neutral-900/50 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-primary-500/50 transition-all hover:scale-105">
                                                    <Icon className="h-10 w-10 text-primary-500 mb-4" />
                                                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                                    <p className="text-sm text-neutral-400">{item.description}</p>
                                                </div>
                                            </FadeIn>
                                        );
                                    })}
                                </div>
                            </FadeInStagger>
                        </div>

                        {/* Closing message */}
                        <div className="mt-16 text-center">
                            <div className="inline-block p-8 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl">
                                <p className="text-2xl text-white font-bold quote-serif mb-4">
                                    Every Survivor Deserves Justice
                                </p>
                                <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                                    To all survivors: Your courage inspires change. Your voice matters. 
                                    We see you, we hear you, and we stand with you.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
}