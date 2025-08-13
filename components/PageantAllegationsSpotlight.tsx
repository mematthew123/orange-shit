import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { UserGroupIcon, EyeIcon } from '@heroicons/react/24/outline';

export function PageantAllegationsSpotlight() {
    const allegations = [
        {
            name: 'Mariah Billado',
            title: 'Miss Vermont Teen USA 1997',
            age: 'Teenager',
            allegation: 'Trump walked into dressing room while contestants were changing',
            quote: 'I remember putting on my dress really quick, because I was like, "Oh my god, there\'s a man in here."',
            response: 'Ivanka Trump reportedly said "Yeah, he does that"',
        },
        {
            name: 'Victoria Hughes',
            title: 'Miss New Mexico Teen USA 1997',
            age: 'Teenager',
            allegation: 'Confirmed Trump\'s dressing room visit, youngest contestant was 15',
            quote: 'It was certainly the most inappropriate time to meet us all for the first time.',
            response: 'Some contestants were as young as 15 years old',
        },
        {
            name: 'Tasha Dixon',
            title: 'Miss Arizona USA 2001',
            age: '18',
            allegation: 'Trump walked in while contestants were naked or topless',
            quote: 'He just came strolling right in. There was no second to put a robe on or any sort of clothing.',
            response: 'Felt pressured to "fawn all over him" by staff',
        },
        {
            name: 'Bridget Sullivan',
            title: 'Miss New Hampshire USA 2000',
            age: '19',
            allegation: 'Trump entered dressing room while contestants were naked',
            quote: 'The time that he walked through the dressing rooms was really shocking.',
            response: 'Trump was coming to wish them luck, but they "were all naked"',
        },
        {
            name: 'Samantha Holvey',
            title: 'Miss North Carolina USA 2006',
            age: '20',
            allegation: 'Trump inspected contestants like "meat" and entered dressing areas',
            quote: 'He eyed me like a piece of meat. I have never felt so objectified.',
            response: 'Came forward after Trump denied such behavior during debate',
        },
    ];

    const trumpAdmission = {
        source: 'Howard Stern Show, 2005',
        quote: "I'll go backstage before a show, and everyone's getting dressed and ready and everything else. ...You know, no men are anywhere. And I'm allowed to go in because I'm the owner of the pageant. And therefore I'm inspecting it. ... Is everyone OK? You know, they're standing there with no clothes. And you see these incredible-looking women. And so I sort of get away with things like that.",
        context: 'Trump openly admitted to this behavior on radio',
    };

    return (
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-neutral-950 to-black py-24 sm:py-32">
            <Container>
                <FadeIn>
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Beauty Pageant Allegations
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-neutral-400">
                                Multiple contestants from Miss USA and Miss Teen USA report violations
                            </p>
                        </div>

                        <div className="mt-16">
                            {/* Trump's Own Admission */}
                            <div className="mb-12 rounded-2xl bg-red-950/30 backdrop-blur p-8 shadow-lg ring-1 ring-red-500/20">
                                <div className="flex items-center gap-x-3 mb-4">
                                    <EyeIcon className="h-8 w-8 text-red-500" />
                                    <h3 className="text-2xl font-bold text-white">
                                        Trump&apos;s Own Words
                                    </h3>
                                </div>
                                <blockquote className="border-l-4 border-red-500 pl-6">
                                    <p className="text-lg text-white italic">
                                        {trumpAdmission.quote}
                                    </p>
                                    <footer className="mt-3 text-sm text-neutral-400">
                                        — Donald Trump, {trumpAdmission.source}
                                    </footer>
                                </blockquote>
                                <p className="mt-4 text-sm font-semibold text-red-400">
                                    {trumpAdmission.context}
                                </p>
                            </div>

                            {/* Pattern of Behavior */}
                            <div className="mb-8 p-6 bg-amber-500/10 rounded-lg border border-amber-500/30">
                                <div className="flex items-center gap-x-3 mb-3">
                                    <UserGroupIcon className="h-6 w-6 text-amber-500" />
                                    <h4 className="text-lg font-semibold text-white">
                                        Pattern Across Multiple Pageants
                                    </h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                                    <div>
                                        <p className="text-3xl font-bold text-amber-500">5+</p>
                                        <p className="text-sm text-neutral-400">Named Accusers</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-amber-500">1997-2006</p>
                                        <p className="text-sm text-neutral-400">Time Span</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-amber-500">15</p>
                                        <p className="text-sm text-neutral-400">Youngest Age</p>
                                    </div>
                                </div>
                            </div>

                            {/* Individual Allegations */}
                            <FadeInStagger>
                                <div className="space-y-6">
                                    {allegations.map((person) => (
                                        <FadeIn key={person.name}>
                                            <div className="rounded-lg bg-neutral-900/50 backdrop-blur p-6 shadow-md ring-1 ring-white/10">
                                                <div className="mb-3">
                                                    <h4 className="text-lg font-semibold text-white">
                                                        {person.name}
                                                    </h4>
                                                    <p className="text-sm text-amber-500">
                                                        {person.title} • Age: {person.age}
                                                    </p>
                                                </div>
                                                <p className="text-neutral-300 mb-3">
                                                    {person.allegation}
                                                </p>
                                                <blockquote className="border-l-4 border-neutral-600 pl-4 mb-3">
                                                    <p className="text-sm italic text-neutral-400">
                                                        {person.quote}
                                                    </p>
                                                </blockquote>
                                                <p className="text-sm text-neutral-500">
                                                    {person.response}
                                                </p>
                                            </div>
                                        </FadeIn>
                                    ))}
                                </div>
                            </FadeInStagger>

                            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                                <p className="text-sm text-neutral-300">
                                    <span className="font-semibold text-white">Important Context:</span> These incidents occurred 
                                    while Trump owned the Miss Universe Organization (1996-2015), which included 
                                    Miss USA and Miss Teen USA pageants. Multiple contestants independently reported 
                                    similar experiences across different years and locations.
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
}