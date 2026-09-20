import React from 'react';
import { CAPABILITIES } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#E2E2DC]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
        <div className="lg:col-span-4">
          <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#6B6B67] block mb-2">
            03 / ABOUT
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#121212] uppercase leading-tight">
            A LITTLE
            <br />
            ABOUT ME.
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <p className="text-xl sm:text-3xl text-[#2A2A27] font-sans font-normal leading-relaxed">
            “I’m Martim, a web designer focused on creating modern, polished and conversion-focused websites.”
          </p>

          <div className="pt-8 border-t border-[#E2E2DC]">
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#6B6B67] block mb-6">
              CORE CAPABILITIES
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
              {CAPABILITIES.map((capability, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 p-4 bg-white/60 border border-[#DFDFD8] rounded-xl hover:border-[#121212] transition-colors"
                >
                  <span className="font-mono-code text-xs text-[#E14924] font-bold">
                    0{index + 1}
                  </span>
                  <span className="font-display font-bold text-sm tracking-wide text-[#121212]">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
