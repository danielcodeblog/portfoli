import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';

const NeuralCore: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef(0);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.6, 4);
    
    const material = new THREE.MeshPhongMaterial({
      color: 0x111111, 
      specular: 0xD4FF3F,
      shininess: 120,
      transparent: true,
      opacity: 0.95,
    });

    const wireMat = new THREE.MeshBasicMaterial({
        color: 0xD4FF3F,
        wireframe: true,
        transparent: true,
        opacity: 0.03
    });

    const mesh = new THREE.Mesh(geometry, material);
    const wire = new THREE.Mesh(geometry, wireMat);
    wire.scale.setScalar(1.02);

    const group = new THREE.Group();
    group.add(mesh);
    group.add(wire);
    scene.add(group);

    const light1 = new THREE.DirectionalLight(0xD4FF3F, 1.5);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xFFFFFF, 0.5);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    camera.position.z = 5;

    const initialPositions = new Float32Array(geometry.attributes.position.array);

    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) - 0.5;
      mouseY = (e.clientY / window.innerHeight) - 0.5;
    };

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const animate = (time: number) => {
      requestRef.current = requestAnimationFrame(animate);

      const positions = geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = initialPositions[i];
        const y = initialPositions[i + 1];
        const z = initialPositions[i + 2];
        const noise = Math.sin(x * 1.2 + time * 0.0008) * 0.15 + Math.cos(y * 1.2 + time * 0.0008) * 0.15;
        positions[i] = x * (1 + noise);
        positions[i+1] = y * (1 + noise);
        positions[i+2] = z * (1 + noise);
      }
      geometry.attributes.position.needsUpdate = true;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y += 0.002;
      group.rotation.x += 0.001;
      
      const scrollFactor = Math.min(scrollYRef.current * 0.001, 2.5);
      group.position.x = targetX * 1.2;
      group.position.y = (-targetY * 1.2) - (scrollFactor * 0.8);
      
      const scale = Math.max(0.7, 1.1 - (scrollFactor * 0.1));
      group.scale.setScalar(scale);

      renderer.render(scene, camera);
    };

    requestRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      wireMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none opacity-80" />;
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#D4FF3F] selection:text-[#0F211D] bg-[#FDFCF0]">
      <NeuralCore />
      <Header />
      
      <main className="relative z-10">
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

        <section id="about" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-48 bg-[#0F211D]/[0.02] relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="space-y-12 lg:space-y-16">
               <h2 className="text-6xl md:text-7xl lg:text-[10vw] font-heading font-black tracking-tighter text-[#0F211D] leading-[0.85] lg:leading-[0.8]">ABOUT <br/><span className="text-[#2D5A27]">DANIEL.</span></h2>
               <div className="space-y-6 lg:space-y-8">
                 <p className="text-xl md:text-2xl lg:text-4xl text-[#0F211D] leading-[1.2] lg:leading-[1.1] font-bold tracking-tight max-w-xl">
                   Engineer and designer focused on high-performance digital products.
                 </p>
                 <div className="space-y-4 lg:space-y-6">
                    <ul className="text-base md:text-lg font-bold text-[#0F211D] space-y-4">
                      <li className="flex items-center gap-4 group">
                        <span className="w-8 h-px bg-[#D4FF3F] group-hover:w-16 transition-all"></span>
                        Interface Engineering
                      </li>
                      <li className="flex items-center gap-4 group">
                        <span className="w-8 h-px bg-[#D4FF3F] group-hover:w-16 transition-all"></span>
                        Full-Stack Architecture
                      </li>
                    </ul>
                 </div>
               </div>
               <div className="max-w-xl">
                 <Skills />
               </div>
            </div>
            
            <div className="lg:pt-40">
              <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 lg:p-16 rounded-[2rem] lg:rounded-[2.5rem] border border-[#0F211D]/5 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-[#D4FF3F]/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
                <Experience />
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 bg-[#0F211D] text-[#FDFCF0] relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-7xl lg:text-[10vw] font-heading font-black tracking-tighter mb-16 md:mb-24 lg:mb-40 leading-[0.85] lg:leading-[0.8]">
              LET'S <br/><span className="text-[#D4FF3F]">TALK.</span>
            </h2>

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
                      <a href="https://www.instagram.com/__iamclassic/" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-[#D4FF3F] transition-colors">Instagram</span>
                        <span className="text-lg md:text-xl font-bold">@__iamclassic</span>
                      </a>
                      <a href="https://www.tiktok.com/@iamclassicway" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2">
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-[#D4FF3F] transition-colors">TikTok</span>
                        <span className="text-lg md:text-xl font-bold">@iamclassicway</span>
                      </a>
                    </div>
                 </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pt-12 md:pt-20 border-t border-[#FDFCF0]/10 opacity-40">
               <p className="text-[9px] font-black tracking-[0.5em] uppercase">DANIEL SAMUEL &copy; 2026</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;