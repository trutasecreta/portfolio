import React, { useState } from 'react';
import { Project } from './types';
import { PROJECTS, PERSONAL_INFO } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Approach } from './components/Approach';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F6F3] text-[#121212] selection:bg-[#121212] selection:text-[#F6F6F3]">
      {/* Sticky Minimal Navigation */}
      <Navbar onContactClick={() => handleScrollTo('contact')} />

      {/* Main Content Viewports */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onWorkClick={() => handleScrollTo('work')}
          onContactClick={() => handleScrollTo('contact')}
        />

        {/* Short Personal Introduction */}
        <Intro />

        {/* Selected Work: Editorial Large-Scale Showcases */}
        <Projects
          projects={PROJECTS}
          onOpenModal={(project) => setSelectedProject(project)}
        />

        {/* A Little About Me + Core Capabilities */}
        <About />

        {/* My Approach (3-step process) */}
        <Approach />

        {/* Why Work With Me (3 principles) */}
        <Philosophy />

        {/* High-Impact Contact Section */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer onContactClick={() => handleScrollTo('contact')} />

      {/* Case-Study / Full Screenshot Inspection Lightbox */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
