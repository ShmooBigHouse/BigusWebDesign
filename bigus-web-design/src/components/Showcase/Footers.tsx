import React, { useState } from 'react';
import { Blocks, ExternalLink, ArrowRight } from 'lucide-react';
import {
  SimpleFooter,
  GradientFooter,
  MinimalFooter
} from '@/components/Footers';

interface Component {
  title: string;
  description: string;
  preview: string;
  component: React.ReactNode;
}

const FootersShowcase = () => {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  // Sample data for demos
  const sampleData = {
    companyName: "Sample Corp",
    email: "hello@samplecorp.com",
    phone: "(555) 123-4567",
    location: "San Francisco, USA"
  };

  const components: Component[] = [
    {
      title: "Simple Footer",
      description: "Clean, organized footer with company info, navigation, and contact details",
      preview: "Professional three-column layout",
      component: (
        <SimpleFooter {...sampleData} />
      )
    },
    {
      title: "Gradient Footer",
      description: "Modern footer with gradient effects and enhanced visual elements",
      preview: "Eye-catching design with smooth transitions",
      component: (
        <GradientFooter {...sampleData} />
      )
    },
    {
      title: "Minimal Footer",
      description: "Streamlined footer focused on essential information",
      preview: "Clean, distraction-free design",
      component: (
        <MinimalFooter {...sampleData} />
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="p-6 flex items-center gap-4">
        <Blocks className="w-8 h-8 text-blue-400" />
        <div>
          <h3 className="text-2xl font-bold text-white">Footers</h3>
          <p className="text-gray-400">Footer designs for various website styles</p>
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
              {/* Add a dark background to better showcase the footer */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none" />
              <div className="relative">
                {components[expandedComponent].component}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FootersShowcase;