// components/ContentBlocks/GradientBlocks.tsx
import React from 'react';
import Image from 'next/image';
import { Code, Palette, Shield, Quote } from 'lucide-react';

// Types
interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

interface TextContent {
  title?: string;
  subtitle?: string;
  content: string | React.ReactNode;
}

// Gradient Feature Grid
export const GradientFeatureGrid: React.FC<{ features: Feature[] }> = ({
  features = [
    {
      title: "Custom Development",
      description: "Tailored solutions built for you.",
      icon: <Code />
    },
    {
      title: "Creative Design",
      description: "Modern, eye-catching interfaces.",
      icon: <Palette />
    },
    {
      title: "Security First",
      description: "Enterprise-grade protection.",
      icon: <Shield />
    }
  ]
}) => {
  return (
    <>
      <div className="text-white text-xl mb-4">Feature Grid</div>
      <div className="grid md:grid-cols-3 gap-8 p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl">
        {features.map((feature, index) => (
          <div key={index} className="group relative p-6 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 opacity-90" />
            
            {/* Mesh pattern overlay */}
            <div className="absolute inset-0 opacity-20" 
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                  backgroundSize: '16px 16px'
                }} />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="w-12 h-12 mb-4 text-white transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// Gradient Testimonial Block
export const GradientTestimonial: React.FC<{ testimonials: Testimonial[] }> = ({
  testimonials = [
    {
      quote: "quote: &quot;An absolute game-changer for our business.&quot;",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechCorp"
    }
  ]
}) => {
  return (
    <>
      <div className="text-white text-xl mb-4">Testimonial</div>
      <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative">
            {/* Main container with stacked layout */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-600/90 to-blue-600/90 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-cyan-400/20" />
              
              <div className="relative bg-slate-900/50 rounded-lg p-8">
                {/* Top section with quote */}
                <div className="relative">
                  <Quote className="absolute -left-2 -top-2 w-8 h-8 text-purple-400/50" />
                  <blockquote className="text-xl text-white/90 pl-8 mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Bottom section with author info and image */}
                <div className="flex items-center gap-6 mt-6 bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-4 rounded-lg">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg opacity-50" />
                    <Image
                      src="/lioncolor.png"
                      alt={testimonial.author}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <cite className="font-medium text-white not-italic block text-lg">
                      {testimonial.author}
                    </cite>
                    {(testimonial.role || testimonial.company) && (
                      <p className="text-blue-200">
                        {testimonial.role}
                        {testimonial.role && testimonial.company && ' · '}
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// Gradient Text Block
export const GradientTextBlock: React.FC<TextContent> = ({
  title,
  subtitle,
  content
}) => {
  return (
    <>
      <div className="text-white text-xl mb-4">Content</div>
      <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl">
        <div className="relative">
          {/* Animated gradient border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-xl" />
          
          {/* Content container */}
          <div className="relative bg-slate-900/90 rounded-lg p-8">
            {title && (
              <div className="relative mb-8">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-500/50" />
                <h2 className="relative text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-center px-4 inline-block mx-auto bg-slate-900/90">
                  {title}
                </h2>
              </div>
            )}
            {subtitle && (
              <p className="text-xl text-blue-200 mb-8 text-center">
                {subtitle}
              </p>
            )}
            <div className="prose prose-invert max-w-none prose-p:text-blue-100 prose-a:text-blue-400 hover:prose-a:text-blue-300">
              {content}
            </div>
            
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-500/30 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500/30 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/30 rounded-br-lg" />
          </div>
        </div>
      </div>
    </>
  );
};