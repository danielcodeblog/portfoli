
import React, { useRef, useEffect, useState } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="relative w-full bg-[#FDFCF0]">
      {/* Reduced vertical space and removed the 'Selected Case Studies' label as per user request to tighten the layout */}
      <div className="px-6 md:px-12 lg:px-20 pt-4 md:pt-8 mb-8 md:mb-12">
        <div className="max-w-5xl">
          <div className="text-5xl md:text-[clamp(4rem,10vw,8rem)] lg:text-[14vw] font-heading font-black text-[#0F211D] leading-[0.85] lg:leading-[0.75] tracking-tighter">
            THE <br/><span className="text-[#2D5A27] italic">ARCHIVE.</span>
          </div>
        </div>
      </div>
      
      {/* Stacked Projects with Minimize Effect */}
      <div className="flex flex-col gap-[5vh] md:gap-[10vh] pb-[10vh] md:pb-[20vh]">
        {PROJECTS.map((project, idx) => (
          <MinimizeProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      <div className="mt-16 md:mt-32 px-6 md:px-20 flex justify-center pb-32 md:pb-64">
        <a 
          href="mailto:danielsamuel1662@gmail.com" 
          className="group relative px-12 md:px-20 py-8 md:py-10 overflow-hidden rounded-full border border-[#0F211D]/10 hover:border-[#D4FF3F] transition-all duration-700 block text-center"
        >
           <span className="relative z-10 text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#0F211D] group-hover:text-[#FDFCF0]">Start a New Project</span>
           <div className="absolute inset-0 bg-[#0F211D] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
        </a>
      </div>
    </div>
  );
};

const MinimizeProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top < 100) {
        const progress = Math.min(Math.max((100 - rect.top) / viewportHeight, 0), 1);
        const newScale = 1 - (progress * 0.1); 
        const newOpacity = 1 - (progress * 0.2); 
        setScale(newScale);
        setOpacity(newOpacity);
      } else {
        setScale(1);
        setOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={cardRef}
      className="sticky top-16 md:top-24 w-full px-4 md:px-8 lg:px-10 h-[75vh] md:h-[85vh] flex items-center justify-center pointer-events-none"
      style={{
        zIndex: index + 1,
      }}
    >
      <div 
        className="relative w-full max-w-[1400px] h-full rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] overflow-hidden bg-[#0F211D] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] pointer-events-auto cursor-pointer transition-transform duration-300 ease-out origin-center"
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
        }}
        onClick={() => window.open(project.link, '_blank')}
      >
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover grayscale opacity-40 md:opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 scale-105 hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F211D] via-[#0F211D]/40 md:via-[#0F211D]/20 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 flex flex-col md:flex-row items-end justify-between gap-6 md:gap-10">
          <div className="space-y-4 md:space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="text-[9px] md:text-[10px] font-black text-[#D4FF3F] tracking-[0.4em] md:tracking-[0.5em] uppercase">{project.category}</span>
              <div className="h-px w-6 md:w-8 bg-[#D4FF3F]/30"></div>
            </div>
            
            <h3 className="text-4xl md:text-6xl lg:text-[8vw] font-heading font-black text-white leading-[0.9] lg:leading-[0.8] tracking-tighter">
              {project.title.toUpperCase()}
            </h3>
            
            <p className="text-base md:text-lg lg:text-2xl font-bold text-white/70 max-w-lg leading-snug">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span key={tag} className="text-[8px] md:text-[9px] font-black uppercase tracking-widest px-3 md:px-4 py-1.5 border border-white/10 text-white/40 rounded-full bg-white/5 backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="group/btn flex items-center gap-4 md:gap-6 pb-2 self-start md:self-end">
            <div className="flex flex-col items-end">
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-white">View Project</span>
                <span className="text-[8px] font-bold text-[#D4FF3F] tracking-widest uppercase opacity-0 group-hover/btn:opacity-100 transition-opacity hidden md:block">Launch live site</span>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#D4FF3F] flex items-center justify-center text-[#0F211D] transition-all duration-500 group-hover/btn:scale-110 shadow-2xl">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute top-6 right-8 md:top-10 md:right-12 text-[15vw] md:text-[10vw] font-heading font-black text-white/5 leading-none select-none pointer-events-none">
          0{index + 1}
        </div>
      </div>
    </div>
  );
};

export default Projects;
