"use client";

"use client";

import React, { useState, useEffect } from 'react';
import { Clock, Shield, Activity } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface SelectedItem {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  features: string[];
}

const CheckoutSection = () => {
  const [showMonitoringModal, setShowMonitoringModal] = useState(false);
  const [isMonitoringEnabled, setIsMonitoringEnabled] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [monitoringType, setMonitoringType] = useState<'monthly' | 'yearly'>('monthly');
  const [isLoading, setIsLoading] = useState(false);

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
  
  const monitoringPrice = isMonitoringEnabled ? (monitoringType === 'yearly' ? 500 : 50) : 0;
  const originalMonthlyPrice = 60;
  
  const calculateSubtotal = () => {
    if (!selectedItem) return 0;
    return selectedItem.price + (selectedItem.id !== 'monitoring' ? monitoringPrice : 0);
  };

  const calculateTotal = () => {
    if (!selectedItem) return 0;
    return selectedItem.id === 'monitoring' ? selectedItem.price : calculateSubtotal() / 2;
  };

  const handleCheckout = () => {
    if (!isMonitoringEnabled && selectedItem?.id !== 'monitoring') {
      setShowMonitoringModal(true);
    } else {
      proceedToPayment();
    }
  };

  const proceedToPayment = async () => {
    if (!selectedItem) return;
    
    setIsLoading(true);
    try {
      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          packageType: selectedItem.id,
          withMonitoring: isMonitoringEnabled,
          monitoringType: monitoringType,
        }),
      });

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error('Error:', error);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
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
    <div className="container mx-auto px-6 py-24 max-w-4xl">
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

      {/* Website Monitoring Option - Centered under header */}
      {selectedItem?.id !== 'monitoring' && (
        <div className="flex justify-center mb-8">
          <div className="relative group md:w-72">
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-red-800/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500" />
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-6 border-2 border-red-500 relative">
              <div className="flex items-center gap-4 mb-4">
                <Activity className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                <div>
                  <h3 className="text-xl font-bold text-white">Website Monitoring</h3>
                  <p className="text-sm text-gray-400">24/7 uptime monitoring</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors">
                  <input
                    type="radio"
                    name="monitoringType"
                    value="monthly"
                    checked={monitoringType === 'monthly'}
                    onChange={() => setMonitoringType('monthly')}
                    className="w-4 h-4 text-red-500 border-gray-600 focus:ring-red-500"
                  />
                  <div>
                    <span className="text-white">Single Month</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-red-400">$60</span>
                      <span className="text-sm text-gray-400">one-time payment</span>
                    </div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors">
                  <input
                    type="radio"
                    name="monitoringType"
                    value="yearly"
                    checked={monitoringType === 'yearly'}
                    onChange={() => setMonitoringType('yearly')}
                    className="w-4 h-4 text-red-500 border-gray-600 focus:ring-red-500"
                  />
                  <div>
                    <span className="text-white">Yearly Plan</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-green-400">$50</span>
                      <span className="text-sm text-gray-400">/month</span>
                      <span className="text-xs text-green-400">(Save $10/month with yearly commitment)</span>
                    </div>
                  </div>
                </label>
              </div>

              <button
                onClick={() => setIsMonitoringEnabled(!isMonitoringEnabled)}
                className={`w-full ${
                  isMonitoringEnabled 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
                    : 'border-2 border-red-500 hover:bg-red-500/10'
                } text-white px-4 py-2 rounded-lg font-semibold transition-all transform group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]`}
              >
                {isMonitoringEnabled ? 'Remove Monitoring' : 'Add Monitoring'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-8">
        {/* Order Summary */}
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Order Summary</h3>
          <div className="space-y-4">
            {/* Selected Item with Original Price */}
            <div className="flex justify-between text-gray-300 pb-4 border-b border-white/10">
              <div>
                <p className="font-medium">{selectedItem?.title}</p>
                <div className="mt-2 space-y-1">
                  {selectedItem?.features.map((feature, index) => (
                    <p key={index} className="text-sm text-gray-400">• {feature}</p>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 justify-end">
                  <span className="text-[#39FF14] font-bold">${selectedItem?.price}</span>
                  {selectedItem?.originalPrice && (
                    <span className="text-lg line-through text-gray-600">${selectedItem?.originalPrice}</span>
                  )}
                </div>
                {selectedItem?.originalPrice && (
                  <span className="text-xs text-[#39FF14]">Save ${selectedItem.originalPrice - selectedItem.price}!</span>
                )}
              </div>
            </div>

            {/* Monitoring */}
            {selectedItem?.id !== 'monitoring' && isMonitoringEnabled && (
              <div className="flex justify-between text-gray-300 pb-4 border-b border-white/10">
                <div>
                  <p className="font-medium">Website Monitoring</p>
                  <p className="text-sm text-gray-400">Professional monitoring package</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    {monitoringType === 'monthly' ? (
                      <span className="text-green-400">$60 one-time</span>
                    ) : (
                      <>
                        <span className="text-green-400">$50/month</span>
                        <span className="text-sm line-through text-gray-600">$60/month</span>
                      </>
                    )}
                  </div>
                  {monitoringType === 'yearly' && (
                    <p className="text-xs text-green-400">Save $10/month</p>
                  )}
                </div>
              </div>
            )}

            {/* Subtotal and Total */}
            <div className="pt-4 space-y-2">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end">
                    <span>${calculateSubtotal()}</span>
                    {selectedItem?.originalPrice && (
                      <span className="text-sm line-through text-gray-600">
                        ${selectedItem.originalPrice + (isMonitoringEnabled ? originalMonthlyPrice : 0)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {selectedItem?.id !== 'monitoring' && isMonitoringEnabled && (
                <div className="flex justify-between text-gray-300">
                  <span>
                    {monitoringType === 'monthly' ? 'One-time Monitoring' : 'Monthly Monitoring'}
                  </span>
                  <div className="text-right">
                    <span>
                      {monitoringType === 'monthly' ? '+ $60' : '+ $50/month'}
                    </span>
                  </div>
                </div>
              )}
              <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-white/10">
                <span>
                  {selectedItem?.id === 'monitoring' ? 'Total Due Today' : '50% Deposit Due Today'}
                </span>
                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end">
                    <span>${calculateTotal()}</span>
                    {selectedItem?.originalPrice && (
                      <span className="text-lg line-through text-gray-600">
                        ${selectedItem.id === 'monitoring' ? selectedItem.originalPrice : (selectedItem.originalPrice + (isMonitoringEnabled ? originalMonthlyPrice : 0)) / 2}
                      </span>
                    )}
                  </div>
                </div>
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
              {selectedItem?.id === 'monitoring' ? (
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
                        <h4 className="text-white font-medium mb-1">
                          {monitoringType === 'monthly' ? 'One-time Monitoring' : 'Monthly Monitoring'}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {monitoringType === 'monthly' 
                            ? '$60 one-time payment' 
                            : '$50/month, starting after website launch'}
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
              {selectedItem?.id !== 'monitoring' && ` The development process will begin once the initial payment is received.`}
            </p>
            
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 
                       hover:from-blue-600 hover:to-indigo-700 text-white 
                       px-8 py-4 rounded-lg font-semibold transition-all
                       hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
                       flex items-center justify-center gap-2
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Processing...
                </div>
              ) : (
                'Proceed to Payment'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Monitoring Confirmation Modal */}
      {showMonitoringModal && selectedItem?.id !== 'monitoring' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-800 p-8 rounded-xl border border-white/10 max-w-md mx-4">
            <h3 className="text-2xl font-bold text-white mb-4">Add Website Monitoring?</h3>
            <p className="text-gray-300 mb-6">
              Would you like to add 24/7 website monitoring to ensure your site&apos;s optimal performance?
            </p>
            
            {/* Monitoring Type Selection */}
            <div className="space-y-4 mb-6">
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors relative border border-transparent">
                  <div className="flex items-center gap-3 relative z-10 w-full">
                    <input
                      type="radio"
                      name="monitoringType"
                      value="monthly"
                      checked={monitoringType === 'monthly'}
                      onChange={() => setMonitoringType('monthly')}
                      className="w-4 h-4 text-blue-500 border-gray-600 focus:ring-blue-500"
                    />
                    <div>
                      <span className="text-white font-medium">Single Month</span>
                      <p className="text-sm text-gray-400">$60 one-time payment</p>
                    </div>
                  </div>
                  {monitoringType === 'monthly' && (
                    <div className="absolute inset-0 border-2 border-blue-500/50 rounded-lg"></div>
                  )}
                </label>
                <label className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors relative border border-transparent">
                  <div className="flex items-center gap-3 relative z-10 w-full">
                    <input
                      type="radio"
                      name="monitoringType"
                      value="yearly"
                      checked={monitoringType === 'yearly'}
                      onChange={() => setMonitoringType('yearly')}
                      className="w-4 h-4 text-blue-500 border-gray-600 focus:ring-blue-500"
                    />
                    <div>
                      <span className="text-white font-medium">Yearly Plan</span>
                      <p className="text-sm text-gray-400">$50/month (Save $10/month with yearly commitment)</p>
                    </div>
                  </div>
                  {monitoringType === 'yearly' && (
                    <div className="absolute inset-0 border-2 border-blue-500/50 rounded-lg"></div>
                  )}
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  setIsMonitoringEnabled(true);
                  setShowMonitoringModal(false);
                  proceedToPayment();
                }}
                disabled={isLoading}
                className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  'Yes, Add Monitoring'
                )}
              </button>
              <button
                onClick={() => {
                  setShowMonitoringModal(false);
                  proceedToPayment();
                }}
                disabled={isLoading}
                className="flex-1 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  'No, Continue'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutSection;