import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Eye } from 'lucide-react';
import { Project } from '../types';
import { ProjectScreenshotSlot } from './ProjectScreenshotSlot';

interface Props {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCardPointX: React.FC<Props> = ({ project, onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'homepage' | 'menu' | 'mobile'>('all');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <article
      id="project-point-x"
      className="group relative border border-[#DCDCD5] bg-[#F4F1EA] rounded-2xl p-6 sm:p-10 lg:p-14 transition-all duration-500 hover:border-[#121212]/40 mb-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-[#D8D8D0] gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-3 font-mono-code text-xs text-[#6B6B67] mb-3">
            <span className="font-bold text-[#121212] tracking-wider text-sm">
              {project.number} —
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-purple-700/10 text-purple-800 font-semibold tracking-wider">
              {project.label}
            </span>
            <span>/</span>
            <span>{project.category}</span>
          </div>

          <h3
            className={`text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#121212] transition-transform duration-500 ${
              isHovered ? 'translate-x-2' : ''
            }`}
          >
            {project.title}
          </h3>
          <p className="font-mono-code text-xs sm:text-sm text-purple-700 mt-2 font-medium tracking-wide">
            {project.subtitle}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="px-5 py-3 rounded-lg bg-[#121212] text-[#F6F6F3] text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#2A2A2A] transition-all flex items-center gap-2 cursor-pointer shadow-sm group/btn"
          >
            <span>VIEW CASE STUDY</span>
            <Eye className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
          </button>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-[#121212] bg-white text-[#121212] text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#121212] hover:text-white transition-all flex items-center gap-2"
          >
            <span>{project.linkText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Food & Beverage Lifestyle Context */}
      <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 border-b border-[#D8D8D0] items-baseline">
        <div className="lg:col-span-8">
          <p className="text-base sm:text-lg text-[#2B2B28] leading-relaxed font-sans font-medium">
            “A modern website concept for a local açaí business, focused on clear information, visual appetite appeal and a simple customer journey.”
          </p>
          <p className="text-sm text-[#6B6B67] mt-2 font-sans">
            {project.description}
          </p>
        </div>

        <div className="lg:col-span-4 bg-[#EAE5DA] p-4 rounded-lg border border-[#D5D0C5]">
          <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#121212] block mb-1">
            LOCAL BRAND IMPACT
          </span>
          <p className="text-xs text-[#52524E] leading-relaxed">
            Engineered to convert passersby and mobile searchers into loyal in-store visitors with immediate hours, menu, and directions.
          </p>
          <div className="mt-3 pt-3 border-t border-[#D0CBC0] flex items-center justify-between text-[11px] font-mono-code">
            <span className="text-[#6B6B67]">LIVE URL:</span>
            <a
              href="https://pointxacai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-800 font-bold hover:underline truncate max-w-[180px]"
            >
              pointxacai.vercel.app ↗
            </a>
          </div>
        </div>
      </div>

      {/* Viewport display controls */}
      <div className="flex items-center justify-between pt-6 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono-code">
          <span className="text-[#6B6B67] hidden sm:inline">VIEWPORT DISPLAY:</span>
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === 'all'
                ? 'bg-[#121212] text-white font-semibold'
                : 'bg-white/60 text-[#52524E] hover:bg-white'
            }`}
          >
            All Perspectives (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('homepage')}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === 'homepage'
                ? 'bg-[#121212] text-white font-semibold'
                : 'bg-white/60 text-[#52524E] hover:bg-white'
            }`}
          >
            Homepage
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('menu')}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === 'menu'
                ? 'bg-[#121212] text-white font-semibold'
                : 'bg-white/60 text-[#52524E] hover:bg-white'
            }`}
          >
            Menu &amp; Content
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('mobile')}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === 'mobile'
                ? 'bg-[#121212] text-white font-semibold'
                : 'bg-white/60 text-[#52524E] hover:bg-white'
            }`}
          >
            Mobile Discover
          </button>
        </div>

        <span className="text-[11px] font-mono-code text-[#6B6B67] hidden md:inline">
          LIFESTYLE FOOD &amp; BEVERAGE LAYOUT
        </span>
      </div>

      {/* Lifestyle & Appetite Layout */}
      {activeTab === 'all' && (
        <div className="space-y-8 mt-2">
          {/* Main Brand Atmosphere */}
          <div>
            <ProjectScreenshotSlot
              projectId={project.id}
              projectNumber={project.number}
              screenshot={project.screenshots.hero}
              variant="hero"
              onExpand={() => onOpenModal(project)}
            />
          </div>

          {/* Menu breakdown & Mobile Discover */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <ProjectScreenshotSlot
                projectId={project.id}
                projectNumber={project.number}
                screenshot={project.screenshots.desktop}
                variant="desktop"
                onExpand={() => onOpenModal(project)}
              />
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <ProjectScreenshotSlot
                projectId={project.id}
                projectNumber={project.number}
                screenshot={project.screenshots.mobile}
                variant="mobile"
                onExpand={() => onOpenModal(project)}
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'homepage' && (
        <div className="mt-2">
          <ProjectScreenshotSlot
            projectId={project.id}
            projectNumber={project.number}
            screenshot={project.screenshots.hero}
            variant="hero"
            onExpand={() => onOpenModal(project)}
          />
        </div>
      )}

      {activeTab === 'menu' && (
        <div className="mt-2">
          <ProjectScreenshotSlot
            projectId={project.id}
            projectNumber={project.number}
            screenshot={project.screenshots.desktop}
            variant="desktop"
            onExpand={() => onOpenModal(project)}
          />
        </div>
      )}

      {activeTab === 'mobile' && (
        <div className="mt-2 flex justify-center py-6">
          <ProjectScreenshotSlot
            projectId={project.id}
            projectNumber={project.number}
            screenshot={project.screenshots.mobile}
            variant="mobile"
            onExpand={() => onOpenModal(project)}
          />
        </div>
      )}

      {/* Footnote */}
      <div className="mt-8 pt-6 border-t border-[#DCDCD5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono-code text-[#6B6B67]">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-[#121212] font-semibold">LOCAL UX HIGHLIGHTS:</span>
          {project.highlights.map((item, idx) => (
            <span key={idx} className="flex items-center gap-1">
              <span className="text-purple-700">✦</span> {item}
            </span>
          ))}
        </div>
        <a
          href="https://pointxacai.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#121212] font-bold underline hover:text-purple-700 self-start sm:self-auto"
        >
          VISIT POINTXACAI.VERCEL.APP →
        </a>
      </div>
    </article>
  );
};
