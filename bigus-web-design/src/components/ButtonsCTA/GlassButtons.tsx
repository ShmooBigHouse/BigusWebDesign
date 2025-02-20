import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const GlassPrimaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = ''
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-6 py-3 font-semibold rounded-lg overflow-hidden group
        bg-white/5 backdrop-blur-lg border border-white/10 
        hover:border-white/20 transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center">
        <span className="text-white">{children}</span>
      </div>
    </button>
  );
};

export const GlassSecondaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = ''
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-6 py-3 font-semibold rounded-lg overflow-hidden group
        bg-white/5 backdrop-blur-lg border border-white/10
        hover:border-white/20 transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        <span className="text-white/90 group-hover:text-white transition-colors">{children}</span>
      </div>
    </button>
  );
};

export const GlassIconButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = ''
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        group inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg
        bg-white/5 backdrop-blur-lg border border-white/10
        hover:border-white/20 transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-cyan-500/10 opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center">
        <span className="text-white/90 group-hover:text-white transition-colors">{children}</span>
        <ArrowRight className="ml-2 w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
      </div>
    </button>
  );
};