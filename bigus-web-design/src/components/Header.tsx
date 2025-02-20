import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="relative z-10 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-red-500">
            Bigus Web Design
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#website-styles" className="hover:text-blue-400 transition-colors">
              Services
            </a>
            <a href="#development-process" className="hover:text-blue-400 transition-colors">
              Process
            </a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">
              Pricing
            </a>
            <a href="#contact-form" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;