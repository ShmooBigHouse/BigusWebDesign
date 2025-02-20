import React, { useState } from 'react';
import { Layout, ExternalLink, ArrowRight } from 'lucide-react';
import {
  MinimalHero,
  GradientHero,
  GlassHero
} from '@/components/HeroSection';

interface Component {
  title: string;
  description: string;
  preview: string;
  component: React.ReactNode;
}

const HeroSectionShowcase = () => {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  const components: Component[] = [
    {
      title: "Minimal Hero",
      description: "Clean, simple hero section with clear call-to-actions",
      preview: "Perfect for business websites",
      component: <MinimalHero />
    },
    {
      title: "Gradient Hero",
      description: "Eye-catching hero with gradient effects and animations",
      preview: "Great for modern startups",
      component: <GradientHero />
    },
    {
      title: "Glass Hero",
      description: "Modern glass morphism hero with blur effects",
      preview: "Perfect for dark themes",
      component: (
        <GlassHero 
          title="Build Something Amazing"
          subtitle="Create stunning websites with our modern components and design systems."
          primaryCTA={{ text: "Get Started", href: "#" }}
          secondaryCTA={{ text: "Learn More", href: "#" }}
        />
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="p-6 flex items-center gap-4">
        <Layout className="w-8 h-8 text-blue-400" />
        <div>
          <h3 className="text-2xl font-bold text-white">Hero Sections</h3>
          <p className="text-gray-400">Impactful hero sections for various website styles</p>
        </div>
      </div>

      {/* Component Grid */}
      {expandedComponent === null ? (
        <div className="grid md:grid-cols-3 gap-4 p-6">
          {components.map((component, index) => (
            <button
              key={`component-${index}`}
              onClick={() => setExpandedComponent(index)}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 hover:border-blue-500/50 transition-all duration-300 p-6 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-500">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {component.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">
                    {component.description}
                  </p>
                  <div className="flex items-center text-sm text-indigo-400">
                    <span className="mr-2">{component.preview}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="p-6">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="mb-8">
              <button 
                onClick={() => setExpandedComponent(null)}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                ← Back to components
              </button>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">
                {components[expandedComponent].title}
              </h3>
              <p className="text-gray-400">
                {components[expandedComponent].description}
              </p>
            </div>
            <div className="relative">
              {components[expandedComponent].component}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSectionShowcase;