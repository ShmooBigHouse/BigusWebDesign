// components/VisualElements/GradientVisuals.tsx
import React from 'react';

interface VisualProps {
  className?: string;
}

// Gradient Background - Rich gradient background matching the gradient hero theme
export const GradientBackground: React.FC<VisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[200px] overflow-hidden ${className}`}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-700/90 to-indigo-600/90" />
      
      {/* Animated circular flares */}
      <div className="absolute top-0 -right-1/2 w-full h-full">
        <div className="absolute w-full h-[150%] bg-[radial-gradient(circle,rgba(147,51,234,0.4)_30%,transparent_70%)] rounded-full animate-pulse" />
      </div>
      
      {/* Mesh overlay */}
      <div className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '44px 44px'
        }}
      />
    </div>
  );
};

// Gradient Pattern - Modern hexagonal pattern with gradient overlay
export const GradientPattern: React.FC<VisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[200px] overflow-hidden ${className}`}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-700/90 to-indigo-600/90" />
      
      {/* Hexagonal pattern */}
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20V40L30 55L5 40V20L30 5Z' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-800/20 to-purple-900/40" />
    </div>
  );
};

// Gradient Divider - Dynamic gradient divider with animated glow
export const GradientDivider: React.FC<VisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative py-12 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="relative w-full h-0.5">
          {/* Base gradient line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-75 animate-pulse" />
        </div>
      </div>
      
      {/* Center diamond */}
      <div className="relative flex justify-center">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rotate-45">
          <div className="w-1 h-1 bg-white" />
        </div>
      </div>
    </div>
  );
};