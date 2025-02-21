import React, { useState } from 'react';
import { LayoutGrid, ExternalLink, ArrowRight, Code, Palette, Shield } from 'lucide-react';
import { MinimalCards, GradientCards, GlassCards } from '@/components/ServiceCards';

interface Component {
  title: string;
  description: string;
  preview: string;
  component: React.ReactNode;
}

const ServiceCardsShowcase = () => {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  // Sample data for demos
  const services = [
    {
      title: "Custom Development",
      description: "Tailored solutions built specifically for your business needs",
      icon: <Code className="w-full h-full" />,
      price: "$2,999",
      features: [
        "Custom web application",
        "Responsive design",
        "Database integration",
        "API development"
      ],
      link: "#",
      popular: true
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that users love",
      icon: <Palette className="w-full h-full" />,
      price: "$1,499",
      features: [
        "User research",
        "Wireframing",
        "Visual design",
        "Prototyping"
      ],
      link: "#"
    },
    {
      title: "Maintenance",
      description: "Keep your application running smoothly",
      icon: <Shield className="w-full h-full" />,
      price: "$499/mo",
      features: [
        "24/7 monitoring",
        "Regular updates",
        "Security patches",
        "Performance optimization"
      ],
      link: "#"
    }
  ];

  const components: Component[] = [
    {
      title: "Minimal Service Cards",
      description: "Clean, straightforward service cards with essential information",
      preview: "Perfect for business websites",
      component: <MinimalCards />
    },
    {
      title: "Gradient Service Cards",
      description: "Modern service cards with gradient effects and animations",
      preview: "Great for tech companies",
      component: (
        <GradientCards
          title="Solutions"
          subtitle="Expert services tailored to your needs"
          services={services}
        />
      )
    },
    {
      title: "Glass Service Cards",
      description: "Sophisticated service cards with glass morphism effects",
      preview: "Perfect for premium services",
      component: <GlassCards />
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="p-6 flex items-center gap-4">
        <LayoutGrid className="w-8 h-8 text-blue-400" />
        <div>
          <h3 className="text-2xl font-bold text-white">Service Cards</h3>
          <p className="text-gray-400">Display your services and pricing options</p>
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

export default ServiceCardsShowcase;