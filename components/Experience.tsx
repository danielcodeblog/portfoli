
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="relative">
      <h3 className="text-[10px] font-black tracking-[0.6em] text-[#0F211D]/20 uppercase mb-16">The Career Protocol</h3>
      <div className="space-y-24">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-16 group relative">
            <div className="md:pt-1 flex flex-row md:flex-col items-center gap-4">
              <span className="text-[#0F211D]/20 text-[10px] font-black rotate-0 md:rotate-180 [writing-mode:horizontal-tb] md:[writing-mode:vertical-lr] tracking-[0.4em] uppercase whitespace-nowrap">
                {exp.period}
              </span>
              <div className="hidden md:block w-px h-full bg-[#0F211D]/10 group-hover:bg-[#2D5A27] transition-colors flex-grow"></div>
            </div>
            
            <div className="space-y-4 flex-1">
              <div className="space-y-1">
                <h4 className="text-4xl md:text-5xl font-heading font-black text-[#0F211D] group-hover:text-[#2D5A27] transition-all duration-500 tracking-tighter">
                  {exp.company.toUpperCase()}
                </h4>
                <div className="flex items-center gap-3">
                   <div className="w-6 h-[2px] bg-[#D4FF3F]"></div>
                   <p className="text-[#2D5A27] font-black text-[10px] tracking-[0.3em] uppercase">{exp.role}</p>
                </div>
              </div>
              <p className="text-[#0F211D]/60 text-lg leading-snug font-medium max-w-xl pt-2">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
