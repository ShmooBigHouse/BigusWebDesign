import React from 'react';
import { ArrowRight } from 'lucide-react';

export const MinimalHero = () => {
  return (
    <div className="relative overflow-hidden bg-pink-100">
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pink-900">
              Build Something Amazing
            </h1>
            <p className="text-xl text-pink-700 mb-8 max-w-lg">
              Create stunning websites with our modern components and design systems. Fully customizable and built with React & Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 bg-pink-600 text-white font-medium rounded-lg
                       hover:bg-pink-700 transition-colors duration-200 
                       flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button
                className="px-6 py-3 border-2 border-pink-600 text-pink-600 
                       font-medium rounded-lg hover:bg-pink-50 
                       transition-colors duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            {/* Yellow square container with rounded corners */}
            <div className="aspect-square w-full max-w-md mx-auto bg-yellow-300 rounded-3xl p-8 
                          shadow-lg transform hover:rotate-2 transition-transform duration-300">
              <div className="relative w-full h-full">
                <img 
                  src="/HeartFace.png"
                  alt="Hero"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalHero;