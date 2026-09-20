import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  onContactClick: () => void;
}

export const Footer: React.FC<Props> = ({ onContactClick }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 sm:py-20 border-t border-[#E2E2DC] bg-[#F1F1ED]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        {/* Left identity */}
        <div>
          <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#121212] block">
            {PERSONAL_INFO.name}
          </span>
          <span className="font-mono-code text-xs text-[#6B6B67] tracking-widest uppercase block mt-1">
            {PERSONAL_INFO.title}
          </span>
          <p className="text-xs text-[#82827D] font-sans mt-3 max-w-xs">
            {PERSONAL_INFO.positioning}
          </p>
        </div>

        {/* Center / Right Links */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-mono-code tracking-widest text-[#52524E]">
          <button
            type="button"
            onClick={() => scrollTo('work')}
            className="hover:text-[#121212] transition-colors cursor-pointer"
          >
            WORK
          </button>
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="hover:text-[#121212] transition-colors cursor-pointer"
          >
            ABOUT
          </button>
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="hover:text-[#121212] transition-colors cursor-pointer"
          >
            CONTACT
          </button>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#121212] transition-colors font-medium text-[#121212]"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs font-mono-code text-[#8E8E88] pt-4 md:pt-0 border-t md:border-t-0 border-[#DFDFD8] w-full md:w-auto">
          © {PERSONAL_INFO.year} Martim. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
