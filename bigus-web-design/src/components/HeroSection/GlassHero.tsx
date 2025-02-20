// HeroSection/GlassHero.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { GlassPrimaryButton, GlassSecondaryButton } from '../ButtonsCTA';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export const GlassHero: React.FC<HeroProps> = ({
  title = "Build Something Amazing",
  subtitle = "Create stunning websites with our modern components and design systems. Fully customizable and built with React & Tailwind CSS.",
  primaryCTA = { text: "Get Started", href: "#" },
  secondaryCTA = { text: "Learn More", href: "#" }
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-3xl" />
      
      <div className="container mx-auto px-6 py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <GlassPrimaryButton>
                {primaryCTA.text}
                <ArrowRight className="ml-2 w-4 h-4" />
              </GlassPrimaryButton>
              <GlassSecondaryButton>
                {secondaryCTA.text}
              </GlassSecondaryButton>
            </div>
          </div>
          
          <div className="relative">
            {/* Glass card effect for image */}
            <div className="aspect-square w-full max-w-md mx-auto backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10
                          shadow-lg transform hover:rotate-2 transition-transform duration-300">
              <div className="relative w-full h-full">
                <Image 
                  src="/whiteturtle.png"
                  alt="Hero"
                  width={400}
                  height={400}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                  priority
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};