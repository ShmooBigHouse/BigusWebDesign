import React, { useState } from 'react';
import { MousePointer, ExternalLink, ArrowRight } from 'lucide-react';
import { MinimalPrimaryButton, MinimalSecondaryButton, MinimalTextButton, GradientPrimaryButton, GradientSecondaryButton, GradientFloatingButton, GlassPrimaryButton, GlassSecondaryButton, GlassIconButton } from '@/components/ButtonsCTA';

interface Component {
  title: string;
  description: string;
  preview: string;
  components: {
    name: string;
    component: React.ReactNode;
  }[];
}

const ButtonsCTAShowcase = () => {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  const components: Component[] = [
    {
      title: "Minimal Buttons",
      description: "Clean, simple buttons with hover effects",
      preview: "Perfect for clean interfaces",
      components: [
        {
          name: "Primary Button",
          component: <MinimalPrimaryButton>Get Started</MinimalPrimaryButton>
        },
        {
          name: "Secondary Button",
          component: <MinimalSecondaryButton>Learn More</MinimalSecondaryButton>
        },
        {
          name: "Text Button",
          component: <MinimalTextButton>View Details</MinimalTextButton>
        }
      ]
    },
    {
      title: "Gradient Buttons",
      description: "Eye-catching gradient styles with hover animations",
      preview: "Premium look and feel",
      components: [
        {
          name: "Primary Gradient",
          component: <GradientPrimaryButton>Get Started</GradientPrimaryButton>
        },
        {
          name: "Secondary Gradient",
          component: <GradientSecondaryButton>Learn More</GradientSecondaryButton>
        },
        {
          name: "Floating Gradient",
          component: <GradientFloatingButton>Explore Features</GradientFloatingButton>
        }
      ]
    },
    {
      title: "Glass Buttons",
      description: "Modern glass morphism effect with blur",
      preview: "Trendy design elements",
      components: [
        {
          name: "Primary Glass",
          component: <GlassPrimaryButton>Join Now</GlassPrimaryButton>
        },
        {
          name: "Secondary Glass",
          component: <GlassSecondaryButton>View Demo</GlassSecondaryButton>
        },
        {
          name: "Icon Glass",
          component: <GlassIconButton>Discover More</GlassIconButton>
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="p-6 flex items-center gap-4">
        <MousePointer className="w-8 h-8 text-blue-400" />
        <div>
          <h3 className="text-2xl font-bold text-white">Buttons & CTAs</h3>
          <p className="text-gray-400">Action buttons and call-to-action elements</p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {components[expandedComponent].components.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <h4 className="text-sm font-medium text-gray-400">
                    {item.name}
                  </h4>
                  {/* Container styling customized per button style */}
                  <div className={`
                    inline-flex items-center justify-center p-6 rounded-lg
                    ${expandedComponent === 0 && "bg-slate-100"} 
                    ${expandedComponent === 1 && "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-purple-500/20"} 
                    ${expandedComponent === 2 && "bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 border border-white/10"}
                  `}>
                    {item.component}
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

export default ButtonsCTAShowcase;