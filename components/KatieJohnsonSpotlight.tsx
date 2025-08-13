/* eslint-disable react/no-unescaped-entities */
'use client';

import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { DocumentTextIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { ImpactQuote } from '@/components/ImpactQuote';

export function KatieJohnsonSpotlight() {
    const lawsuitDetails = [
        { label: 'Filed', value: 'April 2016 (California), June 2016 (New York)' },
        { label: 'Plaintiff', value: 'Anonymous - "Katie Johnson" / "Jane Doe"' },
        { label: 'Allegation', value: 'Rape at age 13 in 1994' },
        { label: 'Location', value: "Jeffrey Epstein's Manhattan residence" },
        { label: 'Defendants', value: 'Donald Trump and Jeffrey Epstein' },
        { label: 'Outcome', value: 'Withdrawn November 4, 2016' },
    ];

    const detailedAllegations = [
        {
            title: "The Initial Assault",
            quote: "Defendant Trump initiated sexual contact with Plaintiff at four different parties. On the fourth and final sexual encounter with Defendant Trump, Defendant Trump tied Plaintiff to a bed, exposed himself to Plaintiff, and then proceeded to forcibly rape Plaintiff. During the course of this savage sexual attack, Plaintiff loudly pleaded with Defendant Trump to stop but with no effect.",
            context: "From the federal lawsuit filing, describing events from 1994"
        },
        {
            title: "The Violence",
            quote: "Defendant Trump responded to Plaintiff's pleas by violently striking Plaintiff in the face with his open hand and screaming that he would do whatever he wanted.",
            context: "Describing Trump's response when the 13-year-old begged him to stop"
        },
        {
            title: "The Threats",
            quote: "Immediately following this rape, Defendant Trump threatened Plaintiff that, were she ever to reveal any of the details of the sexual and physical abuse of her by Defendant Trump, Plaintiff and her family would be physically harmed if not killed.",
            context: "Threats made to ensure the victim's silence"
        },
        {
            title: "Epstein's Role",
            quote: "Defendant Epstein had sexual contact with Plaintiff at two of the parties. The second sexual encounter with Defendant Epstein took place after Plaintiff had been raped by Defendant Trump. Defendant Epstein forced himself upon Plaintiff and proceeded to rape her anally and vaginally despite her loud pleas to stop.",
            context: "Both men allegedly assaulted the same 13-year-old victim"
        },
        {
            title: "Competition Between Perpetrators",
            quote: "Defendant Trump stated that Plaintiff shouldn't ever say anything if she didn't want to disappear like Maria, a 12-year-old female that was forced to be involved in the third incident with Defendant Trump and that Plaintiff had not seen since that third incident.",
            context: "Reference to another missing child victim"
        },
        {
            title: "Witness Testimony",
            quote: "I personally witnessed four sexual encounters that the Plaintiff was forced to have with Mr. Trump during this period, including the fourth of these encounters where Mr. Trump forcibly raped her despite her pleas to stop.",
            context: "Sworn affidavit from witness 'Tiffany Doe', an employee who worked for Epstein"
        }
    ];

    return (
        <>
            {/* Main dramatic quote using ImpactQuote component */}
            <ImpactQuote
                quote="I was terrified and ashamed. I was only 13 years old."
                highlightedPhrases={["13 years old"]}
                author="Katie Johnson / Jane Doe"
                source="Federal Court Filing"
                date="April 2016"
                credibilityBadge="Federal Lawsuit"
                location="Epstein's Manhattan Residence"
                status="Withdrawn Under Threat"
                courtFiling={true}
                witnessCount={1}
                backgroundClass="bg-gradient-to-br from-black via-red-950 to-black"
            />

            {/* Detailed allegations section */}
            <div className="relative isolate overflow-hidden bg-black py-24 sm:py-32">
                <Container>
                    <FadeIn>
                        <div className="mx-auto max-w-5xl">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                    The Most Serious Allegations
                                </h2>
                                <p className="mt-4 text-xl leading-8 text-red-400">
                                    Content Warning: Graphic descriptions of child sexual assault
                                </p>
                            </div>

                            {/* Detailed quotes from the filing */}
                            <div className="space-y-12">
                                {detailedAllegations.map((allegation, index) => (
                                    <FadeIn key={index}>
                                        <div className="relative">
                                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-700 rounded-full" />
                                            <div className="pl-8">
                                                <h3 className="text-xl font-bold text-red-400 mb-4">
                                                    {allegation.title}
                                                </h3>
                                                <blockquote className="mb-4">
                                                    <p className="text-lg text-white leading-relaxed italic">
                                                        "{allegation.quote}"
                                                    </p>
                                                </blockquote>
                                                <p className="text-sm text-neutral-400">
                                                    {allegation.context}
                                                </p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>

                            {/* Case details */}
                            <div className="mt-20 rounded-2xl bg-white/5 backdrop-blur p-8 ring-1 ring-white/10">
                                <div className="flex items-center gap-x-3 mb-6">
                                    <DocumentTextIcon className="h-8 w-8 text-amber-500" />
                                    <h3 className="text-2xl font-bold text-white">
                                        Case Details
                                    </h3>
                                </div>

                                <dl className="grid md:grid-cols-2 gap-6">
                                    {lawsuitDetails.map((detail) => (
                                        <div key={detail.label} className="border-l-2 border-neutral-700 pl-4">
                                            <dt className="font-semibold text-amber-400 mb-1">
                                                {detail.label}
                                            </dt>
                                            <dd className="text-white">{detail.value}</dd>
                                        </div>
                                    ))}
                                </dl>

                                <div className="mt-8 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
                                    <div className="flex items-start gap-x-3">
                                        <XCircleIcon className="h-5 w-5 text-amber-500 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-semibold text-amber-400">
                                                Case Withdrawn Days Before 2016 Election
                                            </p>
                                            <p className="mt-1 text-sm text-white">
                                                The lawsuit was withdrawn on November 4, 2016. Attorney Lisa Bloom stated 
                                                the plaintiff had received multiple death threats. A planned press conference 
                                                where Jane Doe was to appear publicly was abruptly canceled due to threats.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                                    <p className="text-sm text-white">
                                        <span className="font-semibold text-red-400">Pattern Recognition:</span> The allegations 
                                        describe behavior consistent with known facts about Epstein's trafficking operation. 
                                        The plaintiff's attorney stated she had received multiple corroborating witnesses who 
                                        placed Trump at Epstein's parties with young girls during this time period.
                                    </p>
                                </div>
                            </div>

                            {/* Timeline of case */}
                            <div className="mt-12 p-8 bg-gradient-to-r from-neutral-900 to-neutral-950 rounded-2xl">
                                <h4 className="text-lg font-semibold text-white mb-6">Case Timeline</h4>
                                <div className="space-y-4">
                                    <div className="flex gap-x-4">
                                        <span className="text-red-400 font-semibold w-32">1994</span>
                                        <span className="text-white">Alleged assaults occur at Epstein parties</span>
                                    </div>
                                    <div className="flex gap-x-4">
                                        <span className="text-red-400 font-semibold w-32">April 2016</span>
                                        <span className="text-white">First lawsuit filed in California</span>
                                    </div>
                                    <div className="flex gap-x-4">
                                        <span className="text-red-400 font-semibold w-32">June 2016</span>
                                        <span className="text-white">Refiled in New York with witness affidavit</span>
                                    </div>
                                    <div className="flex gap-x-4">
                                        <span className="text-red-400 font-semibold w-32">Nov 2, 2016</span>
                                        <span className="text-white">Press conference scheduled then canceled</span>
                                    </div>
                                    <div className="flex gap-x-4">
                                        <span className="text-red-400 font-semibold w-32">Nov 4, 2016</span>
                                        <span className="text-white">Case withdrawn (4 days before election)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </div>
        </>
    );
}