import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-48 bg-[#0F211D] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 lg:mb-32 gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-white/40 uppercase mb-4 block">Expertise / Capabilities</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[1.0] lg:leading-[0.9] tracking-tighter">
              Solving <br/><span className="text-[#D4FF3F]">Complexity.</span>
            </h2>
          </div>
          <p className="max-w-xs text-base md:text-lg font-normal text-white/70 leading-relaxed">
            Specialized engineering for brands that value technical integrity and visual distinction.
          </p>
        </div>

        {/* Grid: 1 col mobile, 2 cols tablet (md), 3 cols desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {SERVICES.map((service, idx) => {
            const isWhite = idx === 1 || idx === 4;
            return (
              <div 
                key={idx} 
                className={`p-10 md:p-12 group transition-all duration-700 cursor-default ${
                  isWhite 
                    ? 'bg-white text-[#0F211D] hover:bg-[#0F211D] hover:text-white' 
                    : 'bg-[#0F211D] text-white hover:bg-white hover:text-[#0F211D]'
                }`}
              >
                <span className={`text-4xl md:text-5xl font-heading font-black mb-10 md:mb-16 block transition-all ${
                  isWhite 
                    ? 'opacity-30 group-hover:opacity-10' 
                    : 'opacity-10 group-hover:opacity-100'
                }`}>
                  {service.icon}
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-black mb-4 md:mb-6 tracking-tighter">
                  {service.title.toUpperCase()}
                </h3>
                <p className={`text-sm md:text-base font-normal leading-relaxed transition-opacity duration-500 ${
                  isWhite 
                    ? 'opacity-80 group-hover:opacity-90' 
                    : 'opacity-60 group-hover:opacity-90'
                }`}>
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;