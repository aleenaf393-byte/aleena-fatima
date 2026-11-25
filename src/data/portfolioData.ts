export interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
  isEditablePlaceholder: boolean;
  accentGradient: string;
}

export type SkillCategory =
  | 'All'
  | 'Frontend Development'
  | 'WordPress Development'
  | 'Custom Coding'
  | 'Website Design';

export interface SkillItem {
  id: string;
  name: string;
  category: Exclude<SkillCategory, 'All'>;
  /** Editable percentage placeholder — replace with your own verified rating if desired */
  proficiency: number;
  description: string;
  accentColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  deliverables: string[];
  idealFor: string;
  accentBg: string;
  accentText: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  /** Replaceable live demo URL (leave '#' to launch built-in interactive demo preview) */
  liveUrl: string;
  /** Editable template note */
  isEditableExample: boolean;
  previewPalette: {
    bg: string;
    primary: string;
    accent: string;
    headline: string;
    subheadline: string;
    ctaText: string;
  };
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  accent: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const PROFILE = {
  name: 'Aleena',
  brandMark: 'Aleena',
  title: 'Website Developer & Frontend Developer',
  experienceYears: 3,
  phone: '+923299931362',
  whatsappNumber: '923299931362',
  email: 'aleenaf393@gmail.com',
  availability: 'Available for Projects',
  intro:
    'I am Aleena, a creative website developer with 3 years of experience building modern, responsive, visually appealing, and user-friendly websites. I specialize in HTML, CSS, JavaScript, and WordPress with Elementor. I also enjoy developing websites from scratch and creating custom-coded solutions that combine beautiful design with smooth functionality.',
  /** Replace with path to your hosted PDF resume, e.g. '/assets/Aleena-CV.pdf' */
  cvFileUrl: '#cv-preview',
  socials: [
    { label: 'GitHub', url: 'https://github.com/', note: 'Editable profile URL' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/', note: 'Editable profile URL' },
    { label: 'Dribbble', url: 'https://dribbble.com/', note: 'Editable profile URL' },
    { label: 'Instagram', url: 'https://www.instagram.com/', note: 'Editable profile URL' },
  ],
};

export const HERO_IMAGE = '/src/assets/images/hero_workspace_1795173175103.jpg';
export const ABOUT_IMAGE = '/src/assets/images/about_developer_1795173174113.jpg';

export const MARQUEE_ITEMS = [
  'HTML5',
  'CSS3',
  'JAVASCRIPT',
  'WORDPRESS',
  'ELEMENTOR',
  'CUSTOM CODING',
  'RESPONSIVE DESIGN',
];

export const STATS: StatItem[] = [
  {
    id: 'experience',
    target: 3,
    suffix: '+',
    label: 'Years Experience',
    sublabel: 'Frontend & WordPress development',
    isEditablePlaceholder: false,
    accentGradient: 'from-[#1C123B] to-[#131C38]',
  },
  {
    id: 'projects',
    target: 20,
    suffix: '+',
    label: 'Projects Built',
    sublabel: 'Editable milestone · Replace with verified count',
    isEditablePlaceholder: true,
    accentGradient: 'from-[#171236] to-[#23124A]',
  },
  {
    id: 'technologies',
    target: 10,
    suffix: '+',
    label: 'Technologies',
    sublabel: 'Editable stack · HTML, CSS, JS, WP & tools',
    isEditablePlaceholder: true,
    accentGradient: 'from-[#131C38] to-[#1A133D]',
  },
  {
    id: 'passion',
    target: 100,
    suffix: '%',
    label: 'Creative Passion',
    sublabel: 'Detail-focused, responsive craftsmanship',
    isEditablePlaceholder: false,
    accentGradient: 'from-[#1D113D] to-[#111936]',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  'All',
  'Frontend Development',
  'WordPress Development',
  'Custom Coding',
  'Website Design',
];

export const SKILLS: SkillItem[] = [
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Frontend Development',
    proficiency: 95,
    description: 'Clean semantic markup, accessible landmarks, and SEO-friendly structure.',
    accentColor: '#22D3EE',
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Frontend Development',
    proficiency: 92,
    description: 'Modern Grid, Flexbox, subtle depth, and smooth keyframe motion.',
    accentColor: '#3B82F6',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend Development',
    proficiency: 88,
    description: 'Interactive DOM logic, Intersection Observer animations, and form validation.',
    accentColor: '#A855F7',
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'WordPress Development',
    proficiency: 92,
    description: 'Custom themes, dynamic content workflows, plugins, and speed optimization.',
    accentColor: '#22D3EE',
  },
  {
    id: 'elementor',
    name: 'Elementor',
    category: 'WordPress Development',
    proficiency: 94,
    description: 'Pixel-accurate sections, reusable templates, and flexible grid systems.',
    accentColor: '#A855F7',
  },
  {
    id: 'elementor-pro',
    name: 'Elementor Pro',
    category: 'WordPress Development',
    proficiency: 90,
    description: 'Theme Builder headers/footers, dynamic tags, custom forms, and popups.',
    accentColor: '#3B82F6',
  },
  {
    id: 'custom-css',
    name: 'Custom CSS',
    category: 'Custom Coding',
    proficiency: 93,
    description: 'Bespoke styling overrides beyond default builders for unique brand polish.',
    accentColor: '#22D3EE',
  },
  {
    id: 'custom-js',
    name: 'Custom JavaScript',
    category: 'Custom Coding',
    proficiency: 86,
    description: 'Tailored micro-interactions, smooth UI state controls, and custom scripts.',
    accentColor: '#A855F7',
  },
  {
    id: 'responsive-design',
    name: 'Responsive Design',
    category: 'Website Design',
    proficiency: 95,
    description: 'Fluid layouts tested seamlessly across widescreen desktop, tablet, and mobile.',
    accentColor: '#3B82F6',
  },
  {
    id: 'website-dev',
    name: 'Website Development',
    category: 'Website Design',
    proficiency: 92,
    description: 'End-to-end builds from scratch, landing pages, and full site customization.',
    accentColor: '#22D3EE',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-web-dev',
    title: 'Custom Website Development',
    shortDescription:
      'Bespoke websites coded from scratch using clean HTML5, CSS3, and JavaScript tailored to your brand identity.',
    deliverables: [
      'Semantic HTML5 & modular CSS3 architecture',
      'Custom JavaScript animations & interactive UI',
      'Fast-loading, lightweight assets without bloat',
    ],
    idealFor: 'Portfolios, creative studios, and brands seeking a unique look.',
    accentBg: 'bg-[#22D3EE]/15',
    accentText: 'text-[#22D3EE]',
  },
  {
    id: 'wordpress-dev',
    title: 'WordPress Website Development',
    shortDescription:
      'Scalable, easy-to-manage WordPress websites engineered for reliability, clarity, and smooth content editing.',
    deliverables: [
      'Complete WordPress setup & clean architecture',
      'Easy backend editing for pages and blog posts',
      'Essential performance & mobile readiness checks',
    ],
    idealFor: 'Growing businesses, consultants, and content-driven brands.',
    accentBg: 'bg-[#A855F7]/20',
    accentText: 'text-[#C084FC]',
  },
  {
    id: 'elementor-design',
    title: 'Elementor Website Design',
    shortDescription:
      'High-craft Elementor and Elementor Pro layouts enhanced with custom CSS for refined typography and motion.',
    deliverables: [
      'Custom-styled Elementor Pro templates & Theme Builder',
      'Bespoke CSS polish beyond stock widget defaults',
      'Reusable global colors, fonts, and section blocks',
    ],
    idealFor: 'Teams wanting visual flexibility with designer-grade aesthetics.',
    accentBg: 'bg-[#3B82F6]/20',
    accentText: 'text-[#60A5FA]',
  },
  {
    id: 'responsive-design',
    title: 'Responsive Website Design',
    shortDescription:
      'Fluid interfaces crafted to feel effortless and legible on desktops, tablets, and mobile phones.',
    deliverables: [
      'Adaptive grids & mobile-friendly navigation menus',
      'Comfortable touch targets and readable typography',
      'Cross-viewport spacing & visual balance checks',
    ],
    idealFor: 'Any website needing polished consistency on every screen size.',
    accentBg: 'bg-[#22D3EE]/15',
    accentText: 'text-[#22D3EE]',
  },
  {
    id: 'landing-pages',
    title: 'Landing Page Development',
    shortDescription:
      'Focused, persuasive single-page experiences designed to highlight offers, launches, and clear user actions.',
    deliverables: [
      'High-impact hero layout with clear call-to-action flow',
      'Interactive FAQ, showcase, and inquiry sections',
      'Clean SEO metadata and fast first-screen load',
    ],
    idealFor: 'Product launches, campaigns, and service-based businesses.',
    accentBg: 'bg-[#A855F7]/20',
    accentText: 'text-[#C084FC]',
  },
  {
    id: 'redesign-customization',
    title: 'Website Redesign & Customization',
    shortDescription:
      'Refreshing outdated layouts, fixing responsiveness issues, and customizing existing sites with modern visual polish.',
    deliverables: [
      'Visual & structural UI refresh for modern 2026 standards',
      'Custom CSS & JavaScript feature enhancements',
      'Improved navigation clarity and mobile usability',
    ],
    idealFor: 'Existing WordPress or HTML websites ready for a modern upgrade.',
    accentBg: 'bg-[#3B82F6]/20',
    accentText: 'text-[#60A5FA]',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'fashion-clothing',
    title: 'Fashion & Clothing Website',
    category: 'E-Commerce Showcase · Editable Example',
    description:
      'An editorial fashion storefront concept featuring seasonal lookbooks, smooth category navigation, and responsive product grids.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    image: '/src/assets/images/project_fashion_1795173175655.jpg',
    liveUrl: '#',
    isEditableExample: true,
    previewPalette: {
      bg: '#FFFFFF',
      primary: '#1E103C',
      accent: '#4C1D95',
      headline: 'Seasonal Linen & Studio Silhouettes',
      subheadline: 'Minimalist lookbook layout with fluid product cards and clean editorial typography.',
      ctaText: 'Browse Collection',
    },
    highlights: [
      'Editorial hero banner with responsive lookbook grid',
      'Clean typography pairing & mobile-ready drawer menu',
      'Replaceable product cards, descriptions, and live link',
    ],
  },
  {
    id: 'jewelry-ecommerce',
    title: 'Jewelry E-Commerce Website',
    category: 'Boutique Store Concept · Editable Example',
    description:
      'A refined online jewelry showcase designed around crisp white surfaces, clean product cards, and mobile-first browsing.',
    technologies: ['WordPress', 'Elementor Pro', 'Custom CSS'],
    image: '/src/assets/images/project_jewelry_1795173174715.jpg',
    liveUrl: '#',
    isEditableExample: true,
    previewPalette: {
      bg: '#FFFFFF',
      primary: '#1E103C',
      accent: '#4C1D95',
      headline: 'Fine Everyday Gold & Pearl Pieces',
      subheadline: 'Clean gallery-inspired presentation built for clarity on desktop and tablet.',
      ctaText: 'View Pieces',
    },
    highlights: [
      'Custom Elementor Pro product showcase layout',
      'Fine-tuned spacing and custom CSS hover transitions',
      'Editable showcase template ready for live store URL',
    ],
  },
  {
    id: 'beauty-salon',
    title: 'Beauty & Salon Website',
    category: 'Wellness & Booking Concept · Editable Example',
    description:
      'A calm, welcoming salon & skincare website concept highlighting holistic treatments, pricing clarity, and appointment inquiry.',
    technologies: ['WordPress', 'Elementor', 'Responsive Design'],
    image: '/src/assets/images/project_beauty_1795173174540.jpg',
    liveUrl: '#',
    isEditableExample: true,
    previewPalette: {
      bg: '#FBF9FF',
      primary: '#1E103C',
      accent: '#5B21B6',
      headline: 'Serene Beauty & Holistic Rituals',
      subheadline: 'Crisp white surfaces and structured treatment menus designed for effortless booking.',
      ctaText: 'Explore Treatments',
    },
    highlights: [
      'Clean service menu layout with clear visual hierarchy',
      'High-contrast editorial palette for effortless legibility',
      'Replaceable booking link and service photography',
    ],
  },
  {
    id: 'education-consultancy',
    title: 'Education Consultancy Website',
    category: 'Academic Advisory Concept · Editable Example',
    description:
      'A structured student advisory platform built to simplify university admissions guidance, consultation booking, and program discovery.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Landing Page'],
    image: '/src/assets/images/project_education_1795173175428.jpg',
    liveUrl: '#',
    isEditableExample: true,
    previewPalette: {
      bg: '#FFFFFF',
      primary: '#1E103C',
      accent: '#4C1D95',
      headline: 'Clear Pathways to Global Universities',
      subheadline: 'Trustworthy academic layout with step-by-step admissions services and consultation CTA.',
      ctaText: 'Book Consultation',
    },
    highlights: [
      'Clear 4-pillar service breakdown for prospective students',
      'Accessible contrast and structured consultation form flow',
      'Editable template ready for your real consultancy links',
    ],
  },
  {
    id: 'business-corporate',
    title: 'Business Corporate Website',
    category: 'Corporate Advisory Concept · Editable Example',
    description:
      'A crisp corporate website template combining authoritative dark purple typography with modular service blocks.',
    technologies: ['WordPress', 'Elementor Pro', 'Custom CSS', 'JS'],
    image: '/src/assets/images/project_corporate_1795173175671.jpg',
    liveUrl: '#',
    isEditableExample: true,
    previewPalette: {
      bg: '#F7F5FC',
      primary: '#1E103C',
      accent: '#2E1065',
      headline: 'Strategic Digital Foundations for Growth',
      subheadline: 'Clean enterprise grid architecture with crisp service columns and executive clarity.',
      ctaText: 'Partner With Us',
    },
    highlights: [
      'Modular multi-column layout built for clear service scanning',
      'Custom CSS styling for cohesive brand color hierarchy',
      'Editable copy, metrics, and external project URL',
    ],
  },
  {
    id: 'creative-landing-page',
    title: 'Creative Landing Page',
    category: 'Studio Campaign Concept · Editable Example',
    description:
      'A sleek custom-coded landing page blending crisp white whitespace, dark purple accents, smooth scroll reveals, and interactive feature cards.',
    technologies: ['HTML5', 'CSS3', 'Custom JS', 'Animations'],
    image: '/src/assets/images/project_landing_1795173175256.jpg',
    liveUrl: '#',
    isEditableExample: true,
    previewPalette: {
      bg: '#FFFFFF',
      primary: '#1E103C',
      accent: '#4C1D95',
      headline: 'Crafting Memorable Digital Launches',
      subheadline: 'Custom-coded interactive layout with lightweight motion and high-contrast focal CTAs.',
      ctaText: 'See Features',
    },
    highlights: [
      'Built from scratch with semantic HTML and custom CSS motion',
      'Interactive feature switching and responsive grid flow',
      'Editable preview showcase for custom-coded work',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'Understanding the project requirements, target audience, and goals.',
    accent: 'bg-[#EDE9FE]',
  },
  {
    number: '02',
    title: 'Design & Structure',
    description: 'Planning the layout, colors, typography, and user experience.',
    accent: 'bg-[#F3F0FF]',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building the website using HTML, CSS, JavaScript, or WordPress.',
    accent: 'bg-[#EDE9FE]',
  },
  {
    number: '04',
    title: 'Testing & Optimization',
    description: 'Checking responsiveness, functionality, performance, and usability.',
    accent: 'bg-[#F3F0FF]',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Delivering a polished, professional website ready for visitors.',
    accent: 'bg-[#EDE9FE]',
  },
];

export const REASONS_TO_WORK = [
  {
    title: '3 Years of Development Experience',
    description:
      'Practical hands-on experience building responsive websites across custom code and WordPress ecosystems.',
  },
  {
    title: 'Creative and Modern Designs',
    description:
      'Clean 2026 visual direction with crisp white space, dark purple depth, and thoughtful typography.',
  },
  {
    title: 'Responsive and User-Friendly Websites',
    description:
      'Every layout is structured for smooth navigation and legibility across desktop, tablet, and mobile screens.',
  },
  {
    title: 'Custom Coding and WordPress Expertise',
    description:
      'Flexibility to build websites completely from scratch or craft tailored WordPress & Elementor Pro solutions.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What type of websites do you develop?',
    answer:
      'I build personal portfolios, business and corporate websites, landing pages, service-based websites, and e-commerce storefront layouts tailored to each brand.',
  },
  {
    id: 'faq-2',
    question: 'Do you build websites from scratch?',
    answer:
      'Yes. I enjoy writing clean HTML5, CSS3, and JavaScript from scratch when a project needs custom layout freedom, lightweight speed, and unique interactions.',
  },
  {
    id: 'faq-3',
    question: 'Do you work with WordPress and Elementor?',
    answer:
      'Yes, I specialize in WordPress alongside Elementor and Elementor Pro, pairing visual page building with Custom CSS and Custom JavaScript for polished results.',
  },
  {
    id: 'faq-4',
    question: 'Are your websites mobile responsive?',
    answer:
      'Every website I build is designed and tested to adapt cleanly across mobile phones, tablets, laptops, and large desktop monitors.',
  },
  {
    id: 'faq-5',
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. I can refresh outdated layouts, improve mobile responsiveness, refine typography and colors, and customize existing WordPress or HTML sites.',
  },
  {
    id: 'faq-6',
    question: 'How can I start a project with you?',
    answer:
      'Use the contact form below, send an email to aleenaf393@gmail.com, or message me directly on WhatsApp at +923299931362 with your idea and timeline.',
  },
];
