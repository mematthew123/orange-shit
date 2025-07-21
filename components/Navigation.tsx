'use client';

import Link from 'next/link';
import { useState } from 'react';

export const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/timeline', label: 'Timeline' },
        { href: '/cases', label: 'Cases' },
        { href: '/resources', label: 'Resources' },
        { href: '/about', label: 'About' },
    ];

    return (
        <nav className='bg-card border-b border-border sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo/Site Title */}
                    <div className='flex-shrink-0'>
                        <Link
                            href='/'
                            className='text-xl font-semibold text-foreground hover:opacity-80 transition-opacity'
                        >
                            Documentation Project
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className='text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors'
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className='inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className='sr-only'>Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className={`${
                                    isMobileMenuOpen ? 'hidden' : 'block'
                                } h-6 w-6`}
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                            {/* Close icon */}
                            <svg
                                className={`${
                                    isMobileMenuOpen ? 'block' : 'hidden'
                                } h-6 w-6`}
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}
            >
                <div className='px-2 pt-2 pb-3 space-y-1'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className='text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium transition-colors'
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};
