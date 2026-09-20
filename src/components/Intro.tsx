import React from 'react';

export const Intro: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#E2E2DC]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
        <div className="lg:col-span-4">
          <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#6B6B67] block mb-2">
            01 / INTRODUCTION
          </span>
          <span className="text-sm font-mono-code text-[#121212]">
            DESIGN PHILOSOPHY &amp; MISSION
          </span>
        </div>

        <div className="lg:col-span-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#121212] leading-[1.08] uppercase">
            “GOOD WEBSITES SHOULD DO MORE THAN LOOK GOOD.”
          </h2>
          <p className="mt-6 sm:mt-8 text-lg sm:text-2xl text-[#52524E] leading-relaxed font-sans font-normal max-w-2xl">
            “I create modern digital experiences that combine strong visual design, thoughtful UX and clear conversion paths.”
          </p>
        </div>
      </div>
    </section>
  );
};
