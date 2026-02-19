import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-48 bg-[#0F211D] text-[#FDFCF0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 lg:mb-32 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black tracking-[0.8em] text-[#FDFCF0]/20 uppercase mb-6">Expertise / Capabilities</h2>
            <div className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[0.9] lg:leading-[0.85] tracking-tighter">
              Solving <br/><span className="text-[#D4FF3F]">Complexity.</span>
            </div>
          </div>
          <p className="max-w-xs text-base md:text-lg font-medium text-[#FDFCF0]/50 leading-tight">
            Specialized engineering for brands that value technical integrity and visual distinction.
          </p>
        </div>

        {/* Grid: 1 col mobile, 2 cols tablet (md), 4 cols desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#FDFCF0]/5">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-[#0F211D] p-10 md:p-12 group hover:bg-[#FDFCF0] hover:text-[#0F211D] transition-all duration-700 cursor-default">
              <span className="text-4xl md:text-5xl font-heading font-black mb-10 md:mb-16 block opacity-10 group-hover:opacity-100 transition-all">{service.icon}</span>
              <h3 className="text-2xl md:text-3xl font-heading font-black mb-4 md:mb-6 tracking-tighter">{service.title.toUpperCase()}</h3>
              <p className="text-base md:text-lg font-medium opacity-40 group-hover:opacity-80 leading-snug">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;