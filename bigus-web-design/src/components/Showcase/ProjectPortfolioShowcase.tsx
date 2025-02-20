import React, { useState } from 'react';
import { Folder, ExternalLink, ArrowRight } from 'lucide-react';
import {
  MinimalShowcase,
  GradientShowcase,
  GlassShowcase
} from '@/components/ProjectPortfolioShowcase';

interface Component {
  title: string;
  description: string;
  preview: string;
  component: React.ReactNode;
}

const ProjectPortfolioShowcase = () => {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  // Sample data for demos
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern online shopping experience built with Next.js and Stripe",
      category: "Web Development",
      imageSrc: "/api/placeholder/400/300",
      technologies: ["Next.js", "React", "Stripe", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Clean and minimal portfolio for a professional photographer",
      category: "Design",
      imageSrc: "/api/placeholder/400/300",
      technologies: ["React", "Framer Motion", "GSAP", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application for task management",
      category: "Mobile Development",
      imageSrc: "/api/placeholder/400/300",
      technologies: ["React Native", "Redux", "Firebase", "TypeScript"],
      link: "#"
    }
  ];

  const components: Component[] = [
    {
      title: "Minimal Portfolio",
      description: "Clean, straightforward project showcase with essential details",
      preview: "Perfect for professional portfolios",
      component: (
        <MinimalShowcase
          title="Featured Projects"
          subtitle="A selection of our recent work"
          projects={projects}
        />
      )
    },
    {
      title: "Gradient Portfolio",
      description: "Modern portfolio with gradient effects and smooth transitions",
      preview: "Great for creative agencies",
      component: (
        <GradientShowcase
          title="Our Work"
          subtitle="Showcasing our best projects"
          projects={projects}
        />
      )
    },
    {
      title: "Glass Portfolio",
      description: "Sophisticated portfolio with glass morphism effects",
      preview: "Perfect for design studios",
      component: (
        <GlassShowcase
          title="Project Gallery"
          subtitle="Explore our latest projects"
          projects={projects}
        />
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="p-6 flex items-center gap-4">
        <Folder className="w-8 h-8 text-blue-400" />
        <div>
          <h3 className="text-2xl font-bold text-white">Project Portfolio</h3>
          <p className="text-gray-400">Showcase your work with style</p>
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

export default ProjectPortfolioShowcase;