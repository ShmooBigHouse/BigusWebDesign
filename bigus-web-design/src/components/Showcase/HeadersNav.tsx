// components/Showcase/HeadersNav.tsx
import React, { useState } from 'react';
import { Layout, ExternalLink, ArrowRight } from 'lucide-react';
import {
  LegalHeader,
  MarketplaceHeader,
  MinimalHeader,
  GlassHeader
} from '@/components/Headers';
import SidebarNav from '@/components/navigation/SidebarNav';

interface Component {
  title: string;
  description: string;
  preview: string;
  component: React.ReactNode;
}

const HeadersNavShowcase = () => {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  const components: Component[] = [
    {
      title: "Legal Header",
      description: "Professional header with dropdown navigation, perfect for law firms and professional services",
      preview: "Full-featured navigation with contact details",
      component: (
        <LegalHeader 
          title="Example Law Firm"
          subtitle="Professional Legal Services"
          contact={{
            office: "555-0123",
            cell: "555-0124",
            email: "contact@example.com"
          }}
          navItems={[
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services', dropdown: ['Service 1', 'Service 2'] },
            { name: 'Contact', path: '/contact' }
          ]}
        />
      )
    },
    {
      title: "Marketplace Header",
      description: "Modern e-commerce header with CTA and value proposition",
      preview: "Conversion-focused design for online platforms",
      component: (
        <MarketplaceHeader 
          title="Your Marketplace"
          description="Discover amazing products and services at competitive prices"
          ctaText="Join Now"
        />
      )
    },
    {
      title: "Minimal Header",
      description: "Clean, minimalist header for portfolios and personal sites",
      preview: "Simple and elegant navigation",
      component: (
        <MinimalHeader 
          title="Portfolio"
          links={[
            { text: "Work", href: "#" },
            { text: "About", href: "#" },
            { text: "Contact", href: "#", isExternal: true }
          ]}
          showBorder={true}
        />
      )
    },
    {
      title: "Glass Header",
      description: "Modern glass morphism header with smooth animations",
      preview: "Trendy design with blur effects",
      component: (
        <GlassHeader 
          brandName="Glass Brand"
          navigationItems={[
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "About", href: "#about" }
          ]}
          ctaButton={{
            text: "Get Started",
            href: "#get-started"
          }}
          isDark={true}
          glassEffect={true}
        />
      )
    },
    {
      title: "Dashboard Sidebar",
      description: "Collapsible sidebar navigation for admin panels and dashboards",
      preview: "Feature-rich side navigation",
      component: (
        <div className="h-[600px] w-full bg-gray-100 overflow-hidden">
          <SidebarNav 
            brandName="Admin Panel"
          />
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="p-6 flex items-center gap-4">
        <Layout className="w-8 h-8 text-blue-400" />
        <div>
          <h3 className="text-2xl font-bold text-white">Headers & Navigation</h3>
          <p className="text-gray-400">Professional headers and navigation components for various website styles</p>
        </div>
      </div>

      {/* Component Grid */}
      {expandedComponent === null ? (
        <div className="grid md:grid-cols-3 gap-4 p-6">
          {components.map((component, index) => (
            <button
              key={index}
              onClick={() => setExpandedComponent(index)}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 hover:border-blue-500/50 transition-all duration-300 p-6 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-500">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {component.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-4">
                    {component.description}
                  </p>
                  <div className="flex items-center text-sm text-indigo-400">
                    <span className="mr-2">{component.preview}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="p-6">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="mb-8">
              <button 
                onClick={() => setExpandedComponent(null)}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                ← Back to components
              </button>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">
                {components[expandedComponent].title}
              </h3>
              <p className="text-gray-400">
                {components[expandedComponent].description}
              </p>
            </div>
            <div className="relative">
              {components[expandedComponent].component}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeadersNavShowcase;