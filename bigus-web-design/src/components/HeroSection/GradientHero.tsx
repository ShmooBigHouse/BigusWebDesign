import React from 'react';
import { ArrowRight } from 'lucide-react';

export const GradientHero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-700/20 to-indigo-600/20" />
      
      <div className="container mx-auto px-6 py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Build Something Amazing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Create stunning websites with our modern components and design systems. Fully customizable and built with React & Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 
                        hover:from-purple-700 hover:to-indigo-800 text-white font-medium rounded-lg
                        transition-colors duration-200 flex items-center group"
              >
                {/* Centered glow effect */}
                <div className="absolute inset-0 bg-purple-500 rounded-lg blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </button>
              <button
                className="px-6 py-3 border-2 border-purple-600 text-purple-400 
                        hover:text-purple-300 hover:border-purple-500 font-medium rounded-lg 
                        transition-colors duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            {/* Image container with rounded corners */}
            <div className="aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-8 
                          shadow-lg transform hover:rotate-2 transition-transform duration-300">
              <div className="relative w-full h-full">
                <img 
                  src="/turtle.png"
                  alt="Hero"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
            {/* Decorative orb */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-800/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientHero;