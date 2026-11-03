import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  onBookClick: () => void; // Added this prop
}

export default function ServiceCard({ title, description, price, icon, onBookClick }: ServiceCardProps) {
  return (
    <div className="group h-80 w-full [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl border border-gray-800 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black p-6 text-gray-200 [backface-visibility:hidden]">
          <div className="mb-4 text-3xl text-purple-500">{icon}</div>
          <h3 className="mb-3 text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-xl bg-neutral-950 p-6 text-gray-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="mb-2 text-lg font-semibold text-purple-400">Starting at</h3>
          <p className="mb-6 text-4xl font-bold">{price}</p>
          
          {/* Changed back to a button that triggers the modal */}
          <button 
            onClick={onBookClick}
            className="rounded border border-purple-600 px-6 py-2 text-sm font-medium transition-colors hover:bg-purple-600 hover:text-white cursor-pointer"
          >
            Book Session
          </button>
        </div>

      </div>
    </div>
  );
}