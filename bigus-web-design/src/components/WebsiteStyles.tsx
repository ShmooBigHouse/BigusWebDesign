"use client";

import React, { useState, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import ModernBusiness from './WebsiteStyles/ModernBusiness';
import CreativePortfolio from './WebsiteStyles/CreativePortfolio';
import E_CommerceReady from './WebsiteStyles/E-CommerceReady';
import { useRouter } from 'next/navigation';

const WebsiteStyles = () => {
  const [activeStyle, setActiveStyle] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const styles = [
    {
      id: 'modern-business',
      name: "Modern Business",
      description: "Clean, professional design with bold typography and ample white space",
      features: ["Minimalist navigation", "Hero section with CTA", "Services grid", "Testimonials carousel"],
      color: "from-blue-500 to-indigo-600",
      component: <ModernBusiness />
    },
    {
      id: 'creative-portfolio',
      name: "Creative Portfolio",
      description: "Dynamic, artistic layout perfect for showcasing creative work",
      features: ["Masonry gallery", "Animated transitions", "Project spotlights", "Contact form"],
      color: "from-purple-500 to-pink-600",
      component: <CreativePortfolio />
    },
    {
      id: 'e-commerce',
      name: "E-commerce Ready",
      description: "Conversion-optimized design for online stores",
      features: ["Product grid", "Shopping cart", "Category navigation", "Search functionality"],
      color: "from-emerald-500 to-teal-600",
      component: <E_CommerceReady />
    }
  ];

  const style = styles[activeStyle];

  const handleStyleSelect = () => {
    // Store the selected style info in localStorage
    const styleInfo = {
      id: style.id,
      name: style.name
    };
    localStorage.setItem('selectedStyle', JSON.stringify(styleInfo));
    
    // Store the plan info with style selection identifier and original price
    localStorage.setItem('selectedPlan', JSON.stringify({
      id: 'premade-style',
      title: `Premade Website - ${style.name} Style`,
      price: 300,
      originalPrice: 499,
      features: [
        `${style.name} template customization`,
        "1 revision included",
        "Basic SEO setup",
        "Mobile-friendly design"
      ],
      selectedStyle: styleInfo
    }));

    // Navigate to checkout
    router.push('/checkout');
  };

  return (
    <div id="website-styles" className="container mx-auto px-6 py-24">
      {/* Section Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
        <div className="relative">
          <p className="text-4xl md:text-5xl font-bold mb-6 text-white">Easily Use</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-indigo-400">Premade Website Styles</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose from our curated collection of professional designs
          </p>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Categories List - Left Side */}
        <div className="w-80 flex-shrink-0 space-y-3">
          {styles.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveStyle(index);
                if (previewRef.current) {
                  previewRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`
                w-full text-left p-4 rounded-lg transition-all duration-300
                bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm
                border-2
                ${activeStyle === index 
                  ? 'border-blue-500/70 shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                  : 'border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_0_10px_rgba(147,51,234,0.3)]'}
              `}
            >
              <div className="flex items-center gap-3">
                <div className={`
                  text-purple-400 transition-colors duration-300
                  ${activeStyle === index ? 'text-blue-400' : ''}
                `}>
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Preview Area - Right Side */}
        <div className="flex-1 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-lg border-2 border-purple-500/20">
          <div className="relative p-6">
            {/* Title and Description */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${style.color} text-transparent bg-clip-text`}>
                  {style.name}
                </h3>
                <button
                  onClick={handleStyleSelect}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
                            text-white rounded-lg text-base font-medium whitespace-nowrap
                            hover:from-blue-600 hover:to-indigo-700 
                            transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                >
                  Select This Style
                </button>
              </div>
              <p className="text-gray-400 text-lg">{style.description}</p>
            </div>

            {/* Main Content Area */}
            <div className="flex gap-8">
              {/* Preview */}
              <div className="relative rounded-xl w-[800px] h-[800px]">
                <div className="relative p-2 rounded-xl h-full">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${style.color} opacity-40`} />
                  <div ref={previewRef} 
                       className="relative h-full overflow-y-auto rounded-lg 
                         [&::-webkit-scrollbar]:w-2 
                         [&::-webkit-scrollbar-track]:rounded-full
                         [&::-webkit-scrollbar-track]:bg-white/60
                         [&::-webkit-scrollbar-thumb]:rounded-full
                         [&::-webkit-scrollbar-thumb]:bg-black/80
                         [&::-webkit-scrollbar-thumb:hover]:bg-black">
                    <div style={{ height: '800px', position: 'relative' }}>
                      <div className="scale-[0.8] origin-top transform-gpu absolute inset-0">
                        {style.component}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 space-y-4">
                <h4 className="text-white text-lg font-semibold mb-6">Component Features</h4>
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
      </div>
    </div>
  );
};

export default WebsiteStyles;