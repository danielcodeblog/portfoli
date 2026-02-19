import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[40vh] md:min-h-[50vh] w-full flex items-center justify-center text-center px-6 pt-32 pb-10">
      <div className="relative z-20 w-full max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-[#0F211D]">
            Engineering digital high-fidelity experiences as a <span className="text-[#2D5A27]">Frontend & Web Developer</span> bridging <span className="text-[#2D5A27] italic">function</span> and <span className="text-[#2D5A27] italic">aesthetics</span>.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;