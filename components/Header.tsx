import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { MenuIcon, XIcon } from './icons/IconComponents';
import TmsLogo from './Logo';

interface HeaderProps {
  onScrollTo: (id: SectionId) => void;
}

const navLinks = [
  { id: SectionId.Home, title: 'Home' },
  { id: SectionId.Services, title: 'Services' },
  { id: SectionId.About, title: 'About' },
  { id: SectionId.Careers, title: 'Careers' },
  { id: SectionId.Contact, title: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ onScrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: SectionId) => {
    onScrollTo(id);
    setIsOpen(false);
  };
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-tms-blue/95 shadow-lg backdrop-blur-sm' : 'bg-tms-blue'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(SectionId.Home); }}>
              <TmsLogo className="h-12 w-auto" variant="light" mode="compact" />
            </a>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                className="text-white hover:text-tms-cyan transition-colors duration-300 font-medium"
              >
                {link.title}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={`#${SectionId.Contact}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(SectionId.Contact); }}
              className="px-5 py-2 bg-tms-cyan text-white font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-tms-cyan focus:outline-none"
              aria-label="Open menu"
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-tms-blue/95 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
              className="text-white hover:text-tms-cyan block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.title}
            </a>
          ))}
          <a
             href={`#${SectionId.Contact}`}
             onClick={(e) => { e.preventDefault(); handleNavClick(SectionId.Contact); }}
             className="mt-4 w-full text-center px-5 py-2 bg-tms-cyan text-white font-bold rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;