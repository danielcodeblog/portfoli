
import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Works', href: '#projects' },
    { name: 'Expertise', href: '#services' },
    { name: 'Story', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <div className={`
        flex items-center gap-2 p-1.5 rounded-full transition-all duration-700
        ${scrolled 
          ? 'bg-black/80 backdrop-blur-xl shadow-2xl border border-white/10' 
          : 'bg-transparent'
        }
      `}>
        {/* Brand/Logo Pill */}
        <div className={`
          px-4 py-2 rounded-full font-sans font-bold tracking-tight transition-all duration-500
          ${scrolled ? 'bg-[#A52A2A] text-white scale-95' : 'text-black text-lg'}
        `}>
          D.
        </div>

        {/* Links */}
        <div className="flex items-center gap-1 pr-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`
                px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] rounded-full transition-all
                ${scrolled 
                  ? 'text-white/90 hover:text-[#8B4513] hover:bg-white/5' 
                  : 'text-[#8B4513]/80 hover:text-black hover:bg-black/5'
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
