import React from 'react';
import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin, Palette, Eye, Send } from 'lucide-react';

// Custom Header Component
const ArtistHeader: React.FC = () => {
  return (
    <div className="fixed w-full top-0 z-50">
      <div className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <a href="#" className="text-2xl font-light text-white">
              Studio<span className="text-orange-400 font-semibold">Arte</span>
            </a>
            <div className="flex gap-8">
              {['Gallery', 'About', 'Exhibitions', 'Commission'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

// Custom Gallery Component
const ArtGallery: React.FC = () => {
  const artworks = [
    {
      title: "Abstract Harmony",
      type: "Mixed Media",
      image: "/artstand.png",
      size: "36\" x 48\""
    },
    {
      title: "Urban Flow",
      type: "Digital Art",
      image: "/purse.png",
      size: "24\" x 36\""
    },
    {
      title: "Natural Rhythms",
      type: "Acrylic on Canvas",
      image: "/phone.png",
      size: "40\" x 40\""
    },
    {
      title: "Digital Dreams",
      type: "Digital Print",
      image: "/DigitalDreams.png",
      size: "30\" x 40\""
    },
    {
      title: "Cosmic Dance",
      type: "Oil on Canvas",
      image: "/CosmicDance.png",
      size: "48\" x 60\""
    },
    {
      title: "Modern Expression",
      type: "Mixed Media",
      image: "/ModernExpression.png",
      size: "36\" x 36\""
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {artworks.map((artwork, index) => (
        <div 
          key={index}
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-900/20 to-rose-900/20 p-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image 
              src={artwork.image}
              alt={artwork.title}
              width={600}
              height={750}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-light text-white mb-1">{artwork.title}</h3>
                <p className="text-orange-300">{artwork.type}</p>
                <p className="text-white/70 text-sm">{artwork.size}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Custom Footer Component
const ArtistFooter: React.FC = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-white">
              Studio<span className="text-orange-400 font-semibold">Arte</span>
            </h3>
            <p className="text-white/70">Creating unique artistic experiences</p>
            <p className="text-white/50">Open for commissions and exhibitions</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Visit Us</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  123 Artist Avenue,
                  <br />New York, NY 10001
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  create@studioarte.com
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-white/70">
                <li>Tuesday - Friday: 10am - 6pm</li>
                <li>Saturday: 11am - 4pm</li>
                <li>Sunday - Monday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Component
const CreativePortfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-rose-950 to-orange-950">
      <ArtistHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-rose-500/20 to-orange-500/20 mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-light mb-6">
                <span className="text-white">Where Art Meets</span>
                <br />
                <span className="text-orange-400 font-semibold">Imagination</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 max-w-lg">
                A contemporary art studio specializing in mixed media, digital art, and custom commissions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg 
                                 hover:bg-white/20 transition-all flex items-center gap-2">
                  <span className="text-white">View Gallery</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 py-3 bg-orange-500 rounded-lg text-white hover:bg-orange-600 transition-colors">
                  Commission Art
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square w-full max-w-md mx-auto">
                <Image 
                  src="/artstand.png"
                  alt="Featured Artwork"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">Featured <span className="text-orange-400 font-semibold">Works</span></h2>
            <p className="text-white/70">Exploring the boundaries of contemporary art</p>
          </div>
          <ArtGallery />
        </div>
      </section>

      {/* Services Section */}
      <section id="commission" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">Commission <span className="text-orange-400 font-semibold">Services</span></h2>
            <p className="text-white/70">Custom artwork tailored to your vision</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Custom Paintings",
                description: "Unique pieces created to your specifications in your choice of medium."
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Digital Art",
                description: "Modern digital artwork perfect for contemporary spaces and branding."
              },
              {
                icon: <Send className="w-8 h-8" />,
                title: "Art Consulting",
                description: "Expert guidance on art selection and placement for your space."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6
                         hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-light text-white mb-2">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">Start Your <span className="text-orange-400 font-semibold">Project</span></h2>
            <p className="text-white/70">Commission a unique piece or inquire about gallery showings</p>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white 
                             placeholder-white/50 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white 
                             placeholder-white/50 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Project Type</label>
                  <select
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white 
                             focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                  >
                    <option value="" className="text-gray-900">Select a project type</option>
                    <option value="commission" className="text-gray-900">Custom Commission</option>
                    <option value="exhibition" className="text-gray-900">Gallery Exhibition</option>
                    <option value="consultation" className="text-gray-900">Art Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white 
                             placeholder-white/50 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                    placeholder="Tell us about your project or inquiry"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 
                           transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ArtistFooter />
    </div>
  );
};

export default CreativePortfolio;