import React from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#E2E2DC]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 border-b border-[#E2E2DC] gap-6">
        <div>
          <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#6B6B67] block mb-2">
            05 / PRINCIPLES
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#121212] uppercase">
            WHY WORK WITH ME
          </h2>
        </div>
        <p className="text-sm font-mono-code text-[#6B6B67] max-w-xs">
          Built on purpose, clarity, and conversion — not decorative filler.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
        {PHILOSOPHY_PRINCIPLES.map((principle, index) => (
          <div
            key={index}
            className="p-8 bg-[#F0F0EA] border border-[#DCDCD4] rounded-xl flex flex-col justify-between min-h-[220px] hover:border-[#121212] transition-colors"
          >
            <div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#121212] block mb-4" />
              <h3 className="font-display font-black text-2xl tracking-tight text-[#121212] uppercase">
                {principle.title}
              </h3>
            </div>
            <p className="text-sm text-[#52524E] font-sans leading-relaxed mt-6">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
