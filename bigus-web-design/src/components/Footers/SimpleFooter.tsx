import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

interface SimpleFooterProps {
  companyName?: string;
  email?: string;
  phone?: string;
  location?: string;
}

const SimpleFooter: React.FC<SimpleFooterProps> = ({
  companyName = "Company Name",
  email = "hello@company.com",
  phone = "(555) 123-4567",
  location = "New York, USA"
}) => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
        <div className="animate-shine"></div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-500">{companyName}</h3>
            <p className="text-white">Crafting exceptional digital experiences.</p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-blue-400 transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="text-gray-400 mr-2" />
                <a href={`mailto:${email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                  {email}
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-gray-400 mr-2" />
                <a href={`tel:${phone}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                  {phone}
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="text-gray-400 mr-2" />
                <span className="text-gray-400">{location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;