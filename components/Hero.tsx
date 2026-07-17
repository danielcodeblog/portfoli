import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({ 
  text, 
  className = "", 
  showAsterisk = false, 
  style 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.6em] -right-[0.25em] text-[0.3em] text-[#D4FF3F] font-light">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- Hero ---------------- */
const Hero: React.FC = () => {
  const scrollIntoSection = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full h-[95vh] md:h-screen min-h-[600px] bg-white px-4 md:px-8 lg:px-12 pt-28 pb-6 overflow-hidden">
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[#0F211D] shadow-2xl border border-[#0F211D]/15">
        
        {/* Background Cinematic Video Loop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-85 select-none pointer-events-none"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Procedural High-Fidelity Noise Overlay (Sharp, lightweight vector noise) */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Ambient Overlay Vignette Gradients */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F211D]/90 via-transparent to-[#0F211D]/40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F211D]/55 via-transparent to-transparent hidden md:block" />

        {/* Active Availability Tag floating overlay */}
        <div className="absolute left-6 top-8 sm:left-10 sm:top-10 z-20">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#0F211D]/50 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4FF3F] animate-pulse"></span>
            <span className="text-[8px] font-mono font-black text-white/80 tracking-[0.25em] uppercase">
              Web Developer & Designer
            </span>
          </motion.div>
        </div>

        {/* Hero Interactive Content Area */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 sm:px-10 sm:pb-12 md:px-16 md:pb-16 z-10">
          <div className="grid grid-cols-12 items-end gap-6 md:gap-10">
            
            {/* Giant brand name or title with Word-by-Word Pull Up anim */}
            <div className="col-span-12 lg:col-span-8">
            </div>

            {/* Context paragraph & double conversion pill action callouts */}
            <div className="col-span-12 flex flex-col gap-6 lg:gap-8 pb-3 lg:col-span-4 lg:pb-5">
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-md lg:max-w-none"
              >
                I build <span className="text-[#D4FF3F] font-bold">high converting websites</span>. 
                A frontend & web developer bridging function and aesthetics to maximize user engagement and business impact.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-4"
              >
                <button
                  onClick={(e) => scrollIntoSection(e, 'contact')}
                  className="group inline-flex items-center gap-2 self-start rounded-full bg-[#D4FF3F] py-1.5 pl-6 pr-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#0F211D] transition-all duration-300 hover:bg-white"
                >
                  Join the lab
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F211D] transition-transform duration-500 group-hover:scale-105">
                    <ArrowUpRight className="h-4.5 w-4.5 text-[#D4FF3F] group-hover:rotate-45 transition-transform duration-500" />
                  </span>
                </button>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
