// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Activity, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/20 relative">
      {/* Shine effect */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
        <div className="animate-shine"></div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-red-500">Bigus Web Design</h3>
              <div className="flex items-center gap-1">
                <Activity className="w-5 h-5 text-red-500" />
                <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                <Activity className="w-5 h-5 text-red-500" />
              </div>
            </div>
            <p className="text-white">Crafting personalized digital experiences.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#website-styles" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#development-process" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#components" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Components
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="text-gray-400 mr-2" />
                <a href="mailto:shmoo@proton.me" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Hello@BigusWebDesign.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="text-gray-400 mr-2" />
                <span className="text-gray-400">Kansas, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bigus Web Design. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;