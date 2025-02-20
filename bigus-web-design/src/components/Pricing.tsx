// components/Pricing.tsx
import React from 'react';
import { ChevronRight, Shield, Smartphone, Zap, Activity } from 'lucide-react';

const Pricing = () => {
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
            
            {/* Website Monitoring Box */}
            <div className="relative group md:w-72 mt-2">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-red-800/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-6 border-2 border-red-500 relative hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <Activity className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Website Monitoring</h3>
                    <p className="text-sm text-gray-400">24/7 uptime monitoring</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-red-400">$99</span>
                    <span className="text-sm text-gray-400">/month</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-green-400">$999</span>
                    <span className="text-sm text-gray-400">/year</span>
                    <span className="text-xs text-green-400">(Save 15%)</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all transform group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Premade Website Plan */}
        <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 group-hover:border-blue-500/50 transition-all duration-500 relative hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <Smartphone className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <div>
                <h3 className="text-2xl font-bold mb-1 text-white">Premade Website</h3>
                <p className="text-gray-400">Quick and professional</p>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#39FF14]">$99</span>
                <span className="text-lg line-through text-gray-600">$499</span>
              </div>
              <span className="text-sm text-[#39FF14]">Limited Time Offer!</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                <ChevronRight className="text-indigo-400 mr-2 w-5 h-5" />
                <span>Premium templates</span>
              </li>
              <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                <ChevronRight className="text-indigo-400 mr-2 w-5 h-5" />
                <span>Basic customization</span>
              </li>
              <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                <ChevronRight className="text-indigo-400 mr-2 w-5 h-5" />
                <span>Mobile-friendly design</span>
              </li>
              <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                <ChevronRight className="text-indigo-400 mr-2 w-5 h-5" />
                <span>Quick setup</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Get Started
            </button>
          </div>
        </div>

        {/* Custom Plan */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-purple-500/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-8 border-2 border-indigo-500 relative hover:-translate-y-1 transition-all duration-500">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
              MOST POPULAR
            </div>
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
              <div>
                <h3 className="text-2xl font-bold mb-1 text-white">Custom Website</h3>
                <p className="text-gray-400">Fully customized solution</p>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#39FF14]">$449</span>
                <span className="text-lg line-through text-gray-600">$999</span>
              </div>
              <span className="text-sm text-[#39FF14]">Limited Time Offer!</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                <ChevronRight className="text-indigo-400 mr-2 w-5 h-5" />
                <span>One-on-one consultation</span>
              </li>
              <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                <ChevronRight className="text-indigo-400 mr-2 w-5 h-5" />
                <span>Fully custom design</span>
              </li>
              <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                <ChevronRight className="text-indigo-400 mr-2 w-5 h-5" />
                <span>3 rounds of revisions</span>
              </li>
              <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                <ChevronRight className="text-indigo-400 mr-2 w-5 h-5" />
                <span>Full source code ownership</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Get Started
            </button>
          </div>
        </div>

        {/* Component-Based Plan */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 group-hover:border-purple-500/50 transition-all duration-500 relative hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              <div>
                <h3 className="text-2xl font-bold mb-1 text-white">Component-Based</h3>
                <p className="text-gray-400">Mix and match design</p>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#39FF14]">$299</span>
                <span className="text-lg line-through text-gray-600">$799</span>
              </div>
              <span className="text-sm text-[#39FF14]">Limited Time Offer!</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                <ChevronRight className="text-indigo-400 mr-2 w-5 h-5" />
                <span>Mix & match components</span>
              </li>
              <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                <ChevronRight className="text-indigo-400 mr-2 w-5 h-5" />
                <span>Advanced customization</span>
              </li>
              <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                <ChevronRight className="text-indigo-400 mr-2 w-5 h-5" />
                <span>Premium features</span>
              </li>
              <li className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                <ChevronRight className="text-indigo-400 mr-2 w-5 h-5" />
                <span>2 rounds of revisions</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;