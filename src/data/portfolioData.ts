import { Project, ApproachStep, PhilosophyPrinciple } from '../types';

export const PERSONAL_INFO = {
  name: 'MARTIM',
  title: 'WEB DESIGNER',
  positioning: 'Modern websites built around design, experience and conversion.',
  email: 'trutasecreta@gmail.com', // user provided email, customizable
  displayEmail: 'martim@designer.com',
  availableForWork: true,
  year: '2026',
};

export const PROJECTS: Project[] = [
  {
    id: 'master-blaster',
    number: '01',
    title: 'MASTER BLASTER',
    subtitle: 'High-Impact DTC Product Experience',
    category: 'E-commerce / Product Website / Concept',
    label: 'WEBSITE CONCEPT',
    description:
      'A premium website concept created for Master Blaster, focused on product storytelling, UX/UI and conversion.',
    caseStudyNote:
      'This is an independent design concept created for portfolio purposes.',
    year: '2025',
    isConcept: true,
    link: 'https://master-blaster.vercel.app',
    linkText: 'OPEN LIVE WEBSITE',
    primaryColor: '#0E0F12',
    accentColor: '#E14924',
    highlights: [
      'Bold product storytelling with layered 3D perspectives',
      'High-velocity conversion path with minimal purchase friction',
      'Tactile microinteractions optimized for high-end consumer hardware',
    ],
    screenshots: {
      hero: {
        id: 'mb-hero',
        label: 'Hero Section',
        type: 'hero',
        caption: 'Large-scale typographic opening with immersive product positioning and instant CTA access.',
        aspectRatio: '16/10',
      },
      desktop: {
        id: 'mb-desktop',
        label: 'Desktop Full Experience',
        type: 'desktop',
        caption: 'Structured product breakdown highlighting engineering specs, materials, and acoustic fidelity.',
        aspectRatio: '16/10',
      },
      mobile: {
        id: 'mb-mobile',
        label: 'Mobile Viewport',
        type: 'mobile',
        caption: 'Thumb-driven shopping architecture with sticky buy actions and fast-loading media.',
        aspectRatio: '9/19',
      },
    },
  },
  {
    id: 'trutex-automotive',
    number: '02',
    title: 'TRUTEX AUTOMOTIVE',
    subtitle: 'Precision Automotive E-Commerce',
    category: 'E-commerce / Automotive',
    label: 'E-COMMERCE',
    description:
      'A complete ecommerce experience for TRUTEX Automotive, focused on premium automotive products, product presentation and online sales.',
    caseStudyNote:
      'An ecommerce website built for an automotive brand selling custom steering wheels and automotive accessories.',
    year: '2025',
    isConcept: false,
    link: 'https://trutexauto.com',
    linkText: 'VISIT WEBSITE',
    primaryColor: '#141517',
    accentColor: '#3B82F6',
    highlights: [
      'High-resolution custom steering wheel visualizer and fitment guides',
      'Industrial dark aesthetic tailored to automotive enthusiasts',
      'Faceted vehicle filtering and real-time inventory synchronization',
    ],
    screenshots: {
      hero: {
        id: 'trutex-homepage',
        label: 'Homepage Presentation',
        type: 'hero',
        caption: 'High-contrast automotive storefront with direct catalog navigation and vehicle selector.',
        aspectRatio: '16/10',
      },
      desktop: {
        id: 'trutex-product',
        label: 'Product Detail & Specs',
        type: 'product',
        caption: 'Comprehensive material customizer with carbon weave and stitching options.',
        aspectRatio: '16/10',
      },
      mobile: {
        id: 'trutex-mobile',
        label: 'Mobile Commerce Flow',
        type: 'mobile',
        caption: 'Optimized touch navigation with swift vehicle selection and one-click checkout.',
        aspectRatio: '9/19',
      },
    },
  },
  {
    id: 'point-x-acai',
    number: '03',
    title: 'POINT X AÇAÍ',
    subtitle: 'Vibrant Food & Beverage Digital Presence',
    category: 'Business Website / Food & Beverage',
    label: 'LOCAL BUSINESS WEBSITE',
    description:
      'A modern digital experience for Point X Açaí, designed around brand presentation, local business information and customer experience.',
    caseStudyNote:
      'A modern website concept for a local açaí business, focused on clear information, visual appetite appeal and a simple customer journey.',
    year: '2024',
    isConcept: false,
    link: 'https://pointxacai.vercel.app/',
    linkText: 'VISIT WEBSITE',
    primaryColor: '#1A0E2E',
    accentColor: '#9333EA',
    highlights: [
      'Appetite-driven visual storytelling with organic texture accents',
      'Instant location finder, operating hours, and live delivery options',
      'Interactive bowl builder and seasonal specials menu spotlight',
    ],
    screenshots: {
      hero: {
        id: 'pointx-home',
        label: 'Homepage & Brand Atmosphere',
        type: 'hero',
        caption: 'Warm, appetizing entrance presenting fresh bowls and local storefront vibes.',
        aspectRatio: '16/10',
      },
      desktop: {
        id: 'pointx-menu',
        label: 'Menu & Content Layout',
        type: 'menu',
        caption: 'Clear nutritional breakdown, customizable toppings, and dietary highlights.',
        aspectRatio: '16/10',
      },
      mobile: {
        id: 'pointx-mobile',
        label: 'Mobile Ordering Experience',
        type: 'mobile',
        caption: 'Streamlined local navigation for quick on-the-go discovery and directions.',
        aspectRatio: '9/19',
      },
    },
  },
];

export const CAPABILITIES = [
  'WEB DESIGN',
  'UX/UI',
  'E-COMMERCE',
  'RESPONSIVE DESIGN',
  'BRANDING',
  'INTERACTION DESIGN',
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand the brand, product and audience.',
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'Build the visual system, UX and interactions.',
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'Turn the design into a responsive, functional website.',
  },
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    title: 'DESIGN WITH PURPOSE',
    description: 'Every section should have a reason to exist.',
  },
  {
    title: 'BUILT FOR THE USER',
    description: 'Clear navigation and intuitive experiences.',
  },
  {
    title: 'MADE TO CONVERT',
    description: 'Beautiful design should still guide users toward action.',
  },
];
