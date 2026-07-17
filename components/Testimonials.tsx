import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { ASSETS } from '@/src/assets';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
  thumbnailSrc: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    quote: "Daniel's designs brought our vision to life. His attention to detail, speed optimization, and sheer creativity are unmatched!",
    name: "Boluwatife",
    role: "CEO of MyProteiner",
    imageSrc: ASSETS.images.ceoImage,
    thumbnailSrc: ASSETS.images.ceoImage,
  },
  {
    id: 2,
    quote: "Working with Daniel was incredibly seamless. He truly understood our complex brand ecosystem and delivered far beyond all of our speed and conversion expectations!",
    name: "Emily Carter",
    role: "Creative Lead at mTech Studios",
    imageSrc: ASSETS.images.emilyCarter,
    thumbnailSrc: ASSETS.images.emilyCarterThumb,
  },
  {
    id: 3,
    quote: "He is an absolute professional with a rare talent for high-fidelity interactive interfaces. Our Lighthouse performance score went from 40 to 98% instantly.",
    name: "Mark Stevenson",
    role: "Lead of Arkle Project",
    imageSrc: ASSETS.images.markStevenson,
    thumbnailSrc: ASSETS.images.markStevensonThumb,
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const activeReview = TESTIMONIALS_DATA[currentIndex];

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  // Image animation variants (sliding vertically with subtle fade)
  const imageVariants = {
    enter: (direction: 'left' | 'right') => ({
      y: direction === 'right' ? '30%' : '-30%',
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction: 'left' | 'right') => ({
      y: direction === 'right' ? '-30%' : '30%',
      opacity: 0,
    }),
  };

  // Text animation variants (sliding horizontally with clear spring ease)
  const textVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 40 : -40,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -40 : 40,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="bg-white py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div id="testimonials-header" className="mb-16 md:mb-24 text-left max-w-3xl">
          <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#0F211D]/40 uppercase mb-4 block">
            Testimonials & Endorsements
          </span>
          <h2 id="testimonials-title" className="text-4xl md:text-6xl font-heading font-black text-[#0F211D] leading-[1.0] tracking-tighter">
            TRUSTED BY <br/><span className="text-[#2D5A27]">PARTNERS.</span>
          </h2>
        </div>

        {/* Master Slider Glass Container */}
        <div 
          id="testimonials-slider-box"
          className="relative w-full min-h-[600px] md:min-h-[640px] overflow-hidden bg-[#0F211D] text-white p-10 md:p-16 rounded-[2.5rem] border border-[#0F211D]/15 shadow-xl flex flex-col justify-between"
        >
          {/* Subtle light background pulse or mesh */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4FF3F]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch z-10">
            
            {/* === LEFT COLUMN: Meta, Pagination & Thumbnails === */}
            <div className="lg:col-span-3 flex flex-col justify-between order-3 lg:order-1 border-t lg:border-t-0 border-white/10 pt-8 lg:pt-0">
              
              <div className="flex flex-row lg:flex-col justify-between lg:justify-start lg:space-y-8 items-center lg:items-start w-full">
                {/* Dynamic Pagination Pager */}
                <div className="flex flex-col">
                  <span className="text-sm font-mono font-black text-[#D4FF3F]">
                    {String(currentIndex + 1).padStart(2, "0")} / {String(TESTIMONIALS_DATA.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Vertical category label */}
                <span className="hidden lg:block text-[9px] font-mono font-black text-white/45 tracking-[0.5em] uppercase [writing-mode:vertical-rl] rotate-180">
                  REVIEWS
                </span>
              </div>

              {/* Interactive Thumbnail Previews Navigation */}
              <div className="mt-8 lg:mt-0 flex flex-col gap-3">
                <div className="flex flex-wrap lg:flex-nowrap gap-3">
                  {TESTIMONIALS_DATA.map((review, idx) => (
                    <button
                      key={review.id}
                      onClick={() => handleThumbnailClick(idx)}
                      className={`overflow-hidden rounded-2xl w-14 h-16 md:w-16 md:h-18 transition-all duration-500 focus:outline-none relative group border-2 ${
                        idx === currentIndex 
                          ? 'border-[#D4FF3F] scale-105 shadow-md shadow-[#D4FF3F]/10' 
                          : 'border-white/10 opacity-50 hover:opacity-100 hover:scale-[1.03]'
                      }`}
                      aria-label={`View review from ${review.name}`}
                    >
                      <img
                        src={review.thumbnailSrc}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* === CENTER COLUMN: Main Image with vertical slide-fade animation === */}
            <div className="lg:col-span-4 relative h-64 sm:h-80 md:h-[380px] lg:h-[440px] rounded-[1.75rem] overflow-hidden order-1 lg:order-2 bg-black/20 shadow-inner">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex}
                  src={activeReview.imageSrc}
                  alt={activeReview.name}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                />
              </AnimatePresence>
              {/* Soft dark vignette over the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* === RIGHT COLUMN: Text & Controls with horizontal slide animation === */}
            <div className="lg:col-span-5 flex flex-col justify-between lg:pl-6 order-2 lg:order-3">
              
              {/* Dynamic Text block with sliding spring animation */}
              <div className="relative overflow-hidden pt-2 lg:pt-8 min-h-[220px]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D4FF3F]"></span>
                      <span className="text-[10px] font-mono font-black text-white/50 tracking-widest uppercase">
                        {activeReview.role}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-heading font-black text-white">
                      {activeReview.name}
                    </h3>

                    <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-white/95 relative">
                      <Quote className="absolute -left-6 -top-4 w-10 h-10 text-white/5 stroke-[1.5]" />
                      "{activeReview.quote}"
                    </blockquote>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Action Buttons Row */}
              <div className="flex items-center gap-4 mt-8 lg:mt-0 pt-6 border-t border-white/10">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-[#D4FF3F] text-white hover:text-[#0F211D] flex items-center justify-center transition-all duration-300 shadow-sm"
                  aria-label="Previous review"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-white/10 bg-[#D4FF3F] hover:bg-white text-[#0F211D] flex items-center justify-center transition-all duration-300 shadow-md"
                  aria-label="Next review"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
