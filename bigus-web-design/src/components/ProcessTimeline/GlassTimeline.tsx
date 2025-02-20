// components/ProcessTimeline/GlassTimeline.tsx
import React from 'react';
import { Code, Palette, Shield } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  duration?: string;
  status?: 'completed' | 'in-progress' | 'upcoming';
  icon?: React.ReactNode;
}

export const GlassTimeline: React.FC = () => {
  return (
    <div className="space-y-32">
      {/* Process Steps */}
      <div className="relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-lg border border-white/10 p-8">
        <div className="text-white text-xl mb-8">Getting Started</div>
        <div className="flex justify-between gap-8">
          {[
            {
              title: "Account Setup",
              description: "Create your account and set basic preferences",
              status: 'completed'
            },
            {
              title: "Profile Creation",
              description: "Add your personal or business information",
              status: 'in-progress'
            },
            {
              title: "Connect Services",
              description: "Link your external accounts and services",
              status: 'upcoming'
            }
          ].map((step, index) => (
            <div key={index} className="flex-1">
              {/* Number Circle with Glass Effect */}
              <div className="relative h-16 w-16 mb-8 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-duration-700" />
                <div className="relative h-full w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-xl font-bold text-white">
                  {index + 1}
                </div>
              </div>

              {/* Content Box */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-700" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl min-h-[160px] flex flex-col">
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{step.description}</p>
                  {step.status && (
                    <span className={`
                      inline-block px-4 py-1 rounded-full text-sm backdrop-blur-lg border self-start
                      ${step.status === 'completed' 
                        ? 'bg-green-500/10 border-green-500/50 text-green-400' 
                        : step.status === 'in-progress'
                        ? 'bg-blue-500/10 border-blue-500/50 text-blue-400'
                        : 'bg-gray-500/10 border-gray-500/50 text-gray-400'}
                    `}>
                      {step.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-lg border border-white/10 p-8">
        <div className="text-white text-xl mb-8">Timeline</div>
        <div className="space-y-8">
          {[
            {
              title: "Company Founded",
              description: "Started operations in a small office, establishing our core team and initial service offerings.",
              duration: "2020"
            },
            {
              title: "First Major Client",
              description: "Secured partnership with industry leader, marking a significant milestone in our growth.",
              duration: "2021"
            },
            {
              title: "International Expansion",
              description: "Opened offices in three new countries, expanding our global reach and capabilities.",
              duration: "2022"
            }
          ].map((step, index, array) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index !== array.length - 1 && (
                <div className="absolute left-8 top-14 w-px h-24 bg-white/10 backdrop-blur-sm" />
              )}
              
              <div className="flex gap-6">
                {/* Year Square */}
                <div className="relative w-16 h-16 flex-shrink-0 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl" />
                  <div className="relative w-full h-full flex items-center justify-center text-xl font-bold text-white">
                    {step.duration}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative flex-grow">
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-700" />
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-lg border border-white/10 p-8">
        <div className="text-white text-xl mb-8">Feature Grid</div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Development",
              description: "Tailored solutions built specifically for your unique business needs and objectives.",
              icon: <Code className="w-6 h-6" />
            },
            {
              title: "Creative Design",
              description: "Modern, eye-catching interfaces that engage users and enhance brand value.",
              icon: <Palette className="w-6 h-6" />
            },
            {
              title: "Security First",
              description: "Enterprise-grade protection ensuring your data and users remain safe.",
              icon: <Shield className="w-6 h-6" />
            }
          ].map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-700" />
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl h-full">
                {/* Icon */}
                <div className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlassTimeline;