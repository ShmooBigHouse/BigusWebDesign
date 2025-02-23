import React from 'react';
import Link from 'next/link';
import { Activity, Heart } from 'lucide-react';

const Header = () => {
  return (
    <nav className="relative z-10 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold text-red-500">
              Bigus Web Design
            </Link>
            <div className="flex items-center gap-1">
              <Activity className="w-5 h-5 text-red-500" />
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
              <Activity className="w-5 h-5 text-red-500" />
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#website-styles" className="text-white/80 hover:text-blue-400 transition-colors">
              Services
            </a>
            <a href="#development-process" className="text-white/80 hover:text-blue-400 transition-colors">
              Process
            </a>
            <a href="#pricing" className="text-white/80 hover:text-blue-400 transition-colors">
              Pricing
            </a>
            <a href="#contact-form" className="text-white/80 hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;