// components/WebsiteStyles.tsx
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const WebsiteStyles = () => {
  const [activeStyle, setActiveStyle] = useState(0);

  const styles = [
    {
      name: "Modern Business",
      description: "Clean, professional design with bold typography and ample white space",
      features: ["Minimalist navigation", "Hero section with CTA", "Services grid", "Testimonials carousel"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Creative Portfolio",
      description: "Dynamic, artistic layout perfect for showcasing creative work",
      features: ["Masonry gallery", "Animated transitions", "Project spotlights", "Contact form"],
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "E-commerce Ready",
      description: "Conversion-optimized design for online stores",
      features: ["Product grid", "Shopping cart", "Category navigation", "Search functionality"],
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const nextStyle = () => {
    setActiveStyle((prev) => (prev + 1) % styles.length);
  };

  const prevStyle = () => {
    setActiveStyle((prev) => (prev - 1 + styles.length) % styles.length);
  };

  const style = styles[activeStyle];

  return (
    <div id="website-styles" className="container mx-auto px-6 py-24">
      {/* Section Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Premade</span>{' '}
            <span className="text-indigo-400">Website Styles</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose from our curated collection of professional designs
          </p>
        </div>
      </div>
      
      <div className="relative bg-black/30 rounded-2xl p-8 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        {/* Navigation Buttons */}
        <button 
          onClick={prevStyle}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Previous style"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextStyle}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Next style"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {/* Preview Image */}
          <div className="relative aspect-video mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black group">
          <Image 
            src="/api/placeholder/800/450"
            alt={style.name}
            width={800}
            height={450}
            className="w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
          />
            <div className={`absolute inset-0 bg-gradient-to-r ${style.color} opacity-40`} />
          </div>

          {/* Style Info */}
          <div className="text-center mb-8">
            <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${style.color} text-transparent bg-clip-text`}>
              {style.name}
            </h3>
            <p className="text-gray-400 text-lg mb-6">{style.description}</p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-4">
            {style.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-black/30 p-4 rounded-lg border border-white/20 hover:border-blue-500/50 transition-all group hover:-translate-y-1 duration-300"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-indigo-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteStyles;