// components/ContentBlocks/GlassBlocks.tsx
import React from 'react';
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

// Glass Feature Grid
export const GlassFeatureGrid: React.FC<{ features: Feature[] }> = ({
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
      <div className="grid md:grid-cols-3 gap-8 p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
        {features.map((feature, index) => (
          <div key={index} className="group relative">
            {/* Background glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/25 via-blue-500/25 to-purple-500/25 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-700" />
            
            {/* Glass card */}
            <div className="relative p-6 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 mb-4 text-white/80 group-hover:text-white transform group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/70 group-hover:text-white/90">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// Glass Testimonial Block
export const GlassTestimonial: React.FC<{ testimonials: Testimonial[] }> = ({
  testimonials = [
    {
      quote: "An absolute game-changer for our business.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechCorp"
    }
  ]
}) => {
  return (
    <>
      <div className="text-white text-xl mb-4">Testimonial</div>
      <div className="space-y-8 p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative group">
            {/* Floating cards effect */}
            <div className="relative grid grid-cols-12 gap-6">
              {/* Image and Author Info Card */}
              <div className="col-span-4 relative group-hover:-translate-x-2 transition-transform duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-700" />
                <div className="relative rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 flex flex-col items-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  
                  {/* Image Container */}
                  <div className="relative w-32 h-32 mb-4">
                    <img
                      src="/lioncolor.png"
                      alt={testimonial.author}
                      className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <Quote className="absolute -bottom-2 -right-2 w-8 h-8 text-white/40" />
                  </div>
                  
                  {/* Author Info */}
                  <div className="text-center relative z-10">
                    <cite className="font-medium text-white not-italic block text-lg">
                      {testimonial.author}
                    </cite>
                    {(testimonial.role || testimonial.company) && (
                      <p className="text-white/70 mt-1">
                        {testimonial.role}
                        {testimonial.role && testimonial.company && ' · '}
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Quote Card */}
              <div className="col-span-8 relative group-hover:translate-x-2 transition-transform duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/25 to-blue-500/25 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-700" />
                <div className="relative h-full rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 flex items-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <blockquote className="relative z-10 text-xl text-white">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// Glass Text Block
export const GlassTextBlock: React.FC<TextContent> = ({
  title,
  subtitle,
  content
}) => {
  return (
    <>
      <div className="text-white text-xl mb-4">Content</div>
      <div className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
        <div className="group relative">
          {/* Multi-layer glass effect */}
          <div className="relative rounded-xl overflow-hidden">
            {/* Background layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl" />
            
            {/* Middle layer with glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-700" />
            
            {/* Content layer */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-xl">
              <div className="relative z-10">
                {title && (
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur" />
                    <h2 className="relative z-10 text-3xl font-bold text-white text-center">{title}</h2>
                  </div>
                )}
                {subtitle && (
                  <p className="text-xl text-white/80 mb-8 text-center">{subtitle}</p>
                )}
                <div className="prose prose-invert max-w-none prose-p:text-white/70 prose-a:text-white hover:prose-a:text-white/90">
                  {content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};