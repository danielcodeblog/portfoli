import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Start', href: '#hero' },
    { name: 'Works', href: '#projects' },
    { name: 'Expertise', href: '#services' },
    { name: 'Story', href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-700 ease-in-out px-4 md:px-8 lg:px-12 pointer-events-none
          ${scrolled ? 'py-4' : 'py-6 md:py-8 lg:py-12'}
        `}
      >
        <div className={`max-w-[1600px] mx-auto flex justify-between items-center transition-all duration-700 pointer-events-auto
          ${scrolled 
            ? 'bg-[#0F211D]/90 backdrop-blur-2xl py-2 md:py-3 px-5 md:px-8 rounded-full border border-white/10 shadow-2xl' 
            : 'bg-transparent py-0 px-0'
          }
        `}>
          {/* Logo Section */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 overflow-hidden"
          >
            <div className={`font-heading font-black tracking-tighter transition-all duration-500
              ${scrolled || isMenuOpen ? 'text-[#D4FF3F] text-lg md:text-xl' : 'text-[#0F211D] text-xl md:text-2xl lg:text-3xl'}
            `}>
              DANIEL<span className={scrolled || isMenuOpen ? 'hidden' : 'inline'}> SAMUEL</span>.
            </div>
            {!scrolled && !isMenuOpen && (
              <div className="h-[2px] bg-[#D4FF3F] w-8 md:w-12 group-hover:w-20 transition-all duration-500 origin-left hidden sm:block"></div>
            )}
          </a>

          {/* laptop menu: Visible links, no button */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 xl:px-5 py-2 text-[9px] xl:text-[10px] font-black uppercase tracking-[0.2em] xl:tracking-[0.3em] transition-all relative group
                  ${scrolled || isMenuOpen ? 'text-white/60 hover:text-[#D4FF3F]' : 'text-[#0F211D]/40 hover:text-[#0F211D]'}
                `}
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#D4FF3F] rounded-full transition-all group-hover:w-4 group-hover:opacity-100 opacity-0"></span>
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`ml-3 xl:ml-4 px-6 xl:px-8 py-2.5 xl:py-3 rounded-full text-[9px] xl:text-[10px] font-black uppercase tracking-widest transition-all duration-500 shadow-xl
                ${scrolled 
                  ? 'bg-[#D4FF3F] text-[#0F211D] hover:scale-105' 
                  : 'bg-[#0F211D] text-[#FDFCF0] hover:bg-[#2D5A27]'
                }
              `}
            >
              Let's Talk
            </a>
          </nav>

          {/* mobile/tablet menu: Button trigger */}
          <div className="flex lg:hidden items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex flex-col gap-1.5 transition-all p-2.5 md:p-3 rounded-full hover:bg-white/5 active:scale-90 z-[1100]
                ${scrolled || isMenuOpen ? 'text-[#D4FF3F]' : 'text-[#0F211D]'}
              `}
              aria-label="Toggle Menu"
            >
              <div className={`h-[2px] bg-current transition-all duration-500 ${isMenuOpen ? 'w-5 md:w-6 rotate-45 translate-y-[8px]' : 'w-5 md:w-6'}`}></div>
              <div className={`h-[2px] bg-current transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'w-4 ml-auto'}`}></div>
              <div className={`h-[2px] bg-current transition-all duration-500 ${isMenuOpen ? 'w-5 md:w-6 -rotate-45 -translate-y-[8px]' : 'w-5 md:w-6'}`}></div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Overlay */}
      <div 
        className={`fixed inset-0 z-[900] bg-[#0F211D]/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex items-center justify-center lg:hidden`}
        style={{
            clipPath: isMenuOpen ? 'circle(150% at 100% 0)' : 'circle(0% at 100% 0)',
            visibility: isMenuOpen ? 'visible' : 'hidden',
            pointerEvents: isMenuOpen ? 'auto' : 'none'
        }}
      >
        <div className="text-center space-y-6 md:space-y-8 p-10 md:p-12">
            {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block text-5xl md:text-7xl lg:text-8xl font-heading font-black text-[#FDFCF0] hover:text-[#D4FF3F] transition-all tracking-tighter leading-none
                    ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                  `}
                  style={{ transitionDelay: `${idx * 100}ms`, transitionDuration: '800ms' }}
                >
                  {link.name.toUpperCase()}.
                </a>
            ))}
            <div className={`pt-10 md:pt-12 transition-all duration-1000 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                <a 
                    href="#contact" 
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="inline-block px-10 md:px-14 py-5 md:py-6 bg-[#D4FF3F] text-[#0F211D] rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:scale-110 transition-transform shadow-2xl"
                >
                    Start a Project
                </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;