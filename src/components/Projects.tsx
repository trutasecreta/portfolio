import React from 'react';
import { Project } from '../types';
import { ProjectCardMasterBlaster } from './ProjectCardMasterBlaster';
import { ProjectCardTrutex } from './ProjectCardTrutex';
import { ProjectCardPointX } from './ProjectCardPointX';

interface Props {
  projects: Project[];
  onOpenModal: (project: Project) => void;
}

export const Projects: React.FC<Props> = ({ projects, onOpenModal }) => {
  const masterBlaster = projects.find((p) => p.id === 'master-blaster') || projects[0];
  const trutex = projects.find((p) => p.id === 'trutex-automotive') || projects[1];
  const pointX = projects.find((p) => p.id === 'point-x-acai') || projects[2];

  return (
    <section id="work" className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-[#E2E2DC]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 sm:pb-16 border-b border-[#E2E2DC] gap-6">
        <div>
          <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#6B6B67] block mb-2">
            02 / PORTFOLIO
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#121212] uppercase">
            SELECTED WORK
          </h2>
        </div>
        <div className="max-w-md text-sm text-[#52524E] font-sans">
          <p>
            A deliberate selection of product experiences, e-commerce storefronts, and brand websites showcasing distinct design systems and strategic conversion paths.
          </p>
        </div>
      </div>

      {/* Editorial Projects Feed */}
      <div className="pt-12 sm:pt-16">
        {/* Project 01: Master Blaster - Large Immersive DTC Concept */}
        <ProjectCardMasterBlaster project={masterBlaster} onOpenModal={onOpenModal} />

        {/* Project 02: TRUTEX Automotive - Structured High-Ticket E-Commerce */}
        <ProjectCardTrutex project={trutex} onOpenModal={onOpenModal} />

        {/* Project 03: Point X Açaí - Vibrant Lifestyle & Local Food */}
        <ProjectCardPointX project={pointX} onOpenModal={onOpenModal} />
      </div>
    </section>
  );
};
