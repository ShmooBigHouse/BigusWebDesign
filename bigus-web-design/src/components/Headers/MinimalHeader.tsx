// components/Headers/MinimalHeader.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface NavLink {
  text: string;
  href: string;
  isExternal?: boolean;
}

interface MinimalHeaderProps {
  title?: string;
  logo?: string;
  links?: NavLink[];
  logoSize?: number;
  showBorder?: boolean;
}

const MinimalHeader: React.FC<MinimalHeaderProps> = ({
  title = "Portfolio",
  logo = "/whiteturtle.png",
  links = [
    { text: "LinkedIn", href: "https://linkedin.com", isExternal: true },
    { text: "Email", href: "mailto:example@example.com", isExternal: true },
    { text: "CV", href: "/cv" }
  ],
  logoSize = 48,
  showBorder = true
}) => {
  return (
    <header className="w-full">
      {/* Dark background with slight transparency */}
      <div className="bg-gray-900/95">
        {/* Border line with gradient */}
        {showBorder && (
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-25" />
        )}

        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="grid grid-cols-3 items-center">
            {/* Left: Logo and Title */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative overflow-hidden rounded-full bg-gray-800 border border-gray-700">
                <Image 
                  src={logo}
                  alt={`${title} Logo`}
                  width={logoSize}
                  height={logoSize}
                  priority
                  className="rounded-full transition-transform duration-300 hover:scale-110"
                />
              </div>
              <span className="text-white/90 font-medium tracking-wide hover:text-white transition-colors">
                {title}
              </span>
            </div>

            {/* Center: Additional navigation or content */}
            <div className="flex justify-center">
              {/* Could add additional nav items or content here */}
            </div>

            {/* Right: Navigation Links */}
            <div className="flex items-center justify-end gap-6">
              {links.map((link, index) => (
                link.isExternal ? (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-white/90 hover:text-white transition-colors"
                  >
                    {link.text}
                    <ExternalLink className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                  </a>
                ) : (
                  <Link 
                    key={index}
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {link.text}
                  </Link>
                )
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MinimalHeader;