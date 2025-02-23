"use client";

import React, { useState, useEffect } from 'react';
import { Clock, Shield, Activity } from 'lucide-react';

interface ContactInfo {
  name: string;
  email: string;
}

interface SelectedItem {
  id: string;
  title: string;
  price: number;
  features: string[];
}

const CheckoutSection = () => {
  const [showMonitoringModal, setShowMonitoringModal] = useState(false);
  const [isMonitoringEnabled, setIsMonitoringEnabled] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    email: ''
  });

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem('selectedPlan');
      const storedStyle = localStorage.getItem('selectedStyle');
      
      if (storedPlan) {
        const planData = JSON.parse(storedPlan) as SelectedItem;
        setSelectedItem(planData);
        if (planData.id === 'monitoring') {
          setIsMonitoringEnabled(false);
        }
      } else if (storedStyle) {
        setSelectedItem(JSON.parse(storedStyle) as SelectedItem);
      }
    } catch (error) {
      console.error('Error loading selected item:', error);
    }
  }, []);
  
  const monitoringPrice = isMonitoringEnabled ? 50 : 0;
  
  const calculateSubtotal = () => {
    if (!selectedItem) return 0;
    return selectedItem.price + (selectedItem.id !== 'monitoring' ? monitoringPrice : 0);
  };

  const calculateTotal = () => {
    if (!selectedItem) return 0;
    return selectedItem.id === 'monitoring' ? selectedItem.price : calculateSubtotal() / 2;
  };

  const handleCheckout = () => {
    if (!contactInfo.name || !contactInfo.email) {
      alert('Please provide your name and email before proceeding.');
      return;
    }

    if (!isMonitoringEnabled && selectedItem?.id !== 'monitoring') {
      setShowMonitoringModal(true);
    } else {
      proceedToPayment();
    }
  };

  const proceedToPayment = () => {
    if (!selectedItem) return;
    
    console.log('Proceeding to payment with:', {
      item: selectedItem,
      monitoring: isMonitoringEnabled,
      monitoringPrice,
      total: calculateTotal(),
      contactInfo
    });
  };

  if (!selectedItem) {
    return (
      <div className="container mx-auto px-6 py-24">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">No Item Selected</h2>
          <p>Please select a website style or plan first.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Order Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Review Your</span>{' '}
              <span className="text-indigo-400">Order</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Please review your selections before proceeding to payment
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Contact Information */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="grid gap-6 max-w-md">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white 
                           focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white 
                           focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
          </div>

          {/* Website Monitoring Option */}
          {selectedItem.id !== 'monitoring' && (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-red-800/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500" />
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-6 border-2 border-red-500 relative hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <Activity className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Website Monitoring</h3>
                    <p className="text-sm text-gray-400">24/7 uptime monitoring</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-red-400">$50</span>
                      <span className="text-sm text-gray-400">/month</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMonitoringEnabled(!isMonitoringEnabled)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all transform
                      ${isMonitoringEnabled 
                        ? 'bg-red-500 text-white hover:bg-red-600' 
                        : 'border-2 border-red-500 text-red-400 hover:bg-red-500/10'
                      }`}
                  >
                    {isMonitoringEnabled ? 'Remove' : 'Add Monitoring'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Order Summary */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Order Summary</h3>
            <div className="space-y-4">
              {/* Selected Item */}
              <div className="flex justify-between text-gray-300 pb-4 border-b border-white/10">
                <div>
                  <p className="font-medium">{selectedItem.title}</p>
                  <div className="mt-2 space-y-1">
                    {selectedItem.features.map((feature, index) => (
                      <p key={index} className="text-sm text-gray-400">• {feature}</p>
                    ))}
                  </div>
                </div>
                <span>${selectedItem.price}</span>
              </div>

              {/* Monitoring */}
              {selectedItem.id !== 'monitoring' && isMonitoringEnabled && (
                <div className="flex justify-between text-gray-300 pb-4 border-b border-white/10">
                  <div>
                    <p className="font-medium">Website Monitoring</p>
                    <p className="text-sm text-gray-400">Professional monitoring package</p>
                  </div>
                  <span>${monitoringPrice}/month</span>
                </div>
              )}

              {/* Subtotal and Total */}
              <div className="pt-4 space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${calculateSubtotal()}</span>
                </div>
                {selectedItem.id !== 'monitoring' && isMonitoringEnabled && (
                  <div className="flex justify-between text-gray-300">
                    <span>Monthly Monitoring</span>
                    <span>+ ${monitoringPrice}/month</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-white/10">
                  <span>
                    {selectedItem.id === 'monitoring' ? 'Total Due Today' : '50% Deposit Due Today'}
                  </span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Payment Information</h3>
            
            {/* Payment Schedule */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                {selectedItem.id === 'monitoring' ? (
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-400/10 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Monthly Payment</h4>
                      <p className="text-gray-400 text-sm">
                        First month due today: ${selectedItem.price}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-400/10 rounded-lg">
                        <Clock className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Initial Payment</h4>
                        <p className="text-gray-400 text-sm">
                          50% deposit to begin work: ${calculateTotal()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-400/10 rounded-lg">
                        <Clock className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Final Payment</h4>
                        <p className="text-gray-400 text-sm">
                          Remaining balance before delivery: ${calculateTotal()}
                        </p>
                      </div>
                    </div>
                    {isMonitoringEnabled && (
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-400/10 rounded-lg">
                          <Shield className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Monthly Monitoring</h4>
                          <p className="text-gray-400 text-sm">
                            ${monitoringPrice}/month, starting after website launch
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Security Notice */}
              <div className="bg-blue-400/5 rounded-lg p-6 border border-blue-400/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Secure Payment Processing
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• 256-bit SSL encryption</li>
                  <li>• PCI DSS compliant</li>
                  <li>• Secure payment gateway</li>
                  <li>• Multiple payment methods accepted</li>
                </ul>
              </div>
            </div>

            {/* Terms and Proceed Button */}
            <div className="space-y-6">
              <p className="text-sm text-gray-400">
                By proceeding, you agree to our terms of service and acknowledge our privacy policy.
                {selectedItem.id !== 'monitoring' && ` The development process will begin once the initial payment is received.`}
              </p>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 
                         hover:from-blue-600 hover:to-indigo-700 text-white 
                         px-8 py-4 rounded-lg font-semibold transition-all
                         hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
                         flex items-center justify-center gap-2"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Monitoring Confirmation Modal */}
      {showMonitoringModal && selectedItem.id !== 'monitoring' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-800 p-8 rounded-xl border border-white/10 max-w-md mx-4">
            <h3 className="text-2xl font-bold text-white mb-4">Add Website Monitoring?</h3>
            <p className="text-gray-300 mb-6">
              Would you like to add 24/7 website monitoring to ensure your site&apos;s optimal performance?
              Only $50/month.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setIsMonitoringEnabled(true);
                  setShowMonitoringModal(false);
                  proceedToPayment();
                }}
                className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Yes, Add Monitoring
              </button>
              <button
                onClick={() => {
                  setShowMonitoringModal(false);
                  proceedToPayment();
                }}
                className="flex-1 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
              >
                No, Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutSection;