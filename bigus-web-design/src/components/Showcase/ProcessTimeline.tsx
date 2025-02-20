import React, { useState } from 'react';
import { GitBranch, ExternalLink, ArrowRight } from 'lucide-react';
import {
  MinimalTimeline,
  GradientTimeline,
  GlassTimeline
} from '@/components/ProcessTimeline';

interface Component {
  title: string;
  description: string;
  preview: string;
  component: React.ReactNode;
}

const ProcessTimelineShowcase = () => {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  // Sample data for demos
  const timelineSteps = [
    {
      title: "Discovery",
      description: "Initial consultation to understand your needs and goals",
      duration: "1-2 weeks"
    },
    {
      title: "Planning",
      description: "Developing project scope, timeline, and technical specifications",
      duration: "1-2 weeks"
    },
    {
      title: "Design",
      description: "Creating wireframes and visual designs for your approval",
      duration: "2-3 weeks"
    }
  ];

  const components: Component[] = [
    {
      title: "Minimal Timeline",
      description: "Clean, straightforward timeline with clear progression",
      preview: "Perfect for business processes",
      component: <MinimalTimeline />
    },
    {
      title: "Gradient Timeline",
      description: "Modern timeline with gradient effects and transitions",
      preview: "Great for creative workflows",
      component: <GradientTimeline />
    },
    {
      title: "Glass Timeline",
      description: "Sophisticated timeline with glass morphism effects",
      preview: "Perfect for premium services",
      component: <GlassTimeline />
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="p-6 flex items-center gap-4">
        <GitBranch className="w-8 h-8 text-blue-400" />
        <div>
          <h3 className="text-2xl font-bold text-white">Process Timelines</h3>
          <p className="text-gray-400">Visual timelines to showcase your workflow</p>
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

export default ProcessTimelineShowcase;