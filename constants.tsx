
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'connectup',
    title: 'ConnectUp',
    category: 'Networking / Fintech',
    description: 'A strategic ecosystem bridging the gap between visionary founders and global investors to foster innovation and streamline capital flow.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1600',
    tags: ['React', 'Founders', 'Investment', 'Networking'],
    link: 'https://copy-of-copy-of-connectup-234021259012.us-west1.run.app/'
  },
  {
    id: 'hovapay',
    title: 'Hovapay',
    category: 'SaaS / Interface Design',
    description: 'Modern software ecosystem focusing on streamlined workflows and user-centric productivity tools.',
    imageUrl: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&q=80&w=1600',
    tags: ['Tailwind', 'Productivity', 'UX Architecture'],
    link: 'https://honeydew-toad-672060.hostingersite.com/'
  },
  {
    id: 'myproteiner',
    title: 'MyProteiner',
    category: 'E-Commerce / Health',
    description: 'A robust fitness and nutrition platform built to scale high-performance supplement sales and community engagement.',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1600',
    tags: ['WooCommerce', 'Branding', 'SMM Integration'],
    link: 'https://myproteiner.com/'
  },
  {
    id: 'crackflow',
    title: 'Crackflow',
    category: 'Creative Agency / Portfolio',
    description: 'A high-fidelity digital showcase for creative excellence, featuring smooth motion and minimal aesthetics.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    tags: ['GSAP', 'Agency', 'High-Fidelity'],
    link: 'https://crackflow.hostingersite.com/'
  },
  {
    id: 'queuereceipts',
    title: 'Queue Receipts',
    category: 'Fintech / RetailTech',
    description: 'A modern digital receipting solution designed to bridge the gap between physical retail and digital record keeping.',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1600',
    tags: ['SaaS', 'Digital Receipts', 'Retail'],
    link: 'https://queuereceipts.co.uk/'
  }
];

export const SERVICES = [
  {
    title: 'Web Development',
    desc: 'I specialize in building modern, responsive websites and web applications using technologies like HTML, CSS, JavaScript, and React. My focus is on creating seamless user experiences, clean interfaces, and optimized code.',
    icon: '01'
  },
  {
    title: 'UI/UX Design',
    desc: 'Creating user-friendly digital experiences that engage and delight users. My UI/UX design services include custom designs that are visually appealing, intuitive, and optimized for performance.',
    icon: '02'
  },
  {
    title: 'SEO (Search Engine Optimization)',
    desc: 'I apply core SEO principles to help websites rank higher and perform better on search engines. This includes optimizing page structure, metadata, and performance.',
    icon: '03'
  },
  {
    title: 'Google AdSense',
    desc: 'I help maximize revenue through strategic Google AdSense integration. This involves optimizing ad placement, improving fill rates, and ensuring policy compliance for sustainable monetization.',
    icon: '04'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Boluwatife',
    role: 'CEO of MyProteiner',
    text: "Daniel's designs brought our vision to life. His attention to detail and creativity are unmatched!"
  },
  {
    name: 'Emily Carter',
    role: 'Creative Lead at mTech Studios',
    text: "Working with Daniel was seamless. He truly understood our needs and delivered beyond expectations!"
  },
  {
    name: 'Mark Stevenson',
    role: 'Lead of Arkle',
    text: "A true professional with an incredible talent for design. Highly recommended!"
  }
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript / React', level: 95, category: 'frontend' },
  { name: 'HTML / CSS', level: 98, category: 'frontend' },
  { name: 'PHP / MySQL', level: 90, category: 'backend' },
  { name: 'UI/UX Design', level: 92, category: 'design' },
  { name: 'SEO Optimization', level: 85, category: 'tools' },
  { name: 'Project Management', level: 88, category: 'tools' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Sleekabyte UK',
    role: 'Remote Worker',
    period: '2025',
    description: 'Collaborated with international teams to design and deploy custom WordPress websites for clients in tech. Translated Figma designs into responsive, cross-browser compatible front-end code.'
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: '2020 — 2024',
    description: 'Specializing in creating responsive, user-friendly websites and web applications. My work involves using modern front-end technologies like React to build seamless interfaces.'
  }
];

export const DANIEL_CONTEXT = `
You are Daniel Samuel's AI assistant. Daniel is a creative Web Developer and Frontend Engineer with 5+ years of experience in graphic design and web development. 
His approach blends artistic flair with functionality.
Projects in his portfolio include ConnectUp, Hovapay, MyProteiner, Crackflow, and Queue Receipts.
Currently working remotely at Sleekabyte UK.
His motto: "Every design tells a story, and every story deserves to be told beautifully."
Provide info about his works and services (Web Development, UI/UX, SEO, and Google AdSense).
Socials:
- Instagram: @__iamclassic
- TikTok: @iamclassicway
- LinkedIn: Daniel Samuel
`;
