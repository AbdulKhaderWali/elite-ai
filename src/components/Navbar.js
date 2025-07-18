"use client";
// components/Navbar.js
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// --- Icon Components (unchanged) ---
const MenuIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const CloseIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const KeyboardArrowDownIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);


// --- Main Navbar Component ---
const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

    // --- Data for Navigation Links ---
    const navLinks = [
        { href: "/", label: "Home" },
        { 
            href: "/ai", 
            label: "AI", 
            sublinks: [
                { href: "/ai/machine-learning", label: "Machine Learning" },
                { href: "/ai/deep-learning", label: "Deep Learning" },
                { href: "/ai/nlp", label: "Natural Language Processing" },
                { href: "/ai/computer-vision", label: "Computer Vision" },
            ]
        },
        { 
            href: "/cybersecurity", 
            label: "Cybersecurity", 
            sublinks: [
                { href: "/cybersecurity/threat-intelligence", label: "Threat Intelligence" },
                { href: "/cybersecurity/incident-response", label: "Incident Response" },
                { href: "/cybersecurity/penetration-testing", label: "Penetration Testing" },
            ]
        },
        { href: "/transformation", label: "Transformation" },
        { href: "/contact", label: "Contact Us", isButton: true },
    ];

    // Effect to prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isMobileMenuOpen]);

    const handleSubmenuToggle = (label) => {
        setOpenMobileSubmenu(openMobileSubmenu === label ? null : label);
    };

    return (
        <>
            {/* Main Navigation Bar updated to have a solid background */}
            <nav className="bg-surface shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <Image
                                    src="/elite-2.png" // Make sure this path is correct
                                    alt="Elite AI Logo"
                                    width={150}
                                    height={37}
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-2">
                            {navLinks.map((link) => 
                                link.isButton ? null : (
                                !link.sublinks ? (
                                    <Link key={link.label} href={link.href}>
                                        <span className="px-4 py-2 rounded-md text-sm font-medium text-text-secondary hover:bg-accent-secondary hover:text-text-primary transition-colors duration-300">
                                            {link.label}
                                        </span>
                                    </Link>
                                ) : (
                                    <div key={link.label} className="relative group">
                                        <button className="px-4 py-2 rounded-md text-sm font-medium text-text-secondary hover:bg-accent-secondary hover:text-text-primary flex items-center transition-colors duration-300 focus:outline-none">
                                            <span>{link.label}</span>
                                            <KeyboardArrowDownIcon className="ml-1 transform group-hover:rotate-180 transition-transform duration-300" />
                                        </button>
                                        <div className="absolute z-10 w-56 mt-2 bg-surface rounded-lg shadow-xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1">
                                            <div className="py-2">
                                                {link.sublinks.map((sublink) => (
                                                    <Link key={sublink.label} href={sublink.href}>
                                                        <span className="block px-4 py-2 text-sm text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary">
                                                            {sublink.label}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                             {/* Desktop Contact Button */}
                            <Link href="/contact">
                                <span className="ml-4 px-5 py-2.5 rounded-full text-sm font-semibold text-text-primary bg-accent-primary hover:bg-accent-primary-hover transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                    Contact Us
                                </span>
                            </Link>
                        </div>

                        {/* Hamburger Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-text-primary hover:bg-gray-100/50 focus:outline-none">
                                <span className="sr-only">Open main menu</span>
                                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            
            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)}></div>
                <div className={`absolute top-0 left-0 h-full w-4/5 max-w-sm bg-surface shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-5 h-full flex flex-col">
                        <div className="flex items-center justify-between pb-4 border-b border-border">
                             <h2 className="font-bold text-lg text-text-primary">Menu</h2>
                             <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-md text-text-primary hover:bg-gray-100/50">
                                 <CloseIcon />
                             </button>
                        </div>
                        <nav className="mt-6 flex-grow">
                            {navLinks.map((link) => (
                                !link.sublinks ? (
                                    <Link key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                                        <span className={`block px-4 py-3 rounded-lg text-base font-medium ${link.isButton ? 'bg-accent-primary text-text-primary text-center' : 'text-text-primary hover:bg-accent-primary/10'}`}>
                                            {link.label}
                                        </span>
                                    </Link>
                                ) : (
                                    <div key={link.label} className="py-1">
                                        <button onClick={() => handleSubmenuToggle(link.label)} className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-text-primary hover:bg-accent-primary/10">
                                            <span>{link.label}</span>
                                            <KeyboardArrowDownIcon className={`transform transition-transform duration-300 ${openMobileSubmenu === link.label ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openMobileSubmenu === link.label && (
                                            <div className="pl-6 mt-2 space-y-1 border-l-2 border-accent-primary/20">
                                                {link.sublinks.map((sublink) => (
                                                    <Link key={sublink.label} href={sublink.href} onClick={() => setMobileMenuOpen(false)}>
                                                        <span className="block px-3 py-2 rounded-md text-sm font-medium text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary">
                                                            {sublink.label}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
