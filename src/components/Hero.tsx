import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  onWorkClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<Props> = ({ onWorkClick, onContactClick }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 pb-12 sm:pb-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Top Meta Line */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono-code text-[#6B6B67] border-b border-[#E2E2DC] pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium text-[#121212]">FREELANCE {PERSONAL_INFO.title}</span>
          <span className="text-[#A2A29C]">/</span>
          <span>AVAILABLE FOR NEW PROJECTS</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[#82827D]">
          <span>FOCUS: DESIGN, EXPERIENCE &amp; CONVERSION</span>
          <span>EST. 2026</span>
        </div>
      </div>

      {/* Hero Headline & Impact Typography */}
      <div className="my-auto py-12 sm:py-20">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[106px] font-display font-extrabold tracking-[-0.035em] leading-[0.92] text-[#121212] uppercase">
          I DESIGN WEBSITES
          <br />
          <span className="text-[#121212] hover:text-[#E14924] transition-colors duration-300">
            PEOPLE REMEMBER.
          </span>
        </h1>

        <p className="mt-8 sm:mt-10 text-lg sm:text-2xl text-[#52524E] max-w-2xl font-sans font-normal leading-relaxed">
          Modern websites focused on visual impact, user experience and conversion.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            type="button"
            onClick={onWorkClick}
            className="px-8 py-4 rounded-lg bg-[#121212] text-[#F6F6F3] text-sm font-semibold tracking-wider hover:bg-[#2A2A2A] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm group"
          >
            <span>VIEW MY WORK</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>

          <button
            type="button"
            onClick={onContactClick}
            className="px-8 py-4 rounded-lg border border-[#121212] bg-transparent text-[#121212] text-sm font-semibold tracking-wider hover:bg-[#121212] hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Positioning */}
      <div className="pt-8 border-t border-[#E2E2DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono-code text-[#6B6B67]">
        <div className="flex items-center gap-3">
          <span className="text-[#121212] font-semibold">SELECTED ARCHIVE:</span>
          <span>03 VERIFIED DIGITAL PRODUCTIONS</span>
        </div>

        <button
          type="button"
          onClick={onWorkClick}
          className="group flex items-center gap-2 text-[#121212] hover:text-[#E14924] transition-colors cursor-pointer"
        >
          <span>SCROLL TO DISCOVER</span>
          <div className="w-6 h-6 rounded-full border border-[#121212] flex items-center justify-center group-hover:border-[#E14924] transition-colors">
            <ArrowDown className="w-3 h-3 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
