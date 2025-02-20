// components/ContentBlocks/ModernBlocks.tsx
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

// Modern Feature Grid
export const ModernFeatureGrid: React.FC<{ features: Feature[] }> = ({ 
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
      <div className="grid md:grid-cols-3 gap-8 p-8 bg-gradient-to-br from-slate-100 to-white rounded-xl shadow-2xl">
        {features.map((feature, index) => (
          <div key={index} className="group relative p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl">
            {/* Subtle top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            
            {/* Icon with background */}
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-blue-100 rounded-full transform -rotate-6 transition-transform group-hover:rotate-3" />
              <div className="relative w-12 h-12 text-blue-600 transform transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
            
            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
          </div>
        ))}
      </div>
    </>
  );
};

// Modern Testimonial Block
export const ModernTestimonial: React.FC<{ testimonials: Testimonial[] }> = ({
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
      <div className="space-y-8 p-8 bg-gradient-to-br from-slate-100 to-white rounded-xl">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            {/* Clean, magazine-style layout */}
            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-1 relative">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <Image 
                  src="/lioncolor.png"
                  alt={testimonial.author}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                </div>
                <Quote className="absolute -bottom-2 -right-2 w-8 h-8 text-blue-600" />
              </div>
              
              <div className="col-span-3">
                <blockquote className="text-xl font-light text-gray-800 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-l-4 border-blue-500 pl-4">
                  <cite className="font-medium text-gray-900 not-italic block">
                    {testimonial.author}
                  </cite>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-gray-600">
                      {testimonial.role}
                      {testimonial.role && testimonial.company && ' · '}
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// Modern Text Block
export const ModernTextBlock: React.FC<TextContent> = ({
  title,
  subtitle,
  content
}) => {
  return (
    <>
      <div className="text-white text-xl mb-4">Content</div>
      <div className="p-8 bg-gradient-to-br from-slate-100 to-white rounded-xl">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="max-w-3xl mx-auto">
            {title && (
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-grow h-px bg-gradient-to-r from-blue-500 to-transparent" />
                <h2 className="text-3xl font-bold text-gray-900 flex-shrink-0">{title}</h2>
                <div className="flex-grow h-px bg-gradient-to-l from-blue-500 to-transparent" />
              </div>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 mb-8 text-center">{subtitle}</p>
            )}
            <div className="prose max-w-none">
              {content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};