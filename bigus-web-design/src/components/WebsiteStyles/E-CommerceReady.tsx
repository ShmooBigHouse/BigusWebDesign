import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ShoppingCart, Heart, Filter, Star, Package, CreditCard, Truck } from 'lucide-react';
import { GlassHeader } from '@/components/Headers';
import { GlassIconButton } from '@/components/ButtonsCTA';

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
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

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

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

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
                <GlassIconButton>Shop Now</GlassIconButton>
                <GlassIconButton>Learn More</GlassIconButton>
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
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
              >
                <div className="absolute top-4 right-4 z-10">
                  <button 
                    onClick={() => toggleLike(product.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-2 bg-black/20 rounded-full"
                  >
                    <Heart 
                      className={`w-5 h-5 ${
                        likedProducts.includes(product.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'fill-transparent'
                      }`} 
                    />
                  </button>
                </div>
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
                  <div className="flex flex-col h-32">
                    <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                    <p className="text-gray-400">{product.category}</p>
                    <div className="flex items-center gap-2 mt-auto mb-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">${product.price}</span>
                    <button
                      onClick={() => setCartCount(prev => prev + 1)}
                      className="relative p-3 bg-white/5 backdrop-blur-lg border border-white/10 
                                hover:border-white/20 rounded-full overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                      <ShoppingCart className="w-5 h-5 text-white relative z-10" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400">Your order in three simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Package className="w-8 h-8" />,
                title: "Choose Your Product",
                description: "Browse our collection and select your perfect item. Add to cart and proceed to checkout."
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Secure Payment",
                description: "Complete your purchase with our secure payment system. Multiple payment options available."
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Fast Delivery",
                description: "Receive your order at your doorstep. Track your package every step of the way."
              }
            ].map((step, index) => (
              <div key={index} className="flex-1">
                {/* Number Circle with Glass Effect */}
                <div className="relative h-16 w-16 mb-8 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur scale-110" />
                  <div className="relative h-full w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-xl font-bold text-white">
                    {index + 1}
                  </div>
                </div>

                {/* Content Box */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-700" />
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl flex flex-col h-64">
                    <div className="text-blue-400 mb-4">{step.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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