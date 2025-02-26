import React, { useState } from 'react';
import { GitBranch, ExternalLink, ArrowRight } from 'lucide-react';
import { MinimalNumbers, GradientNumbers, GlassNumbers } from '@/components/NumberedComponents';

interface Component {
  title: string;
  description: string;
  preview: string;
  component: React.ReactNode;
}

// Define the step type that matches your timeline components
interface Step {
  title: string;
  description: string;
  duration?: string;
  status?: 'completed' | 'in-progress' | 'upcoming';
}

const NumberedComponentsShowcase = () => {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  // Sample steps data to be used across all timeline variants
  const sampleSteps: Step[] = [
    {
      title: "Discovery Phase",
      description: "Initial consultation and project planning",
      duration: "Week 1",
      status: 'completed'
    },
    {
      title: "Design Phase",
      description: "Creating wireframes and visual designs",
      duration: "Week 2-3",
      status: 'in-progress'
    },
    {
      title: "Development",
      description: "Building the core functionality",
      duration: "Week 4-6",
      status: 'upcoming'
    },
    {
      title: "Testing",
      description: "Quality assurance and user testing",
      duration: "Week 7",
      status: 'upcoming'
    },
    {
      title: "Launch",
      description: "Deployment and final adjustments",
      duration: "Week 8",
      status: 'upcoming'
    }
  ];

  const components: Component[] = [
    {
      title: "Minimal Numbers",
      description: "Clean, straightforward numbered components with clear progression",
      preview: "Perfect for business processes",
      component: <MinimalNumbers steps={sampleSteps} />
    },
    {
      title: "Gradient Numbers",
      description: "Modern numbered components with gradient effects and transitions",
      preview: "Great for creative workflows",
      component: <GradientNumbers />
    },
    {
      title: "Glass Numbers",
      description: "Sophisticated numbered components with glass morphism effects",
      preview: "Perfect for premium services",
      component: <GlassNumbers />
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="p-6 flex items-center gap-4">
        <GitBranch className="w-8 h-8 text-blue-400" />
        <div>
          <h3 className="text-2xl font-bold text-white">Numbered Components</h3>
          <p className="text-gray-400">Visual guides for processes, timelines, and key points.</p>
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

export default NumberedComponentsShowcase;