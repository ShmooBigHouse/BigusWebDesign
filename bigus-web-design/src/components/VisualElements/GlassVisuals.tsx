// components/VisualElements/GlassVisuals.tsx
import React from 'react';

interface VisualProps {
  className?: string;
}

// Glass Background
export const GlassBackground: React.FC<VisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[200px] overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-white/5" />
      {/* Glass shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
    </div>
  );
};

// Glass Pattern
export const GlassPattern: React.FC<VisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[200px] overflow-hidden ${className}`}>
      {/* Same background as GlassBackground */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-white/5" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      {/* Pattern overlay */}
      <div className="absolute inset-0" 
           style={{
             backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 12px)`,
             backgroundSize: '16px 16px'
           }} 
      />
    </div>
  );
};

// Glass Divider
export const GlassDivider: React.FC<VisualProps> = ({ className = '' }) => {
  return (
    <div className={`relative py-12 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="relative w-full">
          {/* Glass bar */}
          <div className="absolute inset-0 h-px bg-white/20 backdrop-blur-sm" />
          {/* Shine effect */}
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="p-2 backdrop-blur-xl bg-white/10 rotate-45 border border-white/20">
          <div className="w-1 h-1 bg-white/40" />
        </div>
      </div>
    </div>
  );
};