// components/VisualElements/MinimalVisuals.tsx
import React from 'react';

interface VisualProps {
  className?: string;
}

// Minimal Background - Pastel theme to match minimal hero
export const MinimalBackground: React.FC<VisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[200px] ${className}`}>
      <div className="absolute inset-0 bg-pink-100" />
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-pink-100 to-pink-200/20" />
    </div>
  );
};

// Minimal Pattern - Regular grid of circles matching minimal hero's aesthetic
export const MinimalPattern: React.FC<VisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[200px] overflow-hidden ${className}`}>
      {/* Base background */}
      <div className="absolute inset-0 bg-pink-100" />
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-pink-100 to-pink-200/20" />
      
      {/* Regular circle grid pattern */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #fcd34d33 0, #fcd34d33 8px, transparent 8px, transparent 100%)',
          backgroundSize: '48px 48px'
        }}
      />
    </div>
  );
};

// Minimal Divider - Simple but elegant divider matching the minimal theme
export const MinimalDivider: React.FC<VisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative py-12 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t-2 border-yellow-300" />
      </div>
      <div className="relative flex justify-center">
        <div className="w-4 h-4 bg-pink-100 border-2 border-yellow-300 rotate-45 transform -translate-y-1/2" />
      </div>
    </div>
  );
};