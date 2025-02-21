import React, { useState } from 'react';
import Image from 'next/image';
import { GlassPrimaryButton, GlassSecondaryButton, GlassIconButton } from '@/components/ButtonsCTA';
import { GlassHeader } from '@/components/Headers';
import { GlassCards } from '@/components/ServiceCards';
import { Search, ShoppingCart, Heart, Filter, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
}

const E_CommerceReady = () => {
  const [cartCount, setCartCount] = useState(0);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 299.99,
      category: "Electronics",
      rating: 4.8,
      image: "/headphones.png"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      category: "Accessories",
      rating: 4.6,
      image: "/watch.png"
    },
    {
      id: 3,
      name: "Wireless Speaker",
      price: 159.99,
      category: "Electronics",
      rating: 4.7,
      image: "/speaker.png"
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 79.99,
      category: "Accessories",
      rating: 4.5,
      image: "/stand.png"
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 149.99,
      category: "Electronics",
      rating: 4.9,
      image: "/keyboard.png"
    },
    {
      id: 6,
      name: "Wireless Mouse",
      price: 89.99,
      category: "Electronics",
      rating: 4.7,
      image: "/mouse.png"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <GlassHeader 
        brandName="TechStore"
        navigationItems={[
          { name: "New Arrivals", href: "#new" },
          { name: "Categories", href: "#categories" },
          { name: "Deals", href: "#deals" },
          { name: "Support", href: "#support" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Next-Gen Tech
                <br />
                <span className="text-blue-400">Premium Quality</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover the latest in tech innovation with our premium collection of gadgets and accessories.
              </p>
              <div className="flex gap-4">
                <GlassPrimaryButton>Shop Now</GlassPrimaryButton>
                <GlassSecondaryButton>Learn More</GlassSecondaryButton>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square w-full max-w-md mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <Image 
                  src="/featured-product.png"
                  alt="Featured Product"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="sticky top-0 z-10 bg-white/5 backdrop-blur-xl border-y border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="p-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
            <button className="relative p-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {['All', 'Electronics', 'Accessories', 'Audio', 'Gaming', 'Workspace'].map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white whitespace-nowrap hover:bg-white/10 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product: Product) => (
              <div
                key={product.id}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
              >
                <div className="aspect-square p-8">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 border-t border-white/10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                      <p className="text-gray-400">{product.category}</p>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">${product.price}</span>
                    <GlassIconButton onClick={() => setCartCount(prev => prev + 1)}>
                      Add to Cart
                    </GlassIconButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <GlassCards />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-xl border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">TechStore</h3>
              <p className="text-gray-400">Your premium tech destination</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@techstore.com</li>
                <li>(555) 345-6789</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TechStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default E_CommerceReady;