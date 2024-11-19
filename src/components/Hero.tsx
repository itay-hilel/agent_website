import React from 'react';
import Header from './Header';
import { ArrowRight } from 'lucide-react';
import FloatingBall from './FloatingBall';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col items-center justify-start pt-32"> {/* Changed to justify-start and added pt-32 */}
      {/* Header */}
      <Header />

      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-5">
        <img src="/api/placeholder/1920/1080" alt="background" className="w-full h-full object-cover" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative"> {/* Removed negative margin */}
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Transform Your Business Communication with AI
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-600 mb-32 leading-relaxed max-w-2xl"> {/* Increased to mb-32 */}
            Automate customer interactions with an AI voice agent that understands context, handles complex conversations, and integrates seamlessly with your systems.
          </p>

          {/* Floating Ball - Centered */}
          <div className="flex justify-center items-center mb-12">
            <FloatingBall />
          </div>

          {/* Buttons Section */}
          <div className="flex items-center gap-6">
            <button className="group px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-all duration-200 flex items-center">
              Schedule a Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-black transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Background at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}