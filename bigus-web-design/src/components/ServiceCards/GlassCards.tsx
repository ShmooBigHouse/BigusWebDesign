import React from 'react';
import { ArrowRight, Code, Palette, Shield } from 'lucide-react';

export const GlassCards = () => {
  const services = [
    {
      title: "Starter",
      description: "Perfect for exploring and learning",
      icon: <Code className="w-full h-full" />,
      price: "$29/month",
      features: [
        "Basic features",
        "Community support",
        "1GB storage",
        "Monthly updates"
      ],
      link: "#"
    },
    {
      title: "Professional",
      description: "Everything you need to grow",
      icon: <Palette className="w-full h-full" />,
      price: "$79/month",
      features: [
        "Advanced features",
        "Priority support",
        "10GB storage",
        "Weekly updates",
        "Custom domain"
      ],
      popular: true,
      link: "#"
    },
    {
      title: "Enterprise",
      description: "Advanced features for teams",
      icon: <Shield className="w-full h-full" />,
      price: "$199/month",
      features: [
        "Custom solutions",
        "24/7 support",
        "Unlimited storage",
        "Daily updates",
        "Advanced security"
      ],
      link: "#"
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Glass Cards</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">Choose the perfect plan for your needs</p>
      </div>

      {/* Cards Container */}
      <div className="grid md:grid-cols-3 gap-8 relative">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`
              group relative backdrop-blur-lg border rounded-lg overflow-hidden transition-all duration-300
              ${service.popular 
                ? 'border-blue-500/50 shadow-lg shadow-blue-500/20 bg-white/10 -translate-y-6 z-10' 
                : 'border-white/10 hover:border-white/20 bg-white/5'
              }
            `}
          >
            {service.popular && (
              <div className="absolute top-16 right-6">
                <div className="bg-blue-500/80 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              </div>
            )}

            <div className="p-6 flex flex-col h-full">
              {/* Content Container */}
              <div>
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  {service.icon && (
                    <div className="text-blue-400 w-8 h-8">
                      {service.icon}
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-white mt-2">{service.title}</h3>
                    {service.price && (
                      <div className="text-blue-400 mt-1">{service.price}</div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <div className="h-6 w-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button - Now in a separate div that's pushed to the bottom */}
              <div className="mt-auto pt-6">
                <button 
                  className="w-full px-6 py-3 rounded-lg border border-blue-500/50 text-blue-400 
                            hover:bg-blue-500/10 hover:border-blue-400 transition-colors flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};