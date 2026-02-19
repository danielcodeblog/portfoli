
import React, { useState, useEffect, useRef } from 'react';
import { Message } from '../types';
import { startChat, sendMessageStream } from '../services/geminiService';

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Systems online. I am Daniel's creative assistant. How can I help you navigate the archive?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      chatRef.current = startChat();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    let assistantResponse = '';
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    const stream = sendMessageStream(chatRef.current, userMessage);
    
    for await (const chunk of stream) {
      assistantResponse += chunk;
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].text = assistantResponse;
        return newMessages;
      });
    }

    setIsTyping(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0F211D]/60 backdrop-blur-md flex justify-end">
      <div className="w-full lg:w-[500px] bg-[#FDFCF0] h-full flex flex-col border-l border-[#0F211D]/10 shadow-2xl relative animate-in slide-in-from-right duration-500">
        <div className="p-8 border-b border-[#0F211D]/10 flex justify-between items-center bg-[#FDFCF0]">
          <div>
            <h3 className="font-heading font-black text-3xl tracking-tighter text-[#0F211D]">ASSISTANT</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-[#D4FF3F] animate-pulse shadow-[0_0_8px_#D4FF3F]"></span>
              <span className="text-[9px] font-black tracking-[0.4em] text-[#0F211D]/40 uppercase">Secure Uplink</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-[#0F211D]/5 hover:bg-[#D4FF3F] rounded-full transition-all text-[#0F211D] active:scale-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] p-6 rounded-3xl text-sm leading-relaxed font-bold ${
                msg.role === 'user' 
                  ? 'bg-[#0F211D] text-[#FDFCF0] rounded-tr-none' 
                  : 'bg-white text-[#0F211D] border border-[#0F211D]/5 rounded-tl-none shadow-sm'
              }`}>
                {msg.text || (isTyping && idx === messages.length - 1 ? 'Computing...' : '')}
              </div>
              <span className="text-[8px] text-[#0F211D]/20 mt-3 font-black uppercase tracking-[0.3em]">
                {msg.role === 'user' ? 'GUEST' : 'NEURAL_NODE'}
              </span>
            </div>
          ))}
        </div>

        <div className="p-8 bg-white border-t border-[#0F211D]/5">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Query protocol..."
              className="w-full bg-[#FDFCF0] border-2 border-[#0F211D]/5 rounded-2xl p-6 pr-16 text-sm font-bold focus:outline-none focus:border-[#D4FF3F] transition-all text-[#0F211D] placeholder:text-[#0F211D]/20"
            />
            <button 
              type="submit"
              className="absolute right-5 top-1/2 -translate-y-1/2 bg-[#0F211D] text-[#D4FF3F] p-3 rounded-xl hover:scale-110 active:scale-90 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
          <div className="mt-8 flex justify-between items-center opacity-20">
             <span className="text-[7px] font-black tracking-[0.6em] text-[#0F211D] uppercase">Gemini Intelligence</span>
             <span className="text-[7px] font-black tracking-[0.6em] text-[#0F211D] uppercase">Daniel Samuel Studio</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
