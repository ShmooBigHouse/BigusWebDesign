// ElegantForms.tsx
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

// Elegant Contact Form
export const ElegantContactForm: React.FC<FormProps> = ({ onSubmit, className = '' }) => {
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
    <form onSubmit={handleSubmit} className={`space-y-6 bg-white p-8 rounded-lg shadow-lg ${className}`}>
      <div className="relative">
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="block w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-300 text-gray-900 
                   focus:border-blue-500 focus:outline-none transition-colors peer"
          placeholder=" "
        />
        <label
          htmlFor="name"
          className="absolute left-0 -top-5 text-sm text-gray-600 peer-placeholder-shown:text-base 
                   peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500 
                   transition-all"
        >
          Name
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="block w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-300 text-gray-900 
                   focus:border-blue-500 focus:outline-none transition-colors peer"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute left-0 -top-5 text-sm text-gray-600 peer-placeholder-shown:text-base 
                   peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500 
                   transition-all"
        >
          Email
        </label>
      </div>

      <div className="relative">
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="block w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-300 text-gray-900 
                   focus:border-blue-500 focus:outline-none transition-colors peer"
          placeholder=" "
        />
        <label
          htmlFor="message"
          className="absolute left-0 -top-5 text-sm text-gray-600 peer-placeholder-shown:text-base 
                   peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500 
                   transition-all"
        >
          Message
        </label>
      </div>

      <button
        type="submit"
        className="group relative w-full overflow-hidden rounded-lg bg-blue-500 px-4 py-3 text-white hover:bg-blue-600 transition-colors"
      >
        <span className="relative z-10 flex items-center justify-center">
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </span>
      </button>
    </form>
  );
};

// Elegant Login Form
export const ElegantLoginForm: React.FC<FormProps> = ({ onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 bg-white p-8 rounded-lg shadow-lg ${className}`}>
      <div className="relative">
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="block w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-300 text-gray-900 
                   focus:border-blue-500 focus:outline-none transition-colors peer pl-10"
          placeholder=" "
        />
        <Mail className="absolute left-0 top-4 h-5 w-5 text-gray-400 peer-focus:text-blue-500 transition-colors" />
        <label
          htmlFor="email"
          className="absolute left-10 -top-5 text-sm text-gray-600 peer-placeholder-shown:text-base 
                   peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500 
                   transition-all"
        >
          Email
        </label>
      </div>

      <div className="relative">
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="block w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-300 text-gray-900 
                   focus:border-blue-500 focus:outline-none transition-colors peer pl-10"
          placeholder=" "
        />
        <Lock className="absolute left-0 top-4 h-5 w-5 text-gray-400 peer-focus:text-blue-500 transition-colors" />
        <label
          htmlFor="password"
          className="absolute left-10 -top-5 text-sm text-gray-600 peer-placeholder-shown:text-base 
                   peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500 
                   transition-all"
        >
          Password
        </label>
      </div>

      <button
        type="submit"
        className="group relative w-full overflow-hidden rounded-lg bg-blue-500 px-4 py-3 text-white hover:bg-blue-600 transition-colors"
      >
        <span className="relative z-10">Sign in</span>
      </button>
    </form>
  );
};

// Elegant Subscribe Form
export const ElegantSubscribeForm: React.FC<FormProps> = ({ onSubmit, className = '' }) => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 bg-white p-8 rounded-lg shadow-lg ${className}`}>
      <div className="relative">
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="block w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-300 text-gray-900 
                   focus:border-blue-500 focus:outline-none transition-colors peer"
          placeholder=" "
        />
        <Mail className="absolute left-0 top-4 h-5 w-5 text-gray-400 peer-focus:text-blue-500 transition-colors" />
      </div>

      <button
        type="submit"
        className="group relative w-full overflow-hidden rounded-lg bg-blue-500 px-4 py-3 text-white hover:bg-blue-600 transition-colors"
      >
        <span className="relative z-10 flex items-center justify-center">
          Subscribe
          <ArrowRight className="ml-2 h-4 w-4" />
        </span>
      </button>
    </form>
  );
};