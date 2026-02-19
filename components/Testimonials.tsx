
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-24 md:py-48 bg-[#FDFCF0]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-[10px] font-black tracking-[0.6em] text-[#0F211D]/30 uppercase mb-4">Trust</h2>
          <div className="text-5xl md:text-7xl font-heading font-black text-[#0F211D] leading-none tracking-tighter">
            THEY SAID <span className="text-[#2D5A27] italic">THINGS.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="space-y-8 p-10 bg-white border border-[#0F211D]/5 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#D4FF3F]"></div>
                ))}
              </div>
              <p className="text-xl font-bold leading-tight text-[#0F211D]">
                "{t.text}"
              </p>
              <div>
                <span className="block font-black text-[#0F211D] uppercase text-xs tracking-widest">{t.name}</span>
                <span className="block text-[10px] font-bold text-[#0F211D]/40 uppercase tracking-widest">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
