//MinimalForms.tsx
import React, { useState } from 'react';
import { Mail, Lock, Send, ArrowRight } from 'lucide-react';

interface FormSubmitData {
  name?: string;
  email: string;
  password?: string;
  message?: string;
}

interface FormProps {
  onSubmit?: (data: FormSubmitData) => void;
  className?: string;
}

export const MinimalContactForm: React.FC<FormProps> = ({ onSubmit, className = '' }) => {
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
    <form onSubmit={handleSubmit} className={`space-y-4 bg-white p-8 rounded-lg ${className}`}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md 
                   text-gray-900 placeholder-gray-400
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your full name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md 
                   text-gray-900 placeholder-gray-400
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="you@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md 
                   text-gray-900 placeholder-gray-400
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="How can we help you today?"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded-md 
                 hover:bg-blue-700 transition-colors
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </button>
    </form>
  );
};

export const MinimalLoginForm: React.FC<FormProps> = ({ onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 bg-white p-8 rounded-lg ${className}`}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="mt-1 relative">
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="block w-full px-3 py-2 pl-10 bg-gray-50 border border-gray-300 rounded-md 
                     text-gray-900 placeholder-gray-400
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="you@example.com"
          />
          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1 relative">
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="block w-full px-3 py-2 pl-10 bg-gray-50 border border-gray-300 rounded-md 
                     text-gray-900 placeholder-gray-400
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded-md 
                 hover:bg-blue-700 transition-colors
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Sign in
      </button>
    </form>
  );
};

export const MinimalSubscribeForm: React.FC<FormProps> = ({ onSubmit, className = '' }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ email });
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-6 rounded-lg ${className}`}>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md 
                   text-gray-900 placeholder-gray-400
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email to subscribe"
        />
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md 
                   hover:bg-blue-700 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Subscribe
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>
  );
};