"use client";
import React, { useState } from 'react';

// Helper component for icons. In a real Next.js app, you might use a library like lucide-react.
// For this self-contained component, inline SVGs are used.
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d={path} />
  </svg>
);

// Icon paths
const ICONS = {
  mail: "M3 7.5a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9zM5.5 6a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-13zM12 12.172l7.3-4.368-1.6-2.69-5.7 3.39-5.7-3.39-1.6 2.69L12 12.172z",
  phone: "M6.62 10.79a15.45 15.45 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z",
  location: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
};

export default function App() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // Basic form validation
    if (!form.name.value || !form.email.value || !form.message.value) {
        setFormStatus('Please fill out all required fields.');
        return;
    }

    // In a real app, you would handle form submission here
    // (e.g., send data to an API endpoint).
    console.log('Form submitted:', {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
    });
    
    setFormStatus('Thank you for your message!');
    form.reset();
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <div className="min-h-screen w-full font-sans antialiased bg-background text-text-primary">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* --- Left Column: Contact Info --- */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Were here to help and answer any question you might have. We look forward to hearing from you.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 text-accent-secondary">
                  <Icon path={ICONS.phone} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Call Us</h3>
                  <p className="text-text-secondary">Lets talk about your project.</p>
                  <a href="tel:+1-555-123-4567" className="mt-1 block text-base text-accent-secondary hover:underline font-medium">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 text-accent-secondary">
                  <Icon path={ICONS.mail} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Email Us</h3>
                  <p className="text-text-secondary">Send us a message for a quick response.</p>
                  <a href="mailto:contact@example.com" className="mt-1 block text-base text-accent-secondary hover:underline font-medium">
                    contact@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 text-accent-secondary">
                  <Icon path={ICONS.location} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">Our Office</h3>
                  <p className="text-text-secondary">123 Innovation Drive, Suite 404<br />Tech City, TX 75001</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column: Contact Form --- */}
          <div className="p-8 md:p-10 rounded-2xl shadow-xl bg-surface">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary">Send a Message</h2>
              
              {/* Form Field: Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-text-secondary">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="block w-full px-4 py-2.5 rounded-lg transition bg-background border border-border text-text-primary placeholder-text-secondary/70 focus:ring-2 focus:ring-accent-primary focus:border-accent-primary"
                  placeholder="John Doe"
                />
              </div>
              
              {/* Form Field: Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-text-secondary">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full px-4 py-2.5 rounded-lg transition bg-background border border-border text-text-primary placeholder-text-secondary/70 focus:ring-2 focus:ring-accent-primary focus:border-accent-primary"
                  placeholder="you@example.com"
                />
              </div>

              {/* Form Field: Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1.5 text-text-secondary">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block w-full px-4 py-2.5 rounded-lg transition bg-background border border-border text-text-primary placeholder-text-secondary/70 focus:ring-2 focus:ring-accent-primary focus:border-accent-primary"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Form Field: Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-text-secondary">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="block w-full px-4 py-2.5 rounded-lg transition resize-y bg-background border border-border text-text-primary placeholder-text-secondary/70 focus:ring-2 focus:ring-accent-primary focus:border-accent-primary"
                  placeholder="Please describe your needs..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-start">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out bg-accent-primary text-text-primary hover:bg-accent-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary"
                >
                  Send Message
                </button>
                {formStatus && (
                  <p className="mt-4 text-sm text-text-secondary">
                    {formStatus}
                  </p>
                )}
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
