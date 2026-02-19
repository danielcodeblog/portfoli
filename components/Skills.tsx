
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="p-10 border border-[#0F211D]/10 bg-white/50 rounded-xl backdrop-blur-sm shadow-sm">
      <h3 className="text-xs font-black tracking-[0.5em] text-[#0F211D]/30 uppercase mb-12">Core Capabilities</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="group flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="text-sm font-bold uppercase tracking-widest text-[#0F211D]">{skill.name}</span>
              <span className="text-[10px] font-black text-[#2D5A27]">{skill.level}%</span>
            </div>
            <div className="flex gap-1 h-[6px]">
               {[...Array(10)].map((_, i) => (
                 <div 
                   key={i} 
                   className={`flex-1 rounded-full ${i < skill.level/10 ? 'bg-[#2D5A27]' : 'bg-[#0F211D]/5'} transition-all duration-700 delay-[${i*50}ms]`}
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
