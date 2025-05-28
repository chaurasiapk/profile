import {
  IUserData,
  IPersonalDetail,
  ISkill,
  IProject,
  IEducation,
  IExperience,
} from "../types";

// Sample profile image URLs
const profileImage =
  "https://res.cloudinary.com/dobci6t4h/image/upload/v1748429491/WhatsApp_Image_2025-05-23_at_15.03.42_jw8vjb.jpg";
const aboutImage =
  "https://res.cloudinary.com/dobci6t4h/image/upload/v1748428169/samples/cup-on-a-table.jpg";

// Sample project image URLs
const projectImages = [
  
  "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://res.cloudinary.com/dobci6t4h/image/upload/v1748428170/cld-sample.jpg",
  "https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://res.cloudinary.com/dobci6t4h/image/upload/v1748428162/samples/ecommerce/accessories-bag.jpg",
  "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

// User personal details
const personalDetails: IPersonalDetail[] = [
  { label: "Name", value: "Pradeep Chaurasia" },
  { label: "Phone", value: "+91 8546053372" },
  { label: "Experience", value: "3+ Years" },
  { label: "Degree", value: "BCA" },
  { label: "Email", value: "chaurasia.pk6@gmail.com" },
  { label: "Open to work", value: "Available for new opportunities" },
  { label: "Languages", value: "English, Hindi" },
];

// Skills data
const skills: ISkill[] = [
  // Technical Skills
  { name: "React", level: 95, category: "technical", type: "Frontend" },
  { name: "TypeScript", level: 90, category: "technical", type: "Frontend" },
  { name: "JavaScript", level: 85, category: "technical", type: "Frontend" },
  { name: "HTML/CSS", level: 85, category: "technical", type: "Frontend" },
  { name: "Tailwind CSS", level: 70, category: "technical", type: "Frontend" },
  { name: "BootStrap", level: 65, category: "technical", type: "Frontend" },
  { name: "Next.js", level: 50, category: "technical", type: "Frontend" },
  { name: "Github", level: 70, category: "technical", type: "Tools" },
  { name: "NPM", level: 70, category: "technical", type: "Tools" },

  // Soft Skills
  { name: "Communication", level: 85, category: "soft" },
  { name: "Teamwork", level: 90, category: "soft" },
  { name: "Problem Solving", level: 85, category: "soft" },
  { name: "Time Management", level: 80, category: "soft" },
  { name: "Adaptability", level: 85, category: "soft" },
];

// Projects data
const projects: IProject[] = [
  // {
  //   title: "E-commerce Platform",
  //   description:
  //     "A full-stack e-commerce application with payment integration, user authentication, and product management.",
  //   image: projectImages[0],
  //   technologies: ["React","TypeScript",  "Tailwind CSS", "Express"],
  //   category: "web",
  //   githubLink: "https://github.com",
  //   demoLink: "https://example.com",
  // },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and professional experience.",
    image: projectImages[5],
    technologies: ["React", "TypeScript", "Bootstrap", "Tailwind CSS"],
    category: "web",
    githubLink: "https://github.com/chaurasiapk/portfolio",
    demoLink: "/",
  },
   {
    title: "Compony Portfolio Project",
    description:
      "A responsive web application tamplate, that can be used for making company portfolio.",
    image: "https://res.cloudinary.com/dobci6t4h/image/upload/v1748428162/samples/imagecon-group.jpg",
    technologies: ["React", "SCSS", "HTML5", "JavaScript"],
    category: "web",
    githubLink: "https://github.com/chaurasiapk/compony_portfolio_project",
    demoLink: "https://chaurasiapk.github.io/compony_portfolio_project",
  },
  {
    title: "Task Management App",
    description:
      "A  todo application with add, view and remove tast functionality",
    image: projectImages[1],
    technologies: ["React", "TypeScript", "SCSS", "HTML5", "JavaScript"],
    category: "web",
    githubLink: "https://github.com/chaurasiapk/todo__app",
    demoLink: "https://chaurasiapk.github.io/todo__app",
  },
  {
    title: "Cosmetics Marketing Page",
    description:
      "A responsive web application tamplate for a beauty products, that can be used for beauty products store.",
    image: projectImages[2],
    technologies: ["React", "SCSS", "HTML5", "JavaScript"],
    category: "web",
    githubLink: "https://github.com/chaurasiapk/cosmetics_marketing_page",
    demoLink: "https://chaurasiapk.github.io/cosmetics_marketing_page",
  },
 
  {
    title: "Your Swag",
    description:
      "A responsive web application tamplate for a clothing store, that can be used for e-commerce.",
    image: projectImages[4],
    technologies: ["React", "SCSS", "HTML5", "JavaScript"],
    category: "web",
    githubLink: "https://github.com/chaurasiapk/clone_your_swag",
    demoLink: "https://chaurasiapk.github.io/clone_your_swag",
  },
  
];

