// components/headers/LegalHeader.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  dropdown?: string[];
}

interface HeaderProps {
  title?: string;
  subtitle?: string;
  logo?: string;
  contact?: {
    office: string;
    cell: string;
    email: string;
  };
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { name: 'Home', path: '#' },
  { 
    name: 'Services', 
    path: '#',
    dropdown: [
      'Criminal Defense',
      'Family Law',
      'Estate Planning',
      'Personal Injury',
      'Business Law',
      'Real Estate Law'
    ]
  },
  { name: 'Contact', path: '#' },
  {
    name: 'About',
    path: '#',
    dropdown: [
      'Our History',
      'Our Team',
      'Client Success Stories',
      'Community Involvement'
    ]
  }
];

const LegalHeader: React.FC<HeaderProps> = ({
  title = "Edward L. Bigus",
  subtitle = "Attorney at Law",
  logo = "/scales.png",
  contact = {
    office: "913-888-4520",
    cell: "913-221-4520",
    email: "elbiguspa@gmail.com"
  },
  navItems = defaultNavItems
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = (itemName: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  return (
    <header className="relative w-full bg-gradient-to-t from-blue-950 to-blue-700">
      {/* Silver Accent Strip */}
      <div className="h-1 w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"></div>

      <div className="relative w-full px-4 md:container md:mx-auto">
        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-4 top-4 z-50">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-200 p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Header content above nav */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center py-8 gap-8">
          {/* Logo Section */}
          <div className="flex justify-center items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 relative">
              <Image
                src={logo}
                alt="Legal Scales Logo"
                width={160}
                height={160}
                className="object-contain drop-shadow-lg filter brightness-0 invert"
                priority
              />
            </div>
          </div>

          {/* Title Section */}
          <div className="flex justify-center items-center">
            <div className="border border-gray-300 rounded-lg p-6 bg-blue-900/50 backdrop-blur-sm">
              <h1 className="text-3xl md:text-4xl font-serif text-gray-200 text-center border-b border-gray-300 pb-3 mb-3">
                {title}
              </h1>
              <p className="text-xl text-gray-200 text-center font-light tracking-wide">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex justify-center items-center">
            <div className="space-y-4">
              {[
                { icon: <Phone className="w-5 h-5" />, text: `Office: ${contact.office}` },
                { icon: <Phone className="w-5 h-5" />, text: `Cell: ${contact.cell}` },
                { icon: <Mail className="w-5 h-5" />, text: contact.email }
              ].map((item, index) => (
                <div key={index} className="flex items-center group">
                  <div className="flex items-center space-x-3 bg-blue-800 hover:bg-blue-700 text-gray-200 
                              px-4 py-2.5 rounded-lg transition-all duration-300 border border-gray-300 
                              w-full md:w-64 cursor-default">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative flex justify-center pb-1">
          {/* Desktop Navigation */}
          <div className="hidden md:inline-flex bg-blue-800 rounded-t-lg border-2 border-gray-300">
            {navItems.map((item, index) => (
              <div 
                key={item.name} 
                className={`relative group ${index !== navItems.length - 1 ? 'border-r-2 border-gray-300' : ''}`}
              >
                <div 
                  className={`inline-block px-8 py-3 text-white font-medium cursor-pointer
                    hover:bg-blue-700 transition-all duration-300
                    ${index === 0 ? 'rounded-tl-lg' : ''} 
                    ${index === navItems.length - 1 ? 'rounded-tr-lg' : ''}`}
                >
                  {item.name}
                </div>
                
                {item.dropdown && (
                  <div 
                    className="absolute left-0 hidden group-hover:block w-64 bg-blue-800 
                      border-2 border-gray-300 rounded-b-lg shadow-xl"
                    style={{ 
                      top: '100%', 
                      marginTop: '-2px',
                      zIndex: 1000
                    }}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <div
                        key={subItem}
                        className={`block px-4 py-2.5 text-white hover:bg-blue-700 cursor-pointer
                          transition-colors duration-200
                          ${subIndex === 0 ? 'rounded-t-lg' : ''}
                          ${subIndex === item.dropdown!.length - 1 ? 'rounded-b-lg' : ''}`}
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden fixed inset-0 bg-blue-900 transition-transform duration-300 
              ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            style={{ zIndex: 999 }}
          >
            <div className="p-4">
              {navItems.map((item) => (
                <div key={item.name} className="mb-4">
                  {item.dropdown ? (
                    <button 
                      className="flex items-center justify-between w-full text-gray-200 text-lg py-2 px-4 
                        rounded hover:bg-blue-800"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${openDropdowns[item.name] ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <div 
                      className="block text-white text-lg py-2 px-4 rounded hover:bg-blue-800 cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </div>
                  )}
                  
                  {item.dropdown && (
                    <div className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 
                      ${openDropdowns[item.name] ? 'max-h-96' : 'max-h-0'}`}>
                      {item.dropdown.map((subItem) => (
                        <div
                          key={subItem}
                          className="block text-gray-200 py-2 px-4 rounded hover:bg-blue-800 cursor-pointer"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default LegalHeader;