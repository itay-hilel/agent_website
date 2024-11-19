import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Systems',
    description: 'Integrate with your existing tools through our enterprise-grade API'
  },
  {
    number: '02',
    title: 'Configure Workflows',
    description: 'Set up custom conversation flows and business logic in minutes'
  },
  {
    number: '03',
    title: 'Go Live',
    description: 'Deploy to production with zero downtime and real-time monitoring'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20">
          <div className="lg:max-w-xl mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Deploy Enterprise AI in Minutes
            </h2>
            <p className="text-xl text-gray-600">
              Get started quickly with our enterprise-ready platform
            </p>
          </div>
          <button className="group inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
            View Documentation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-8 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-gray-200 mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[2px] bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}