import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const GlassShowcase = () => {
  const projects = [
    {
      title: "The Art Stand",
      description: "Geometric art meets vibrant colors in this exploration of line and form. Orange wooden easel provides striking contrast.",
      category: "Digital Art",
      imageSrc: "/artstand.png",
      technologies: ["Mixed Media", "Digital Elements", "Wood Construction"],
      link: "#"
    },
    {
      title: "Evening Clutch",
      description: "Handcrafted leather handbag featuring premium Italian leather, gold-plated hardware, and expert stitching details.",
      category: "Product Design",
      imageSrc: "/purse.png",
      technologies: ["Italian Leather", "Gold Hardware", "Hand Stitching"],
      link: "#"
    },
    {
      title: "Modern Connection",
      description: "Social connection app focusing on shared interests and authentic interactions, featuring a warm and inviting interface.",
      category: "Mobile App",
      imageSrc: "/phone.png",
      technologies: ["User Experience", "iOS Design", "Social Platform"],
      link: "#"
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Glass Portfolio</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">Contemporary projects with a modern aesthetic</p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-8">
            <Image 
              src={project.imageSrc}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
              <div>
                <div className="text-sm text-blue-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs text-white bg-white/10 backdrop-blur-md px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link - Now at bottom of container */}
              <div className="mt-auto">
                <button 
                  className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlassShowcase;