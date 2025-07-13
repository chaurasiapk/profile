/**
 * Portfolio Data Configuration
 *
 * This file contains all the data and TypeScript interfaces for the portfolio application.
 * It includes comprehensive type definitions and structured data for:
 * - Personal information and contact details
 * - Hero section content and interactive elements
 * - About section with highlights and quotes
 * - Skills categorization and proficiency levels
 * - Project showcase with technologies and links
 * - Education timeline and certifications
 * - Professional experience and achievements
 * - Contact information and social links
 * - Footer content and navigation
 *
 * Features:
 * - Type-safe data structure with comprehensive interfaces
 * - Centralized data management for easy updates
 * - Structured content organization
 * - Extensible design for future additions
 * - Consistent data format across all sections
 */

/**
 * Main portfolio data interface
 * Defines the complete structure of all portfolio sections
 */
export interface PortfolioData {
  personal: PersonalInfo;
  hero: HeroData;
  about: AboutData;
  skills: SkillsData;
  projects: ProjectsData;
  education: EducationData;
  experience: ExperienceData;
  contact: ContactData;
  footer: FooterData;
}

/**
 * Personal information interface
 * Contains basic personal and contact details
 */
export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
  resume: string;
}

/**
 * Hero section data interface
 * Contains content for the main landing section including interactive elements
 */
export interface HeroData {
  greeting: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  codeEditor: {
    fileName: string;
    code: string[];
  };
  colorPalette: string[];
  floatingElements: Array<{
    text: string;
    bgColor: string;
    emoji?: string;
  }>;
  socialLinks: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
}

/**
 * About section data interface
 * Contains personal description, highlights, and motivational quotes
 */
export interface AboutData {
  title: string;
  image: string;
  description: string;
  highlights: string[];
  quotes: Array<{
    text: string;
    author: string;
  }>;
}

/**
 * Skill category interface
 * Defines structure for skill filtering categories
 */
export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
}

/**
 * Skills section data interface
 * Contains skill categories and individual skill definitions
 */
export interface SkillsData {
  title: string;
  skillCategories: SkillCategory[];
  skills: Array<{
    name: string;
    level: number;
    category: string;
    color: string; // Theme color for the skill/tool
  }>;
}

/**
 * Individual project interface
 * Defines structure for project showcase items
 */
export interface Project {
  title: string;
  description: string;
  images: string[];
  github: string;
  demo: string;
  technologies?: string[];
}

/**
 * Projects section data interface
 * Contains different types of projects for showcase
 */
export interface ProjectsData {
  title: string;
  mainProjects: Project[];
  creativeCodingProjects: Project[];
}

/**
 * Education item interface
 * Defines structure for individual education entries
 */
export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  grade: string;
}

/**
 * Education section data interface
 * Contains academic background and learning statistics
 */
export interface EducationData {
  title: string;
  education: EducationItem[];
  certifications: string[];
  learningStats: {
    courses: number;
    challenges: number;
  };
}

/**
 * Experience item interface
 * Defines structure for individual work experience entries
 */
export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

/**
 * Freelance project interface
 * Defines structure for freelance work entries
 */
export interface FreelanceProject {
  title: string;
  client: string;
  period: string;
  description: string;
}

/**
 * Experience section data interface
 * Contains professional experience and career highlights
 */
export interface ExperienceData {
  title: string;
  experiences: ExperienceItem[];
  freelanceProjects: FreelanceProject[];
  careerHighlights: {
    yearsOfExperience: string;
    projectsCompleted: string;
    githubStars: string;
    openSourceContributions: string;
  };
}

/**
 * Contact section data interface
 * Contains contact information and social links
 */
export interface ContactData {
  title: string;
  subtitle: string;
  description: string;
  contactInfo: {
    email: string;
    phone: string;
    location: string;
  };
  socialLinks: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
}

/**
 * Footer section data interface
 * Contains footer content, quick links, and additional information
 */
export interface FooterData {
  brand: {
    name: string;
    description: string;
  };
  quickLinks: Array<{
    name: string;
    href: string;
  }>;
  contactInfo: {
    email: string;
    phone: string;
    location: string;
  };
  socialLinks: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
  additionalInfo: string;
}

/**
 * Portfolio data configuration
 * Complete data structure for the portfolio application
 */
export const portfolioData: PortfolioData = {
  // Personal information
  personal: {
    name: 'Pradeep Chaurasia',
    title: 'Front-end Focused Full Stack Developer',
    subtitle: 'FRONT-END FOCUSED FULL STACK DEVELOPER',
    location: 'Bangalore, India',
    email: 'chaurasia.pk6@gmail.com',
    phone: '+91 85460 53372',
    github: 'https://github.com/chaurasiapk',
    linkedin: 'https://www.linkedin.com/in/pradeepchaurasia93/',
    twitter: '#',
    website: 'https://chaurasiapk.github.io/profile',
    resume:
      'https://docs.google.com/document/d/1A2nIt0ZAeT7pIVdSgMdnvIM0BByrUHuoeO__46fPr3I/edit?tab=t.0',
  },

  // Hero section content
  hero: {
    greeting: "Hello, I'm",
    name: 'Pradeep Chaurasia',
    title: 'Front-end Focused Full Stack Developer',
    subtitle: 'FRONT-END FOCUSED FULL STACK DEVELOPER',
    description: '',
    codeEditor: {
      fileName: 'usePerson.js',
      code: [
        'const usePerson = () => {',
        '  const [person, setPerson] = useState({',
        '    name: "Pradeep Chaurasia",',
        '    traits: ["FRONTEND", "FULLSTACK"],',
        '    age: new Date().getFullYear() - 1993,',
        '    location: "Bangalore, India",',
        '    skills: ["React", "TypeScript", "Node.js"]',
        '  });',
        '',
        '  return { person, setPerson };',
        '};',
      ],
    },
    colorPalette: [
      'bg-blue-500',
      'bg-blue-600',
      'bg-blue-700',
      'bg-gray-800',
      'bg-purple-400',
    ],
    floatingElements: [
      { text: 'JS', bgColor: 'bg-blue-500' },
      { text: '⚛️', bgColor: 'bg-purple-500' },
      { text: '🎨', bgColor: 'bg-green-500' },
    ],
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/chaurasiapk', icon: 'Github' },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/pradeepchaurasia93/',
        icon: 'Linkedin',
      },
      {
        name: 'Email',
        url: 'mailto:chaurasia.pk6@gmail.com',
        icon: 'Email',
      },
    ],
  },

  // About section content
  about: {
    title: 'About Me',
    image:
      'https://res.cloudinary.com/dobci6t4h/image/upload/v1748429491/WhatsApp_Image_2025-05-23_at_15.03.42_jw8vjb.jpg',
    description:
      "Hi, I'm Pradeep — a frontend-focused full-stack developer with a passion for building clean, fast, and user-friendly web applications. I specialize in React.js, TypeScript, and modern UI/UX principles that bring ideas to life.",
    highlights: [
      "On the backend, I work with Node.js, Express.js, and RESTful APIs to create scalable and maintainable systems. I'm also skilled in state management (Recoil, Redux Toolkit), Git-based workflows, and performance optimization.",
      "I'm open to full-time and remote opportunities and ready to join immediately. Let's connect and build something impactful!",
    ],
    quotes: [
      {
        text: 'Strong team player with excellent communication skills.',
        author: 'Collaboration',
      },
      {
        text: 'Analytical thinker who loves tackling complex challenges.',
        author: 'Problem Solving',
      },
      {
        text: 'Committed to delivering high-quality work on time.',
        author: 'Dedication',
      },
      {
        text: 'Enthusiastic about learning and growing professionally.',
        author: 'Passion',
      },
    ],
  },

  // Skills section content
  skills: {
    title: 'My Skillsets',
    skillCategories: [
      { id: 'all', name: 'All Skills', icon: 'Zap' },
      { id: 'frontend', name: 'Frontend', icon: 'Code' },
      { id: 'backend', name: 'Backend', icon: 'Database' },
      { id: 'database', name: 'Database', icon: 'Database' },
      { id: 'tools', name: 'Tools', icon: 'tools' },
      { id: 'other', name: 'Other', icon: 'Globe' },
    ],
    skills: [
      { name: 'React', level: 90, category: 'frontend', color: 'bg-cyan-500' },
      {
        name: 'TypeScript',
        level: 90,
        category: 'frontend',
        color: 'bg-blue-600',
      },
      {
        name: 'JavaScript',
        level: 90,
        category: 'frontend',
        color: 'bg-yellow-400',
      },
      {
        name: 'HTML5',
        level: 95,
        category: 'frontend',
        color: 'bg-orange-500',
      },
      { name: 'CSS3', level: 95, category: 'frontend', color: 'bg-blue-400' },
      {
        name: 'Next.js',
        level: 70,
        category: 'frontend',
        color: 'bg-gray-900',
      },
      {
        name: 'Tailwind CSS',
        level: 80,
        category: 'frontend',
        color: 'bg-teal-400',
      },
      {
        name: 'SCSS/SASS',
        level: 95,
        category: 'frontend',
        color: 'bg-pink-400',
      },
      {
        name: 'Node.js',
        level: 70,
        category: 'backend',
        color: 'bg-green-600',
      },
      {
        name: 'Express.js',
        level: 70,
        category: 'backend',
        color: 'bg-gray-800',
      },
      {
        name: 'Rest Api',
        level: 70,
        category: 'backend',
        color: 'bg-indigo-500',
      },
      {
        name: 'MongoDB',
        level: 60,
        category: 'database',
        color: 'bg-green-500',
      },
      { name: 'Github', level: 70, category: 'tools', color: 'bg-gray-700' },
      { name: 'VS Code', level: 90, category: 'tools', color: 'bg-blue-500' },
      { name: 'Cursor', level: 90, category: 'tools', color: 'bg-violet-500' },
      { name: 'Figma', level: 70, category: 'other', color: 'bg-pink-500' },
      {
        name: 'WebAuthn',
        level: 70,
        category: 'other',
        color: 'bg-orange-400',
      },
      {
        name: 'WebSockets',
        level: 70,
        category: 'other',
        color: 'bg-green-400',
      },
    ],
  },

  // Projects section content
  projects: {
    title: 'Projects',
    mainProjects: [],
    creativeCodingProjects: [
      {
        title: 'ShopHub – A Modern E-commerce Page',
        description:
          'ShopHub is a frontend prototype for an upcoming e-commerce platform',
        images: [
          'https://raw.githubusercontent.com/chaurasiapk/shop-hub/main/screenshots/home.png',
        ],
        github: 'https://github.com/chaurasiapk/shop-hub',
        demo: 'https://shop-hub-nine.vercel.app',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Vite'],
      },
      {
        title: 'ShortLink - A URL Shortener!',
        description:
          'Easily create, share, and manage short links with a beautiful, responsive UI.',
        images: [
          'https://raw.githubusercontent.com/chaurasiapk/short-link/main/screenshots/home.png',
        ],
        github: 'https://github.com/chaurasiapk/short-link',
        demo: 'https://short-link-ecru.vercel.app',
        technologies: ['Node', 'Express', 'MongoDB', 'EJS', 'Vercel'],
      },
      {
        title: 'Portfolio Page',
        description:
          'Showcasing my skills, projects, and professional journey.',
        images: [],
        github: 'https://github.com/chaurasiapk/profile',
        demo: 'https://chaurasiapk.github.io/profile',
        technologies: [
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Vite',
          'GitHub Pages',
        ],
      },
      {
        title: 'd/code - Compony Portfolio Page',
        description:
          'This project is a modern, responsive landing page built with React',
        images: [
          'https://raw.githubusercontent.com/chaurasiapk/compony_portfolio_project/master/sceenshorts/hero.png',
        ],
        github: 'https://github.com/chaurasiapk/compony_portfolio_project',
        demo: 'https://chaurasiapk.github.io/compony_portfolio_project',
        technologies: [
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Vite',
          'GitHub Pages',
        ],
      },
      {
        title: 'Cosmetics Marketing Page',
        description:
          'This project was a deep dive into advanced frontend animation and modern UI/UX.',
        images: [
          'https://raw.githubusercontent.com/chaurasiapk/cosmetics_marketing_page/main/screenshots/screenshot.png',
        ],
        github: 'https://github.com/chaurasiapk/cosmetics_marketing_page',
        demo: 'https://chaurasiapk.github.io/cosmetics_marketing_page',
        technologies: [
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Vite',
          'GitHub Pages',
        ],
      },
    ],
  },

  // Education section content
  education: {
    title: 'Education',
    education: [
      {
        degree: 'Bachelor of Computer Applications',
        institution: 'Uttaranchel University',
        location: 'Dehradoon, India',
        period: '2023 - Present',
        description:
          'Focused on computer science fundamentals, programming languages, and software development methodologies.',
        grade: '',
      },
      {
        degree: 'Diploma in Computer Science & Engg.',
        institution: 'Board of Technical Education',
        location: 'Uttar Pradesh, India',
        period: '2010 - 2013',
        description:
          'Specialized in Mathematics and Computer Science with excellent academic performance.',
        grade: 'Percentage: 76%',
      },
    ],
    certifications: ['AI Tools Workshop – Be10x: https://shorturl.at/oBf7n'],
    learningStats: {
      courses: 10,
      challenges: 20,
    },
  },

  // Experience section content
  experience: {
    title: 'Experience',
    experiences: [
      {
        title: 'Frontend-Focused Full Stack Developer',
        company: 'Freelance',
        location: 'Bangalore, India',
        period: 'May 2025 – Present',
        type: 'Full-time',
        description:
          'Developing full-stack web applications with a focus on frontend performance and backend functionality. Built responsive user interfaces using React and implemented RESTful APIs with Node.js. Integrated MongoDB for data persistence and handled CRUD operations across various modules.',
        achievements: [
          'Created and consumed REST APIs for multiple features using Node.js and Express',
          'Implemented end-to-end CRUD operations with MongoDB integration',
          'Optimized frontend performance and responsiveness using React and TypeScript',
          'Refactored components for better reusability and reduced code duplication',
        ],
        technologies: [
          'React',
          'TypeScript',
          'Node.js',
          'Express.js',
          'Rest Api',
          'Vercel',
        ],
      },
      {
        title: 'Frontend Developer',
        company: 'Compliance Innovations',
        location: 'Bangalore, India',
        period: 'Jun 2022 - May 2025',
        type: 'Full-time',
        description:
          'Developed and maintained frontend applications and UI components using React.js with focus on user experience.',
        achievements: [
          'Built responsive web applications serving 1M+ users',
          'Implemented real-time payment tracking features',
          'Collaborated with design team to improve UI/UX',
          'Reduced page load time by 50% through optimization',
        ],
        technologies: [
          'React',
          'TypeScript',
          'JavaScript',
          'CSS3',
          'Redux',
          'Recoil',
        ],
      },
    ],
    freelanceProjects: [
      {
        title: 'E-commerce Platform UI',
        client: '',
        period: 'Jun 2025',
        description: 'Built a e-commerce ui solution',
      },
      {
        title: 'Portfolio Website',
        client: '',
        period: 'May 2025',
        description: 'Designed and developed a modern portfolio website',
      },
    ],
    careerHighlights: {
      yearsOfExperience: '3+',
      projectsCompleted: '10+',
      githubStars: '',
      openSourceContributions: '',
    },
  },

  // Contact section content
  contact: {
    title: 'Get In Touch',
    subtitle: 'Thank You',
    description: 'Do You Have Any Queries?',
    contactInfo: {
      email: 'chaurasia.pk6@gmail.com',
      phone: '+91 85460 53372',
      location: 'Bangalore, India',
    },
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/chaurasiapk', icon: 'Github' },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/pradeepchaurasia93',
        icon: 'Linkedin',
      },
    ],
  },

  // Footer section content
  footer: {
    brand: {
      name: 'Anurag Hazra',
      description:
        'Frontend focused full stack developer passionate about creating beautiful, functional, and user-friendly applications. Always learning and exploring new technologies.',
    },
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    contactInfo: {
      email: 'anurag@example.com',
      phone: '+91 98765 43210',
      location: 'Bangalore, India',
    },
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
      { name: 'Twitter', url: 'https://twitter.com', icon: 'Twitter' },
      { name: 'Email', url: 'mailto:anurag@example.com', icon: 'Mail' },
    ],
    additionalInfo:
      'This portfolio showcases my journey as a developer. Feel free to explore my projects and get in touch for collaborations!',
  },
};
