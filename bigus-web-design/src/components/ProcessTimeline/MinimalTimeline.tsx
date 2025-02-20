// MinimalTimeline.tsx
import React from 'react';

interface Step {
  title: string;
  description: string;
  duration?: string;
  status?: 'completed' | 'in-progress' | 'upcoming';
}

interface TimelineProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
  variant?: 'process' | 'timeline' | 'features';
}

// Example data remains the same...
const processSteps = [
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
];

const timelineSteps = [
  {
    title: "Company Founded",
    description: "Started operations in a small office",
    duration: "2020"
  },
  {
    title: "First Major Client",
    description: "Secured partnership with industry leader",
    duration: "2021"
  },
  {
    title: "International Expansion",
    description: "Opened offices in three new countries",
    duration: "2022"
  }
];

const featureSteps = [
  {
    title: "Cloud Integration",
    description: "Seamlessly sync across all your devices"
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade encryption and protection"
  },
  {
    title: "Smart Automation",
    description: "Automated workflows and task management"
  }
];

export const MinimalTimeline: React.FC<TimelineProps> = () => {
  return (
    <div className="space-y-32">
      {/* Process Steps - Horizontal Steps */}
      <div className="bg-white py-16 px-6 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Getting Started</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Complete guide to setup</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex-1">
                <div className="relative w-full px-4">
                  <div className="h-14 w-14 mb-4 mx-auto bg-blue-600 rounded-lg flex items-center justify-center text-lg font-medium text-white">
                    {index + 1}
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                    {step.status && (
                      <span className={`
                        inline-block mt-3 text-sm px-3 py-1 rounded-full
                        ${step.status === 'completed' ? 'bg-green-100 text-green-700' : 
                          step.status === 'in-progress' ? 'bg-blue-100 text-blue-700' : 
                          'bg-gray-100 text-gray-700'}
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
      </div>

      {/* Timeline - Vertical with Line */}
      <div className="bg-white py-16 px-6 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Timeline</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our journey through the years</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {timelineSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Vertical line */}
              {index !== timelineSteps.length - 1 && (
                <div className="absolute left-[1.75rem] top-14 w-px h-24 bg-gray-200" />
              )}
              <div className="flex gap-8 mb-8">
                {/* Year circle */}
                <div className="w-14 h-14 flex-shrink-0 bg-blue-600 rounded-lg flex items-center justify-center font-medium text-white">
                  {step.duration}
                </div>
                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features - Simple Numbers */}
      <div className="bg-white py-16 px-6 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">What makes our product special</p>
        </div>
        <div className="max-w-3xl mx-auto grid gap-6">
          {featureSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-6 group hover:bg-gray-50 p-6 rounded-lg transition-colors">
              <span className="text-3xl font-bold text-blue-600">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};