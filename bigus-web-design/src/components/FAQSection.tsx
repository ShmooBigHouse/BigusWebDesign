import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What's included in each website package?",
      answer: "Each package includes responsive web design, basic SEO setup, hosting setup assistance, and a set number of revisions based on your chosen plan. The component-based and custom plans also include additional features like advanced customization, priority support, and more extensive revision rounds."
    },
    {
      question: "How long does it take to complete a website?",
      answer: "Timeline varies by package: Premade websites can be completed in 1-2 days, Component-based sites in 2-3 days, and Custom websites in 3-5 days. These timelines assume prompt feedback and content delivery from clients."
    },
    {
      question: "Do I need to provide my own hosting?",
      answer: "Yes, you'll need your own hosting and domain. We can recommend reliable hosting providers and assist with the setup process. We also offer guidance on choosing the right hosting plan for your needs."
    },
    {
      question: "How does the revision process work?",
      answer: "Each package includes a specific number of revision rounds. Basic package includes 1 revision, Component-based includes 2 rounds, and Custom includes 3 rounds. Additional revisions can be purchased if needed."
    },
    {
      question: "What's included in the website monitoring service?",
      answer: "Our monitoring service includes 24/7 uptime monitoring, performance tracking, security scanning, regular backups, and monthly reports. We also provide instant alerts if any issues are detected."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      {/* Section Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Common</span>{' '}
            <span className="text-indigo-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to frequently asked questions about our services
          </p>
        </div>
      </div>

      {/* FAQ Grid */}
      <div className="max-w-4xl mx-auto grid gap-6">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-700" />
            <div className="relative bg-black/30 backdrop-blur-sm rounded-lg border border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between text-white"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;