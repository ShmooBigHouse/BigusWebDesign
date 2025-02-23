"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, Shield, Smartphone, Zap, Activity } from 'lucide-react';

const Pricing = () => {
  const router = useRouter();

  const plans = [
    {
      id: 'premade',
      title: "Premade Website",
      buttonText: "Use a Premade Website Style",
      icon: <Smartphone className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />,
      description: "Quick and professional",
      price: 300,
      originalPrice: 499,
      features: [
        "Template customization",
        "1 revision included",
        "Basic SEO setup",
        "Mobile-friendly design"
      ]
    },
    {
      id: 'component-based',
      title: "Component-Based",
      buttonText: "Choose from Premade Components",
      icon: <Shield className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />,
      description: "Mix and match design",
      price: 750,
      originalPrice: 999,
      features: [
        "Custom component selection",
        "2 revision rounds",
        "Advanced customization",
        "Priority support"
      ],
      popular: true
    },
    {
      id: 'custom',
      title: "Custom Website",
      buttonText: "Create a Fully Custom Website",
      icon: <Zap className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />,
      description: "Fully customized solution",
      price: 1500,
      originalPrice: 2499,
      features: [
        "Fully custom design",
        "3 revision rounds",
        "Source code ownership",
        "2-part payment plan"
      ]
    }
  ];

  const handlePlanSelect = (plan: typeof plans[0]) => {
    localStorage.setItem('selectedPlan', JSON.stringify({
      id: plan.id,
      title: plan.title,
      price: plan.price,
      originalPrice: plan.originalPrice,
      features: plan.features
    }));
    router.push('/checkout');
  };

  const handleMonitoringSelect = () => {
    localStorage.setItem('selectedPlan', JSON.stringify({
      id: 'monitoring',
      title: 'Website Monitoring',
      price: 50,
      features: [
        '24/7 uptime monitoring',
        'Performance tracking',
        'Instant alerts',
        'Monthly reports'
      ]
    }));
    router.push('/checkout');
  };

  return (
    <div className="container mx-auto px-6 py-24">
      {/* Pricing Header with Monitoring Box */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex-shrink-0">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-white">Choose Your{' '}</span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text font-extrabold">
                Perfect
              </span>
              <span className="text-white">{' '}Plan</span>
            </h2>
            <p className="text-xl text-gray-400">Flexible options for every need</p>
          </div>
          
          {/* Website Monitoring Box - Updated with original price */}
          <div className="relative group md:w-72 mt-2">
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-red-800/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-6 border-2 border-red-500 relative">
              <div className="flex items-center gap-4 mb-4">
                <Activity className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                <div>
                  <h3 className="text-xl font-bold text-white">Website Monitoring</h3>
                  <p className="text-sm text-gray-400">24/7 uptime monitoring</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-red-400">$50</span>
                  <span className="text-sm text-gray-400">/month</span>
                  <span className="text-lg line-through text-gray-600">$60</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-green-400">$500</span>
                  <span className="text-sm text-gray-400">/year</span>
                  <span className="text-xs text-green-400">(Save ~15%)</span>
                </div>
              </div>
              <button 
                onClick={handleMonitoringSelect}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all transform group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
              >
                Get Website Monitoring
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.id} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 group-hover:border-blue-500/50 transition-all duration-500 relative hover:-translate-y-1">
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              <div className="flex items-center gap-4 mb-6">
                {plan.icon}
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-white">{plan.title}</h3>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#39FF14]">${plan.price}</span>
                  <span className="text-lg line-through text-gray-600">${plan.originalPrice}</span>
                </div>
                <span className="text-sm text-[#39FF14]">Limited Time Offer!</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                    <ChevronRight className="text-indigo-400 mr-2 w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handlePlanSelect(plan)}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;