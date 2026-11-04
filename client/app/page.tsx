"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Aperture, 
  Image as ImageIcon, 
  Briefcase, 
  Users, 
  Sparkles, 
  Camera, // Added Camera icon
  ArrowRight 
} from 'lucide-react';
import ContactModal from './components/ContactModel'; 

interface ServiceData {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const servicesData: ServiceData[] = [
    {
      title: "Commercial & Branding",
      description: "High-contrast, bold imagery designed to elevate your brand identity and make your products stand out in a saturated market.",
      price: "$250",
      icon: <Briefcase className="h-10 w-10 text-purple-700 mb-6 group-hover:scale-110 group-hover:text-purple-500 transition-all duration-300" />
    },
    {
      title: "Event Coverage",
      description: "Documenting weddings and family events with a focus on candid, unseen moments and authentic emotional storytelling.",
      price: "$600",
      icon: <Users className="h-10 w-10 text-purple-700 mb-6 group-hover:scale-110 group-hover:text-purple-500 transition-all duration-300" />
    },
    {
      title: "Creative Portraiture",
      description: "Stylized, striking portraits that capture raw individuality through expert lighting, deep shadows, and bold compositions.",
      price: "$150",
      icon: <Sparkles className="h-10 w-10 text-purple-700 mb-6 group-hover:scale-110 group-hover:text-purple-500 transition-all duration-300" />
    },
    // Added Minis service to match the Services page
    {
      title: "Minis",
      description: "Short and sweet sessions perfect for quick family updates, couples, or seasonal portraits. Fast-paced and beautifully curated.",
      price: "$25",
      icon: <Camera className="h-10 w-10 text-purple-700 mb-6 group-hover:scale-110 group-hover:text-purple-500 transition-all duration-300" />
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-stone-200 font-sans selection:bg-purple-900 selection:text-white overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-purple-900/30 bg-zinc-950/80 backdrop-blur-md fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src='/rezLogo.png' className="text-purple-700 h-24 w-24 object-contain" alt="Rez in Focus Logo" width={96} height={96} />
          </div>
          <div className="flex gap-6 text-sm font-medium tracking-wide">
            <a href="#portfolio" className="hover:text-purple-500 transition-colors">Portfolio</a>
            <Link href="/services" className="hover:text-purple-500 transition-colors">Services</Link>
            <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 max-w-6xl mx-auto flex flex-col text-left justify-center min-h-[80vh]">
        <div 
          className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] bg-no-repeat opacity-10 pointer-events-none z-0"
          style={{ 
            backgroundImage: "url('/rezLogo.png')",
            backgroundSize: "contain",
            backgroundPosition: "center right"
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 bg-gradient-to-br from-stone-100 to-stone-500 bg-clip-text text-transparent">
            Capturing the <br /> Unseen
          </h1>
          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mb-10 leading-relaxed border-l-2 border-purple-800 pl-4">
            Commercial and creative photography specialized in striking contrasts, bold compositions, and raw visual storytelling.
          </p>
          <Link 
            href="/services"
            className="inline-block bg-purple-800 hover:bg-purple-700 text-stone-50 px-8 py-3 rounded-sm font-semibold tracking-wide transition-all border border-purple-600 shadow-[0_0_15px_rgba(153,27,27,0.3)]"
          >
            View Services & Pricing
          </Link>
        </div>
      </section>

      {/* Featured Gallery Grid */}
      <section id="portfolio" className="py-20 bg-zinc-900/50 border-y border-purple-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-stone-100 flex items-center gap-2">
            <ImageIcon className="text-purple-600" />
            Selected Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Weddings', 'Family Events', 'Portraits'].map((item) => (
              <div 
                key={item} 
                className="aspect-[4/5] bg-zinc-800 rounded-sm border border-zinc-700 hover:border-purple-700/50 transition-colors flex items-center justify-center group relative overflow-hidden"
              >
                {item === 'Weddings' ? (
                  <Image 
                    src="/wedding.png" 
                    alt="Weddings portfolio piece" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:opacity-100"
                  />
                ) : item === 'Family Events' ? (
                  <Image 
                    src="/family.jpeg" 
                    alt="family portfolio piece" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:opacity-100"
                  />
                ) : item === 'Portraits' ? (
                  <Image 
                    src="/port.jpeg" 
                    alt="portfolio piece" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:opacity-100"
                  />
                ) : (
                  <ImageIcon className="text-zinc-600 group-hover:scale-110 transition-transform duration-500" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 z-10">
                  <span className="text-stone-200 font-medium tracking-wide">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clickable Services Section */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-4 border-t border-purple-900/20">
        <div className="flex flex-col items-center text-center mb-16">
          <Aperture className="h-8 w-8 text-purple-700 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-4">Our Services</h2>
          <p className="text-stone-400 max-w-2xl">
            From raw, emotion-driven portraiture to high-impact commercial branding, we deliver striking visuals tailored to your narrative.
          </p>
        </div>

        {/* Updated Grid for 4 Items: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <Link 
              href="/services" 
              key={index}
              className="group flex flex-col bg-zinc-900/40 border border-zinc-800 hover:border-purple-600/50 rounded-sm p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900/80 cursor-pointer"
            >
              <div>
                {service.icon}
                <h3 className="text-xl font-bold text-stone-200 mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              {/* marginTop: auto pushes the footer to the bottom so all cards align nicely even if text length varies */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between mt-auto">
                <span className="text-stone-500 text-sm">Starting at {service.price}</span>
                <div className="flex items-center gap-1 text-purple-500 text-sm font-medium">
                  More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="py-20 max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-stone-100">Ready to Create?</h2>
        <p className="text-stone-400 mb-8 max-w-md mx-auto">
          Let's discuss your next commercial shoot or creative project.
        </p>
        <button 
          onClick={handleOpenModal}
          className="inline-block bg-purple-800 hover:bg-purple-700 text-stone-50 px-8 py-3 rounded-sm font-semibold tracking-wide transition-all border border-purple-600"
        >
          Contact Us
        </button>
      </footer>

      {/* Modal Component (Kept for the footer contact button) */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName={null}
      />
    </main>
  );
}