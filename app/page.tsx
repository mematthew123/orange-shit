'use client';

import { useState, useEffect } from 'react';
import { HeroImpact } from '@/components/HeroImpact';
import IvankaQuoteSection from '@/components/IvankaQuoteSection';
import QuoteSection from '@/components/QuoteSection';
import TestimonyQuoteSection from '@/components/TestimonyQuoteSection';
import EpsteinBirthdayQuoteSection from '@/components/EpsteinBirthdayQuoteSection';
import LineTimeline from '@/components/LineTimeline';
import TrumpEpsteinTies from '@/components/TrumpEpsteinTies';
import { EJeanCarrollSpotlight } from '@/components/EJeanCarrollSpotlight';
import { KatieJohnsonSpotlight } from '@/components/KatieJohnsonSpotlight';
import { PageantAllegationsSpotlight } from '@/components/PageantAllegationsSpotlight';
import { PostAccessHollywoodSpotlight } from '@/components/PostAccessHollywoodSpotlight';
import { ContradictoryQuotes } from '@/components/ContradictoryQuotes';
import { SectionDivider } from '@/components/SectionDivider';
import { CallToAction } from '@/components/CallToAction';
import { InteractiveDataViz } from '@/components/InteractiveDataViz';
import { DocumentedInThePress } from '@/components/DocumentedInThePress';
import { VictimCenteredSection } from '@/components/VictimCenteredSection';
import { ImmersiveEntry } from '@/components/ImmersiveEntry';
import { ReadingProgress } from '@/components/ReadingProgress';

export default function Home() {
    const [hasEntered, setHasEntered] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Check if user has already entered this session
        const entered = sessionStorage.getItem('hasEntered');
        if (entered) {
            setHasEntered(true);
            setShowContent(true);
        }
    }, []);

    const handleEnter = () => {
        sessionStorage.setItem('hasEntered', 'true');
        setHasEntered(true);
        setTimeout(() => setShowContent(true), 500);
    };

    if (!hasEntered) {
        return <ImmersiveEntry onEnter={handleEnter} />;
    }

    if (!showContent) {
        return <div className="fixed inset-0 bg-black" />;
    }

    return (
        <>
            {/* Reading Progress Header */}
            <ReadingProgress />

            {/* OPENING: Set the Stage */}
            <div id="hero">
                <HeroImpact />
            </div>
            <ContradictoryQuotes />
            
            {/* NEW: Interactive Data Visualizations */}
            <div id="data-viz">
                <InteractiveDataViz />
            </div>
            
            {/* CHAPTER 1: The Epstein Connection */}
            <div id="chapter-1">
                <SectionDivider 
                title="The Epstein Files" 
                subtitle="A decades-long friendship with a convicted sex trafficker"
                chapter={1}
                theme="gradient"
                />
                <TrumpEpsteinTies />
                <QuoteSection />
                <EpsteinBirthdayQuoteSection />
                <KatieJohnsonSpotlight />
            </div>
            
            {/* CHAPTER 2: Pattern of Predation */}
            <div id="chapter-2">
                <SectionDivider 
                title="Decades of Allegations" 
                subtitle="Over 25 women have come forward with similar stories"
                chapter={2}
                theme="dark"
                />
                <PostAccessHollywoodSpotlight />
                <PageantAllegationsSpotlight />
            </div>
            
            {/* NEW: Press Coverage Archive */}
            <div id="multimedia">
                <DocumentedInThePress />
            </div>
            
            <div id="timeline">
                <LineTimeline />
            </div>
            
            {/* CHAPTER 3: In Their Own Words */}
            <div id="chapter-3">
                <SectionDivider 
                title="Under Oath" 
                subtitle="Testimony from courtrooms and sworn depositions"
                chapter={3}
                theme="gradient"
                />
                <TestimonyQuoteSection />
                <IvankaQuoteSection />
            </div>
            
            {/* CHAPTER 4: Justice */}
            <div id="chapter-4">
                <SectionDivider 
                title="The Verdict" 
                subtitle="$88.3 million in damages and 34 criminal convictions"
                chapter={4}
                theme="dark"
                />
                <EJeanCarrollSpotlight />
            </div>
            
            {/* NEW: Victim-Centered Section - Honoring Survivors */}
            <div id="survivors">
                <VictimCenteredSection />
            </div>
            
            {/* CLOSING: Call to Action */}
            <div id="action">
                <CallToAction />
            </div>
        </>
    );
}