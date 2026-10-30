import React from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string | null;
}

export default function ContactModal({ isOpen, onClose, serviceName }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="w-full max-w-lg rounded-sm border border-purple-900/40 bg-zinc-950 p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-stone-200 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold text-stone-100 mb-1">Book a Session</h2>
        {serviceName ? (
          <p className="text-purple-500 text-sm mb-6">Inquiring about: <span className="font-semibold text-stone-300">{serviceName}</span></p>
        ) : (
          <p className="text-stone-400 text-sm mb-6">Let's discuss your next project.</p>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-1.5">Name</label>
            <input 
              type="text" 
              required
              className="w-full rounded-sm border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-stone-200 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all" 
              placeholder="Your Name" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-1.5">Email</label>
            <input 
              type="email" 
              required
              className="w-full rounded-sm border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-stone-200 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all" 
              placeholder="your@email.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-400 mb-1.5">Project Details</label>
            <textarea 
              rows={4} 
              required
              className="w-full rounded-sm border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-stone-200 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all resize-none" 
              placeholder="Tell us about your vision..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full rounded-sm bg-purple-800 hover:bg-purple-700 py-3 text-stone-50 font-semibold tracking-wide transition-colors mt-4 border border-purple-600 shadow-[0_0_15px_rgba(153,27,27,0.2)]"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}