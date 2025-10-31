'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="z-50 bg-[#081524] text-white shadow-md sticky top-0">
            <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href={"/"} className="flex items-center bg-white/80 px-2 py-1 rounded-md">
                    <Image
                        src="logo.svg"
                        alt="JP IFNOTECH Logo"
                        width={150}
                        height={150}

                    />

                </Link>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-2">
                    {links.map((l) => {
                        const isActive = pathname === l.href || (l.href === '/' && pathname === '/');
                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`px-4 py-2 rounded transition-colors font-medium text-sm ${isActive ? 'bg-blue-500 text-white  shadow' : 'text-blue-100 hover:text-white hover:bg-blue-600/10'}`}
                            >
                                {l.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden mt-2 pb-4 bg-[#0d2038]/95">
                    <div className="flex flex-col space-y-2 px-4">
                        {links.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-2 rounded-md ${pathname === l.href ? 'bg-blue-500 text-white' : 'text-blue-100 hover:bg-blue-600/20'}`}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;