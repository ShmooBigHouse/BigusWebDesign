import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { packageType, withMonitoring, monitoringType } = body;

    const line_items = [];
    
    // Add the main package
    const packagePrices = {
      'premade': 300,
      'component-based': 750,
      'custom': 1500
    };

    // Add the base package
    line_items.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `${packageType.charAt(0).toUpperCase() + packageType.slice(1)} Website Package`,
          description: '50% deposit for website development',
        },
        unit_amount: packagePrices[packageType as keyof typeof packagePrices] * 50, // convert to cents
      },
      quantity: 1,
    });

    // Add monitoring if selected
    if (withMonitoring) {
      if (monitoringType === 'monthly') {
        // One-time payment for single month
        line_items.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Website Monitoring - Single Month',
              description: 'One month of website monitoring service',
            },
            unit_amount: 6000, // $60 in cents
          },
          quantity: 1,
        });
      } else {
        // Recurring monthly payment with yearly commitment
        line_items.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Website Monitoring - Monthly',
              description: 'Monthly website monitoring service (Yearly commitment)',
            },
            unit_amount: 5000, // $50 in cents
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        });
      }
    }

    // Create Checkout Session with appropriate mode
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: withMonitoring && monitoringType === 'yearly' ? 'subscription' : 'payment',
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/checkout`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}