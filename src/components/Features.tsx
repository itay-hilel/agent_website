import React from 'react';
import { Phone, Brain, Globe, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Context-Aware AI',
    description: 'Natural conversations with deep understanding of context and user intent'
  },
  {
    icon: Phone,
    title: 'Enterprise Voice',
    description: 'Crystal-clear voice quality with advanced noise cancellation'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Support for 100+ languages with regional accent understanding'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Zero-latency responses with instant natural language understanding'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified with end-to-end encryption'
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Enterprise-Grade AI Communication
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for businesses that demand reliability, security, and scalability
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="mb-6 inline-flex">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}