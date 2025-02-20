import React from 'react';
import { ClipboardCheck, LineChart, Rocket, Users, Zap, ChevronDown } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      title: "Discovery Call",
      description: "In-depth consultation to understand your vision, goals, and specific requirements.",
      icon: <Users className="w-full h-full" />,
      duration: "30-60 mins",
      details: [
        "Discuss project scope",
        "Define target audience",
        "Explore design preferences"
      ]
    },
    {
      title: "Needs Analysis",
      description: "Thorough analysis of your business needs and technical requirements.",
      icon: <LineChart className="w-full h-full" />,
      duration: "1-2 days",
      details: [
        "Technical requirements",
        "Feature prioritization",
        "Platform compatibility"
      ]
    },
    {
      title: "Solution Mapping",
      description: "Tailored recommendations based on your needs and budget constraints.",
      icon: <ClipboardCheck className="w-full h-full" />,
      duration: "1-2 days",
      details: [
        "Component selection",
        "Custom vs pre-built options",
        "Budget optimization"
      ]
    },
    {
      title: "Rapid Development",
      description: "Swift implementation of your chosen solution with regular updates.",
      icon: <Zap className="w-full h-full" />,
      duration: "1-3 days",
      details: [
        "Component-based: 1 day delivery",
        "Custom design: 3 days delivery",
        "Daily progress updates"
      ]
    },
    {
      title: "Launch & Support",
      description: "Smooth deployment and ongoing support to ensure your success.",
      icon: <Rocket className="w-full h-full" />,
      duration: "Ongoing",
      details: [
        "Quality assurance",
        "Domain setup",
        "Post-launch support"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      {/* Section Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our Development</span>{' '}
            <span className="text-indigo-400">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From concept to launch in as little as one day
          </p>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative">
        {/* Connecting Line - Neon Effect */}
        <div className="absolute left-[50%] hidden lg:block" style={{ 
          top: '72px',  // Starts below first number
          height: 'calc(100% - 144px)'  // Ends above last number
        }}>
          {/* Bright center line */}
          <div className="absolute left-0 w-0.5 h-full bg-blue-500/80" />
          {/* Glow effect */}
          <div className="absolute -left-1 w-2 h-full bg-blue-500/20 blur-sm" />
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className={`relative flex items-center gap-8 lg:gap-16 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}>
              {/* Step Content */}
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-700" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 text-blue-400 flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300 mb-4">{step.description}</p>
                        <div className="space-y-2">
                          {step.details.map((detail, i) => (
                            <div key={i} className="flex items-center text-gray-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Node with Duration */}
              <div className="relative w-24 flex-shrink-0">
                <div className="relative w-20 h-20 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl" />
                  <div className="relative w-full h-full flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                </div>
                {/* Duration Tag */}
                <div className="text-center mt-2 relative z-10">
                  <span className="inline-block px-3 py-1 bg-white/5 backdrop-blur-xl rounded-full text-sm text-blue-400 border border-blue-400/20 relative">
                    <div className="absolute inset-0 bg-slate-900/80 rounded-full -z-10"></div>
                    {step.duration}
                  </span>
                </div>
                {/* Animated Arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 text-blue-500" 
                       style={{ bottom: '-5rem' }}>
                    <ChevronDown className="w-8 h-8 animate-bounce" />
                  </div>
                )}
              </div>

              {/* Empty flex-1 div to maintain layout */}
              <div className="hidden lg:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;