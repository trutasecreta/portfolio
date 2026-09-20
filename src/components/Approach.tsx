import React from 'react';
import { APPROACH_STEPS } from '../data/portfolioData';

export const Approach: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#E2E2DC]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 border-b border-[#E2E2DC] gap-6">
        <div>
          <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#6B6B67] block mb-2">
            04 / PROCESS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#121212] uppercase">
            MY APPROACH
          </h2>
        </div>
        <p className="text-sm font-mono-code text-[#6B6B67] max-w-xs">
          A lean, disciplined execution from discovery to deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
        {APPROACH_STEPS.map((step) => (
          <div
            key={step.number}
            className="p-8 bg-white border border-[#DFDFD8] rounded-xl flex flex-col justify-between min-h-[220px] hover:border-[#121212] transition-colors"
          >
            <div>
              <span className="font-mono-code text-xs font-bold text-[#E14924] block mb-4">
                {step.number}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#121212] uppercase">
                {step.title}
              </h3>
            </div>
            <p className="text-sm text-[#52524E] font-sans leading-relaxed mt-6">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
