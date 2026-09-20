import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  onContactClick: () => void;
}

export const Navbar: React.FC<Props> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F6F6F3]/90 backdrop-blur-md py-3.5 border-b border-[#E2E2DC]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Left */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2"
          >
            <span className="font-display font-black text-xl sm:text-2xl tracking-tighter text-[#121212]">
              {PERSONAL_INFO.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E14924] inline-block mb-1 group-hover:scale-150 transition-transform" />
          </a>

          {/* Center / Right Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono-code tracking-widest text-[#52524E]">
            <button
              type="button"
              onClick={() => scrollToSection('work')}
              className="hover:text-[#121212] transition-colors cursor-pointer py-1 font-medium"
            >
              WORK
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="hover:text-[#121212] transition-colors cursor-pointer py-1 font-medium"
            >
              ABOUT
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#121212] transition-colors cursor-pointer py-1 font-medium"
            >
              CONTACT
            </button>

            {/* Optional CTA */}
            <button
              type="button"
              onClick={onContactClick}
              className="ml-4 px-4 py-2 rounded-full border border-[#121212] text-[#121212] font-semibold text-xs tracking-wider hover:bg-[#121212] hover:text-[#F6F6F3] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </nav>

          {/* Mobile Right: MARTIM / MENU */}
          <div className="md:hidden flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="text-xs font-mono-code font-bold tracking-widest text-[#121212] py-2 px-3 border border-[#D5D5CD] rounded-md bg-white/80 flex items-center gap-1.5"
              aria-label="Open navigation menu"
            >
              <span>MENU</span>
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#121212] text-[#F6F6F3] flex flex-col justify-between p-8 md:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-6">
            <span className="font-display font-black text-2xl tracking-tight text-white">
              {PERSONAL_INFO.name}
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-8 my-auto">
            <button
              type="button"
              onClick={() => scrollToSection('work')}
              className="text-left font-display text-4xl font-extrabold tracking-tight hover:text-[#E14924] transition-colors"
            >
              WORK
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="text-left font-display text-4xl font-extrabold tracking-tight hover:text-[#E14924] transition-colors"
            >
              ABOUT
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="text-left font-display text-4xl font-extrabold tracking-tight hover:text-[#E14924] transition-colors"
            >
              CONTACT
            </button>
          </div>

          <div className="border-t border-[#2A2A2A] pt-6 flex flex-col gap-3 font-mono-code text-xs text-[#8E8E93]">
            <p>{PERSONAL_INFO.positioning}</p>
            <div className="flex justify-between items-center pt-2">
              <span className="text-white">{PERSONAL_INFO.email}</span>
              <span className="text-[#E14924]">AVAILABLE // 2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
