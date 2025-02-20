import React, { useState } from 'react';
import { PenTool, ExternalLink, ArrowRight } from 'lucide-react';
import {
  MinimalContactForm,
  MinimalLoginForm,
  MinimalSubscribeForm,
  ElegantContactForm,
  ElegantLoginForm,
  ElegantSubscribeForm,
  ModernContactForm,
  ModernLoginForm,
  ModernSubscribeForm
} from '@/components/FormsInputs';

interface Component {
  title: string;
  description: string;
  preview: string;
  components: React.ReactNode[];
}

const FormsShowcase = () => {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  // Mock form submission handler
  const handleSubmit = (data: { email: string; password?: string; message?: string }) => {
    console.log('Form submitted:', data);
  };

  const components: Component[] = [
    {
      title: "Minimal Forms",
      description: "Clean, simple forms with clear hierarchy",
      preview: "Perfect for business websites",
      components: [
        <MinimalContactForm key="minimal-contact" onSubmit={handleSubmit} />,
        <MinimalLoginForm key="minimal-login" onSubmit={handleSubmit} />,
        <MinimalSubscribeForm key="minimal-subscribe" onSubmit={handleSubmit} />
      ]
    },
    {
      title: "Elegant Forms",
      description: "Sophisticated forms with smooth animations",
      preview: "Great for premium services",
      components: [
        <ElegantContactForm key="elegant-contact" onSubmit={handleSubmit} />,
        <ElegantLoginForm key="elegant-login" onSubmit={handleSubmit} />,
        <ElegantSubscribeForm key="elegant-subscribe" onSubmit={handleSubmit} />
      ]
    },
    {
      title: "Modern Forms",
      description: "Contemporary forms with gradient effects",
      preview: "Perfect for startups",
      components: [
        <ModernContactForm key="modern-contact" onSubmit={handleSubmit} />,
        <ModernLoginForm key="modern-login" onSubmit={handleSubmit} />,
        <ModernSubscribeForm key="modern-subscribe" onSubmit={handleSubmit} />
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="p-6 flex items-center gap-4">
        <PenTool className="w-8 h-8 text-blue-400" />
        <div>
          <h3 className="text-2xl font-bold text-white">Forms & Inputs</h3>
          <p className="text-gray-400">Contact forms, login forms, and subscribe forms</p>
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
              {components[expandedComponent].components.map((form, index) => (
                <div key={index} className="bg-black/20 p-6 rounded-lg border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-6">
                    {index === 0 ? 'Contact Form' : index === 1 ? 'Login Form' : 'Subscribe Form'}
                  </h4>
                  <div className="max-w-md mx-auto">
                    {form}
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

export default FormsShowcase;