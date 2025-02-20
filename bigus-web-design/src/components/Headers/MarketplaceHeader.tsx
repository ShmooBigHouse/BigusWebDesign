// components/Headers/MarketplaceHeader.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ShoppingCart, User } from 'lucide-react';

interface MarketplaceHeaderProps {
  title?: string;
  description?: string;
  ctaText?: string;
}

const MarketplaceHeader: React.FC<MarketplaceHeaderProps> = ({
  title = "Your Marketplace",
  description = "Discover amazing products and services at competitive prices",
  ctaText = "Join Now"
}) => {
  const [activeTab, setActiveTab] = useState('browse');

  const navItems = [
    { id: 'browse', label: 'Browse' },
    { id: 'categories', label: 'Categories' },
    { id: 'sell', label: 'Sell' },
    { id: 'local', label: 'Local Finds' },
    { id: 'deals', label: 'Daily Deals' }
  ];

  return (
    <div className="w-full bg-white">
      {/* Top Bar with Actions */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="text-sm text-gray-600 hover:text-gray-900">Shipping</button>
            <button className="text-sm text-gray-600 hover:text-gray-900">Help Center</button>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <Search className="w-5 h-5" />
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Full-width background image */}
        <div className="relative w-full h-[500px]">
          <Image 
            src="/Market.png"
            alt="Market Background"
            fill
            className="object-cover"
            priority
          />
          
          {/* Content container */}
          <div className="absolute inset-0">
            <div className="max-w-7xl mx-auto px-4 py-8 relative">
              
              {/* Text Box - Positioned lower with strong shadow */}
              <div className="absolute top-16 right-4 w-full md:w-1/2 z-20">
                <div className="bg-white p-6 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                  <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                    {title}
                  </h1>
                  <p className="text-lg text-gray-800 mb-4">
                    {description}
                  </p>
                  <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white 
                                   font-medium rounded-lg transition-all duration-300 
                                   hover:bg-blue-700 hover:shadow-lg">
                    {ctaText}
                  </button>
                </div>
              </div>

              {/* Logo and Colors Container - Positioned Much Lower */}
              <div className="absolute left-0 top-[250px] w-full">
                {/* Color stripes emanating from the circle */}
                <div className="absolute top-[-32px] left-[300px] right-0 h-6 bg-yellow-400 opacity-80" />
                <div className="absolute top-[-10px] left-[300px] right-0 h-32 bg-pink-500 opacity-60" />
                
                {/* Logo circle */}
                <div className="absolute left-[150px] -top-32 z-10">
                  <div className="relative w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <div className="relative w-56 h-56">
                      <Image 
                        src="/MarketLogo.png"
                        alt="Marketplace Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`
                    px-3 py-4 text-sm font-medium border-b-2 transition-colors
                    ${activeTab === item.id 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                  `}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHeader;