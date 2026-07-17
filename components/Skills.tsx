
import React from 'react';
import { SKILLS } from '../constants';

interface SkillsProps {
  isDark?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark = false }) => {
  return (
    <div className={`mx-auto p-8 md:p-10 border rounded-[2rem] backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-[#2D5A27]/20 transition-all duration-700 relative overflow-hidden group ${
      isDark 
        ? 'border-white/10 bg-gradient-to-br from-[#142A25] to-[#112420]' 
        : 'border-[#0F211D]/10 bg-gradient-to-br from-white/90 to-white/40'
    }`}>
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#2D5A27]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#2D5A27]/10 transition-colors duration-1000"></div>
      <h3 className={`text-[10px] font-black tracking-[0.5em] uppercase mb-10 border-b pb-4 text-center ${
        isDark ? 'text-white border-white/10' : 'text-[#2D5A27] border-[#0F211D]/5'
      }`}>
        Core Capabilities
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="group/item flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                isDark 
                  ? 'text-white/90 group-hover/item:text-white' 
                  : 'text-[#0F211D] group-hover/item:text-[#2D5A27]'
              }`}>{skill.name}</span>
              <span className={`text-[10px] font-mono font-black ${isDark ? 'text-white/80' : 'text-[#2D5A27]'}`}>{skill.level}%</span>
            </div>
            <div className="flex gap-1.5 h-[6px]">
               {[...Array(10)].map((_, i) => (
                 <div 
                   key={i} 
                   className={`flex-1 rounded-full ${
                     i < skill.level/10 
                       ? (isDark ? 'bg-white group-hover/item:bg-white/80' : 'bg-[#2D5A27] group-hover/item:bg-[#2D5A27]/80') 
                       : (isDark ? 'bg-white/10' : 'bg-[#0F211D]/10')
                   } transition-all duration-500`}
                   style={{ transitionDelay: `${i * 30}ms` }}
                 ></div>
               ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
