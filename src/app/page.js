"use client";
import { useEffect, useState } from 'react'; // Added useState for the new interactive section
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
// New Icons for the added sections
import PolicyIcon from '@mui/icons-material/Policy';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ReportIcon from '@mui/icons-material/Report';
import ArticleIcon from '@mui/icons-material/Article';

import { Shield, Lock, ArrowRight } from 'lucide-react'; // Added ArrowRight
import CybersecurityHeroBackground from '../components/HeroBackground';

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

// --- Data for NEW Sections ---
const processSteps = [
    {
        icon: <PolicyIcon className="!text-5xl text-accent-primary" />,
        title: "1. Discovery & Assessment",
        description: "We begin by thoroughly understanding your environment, identifying critical assets, and assessing your current security posture."
    },
    {
        icon: <TrackChangesIcon className="!text-5xl text-accent-primary" />,
        title: "2. Strategy & Implementation",
        description: "A tailored security strategy is developed and implemented, integrating our AI-powered solutions seamlessly into your workflow."
    },
    {
        icon: <ReportIcon className="!text-5xl text-accent-primary" />,
        title: "3. Monitor & Respond",
        description: "Our team continuously monitors for threats, providing real-time response and detailed reporting to keep you informed and secure."
    }
];

const featuredInsights = [
    {
        image: '/cyber1.avif', // Replace with your actual image path
        category: 'Threat Intelligence',
        title: 'The Role of AI in Predicting Zero-Day Exploits',
        description: 'Explore how machine learning models are trained to identify novel threats before they can be weaponized.',
        link: '/blog/ai-predicting-zero-day'
    },
    {
        image: '/cyber2.jpg', // Replace with your actual image path
        category: 'Incident Response',
        title: 'Crafting a Resilient Incident Response Plan for 2025',
        description: 'The threat landscape is always evolving. Learn the key components of a modern IR plan that minimizes downtime.',
        link: '/blog/resilient-incident-response-plan'
    },
    {
        image: '/cyber3.jpg', // Replace with your actual image path
        category: 'IoT Security',
        title: 'Securing the Enterprise: Top 5 IoT Vulnerabilities',
        description: 'As networks expand, so does the attack surface. We break down the most common IoT risks and how to mitigate them.',
        link: '/blog/top-5-iot-vulnerabilities'
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

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      observer.observe(el);
    });

    // Cleanup observer on component unmount
    return () => {
        elements.forEach(el => {
            observer.unobserve(el);
        });
    };
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
      
      {/* --- NEW SECTION: How It Works --- */}
      <section className="py-20 bg-surface fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-accent-primary tracking-wide uppercase">Our Approach</h2>
            <p className="mt-2 text-3xl font-extrabold text-text-primary sm:text-4xl">
              A Clear Path to Security
            </p>
          </div>
          <div className="relative">
            {/* Dotted line for desktop view */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700/50" aria-hidden="true">
                <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {processSteps.map((step) => (
                <div key={step.title} className="text-center p-6 bg-background rounded-lg shadow-lg border border-transparent hover:border-accent-primary/50 transition-all">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-surface mx-auto mb-6 border-2 border-accent-primary/30">
                    {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
                    <p className="mt-2 text-base text-text-secondary">{step.description}</p>
                </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Featured Insights --- */}
      <section className="py-20 bg-background fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-16 sm:text-center">
                <h2 className="text-base font-semibold text-accent-primary tracking-wide uppercase">Knowledge Center</h2>
                <p className="mt-2 text-3xl font-extrabold text-text-primary sm:text-4xl">
                    Featured Insights & News
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredInsights.map((insight) => (
                    <div key={insight.title} className="bg-surface rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        {/* It's good practice to use Next/Image, but ensure your next.config.js is setup for image sources */}
                        <div className="relative h-48 w-full">
                           <Image
                                src={insight.image}
                                alt={insight.title}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-500 group-hover:scale-105"
                           />
                        </div>
                        <div className="p-6">
                            <p className="text-sm font-semibold text-accent-primary uppercase">{insight.category}</p>
                            <h3 className="mt-2 text-xl font-bold text-text-primary leading-snug">
                                <Link href={insight.link}><span className="hover:text-accent-primary transition-colors cursor-pointer">{insight.title}</span></Link>
                            </h3>
                            <p className="mt-3 text-base text-text-secondary">{insight.description}</p>
                            <Link href={insight.link}>
                                <span className="mt-4 inline-flex items-center text-accent-secondary font-semibold group-hover:text-accent-primary transition-colors">
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </span>
                            </Link>
                        </div>
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
