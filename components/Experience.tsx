
import React from 'react';
import { EXPERIENCES } from '../constants';

interface ExperienceProps {
  isDark?: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark = false }) => {
  return (
    <div className="relative">
      <h3 className={`text-[10px] font-black tracking-[0.6em] uppercase mb-16 pb-4 border-b ${
        isDark ? 'text-white border-white/10' : 'text-[#2D5A27] border-[#0F211D]/5'
      }`}>
        The Career Protocol
      </h3>
      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10 group relative">
            <div className="md:pt-1 flex flex-row md:flex-col items-start md:items-center gap-3 md:w-32 shrink-0">
              <span className={`text-[9px] font-mono font-extrabold tracking-wider px-3 py-1.5 rounded-full uppercase whitespace-nowrap shadow-sm ${
                isDark 
                  ? 'text-white bg-white/10 border border-white/15' 
                  : 'text-[#2D5A27] bg-[#2D5A27]/6 border border-[#2D5A27]/12'
              }`}>
                {exp.period}
              </span>
              <div className={`hidden md:block w-px h-full transition-all duration-500 flex-grow min-h-[50px] mt-2 ${
                isDark ? 'bg-white/10 group-hover:bg-white/30' : 'bg-[#0F211D]/10 group-hover:bg-[#2D5A27]/30'
              }`}></div>
            </div>
            
            <div className="space-y-2 flex-grow">
              <div className="space-y-1">
                <h4 className={`text-2xl sm:text-3xl font-heading font-black transition-all duration-500 tracking-tighter ${
                  isDark ? 'text-white group-hover:text-white/80' : 'text-[#0F211D] group-hover:text-[#2D5A27]'
                }`}>
                  {exp.company.toUpperCase()}
                </h4>
                <div className="flex items-center gap-2">
                   <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-white' : 'bg-[#2D5A27]'}`}></span>
                   <p className={`font-black text-[9px] tracking-[0.25em] uppercase ${isDark ? 'text-white/90' : 'text-[#2D5A27]'}`}>{exp.role}</p>
                </div>
              </div>
              <p className={`text-sm sm:text-base leading-relaxed font-normal max-w-xl ${
                isDark ? 'text-white/80' : 'text-[#0F211D]/75'
              }`}>
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