// Education data
const education: IEducation[] = [
  {
    institution: "Uttaranchal University",
    degree: "Bachelor of Computer Applications (BCA)",
    description:
      "Comprehensive program covering software development, database management, and web technologies.",
    startYear: "2023",
    endYear: "Present",
    location: "Dehradun, India",
    // gpa: '3.9/4.0',
    achievements: [
      // 'Graduated with Honors',
      // 'Published research paper on "Efficient Web Rendering Techniques"',
      // 'Teaching Assistant for Web Development course',
    ],
  },
  {
    institution: "Board of Technical Education, Uttar Pradesh",
    degree: "Diploma in Computer Science & Engg.",
    description:
      "Foundations in computer science, engineering principles, and software development methodologies.",
    startYear: "2010",
    endYear: "2013",
    location: "Bulandshahr, India",
    gpa: "3.0/4.0",
    achievements: [
      "Graduated with 75% overall marks",
      "Gained proficiency in C, C++, Java, Visual Basic, and Data Structures",
      "Developed a Library Management Tool using Visual Basic as part of a major project",
    ],
  },
];

// Experience data
const experience: IExperience[] = [
  {
    company: "Freelance",
    position: "Web Developer",
    description:
      "Available to provide web development services to the clients, including startups and small businesses.",
    startDate: "May 2025",
    endDate: "Present",
    location: "Remote",
    employmentType: "Freelance",
    responsibilities: [
      "Designed and developed responsive websites and web applications",
      "Provide web application maintenance and support",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "HTML/CSS",
      "SCSS",
    ],
  },
  {
    company: "Compliance Innovations Pvt Ltd",
    position: "Frontend Developer",
    description:
      "Contributed to the development of Compliance Innovations Pvt Ltd’s application suite, enhancing cross-platform compatibility and optimizing user experience across web and mobile platforms.",
    startDate: "Jun 2022",
    endDate: "May 2025",
    location: "Remote",
    employmentType: "Full-time",
    responsibilities: [
      "Developed new features for Compliance Innovations Pvt Ltd’s web applications using React and TypeScript",
      "Optimized application performance and load times",
      "Fixed critical bugs and improved system stability",
      "Participated in code reviews and mentored junior developers",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "HTML/CSS",
      "SCSS",
    ],
  },
];

// Combined user data
export const userData: IUserData = {
  name: "Pradeep Chaurasia",
  title: "Front-end Developer",
  bio: "Passionate about creating elegant, user-friendly web applications with modern web technologies.",
  email: "chaurasia.pk6@gmail.com",
  phone: "+91 8546053372",
  location: "Gorakhpur, India",
  profileImage,
  aboutImage,
  aboutHeadline:
    "A passionate front-end web developer with 3+ years of experience",
  aboutDescription:
    "I’m a frontend developer passionate about building efficient and user-friendly web applications. My core expertise is in React and TypeScript, and I take pride in writing clean, maintainable code with a strong focus on component performance. With experience in modern tools like Recoil and Tailwind CSS, I enjoy solving complex UI challenges, ensuring seamless collaboration with teams to deliver high-quality solutions.",
  // aboutDescription: 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. I\'ve worked with a range of clients from startups to large corporations across multiple industries.',
  personalDetails,
  skills,
  projects,
  education,
  experience,
};
