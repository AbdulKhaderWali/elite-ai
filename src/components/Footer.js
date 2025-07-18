"use client";
import Link from 'next/link';
import Image from 'next/image';

// Import MUI Icons for social media
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  // Social media links with aria-labels for accessibility
  const socialLinks = [
    { href: "https://twitter.com", icon: <TwitterIcon />, 'aria-label': 'Follow us on Twitter' },
    { href: "https://linkedin.com", icon: <LinkedInIcon />, 'aria-label': 'Follow us on LinkedIn' },
    { href: "https://github.com", icon: <GitHubIcon />, 'aria-label': 'Follow us on GitHub' },
  ];

  // Restructured footer links for scalability and easier maintenance
  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { label: "Threat Intelligence", href: "/cybersecurity/threat-intelligence" },
        { label: "Incident Response", href: "/cybersecurity/incident-response" },
        { label: "AI Security", href: "/ai" },
        { label: "Transformation", href: "/transformation" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms of Service", href: "/legal/terms-of-service" },
        { label: "Acceptable Use", href: "/legal/acceptable-use" },
      ],
    },
  ];

  return (
    // Uses the new color variables from your CSS for background, text, and borders
    <footer className="bg-surface text-text-secondary border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo, Tagline, and Socials */}
          <div className="md:col-span-2 lg:col-span-1 space-y-6">
            <Link href="/" aria-label="Back to Homepage">
              <Image
                src="/elite-2.png" // Ensure this path is correct in your `public` folder
                alt="Elite AI Logo"
                width={120}
                height={30}
                className="h-auto"
              />
            </Link>
            <p className="text-base max-w-xs">
              Cutting-edge cybersecurity solutions for the modern enterprise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social['aria-label']} 
                  href={social.href}
                  aria-label={social['aria-label']}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Consistent hover effect using the new secondary accent color (gold/amber)
                  className="text-text-secondary hover:text-accent-secondary transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamically generated footer link columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-text-primary tracking-wider uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      {/* Consistent hover effect using the new secondary accent color */}
                      <span className="text-base hover:text-accent-secondary cursor-pointer transition-colors duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Elite AI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;