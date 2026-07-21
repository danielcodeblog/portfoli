import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'motion/react';
import Header from './components/Header';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const Projects = lazy(() => import('./components/Projects'));
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Blog = lazy(() => import('./components/Blog'));

// Fallback component for Suspense
const LoadingFallback = () => <div className="min-h-screen flex items-center justify-center">Loading...</div>;

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#8B4513] selection:text-[#FFFFFF] bg-white">
      <Header />
      
      <main className="relative z-10">
        <Suspense fallback={<LoadingFallback />}>
          <section id="hero">
            <Hero />
          </section>

          <section id="projects" className="py-12 md:py-24 lg:py-32 relative">
            <Projects />
          </section>

          <section id="services">
            <Services />
          </section>

          <Testimonials />

          <section id="about" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-48 bg-[#0F211D] relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="space-y-12 lg:space-y-16">
                 <h2 className="text-6xl md:text-7xl lg:text-[8vw] font-heading font-black tracking-tighter text-white leading-[1.0] lg:leading-[0.9]">ABOUT <br/><span className="text-[#2D5A27]">DANIEL.</span></h2>
                 <div className="space-y-8 lg:space-y-10 bg-[#142A25] border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500">
                   <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-snug font-bold tracking-tight max-w-xl">
                     Engineer and designer focused on high-performance digital products.
                   </p>
                   <div className="space-y-4">
                      <p className="text-[10px] font-mono font-black tracking-[0.4em] uppercase text-white mb-3">Core Focus Areas</p>
                      <ul className="text-sm md:text-base font-semibold text-white/90 space-y-3">
                        <li className="flex items-center justify-between p-4 rounded-xl bg-[#0F211D] hover:bg-[#2D5A27]/10 border border-white/5 hover:border-[#2D5A27]/20 transition-all duration-300 group">
                          <div className="flex items-center gap-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A27] group-hover:scale-125 transition-transform duration-300"></span>
                            <span>Interface Engineering</span>
                          </div>
                          <span className="text-[9px] font-mono font-bold tracking-wider text-white bg-white/10 border border-white/10 py-1 px-3 rounded-full uppercase">Front-End</span>
                        </li>
                        <li className="flex items-center justify-between p-4 rounded-xl bg-[#0F211D] hover:bg-[#2D5A27]/10 border border-white/5 hover:border-[#2D5A27]/20 transition-all duration-300 group">
                          <div className="flex items-center gap-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A27] group-hover:scale-125 transition-transform duration-300"></span>
                            <span>Full-Stack Architecture</span>
                          </div>
                          <span className="text-[9px] font-mono font-bold tracking-wider text-white bg-white/10 border border-white/10 py-1 px-3 rounded-full uppercase">Systems</span>
                        </li>
                        <li className="flex items-center justify-between p-4 rounded-xl bg-[#0F211D] hover:bg-[#2D5A27]/10 border border-white/5 hover:border-[#2D5A27]/20 transition-all duration-300 group">
                          <div className="flex items-center gap-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A27] group-hover:scale-125 transition-transform duration-300"></span>
                            <span>PostgreSQL Database Engineering</span>
                          </div>
                          <span className="text-[9px] font-mono font-bold tracking-wider text-white bg-white/10 border border-white/10 py-1 px-3 rounded-full uppercase">Data</span>
                        </li>
                      </ul>
                   </div>
                 </div>
                 <div className="max-w-xl mx-auto lg:mx-0">
                   <Skills isDark={true} />
                 </div>
              </div>
              
              <div className="lg:pt-40">
                <div className="bg-gradient-to-br from-[#142A25] to-[#112420] backdrop-blur-md p-8 md:p-12 lg:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group hover:shadow-3xl hover:border-[#2D5A27]/20 transition-all duration-700">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#2D5A27]/5 to-[#2D5A27]/0 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-1000"></div>
                  <div className="absolute -left-16 -bottom-16 w-36 h-36 bg-[#2D5A27]/5 rounded-full blur-2xl pointer-events-none"></div>
                  <Experience isDark={true} />
                </div>
              </div>
            </div>
          </section>

          <section id="blog">
            <Blog />
          </section>

          <footer id="contact" className="py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 bg-[#0F211D] text-[#FFFFFF] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center text-5xl md:text-7xl lg:text-[8vw] font-heading font-black tracking-tighter mb-16 md:mb-24 lg:mb-32 leading-[1.0] lg:leading-[0.9]"
              >
                LET'S <br/>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[#D4FF3F] inline-block origin-center"
                >
                  TALK.
                </motion.span>
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 mb-24 md:mb-40 items-start">
                <div className="space-y-16 lg:space-y-24">
                   <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4FF3F]">Electronic Mail</p>
                      <a href="mailto:danielsamuel1662@gmail.com" className="text-xl md:text-3xl lg:text-5xl font-black hover:text-[#D4FF3F] transition-all duration-700 break-all underline decoration-[#D4FF3F]/20 underline-offset-8 block">
                        DANIELSAMUEL1662@GMAIL.COM
                      </a>
                   </div>

                   <div className="space-y-8">
                      <p className="text-[10px] font-black uppercase tracking-[0.8em] text-white/20">Social Protocols</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-10">
                        <a href="https://www.linkedin.com/in/daniel-samuel-631285333" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-[#D4FF3F] transition-colors">LinkedIn</span>
                          <span className="text-lg md:text-xl font-bold">Daniel Samuel</span>
                        </a>
                        <a href="https://www.instagram.com/yourtchguy" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-[#D4FF3F] transition-colors">Instagram</span>
                          <span className="text-lg md:text-xl font-bold">@yourtchguy</span>
                        </a>
                        <a href="https://www.tiktok.com/@yourtchguy target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-[#D4FF3F] transition-colors">TikTok</span>
                          <span className="text-lg md:text-xl font-bold">@yourtchguy</span>
                        </a>
                      </div>
                   </div>
                </div>

                <div>
                  <ContactForm />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pt-12 md:pt-20 border-t border-white/10 opacity-40">
                 <div className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                     <img src="/favicon.svg" alt="Daniel's Badge" className="w-full h-full object-cover" />
                   </div>
                   <p className="text-[9px] font-black tracking-[0.5em] uppercase text-white/80">DANIEL SAMUEL &copy; 2026</p>
                 </div>
              </div>
            </div>
          </footer>
        </Suspense>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
