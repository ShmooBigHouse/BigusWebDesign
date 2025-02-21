import React from 'react';
import { MinimalHero } from '@/components/HeroSection';
import { MinimalPrimaryButton, MinimalSecondaryButton } from '@/components/ButtonsCTA';
import { MinimalHeader } from '@/components/Headers';
import { MinimalFooter } from '@/components/Footers';
import { MinimalCards } from '@/components/ServiceCards';
import { ModernContactForm } from '@/components/FormsInputs';

const ModernBusiness = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <MinimalHeader 
        title="Modern Business"
        links={[
          { text: "Services", href: "#services" },
          { text: "About", href: "#about" },
          { text: "Contact", href: "#contact" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-pink-100">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pink-900">
                Growing Your Business Together
              </h1>
              <p className="text-xl text-pink-700 mb-8 max-w-lg">
                Professional solutions to help your business thrive in the digital age. Expert guidance, proven strategies, measurable results.
              </p>
              <div className="flex flex-wrap gap-4">
                <MinimalPrimaryButton>
                  Get Started
                </MinimalPrimaryButton>
                <MinimalSecondaryButton>
                  Learn More
                </MinimalSecondaryButton>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square w-full max-w-md mx-auto bg-yellow-300 rounded-3xl p-8 shadow-lg">
                <div className="relative w-full h-full">
                  <img 
                    src="/businesswoman.png" 
                    alt="Business Professional"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <MinimalCards />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-pink-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Client Success Stories</h2>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg text-gray-600 text-center italic">
                "Working with Modern Business has transformed our company's digital presence. Their strategic insights and professional execution exceeded our expectations."
            </blockquote>
            <div className="mt-4 text-center">
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-gray-500">CEO, TechStart Inc.</p>
            </div>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <ModernContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <MinimalFooter 
        companyName="Modern Business"
        email="contact@modernbusiness.com"
        phone="(555) 123-4567"
        location="New York, NY"
      />
    </div>
  );
};

export default ModernBusiness;