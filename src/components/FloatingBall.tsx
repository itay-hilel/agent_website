import React, { useState } from 'react';
import { Mic, X } from 'lucide-react';
import ChatInterface from './ChatInterface';

export default function FloatingBall() {
  const [isActive, setIsActive] = useState(false);
  const [isListening, setIsListening] = useState(false);

  return (
    <>
      <button
  onClick={() => setIsActive(true)}
  className={`absolute bottom-32 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center transition-all duration-300 hover:scale-105 ${
    isActive ? 'opacity-0' : 'opacity-100'
  }`}
>
  <div className="absolute w-full h-full rounded-full animate-ping bg-black/10"></div>
  <Mic className="w-6 h-6" />
</button>


      {isActive && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 flex items-center justify-center animate-in fade-in duration-200">
          <div className="bg-white rounded-xl w-full max-w-xl mx-4 relative overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            <button
              onClick={() => {
                setIsActive(false);
                setIsListening(false);
              }}
              className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-6">
              <ChatInterface
                isListening={isListening}
                setIsListening={setIsListening}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}