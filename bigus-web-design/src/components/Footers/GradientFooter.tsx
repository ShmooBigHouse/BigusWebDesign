import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

interface GradientFooterProps {
  companyName?: string;
  email?: string;
  phone?: string;
  location?: string;
}

const GradientFooter: React.FC<GradientFooterProps> = ({
  companyName = "Company Name",
  email = "hello@company.com",
  phone = "(555) 123-4567",
  location = "New York, USA"
}) => {
  return (
    <footer className="relative bg-slate-900">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10" />
      
      <div className="relative container mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              {companyName}
            </h3>
            <p className="text-gray-300 max-w-xs">
              Building incredible digital experiences with cutting-edge technology and design.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <button className="group">
                <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                              border border-white/10 hover:border-white/20 transition-colors">
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </button>
              <button className="group">
                <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                              border border-white/10 hover:border-white/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </button>
              <button className="group">
                <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                              border border-white/10 hover:border-white/20 transition-colors">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500/50 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Consulting'].map((item) => (
                <li key={item}>
                  <button 
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500/50 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:text-blue-400" />
                  {email}
                </button>
              </li>
              <li>
                <button 
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:text-blue-400" />
                  {phone}
                </button>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                {location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GradientFooter;