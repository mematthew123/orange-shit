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

export default function Home() {
    return (
        <>
            {/* OPENING: Set the Stage */}
            <HeroImpact />
            <ContradictoryQuotes />
            
            {/* CHAPTER 1: The Epstein Connection */}
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
            
            {/* CHAPTER 2: Pattern of Predation */}
            <SectionDivider 
                title="Decades of Allegations" 
                subtitle="Over 25 women have come forward with similar stories"
                chapter={2}
                theme="dark"
            />
            <PostAccessHollywoodSpotlight />
            <PageantAllegationsSpotlight />
            <LineTimeline />
            
            {/* CHAPTER 3: In Their Own Words */}
            <SectionDivider 
                title="Under Oath" 
                subtitle="Testimony from courtrooms and sworn depositions"
                chapter={3}
                theme="gradient"
            />
            <TestimonyQuoteSection />
            <IvankaQuoteSection />
            
            {/* CHAPTER 4: Justice */}
            <SectionDivider 
                title="The Verdict" 
                subtitle="$88.3 million in damages and 34 criminal convictions"
                chapter={4}
                theme="dark"
            />
            <EJeanCarrollSpotlight />
            
            {/* CLOSING: Call to Action */}
            <CallToAction />
        </>
    );
}