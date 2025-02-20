import React, { useState } from 'react';
import { FileText, ExternalLink, ArrowRight, Code, Palette, Shield } from 'lucide-react';
import {
  ModernFeatureGrid,
  ModernTestimonial,
  ModernTextBlock,
  GradientFeatureGrid,
  GradientTestimonial,
  GradientTextBlock,
  GlassFeatureGrid,
  GlassTestimonial,
  GlassTextBlock
} from '@/components/ContentBlocks';

interface Component {
  title: string;
  description: string;
  preview: string;
  components: React.ReactNode[];
}

const ContentBlocksShowcase = () => {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  // Sample data for demos
  const features = [
    {
      title: "Custom Development",
      description: "Tailored solutions built for your needs.",
      icon: <Code className="w-full h-full" />
    },
    {
      title: "Creative Design",
      description: "Modern, eye-catching interfaces.",
      icon: <Palette className="w-full h-full" />
    },
    {
      title: "Security First",
      description: "Enterprise-grade protection.",
      icon: <Shield className="w-full h-full" />
    }
  ];

  const testimonials = [
    {
      quote: "An absolute game-changer for our business.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechCorp",
      avatarUrl: "/api/placeholder/64/64"
    }
  ];

  const textContent = {
    title: "About Our Process",
    subtitle: "How we deliver excellence",
    content: "We believe in iterative development with continuous feedback. Our process ensures that every project meets the highest standards of quality and user experience."
  };

  const components: Component[] = [
    {
      title: "Modern Content Blocks",
      description: "Clean, professional content blocks with white backgrounds",
      preview: "Perfect for business websites",
      components: [
        <ModernFeatureGrid key="modern-feature" features={features} />,
        <ModernTestimonial key="modern-testimonial" testimonials={testimonials} />,
        <ModernTextBlock key="modern-text" {...textContent} />
      ]
    },
    {
      title: "Gradient Content Blocks",
      description: "Eye-catching gradient backgrounds with dynamic colors",
      preview: "Great for landing pages",
      components: [
        <GradientFeatureGrid key="gradient-feature" features={features} />,
        <GradientTestimonial key="gradient-testimonial" testimonials={testimonials} />,
        <GradientTextBlock key="gradient-text" {...textContent} />
      ]
    },
    {
      title: "Glass Content Blocks",
      description: "Modern glass morphism effect with blur backgrounds",
      preview: "Perfect for dark themes",
      components: [
        <GlassFeatureGrid key="glass-feature" features={features} />,
        <GlassTestimonial key="glass-testimonial" testimonials={testimonials} />,
        <GlassTextBlock key="glass-text" {...textContent} />
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="p-6 flex items-center gap-4">
        <FileText className="w-8 h-8 text-blue-400" />
        <div>
          <h3 className="text-2xl font-bold text-white">Content Blocks</h3>
          <p className="text-gray-400">Feature grids, testimonials, and text sections</p>
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
            <div className="space-y-12">
              {components[expandedComponent].components.map((block, index) => (
                <div key={`content-block-${index}`} className="bg-black/20 rounded-lg border border-white/10 overflow-hidden">
                  <div className="p-6">
                    {block}
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

export default ContentBlocksShowcase;