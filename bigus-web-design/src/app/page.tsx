// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Code, Palette, HeartHandshake, Wallet } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import ProcessSection from '@/components/ProcessSection';
import WebsiteStyles from '@/components/WebsiteStyles';
import ComponentShowcase from '@/components/Showcase/ComponentShowcase';
import ContactForm from '@/components/ContactForm';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section with Header */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-cyan-500/20" />
        
        <Header />

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Crafting Digital 
                <span className="text-red-500"> Experiences</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                From concept to code, we build websites that capture attention and drive results.
              </p>
              <div className="flex flex-col items-start gap-4">
                <a
                  href="#website-styles"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center group hover:scale-105"
                >
                  Explore Our Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact-form"
                  className="relative overflow-hidden px-8 py-4 rounded-lg text-lg font-semibold flex items-center group border-2 border-white/40 hover:border-white/60"
                >
                  {/* Background with subtle gradient */}
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></div>
                  
                  {/* Content */}
                  <span className="relative text-white flex items-center">
                    Contact Us
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative w-full flex justify-center items-center">
              {/* Gradient flare */}
              <div className="absolute w-[100%] h-[100%] bg-[radial-gradient(circle,rgba(139,92,246,0.6)_20%,rgba(244,114,182,0.4)_50%,transparent_100%)] rounded-full blur-3xl" />
              
              {/* Image */}
              <div className="relative z-10 w-2/5">
              <Image 
                  src="/shmoo.png"
                  alt="Your Local Web Developer"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Why Choose</span>{' '}
              <span className="text-indigo-400">Our Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expert development with a focus on quality and innovation
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="group bg-black/30 p-8 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all">
            <div className="w-12 h-12 mb-6 text-blue-400 group-hover:text-purple-400/90 transition-colors">
              <Code className="w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Custom Development</h3>
            <p className="text-gray-400">Tailored solutions built specifically for your business needs and goals.</p>
          </div>
          <div className="group bg-black/30 p-8 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all">
            <div className="w-12 h-12 mb-6 text-blue-400 group-hover:text-purple-400/90 transition-colors">
              <Palette className="w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Creative Design</h3>
            <p className="text-gray-400">Eye-catching, modern designs that reflect your brand identity.</p>
          </div>
          <div className="group bg-black/30 p-8 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all">
            <div className="w-12 h-12 mb-6 text-blue-400 group-hover:text-purple-400/90 transition-colors">
              <HeartHandshake className="w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Local Support</h3>
            <p className="text-gray-400">Kansas-based team providing personalized, responsive support.</p>
          </div>
        </div>
        {/* Centered fourth box */}
        <div className="md:w-1/3 mx-auto">
          <div className="group bg-black/30 p-8 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all">
            <div className="w-12 h-12 mb-6 text-blue-400 group-hover:text-purple-400/90 transition-colors">
              <Wallet className="w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Affordable Solutions</h3>
            <p className="text-gray-400">Professional web design that fits your budget without compromising quality.</p>
          </div>
        </div>
      </div>

      {/* Component Showcase */}
      <div id="components">
        <ComponentShowcase />
      </div>

      {/* Website Styles Showcase */}
      <WebsiteStyles />

      {/* Process Section */}
      <div id="development-process">
        <ProcessSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing">
        <Pricing />
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="relative overflow-hidden rounded-2xl p-12 text-center group">
          {/* Enhanced gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

          {/* Content */}
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s create a website that perfectly matches your vision and goals. Get started today with our affordable solutions.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;