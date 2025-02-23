// components/PlanBuilder/BusinessDetailsForm.tsx
"use client";

import React, { useState } from 'react';
import { Upload, Globe, Mail, Phone, MapPin } from 'lucide-react';
import type { BusinessFormData, Page } from './types';

interface BusinessDetailsFormProps {
  onSubmit: (details: BusinessFormData) => void;
  selectedStyle?: string | null;
  pages?: Page[];
  setCurrentStep: (step: string) => void;
}

const BusinessDetailsForm: React.FC<BusinessDetailsFormProps> = ({
  onSubmit,
  selectedStyle,
  pages,
  setCurrentStep
}) => {
  const [formData, setFormData] = useState<BusinessFormData>({
    businessName: '',
    tagline: '',
    description: '',
    colors: {
      primary: '#000000',
      secondary: '#000000',
      accent: '#000000'
    },
    pages: pages ? pages.map(page => ({
      name: page.name,
      content: '',
      imageRequirements: ''
    })) : [{ name: 'Home', content: '', imageRequirements: '' }],
    contactDetails: {
      name: '',
      email: '',
      phone: '',
      address: '',
      website: '',
      socialMedia: []
    }
  });

  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, logo: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setCurrentStep('checkout');
  };

  return (
    <div id="business-details" className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Tell Us About Your</span>{' '}
              <span className="text-indigo-400">Business</span>
            </h2>
            {selectedStyle && (
              <p className="text-xl text-gray-400">
                Customizing your {selectedStyle} website
              </p>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Basic Information */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Basic Information</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-white mb-2">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                           text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2">
                  Tagline <span className="text-gray-400 text-sm">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                           text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="A brief slogan or motto"
                />
              </div>

              <div>
                <label className="block text-white mb-2">
                  Business Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                           text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                  placeholder="Tell us about your business and what makes it unique"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">
                  Contact Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.contactDetails.name}
                    onChange={(e) => setFormData({
                      ...formData,
                      contactDetails: { ...formData.contactDetails, name: e.target.value }
                    })}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                             text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={formData.contactDetails.email}
                    onChange={(e) => setFormData({
                      ...formData,
                      contactDetails: { ...formData.contactDetails, email: e.target.value }
                    })}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                             text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.contactDetails.phone}
                    onChange={(e) => setFormData({
                      ...formData,
                      contactDetails: { ...formData.contactDetails, phone: e.target.value }
                    })}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                             text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">
                  Business Website <span className="text-gray-400 text-sm">(if existing)</span>
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="url"
                    value={formData.contactDetails.website}
                    onChange={(e) => setFormData({
                      ...formData,
                      contactDetails: { ...formData.contactDetails, website: e.target.value }
                    })}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                             text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-white mb-2">
                  Business Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.contactDetails.address}
                    onChange={(e) => setFormData({
                      ...formData,
                      contactDetails: { ...formData.contactDetails, address: e.target.value }
                    })}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                             text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Brand Assets */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Brand Assets</h3>
            <div className="space-y-6">
              {/* Logo Upload */}
              <div>
                <label className="block text-white mb-4">
                  Business Logo <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-8">
                  <div className="relative w-32 h-32 bg-white/5 border-2 border-dashed border-white/20 rounded-lg overflow-hidden">
                    {logoPreview ? (
                      <img src={logoPreview} alt="Logo preview" className="w-full h-full object-contain" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Upload className="w-8 h-8 text-white/40" />
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      required
                    />
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>Upload your logo in high resolution</p>
                    <p>Recommended size: 512x512px</p>
                    <p>Accepted formats: PNG, JPG</p>
                  </div>
                </div>
              </div>

              {/* Brand Colors */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white mb-2">
                    Primary Color <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="color"
                    value={formData.colors.primary}
                    onChange={(e) => setFormData({
                      ...formData,
                      colors: { ...formData.colors, primary: e.target.value }
                    })}
                    className="w-full h-10 rounded cursor-pointer"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">
                    Secondary Color <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="color"
                    value={formData.colors.secondary}
                    onChange={(e) => setFormData({
                      ...formData,
                      colors: { ...formData.colors, secondary: e.target.value }
                    })}
                    className="w-full h-10 rounded cursor-pointer"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">
                    Accent Color <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="color"
                    value={formData.colors.accent}
                    onChange={(e) => setFormData({
                      ...formData,
                      colors: { ...formData.colors, accent: e.target.value }
                    })}
                    className="w-full h-10 rounded cursor-pointer"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
          <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 
                       hover:from-blue-600 hover:to-indigo-700 text-white 
                       font-semibold rounded-lg transition-all transform 
                       hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
                       flex items-center gap-2"
            >
              Continue to Checkout
              <span className="inline-block transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessDetailsForm;