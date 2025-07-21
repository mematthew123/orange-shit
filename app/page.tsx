import Hero from '@/components/Hero';
import IvankaQuoteSection from '@/components/IvankaQuoteSection';
import QuoteSection from '@/components/QuoteSection';
import TestimonyQuoteSection from '@/components/TestimonyQuoteSection';
import Timeline from '@/components/Timeline';
import EpsteinBirthdayQuoteSection from '@/components/EpsteinBirthdayQuoteSection';

export default function Home() {
    return (
        <>
            <Hero />
            <QuoteSection />
            <Timeline />
            <IvankaQuoteSection />
            <TestimonyQuoteSection />
            <EpsteinBirthdayQuoteSection />
        </>
    );
}
