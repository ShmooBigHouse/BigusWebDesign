import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Custom Header Component
const BusinessHeader: React.FC = () => {
  return (
    <div className="w-full bg-pink-900">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="grid grid-cols-3 items-center">
          <div className="flex items-center gap-3">
            <span className="text-white/90 font-medium tracking-wide hover:text-white transition-colors">
              Modern Business
            </span>
          </div>
          <div className="flex justify-center"></div>
          <div className="flex items-center justify-end gap-6">
            {['Services', 'About', 'Contact'].map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/90 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

// Custom Service Cards Component
const BusinessServiceCards: React.FC = () => {
  const services = [
    {
      title: "Basic Package",
      price: "$29.99",
      description: "Perfect for personal use",
      features: ["2-day shipping", "30-day returns", "24/7 support", "Single device"],
      popular: false
    },
    {
      title: "Premium Package",
      price: "$49.99",
      description: "Best for small businesses",
      features: ["Next-day shipping", "90-day returns", "Priority support", "Up to 5 devices"],
      popular: true
    },
    {
      title: "Enterprise Package",
      price: "$99.99",
      description: "For large organizations",
      features: ["Same-day shipping", "1-year warranty", "Dedicated manager", "Unlimited devices"],
      popular: false
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div 
          key={index}
          className={`
            rounded-lg border ${service.popular ? 'border-pink-900' : 'border-gray-300'} 
            p-6 transition-all hover:-translate-y-1 duration-300
            shadow-lg hover:shadow-xl relative bg-white
          `}
        >
          {service.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-pink-900 text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </span>
            </div>
          )}
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
            <div className="text-3xl font-bold text-pink-900 mb-2">{service.price}</div>
            <p className="text-gray-600">{service.description}</p>
          </div>
          <div className="space-y-4 mb-6">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-pink-900 rounded-full mr-2"></span>
                {feature}
              </div>
            ))}
          </div>
          <button className={`
            w-full py-3 px-4 rounded-lg text-white
            ${service.popular ? 'bg-pink-900 hover:bg-pink-800' : 'bg-gray-800 hover:bg-gray-900'}
            transition-colors
          `}>
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
};

// Custom Footer Component
const BusinessFooter: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="h-px bg-gradient-to-r from-transparent via-pink-900 to-transparent" />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-pink-900">Modern Business</h3>
            <p className="text-gray-600">Professional solutions for modern challenges</p>
          </div>
          <div className="lg:col-span-3 grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Services', 'Pricing', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-pink-900 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Blog', 'Documentation', 'FAQs', 'Support'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-pink-900 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>hello@business.com</li>
                <li>(555) 123-4567</li>
                <li>New York, NY</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Component
const ModernBusiness = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "Working with Modern Business has transformed our company&apos;s digital presence. Their strategic insights and professional execution exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc."
    },
    {
      quote: "The team&apos;s attention to detail and commitment to excellence made all the difference in our project&apos;s success.",
      author: "Michael Chen",
      role: "CTO, InnovateCo"
    },
    {
      quote: "A truly professional team that delivers results. They understand business needs and translate them into effective solutions.",
      author: "Emily Rodriguez",
      role: "Marketing Director, GrowthLabs"
    }
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <BusinessHeader />

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
                <button className="px-6 py-3 bg-pink-900 text-white font-medium rounded-lg hover:bg-pink-800 transition-all">
                  Get Started
                </button>
                <button className="px-6 py-3 border-2 border-pink-900 text-pink-900 font-medium rounded-lg hover:bg-pink-50 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square w-full max-w-md mx-auto bg-yellow-300 rounded-3xl p-8 shadow-lg">
                <div className="relative w-full h-full">
                  <Image 
                    src="/lion.png"
                    alt="lion logo"
                    width={400}
                    height={400}
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-pink-900">Choose Your Package</h2>
            <p className="text-gray-600 mt-2">Select the perfect plan for your needs</p>
          </div>
          <BusinessServiceCards />
        </div>
      </section>

      {/* Testimonial Section with Carousel */}
      <section className="py-24 bg-pink-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-pink-900">Client Success Stories</h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <blockquote className="text-xl text-pink-900 mb-6">
                {testimonials[testimonialIndex].quote}
              </blockquote>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-pink-900">{testimonials[testimonialIndex].author}</p>
                  <p className="text-pink-700">{testimonials[testimonialIndex].role}</p>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-pink-100 text-pink-900 hover:bg-pink-200 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-pink-100 text-pink-900 hover:bg-pink-200 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-pink-900">Get In Touch</h2>
            <p className="text-gray-600 mt-2">Let&apos;s discuss how we can help your business grow</p>
          </div>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-pink-900 mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg text-gray-900 
                           placeholder-gray-400 focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-pink-900 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg text-gray-900 
                           placeholder-gray-400 focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-pink-900 mb-2 font-medium">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-pink-200 rounded-lg text-gray-900 
                           placeholder-gray-400 focus:border-pink-900 focus:ring-1 focus:ring-pink-900"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-900 text-white font-medium px-6 py-3 rounded-lg 
                         hover:bg-pink-800 hover:-translate-y-1 hover:translate-x-1 transition-all duration-200"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      <BusinessFooter />
    </div>
  );
};

export default ModernBusiness;