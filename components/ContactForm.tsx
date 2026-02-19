
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const targetEmail = 'danielsamuel1662@gmail.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Inquiry: ${formData.name}`,
        })
      });

      const data = await response.json();

      if (data.success === "true" || response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className="bg-[#D4FF3F] p-12 md:p-20 rounded-[3rem] text-[#0F211D] animate-in zoom-in duration-500 shadow-2xl border border-white/20">
        <div className="w-20 h-20 bg-[#0F211D] rounded-full flex items-center justify-center text-[#D4FF3F] mb-10">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-none mb-8">SIGNAL <br/>SENT.</h3>
        <p className="text-xl font-bold mb-10 opacity-80 max-w-sm">Transmission successful. I have received your message and will respond shortly.</p>
        <button 
          onClick={() => setFormState('idle')}
          className="px-10 py-4 bg-[#0F211D] text-[#FDFCF0] rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div className="relative p-8 md:p-12 lg:p-16 rounded-[3rem] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden group">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4FF3F]/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#D4FF3F]/10 transition-colors duration-1000"></div>
      
      <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 ml-2">Identified As</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-lg font-bold focus:outline-none focus:border-[#D4FF3F] focus:bg-white/10 transition-all text-white placeholder:text-white/5"
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 ml-2">Reply Address</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-lg font-bold focus:outline-none focus:border-[#D4FF3F] focus:bg-white/10 transition-all text-white placeholder:text-white/5"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 ml-2">The Mission</label>
          <textarea
            required
            rows={4}
            name="message"
            placeholder="Tell me about your project or vision..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-lg font-bold focus:outline-none focus:border-[#D4FF3F] focus:bg-white/10 transition-all text-white placeholder:text-white/5 resize-none"
          />
        </div>

        {formState === 'error' && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
             <p className="text-red-400 text-[10px] font-black uppercase tracking-widest text-center">
               Network Error. Please try again.
             </p>
          </div>
        )}

        <div className="pt-4">
          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="group/btn relative flex items-center justify-between w-full p-2 bg-[#D4FF3F] hover:bg-white rounded-full transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(212,255,63,0.3)] disabled:opacity-50"
          >
            <span className="ml-8 text-[10px] font-black uppercase tracking-[0.5em] text-[#0F211D]">
              {formState === 'submitting' ? 'SYNCHRONIZING...' : 'TRANSMIT MESSAGE'}
            </span>
            <div className="w-16 h-16 rounded-full bg-[#0F211D] flex items-center justify-center text-[#D4FF3F] transition-transform duration-500 group-hover/btn:scale-95 group-hover/btn:rotate-12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
