import React from 'react';
import Image from 'next/image';

export const MinimalShowcase = () => {
  const projects = [
    {
      title: "The Art Stand",
      medium: "Platform Design",
      year: "2024",
      imageSrc: "/artstand.png"
    },
    {
      title: "Evening Clutch",
      medium: "Product Photography",
      year: "2024",
      imageSrc: "/purse.png"
    },
    {
      title: "Modern Connection",
      medium: "UI/UX Design",
      year: "2024",
      imageSrc: "/phone.png"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image Box - Using same structure as working hero sections */}
            <div className="relative w-full h-64">
            <Image 
              src={project.imageSrc}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
            </div>
            
            {/* Text Content */}
            <div className="mt-4 bg-gray-50/80 backdrop-blur-sm p-4 w-full">
              <h3 className="text-xl text-gray-800 font-light mb-2">{project.title}</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>{project.medium}</p>
                <p>{project.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinimalShowcase;