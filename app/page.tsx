import React from 'react';
import { Camera, Aperture, Mail, Image as ImageIcon } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-stone-200 font-sans selection:bg-purple-900 selection:text-white">
      {/* Navigation */}
      <nav className="border-b border-purple-900/30 bg-zinc-950/80 backdrop-blur-md fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src='/rezLogo.png' className="text-purple-700 h-32 w-32 object-contain" />
          </div>
          <div className="flex gap-6 text-sm font-medium tracking-wide">
            <a href="#portfolio" className="hover:text-purple-500 transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-purple-500 transition-colors">Services</a>
            <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col items-center text-center">
        <Camera className="h-16 w-16 text-purple-700 mb-6 opacity-80" />
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-br from-stone-100 to-stone-500 bg-clip-text text-transparent">
          Capturing the Unseen
        </h1>
        <p className="text-lg md:text-xl text-stone-400 max-w-2xl mb-10 leading-relaxed border-l-2 border-purple-800 pl-4 text-left">
          Commercial and creative photography specialized in striking contrasts, bold compositions, and raw visual storytelling.
        </p>
        <a 
          href="#contact" 
          className="bg-purple-800 hover:bg-purple-700 text-stone-50 px-8 py-3 rounded-sm font-semibold tracking-wide transition-all border border-purple-600 shadow-[0_0_15px_rgba(153,27,27,0.3)]"
        >
          Book a Session
        </a>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-stone-200 font-medium tracking-wide">{item}</span>
                </div>
                <ImageIcon className="text-zinc-600 group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="py-20 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6 text-stone-100">Ready to Create?</h2>
        <p className="text-stone-400 mb-8 max-w-md mx-auto">
          Let's discuss your next commercial shoot or creative project.
        </p>
        <a 
          href="mailto:contact@rezinfocus.com" 
          className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 font-medium transition-colors"
        >
          <Mail className="h-5 w-5" />
          contact@rezinfocus.com
        </a>
      </footer>
    </main>
  );
}
