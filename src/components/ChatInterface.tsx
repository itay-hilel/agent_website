import React, { useState } from 'react';
import { Mic, Loader2, Bot } from 'lucide-react';

interface ChatInterfaceProps {
  isListening: boolean;
  setIsListening: (value: boolean) => void;
}

interface Message {
  type: 'user' | 'assistant';
  content: string;
}

export default function ChatInterface({ isListening, setIsListening }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentResponse, setCurrentResponse] = useState('');

  const simulateConversation = async () => {
    if (isListening) return;
    
    setIsListening(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setMessages(prev => [...prev, { type: 'user', content: 'Hi, I need help with setting up a customer service workflow.' }]);
    setIsListening(false);
    
    const response = "I'd be happy to help you set up a customer service workflow. First, could you tell me about your current process?";
    
    let displayedResponse = '';
    for (let i = 0; i < response.length; i++) {
      displayedResponse += response[i];
      setCurrentResponse(displayedResponse);
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    
    setMessages(prev => [...prev, { type: 'assistant', content: response }]);
    setCurrentResponse('');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-1">Try It Now</h3>
        <p className="text-sm text-gray-600">Click the microphone to start a conversation</p>
      </div>

      <div className="min-h-[200px] space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              message.type === 'assistant' ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.type === 'assistant' ? 'bg-black text-white' : 'bg-indigo-100'
              }`}
            >
              {message.type === 'assistant' ? (
                <Bot className="w-4 h-4" />
              ) : (
                <div className="w-4 h-4 rounded-full bg-indigo-500" />
              )}
            </div>
            <div
              className={`rounded-xl px-4 py-2 ${
                message.type === 'assistant'
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-indigo-500 text-white'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        
        {currentResponse && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="rounded-xl px-4 py-2 bg-gray-100">
              {currentResponse}
            </div>
          </div>
        )}
        
        {isListening && (
          <div className="flex justify-center">
            <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <button
          onClick={simulateConversation}
          disabled={isListening}
          className={`w-14 h-14 rounded-full bg-black text-white flex items-center justify-center transition-all duration-200 ${
            isListening ? 'opacity-50' : 'hover:scale-105'
          }`}
        >
          <Mic className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}