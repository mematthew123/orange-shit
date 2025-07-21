import Hero from '@/components/Hero';
import IvankaQuoteSection from '@/components/IvankaQuoteSection';
import QuoteSection from '@/components/QuoteSection';
import TestimonyQuoteSection from '@/components/TestimonyQuoteSection';
import EpsteinBirthdayQuoteSection from '@/components/EpsteinBirthdayQuoteSection';
import LineTimeline from '@/components/LineTimeline';

export default function Home() {
    return (
        <>
            <Hero />
            <EpsteinBirthdayQuoteSection />
            <QuoteSection />
            <LineTimeline />
            <IvankaQuoteSection />
            <TestimonyQuoteSection />
        </>
    );
}
