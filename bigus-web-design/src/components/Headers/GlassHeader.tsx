// components/Headers/GlassHeader.tsx
"use client";

import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

interface CTAButton {
  text: string;
  href: string;
}

interface GlassHeaderProps {
  brandName?: string;
  brandHref?: string;
  navigationItems?: NavItem[];
  ctaButton?: CTAButton;
  isDark?: boolean;
  glassEffect?: boolean;
}

const GlassHeader: React.FC<GlassHeaderProps> = ({
  brandName = "Glass Brand",
  brandHref = "/",
  navigationItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ],
  ctaButton = {
    text: "Get Started",
    href: "#get-started"
  },
  isDark = true,
  glassEffect = true
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerClasses = `
    w-full
    ${glassEffect ? isDark ? 'bg-gray-900/90 backdrop-blur-xl' : 'bg-white/90 backdrop-blur-xl' : ''}
  `;

  return (
    <div className={headerClasses}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href={brandHref} 
              className="group relative"
            >
              <span className={`text-xl font-bold ${
                isDark 
                  ? 'text-gray-100' 
                  : 'text-gray-900'
              }`}>
                {brandName}
              </span>
              {/* Animated underline */}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              } group-hover:w-full transition-all duration-300`} />
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:justify-center">
            <div className="flex space-x-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    group relative px-3 py-2 text-sm font-medium rounded-lg transition-colors
                    ${isDark 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  {item.name}
                  {/* Hover background */}
                  <span className={`absolute inset-0 rounded-lg ${
                    isDark ? 'bg-gray-800' : 'bg-gray-100'
                  } opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
                  {/* Animated underline */}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                  } group-hover:w-full transition-all duration-300`} />
                </a>
              ))}
            </div>
          </div>

          {/* Right section - CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={ctaButton.href}
              className="group relative inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
            >
              {/* Button gradient and effects */}
              <span className={`absolute inset-0 rounded-lg ${
                isDark ? 'bg-white' : 'bg-gray-900'
              }`} />
              <span className={`relative z-10 flex items-center ${
                isDark ? 'text-gray-900' : 'text-white'
              }`}>
                {ctaButton.text}
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center rounded-lg p-2 ${
                isDark 
                  ? 'text-gray-300 hover:bg-gray-800' 
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-all duration-500`}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isDark 
                    ? 'text-gray-300 hover:bg-gray-800' 
                    : 'text-gray-700 hover:bg-gray-100'
                } transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href={ctaButton.href}
              className={`block w-full text-center px-3 py-2 rounded-lg text-base font-medium ${
                isDark 
                  ? 'text-gray-900 bg-white hover:bg-gray-100' 
                  : 'text-white bg-gray-900 hover:bg-gray-800'
              } transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {ctaButton.text}
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default GlassHeader;