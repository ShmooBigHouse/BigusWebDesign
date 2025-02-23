"use client";

import React, { useState, useRef } from 'react';
import { Layout, Blocks, PenTool, MousePointer, FileText, Palette, GitBranch, Folder, LayoutGrid, Users } from 'lucide-react';

// Import all showcase components
import HeadersNavShowcase from '@/components/Showcase/HeadersNav';
import FootersShowcase from '@/components/Showcase/Footers';
import FormsShowcase from '@/components/Showcase/FormsInputs';
import ButtonsCTAShowcase from '@/components/Showcase/ButtonsCTA';
import ContentBlocksShowcase from '@/components/Showcase/ContentBlocks';
import VisualElementsShowcase from '@/components/Showcase/VisualElements';
import HeroSectionShowcase from '@/components/Showcase/HeroSection';
import NumberedComponentsShowcase from '@/components/Showcase/NumberedComponents';
import ProjectPortfolioShowcase from '@/components/Showcase/ProjectPortfolioShowcase';
import ServiceCardsShowcase from '@/components/Showcase/ServiceCards';
import TeamMembersGridShowcase from '@/components/Showcase/TeamMembersGrid';
import BlogShowcase from '@/components/Showcase/BlogShowcase';


type CategoryId = 'headers' | 'footers' | 'hero' | 'numbers' | 'portfolio' | 'services' | 'team' | 'forms' | 'buttons' | 'content' | 'visual' | 'blog';

interface Category {
  id: CategoryId;
  name: string;
  icon: React.ReactNode;
  description: string;
  component: React.ReactNode;
}

interface SelectedState {
  category: CategoryId | null;
}

const ComponentShowcase = () => {
  const [selected, setSelected] = useState<SelectedState>({
    category: null
  });

  // Add ref for the showcase container
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Modified click handler with proper typing
  const handleCategoryClick = (categoryId: CategoryId) => {
    setSelected(prev => ({
      category: prev.category === categoryId ? null : categoryId
    }));

    // Scroll showcase into view
    if (showcaseRef.current) {
      showcaseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories: Category[] = [
    {
      id: 'headers',
      name: 'Headers & Navigation',
      icon: <Layout className="w-5 h-5" />,
      description: 'Headers and navigation components for various website styles',
      component: <HeadersNavShowcase />
    },
    {
      id: 'footers',
      name: 'Footers',
      icon: <Blocks className="w-5 h-5" />,
      description: 'Footer designs for various website styles',
      component: <FootersShowcase />
    },
    {
      id: 'hero',
      name: 'Hero Sections',
      icon: <Layout className="w-5 h-5" />,
      description: 'Impactful hero sections for landing pages',
      component: <HeroSectionShowcase />
    },
    {
      id: 'numbers',
      name: 'Numbered Components',
      icon: <GitBranch className="w-5 h-5" />,
      description: 'Visual guides for processes, timelines, and key points.',
      component: <NumberedComponentsShowcase />
    },
    {
      id: 'portfolio',
      name: 'Project Portfolio',
      icon: <Folder className="w-5 h-5" />,
      description: 'Showcase your work with style',
      component: <ProjectPortfolioShowcase />
    },
    {
      id: 'services',
      name: 'Service Cards',
      icon: <LayoutGrid className="w-5 h-5" />,
      description: 'Display your services and pricing options',
      component: <ServiceCardsShowcase />
    },
    {
      id: 'team',
      name: 'Team Members',
      icon: <Users className="w-5 h-5" />,
      description: 'Showcase your team with style',
      component: <TeamMembersGridShowcase />
    },
    {
      id: 'forms',
      name: 'Forms & Inputs',
      icon: <PenTool className="w-5 h-5" />,
      description: 'Contact forms, sign-ups, message boxes, and input fields',
      component: <FormsShowcase />
    },
    {
      id: 'buttons',
      name: 'Buttons & CTAs',
      icon: <MousePointer className="w-5 h-5" />,
      description: 'Primary & secondary buttons, CTA styles, and interactions',
      component: <ButtonsCTAShowcase />
    },
    {
      id: 'content',
      name: 'Content Blocks',
      icon: <FileText className="w-5 h-5" />,
      description: 'Text sections, cards, testimonials, and grids',
      component: <ContentBlocksShowcase />
    },
    {
      id: 'visual',
      name: 'Visual Elements',
      icon: <Palette className="w-5 h-5" />,
      description: 'Background styles, section dividers, and icons',
      component: <VisualElementsShowcase />
    },
    {
      id: 'blog',
      name: 'Blog Layouts',
      icon: <FileText className="w-5 h-5" />,
      description: 'Modern blog layouts with various styling options',
      component: <BlogShowcase />
    }
  ];

  return (
    <div className="relative min-h-screen" ref={showcaseRef}>
      <div className="bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900 opacity-50 absolute inset-0" />
      
      <div className="relative py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
            <div className="relative">
              <p className="text-4xl md:text-5xl font-bold mb-6">Choose from</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-indigo-400">Premium Components</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover our collection of carefully crafted components for your perfect website
              </p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex gap-8">
            {/* Categories List - Left Side */}
            <div className="w-80 flex-shrink-0 space-y-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`
                    w-full text-left p-4 rounded-lg transition-all duration-300
                    bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm
                    border-2
                    ${selected.category === category.id 
                      ? 'border-blue-500/70 shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                      : 'border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_0_10px_rgba(147,51,234,0.3)]'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className={`
                      text-purple-400 transition-colors duration-300
                      ${selected.category === category.id ? 'text-blue-400' : ''}
                    `}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{category.name}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Preview Area - Right Side */}
            <div className="flex-1 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-lg border-2 border-purple-500/20">
              {selected.category ? (
                categories.find(c => c.id === selected.category)?.component
              ) : (
                <div className="h-full flex items-center justify-center p-12">
                  <div className="text-center">
                    <p className="text-xl text-gray-400">Select a component category to view</p>
                    <p className="text-sm text-gray-500 mt-2">Click any option from the categories on the left</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;