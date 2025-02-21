import React, { useState } from 'react';
import { Palette, ExternalLink, ArrowRight } from 'lucide-react';
import { MinimalBackground, MinimalPattern, MinimalDivider, GradientBackground, GradientPattern, GradientDivider, GlassBackground, GlassPattern, GlassDivider } from '@/components/VisualElements';

interface Component {
  title: string;
  description: string;
  preview: string;
  components: React.ReactNode[];
  labels: string[];
}

const VisualElementsShowcase = () => {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  const components: Component[] = [
    {
      title: "Minimal Visuals",
      description: "Clean, subtle visual elements with minimal styling",
      preview: "Perfect for professional websites",
      labels: ["Background", "Pattern", "Divider"],
      components: [
        <MinimalBackground key="minimal-bg" className="h-64" />,
        <MinimalPattern key="minimal-pattern" className="h-64" />,
        <MinimalDivider key="minimal-divider" />
      ]
    },
    {
      title: "Gradient Visuals",
      description: "Eye-catching gradient effects with dynamic colors",
      preview: "Great for modern interfaces",
      labels: ["Background", "Pattern", "Divider"],
      components: [
        <GradientBackground key="gradient-bg" className="h-64" />,
        <GradientPattern key="gradient-pattern" className="h-64" />,
        <GradientDivider key="gradient-divider" />
      ]
    },
    {
      title: "Glass Visuals",
      description: "Modern glass morphism effects with blur and transparency",
      preview: "Perfect for dark themes",
      labels: ["Background", "Pattern", "Divider"],
      components: [
        <GlassBackground key="glass-bg" className="h-64" />,
        <GlassPattern key="glass-pattern" className="h-64" />,
        <GlassDivider key="glass-divider" />
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="p-6 flex items-center gap-4">
        <Palette className="w-8 h-8 text-blue-400" />
        <div>
          <h3 className="text-2xl font-bold text-white">Visual Elements</h3>
          <p className="text-gray-400">Backgrounds, patterns, and section dividers</p>
        </div>
      </div>

      {/* Component Grid */}
      {expandedComponent === null ? (
        <div className="grid md:grid-cols-3 gap-4 p-6">
          {components.map((component, index) => (
            <button
              key={index}
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
            <div className="space-y-12">
              {components[expandedComponent].components.map((visual, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">
                    {components[expandedComponent].labels[index]}
                  </h4>
                  <div className="relative rounded-lg overflow-hidden border border-white/10">
                    {visual}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualElementsShowcase;