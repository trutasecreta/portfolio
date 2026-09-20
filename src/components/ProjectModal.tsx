import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowUpRight, CheckCircle2, Monitor, Smartphone, Info } from 'lucide-react';
import { Project } from '../types';
import { ProjectScreenshotSlot } from './ProjectScreenshotSlot';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md transition-opacity duration-300 overflow-y-auto"
    >
      <div
        className="relative w-full max-w-6xl my-auto bg-[#F6F6F3] rounded-2xl shadow-2xl border border-[#D5D5CD] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#ECECE7] border-b border-[#DCDCD4] z-10 shrink-0">
          <div className="flex items-center gap-3 font-mono-code text-xs">
            <span className="font-bold text-[#121212]">{project.number}</span>
            <span className="text-[#6B6B67]">/</span>
            <span className="px-2 py-0.5 rounded bg-white text-[#121212] font-semibold">
              {project.label}
            </span>
            <span className="hidden sm:inline text-[#6B6B67]">{project.category}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-[#121212] text-white text-xs font-semibold rounded hover:bg-[#2A2A2A] transition-colors flex items-center gap-1.5"
            >
              <span>{project.linkText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project modal"
              className="p-1.5 rounded-lg bg-white/80 hover:bg-white text-[#121212] transition-colors border border-[#D0D0C8] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10">
          {/* Header Title & Intro */}
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#121212]">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#6B6B67] mt-2 max-w-3xl font-sans">
              {project.description}
            </p>

            {project.caseStudyNote && (
              <div className="mt-4 p-3.5 bg-[#EAEAE2] rounded-lg border border-[#D5D5CD] flex items-start gap-2.5 text-xs text-[#52524E]">
                <Info className="w-4 h-4 text-[#121212] shrink-0 mt-0.5" />
                <span>{project.caseStudyNote}</span>
              </div>
            )}
          </div>

          {/* Section 1: Hero Viewport */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono-code">
              <span className="font-bold text-[#121212]">01. HERO SECTION &amp; VISUAL HOOK</span>
              <span className="text-[#6B6B67]">ASPECT RATIO 16:10</span>
            </div>
            <ProjectScreenshotSlot
              projectId={project.id}
              projectNumber={project.number}
              screenshot={project.screenshots.hero}
              variant="hero"
            />
          </div>

          {/* Section 2: Desktop Layout & Product Specs */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono-code">
              <span className="font-bold text-[#121212]">02. DESKTOP EXPERIENCE &amp; UX ARCHITECTURE</span>
              <span className="text-[#6B6B67]">STRUCTURED CONTENT FLOW</span>
            </div>
            <ProjectScreenshotSlot
              projectId={project.id}
              projectNumber={project.number}
              screenshot={project.screenshots.desktop}
              variant="desktop"
            />
          </div>

          {/* Section 3: Mobile Experience */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono-code">
              <span className="font-bold text-[#121212]">03. INTENTIONAL MOBILE RESPONSIVENESS</span>
              <span className="text-[#6B6B67]">THUMB-OPTIMIZED DESIGN</span>
            </div>
            <div className="py-6 bg-[#EBEBE5] rounded-xl flex justify-center border border-[#DCDCD4]">
              <ProjectScreenshotSlot
                projectId={project.id}
                projectNumber={project.number}
                screenshot={project.screenshots.mobile}
                variant="mobile"
              />
            </div>
          </div>

          {/* Highlights & Design Rationale */}
          <div className="p-6 bg-white rounded-xl border border-[#DFDFD7]">
            <h4 className="text-sm font-bold font-mono-code text-[#121212] uppercase tracking-wider mb-4">
              Key Design Rationales &amp; Conversion Decisions
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#52524E]">
              {project.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#121212] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:px-8 bg-[#ECECE7] border-t border-[#DCDCD4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-code">
          <span className="text-[#6B6B67]">
            DESIGNED BY MARTIM // {project.year}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#121212] hover:underline flex items-center gap-1"
            >
              <span>{project.linkText}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded bg-[#121212] text-white font-medium hover:bg-[#2A2A2A] cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
