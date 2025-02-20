import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const GradientPrimaryButton: React.FC<ButtonProps> = ({
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
        relative px-6 py-3 text-white font-semibold rounded-lg overflow-hidden
        bg-gradient-to-r from-purple-500 to-indigo-600 
        hover:from-purple-600 hover:to-indigo-700
        disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed
        transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl
        hover:shadow-purple-500/25
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export const GradientSecondaryButton: React.FC<ButtonProps> = ({
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
        relative px-6 py-3 font-semibold rounded-lg overflow-hidden
        bg-white/80 backdrop-blur-sm border-2 border-transparent
        hover:border-indigo-500/50 
        disabled:hover:border-transparent disabled:cursor-not-allowed
        transition-all duration-300 shadow-lg hover:shadow-xl
        ${className}
      `}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
        {children}
      </span>
    </button>
  );
};

export const GradientFloatingButton: React.FC<ButtonProps> = ({
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
        bg-gradient-to-r from-indigo-500/10 to-blue-500/10
        hover:from-indigo-500/20 hover:to-blue-500/20
        disabled:from-gray-200 disabled:to-gray-200 disabled:cursor-not-allowed
        transition-all duration-300 shadow-md hover:shadow-lg
        ${className}
      `}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
        {children}
      </span>
      <ArrowRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform" />
    </button>
  );
};