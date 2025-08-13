import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { CheckCircleIcon, CurrencyDollarIcon, ScaleIcon } from '@heroicons/react/24/outline';

export function EJeanCarrollSpotlight() {
    const verdicts = [
        {
            date: 'May 9, 2023',
            court: 'Manhattan Federal Court',
            findings: 'Liable for sexual abuse and defamation',
            amount: '$5 million',
            icon: ScaleIcon,
        },
        {
            date: 'January 26, 2024',
            court: 'Second defamation case',
            findings: 'Additional defamation damages',
            amount: '$83.3 million',
            icon: CurrencyDollarIcon,
        },
    ];

    const timeline = [
        { year: '1995-1996', event: 'Alleged assault at Bergdorf Goodman dressing room' },
        { year: 'June 2019', event: 'Carroll first publicly discloses allegation in New York magazine' },
        { year: 'Nov 2019', event: 'Files defamation lawsuit against Trump' },
        { year: 'Nov 2022', event: 'Files battery claim under Adult Survivors Act' },
        { year: 'May 2023', event: 'Jury finds Trump liable for sexual abuse and defamation' },
        { year: 'Jan 2024', event: 'Second jury awards additional $83.3M for defamation' },
        { year: 'Dec 2024', event: '$5 million judgment upheld on appeal' },
    ];

    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-neutral-950 to-black py-24 sm:py-32">
            <Container>
                <FadeIn>
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                E. Jean Carroll Case
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-neutral-400">
                                The only successful legal case resulting in verdicts against Trump
                            </p>
                        </div>

                        <div className="mt-16">
                            <div className="rounded-2xl bg-neutral-900/50 backdrop-blur p-8 shadow-lg ring-1 ring-white/10">
                                <div className="flex items-center gap-x-3 mb-6">
                                    <CheckCircleIcon className="h-8 w-8 text-green-500" />
                                    <h3 className="text-2xl font-bold text-white">
                                        Total Damages: $88.3 Million
                                    </h3>
                                </div>

                                <blockquote className="border-l-4 border-green-500 pl-6 mb-8">
                                    <p className="text-lg text-neutral-300 italic">
                                        {"I was a cheerful person, it left me unable to ever have a romantic life again... "}
                                        {"I was attacked by the sitting President of the United States."}
                                    </p>
                                    <footer className="mt-3 text-sm text-neutral-400">
                                        — E. Jean Carroll, testimony in court
                                    </footer>
                                </blockquote>

                                <FadeInStagger>
                                    <div className="space-y-4">
                                        {verdicts.map((verdict) => (
                                            <FadeIn key={verdict.date}>
                                                <div className="flex items-start gap-x-4 rounded-lg bg-black/50 p-4">
                                                    <verdict.icon className="mt-1 h-6 w-6 text-green-500 flex-shrink-0" />
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <p className="font-semibold text-white">
                                                                    {verdict.court}
                                                                </p>
                                                                <p className="text-sm text-neutral-400 mt-1">
                                                                    {verdict.findings}
                                                                </p>
                                                            </div>
                                                            <div className="text-right">
                                                                <p className="text-2xl font-bold text-green-500">
                                                                    {verdict.amount}
                                                                </p>
                                                                <p className="text-xs text-neutral-500 mt-1">
                                                                    {verdict.date}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        ))}
                                    </div>
                                </FadeInStagger>

                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <h4 className="text-sm font-semibold text-white mb-4">Case Timeline</h4>
                                    <div className="space-y-3">
                                        {timeline.map((item) => (
                                            <div key={item.year} className="flex gap-x-4 text-sm">
                                                <span className="font-semibold text-green-500 w-24 flex-shrink-0">
                                                    {item.year}
                                                </span>
                                                <span className="text-neutral-400">{item.event}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                                    <div className="flex items-center gap-x-2">
                                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                        <p className="text-sm font-semibold text-green-400">
                                            Verdict Status: Upheld on Appeal
                                        </p>
                                    </div>
                                    <p className="mt-2 text-sm text-green-300">
                                        The judge clarified that the jury found Trump had &quot;raped&quot; Carroll according to 
                                        the common definition, though not under New York&apos;s narrow legal definition at the time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
}