import React, { useState } from 'react';
import { Users, ExternalLink, ArrowRight } from 'lucide-react';
import { MinimalGrid, GradientGrid, GlassGrid } from '@/components/TeamMembersGrid';

interface SocialLink {
  type: 'linkedin' | 'twitter' | 'github' | 'website';
  url: string;
}

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  bio?: string;
  socialLinks?: SocialLink[];
}

interface Component {
  title: string;
  description: string;
  preview: string;
  component: React.ReactNode;
}

const TeamMembersGridShowcase = () => {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  const components: Component[] = [
    {
      title: "Minimal Team Grid",
      description: "Clean, professional team member display with essential information",
      preview: "Perfect for corporate websites",
      component: <MinimalGrid />
    },
    {
      title: "Gradient Team Grid",
      description: "Modern team grid with gradient effects and smooth transitions",
      preview: "Great for creative agencies",
      component: <GradientGrid />
    },
    {
      title: "Glass Team Grid",
      description: "Sophisticated team grid with glass morphism effects",
      preview: "Perfect for modern startups",
      component: <GlassGrid />
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="p-6 flex items-center gap-4">
        <Users className="w-8 h-8 text-blue-400" />
        <div>
          <h3 className="text-2xl font-bold text-white">Team Members</h3>
          <p className="text-gray-400">Showcase your team with style</p>
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
            <div className="relative">
              {components[expandedComponent].component}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMembersGridShowcase;