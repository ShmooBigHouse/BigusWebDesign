import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

interface MinimalFooterProps {
  companyName?: string;
  email?: string;
  phone?: string;
  location?: string;
}

const MinimalFooter: React.FC<MinimalFooterProps> = ({
  companyName = "Company Name",
  email = "hello@company.com",
  phone = "(555) 123-4567",
  location = "New York, USA"
}) => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">{companyName}</h3>
            <p className="text-gray-600 max-w-sm">
              We create digital experiences that matter. Focused on innovation and user-centric design.
            </p>
            <div className="pt-2">
              <button 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3">
                {['About', 'Careers', 'Partners', 'News'].map((item) => (
                  <li key={item}>
                    <button className="text-gray-700 hover:text-gray-900 transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-3">
                {['Development', 'Design', 'Marketing', 'Support'].map((item) => (
                  <li key={item}>
                    <button className="text-gray-700 hover:text-gray-900 transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {email}
                  </button>
                </li>
                <li>
                  <button 
                    className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {phone}
                  </button>
                </li>
                <li className="flex items-center text-gray-700">
                  <MapPin className="w-4 h-4 mr-2" />
                  {location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;