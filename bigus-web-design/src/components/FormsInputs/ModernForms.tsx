// ModernForms.tsx
import React, { useState } from 'react';
import { Mail, Lock, Send, ArrowRight } from 'lucide-react';

interface FormProps {
  onSubmit?: (data: any) => void;
  className?: string;
}

export const ModernContactForm: React.FC<FormProps> = ({ onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl ${className}`}>
      <div className="group relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 
                     blur transition group-hover:opacity-40" />
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="relative block w-full px-6 py-4 bg-white/20 rounded-full text-white 
                   border border-white/10 placeholder-white/50
                   focus:border-purple-500 focus:ring-2 focus:ring-purple-500 
                   focus:ring-opacity-50 focus:outline-none
                   backdrop-blur-xl transition-all duration-200"
          placeholder="What's your name?"
        />
      </div>

      <div className="group relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 
                     blur transition group-hover:opacity-40" />
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="relative block w-full px-6 py-4 bg-white/20 rounded-full text-white 
                   border border-white/10 placeholder-white/50
                   focus:border-purple-500 focus:ring-2 focus:ring-purple-500 
                   focus:ring-opacity-50 focus:outline-none
                   backdrop-blur-xl transition-all duration-200"
          placeholder="Enter your best email"
        />
      </div>

      <div className="group relative">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 
                     blur transition group-hover:opacity-40" />
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="relative block w-full px-6 py-4 bg-white/20 rounded-3xl text-white 
                   border border-white/10 placeholder-white/50
                   focus:border-purple-500 focus:ring-2 focus:ring-purple-500 
                   focus:ring-opacity-50 focus:outline-none
                   backdrop-blur-xl transition-all duration-200"
          placeholder="Share your thoughts or questions..."
        />
      </div>

      <button
        type="submit"
        className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 
                 px-8 py-4 text-white shadow-lg transition-all hover:shadow-purple-500/25"
      >
        <span className="relative flex items-center justify-center">
          <Send className="w-5 h-5 mr-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-200" />
          Send Message
        </span>
        <div className="absolute inset-0 backdrop-blur-xl bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
      </button>
    </form>
  );
};

export const ModernLoginForm: React.FC<FormProps> = ({ onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl ${className}`}>
      <div className="group relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 
                     blur transition group-hover:opacity-40" />
        <div className="relative flex items-center">
          <Mail className="absolute left-6 h-5 w-5 text-white/50" />
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="block w-full pl-14 pr-6 py-4 bg-white/20 rounded-full text-white 
                     border border-white/10 placeholder-white/50
                     focus:border-purple-500 focus:ring-2 focus:ring-purple-500 
                     focus:ring-opacity-50 focus:outline-none
                     backdrop-blur-xl transition-all duration-200"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="group relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 
                     blur transition group-hover:opacity-40" />
        <div className="relative flex items-center">
          <Lock className="absolute left-6 h-5 w-5 text-white/50" />
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="block w-full pl-14 pr-6 py-4 bg-white/20 rounded-full text-white 
                     border border-white/10 placeholder-white/50
                     focus:border-purple-500 focus:ring-2 focus:ring-purple-500 
                     focus:ring-opacity-50 focus:outline-none
                     backdrop-blur-xl transition-all duration-200"
            placeholder="Enter your secure password"
          />
        </div>
      </div>

      <button
        type="submit"
        className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 
                 px-8 py-4 text-white shadow-lg transition-all hover:shadow-purple-500/25"
      >
        <span className="relative z-10">Sign in</span>
        <div className="absolute inset-0 backdrop-blur-xl bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
      </button>
    </form>
  );
};

export const ModernSubscribeForm: React.FC<FormProps> = ({ onSubmit, className = '' }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ email });
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-xl ${className}`}>
      <div className="flex gap-4">
        <div className="group flex-1 relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 
                       blur transition group-hover:opacity-40" />
          <div className="relative flex items-center">
            <Mail className="absolute left-6 h-5 w-5 text-white/50" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-14 pr-6 py-4 bg-white/20 rounded-full text-white 
                       border border-white/10 placeholder-white/50
                       focus:border-purple-500 focus:ring-2 focus:ring-purple-500 
                       focus:ring-opacity-50 focus:outline-none
                       backdrop-blur-xl transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <button
          type="submit"
          className="group relative overflow-hidden px-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 
                   text-white shadow-lg transition-all hover:shadow-purple-500/25 
                   flex items-center justify-center"
        >
          <span className="relative flex items-center">
            Sign up
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </span>
          <div className="absolute inset-0 rounded-full backdrop-blur-xl bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-200" />
        </button>
      </div>
    </form>
  );
};