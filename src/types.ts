export interface ProjectScreenshot {
  id: string;
  label: string;
  type: 'hero' | 'desktop' | 'mobile' | 'product' | 'menu';
  caption: string;
  aspectRatio: string;
  defaultImage?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  label: string;
  description: string;
  caseStudyNote?: string;
  year: string;
  isConcept?: boolean;
  link: string;
  linkText: string;
  primaryColor: string;
  accentColor: string;
  screenshots: {
    hero: ProjectScreenshot;
    desktop: ProjectScreenshot;
    mobile: ProjectScreenshot;
  };
  highlights: string[];
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface PhilosophyPrinciple {
  title: string;
  description: string;
}
