"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import MUI Icons for a consistent and professional look
import GppGoodIcon from '@mui/icons-material/GppGood';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BugReportIcon from '@mui/icons-material/BugReport';
import HubIcon from '@mui/icons-material/Hub';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { Shield, Lock } from 'lucide-react';
import CybersecurityHeroBackground from '../components/HeroBackground';

// --- Animated SVG Hero Background ---
// This background is now fully theme-aware, using the new --accent-primary variable.
// const HeroBackgroundSVG = () => (
//     <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
//         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//                 <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
//                     {/* Grid lines now use the new accent-primary color's RGB values for a subtle effect */}
//                     <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(5, 242, 160, 0.05)" strokeWidth="0.5"/>
//                 </pattern>
//                 <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
//                     <rect width="100" height="100" fill="url(#smallGrid)"/>
//                     <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(5, 242, 160, 0.1)" strokeWidth="1"/>
//                 </pattern>
//                 <radialGradient id="glow" cx="50%" cy="50%" r="50%">
//                     {/* The glowing effect correctly uses the --accent-primary variable */}
//                     <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.3" />
//                     <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0" />
//                 </radialGradient>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#grid)" />
//             <circle cx="50%" cy="50%" r="40%" fill="url(#glow)" className="animate-pulse" />
//         </svg>
//     </div>
// );



// --- Data for Page Sections (Updated with new color classes) ---
const services = [
  {
    icon: <GppGoodIcon className="!text-5xl text-accent-primary" />,
    title: "Threat Intelligence",
    description: "Proactively identify and mitigate potential threats with our real-time intelligence feeds and expert analysis."
  },
  {
    icon: <BugReportIcon className="!text-5xl text-accent-primary" />,
    title: "Penetration Testing",
    description: "Simulate real-world attacks to uncover vulnerabilities in your networks, applications, and infrastructure."
  },
  {
    icon: <AnalyticsIcon className="!text-5xl text-accent-primary" />,
    title: "Incident Response",
    description: "Minimize damage and recovery time with our rapid response team, available 24/7 to handle security breaches."
  },
  {
    icon: <HubIcon className="!text-5xl text-accent-primary" />,
    title: "AI-Powered Security",
    description: "Leverage artificial intelligence to detect anomalies, predict threats, and automate your security workflows."
  }
];

const whyChooseUsItems = [
    {
        icon: <AutoAwesomeIcon className="!text-4xl text-accent-secondary"/>,
        title: "AI-First Approach",
        description: "Our solutions are built on a foundation of advanced AI to predict and neutralize threats before they strike."
    },
    {
        icon: <AssuredWorkloadIcon className="!text-4xl text-accent-secondary"/>,
        title: "Proven Expertise",
        description: "Our team consists of industry-certified professionals with decades of experience in cybersecurity."
    },
    {
        icon: <AllInclusiveIcon className="!text-4xl text-accent-secondary"/>,
        title: "24/7/365 Monitoring",
        description: "We provide continuous, around-the-clock monitoring to ensure your assets are always protected."
    }
];

// --- Main Home Page Component ---
export default function Home() {

  // Effect for fade-in animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }, []);

  return (
    <div className="bg-background text-text-primary">
      {/* --- Hero Section --- */}
      <section className="relative bg-text-primary pt-40 pb-48 text-center isolate">
        <CybersecurityHeroBackground />
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Intelligent Cybersecurity for the Modern Age
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We fuse advanced artificial intelligence with elite human expertise to provide unparalleled protection against sophisticated digital threats.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact">
              <span className="inline-block bg-accent-primary text-text-primary font-bold py-3 px-8 rounded-lg hover:bg-accent-primary-hover transition-colors duration-300 shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary-hover/40 transform hover:-translate-y-1">
                Request a Consultation
              </span>
            </Link>
            <Link href="#services">
                <span className="inline-block text-gray-300 font-medium py-3 px-8 rounded-lg hover:text-white hover:bg-white/10 transition-colors duration-300">
                    Explore Our Services
                </span>
            </Link>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="py-20 bg-surface fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
                An <span className="text-accent-primary">Intelligent</span> Defense Partner
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-text-secondary">
                Why Choose Elite AI for Your Cybersecurity Needs?
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {whyChooseUsItems.map((item) => (
                    <div key={item.title} className="text-center p-8 rounded-lg transition-all duration-300 hover:bg-background hover:shadow-xl">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent-secondary/10 mx-auto mb-6">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
                        <p className="mt-2 text-base text-text-secondary">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-20 bg-background fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-accent-primary tracking-wide uppercase">Our Solutions</h2>
            <p className="mt-2 text-3xl font-extrabold text-text-primary sm:text-4xl">
              A Comprehensive Security Suite
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="bg-surface p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border-t-4 border-accent-primary/20 hover:border-accent-primary">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent-primary/10 mb-6 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary">{service.title}</h3>
                <p className="mt-4 text-base text-text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- Final CTA Section --- */}
      <section className="bg-surface fade-in">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
            <span className="block">Ready to Fortify Your Defenses?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-text-secondary">
            Schedule a no-obligation demo with one of our security experts today.
          </p>
          <Link href="/contact">
            <span className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-text-primary bg-accent-primary hover:bg-accent-primary-hover sm:w-auto transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule a Demo
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}