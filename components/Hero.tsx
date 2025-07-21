'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
    DocumentTextIcon,
    ScaleIcon,
    ShieldCheckIcon,
    InformationCircleIcon,
} from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Documents', href: '#documents' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Legal Cases', href: '#legal' },
    { name: 'Resources', href: '#resources' },
    { name: 'About', href: '#about' },
];

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='bg-background'>
            <header className='absolute inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-sm'>
                <div className='mx-auto max-w-7xl'>
                    <div className='px-6 pt-6'>
                        <nav
                            aria-label='Global'
                            className='flex items-center justify-between'
                        >
                            <a
                                href='#'
                                className='-m-1.5 p-1.5 flex items-center gap-2'
                            >
                                <ScaleIcon className='h-8 w-8 text-primary' />
                                <span className='font-semibold text-foreground'>
                                    Truth Archive
                                </span>
                            </a>
                            <button
                                type='button'
                                onClick={() => setMobileMenuOpen(true)}
                                className='-m-2.5 rounded-md p-2.5 text-muted-foreground hover:text-foreground lg:hidden'
                            >
                                <span className='sr-only'>Open main menu</span>
                                <Bars3Icon
                                    aria-hidden='true'
                                    className='size-6'
                                />
                            </button>
                            <div className='hidden lg:flex lg:gap-x-8'>
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
                <Dialog
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                    className='lg:hidden'
                >
                    <div className='fixed inset-0 z-50' />
                    <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-card p-6 sm:max-w-sm sm:ring-1 sm:ring-border'>
                        <div className='flex items-center justify-between'>
                            <a
                                href='#'
                                className='-m-1.5 p-1.5 flex items-center gap-2'
                            >
                                <ScaleIcon className='h-8 w-8 text-primary' />
                                <span className='font-semibold text-card-foreground'>
                                    Truth Archive
                                </span>
                            </a>
                            <button
                                type='button'
                                onClick={() => setMobileMenuOpen(false)}
                                className='-m-2.5 rounded-md p-2.5 text-muted-foreground hover:text-card-foreground'
                            >
                                <span className='sr-only'>Close menu</span>
                                <XMarkIcon
                                    aria-hidden='true'
                                    className='size-6'
                                />
                            </button>
                        </div>
                        <div className='mt-6 flow-root'>
                            <div className='-my-6 divide-y divide-border'>
                                <div className='space-y-2 py-6'>
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className='-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-card-foreground hover:bg-accent'
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className='relative isolate pt-14'>
                {/* Background gradient */}
                <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                    <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-info opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]' />
                </div>

                <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8'>
                    <div className='mx-auto max-w-2xl text-center'>
                        <div className='mb-8 flex justify-center'>
                            <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-primary/20'>
                                Comprehensive documentation and timeline
                            </div>
                        </div>
                        <h1 className='text-4xl font-bold tracking-tight text-foreground sm:text-6xl'>
                            Documenting Truth Through Public Records
                        </h1>
                        <p className='mt-6 text-lg leading-8 text-muted-foreground'>
                            A comprehensive archive of allegations, court
                            documents, and verified timelines compiled from
                            mainstream media sources and public records. Our
                            mission is to provide transparent access to factual
                            information.
                        </p>
                        <div className='mt-10 flex items-center justify-center gap-x-6'>
                            <a
                                href='#documents'
                                className='rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
                            >
                                Explore Documents
                            </a>
                            <a
                                href='#timeline'
                                className='text-sm font-semibold leading-6 text-foreground hover:text-primary'
                            >
                                View Timeline <span aria-hidden='true'>→</span>
                            </a>
                        </div>
                    </div>

                    {/* Feature cards */}
                    <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
                        <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
                            <div className='flex flex-col'>
                                <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground'>
                                    <DocumentTextIcon
                                        className='h-5 w-5 flex-none text-primary'
                                        aria-hidden='true'
                                    />
                                    Court Documents
                                </dt>
                                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground'>
                                    <p className='flex-auto'>
                                        Access verified court documents,
                                        depositions, and legal filings from
                                        multiple cases spanning decades.
                                    </p>
                                </dd>
                            </div>
                            <div className='flex flex-col'>
                                <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground'>
                                    <ShieldCheckIcon
                                        className='h-5 w-5 flex-none text-primary'
                                        aria-hidden='true'
                                    />
                                    Verified Sources
                                </dt>
                                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground'>
                                    <p className='flex-auto'>
                                        All information is sourced from
                                        mainstream media outlets, court records,
                                        and public documents.
                                    </p>
                                </dd>
                            </div>
                            <div className='flex flex-col'>
                                <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground'>
                                    <InformationCircleIcon
                                        className='h-5 w-5 flex-none text-primary'
                                        aria-hidden='true'
                                    />
                                    Comprehensive Timeline
                                </dt>
                                <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground'>
                                    <p className='flex-auto'>
                                        Navigate through a detailed timeline of
                                        events, relationships, and legal
                                        proceedings from the 1970s to present.
                                    </p>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    {/* Stats section */}
                    <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
                        <div className='rounded-2xl bg-card p-8 ring-1 ring-border'>
                            <div className='grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 lg:grid-cols-4'>
                                <div>
                                    <p className='text-3xl font-bold tracking-tight text-primary'>
                                        25+
                                    </p>
                                    <p className='mt-1 text-sm text-muted-foreground'>
                                        Documented Accusers
                                    </p>
                                </div>
                                <div>
                                    <p className='text-3xl font-bold tracking-tight text-primary'>
                                        50+
                                    </p>
                                    <p className='mt-1 text-sm text-muted-foreground'>
                                        Years of Records
                                    </p>
                                </div>
                                <div>
                                    <p className='text-3xl font-bold tracking-tight text-primary'>
                                        $88.3M
                                    </p>
                                    <p className='mt-1 text-sm text-muted-foreground'>
                                        Court-Ordered Damages
                                    </p>
                                </div>
                                <div>
                                    <p className='text-3xl font-bold tracking-tight text-primary'>
                                        100+
                                    </p>
                                    <p className='mt-1 text-sm text-muted-foreground'>
                                        Media Sources
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom gradient */}
                <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
                    <div className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-info opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]' />
                </div>
            </div>
        </div>
    );
}
