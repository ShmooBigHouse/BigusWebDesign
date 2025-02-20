import React from 'react';

export const GradientShowcase = () => {
  const projects = [
    {
      title: "The Art Stand",
      medium: "Platform Design",
      year: "2024",
      imageSrc: "/artstand.png",
      description: "A digital marketplace connecting artists with collectors. Features a modern, intuitive interface that puts the artwork first."
    },
    {
      title: "Evening Clutch",
      medium: "Product Photography",
      year: "2024",
      imageSrc: "/purse.png",
      description: "Luxury product photography campaign highlighting the craftsmanship and elegance of high-end accessories."
    },
    {
      title: "Modern Connection",
      medium: "UI/UX Design",
      year: "2024",
      imageSrc: "/phone.png",
      description: "A mobile application interface designed to create meaningful connections through shared interests and experiences."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 bg-purple-50">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-purple-900 mb-4">Portfolio</h2>
        <p className="text-purple-700">Selected works and recent projects</p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-8">
            {/* Image Box */}
            <div className="bg-white rounded-3xl p-12 shadow-lg shadow-purple-100">
              <div className="relative h-96 flex items-center justify-center">
                <img 
                  src={project.imageSrc}
                  alt={project.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>

            {/* Content Box */}
            <div className="bg-white rounded-3xl p-12 shadow-lg shadow-purple-100 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-light text-purple-900">{project.title}</h3>
                  <p className="text-purple-600">{project.medium}</p>
                  <p className="text-purple-400 text-sm">{project.year}</p>
                </div>
                
                <div className="w-12 h-0.5 bg-purple-200"></div>
                
                <p className="text-purple-800 leading-relaxed">
                  {project.description}
                </p>
                
                <button className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors">
                  View Project Details
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradientShowcase;