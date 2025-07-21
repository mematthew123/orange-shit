import Hero from '@/components/Hero';
import IvankaQuoteSection from '@/components/IvankaQuoteSection';
import QuoteSection from '@/components/QuoteSection';
import TestimonyQuoteSection from '@/components/TestimonyQuoteSection';
import EpsteinBirthdayQuoteSection from '@/components/EpsteinBirthdayQuoteSection';
import LineTimeline from '@/components/LineTimeline';
import TrumpEpsteinTies from '@/components/TrumpEpsteinTies';

export default function Home() {
    return (
        <>
            <Hero />
            <EpsteinBirthdayQuoteSection />
            <QuoteSection />
            <TrumpEpsteinTies />
            <LineTimeline />
            <IvankaQuoteSection />
            <TestimonyQuoteSection />
        </>
    );
}
