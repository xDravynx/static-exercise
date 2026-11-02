"use client";

import React, { useState } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string | null;
}

export default function ContactModal({ isOpen, onClose, serviceName }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      details: formData.get('details'),
      service: serviceName,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
      
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-sm border border-purple-900/40 bg-zinc-950 p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-stone-200 transition-colors"
        >
          <X size={24} />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle2 className="h-16 w-16 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold text-stone-100 mb-2">Request Sent!</h3>
            <p className="text-stone-400">We will be in touch with you shortly.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-stone-100 mb-1">Book a Session</h2>
            {serviceName ? (
              <p className="text-purple-500 text-sm mb-6">Inquiring about: <span className="font-semibold text-stone-300">{serviceName}</span></p>
            ) : (
              <p className="text-stone-400 text-sm mb-6">Let's discuss your next project.</p>
            )}

            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-1.5">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full rounded-sm border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-stone-200 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-1.5">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full rounded-sm border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-stone-200 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all" 
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-400 mb-1.5">Project Details</label>
                <textarea 
                  name="details"
                  rows={4} 
                  required
                  className="w-full rounded-sm border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-stone-200 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-all resize-none" 
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-purple-800 hover:bg-purple-700 py-3 text-stone-50 font-semibold tracking-wide transition-colors mt-4 border border-purple-600 shadow-[0_0_15px_rgba(153,27,27,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Request'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}