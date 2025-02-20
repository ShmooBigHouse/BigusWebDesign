import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const MinimalPrimaryButton: React.FC<ButtonProps> = ({
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
        px-6 py-2 bg-blue-600 text-white font-medium rounded-lg
        hover:bg-blue-700 active:bg-blue-800 
        disabled:bg-gray-300 disabled:cursor-not-allowed
        transition-all duration-200 shadow-sm
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export const MinimalSecondaryButton: React.FC<ButtonProps> = ({
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
        px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-lg
        hover:bg-blue-50 active:bg-blue-100
        disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export const MinimalTextButton: React.FC<ButtonProps> = ({
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
        group inline-flex items-center text-blue-600 font-medium
        hover:text-blue-700 active:text-blue-800
        disabled:text-gray-300 disabled:cursor-not-allowed
        transition-colors duration-200
        ${className}
      `}
    >
      {children}
      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  );
};