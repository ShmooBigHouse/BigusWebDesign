import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon?: React.ReactNode;
  price?: string;
  features?: string[];
  link?: string;
  popular?: boolean;
}

interface ServiceCardsProps {
  title?: string;
  subtitle?: string;
  services: Service[];
}

export const GradientCards: React.FC<ServiceCardsProps> = ({
  title = "Our Services",
  subtitle = "Choose the perfect plan for your needs",
  services
}) => {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <p className="text-gray-300">{subtitle}</p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative"
          >
            {/* Animated background gradient */}
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Card content */}
            <div className="relative h-full rounded-xl bg-black/90 p-8 flex flex-col">
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-rose-400 to-fuchsia-500 text-white text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon and Title */}
              <div className="mb-6">
                {service.icon && (
                  <div className="w-12 h-12 mb-4 text-fuchsia-400 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                {service.price && (
                  <div className="text-xl font-bold bg-gradient-to-r from-rose-400 to-fuchsia-500 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-8">{service.description}</p>

              {/* Features */}
              {service.features && (
                <ul className="space-y-4 mb-8 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <div className="mr-3 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-rose-400 to-fuchsia-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA Button */}
              {service.link && (
                <button
                  onClick={() => window.open(service.link, '_blank')}
                  className="group relative px-6 py-3 w-full rounded-lg overflow-hidden bg-gradient-to-r from-rose-400/10 to-fuchsia-500/10 hover:from-rose-400/20 hover:to-fuchsia-500/20 transition-all"
                >
                  <div className="relative flex items-center justify-center">
                    <span className="bg-gradient-to-r from-rose-400 to-fuchsia-500 bg-clip-text text-transparent font-medium">
                      Get Started
                    </span>
                    <ArrowRight className="ml-2 w-4 h-4 text-fuchsia-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradientCards;