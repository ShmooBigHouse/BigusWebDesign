import React from 'react';
import { ArrowRight } from 'lucide-react';

export const MinimalCards = () => {
  const services = [
    {
      title: "Basic Package",
      price: "$29.99",
      description: "Perfect for personal use",
      features: [
        "2-day shipping",
        "30-day returns",
        "24/7 support",
        "Single device"
      ],
      ctaText: "Add to Cart",
      popular: false
    },
    {
      title: "Premium Package",
      price: "$49.99",
      description: "Best for small businesses",
      features: [
        "Next-day shipping",
        "90-day returns",
        "Priority support",
        "Up to 5 devices"
      ],
      ctaText: "Add to Cart",
      popular: true
    },
    {
      title: "Enterprise Package",
      price: "$99.99",
      description: "For large organizations",
      features: [
        "Same-day shipping",
        "1-year warranty",
        "Dedicated account manager",
        "Unlimited devices"
      ],
      ctaText: "Add to Cart",
      popular: false
    }
  ];

  return (
    <div className="py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Package</h2>
        <p className="text-gray-600">Select the perfect plan for your needs</p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`
              rounded-lg border ${service.popular ? 'border-green-500' : 'border-gray-300'} 
              p-6 transition-all hover:-translate-y-1 duration-300
              shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
              relative bg-white
            `}
          >
            {service.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {service.price}
              </div>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {feature}
                </div>
              ))}
            </div>

            <button 
              className={`
                w-full py-3 px-4 rounded-lg flex items-center justify-center
                ${service.popular 
                  ? 'bg-green-500 hover:bg-green-600 text-white shadow-green-500/20' 
                  : 'bg-gray-800 hover:bg-gray-900 text-white shadow-gray-800/20'
                } shadow-lg
                transition-colors group
              `}
            >
              {service.ctaText}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinimalCards;