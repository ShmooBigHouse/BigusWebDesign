import React from 'react';

export const GradientTimeline = () => {
  // Consolidated all steps data
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

  return (
    <div className="space-y-32">
      {/* Process Steps */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900 to-indigo-900 p-1">
        <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-16 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Getting Started
            </h2>
            <p className="text-indigo-200">Complete guide to setup</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between">
              {processSteps.map((step, index) => (
                <div key={index} className="relative transform transition-all duration-300 hover:scale-105 flex-1 px-4">
                  {/* Number Circle with Gradient */}
                  <div className="relative h-16 w-16 mb-6 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-[6px]" />
                    <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="relative bg-gradient-to-br from-purple-800/50 to-indigo-800/50 rounded-xl p-6 min-h-[200px] flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-indigo-200 mb-6 flex-grow">{step.description}</p>
                    <div>
                      <span className={`
                        inline-block px-4 py-1.5 rounded-full shadow-lg
                        ${step.status === 'completed' 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                          : step.status === 'in-progress'
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                          : 'bg-gradient-to-r from-gray-600 to-gray-700 text-gray-200'}
                      `}>
                        {step.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline - Vertical with Gradient Effects */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900 to-indigo-900 p-1">
        <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-16 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Company Timeline
            </h2>
            <p className="text-indigo-200">Our journey through the years</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative group">
                {index !== timelineSteps.length - 1 && (
                  <div className="absolute left-[1.75rem] top-16 w-1 h-24">
                    <div className="h-full bg-gradient-to-b from-purple-500 to-indigo-600 opacity-25" />
                  </div>
                )}
                <div className="flex gap-8 mb-8 group">
                  <div className="relative transform transition-all duration-300 group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-50 rounded-xl blur-[6px] scale-110" />
                    <div className="relative h-14 w-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                      {step.duration}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-indigo-200">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features - With Gradient Cards */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900 to-indigo-900 p-1">
        <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-16 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Key Features
            </h2>
            <p className="text-indigo-200">What makes our product special</p>
          </div>
          <div className="max-w-3xl mx-auto grid gap-6">
            {featureSteps.map((step, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden p-6 rounded-xl transform transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/50 to-indigo-800/50 group-hover:from-purple-700/50 group-hover:to-indigo-700/50 transition-all duration-300" />
                <div className="relative flex items-start gap-6">
                  <span className="text-3xl font-bold bg-gradient-to-br from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-indigo-200">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientTimeline;