import React from 'react';
import { GradientHero } from '@/components/HeroSection';
import { GradientPrimaryButton, GradientSecondaryButton } from '@/components/ButtonsCTA';
import { GradientFooter } from '@/components/Footers';

const CreativePortfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Creative Vision
                </span>
                <br />
                <span className="text-white">Made Reality</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Transforming ideas into stunning digital experiences through innovative design and creative solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <GradientPrimaryButton>
                  View Projects
                </GradientPrimaryButton>
                <GradientSecondaryButton>
                  Let's Connect
                </GradientSecondaryButton>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-full p-8 animate-pulse">
                <img 
                  src="/creative.png" 
                  alt="Creative Artwork"
                  className="w-full h-full object-cover rounded-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
    <section className="py-24">
    <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Featured Projects
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
        A curated selection of our most impactful and innovative work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
            key={item}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-1"
            >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                src={`/project${item}.jpg`} 
                alt={`Project ${item}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Project Title</h3>
                    <p className="text-gray-300">Brief project description showcasing the key features and outcomes.</p>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>

      {/* Skills Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-3xl"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Creative Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['UI/UX Design', 'Brand Identity', 'Motion Graphics', 'Web Development'].map((skill) => (
              <div 
                key={skill}
                className="bg-white/5 backdrop-blur-xl rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2">{skill}</h3>
                <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Client Feedback</h2>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl">
            <blockquote className="text-2xl text-white italic mb-6">
                "The team's creative vision and technical expertise brought our project to life in ways we never imagined possible."
            </blockquote>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <div>
                <p className="font-semibold text-white">John Smith</p>
                <p className="text-gray-300">CEO, Design Corp</p>
                </div>
            </div>
            </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Start Your Project
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
          <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
                <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
            </div>
            <div>
                <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
            </div>
            <div>
                <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105"
            >
                Send Message
            </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <GradientFooter 
        companyName="Creative Studio"
        email="hello@creativestudio.com"
        phone="(555) 234-5678"
        location="Los Angeles, CA"
      />
    </div>
  );
};

export default CreativePortfolio;