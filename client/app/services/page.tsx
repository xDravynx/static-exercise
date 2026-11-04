"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Briefcase, 
  Users, 
  Sparkles,
  Camera, // Added Camera icon for Minis
  Clock, 
  Image as ImageIcon, 
  CheckCircle2, 
  ArrowRight,
  X
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  price: string;
  duration: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const detailedServices: ServiceDetail[] = [
  {
    id: "commercial",
    title: "Commercial & Branding",
    tagline: "Elevate your visual identity.",
    description: "High-contrast, bold imagery designed to elevate your brand identity and make your products stand out in a saturated market. Perfect for look-books, product launches, and editorial campaigns.",
    price: "Starting at $250",
    duration: "Half Day (4 hours) or Full Day (8 hours)",
    deliverables: [
      "Pre-shoot brand consultation & mood board",
      "High-resolution edited images (Print & Web ready)",
      "Commercial usage rights",
      "Online delivery gallery"
    ],
    icon: <Briefcase className="h-8 w-8 text-purple-500" />
  },
  {
    id: "event",
    title: "Event & Wedding Coverage",
    tagline: "Authentic, candid storytelling.",
    description: "Documenting weddings, elopements, and intimate family events with a focus on candid, unseen moments and raw emotional storytelling. We capture the day as it naturally unfolds.",
    price: "Starting at $600",
    duration: "6 to 10 hours coverage",
    deliverables: [
      "Complimentary engagement session",
      "Private digital gallery with print release"
    ],
    icon: <Users className="h-8 w-8 text-purple-500" />
  },
  {
    id: "portraiture",
    title: "Creative Portraiture",
    tagline: "Striking, stylized individuality.",
    description: "Stylized, striking portraits that capture raw individuality through expert lighting, deep shadows, and bold compositions. Ideal for artists, musicians, models, and personal branding.",
    price: "Starting at $75",
    duration: "1 to 2 hours",
    deliverables: [
      "Multiple wardrobe changes (2-3x) (3+ addition fees may apply)",
      "Studio or on-location lighting setup",
      "15 high-end retouched final images",
      "Style and posing guidance"
    ],
    icon: <Sparkles className="h-8 w-8 text-purple-500" />
  },
  // Added Minis Service
  {
    id: "minis",
    title: "Minis",
    tagline: "Quick, impactful, and seasonal.",
    description: "Short and sweet sessions perfect for quick family updates, couples, or seasonal portraits. High energy, fast-paced, and beautifully curated at a pre-selected location.",
    price: "$25",
    duration: "15 to 30 minutes",
    deliverables: [
      "Pre-selected stylized location",
      "5 to 10 high-resolution edited images",
      "Online delivery gallery",
      "Print release included"
    ],
    icon: <Camera className="h-8 w-8 text-purple-500" />
  }
];

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("General Inquiry");

  const handleBookNow = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-stone-200 font-sans selection:bg-purple-900 selection:text-white pt-24 pb-12 overflow-hidden">
      
      {/* Navigation */}
      <nav className="border-b border-purple-900/30 bg-zinc-950/80 backdrop-blur-md fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src='/rezLogo.png' className="text-purple-700 h-24 w-24 object-contain" alt="Rez in Focus Logo" width={96} height={96} />
          </Link>
          <div className="flex gap-6 text-sm font-medium tracking-wide">
            <Link href="/" className="hover:text-purple-500 transition-colors">Home</Link>
            <Link href="/services" className="text-purple-500 transition-colors">Services</Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="max-w-6xl mx-auto px-4 mb-20 mt-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6 bg-gradient-to-br from-stone-100 to-stone-500 bg-clip-text text-transparent">
          Investment & Services
        </h1>
        <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
          Transparent pricing and tailored packages designed to bring your boldest visual concepts to life. 
        </p>
      </section>

      {/* Detailed Services Layout */}
      <section className="max-w-6xl mx-auto px-4 space-y-24">
        {detailedServices.map((service, index) => (
          <div 
            key={service.id} 
            className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 aspect-square md:aspect-[4/5] bg-zinc-900 rounded-sm border border-zinc-800 relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                <ImageIcon className="h-24 w-24 text-zinc-600" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <span className="text-purple-500 font-semibold tracking-wide uppercase text-sm">{service.tagline}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-4">{service.title}</h2>
                <p className="text-stone-400 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>

              <div className="bg-zinc-900/40 border border-purple-900/20 rounded-sm p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
                  <div>
                    <p className="text-sm text-stone-500 uppercase tracking-wider mb-1">Investment</p>
                    <p className="text-2xl font-bold text-stone-200">{service.price}</p>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-stone-500 uppercase tracking-wider mb-4">What's Included</p>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-300">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button 
                onClick={() => handleBookNow(service.title)}
                className="group flex items-center gap-2 bg-stone-100 hover:bg-stone-300 text-zinc-950 px-8 py-4 rounded-sm font-bold tracking-wide transition-all"
              >
                Inquire Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* The Process Section */}
      <section className="mt-32 border-t border-purple-900/20 bg-zinc-900/20 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-100 mb-4">How It Works</h2>
            <p className="text-stone-400">A seamless process from the first email to the final gallery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-purple-900/0 via-purple-600/50 to-purple-900/0 z-0" />
            
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision, vibe, and requirements to ensure we're the perfect fit." },
              { step: "02", title: "The Shoot", desc: "Relax and let the creative process happen. I guide you through posing and lighting." },
              { step: "03", title: "Delivery", desc: "Receive your high-resolution, professionally retouched gallery within the agreed timeline." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center p-6 bg-zinc-950 border border-zinc-800 rounded-sm">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-purple-800 flex items-center justify-center text-xl font-bold text-purple-400 mb-6 shadow-[0_0_15px_rgba(153,27,27,0.2)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-stone-200 mb-3">{item.title}</h3>
                <p className="text-stone-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 w-full max-w-lg rounded-sm shadow-2xl relative animate-in fade-in zoom-in duration-200">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-stone-100 mb-2">Start a Project</h3>
              <p className="text-stone-400 mb-6 text-sm">Fill out the form below and I'll get back to you within 48 hours.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-sm px-4 py-2.5 text-stone-200 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-sm px-4 py-2.5 text-stone-200 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1">Service of Interest</label>
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-sm px-4 py-2.5 text-stone-200 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors appearance-none"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Commercial & Branding">Commercial & Branding</option>
                    <option value="Event & Wedding Coverage">Event & Wedding Coverage</option>
                    <option value="Creative Portraiture">Creative Portraiture</option>
                    <option value="Minis">Minis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-sm px-4 py-2.5 text-stone-200 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors resize-none"
                    placeholder="Tell me about your vision, timeline, and goals..."
                  ></textarea>
                </div>

                <button className="w-full bg-purple-800 hover:bg-purple-700 text-stone-50 py-3 rounded-sm font-bold tracking-wide transition-colors mt-4">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}