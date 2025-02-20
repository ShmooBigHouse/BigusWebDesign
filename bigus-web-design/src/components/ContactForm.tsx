import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Building2, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    preferredContact: 'email'
  });

  const [selectedTimeframe, setSelectedTimeframe] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div id="contact-form" className="relative overflow-hidden bg-slate-900 py-24">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Let's Bring Your Vision to </span>
              <span className="text-red-500 font-extrabold">Life</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Schedule a consultation to explore how we can craft your perfect website
            </p>
          </div>
        </div>

        {/* Main Form Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border-2 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Two Column Layout */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                                 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 
                                 focus:ring-blue-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                                 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 
                                 focus:ring-blue-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-white mb-2 font-medium">Phone Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                                 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 
                                 focus:ring-blue-500 transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  {/* Company Input */}
                  <div>
                    <label className="block text-white mb-2 font-medium">Company Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                                 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 
                                 focus:ring-blue-500 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Project Type Input */}
                  <div>
                    <label className="block text-white mb-2 font-medium">Project Type</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.projectType}
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                                 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 
                                 focus:ring-blue-500 transition-colors"
                        placeholder="e.g., Business Website, E-commerce, Portfolio..."
                      />
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-white mb-2 font-medium">Preferred Contact Method</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, preferredContact: 'email'})}
                        className={`px-4 py-2 rounded-lg border flex items-center justify-center gap-2 ${
                          formData.preferredContact === 'email'
                            ? 'border-blue-500 bg-blue-500/20 text-white'
                            : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                        } transition-colors`}
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, preferredContact: 'phone'})}
                        className={`px-4 py-2 rounded-lg border flex items-center justify-center gap-2 ${
                          formData.preferredContact === 'phone'
                            ? 'border-blue-500 bg-blue-500/20 text-white'
                            : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                        } transition-colors`}
                      >
                        <Phone className="w-4 h-4" />
                        Phone
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Textarea - Full Width */}
              <div>
                <label className="block text-white mb-2 font-medium">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                           text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 
                           focus:ring-blue-500 transition-colors"
                  placeholder="Tell us about your project goals and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 
                         rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 
                         transition-all transform hover:scale-[1.01] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] 
                         flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;