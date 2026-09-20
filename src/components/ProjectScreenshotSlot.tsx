import React, { useState } from 'react';
import { ExternalLink, Maximize2, Monitor, Smartphone, Upload, Check } from 'lucide-react';
import { ProjectScreenshot } from '../types';

interface Props {
  projectNumber: string;
  projectId: string;
  screenshot: ProjectScreenshot;
  onExpand?: () => void;
  variant?: 'hero' | 'desktop' | 'mobile';
  className?: string;
}

export const ProjectScreenshotSlot: React.FC<Props> = ({
  projectId,
  screenshot,
  onExpand,
  variant = 'hero',
  className = '',
}) => {
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Allow custom file upload if the user wants to test with their actual screenshot files
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
    }
  };

  const isMobile = variant === 'mobile';

  return (
    <div
      className={`group relative overflow-hidden bg-[#161618] border border-[#27272A] transition-all duration-500 ${
        isMobile
          ? 'rounded-[32px] p-2 sm:p-3 shadow-2xl max-w-[280px] sm:max-w-[310px] mx-auto'
          : 'rounded-xl shadow-xl'
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Browser or Mobile Device Chrome */}
      {!isMobile ? (
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#1F1F23] border-b border-[#2C2C32] text-xs text-[#8E8E93] font-mono-code select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
            <span className="ml-2 text-[11px] text-[#A1A1AA] font-sans font-medium flex items-center gap-1">
              <Monitor className="w-3 h-3 text-[#71717A]" />
              {screenshot.label}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-[#141416] px-3 py-0.5 rounded text-[10px] text-[#71717A]">
            <span>martim-preview // {projectId}.app</span>
          </div>
          <div className="flex items-center gap-2">
            {onExpand && (
              <button
                type="button"
                onClick={onExpand}
                aria-label="Expand screenshot"
                className="text-[#A1A1AA] hover:text-white transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between px-4 py-1.5 text-white/60 text-[10px] font-mono-code">
          <span>9:41</span>
          <div className="w-20 h-3 bg-[#09090B] rounded-full mx-auto" />
          <span className="flex items-center gap-1">
            <Smartphone className="w-2.5 h-2.5" /> 100%
          </span>
        </div>
      )}

      {/* Media Canvas Area */}
      <div
        className={`relative w-full overflow-hidden ${
          isMobile ? 'aspect-[9/19] rounded-[24px] bg-[#0C0D0E]' : 'aspect-[16/10] bg-[#0E0F12]'
        }`}
      >
        {customImage ? (
          <img
            src={customImage}
            alt={screenshot.label}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <CraftedProjectMockup
            projectId={projectId}
            type={screenshot.type}
            isMobile={isMobile}
          />
        )}

        {/* Dedicated Slot Badge & Upload Trigger on Hover */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono-code mb-2 border border-white/15">
            <Check className="w-3 h-3 text-emerald-400" /> Dedicated Image Slot
          </span>
          <p className="text-white font-semibold text-sm max-w-xs">{screenshot.label}</p>
          <p className="text-white/60 text-xs mt-1 max-w-xs">{screenshot.caption}</p>

          <div className="mt-4 flex items-center gap-2">
            {onExpand && (
              <button
                type="button"
                onClick={onExpand}
                className="px-3 py-1.5 bg-white text-[#121212] text-xs font-semibold rounded hover:bg-[#E5E5E0] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" /> View Detail
              </button>
            )}
            <label className="px-3 py-1.5 bg-white/15 text-white text-xs font-medium rounded hover:bg-white/25 transition-colors flex items-center gap-1.5 cursor-pointer">
              <Upload className="w-3.5 h-3.5" /> Replace Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Caption bar */}
      <div className="p-3 bg-[#18181B] border-t border-[#27272A] flex items-center justify-between text-xs">
        <span className="text-[#D4D4D8] font-medium truncate">{screenshot.label}</span>
        <span className="text-[11px] text-[#71717A] font-mono-code uppercase">
          {variant.toUpperCase()} VIEW
        </span>
      </div>
    </div>
  );
};

// Meticulously designed vector mockups representing the exact UI of each project
const CraftedProjectMockup: React.FC<{
  projectId: string;
  type: string;
  isMobile: boolean;
}> = ({ projectId, type, isMobile }) => {
  if (projectId === 'master-blaster') {
    return <MasterBlasterMockup type={type} isMobile={isMobile} />;
  }
  if (projectId === 'trutex-automotive') {
    return <TrutexMockup type={type} isMobile={isMobile} />;
  }
  return <PointXMockup type={type} isMobile={isMobile} />;
};

/* MASTER BLASTER: DTC Modern Audio / Speaker Concept */
const MasterBlasterMockup: React.FC<{ type: string; isMobile: boolean }> = ({
  type,
  isMobile,
}) => {
  if (isMobile) {
    return (
      <div className="w-full h-full bg-[#0B0C0E] text-white p-4 flex flex-col justify-between select-none">
        <div>
          <div className="flex justify-between items-center pb-3 border-b border-white/10 text-[10px] font-mono-code">
            <span className="font-bold tracking-widest text-white">MASTER BLASTER</span>
            <span className="px-1.5 py-0.5 rounded bg-[#E14924] text-[9px]">CART (0)</span>
          </div>
          <div className="mt-4">
            <span className="text-[9px] uppercase tracking-wider text-[#E14924] font-mono-code font-bold">
              AUDIO PURITY
            </span>
            <h4 className="text-xl font-display font-extrabold tracking-tight mt-1 leading-tight text-white">
              SOUND
              <br />
              UNLEASHED.
            </h4>
            <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
              Precision-tuned 120W acoustic architecture with zero harmonic distortion.
            </p>
          </div>
        </div>

        {/* Graphic Speaker Core */}
        <div className="relative my-auto py-2 flex items-center justify-center">
          <div className="w-36 h-36 rounded-full border-4 border-zinc-800 bg-gradient-to-b from-zinc-800 to-zinc-950 flex items-center justify-center shadow-2xl relative">
            <div className="w-24 h-24 rounded-full border-2 border-zinc-700 bg-zinc-900 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#E14924] flex items-center justify-center text-[10px] font-bold shadow-lg">
                MB-01
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border border-[#E14924]/30 animate-pulse" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] font-mono-code text-zinc-400 mb-2">
            <span>LIMITED RUN</span>
            <span className="text-white font-bold">$349 USD</span>
          </div>
          <button className="w-full py-2.5 bg-[#E14924] text-white text-xs font-bold uppercase tracking-wider rounded">
            PRE-ORDER NOW
          </button>
        </div>
      </div>
    );
  }

  if (type === 'desktop') {
    return (
      <div className="w-full h-full bg-[#0A0B0D] text-white p-6 flex flex-col justify-between select-none">
        <div className="flex justify-between items-center text-xs pb-3 border-b border-white/10 font-mono-code">
          <span className="font-bold tracking-widest text-sm">MASTER BLASTER // ENGINEERING</span>
          <div className="flex gap-4 text-zinc-400 text-[11px]">
            <span className="text-[#E14924]">SPECIFICATIONS</span>
            <span>ACOUSTICS</span>
            <span>MATERIALS</span>
            <span>STORY</span>
          </div>
          <span className="text-[#E14924]">EDITION 01</span>
        </div>

        <div className="grid grid-cols-12 gap-6 my-auto items-center">
          <div className="col-span-5">
            <span className="text-xs font-mono-code text-[#E14924] uppercase tracking-widest">
              Acoustic Architecture
            </span>
            <h3 className="text-2xl font-display font-extrabold mt-1 text-white leading-tight">
              Bespoke Drivers.
              <br />
              Titanium Enclosure.
            </h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Every curve calibrated in anechoic chambers to reproduce every frequency with studio fidelity.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] font-mono-code">
              <div className="p-2.5 bg-zinc-900/90 border border-zinc-800 rounded">
                <span className="text-zinc-500 block text-[9px]">OUTPUT</span>
                <span className="text-white font-bold text-sm">124 dB SPL</span>
              </div>
              <div className="p-2.5 bg-zinc-900/90 border border-zinc-800 rounded">
                <span className="text-zinc-500 block text-[9px]">BATTERY</span>
                <span className="text-white font-bold text-sm">38 HOURS</span>
              </div>
            </div>
          </div>

          <div className="col-span-7 flex justify-center items-center">
            {/* Exploded Device Showcase */}
            <div className="w-full h-44 rounded-lg bg-zinc-900/60 border border-zinc-800 p-4 flex items-center justify-between relative overflow-hidden">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-zinc-500 font-mono-code">01. CNC CHASSIS</span>
                <span className="text-[10px] text-zinc-500 font-mono-code">02. DUAL WOOFERS</span>
                <span className="text-[10px] text-[#E14924] font-mono-code font-bold">03. CLASS-D AMP</span>
                <span className="text-[10px] text-zinc-500 font-mono-code">04. ROTARY CONTROL</span>
              </div>
              <div className="w-36 h-36 rounded-full border-2 border-dashed border-zinc-700 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#E14924] to-zinc-900 flex items-center justify-center text-xs font-mono-code text-white font-bold shadow-xl">
                  120W
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono-code text-zinc-400 block">FREQUENCY</span>
                <span className="text-sm font-bold text-white font-mono-code">24Hz – 28kHz</span>
                <span className="text-[10px] text-[#E14924] mt-1 block">±0.5dB VARIANCE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-white/10 text-xs font-mono-code text-zinc-400">
          <span>PORTFOLIO CONCEPT // INDEPENDENT DESIGN</span>
          <span className="text-white font-bold hover:text-[#E14924] transition-colors cursor-pointer">
            EXPLORE INTERACTION FLOW →
          </span>
        </div>
      </div>
    );
  }

  // Hero layout
  return (
    <div className="w-full h-full bg-[#0C0D10] text-white p-6 sm:p-8 flex flex-col justify-between select-none">
      <div className="flex justify-between items-center text-xs pb-3 border-b border-white/10">
        <span className="font-display font-bold tracking-widest text-sm text-white">MASTER BLASTER</span>
        <div className="hidden sm:flex gap-6 text-xs text-zinc-400 font-mono-code">
          <span className="text-white">PRODUCTS</span>
          <span>ACOUSTICS</span>
          <span>ABOUT</span>
        </div>
        <button className="px-3 py-1 bg-white text-black font-bold text-xs rounded hover:bg-zinc-200 font-mono-code">
          PRE-ORDER
        </button>
      </div>

      <div className="my-auto py-2">
        <span className="inline-block px-2.5 py-1 rounded bg-[#E14924]/20 border border-[#E14924]/40 text-[#E14924] text-[10px] font-mono-code uppercase tracking-wider mb-3">
          PORTFOLIO WEBSITE CONCEPT
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.05] text-white">
          SOUND BUILT
          <br />
          FOR IMPACT.
        </h2>
        <p className="text-sm text-zinc-400 max-w-md mt-3 font-sans leading-relaxed">
          A high-conversion digital flagship crafted around visceral acoustic performance and minimal DTC storytelling.
        </p>

        <div className="mt-5 flex items-center gap-4">
          <div className="px-4 py-2 bg-[#E14924] text-white text-xs font-bold uppercase tracking-wider rounded">
            EXPERIENCE LIVE CONCEPT
          </div>
          <span className="text-xs font-mono-code text-zinc-400">
            AUDIO LABS // 2025
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-white/10 text-[11px] font-mono-code text-zinc-500">
        <span>01 / 03 SELECTED PROJECTS</span>
        <span className="text-zinc-400">UX / UI / DTC STORYTELLING</span>
      </div>
    </div>
  );
};

/* TRUTEX AUTOMOTIVE: High Performance Ecommerce */
const TrutexMockup: React.FC<{ type: string; isMobile: boolean }> = ({
  type,
  isMobile,
}) => {
  if (isMobile) {
    return (
      <div className="w-full h-full bg-[#121316] text-white p-4 flex flex-col justify-between select-none">
        <div>
          <div className="flex justify-between items-center pb-3 border-b border-zinc-800 text-[10px] font-mono-code">
            <span className="font-extrabold tracking-wider text-white">TRUTEX AUTO</span>
            <span className="text-blue-400">MENU</span>
          </div>
          <div className="mt-4">
            <span className="text-[9px] uppercase tracking-wider text-blue-400 font-mono-code">
              CUSTOM CARBON WHEELS
            </span>
            <h4 className="text-lg font-display font-extrabold tracking-tight mt-1 text-white leading-tight">
              PRECISION GRIP.
              <br />
              TRACK READY.
            </h4>
          </div>
        </div>

        <div className="my-auto py-2 text-center">
          <div className="w-36 h-36 mx-auto rounded-full border-4 border-zinc-700 bg-zinc-900 flex items-center justify-center relative shadow-xl">
            <div className="w-24 h-24 rounded-full border border-zinc-600 bg-[#1A1C20] flex items-center justify-center">
              <span className="text-[10px] font-mono-code font-bold text-zinc-300">TRUTEX</span>
            </div>
            <div className="absolute top-2 w-8 h-1 bg-red-500 rounded" />
          </div>
          <span className="text-[10px] font-mono-code text-zinc-400 mt-2 block">
            GEN 4 CARBON FIBER STEERING WHEEL
          </span>
        </div>

        <div>
          <div className="flex justify-between text-[11px] font-mono-code text-zinc-300 mb-2">
            <span>FIT: BMW M3 / M4</span>
            <span className="font-bold text-white">$899</span>
          </div>
          <button className="w-full py-2.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded">
            CONFIGURE & BUY
          </button>
        </div>
      </div>
    );
  }

  if (type === 'product') {
    return (
      <div className="w-full h-full bg-[#101216] text-white p-6 flex flex-col justify-between select-none">
        <div className="flex justify-between items-center text-xs pb-3 border-b border-zinc-800 font-mono-code">
          <span className="font-bold tracking-widest text-sm">TRUTEX // PRODUCT CUSTOMIZER</span>
          <span className="text-blue-400">STATUS: LIVE E-COMMERCE</span>
        </div>

        <div className="grid grid-cols-12 gap-6 my-auto items-center">
          <div className="col-span-6">
            <span className="text-xs font-mono-code text-blue-400 uppercase tracking-wider">
              Motorsport Hardware
            </span>
            <h3 className="text-2xl font-display font-extrabold text-white mt-1">
              Custom Carbon Steering Wheel
            </h3>
            <p className="text-xs text-zinc-400 mt-2">
              Engineered with 3K twill carbon fiber, perforated Italian leather, and optional LED shift lights.
            </p>

            <div className="mt-4 flex flex-col gap-2 text-xs font-mono-code">
              <div className="flex justify-between p-2 bg-zinc-900 border border-zinc-800 rounded">
                <span className="text-zinc-400">LEATHER:</span>
                <span className="text-white font-bold">ALCANTARA RACING</span>
              </div>
              <div className="flex justify-between p-2 bg-zinc-900 border border-zinc-800 rounded">
                <span className="text-zinc-400">STITCHING:</span>
                <span className="text-blue-400 font-bold">BMW M-STRIPE</span>
              </div>
            </div>
          </div>

          <div className="col-span-6 flex flex-col items-center justify-center p-4 bg-zinc-900/70 border border-zinc-800 rounded-lg">
            <div className="w-32 h-32 rounded-full border-4 border-zinc-600 bg-zinc-950 flex items-center justify-center relative">
              <div className="w-16 h-16 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-zinc-400">
                TRUTEX
              </div>
            </div>
            <div className="mt-3 text-center">
              <span className="text-sm font-bold text-white font-mono-code">$1,049.00 USD</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">IN STOCK // READY TO SHIP</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-zinc-800 text-xs font-mono-code text-zinc-400">
          <span>REAL BRAND STOREFRONT</span>
          <span className="text-blue-400 font-bold">VISIT TRUTEXAUTO.COM →</span>
        </div>
      </div>
    );
  }

  // Homepage
  return (
    <div className="w-full h-full bg-[#0F1014] text-white p-6 sm:p-8 flex flex-col justify-between select-none">
      <div className="flex justify-between items-center text-xs pb-3 border-b border-zinc-800">
        <span className="font-display font-extrabold tracking-widest text-sm text-white">TRUTEX AUTOMOTIVE</span>
        <div className="hidden sm:flex gap-6 text-xs text-zinc-400 font-mono-code">
          <span className="text-white">STEERING WHEELS</span>
          <span>ACCESSORIES</span>
          <span>FITMENT GUIDE</span>
        </div>
        <button className="px-3 py-1 bg-blue-600 text-white font-bold text-xs rounded hover:bg-blue-500 font-mono-code">
          SHOP STORE
        </button>
      </div>

      <div className="my-auto py-2">
        <span className="inline-block px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-mono-code uppercase tracking-wider mb-3">
          AUTOMOTIVE E-COMMERCE
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.05] text-white">
          RACE-BRED
          <br />
          INTERIORS.
        </h2>
        <p className="text-sm text-zinc-400 max-w-md mt-3 font-sans leading-relaxed">
          A structured high-ticket automotive retail store engineered to showcase custom steering wheels and performance cabin upgrades.
        </p>

        <div className="mt-5 flex items-center gap-4">
          <div className="px-4 py-2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded">
            VISIT LIVE STORE
          </div>
          <span className="text-xs font-mono-code text-zinc-400">
            TRUTEXAUTO.COM
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-zinc-800 text-[11px] font-mono-code text-zinc-500">
        <span>02 / 03 SELECTED PROJECTS</span>
        <span className="text-zinc-400">COMMERCE / PRODUCT PRESENTATION</span>
      </div>
    </div>
  );
};

/* POINT X AÇAÍ: Local Food & Beverage */
const PointXMockup: React.FC<{ type: string; isMobile: boolean }> = ({
  type,
  isMobile,
}) => {
  if (isMobile) {
    return (
      <div className="w-full h-full bg-[#180D28] text-white p-4 flex flex-col justify-between select-none">
        <div>
          <div className="flex justify-between items-center pb-3 border-b border-purple-900/50 text-[10px] font-mono-code">
            <span className="font-extrabold tracking-wider text-purple-200">POINT X AÇAÍ</span>
            <span className="px-1.5 py-0.5 rounded bg-amber-400 text-[#180D28] font-bold text-[9px]">
              OPEN NOW
            </span>
          </div>
          <div className="mt-4">
            <span className="text-[9px] uppercase tracking-wider text-amber-300 font-mono-code font-bold">
              FRESH & ORGANIC
            </span>
            <h4 className="text-xl font-display font-extrabold tracking-tight mt-1 text-white leading-tight">
              ENERGY FOR
              <br />
              YOUR DAY.
            </h4>
          </div>
        </div>

        <div className="my-auto py-2 text-center">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-purple-800 to-amber-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-[#24133A] flex flex-col items-center justify-center p-2 text-center">
              <span className="text-lg">🍇 🍌 🥥</span>
              <span className="text-[10px] font-bold text-amber-300 mt-1">SIGNATURE BOWL</span>
            </div>
          </div>
          <span className="text-[11px] text-purple-200 font-medium mt-2 block">
            Pure Amazonian Açaí with Banana & Granola
          </span>
        </div>

        <div>
          <div className="flex justify-between text-[10px] font-mono-code text-purple-200 mb-2">
            <span>LOCATION: DOWNTOWN</span>
            <span className="text-amber-300 font-bold">ORDER ONLINE</span>
          </div>
          <button className="w-full py-2.5 bg-amber-400 text-[#180D28] text-xs font-bold uppercase tracking-wider rounded">
            VIEW MENU & PICKUP
          </button>
        </div>
      </div>
    );
  }

  if (type === 'menu') {
    return (
      <div className="w-full h-full bg-[#150B24] text-white p-6 flex flex-col justify-between select-none">
        <div className="flex justify-between items-center text-xs pb-3 border-b border-purple-900/40 font-mono-code">
          <span className="font-bold tracking-widest text-sm text-purple-200">POINT X // APPETITE & MENU</span>
          <span className="text-amber-300">100% ORGANIC CERTIFIED</span>
        </div>

        <div className="grid grid-cols-3 gap-3 my-auto">
          <div className="p-3 bg-purple-950/60 border border-purple-900/50 rounded-lg">
            <span className="text-xl block mb-1">🥣</span>
            <h5 className="font-bold text-xs text-white">Classic Amazonia</h5>
            <p className="text-[10px] text-purple-300 mt-1">Organic açaí, banana, guarana syrup, artisanal crunchy granola.</p>
            <span className="text-amber-300 font-mono-code text-xs font-bold block mt-2">$8.50</span>
          </div>
          <div className="p-3 bg-purple-950/60 border border-purple-900/50 rounded-lg">
            <span className="text-xl block mb-1">🍓</span>
            <h5 className="font-bold text-xs text-white">Berry Paradise</h5>
            <p className="text-[10px] text-purple-300 mt-1">Strawberries, blueberries, coconut flakes, chia seeds, raw honey.</p>
            <span className="text-amber-300 font-mono-code text-xs font-bold block mt-2">$9.25</span>
          </div>
          <div className="p-3 bg-purple-950/60 border border-purple-900/50 rounded-lg">
            <span className="text-xl block mb-1">🥜</span>
            <h5 className="font-bold text-xs text-white">Protein Dynamo</h5>
            <p className="text-[10px] text-purple-300 mt-1">Peanut butter drizzle, hemp hearts, sliced banana, raw cocoa nibs.</p>
            <span className="text-amber-300 font-mono-code text-xs font-bold block mt-2">$10.00</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-purple-900/40 text-xs font-mono-code text-purple-300">
          <span>LOCAL STOREFRONT WEBSITE</span>
          <span className="text-amber-300 font-bold">POINTXACAI.VERCEL.APP →</span>
        </div>
      </div>
    );
  }

  // Homepage
  return (
    <div className="w-full h-full bg-[#170C28] text-white p-6 sm:p-8 flex flex-col justify-between select-none">
      <div className="flex justify-between items-center text-xs pb-3 border-b border-purple-900/40">
        <span className="font-display font-extrabold tracking-widest text-sm text-purple-200">POINT X AÇAÍ</span>
        <div className="hidden sm:flex gap-6 text-xs text-purple-300 font-mono-code">
          <span className="text-white">OUR BOWL</span>
          <span>LOCATIONS</span>
          <span>NUTRITION</span>
        </div>
        <button className="px-3 py-1 bg-amber-400 text-[#180D28] font-bold text-xs rounded font-mono-code">
          FIND STORE
        </button>
      </div>

      <div className="my-auto py-2">
        <span className="inline-block px-2.5 py-1 rounded bg-purple-500/20 border border-purple-500/40 text-amber-300 text-[10px] font-mono-code uppercase tracking-wider mb-3">
          LOCAL FOOD & BEVERAGE
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-[1.05] text-white">
          FRESH AÇAÍ.
          <br />
          REAL ENERGY.
        </h2>
        <p className="text-sm text-purple-200 max-w-md mt-3 font-sans leading-relaxed">
          A vibrant brand presence created for a local açaí destination, centered on mouth-watering visual appetite appeal and effortless visit planning.
        </p>

        <div className="mt-5 flex items-center gap-4">
          <div className="px-4 py-2 bg-amber-400 text-[#180D28] text-xs font-bold uppercase tracking-wider rounded">
            VISIT LIVE WEBSITE
          </div>
          <span className="text-xs font-mono-code text-purple-300">
            POINTXACAI.VERCEL.APP
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-purple-900/40 text-[11px] font-mono-code text-purple-400">
        <span>03 / 03 SELECTED PROJECTS</span>
        <span className="text-purple-300">BRAND IDENTITY & LOCAL BUSINESS</span>
      </div>
    </div>
  );
};
